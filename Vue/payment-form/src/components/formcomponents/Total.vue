<template>
  <div
    id="formulariodepago"
    class="col-12 col-md-4"
    style="border: 1px solid #e6e6e6; background-color: #fff; height: 400px; position: sticky; top: 0px;"
  >
    <div class="row p-3 justify-content-between">
      <div class="col-6">
        <p>subtotal (1 article)</p>
      </div>
      <div class="col-4">
        <p>$32.50</p>
      </div>
      <div class="col-6">
        <p>Shipping</p>
      </div>
      <div class="col-4" v-if="data2 == 0">
        <p>Free</p>
      </div>
      <div class="col-4" v-else-if="data2 == 58.95">
        <p>${{data2}}</p>
      </div>
      <div class="col-4" v-else>
        <p>${{data2}}</p>
      </div>
      <div class="w-100" style="border-bottom: 1px solid #e6e6e6;"></div>
      <div class="col-6">
        <p style="font-size: 20px; font-weight: bold;">Total:</p>
      </div>
      <div class="col-4">
        <p style="font-size: 20px; font-weight: bold;">${{32.50 + data2}}</p>
      </div>
      <div class="col-12 p-2" style="background-color: #f5f5f5;">
        <p class="m-0">
          When ordering you accept the
          <a href="#">Terms of use</a> and
          <a href="#">Rrivacy notice</a>.
        </p>
      </div>
      <div class="col-12 p-0 pt-3">
        <button class="btn btn-secondary btn-lg btn-block" type="submit" style="border-radius: 0;">
          <i class="icon-lock"></i> Confirm and pay
        </button>
      </div>
      <div class="col-12 p-0 pt-5 d-flex justify-content-center">
        <div class="d-none d-lg-block">
          <h2
            style="display: inline-block; padding-top: 0.3125rem; padding-bottom: 0.3125rem; font-size: 20px; line-height: inherit; white-space: nowrap; text-transform: uppercase;"
          >
            <img
              src="https://getbootstrap.com/docs/4.5/assets/brand/bootstrap-solid.svg"
              width="30"
              height="30"
              class="d-inline-block align-top"
              alt
              loading="lazy"
            />
            We're at your service
          </h2>
        </div>
        <div class="d-lg-none">
          <h2
            style="
                        display: inline-block;
                        padding-top: 0.3125rem;
                        padding-bottom: 0.3125rem;
                        font-size: 15px;
                        line-height: inherit;
                        white-space: nowrap;
                        text-transform: uppercase;
                      "
          >
            <img
              src="https://getbootstrap.com/docs/4.5/assets/brand/bootstrap-solid.svg"
              width="20"
              height="20"
              class="d-inline-block align-top"
              alt
              loading="lazy"
            />
            We're at your service
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Total',
  props: ['data2'],
  mounted(){
    this.data4 = 32.50 + this.data2
    this.$emit('data4', this.data4)
  },
  updated(){
    this.data4 = 32.50 + this.data2
    this.$emit('data4', this.data4)
  },
  data(){
    return{
      data4: 0
    }
  }
}
</script>