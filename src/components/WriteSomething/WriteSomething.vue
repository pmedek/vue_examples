<template>
  <p v-if="something">{{ something }}</p>
  <p v-else>Some text</p>
</template>

<script>
export default {
  props: ["something"]
};
</script>
