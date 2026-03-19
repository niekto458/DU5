function generate() {

  let directions = ["sever", "juh", "východ", "západ"];

  // náhodný smer
  let direction = directions[Math.floor(Math.random() * directions.length)];

  // náhodná vzdialenosť (100 – 9900, násobky 100)
  let distance = (Math.floor(Math.random() * 99) + 1) * 100;

  // výpis
  document.getElementById("result").innerText =
    "Choď na " + direction + " " + distance + " metrov.";
}
