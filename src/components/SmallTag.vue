<template>
  <div :class="mx">
    <a :href="link" target="_blank"
      ><span :class="[['badge rounded-pill'], color]">{{ text }}</span></a
    >
  </div>
</template>

<style scoped>
.badge {
  transition: all 0.4s ease;
  cursor: pointer;
  font-size: 0.75rem;
}

.badge:hover {
  background-color: #00c9ff !important;
  color: white !important;
}
</style>

<script>
export default {
  props: {
    text: {
      type: String
    },
    mx: {
      type: String,
      default: 'mx-1'
    },
    link: {
      type: String,
      default: ''
    },
    color: {
      type: String
    }
  }
};
</script>
