<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div
      class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg"
    >
      <div class="modal-content">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title" id="exampleModalLabel">
            {{ tempPortfolio.name }}
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <img
              :src="tempPortfolio.src"
              :alt="tempPortfolio.name + '的照片'"
              class="img-fluid"
            />
          </div>
          <div class="mb-3">
            <h5>使用技術 ：</h5>
            <div v-for="item in tempPortfolio.allSkill" :key="item">
              <p>{{ item }}</p>
            </div>
          </div>
          <div class="mb-3">
            {{ tempPortfolio.content }}
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            關閉
          </button>
          <button type="button" class="btn btn-primary">
            <a :href="tempPortfolio.link" target="_blank" class="text-white"
              >前往</a
            >
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal';

export default {
  props: {
    portfolio: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      modal: {},
      tempPortfolio: {}
    };
  },
  methods: {
    showModal() {
      this.modal.show();
    },
    hideModal() {
      this.modal.hide();
    }
  },
  watch: {
    portfolio() {
      this.tempPortfolio = this.portfolio;
    }
  },
  mounted() {
    this.modal = new Modal(this.$refs.modal);
  }
};
</script>
