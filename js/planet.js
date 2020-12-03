let planets =["Mercury", "Venus","Earth","Mars","Jupiter","Saturn","Uranus","Neotune"];
console.log(planets);
planets.push(`Pluto`);
console.log(planets.length);

for(let i=0; i < planets.length;i++){
    console.log(i+0, planets[i]);
    output = `<li>${planets[i]}</li>`;
}
document.quarySelector(".list").innerHTML= output