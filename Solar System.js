const earth = document.querySelector('.earth');
const moon = document.querySelector('.moon');

let earthAngle = 0;
let moonAngle = 0;

function animate() {
const earthRadius = 150;
const moonRadius = 40;

const earthX = earthRadius * Math.cos(earthAngle);
const earthY = earthRadius * Math.sin(earthAngle);

const moonX = moonRadius * Math.cos(moonAngle);
const moonY = moonRadius * Math.sin(moonAngle);

earth.style.transform = `translate(${earthX}px, ${earthY}px)`;
moon.style.transform = `translate(${moonX}px, ${moonY}px)`;

earthAngle += 0.005;
moonAngle += 0.02;

requestAnimationFrame(animate);
}

animate();
