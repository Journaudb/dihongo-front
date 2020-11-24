<template>
  <div class="number-decomposition">
    <label for="number-input">Enter a number to decompose :</label>
    <input id="number-input" type="number" v-model="rawNumber" />
    <button @click="convert">Convert</button>
    <p>
      Result : <span class="result">{{ resultDecomposedNumber }}</span>
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { NumberService } from "@/services";

@Component
export default class NumberDecomposition extends Vue {
  numberService!: NumberService;
  rawNumber!: number;
  decomposedNumber!: string;

  mounted(): void {
    this.numberService = new NumberService();
    this.rawNumber = 0;
    this.decomposedNumber = "";
  }

  get resultDecomposedNumber(): string {
    return this.decomposedNumber.length !== 0
      ? this.decomposedNumber
      : "Nothing";
  }

  async convert(): Promise<void> {
    this.decomposedNumber = await this.numberService.decomposeNumber(
      this.rawNumber
    );
  }
}
</script>

<style scoped></style>
