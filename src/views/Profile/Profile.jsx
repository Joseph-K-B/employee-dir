
import { Link } from "react-router-dom";
import { useUser } from "../../context/UserCtx";


function Profile() {
  const { user } = useUser();
  return (
    <>
    <section>
      <h1>{user.name}</h1>
      <h4>{user.email}</h4>
      <h6>{user.DOB}</h6>
      <p>{user.bio}</p>
      <Link to='/settings'>Edit</Link>
    </section>
    </>
  )
}

export default Profile;