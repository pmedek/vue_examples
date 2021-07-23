<template>
  <div class="example">
    <input type="text" v-model="inputVal" disabled/>
    <button @click="handleOnClick">+</button>
  </div>
</template>

<style scoped lang="scss">
@import './src/components/InputValue/styles';
</style>

<script>
export default {
  data() {
    return {
      inputVal: 0,
    };
  },
  methods: {
    handleOnClick() {
      this.inputVal++;
    },
  },
};
</script>
