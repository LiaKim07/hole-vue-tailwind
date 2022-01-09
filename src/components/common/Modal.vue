<template>
    <transition name="modal">
        <div id:this.props.id class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">
                    <div class="modal-header flex">
                        <slot name="header"></slot>
                        <button class="button ml-auto" @click="closeModal">X</button>
                    </div>
                    <div class="modal-body py-6 pr-8">
                        <slot name="body"></slot>
                    </div>
                    <div class="modal-footer px-8">
                        <slot name="footer">
                        </slot>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
  name: "Modal",
  props: ['id', 'title'],
  data() {
      return {
        isModalOpen: false
      }
  },
  methods: {
    closeModal: function() {
        this.openedModal = null
        this.isModalOpen = false;
    },
    openModal: () => {
        this.isModalOpen = true;
    }
  }
}
</script>
<style>
    .modal-mask {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: rgba(0,0,0,.3);
        z-index: 999;
    }

    .modal-container {
        @apply p-4 rounded font-semibold text-black bg-white relative w-6/12 mx-auto;
        top: 50vh;
        transform: translateY(-50%);
    }
</style>