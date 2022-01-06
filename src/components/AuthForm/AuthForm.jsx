import useForm from "../../hooks/useForm";

function AuthForm({ registerRequired = false, onSubmit }) {
  //Define params/args for use form hook
  const {formState, handleFormChange, formError, setFormError} = useForm({
    email: '',
    password: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formState;

    try {
      if(!email || password.length < 8)
        throw new Error('Please enter valid email and password greater than 8 characters'
        );
        await onSubmit(email, password);
    } catch (error) {
      setFormError(error.message)
    }
  };
  // const register = false
  return (
    <form onSubmit={handleSubmit}>
      <section>
        <label htmlFor="email">Email:</label>
        <input 
          type='email' 
          id='email'
          name='email'
          value={formState.email} 
          onChange={handleFormChange}/>
      </section>
      <section>
        <label htmlFor="password">Password:</label>
        <input 
          type='password' 
          id='password'
          name='password'
          value={formState.password} 
          onChange={handleFormChange}/>
      </section>
      <button type='submit'>
        {registerRequired ? 'Sign in' : 'Sign up' || loading && 'Processing'}
      </button>
      {formError && <p>{formError}</p>}
    </form>
  );
};

export default AuthForm;