export const newUser = (user) => {
  return $.ajax({
    method: "post",
    url: '/api/user',
    data: {user}
  })
}
export const logIn = (user) => {
  return $.ajax({
    method: "post",
    url: '/api/session',
    data: {user}
  })
}
export const logout = () => {
  return $.ajax({
    method: "delete",
    url: `/api/session`
  })
}