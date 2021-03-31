<template>
  <input type="text" v-model="inputVal" />
  <button @click="handleOnClick">+</button>
</template>

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
