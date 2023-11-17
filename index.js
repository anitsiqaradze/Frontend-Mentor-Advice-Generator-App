let adviceId = 0;
function getAdvice() {
  w3.getHttpObject("https://api.adviceslip.com/advice", function (data) {
    document.getElementById("advice").textContent = data.slip.advice;
  });
  adviceId++;
  document.getElementById("advice-id").textContent = adviceId;
}
