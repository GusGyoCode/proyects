<template>
  <form action @submit.prevent="mostrarUsuarios()">
    <div class="row">
      <div class="col-12 col-md-8">
        <PayWith @pay="data.data1 = $event"/>
        <CheckItem @check="data.data2 = $event"/>
        <AddCoupons @add="data.data3 = $event"/>
      </div>
      <Total :data2="data.data2" @data4="data.data4 = $event"/>
    </div>
  </form>
</template>

<script>
import PayWith from "./formcomponents/PayWith";
import CheckItem from "./formcomponents/CheckItem";
import AddCoupons from "./formcomponents/AddCoupons";
import Total from "./formcomponents/Total";

export default {
  name: "FormComponent",
  components: {
    PayWith,
    CheckItem,
    AddCoupons,
    Total
  },
  data(){
    return{
      data: {
        data1: {},
        data2: 0,
        data3: "",
        data4: 0
      }
    }
  },
  methods:{
    mostrarUsuarios(){
      this.$emit('data', this.data)
    }
  }
};
</script>
