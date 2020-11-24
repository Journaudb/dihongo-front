<template>
  <section class="home">
    <NumberDecomposition />
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NumberDecomposition from "@/components/NumberDecomposition.vue";

@Component({
  components: {
    NumberDecomposition,
  },
})
export default class Home extends Vue {}
</script>
