<template>
  <div class="example">
    <p v-if="something">{{ something }}</p>
    <p v-else>Some text</p>
  </div>
</template>

<style scoped lang="scss">
@import './src/components/WriteSomething/styles';
</style>

<script>
export default {
  props: ["something"]
};
</script>
