const stdoutCallback = (data) => {
  console.log(data)
  let map = JSON.parse(data)

  display(map)
}
