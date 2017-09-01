import ModalComponent from './modal.vue'

const VueModal = {
    install: function(Vue) {
        Vue.component('modal', ModalComponent)
    }
}

export default VueModal