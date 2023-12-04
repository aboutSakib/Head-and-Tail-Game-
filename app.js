function tossCoin() {
  const result = Math.random() < 0.5 ? "Heads" : "Tails";
  document.getElementById("coin").innerText = result;
  document.getElementById("result-box").innerText = "Result: " + result;
}
