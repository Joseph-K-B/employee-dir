import { useUser } from "../../context/UserCtx"


function Home() {
  const {user} = useUser();

  return (
    <>
      <h1>Hello World</h1>
      <button onClick={() => console.log('CLICK ON PROF FORM', user)}>Test</button>
    </>
  )
}

export default Home;