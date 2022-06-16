<template>
  <form class="" action="">
    <div class="col-4">
      <label for="">Address</label>
      <input class="form-control" type="text" v-model="houseData.address" />
    </div>

    <div class="col-4">
      <label for="">year</label>
      <input class="form-control" type="number" v-model="houseData.year" />
    </div>
    <div class="col-4">
      <label for="">bathrooms</label>
      <input class="form-control" type="number" v-model="houseData.bathrooms" />
    </div>
    <div class="col-4">
      <label for="">bedrooms</label>
      <input class="form-control" type="number" v-model="houseData.bedrooms" />
    </div>
    <div class="col-4">
      <label for="">price</label>
      <input class="form-control" type="number" v-model="houseData.price" />
    </div>
    <div class="col-8">
      <label for="">image Url</label>
      <input class="form-control" type="text" v-model="houseData.imgUrl" />
    </div>
    <div class="col-12">
      <label for="">description</label>
      <textarea
        class="form-control"
        name=""
        id=""
        cols="30"
        rows="5"
        v-model="houseData.description"
      ></textarea>
      <button class="btn btn-primary text-light" @click="createHouse">
        List a House
      </button>
    </div>
  </form>
</template>

<script>
//Make sure to import your ref from @vue if you want it to
//be able to reference into your project
import { ref } from "@vue/reactivity";
import { housesService } from "../services/HousesService";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
export default {
  setup(props) {
    const houseData = ref({});
    return {
      houseData,
      async createHouse() {
        try {
          logger.log(houseData.value);
          await housesService.createHouse(houseData.value);
          houseData.value = {};
        } catch (error) {
          Pop.toast(error.message, "error");
          logger.error(error);
        }
      },
      async editHouse() {
        try {
          await housesService.editHouse();
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