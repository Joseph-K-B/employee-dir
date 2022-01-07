import ProfileForm from "./ProfileForm"
import { render } from '@testing-library/react'
import { UserProvider } from "../../context/UserCtx"

jest.mock('../../context/UserCtx')


it('renders form for user to create/edit profile', () => {
  const {container} = render(
    <UserProvider>
      <ProfileForm />
    </UserProvider>
  )

  expect(container).toMatchSnapshot();
})