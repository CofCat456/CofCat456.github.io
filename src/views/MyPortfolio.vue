<template>
  <div class="d-flex flex-column align-items-center">
    <div class="col-md-2 col-6 my-md-0 my-3 d-flex">
      <button
        v-for="text in this.class"
        :key="text"
        type="button"
        :class="[
          ['btn border-0 rounded-0 mx-1'],
          state === text ? 'btn-custom-blue' : 'btn-custom-white'
        ]"
        @click="changeState(text)"
      >
        {{ text }}
      </button>
    </div>
    <div
      v-if="state === 'Projects'"
      class="col-xl-10 col-12 my-md-5 my-3 d-flex flex-wrap animate__animated animate__fadeInUp"
    >
      <Portfolio
        v-for="item in Projects"
        :key="item.name"
        :="item"
        @open-modal="openModal(item)"
      ></Portfolio>
    </div>
    <div
      v-else-if="state === 'Exercise'"
      class="col-xl-10 col-12 my-5 d-flex flex-wrap animate__animated animate__fadeInUp"
    >
      <Portfolio v-for="item in Exercise" :key="item.name" :="item"></Portfolio>
    </div>
  </div>
  <!-- <Modal ref="portfolioModal" :portfolio="tempPortfolio"></Modal> -->
</template>

<style scoped>
.btn:focus {
  box-shadow: none;
}

.btn-custom-blue {
  color: #00c9ff;
  border-bottom: 3px solid #00c9ff !important;
}

.btn-custom-white {
  color: white;
  border-bottom: 3px solid #ffffff !important;
  transition: all 0.4s linear;
}

.btn-custom-white:hover {
  color: #00c9ff;
  border-bottom: 3px solid #00c9ff !important;
}
</style>

<script>
import Portfolio from '../components/SinglePortfolio.vue';
// import Modal from '../components/PortfolioModel.vue';

export default {
  components: {
    Portfolio
    // Modal
  },
  data() {
    return {
      state: 'Projects',
      class: ['Projects', 'Exercise'],
      Projects: [
        {
          name: '貓咖啡CatCof',
          text: '咖啡電商網站，有前後台功能',
          skill: ['Vue 2', 'Vue Cli', 'Bootstrap5'],
          src: require('../assets/myPortfolio/貓咖啡.jpg'),
          link: 'https://cofcat456.github.io/coffeeShop/dist/#/'
        }
      ],
      Exercise: [
        {
          name: '農產品比價網',
          text: '輕鬆查詢全台蔬菜、水果、花卉等價格',
          skill: ['Axios', 'Bootstrap 5'],
          src: require('../assets/myPortfolio/農產品比價網.jpg'),
          link: 'https://cofcat456.github.io/comparison/'
        },
        {
          name: '九九乘法表',
          text: ' 新手 JS 地下城，1F Boss 關卡',
          skill: ['Vue 2', 'JavaScript'],
          src: require('../assets/myPortfolio/九九乘法表.jpg'),
          link: 'https://cofcat456.github.io/JS-Dungeons/1F/'
        },
        {
          name: '時鐘',
          text: '新手 JS 地下城，2F Boss 關卡',
          skill: ['Vue 2', 'JavaScript'],
          src: require('../assets/myPortfolio/時鐘.jpg'),
          link: 'https://cofcat456.github.io/JS-Dungeons/2F/'
        },
        {
          name: 'React TodoList',
          text: '透過create-react-app實作的作品。',
          skill: ['React', 'JSX', 'JavaScript'],
          src: require('../assets/myPortfolio/React TodoList.jpg'),
          link: 'https://cofcat456.github.io/TodolistPlus/'
        },
        {
          name: 'JS TodoList',
          text: '使用JS練習Todolist。',
          skill: ['HTML 5', 'JavaScript', 'Bootstrap 5'],
          src: require('../assets/myPortfolio/JS TodoList.jpg'),
          link: 'https://cofcat456.github.io/Todolist/'
        },
        {
          name: '六角 Hex Scool',
          text: '六角大專院校程式體驗營作品',
          skill: ['HTML 5', 'JavaScript', 'Bootstrap 5'],
          src: require('../assets/myPortfolio/Hex School.jpg'),
          link: 'https://cofcat456.github.io/HexSchoolWork/jQuery/'
        }
      ],
      tempPortfolio: {}
    };
  },
  methods: {
    changeState(id) {
      this.state = id;
    },
    openModal(item) {
      const portfolioComponent = this.$refs.portfolioModal;
      this.tempPortfolio = item;
      portfolioComponent.showModal();
    }
  }
};
</script>
