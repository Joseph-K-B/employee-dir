
import { Link } from "react-router-dom";

const user = {
  email: 'izzie@dog.com',
  name: 'Izzie',
  DOB: '0/6/2015',
  bio: 'Izzie loves bones, long walks on the beach, and chasing squirrels'
}

function Profile() {
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