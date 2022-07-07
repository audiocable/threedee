//create object renderer
var renderer = new THREE.WebGLRenderer();
//set size of renderer
renderer.setSize(window.innerWidth, window.innerHeight);
//add renderer to DOM
document.body.appendChild(renderer.domElement);
//create scene
var scene = new THREE.Scene();
//create camera
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//create geometry
var geometry = new THREE.BoxGeometry(1, 1, 1);
//create material
var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
//create mesh
var cube = new THREE.Mesh(geometry, material);
//add mesh to scene
scene.add(cube);
//set camera position
camera.position.z = 5;
//render scene
function render() {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
}
render();