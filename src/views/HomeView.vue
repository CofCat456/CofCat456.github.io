<template>
  <div
    class="my-5 d-flex flex-column align-items-center justify-content-center animate__animated animate__fadeInUp"
  >
    <div class="col-12 my-3 text-center">
      <div v-for="item in experience" :key="item.title" class="my-4">
        <p class="text-white">{{ item.title }}</p>
        <p class="text-white">{{ item.text }}</p>
      </div>
    </div>
    <div class="col-12 d-flex flex-wrap justify-content-center mx-2">
      <SmallTag
        v-for="item in info"
        :key="item.title"
        :text="item.title"
        :link="item.link"
        mx="mx-2 my-md-0 my-1"
        color="bg-secondary"
      ></SmallTag>
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
      experience: [
        {
          title: '2018 - Now',
          text: '致理科技大學 | 資訊管理系'
        },
        {
          title: '2020 社團經驗',
          text: '致理科技大學 | 學生會會長'
        },
        {
          title: '前端新手',
          text: '自學半年 ｜ 找實習中...'
        }
      ],
      info: [
        {
          title: 'FaceBook',
          link: 'https://www.facebook.com/liao.xiaoan'
        },
        {
          title: 'E-mail',
          link: 'mailto:a25690756@gmail.com'
        },
        {
          title: 'GitHub',
          link: 'https://github.com/CofCat456'
        },
        {
          title: 'Medium',
          link: 'https://medium.com/@a25690756'
        },
        {
          title: 'Resume',
          link: 'https://www.cakeresume.com/a25690756'
        }
      ]
    };
  }
};
</script>
