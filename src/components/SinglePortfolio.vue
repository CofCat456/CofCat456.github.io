<template>
  <div class="col-xl-4 col-md-6 col-12 mb-xl-4 mb-md-3 mb-4 px-xl-3 px-2">
    <div class="p-2 border border-light" @click="openModal()">
      <a :href="link" target="_blank"
        ><img :src="src" :alt="name + '的照片'" class="img-fluid"
      /></a>
      <div class="d-flex justify-content-center my-2 mx-2">
        <SmallTag
          v-for="text in skill"
          :key="text"
          :text="text"
          mx="mx-1"
          color="bg-light text-dark"
        ></SmallTag>
      </div>
      <div class="col-p-3 text-center">
        <p class="my-1 text-white">{{ name }}</p>
        <p class="my-1 fs-6 text-white">{{ text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import SmallTag from '../components/SmallTag';

export default {
  components: {
    SmallTag
  },
  methods: {
    openModal() {
      this.$emit('open-modal');
    }
  },
  props: {
    src: {
      type: String
    },
    skill: {
      type: Array
    },
    name: {
      type: String
    },
    text: {
      type: String
    },
    link: {
      type: String
    }
  }
};
</script>
