<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld />
    <WriteSomething something="Haha!" />
    <InputValue />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld/HelloWorld.vue"; // @ is an alias to /src
import WriteSomething from "@/components/WriteSomething/WriteSomething.vue";
import InputValue from "@/components/InputValue/InputValue.vue";

@Options({
  components: {
    HelloWorld,
    WriteSomething,
    InputValue,
  },
})
export default class Home extends Vue {}
</script>
