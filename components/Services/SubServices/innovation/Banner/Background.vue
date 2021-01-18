<template>
  <div style="width: 100%; height: 100%; overflow: hidden;" id="canva"></div>
</template>

<script>
var scene, camera, renderer

// Plus this...
var container,
  HEIGHT,
  WIDTH,
  fieldOfView,
  aspectRatio,
  nearPlane,
  farPlane,
  stats,
  geometry,
  particleCount,
  i,
  h,
  color,
  size,
  materials = [],
  mouseX = 0,
  mouseY = 0,
  windowHalfX,
  windowHalfY,
  cameraZ,
  fogHex,
  fogDensity,
  parameters = {},
  parameterCount,
  particles

export default {
  data() {
    return {}
  },

  mounted() {
    this.init()
    this.animate()
  },
  methods: {
    init() {
      HEIGHT = window.innerHeight
      WIDTH = window.innerWidth
      windowHalfX = WIDTH / 2
      windowHalfY = HEIGHT / 2

      fieldOfView = 75
      aspectRatio = WIDTH / HEIGHT
      nearPlane = 3
      farPlane = 200

      cameraZ = farPlane / 3 /*	Try different values	*/
      fogHex = 0x000000 /* Play with color here.	*/
      fogDensity = 0.00033 /* Density	*/

      camera = new THREE.PerspectiveCamera(
        fieldOfView,
        aspectRatio,
        nearPlane,
        farPlane
      )
      camera.position.z = cameraZ

      scene = new THREE.Scene()
      scene.fog = new THREE.FogExp2(fogHex, fogDensity)

      container = document.createElement('div')
      var bod = document.querySelector('#canva')
      bod.appendChild(container)
      document.body.style.margin = 0
      document.body.style.overflow = 'hidden'

      geometry = new THREE.Geometry()

      particleCount = 30000 /* Whatever this means */

      for (i = 0; i < particleCount; i++) {
        var vertex = new THREE.Vector3()
        vertex.x = Math.random() * 2000 - 1000
        vertex.y = Math.random() * 2000 - 1000
        vertex.z = Math.random() * 2000 - 1000

        geometry.vertices.push(vertex)
      }

      /*	The tendency is to push it as hard as we can!	*/

      parameters = [
        [[1, 1, 0.5], 5],
        [[0.95, 1, 0.5], 4],
        [[0.9, 1, 0.5], 3],
        [[0.85, 1, 0.5], 2],
        [[0.8, 1, 0.5], 1]
      ]
      parameterCount = parameters.length

      for (i = 0; i < parameterCount; i++) {
        color = parameters[i][0]
        size = parameters[i][1]

        materials[i] = new THREE.PointCloudMaterial({
          size: size
        })

        particles = new THREE.PointCloud(geometry, materials[i])

        particles.rotation.x = Math.random() * 6
        particles.rotation.y = Math.random() * 6
        particles.rotation.z = Math.random() * 6

        scene.add(particles)
      }

      /*	Speed is key.	*/

      renderer = new THREE.WebGLRenderer() /*	Render particles.	*/
      renderer.setPixelRatio(window.devicePixelRatio) /*	Value 1recommended.	*/
      renderer.setSize(WIDTH, HEIGHT) /*	Full screen	*/

      container.appendChild(renderer.domElement) /* Other fancy options.	*/
      /* Event Listeners */

      window.addEventListener('resize', this.onWindowResize, false)
      document.addEventListener('mousemove', this.onDocumentMouseMove, false)
      document.addEventListener('touchstart', this.onDocumentTouchStart, false)
      document.addEventListener('touchmove', this.onDocumentTouchMove, false)
    },

    animate() {
      requestAnimationFrame(this.animate)
      this.render()
      // stats.update();
    },

    render() {
      var time = Date.now() * 0.00005

      camera.position.x += (mouseX - camera.position.x) * 0.05
      camera.position.y += (-mouseY - camera.position.y) * 0.05

      camera.lookAt(scene.position)

      for (i = 0; i < scene.children.length; i++) {
        var object = scene.children[i]

        if (object instanceof THREE.PointCloud) {
          object.rotation.y = time * (i < 4 ? i + 1 : -(i + 1))
        }
      }

      for (i = 0; i < materials.length; i++) {
        color = parameters[i][0]

        h = ((360 * (color[0] + time)) % 360) / 360
        materials[i].color.setHSL(h, color[1], color[2])
      }

      renderer.render(scene, camera)
    },

    onDocumentMouseMove(e) {
      mouseX = e.clientX - windowHalfX
      mouseY = e.clientY - windowHalfY
    },

    /*	Mobile	*/

    onDocumentTouchStart(e) {
      if (e.touches.length === 1) {
        e.preventDefault()
        mouseX = e.touches[0].pageX - windowHalfX
        mouseY = e.touches[0].pageY - windowHalfY
      }
    },

    onDocumentTouchMove(e) {
      if (e.touches.length === 1) {
        e.preventDefault()
        mouseX = e.touches[0].pageX - windowHalfX
        mouseY = e.touches[0].pageY - windowHalfY
      }
    },

    onWindowResize() {
      windowHalfX = window.innerWidth / 2
      windowHalfY = window.innerHeight / 2

      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
  }
}
</script>

<style scoped>
</style>
