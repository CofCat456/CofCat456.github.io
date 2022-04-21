<template>
  <div class="container mt-5">
    <div class="row d-flex justify-content-center">
      <NavMain class="nav-main"></NavMain>
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
//Bootstrap
@import '../node_modules/bootstrap/scss/bootstrap.scss';

// Google Font
@import url('https://fonts.googleapis.com/css2?family=Marck+Script&family=Noto+Sans+TC:wght@400;500;700&family=Open+Sans:wght@300&display=swap');

* {
  margin: 0;
  padding: 0;
  list-style: none;
  font-family: 'Noto Sans TC', 'Open Sans';
  box-sizing: border-box;
}

body {
  width: 100%;
}

a,
p,
span,
h1,
h2,
h3,
h4,
h5,
h6,
li,
input,
table td,
table th {
  margin: 0;
  padding: 0;
  line-height: 1.58;
  letter-spacing: 2px;
  text-decoration-line: none;
  white-space: pre-line;
}

a:hover {
  color: white;
  text-decoration-line: underline;
}

p {
  font-size: 1.2rem;
}

body::before {
  content: '';
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('./assets/bg/wallpaper.jpeg');
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1000000;
}

.btn:focus {
  box-shadow: none;
}

animate__animated.animate__fadeInUp {
  --animate-duration: 2s;
}

.imgBox {
  width: 150px;
  height: 150px;
}

.imgBox img {
  object-fit: cover;
}
</style>

<script>
import NavMain from './components/NavbarMain.vue';

export default {
  components: {
    NavMain
  }
};
</script>
