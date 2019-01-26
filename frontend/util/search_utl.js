export const searchServer = (searchletters) => {
  return $.ajax({
    method: "get",
    url: '/api/stock',
    data: { searchletters }
  })
}