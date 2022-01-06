import { useEffect, useState } from "react";
import { useUser } from "../../context/UserCtx";
import useForm from "../../hooks/useForm";
import { getProfile } from "../../services/profiles";
import css from './ProfileForm.css';


function ProfileForm({onSubmit}) {
  const [isActive, setActive] = useState(false);
  const { user, setUser } = useUser();
  const {formState, handleFormChange, formError, setFormError} = useForm({
    name: '',
    email: user.email,
    bio: '',
    birthday: '',
  });

  useEffect(() => {
    const fetchProfile = async () => {
      const userProfile = await getProfile();
      setUser(userProfile);
    }
    fetchProfile()
   }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await onSubmit(formState);
    } catch (err) {
      setFormError(err.message);
    }
  };

  const handleToggle = () => {
    setActive(!isActive);
  };

  const displayDOBInput =
    <input
      id='DOB'
      type='date'
      name="birthday"
      value={formState.birthday}
      onChange={handleFormChange}
      className={isActive ? css.show : css.hide}
    />
  
console.log(isActive)
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
          placeholder={user.name ? `${user.name}` : null}
          />
        <label htmlFor="DOB">D.O.B:</label>
        {user.name ?
        <>              
          <p onClick={handleToggle}>*{user.birthday}*</p>
          {displayDOBInput}
        </>
        : isActive === true && displayDOBInput        
        }
        <label htmlFor="bio">Bio:</label>
        <textarea 
          id='bio'
          name="bio"
          value={formState.bio}
          onChange={handleFormChange}
          placeholder={user.name ? `${user.bio}` : null}
        />
        <button type='submit'>{user.name ? 'Edit' : 'Create'}</button>
        {formError && <p>{formError}</p>}
      </form>
    </>
  )
}

export default ProfileForm;