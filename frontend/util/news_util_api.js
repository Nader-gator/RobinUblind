const newsSubjectFetch = (subject) => {
  return $.ajax({
    method: "get",
    url: `https://newsapi.org/v2/everything?q=${subject}&pageSize=22&apiKey=27558331d5ff46548209fd60a90c6bdd`
  })
}

export default newsSubjectFetch