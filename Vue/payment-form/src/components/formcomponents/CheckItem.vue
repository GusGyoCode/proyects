<template>
  <div class="mb-3 p-3" style="border: 1px solid #e6e6e6; background-color: #fff;">
          <h2 class="p-2">Check item and shipping</h2>
          <div class="row">
            <div class="col-4">
              <img class="img-fluid" src="http://lorempixel.com/200/200/" alt />
            </div>
            <div class="col-8">
              <p class="mb-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
                quaerat!
              </p>
              <p class="mb-1" style="font-size: 20px;">
                <strong>Price:</strong>$32.50
              </p>
              <p class="mb-1" style="color: #6e6e6e;">Quantity: 1</p>
              <p class="mb-1">Shipping:</p>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios2"
                  id="exampleRadio1"
                  value="0"
                  v-model.number="data2"
                />
                <label
                  class="form-check-label"
                  for="exampleRadio1"
                  style="color: #6e6e6e;"
                >Delivery scheduled for: x day - x day</label>
                <p>Free</p>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios2"
                  id="exampleRadio2"
                  value="58.95"
                  v-model.number="data2"
                />
                <label
                  class="form-check-label"
                  for="exampleRadio2"
                  style="color: #6e6e6e;"
                >Delivery scheduled for: x day - x day</label>
                <p>58.95$</p>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios2"
                  id="exampleRadio3"
                  value="97.32"
                  v-model.number="data2"
                />
                <label
                  class="form-check-label"
                  for="exampleRadio3"
                  style="color: #6e6e6e;"
                >Delivery scheduled for: x day - x day</label>
                <p>97.32$</p>
              </div>
            </div>
          </div>
        </div>
</template>

<script>
export default {
  name: 'CheckItem',
  mounted(){
    this.$emit('check', this.data2)
  },
  updated(){
    this.$emit('check', this.data2)
  },
  data(){
    return{
      data2: 0,
    }
  }
}
</script>