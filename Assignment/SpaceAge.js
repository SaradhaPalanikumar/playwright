function age(planet, seconds) {
    var years = (seconds / 31556952);
    var OrbitPeriod;
    switch (planet) {
        case "Mercury":
            OrbitPeriod = 0.2408467;
            break;
        case "Venus":
            OrbitPeriod = 0.61519726;
            break;
        case "Earth":
            OrbitPeriod = 1.0;
            break;
        case "Mars":
            OrbitPeriod = 1.8808158;
            break;
        case "Jupiter":
            OrbitPeriod = 11.862615;
            break;
        case "Saturn":
            OrbitPeriod = 29.447498;
            break;
        case "Uranus":
            OrbitPeriod = 84.016846;
            break;
        case "Neptune":
            OrbitPeriod = 164.79132;
            break;
        default:
            console.log("not a planet");
    }
    return (years / OrbitPeriod);
}
var Age = age('Earth', 1000000000);
console.log("They are" + Age + "Earth years old");
