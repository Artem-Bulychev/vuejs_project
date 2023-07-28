<template>
  <input :value="value" @input="upDateInput" class="input">
</template>

<script>
export default {
  name: 'my-input',
  props: {
    value: [String, Number],
    myvalue: [String],
  },
  methods: {
    upDateInput(event) {
      this.$emit('update:value', event.target.value);
    },
  },
};
</script>
<style scoped>
.input {
  width: 100%;
  border: 1px solid teal;
  padding: 10px 15px;
  margin-top: 15px;
}
</style>
