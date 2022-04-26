<template>
  <div
    class="d-flex flex-column align-items-center my-4 px-md-0 px-3 animate__animated animate__fadeInUp"
  >
    <div
      v-for="item in skill"
      :key="item.title"
      class="col-md-6 col-12 my-3 px-4 py-3 border border-light text-center"
    >
      <h5 class="text-white mb-2">{{ item.title }}</h5>
      <div class="d-flex justify-content-center">
        <SmallTag
          v-for="text in item.stitle"
          :key="text"
          :text="text"
          mx="mx-2"
          color="bg-light text-dark"
        ></SmallTag>
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
  data() {
    return {
      skill: [
        {
          title: 'HTML',
          stitle: ['HTML5']
        },
        {
          title: 'CSS',
          stitle: ['Bootstrap', 'Responsive Web']
        },
        {
          title: 'JavaScript',
          stitle: ['jQuery', 'React', 'Vue 2', 'Vue CLI 3']
        }
      ]
    };
  }
};
</script>
