// Smooth scrolling for navigation
/*document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 3D Effect - Simple Interactive Background
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('background-animation').appendChild(renderer.domElement);

const geometry = new THREE.SphereGeometry(15, 42, 42);
const material = new THREE.MeshBasicMaterial({ color: 0x1CB5E0, wireframe: true });
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

camera.position.z = 50;

function animate() {
    requestAnimationFrame(animate);
    sphere.rotation.x += 0.03;
    sphere.rotation.y += 0.03;
    renderer.render(scene, camera);
}

animate();

window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});
*/



// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 3D Effect - Simple Interactive Background
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('background-animation').appendChild(renderer.domElement);

const geometry = new THREE.SphereGeometry(15, 42, 42);
const material = new THREE.MeshBasicMaterial({ color: 0x1CB5E0, wireframe: true });
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

camera.position.z = 50;

function animate() {
    requestAnimationFrame(animate);
    sphere.rotation.x += 0.02;
    sphere.rotation.y += 0.02;
    renderer.render(scene, camera);
}

animate();

// Handle window resizing
window.addEventListener('resize', () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});
