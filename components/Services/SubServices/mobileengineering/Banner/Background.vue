<template>
  <div style="width: 100%; height: 100%; overflow: hidden;">
    <!-- <iframe
      src="~/animations/DecorativeBackgrounds/index2.html"
      style="width:100%; height:100%; overflow: hidden;"
      frameborder="0"
    ></iframe>-->
    <div class="demo-2">
      <main>
        <div class="content">
          <canvas class="scene scene--full" id="scene"></canvas>

          <div class="content__inner">
            <h2 class="content__title">
              <!-- Spacetime -->
            </h2>
            <h3 class="content__subtitle">
              <!-- Warp Drive -->
            </h3>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
<script>
const wrapVertexShader = `
#define PI 3.1415926535897932384626433832795
  attribute float size;
  void main() {
  	vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
  	gl_PointSize = 3.0;
  	gl_Position = projectionMatrix * mvPosition;
  }
`
const wrapFragmentShader = `
uniform sampler2D texture;
  void main(){
  	vec4 textureColor = texture2D( texture, gl_PointCoord );
  	if ( textureColor.a < 0.3 ) discard;
  	vec4 dotColor = vec4(0.06, 0.18, 0.36, 0.4);
  	vec4 color = dotColor * textureColor;
  	gl_FragColor = color;
  }
`

export default {
  head: {
    // script: [
    //   { src: '/TweenMax.min.js' }
    // ],
    link: [{ rel: 'stylesheet', href: '/animation/pater/pater.css' }]
  },
  mounted() {
    if (process.client) {
      document.documentElement.className = 'js'
      var supportsCssVars = function() {
        var e,
          t = document.createElement('style')
        return (
          (t.innerHTML = 'root: { --tmp-var: bold; }'),
          document.head.appendChild(t),
          (e = !!(
            window.CSS &&
            window.CSS.supports &&
            window.CSS.supports('font-weight', 'var(--tmp-var)')
          )),
          t.parentNode.removeChild(t),
          e
        )
      }
      supportsCssVars()
      var canvas = document.querySelector('#scene')
      var width = canvas.offsetWidth,
        height = canvas.offsetHeight

      var renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        antialias: true
      })
      renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1)
      renderer.setSize(width, height)
      renderer.setClearColor(0x59c384)

      var scene = new THREE.Scene()

      var camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 2000)
      camera.position.set(0, 0, 80)

      var loader = new THREE.TextureLoader()
      loader.crossOrigin = 'Anonymous'
      var dotTexture = loader.load(require('~/assets/images/dotTexture.png'))

      var radius = 50
      var sphereGeom = new THREE.IcosahedronGeometry(radius, 5)
      var dotsGeom = new THREE.Geometry()
      var bufferDotsGeom = new THREE.BufferGeometry()
      var positions = new Float32Array(sphereGeom.vertices.length * 3)
      for (var i = 0; i < sphereGeom.vertices.length; i++) {
        var vector = sphereGeom.vertices[i]
        animateDot(i, vector)
        dotsGeom.vertices.push(vector)
        vector.toArray(positions, i * 3)
      }

      function animateDot(index, vector) {
        TweenMax.to(vector, 4, {
          x: 0,
          z: 0,
          ease: Back.easeOut,
          delay: Math.abs(vector.y / radius) * 2,
          repeat: -1,
          yoyo: true,
          yoyoEase: Back.easeOut,
          onUpdate: function() {
            updateDot(index, vector)
          }
        })
      }
      function updateDot(index, vector) {
        positions[index * 3] = vector.x
        positions[index * 3 + 2] = vector.z
      }

      var attributePositions = new THREE.BufferAttribute(positions, 3)
      bufferDotsGeom.addAttribute('position', attributePositions)
      var shaderMaterial = new THREE.ShaderMaterial({
        uniforms: {
          texture: {
            value: dotTexture
          }
        },
        vertexShader: wrapVertexShader,
        fragmentShader: wrapFragmentShader,
        transparent: true
      })
      var dots = new THREE.Points(bufferDotsGeom, shaderMaterial)
      scene.add(dots)

      function render(a) {
        dots.geometry.verticesNeedUpdate = true
        dots.geometry.attributes.position.needsUpdate = true
        renderer.render(scene, camera)
      }

      function onResize() {
        canvas.style.width = ''
        canvas.style.height = ''
        width = canvas.offsetWidth
        height = canvas.offsetHeight
        camera.aspect = width / height
        camera.updateProjectionMatrix()
        renderer.setSize(width, height)
      }

      var mouse = new THREE.Vector2(0.8, 0.5)
      function onMouseMove(e) {
        mouse.x = e.clientX / window.innerWidth - 0.5
        mouse.y = e.clientY / window.innerHeight - 0.5
        TweenMax.to(dots.rotation, 4, {
          x: mouse.y * Math.PI * 0.5,
          z: mouse.x * Math.PI * 0.2,
          ease: Power1.easeOut
        })
      }

      TweenMax.ticker.addEventListener('tick', render)
      window.addEventListener('mousemove', onMouseMove)
      var resizeTm
      window.addEventListener('resize', function() {
        resizeTm = clearTimeout(resizeTm)
        resizeTm = setTimeout(onResize, 200)
      })
    }
  }
}
</script>

<style scoped>
.content {
  position: relative;
  display: grid;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin: 0 auto;
  min-height: 100vh;
}

/* Canvas positions */
.content__inner {
  grid-area: 1 / 1 / 1 / 1;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;
}

.scene {
  position: absolute;
}

.scene--left {
  width: 100vmin;
  height: 100vmin;
  transform: translate3d(-50vmin, 0, 0);
}

.scene--full {
  width: 100%;
  height: 100vh;
}

.scene--up {
  height: 150vmin;
  width: 150vmin;
  top: -50vh;
  left: 50%;
  margin-left: -75vmin;
}

@media screen and (min-width: 55em) {
  .icon--keyboard {
    position: absolute;
    right: 0.55em;
    bottom: -30%;
    display: block;
    width: 54px;
    height: 46px;
    fill: var(--color-link);
  }
  .demos {
    display: flex;
    padding-right: 80px;
    justify-self: end;
  }
  .demo {
    display: block;
    width: 17px;
    height: 17px;
    margin: 0 4px;
    border-radius: 50%;
    background: var(--color-link);
  }
  a.demo--current {
    background: var(--color-link-hover);
  }
  .demo span {
    line-height: 1;
    position: absolute;
    right: 100%;
    display: none;
    margin: 0 1em 0 0;
  }
  .demo--current span {
    display: block;
  }
}

@media screen and (max-width: 55em) {
  .content {
    flex-direction: column;
    height: auto;
  }
  .content--fixed {
    position: relative;
    z-index: 1000;
    display: block;
    padding: 0.85em;
  }
  .codrops-header {
    flex-direction: column;
    align-items: center;
  }
  .codrops-header__title {
    font-weight: bold;
    padding-bottom: 0.25em;
    text-align: center;
  }
  .info {
    margin: 0;
  }
  .github {
    display: block;
    margin: 1em auto;
  }
  .codrops-links {
    margin: 0;
  }
}
</style>
