<template>
  <div style="width: 100%; height: 100%; opacity: 0.5;" id="dtbg" class="h-100"></div>
</template>

<script>
let camera,
  scene,
  renderer,
  container,
  stats,
  particle,
  winHalfX,
  winHalfY,
  height,
  width,
  fieldOfView,
  aspectRatio,
  nearPlane,
  farPlane,
  body,
  cameraZ,
  material,
  i = 0,
  count = 0,
  Tau = Math.PI * 2,
  // mouseX = 0, Default
  // mouseY = 0,
  mouseX = -400,
  mouseY = 325,
  amtX = 50,
  amtY = 50,
  sep = 100,
  spriteOpts = {},
  particles = [],
  cssString = 'margin: 0; overflow: hidden;'

export default {
  data() {
    return {
      addMouseEvent: null
    }
  },

  mounted() {
    this.onDocumentReady()
    this.animate()
  },

  methods: {
    onDocumentReady() {
      body = document.querySelector('#dtbg')
      body.style.cssText = cssString

      container = document.createElement('div')
      body.appendChild(container)

      height = window.innerHeight
      winHalfY = height / 2
      width = window.innerWidth
      winHalfX = width / 2
      fieldOfView = 75
      aspectRatio = width / height
      nearPlane = 1
      farPlane = 10000
      cameraZ = 750

      this.rendererer()
    },

    rendererer(complete) {
      //lights (no lights!) camera, action!
      camera = new THREE.PerspectiveCamera(
        fieldOfView,
        aspectRatio,
        nearPlane,
        farPlane
      )
      camera.position.z = cameraZ
      camera.position.y = -1300
      // camera.position.x = 1000 - camera.position.x

      // aaaaaaaaand scene! (No wait, we're not done!)
      // aaaaaaaaand ten more minutes.
      scene = new THREE.Scene()

      //material settings
      spriteOpts = {
        // color: 0xffffff,
        color: 0xcccccc,
        program: function(ctx) {
          ctx.beginPath()
          ctx.arc(0, 0, 0.5, 0, Tau, true)
          ctx.fill()
        }
      }

      material = new THREE.SpriteCanvasMaterial(spriteOpts)

      // Stop! particle time!
      for (var ix = 0, lx = amtX; ix < lx; ix++) {
        for (var iy = 0, ly = amtY; iy < ly; iy++) {
          particle = particles[i++] = new THREE.Sprite(material)
          particle.position.x = ix * sep - (amtX * sep) / 2
          particle.position.z = iy * sep - (amtY * sep) / 2
          scene.add(particle)
        }
      }

      //render the scene
      renderer = new THREE.CanvasRenderer()
      renderer.setClearColor(0xdd1d45, 1)
      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setSize(width, height)

      // append the rendered scene to the container
      container.appendChild(renderer.domElement)

      // aaaaaaaaand Scene? (yes, scene!)
      if (complete) {
        complete()
      }
    },

    // onDocumentMouseMove(e) {
    //   mouseX = e.clientX - winHalfX
    //   mouseY = e.clientY - winHalfY
    // },

    // onDocumentTouchStart(e) {
    //   if (e.touches.length === 1) {
    //     e.preventDefault()
    //     mouseX = e.touches[0].pageX - winHalfX
    //     mouseY = e.touches[0].pageY - winHalfY
    //   }
    // },

    // onDocumentTouchMove(e) {
    //   if (e.touches.length === 1) {
    //     e.preventDefault()
    //     mouseX = e.touches[0].pageX - winHalfX
    //     mouseY = e.touches[0].pageY - winHalfY
    //   }
    // },

    // onWindowResize() {
    //   // update variables to new values
    //   height = window.innerHeight
    //   winHalfY = height / 2
    //   width = window.innerWidth
    //   winHalfX = width / 2

    //   camera.aspect = width / height
    //   camera.updateProjectionMatrix()
    //   renderer.setSize(width, height)
    // },

    animate() {
      requestAnimationFrame(this.animate)
      this.update()
    },

    update() {
      camera.position.x += (mouseX - camera.position.x) * 0.05
      camera.position.y += (mouseY - camera.position.y) * 0.05
      camera.lookAt(scene.position)

      i = 0
      for (var ix = 0, lx = amtX; ix < lx; ix++) {
        for (var iy = 0, ly = amtY; iy < ly; iy++) {
          particle = particles[i++]
          particle.position.y =
            Math.sin((ix + count) * 0.1) * 50 +
            Math.sin((iy + count) * 0.3) * 50
          particle.scale.x = particle.scale.y =
            (Math.sin((ix + count) * 0.1) + 1) * 4 +
            (Math.sin((iy + count) * 0.3) + 1) * 4
          scene.add(particle)
        }
      }

      renderer.render(scene, camera)
      count += 0.1
    }
  },

  destroyed() {
    var that = this
    document.removeEventListener('mousemove', that.addMouseEvent)
  }
}
</script>

<style scoped>
#stats {
  display: none !important;
}
</style>
