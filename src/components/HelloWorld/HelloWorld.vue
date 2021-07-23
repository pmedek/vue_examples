<template>
  <div class="example">
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: `Hello world!`,
    };
  },
};
</script>

<style scoped lang="scss">
@import './src/components/HelloWorld/styles';
</style>
