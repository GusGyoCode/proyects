<template>
  <div class="mb-3" style="border: 1px solid #e6e6e6; background-color: #fff;">
          <h2 class="p-2">Pay with:</h2>
          <div class="option-pay p-3" style="border-bottom: 1px solid #e6e6e6;">
            <h6>Credit or debit card</h6>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios1"
                value="credit"
                v-model="data1.pay"
                style="margin-top: 15px;"
                required
              />
              <label class="form-check-label" for="exampleRadios1">
                <i class="icon-credit-card" style="font-size: 30px;"></i>
              </label>
            </div>
            <div class="row" v-if="data1.pay && data1.pay=='credit'">
              <div class="col-6">
                <input
                  type="text"
                  class="form-control"
                  id="card-number"
                  aria-describedby="card-number"
                  placeholder="N°. card"
                  style="
                          border: none;
                          border-radius: 0px;
                          border-bottom: 1px solid #ced4da;
                        "
                  v-model="data1.card"
                  required
                />
                <small id="card-number" class="form-text text-muted">xxxx-xxxx-xxx-xxxx</small>
              </div>
              <div class="col-6">
                <input
                  type="date"
                  class="form-control"
                  id="expiration-date"
                  aria-describedby="expiration-date"
                  placeholder="Fecha de vencimineto"
                  style="
                          border: none;
                          border-radius: 0px;
                          border-bottom: 1px solid #ced4da;
                        "
                  v-model="data1.date"
                  required
                />
                <small id="expiration-date" class="form-text text-muted">Expiration date</small>
              </div>
              <div class="col-6">
                <input
                  type="text"
                  class="form-control"
                  id="security-code"
                  aria-describedby="security-code"
                  placeholder="Security code"
                  style="
                          border: none;
                          border-radius: 0px;
                          border-bottom: 1px solid #ced4da;
                        "
                  v-model="data1.code"
                  required
                />
                <i
                  class="icon-info-circled-1"
                  data-container="body"
                  data-toggle="popover"
                  data-placement="right"
                  data-content="Three digit code located on the back of the card."
                  style="cursor: pointer;"
                ></i>
              </div>
              <div class="col-6">
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  aria-describedby="name"
                  placeholder="Name"
                  style="
                          border: none;
                          border-radius: 0px;
                          border-bottom: 1px solid #ced4da;
                        "
                  v-model="data1.name"
                  required
                />
              </div>
              <div class="col-6">
                <input
                  type="text"
                  class="form-control"
                  id="last-name"
                  aria-describedby="last-name"
                  placeholder="Last name"
                  style="
                          border: none;
                          border-radius: 0px;
                          border-bottom: 1px solid #ced4da;
                        "
                  v-model="data1.lastname"
                  required
                />
              </div>
              <div class="col-6">
                <div class="form-check">
                  <input type="checkbox" class="form-check-input" id="exampleCheck1" required />
                  <label
                    class="form-check-label"
                    for="exampleCheck1"
                  >Save the data of this card for future purchases</label>
                </div>
              </div>
            </div>
          </div>
          <div class="option-pay p-3 mb-3" style="border-bottom: 1px solid #e6e6e6;">
            <h6>Paypal</h6>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios2"
                value="paypal"
                style="margin-top: 15px;"
                v-model="data1.pay"
                required
              />
              <label class="form-check-label" for="exampleRadios2">
                <i class="icon-cc-paypal" style="font-size: 30px;"></i>
              </label>
            </div>
          </div>
          <div class="option-send p-3">
            <h2 class="p-2">Send to:</h2>
            <div class="form-group">
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                style="max-height: 200px;"
                placeholder="Name:
  Direction:
  Country:
  Postal code:
  Contact number:"
                v-model="data1.send"
                required
              ></textarea>
            </div>
          </div>
        </div>
</template>

<script>
export default {
  name: 'PayWith',
  mounted(){
    this.$emit('pay', this.data1)
  },
  updated(){
    this.$emit('pay', this.data1)
  },
  data(){
    return {
      data1: {
        pay: '',
        card: '',
        date: '',
        code: '',
        name: '',
        lastname: '',
        send: ''
      }
    }
  }
}
</script>