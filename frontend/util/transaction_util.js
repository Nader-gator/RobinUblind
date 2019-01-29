const todaysDate = () => {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //January is 0!
  var yyyy = today.getFullYear();

  if (dd < 10) {
    dd = '0' + dd;
  }

  if (mm < 10) {
    mm = '0' + mm;
  }

  return today = mm + '/' + dd + '/' + yyyy
}


export const getTransactions= (userId, date = todaysDate()) => {
  return $.ajax({
    method: "GET",
    url: `/api/user/${userId}/transaction`,
    data: {date}
  })
}

export const postTransaction = (userId,data, date = todaysDate()) => {
  return $.ajax({
    method: "POST",
    url: `/api/user/${userId}/transaction`,
    data: {
      data,
      date
  }
  })
}
