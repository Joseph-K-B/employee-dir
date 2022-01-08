import { client } from './client';

function getUser() {
  return client.auth.user();
}

function getSession() {
  return client.auth.session();
}

async function signUpUser(email, password) {
  const { user, error } = await client.auth.signUp({ email, password });
  if (error) throw error;
  return user;
}

async function signInUser(email, password) {
  const { user, error } = await client.auth.signIn({ email, password });
  if (error) throw error;
  return user;
}

async function signOutUser() {
  return client.auth.signOut();
}

export {getUser, getSession, signUpUser, signInUser, signOutUser}