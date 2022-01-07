import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useUser } from "../../context/UserCtx";
import useForm from "../../hooks/useForm";
import css from './ProfileForm.css';


function ProfileForm({onSubmit}) {
  const [isActive, setActive] = useState(true);
  const [create, setCreate] = useState(true);
  const location = useLocation();
  const history = useHistory();
  const { user, setUser, profile } = useUser();
  const {formState, handleFormChange, formError, setFormError} = useForm({
    name: '',
    email: user.email,
    bio: '',
    birthday: '',
  });

  // console.log(location)

  useEffect(() => {
    if(user.name) {
      setCreate(false);
    }
  },[])

  console.log(formState)
          
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await onSubmit(formState);
      setProfile(formState)
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
  
  return(
    <>
      <form onSubmit={handleSubmit} className={css.profForm} autoComplete="true">
      <h1>{create ? 'Create Profile' : 'Edit Profile'}</h1>
        <h3>{user.email}</h3>
        <section className={css.profFormSect}>
          <label htmlFor="name">Name:</label>
          <input 
            id='name'
            name="name"
            value={formState.name}
            onChange={handleFormChange}
            />
        </section>
        <section className={css.profFormSect}>
          <label htmlFor="DOB">D.O.B:</label>
          {!create ?
          <>              
            <p onClick={handleToggle}>*{user.birthday}*</p>
            {displayDOBInput}
          </>
          : <> {displayDOBInput} </>
          }
        </section>
        <section className={css.profFormSect}>
          <label htmlFor="bio">Bio:</label>
          <textarea 
            id='bio'
            name="bio"
            value={formState.bio}
            onChange={handleFormChange}
          />
        </section>
        <button type='submit'>Submit</button>
        {formError && <p>{formError}</p>}
      </form>
      <button onClick={() => console.log('CLICK ON PROF FORM', 'ACTIVE USER', user,  'ACTIVE PROFILE', profile)}>Test</button>
  </>
  )
}


export default ProfileForm;