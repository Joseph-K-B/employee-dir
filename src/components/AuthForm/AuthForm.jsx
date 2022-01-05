
function AuthForm() {
  const register = false
  return (
    <form>
      <section>
        <label htmlFor="email">Email:</label>
        <input type='email' id='email'/>
      </section>
      <section>
        <label htmlFor="password">Password:</label>
        <input type='password' id='password'/>
      </section>
      <button>{register ? 'Sign up' : 'Sign In'}</button>
    </form>
  )
}

export default AuthForm;