let city1: any = {};
city1.name = "ГородN";
city1.population = 10000000;

let city2: any = {
    name: "ГородM",
    population: 1e6
};

function getName() { return this.name; }
city1.getName = getName;
city2.getName = getName;

function exportStr() { return "name=+{this.name}\npopulation=+{this.population}\n" }
city1.exportStr = exportStr;
city2.exportStr = exportStr;

function getObj() { return this; }

city1.getCity = getObj;
city2.getCity = getObj;
 
console.log(city1.exportStr());
console.log(city2.exportStr());
console.log(city1.getCity().getName());
console.log(city2.getCity().getName());