import { useUser } from "../../context/UserCtx";


function ProfileForm() {
  const { user } = useUser();
  return(
    <>
      <h1>{user.name ? 'Edit Profile' : 'Create Profile'}</h1>
      <form>
        <h3>{user.email}</h3>
        <label htmlFor="name">Name:</label>
        <input id='name'/>
        <label htmlFor="DOB">D.O.B:</label>
        <input id = 'DOB' type='date'/>
        <label htmlFor="bio">Bio:</label>
        <textarea id='bio'/>
        <button>{user.name ? 'Edit' : 'Create'}</button>
      </form>
    </>
  )
}

export default ProfileForm;