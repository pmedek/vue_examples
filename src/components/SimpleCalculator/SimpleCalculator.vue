<template>
  <div class='Calculator'>
    <h1>Simple calculator</h1>
    <div class='Calculator__mainWrapper'>
      <input type="number" placeholder='number 1' v-model="number1"/>
      <select class='Calculator__operations' v-model="operation">
        <option>+</option>
        <option>-</option>
        <option>*</option>
        <option>/</option>
      </select>
      <input type="number" placeholder='number 2' v-model="number2"/>
      <span style="position: relative; top: 5px">=</span>
      <transition name="fade" mode="out-in">
        <span class='Calculator__result' :key="result">{{ result }}</span>
      </transition>
    </div>
    <div class='Calculator__buttonWrapper'>
      <input class='Calculator__submitBtn'
             type="button"
             value="Calculate"
             :disabled="disabledSubmit"
             v-on:click="calculate"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import './src/components/SimpleCalculator/styles';
</style>

<script>
export default {
  data() {
    return {
      number1: 0,
      number2: 0,
      operation: '+',
      result: 0,
      disabledSubmit: false
    };
  },
  watch: {
    number1(val) {
      this.disabledSubmit = !parseFloat(val) && parseFloat(val) !== 0
    },
    number2(val) {
      this.disabledSubmit = !parseFloat(val) && parseFloat(val) !== 0
    }
  },
  methods: {
    calculate() {
      switch (this.operation) {
        case '+':
          this.result = parseFloat(this.number1) + parseFloat(this.number2)
          break;
        case '-':
          this.result = parseFloat(this.number1) - parseFloat(this.number2)
          break;
        case '*':
          this.result = parseFloat(this.number1) * parseFloat(this.number2)
          break;
        case '/':
          this.result = parseFloat(this.number1) / parseFloat(this.number2)
          break;
        default:
          throw Error(`Bad operation ${this.operation}`)
      }
    }
  }
};
</script>
