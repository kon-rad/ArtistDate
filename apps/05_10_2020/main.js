


var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


var geometry = new THREE.BoxGeometry();
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( geometry, material );
// scene.add( cube );

// add IcosahedronGeometry

var icosahedronGeometry = new THREE.IcosahedronGeometry();
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var icosahedron = new THREE.Mesh( icosahedronGeometry, material );
scene.add( icosahedron );
// icosahedron.position.set(100, 100, 100);


camera.position.z = 5;


function animate() {
  requestAnimationFrame( animate );
  
  icosahedron.rotation.x += 0.01;
  icosahedron.rotation.y += 0.01;

  // demo cube
  // cube.rotation.x += 0.01;
  // cube.rotation.y += 0.01;

	renderer.render( scene, camera );
}
animate();

