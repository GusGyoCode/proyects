<template>
  <main style="background-color: #f5f5f5;">
    <div class="container p-3">
      <div class="row justify-content-between">
        <div class="col d-none d-lg-block">
          <h2
            style="
                display: inline-block;
                padding-top: 0.3125rem;
                padding-bottom: 0.3125rem;
                margin-right: 1rem;
                font-size: 40px;
                line-height: inherit;
                white-space: nowrap;
              "
          >
            <img
              src="https://getbootstrap.com/docs/4.5/assets/brand/bootstrap-solid.svg"
              width="65"
              height="65"
              class="d-inline-block align-top"
              alt=""
              loading="lazy"
            />
            Complete the transaction
          </h2>
        </div>
        <div class="col-12 col-md-8 d-lg-none title-2">
          <h2
            style="
                display: inline-block;
                padding-top: 0.3125rem;
                padding-bottom: 0.3125rem;
                font-size: 25px;
                line-height: inherit;
                white-space: nowrap;
                text-transform: uppercase;
              "
          >
            <img
              src="https://getbootstrap.com/docs/4.5/assets/brand/bootstrap-solid.svg"
              width="40"
              height="40"
              class="d-inline-block align-top"
              alt=""
              loading="lazy"
            />
            Complete the transaction
          </h2>
        </div>
        <div class="col-12 col-md-4">
          <p>
            How about this process for completing transactions?
            <a href="#">Write your review</a>
          </p>
        </div>
         <div class="col-12" v-if="data">
          <div
            class="alert alert-success alert-dismissible fade show"
            role="alert"
          >
            <i class="icon-info-circled-1"></i> success!!! Your payment has been successfully processed with the following purchase information:
            <br/>
            <div v-if="data.data1.pay == 'credit'">
              <strong>Pay:</strong> {{data.data1.pay}}
              <br/>
              <strong>N° card:</strong> {{data.data1.card}}
              <br/>
              <strong>Date:</strong> {{data.data1.date}}
              <br/>
              <strong>Secure code:</strong> {{data.data1.code}}
              <br/>
              <strong>Name:</strong> {{data.data1.name}}
              <br/>
              <strong>Last name:</strong> {{data.data1.lastname}}
              <br/>
              <strong>Send:</strong> {{data.data1.send}}
              <br/>
              <div v-if="data.data3">
                <strong>Coupons:</strong> {{data.data3}}
                <br/>
              </div>
              <strong>Total:</strong> ${{data.data4}}
            </div>
            <div v-else>
              <strong>Pay:</strong> {{data.data1.pay}}
              <br/>
              <strong>Send:</strong> {{data.data1.send}}
              <br/>
              <div v-if="data.data3">
                <strong>Coupons:</strong> {{data.data3}}
                <br/>
              </div>
              <strong>Total:</strong> ${{data.data4}}
            </div>
            <button
              type="button"
              class="close"
              data-dismiss="alert"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        </div>
        <div class="col-12 col-md-8" v-else-if="!data">
          <div
            class="alert alert-primary alert-dismissible fade show"
            role="alert"
          >
            <i class="icon-info-circled-1"></i> If you want to pay with paypal,
            it is necessary that you first provide them with a little more
            information. You can also select a different payment method.
            <button
              type="button"
              class="close"
              data-dismiss="alert"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        </div>
        <div class="col-12 col-md-4" v-if="!data">
          <div
            class="alert alert-warning alert-dismissible fade show"
            role="alert"
          >
            <i class="icon-info-circled-1"></i> Be totally safe when entering
            all the data, correctly remember that we do not give refund for
            erroneous data.
            <button
              type="button"
              class="close"
              data-dismiss="alert"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        </div>
      </div>
      <FormComponent @data="data = $event"/>
    </div>
    <div>{{this.data}}</div>
  </main>
</template>
<script>
import FormComponent from './FormComponent'

export default {
  name: "MainComponent",
  components: {
    FormComponent
  },
  data(){
    return{
      data: null
    }
  }
};
</script>
