<template>
  <div class="col-md-3">
    <div class="rounded bg-dark text-center text-light m-2">
      <img class="img-fluid" :src="house.imgUrl" alt="" />
      <div class="p-2">
        <b>House Address | House Year | Bedrooms | Bathrooms</b>
        <p>
          {{ house.address }} | {{ house.year }} | {{ house.bedrooms }} |
          {{ house.bathrooms }}
        </p>
        <b>House Description</b>
        <p>{{ house.description }}</p>
        <b class="m-2">House Price</b>
        <b>${{ house.price }}</b>
      </div>
      <button @click="removeHouse" class="btn btn-danger m-2 p-2">
        Get this house out of my face
      </button>
      <Modal :id="'edit-house' + house.id">
        <template #header>Edit {{ house.address }} </template>
        <template #body> <HouseForm :editHouse="house" /></template>
        <template #button>
          <button
            type="button"
            class="btn btn-warning m-2 p-2"
            data-bs-toggle="modal"
            :data-bs-target="'#edit-house' + house.id"
          >
            Customize this house
          </button>
        </template>
      </Modal>
    </div>
  </div>
</template>

<script>
import { housesService } from "../services/HousesService";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import Modal from "./Modal.vue";
export default {
  props: { house: { Modaltype: Object, required: true } },
  setup(props) {
    return {
      async removeHouse() {
        try {
          await housesService.removeHouse(props.house.id);
          Pop.toast("House deleted", "success");
        } catch (error) {
          Pop.toast(error.message, "error");
          logger.error(error);
        }
      },
    };
  },
};
</script>

<style>
</style>

  