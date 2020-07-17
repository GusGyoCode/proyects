<template>
  <div class="mb-3 p-3" style="border: 1px solid #e6e6e6; background-color: #fff;">
    <div class="form-group">
      <label for="exampleInputEmail1">Add coupons</label>
      <input
        type="text"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        style="border: none; border-radius: 0px; border-bottom: 1px solid #ced4da;"
        placeholder="xxx-xxx-xxx"
        v-model="data3"
      />
      <small id="emailHelp" class="form-text text-muted">please add a valid coupon</small>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddCoupons',
  mounted(){
    this.$emit('add', this.data3)
  },
  updated(){
    this.$emit('add', this.data3)
  },
  data(){
    return{
      data3: ""
    }
  }
}
</script>