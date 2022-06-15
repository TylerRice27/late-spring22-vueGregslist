<template>
  <div class="col-md-3">
    <div class="rounded bg-dark text-center text-light m-2">
      <img class="img-fluid" :src="house.imgUrl" alt="" />
      <div class="p-2">
        <p>House Address | House Year | Bedrooms | Bathrooms</p>
        <p>
          {{ house.address }} | {{ house.year }} | {{ house.bedrooms }} |
          {{ house.bathrooms }}
        </p>
        <p>House Description</p>
        <p>{{ house.description }}</p>
        <b class="m-2">House Price</b>
        <b>{{ house.price }}</b>
      </div>
      <button class="btn btn-danger m-2 p-2">
        Get this house out of my face
      </button>
      <button class="btn btn-warning m-2 p-2">Customize this house</button>
    </div>
  </div>
</template>

<script>
export default {
  props: { house: { type: Object, required: true } },
  setup(props) {},
};
</script>

<style>
</style>

  