<template>
  <div
    class="col-xl-10 col-12 d-flex flex-md-row flex-column justify-content-md-start justify-content-center align-items-center"
  >
    <div class="imgBox me-md-5 mb-md-0 mb-3">
      <img
        src="../assets/myPhoto/Me.jpg"
        alt="我的照片"
        class="img-fluid img-thumbnail rounded-circle"
      />
    </div>
    <div
      class="w-100 d-flex flex-column align-items-md-start align-items-center"
    >
      <div class="mb-3 text-md-start">
        <router-link to="/" class="fs-4 text-white">{{ name }}</router-link>
      </div>
      <div
        class="w-100 d-flex justify-content-md-start justify-content-evenly px-md-0 ps-2"
      >
        <button
          v-for="item in Options"
          :key="item"
          type="button"
          :class="[
            ['btn me-md-4 me-0 px-sm-5 px-4'],
            state === item.path ? 'btn-light' : 'btn-outline-light'
          ]"
          @click="router(item.path)"
        >
          {{ item.text }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.imgBox {
  width: 150px;
  height: 150px;
}

.imgBox img {
  object-fit: cover;
}
</style>

<script>
export default {
  data() {
    return {
      name: '廖浩安',
      state: '',
      Options: [
        {
          text: '簡介',
          path: '/aboutMe'
        },
        {
          text: '技能',
          path: '/skill'
        },
        {
          text: '作品集',
          path: '/portFolio'
        }
      ]
    };
  },
  methods: {
    router(path) {
      this.$router.push(path);
    }
  },
  watch: {
    $route() {
      this.state = this.$route.path;
    }
  },
  created() {
    this.state = this.$router.path;
  }
};
</script>
