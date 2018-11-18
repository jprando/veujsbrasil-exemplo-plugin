<template>
  <div>
    <div id="_ps">
      <small>
        no arquivo <code>@/plugins/alert/index.js</code><br />
        voce pode mudar o tema do modal
      </small>
      <p>
        <a href="https://codesandbox.io/s/xj75zk51w" title="no codesanbox.io"
          >código fonte</a
        >
      </p>
    </div>
    <section><JModal /></section>
    <section><JInfo /></section>
    <section><JError /></section>
    <section><JConfirm /></section>
  </div>
</template>

<script>
import { JModal, JInfo, JError, JConfirm } from '@/components'

export default {
  name: 'HomePage',
  components: { JModal, JInfo, JError, JConfirm }
}
</script>

<style>
#_ps {
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 2px;
  padding: 10px;
  margin-bottom: 10px;
  border: solid 1px black;
  background-color: white;
}
p {
  margin-top: 10px;
  margin-bottom: 0px;
}
section {
  margin-bottom: 15px;
}
</style>
