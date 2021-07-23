<template>
  <div class="example">
    <button v-on:click="show = !show">
      Toggle
    </button>
    <transition name="fade">
      <p v-if="show">hello</p>
    </transition>
  </div>
</template>

<style scoped lang="scss">
@import './src/components/TransitionExample/styles';
</style>

<script>
export default {
  data() {
    return {
      show: true
    };
  },
};
</script>
