<template>

<form @click.stop="hideDialog" class="dialog" v-if="show" v-on:keyup.enter="submit">
  <div @click.stop class="dialog__content">
    <slot></slot>
  </div>
</form>
</template>

<script>
import toggleMixin from '@/mixins/toggleMixin';

export default {
  name: 'my-dialog',
  mixins: [toggleMixin],
};

</script>

<style>
.dialog {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
}
.dialog__content{
  margin: auto;
  background: white;
  border-radius: 12px;
  min-height: 50px;
  max-width: 400px;
  padding: 20px;
}

</style>
