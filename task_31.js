const idInterval = setInterval(logMessage, 1000, 1)
let n = 0
function logMessage(num) {
  console.log(`Message ${(num += n++)}`)
  if (n > 4) {
    clearInterval(idInterval)
  }
}
