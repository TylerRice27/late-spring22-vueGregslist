<template>
  <div class="container-fluid">
    <div class="row g-3 my-2">
      <House v-for="h in houses" :key="h.id" :house="h" />
      <div class="component">Houses Page</div>
    </div>
  </div>
  <Modal id="house-form">
    <template #header> House stuff</template>
    <template #body><HouseForm /></template>
  </Modal>
</template>


<script>
import { AppState } from "../AppState";
import { computed, reactive, onMounted } from "vue";
import Pop from "../utils/Pop";
import { logger } from "../utils/Logger";
import { housesService } from "../services/HousesService";
export default {
  setup() {
    onMounted(async () => {
      try {
        await housesService.getAll();
      } catch (error) {
        Pop.toast(error.message, "error");
        logger.error(error);
      }
    });
    return {
      houses: computed(() => AppState.houses),
    };
  },
};
</script>


<style lang="scss" scoped>
</style>
