<!-- eslint-disable vue/no-mutating-props -->
<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<!-- eslint-disable vue/valid-template-root -->
<template>
  <select v-model="modelValue" @change="changeOption">
    <option disabled value="">Выберите из списка</option>
    <option
      v-for="option in options"
      :key="option.value"
      :value="option.value"
    >
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'my-select',
  props: {
    modelValue: {
      type: String,
    },
  },
  option: {
    type: Array,
    default: () => [],
  },
  methods: {
    changeOption(event) {
      this.$emit('update:modelValue', event);
    },
  },
};

</script>

<style scoped>

</style>
