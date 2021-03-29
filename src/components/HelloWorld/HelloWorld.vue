<template>
    <p>{{ msg }}</p>
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
p {
  color: blue;
}
</style>
