const newsSubjectFetch = (subject) => {

  const today = () => {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();

    if (dd < 10) {
      dd = '0' + dd
    }

    if (mm < 10) {
      mm = '0' + mm
    }

    return today = yyyy + '-' + mm + '-' + (dd - 1);
  }

  const aMonthAgo = () => {
    var today = new Date();
    var dd = today.getDate() + 2;
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();

    if (dd < 10) {
      dd = '0' + dd
    }

    if (mm < 10) {
      mm = '0' + mm
    }

    if (mm === "01"){
      today = (yyyy - 1) + '-' + "12" + '-' + (dd);
    } else {
    today = yyyy + '-' + (mm - 1) + '-' + (dd);
    }
    return today
  }


  return $.ajax({
    method: "get",
    url: `https://newsapi.org/v2/everything?q=${subject}&pageSize=22&from=${aMonthAgo()}&to=${today()}&sortBy=popularity&language=en&apiKey=27558331d5ff46548209fd60a90c6bdd`
  })
}

export default newsSubjectFetch

