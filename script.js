let clickCount = 0;

function myAlert() {
  clickCount++;
  const parity = clickCount % 2 === 0 ? "even" : "odd";
  alert(`you have clicked the button ${clickCount} times (${clickCount} is ${parity})`);
}
