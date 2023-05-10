import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Colors
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, Colors);

function Houses(prop) {
  const data = prop;
  const backgroundColors = [
    "rgba(54, 162, 235, 0.8)",
    "rgba(55, 206, 86, 0.8)",
    "rgba(255, 99, 132, 0.8)",
    "rgba(20, 50, 52, 0.8)",
    "rgba(153, 102, 255, 0.8)",
    "rgba(255, 159, 64, 0.8)",
    "rgba(199, 199, 0, 0.8)",
    "rgba(83, 102, 255, 0.8)",
    "rgba(40, 159, 64, 0.8)",
    "rgba(210, 100, 199, 0.8)",
    "rgba(78, 52, 199, 0.8)",
    "rgba(60, 0, 20, 0.8)",
    "rgba(252, 206, 86, 0.8)",
    "rgba(255, 50, 132, 0.8)",
    "rgba(85, 182, 192, 0.8)",
    "rgba(10, 120, 105, 0.8)",
    "rgba(255, 159, 65, 0.8)",
    "rgba(199, 199, 190, 0.8)",
    "rgba(83, 120, 255, 0.8)",
    "rgba(45, 160, 64, 0.8)",
    "rgba(203, 160, 199, 0.8)",
    "rgba(168, 50, 199, 0.8)",
    "rgba(180, 102, 199, 0.8)",
    "rgba(250, 50, 199, 0.8)",
    "rgba(20, 102, 199, 0.8)",
    "rgba(20, 50, 29, 0.8)"
  ];

  const borderColors = [
    "rgba(54, 162, 235, 1)",
    "rgba(55, 206, 86, 1)",
    "rgba(255, 99, 132, 1)",
    "rgba(20, 50, 52, 1)",
    "rgba(153, 102, 255, 1)",
    "rgba(255, 159, 64, 1)",
    "rgba(199, 199, 0, 1)",
    "rgba(83, 102, 255, 1)",
    "rgba(40, 159, 64, 1)",
    "rgba(210, 100, 199, 1)",
    "rgba(78, 52, 199, 1)",
    "rgba(60, 0, 20, 1)",
    "rgba(252, 206, 86, 1)",
    "rgba(255, 50, 132, 1)",
    "rgba(85, 182, 192, 1)",
    "rgba(10, 120, 105, 1)",
    "rgba(255, 159, 65, 1)",
    "rgba(199, 199, 190, 1)",
    "rgba(83, 120, 255, 1)",
    "rgba(45, 160, 64, 1)",
    "rgba(203, 160, 199, 1)",
    "rgba(168, 50, 199, 1)",
    "rgba(180, 102, 199, 1)",
    "rgba(250, 50, 199, 1)",
    "rgba(20, 102, 199, 1)",
    "rgba(20, 50, 29, 1)"
  ];

  // url for the Thrones API
  const renderChart = (keys, values) => {
    const donutChart = document.querySelector(".donut-chart");
  };
  const characterConditionCheck = function characterConditionCheck(family) {
    let fam = family.toString().toLowerCase();
    if (fam === "" || fam === "none" || fam === "unknown" || fam === "unkown")
      family = "Unknown";
    else if (fam === "house targaryen" || fam === "targaryan")
      family = "Targaryan";
    else if (
      fam === "house lannister" ||
      fam === "house lanister" ||
      fam === "lannister"
    )
      family = "Lannister";
    else if (fam === "house tyrell" || fam === "tyrell") family = "Tyrell";
    else if (fam === "house greyjoy" || fam === "greyjoy") family = "Greyjoy";
    else if (fam === "house baratheon" || fam === "baratheon")
      family = "Baratheon";
    return family;
  };

  let houseMap = new Map();
  for (const character of data.character.family) {
    const { family } = character;
    let fam = characterConditionCheck(family.toString());
    //console.log(typeof fam);
    if (houseMap.has(fam) === false) houseMap.set(fam, 1);
    else houseMap.set(fam, houseMap.get(fam) + 1);
  }
  //console.log(houseMap);
  let keys = [];
  let values = [];
  let i = 0;
  for (let [key, value] of houseMap) {
    keys[i] = key;
    values[i] = value;
    i = i + 1;
  }

  const chartData = {
    labels: keys,
    datasets: [
      {
        label: "Number of members",
        data: values,
        backgroundColor: backgroundColors,
        borderColor: borderColors,
        borderWidth: 1
      }
    ]
  };

  return (
    <main className="container">
      <h1>House Chart</h1>
      <div className="donut-chart">
        <Doughnut data={chartData} />
      </div>
    </main>
  );
}
export default Houses;
