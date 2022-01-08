import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { UserProvider } from "../../context/UserCtx";

// beforeEach(() => {
//   // jest.mock('../../services/client.js'), () => {
//     // createClient(
//       process.env.REACT_APP_SUPABASE_URL = 123,
//       process.env.REACT_APP_SUPABASE_KEY = 456
//     // )
//   // }
// });


// const mockUser = {
//   id: 123,
//   email: 'izzie@dog.com'
// }

// it('renders form for user to create/edit profile', () => {
//   console.log(2 + 2)
//   const {container} = render (
//       <MemoryRouter>
//         <UserProvider value={{mockUser}}>
//           <Auth />
//         </UserProvider>
//       </MemoryRouter>
//     )
    
//     expect(container).toMatchSnapshot();
// })