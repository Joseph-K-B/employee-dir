import { useUser } from "../../context/UserCtx";
import useForm from "../../hooks/useForm";


function ProfileForm({onSubmit}) {
  const { user } = useUser();
  const {formState, handleFormChange, formError, setFormError} = useForm({
    name: '',
    email: user.email,
    bio: '',
    birthday: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {name, bio, birthday} = formState;
    // if(!email || !name || !bio || !birthday) {
    //   throw new Error('Please complete form')
    // }
    try {
      await onSubmit(name, user.email, bio, birthday);
      console.log(email)
    } catch (err) {
      setFormError(err.message);
    }
  }

  console.log(formState);
  // console.log(getProfile())

  return(
    <>
      <form onSubmit={handleSubmit}>
        <h3>{user.email}</h3>
        <label htmlFor="name">Name:</label>
        <input 
          id='name'
          name="name"
          value={formState.name}
          onChange={handleFormChange}
          />
        <label htmlFor="DOB">D.O.B:</label>
        <input 
          id = 'DOB' 
          type='date'
          name="birthday"
          value={formState.birthday}
          onChange={handleFormChange}
        />
        <label htmlFor="bio">Bio:</label>
        <textarea 
          id='bio'
          name="bio"
          value={formState.bio}
          onChange={handleFormChange}
        />
        <button type='submit'>{user.name ? 'Edit' : 'Create'}</button>
        {formError && <p>{formError}</p>}
      </form>
    </>
  )
}

export default ProfileForm;