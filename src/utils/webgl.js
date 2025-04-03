import * as THREE from 'three';

/**
 * Initialize WebGL background with particles
 * @param {string} containerId - ID of the container element
 * @param {Object} options - Configuration options
 */
export const initWebGLBackground = (containerId = 'app', options = {}) => {
  // Default options
  const config = {
    particleCount: 1000,
    particleSize: 2,
    particleColor: 0x8a85ff,
    backgroundColor: 0x050505,
    connectionDistance: 150,
    connectionOpacity: 0.15,
    interactive: true,
    ...options
  };
  
  // Get container element
  const container = document.getElementById(containerId);
  if (!container) return null;
  
  // Setup scene, camera, and renderer
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(config.backgroundColor);
  
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    1,
    10000
  );
  camera.position.z = 1000;
  
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  
  // Create canvas element
  const canvas = renderer.domElement;
  canvas.classList.add('webgl');
  container.appendChild(canvas);
  
  // Create particles
  const particles = [];
  const particleGeometry = new THREE.BufferGeometry();
  const particleMaterial = new THREE.PointsMaterial({
    color: config.particleColor,
    size: config.particleSize,
    transparent: true,
    opacity: 0.8,
    sizeAttenuation: true
  });
  
  const positions = new Float32Array(config.particleCount * 3);
  const velocities = [];
  
  for (let i = 0; i < config.particleCount; i++) {
    const i3 = i * 3;
    positions[i3] = Math.random() * 2000 - 1000;
    positions[i3 + 1] = Math.random() * 2000 - 1000;
    positions[i3 + 2] = Math.random() * 2000 - 1000;
    
    velocities.push({
      x: Math.random() * 2 - 1,
      y: Math.random() * 2 - 1,
      z: Math.random() * 2 - 1
    });
  }
  
  particleGeometry.setAttribute(
    'position',
    new THREE.BufferAttribute(positions, 3)
  );
  
  const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
  scene.add(particleSystem);
  
  // Lines for connections between particles
  const lineMaterial = new THREE.LineBasicMaterial({
    color: config.particleColor,
    transparent: true,
    opacity: config.connectionOpacity
  });
  const lineGeometry = new THREE.BufferGeometry();
  const line = new THREE.LineSegments(lineGeometry, lineMaterial);
  scene.add(line);
  
  // Mouse interaction
  const mouse = new THREE.Vector2();
  let mouseX = 0;
  let mouseY = 0;
  
  // Handle window resize
  const handleResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  };
  
  // Handle mouse movement
  const handleMouseMove = (event) => {
    if (!config.interactive) return;
    
    mouseX = (event.clientX - window.innerWidth / 2) * 0.5;
    mouseY = (event.clientY - window.innerHeight / 2) * 0.5;
    
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  };
  
  // Animation loop
  const animate = () => {
    requestAnimationFrame(animate);
    
    // Update particle positions
    const positions = particleGeometry.attributes.position.array;
    const linePositions = [];
    
    for (let i = 0; i < config.particleCount; i++) {
      const i3 = i * 3;
      
      // Update position based on velocity
      positions[i3] += velocities[i].x;
      positions[i3 + 1] += velocities[i].y;
      positions[i3 + 2] += velocities[i].z;
      
      // Boundary check and bounce
      if (Math.abs(positions[i3]) > 1000) velocities[i].x *= -1;
      if (Math.abs(positions[i3 + 1]) > 1000) velocities[i].y *= -1;
      if (Math.abs(positions[i3 + 2]) > 1000) velocities[i].z *= -1;
      
      // Connect nearby particles with lines
      for (let j = i + 1; j < config.particleCount; j++) {
        const j3 = j * 3;
        
        const dx = positions[i3] - positions[j3];
        const dy = positions[i3 + 1] - positions[j3 + 1];
        const dz = positions[i3 + 2] - positions[j3 + 2];
        
        const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
        
        if (distance < config.connectionDistance) {
          linePositions.push(
            positions[i3], positions[i3 + 1], positions[i3 + 2],
            positions[j3], positions[j3 + 1], positions[j3 + 2]
          );
        }
      }
    }
    
    // Update positions and lines
    particleGeometry.attributes.position.needsUpdate = true;
    
    lineGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(linePositions, 3)
    );
    
    // Camera movement based on mouse position
    if (config.interactive) {
      camera.position.x += (mouseX - camera.position.x) * 0.05;
      camera.position.y += (-mouseY - camera.position.y) * 0.05;
      camera.lookAt(scene.position);
    }
    
    renderer.render(scene, camera);
  };
  
  // Add event listeners
  window.addEventListener('resize', handleResize);
  document.addEventListener('mousemove', handleMouseMove);
  
  // Start animation
  animate();
  
  // Return cleanup function
  return () => {
    window.removeEventListener('resize', handleResize);
    document.removeEventListener('mousemove', handleMouseMove);
    container.removeChild(canvas);
    renderer.dispose();
  };
};

export default {
  initWebGLBackground
};