const stdoutCallback = (data) => {
  console.timeEnd("runGo")

  display(JSON.parse(data))
}
