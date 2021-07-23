<template>
  <div class="example">
    <button v-on:click="red = !red">
      Toggle
    </button>
    <p
        v-bind:class="{ red: red }"
    >
      hello
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      red: true,
    };
  },
};
</script>

<style scoped lang="scss">
@import './src/components/ClassBindingExample/styles';
</style>
