<template>
  <div>
    <SimpleCalculator />
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import SimpleCalculator from "@/components/SimpleCalculator/SimpleCalculator.vue";

@Options({
  components: {
    SimpleCalculator,
  },
})
export default class CalculatorPage extends Vue {}
</script>
