<template>
  <fieldset>
    <legend>MODAL</legend>
    <img src="./../assets/alert1.png" alt="modal source code example" /><br />
    <button @click="showModal1">modal</button> <br />
    <br />
    <img src="./../assets/alert2.png" alt="modal source code example" /><br />
    <button @click="showModal2">com titulo</button> <br />
    <br />
  </fieldset>
</template>

<script>
export default {
  name: 'ModalPage',
  methods: {
    showModal1() {
      this.$alert.modal('alert em formato modal')
    },
    showModal2() {
      this.$alert.modal({
        title: 'outro titulo',
        message: 'teste alert 123 alert teste alert'
      })
    }
  }
}
</script>
