<template>
  <div class="ExamplesPage">
    <h2>Example 1 - hello world</h2>
    <HelloWorld />
    <h2>Example 2 - write a custom text</h2>
    <WriteSomething something="Haha!" />
    <h2>Example 3 - input value</h2>
    <InputValue />
    <h2>Example 4 - transitions</h2>
    <TransitionExample />
    <h2>Example 5 - class binding</h2>
    <ClassBindingExample />
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import HelloWorld from "@/components/HelloWorld/HelloWorld.vue";
import WriteSomething from "@/components/WriteSomething/WriteSomething.vue";
import InputValue from "@/components/InputValue/InputValue.vue";
import TransitionExample from "@/components/TransitionExample/TransitionExample.vue";
import ClassBindingExample from "@/components/ClassBindingExample/ClassBindingExample.vue";

@Options({
  components: {
    HelloWorld,
    WriteSomething,
    InputValue,
    TransitionExample,
    ClassBindingExample
  },
})
export default class ExamplesPage extends Vue {}
</script>
