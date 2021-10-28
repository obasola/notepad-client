<template>
  <div class="boxLayout">
    <h3>{{ subtitle }}</h3>
    
    <form novalidate class="formlayout">
      <div class="mb-3">
        <label class="my-form-label" style="float:left; margin-left: 0.5em" for="name">Name</label>
        <input
          class="form-control"
          id="name"
          v-model="payment.name"
          type="text"
          placeholder="your name"
        />
      </div>
      <div class="mb-3">
        <label class="my-form-label" for="company">Company name</label>
        <input
          class="form-control"
          id="company"
          type="text"
          placeholder="your name"
          v-model="payment.company"
        />
      </div>
      <div class="mb-3">
        <label class="my-form-label" for="addrLine1">Address</label>
        <input
          class="form-control"
          id="addrLine1"
          type="text"
          placeholder="your name"
          v-model="payment.addrLine1"
        />
      </div>
      <div class="mb-3">
        <label class="my-form-label" for="addrLine2">Suite / Apt nbr</label>
        <input
          class="form-control"
          id="addrLine2"
          type="text"
          placeholder="your name"
        />
      </div>

      <div class="mb-3">
        <label class="my-form-label" for="city">City</label>
        <input
          type="text"
          class="form-control"
          id="city"
          placeholder="your city"
          v-model="payment.city"
        />
      </div>

      <div class="mb-3">
        <label class="my-form-label" for="state-province">State/Province</label>
        <select class="form-control" id="stateProvince" v-model="payment.state">
          <option v-for="s in states" :key="s.code">
            {{ s.name }}
          </option>
        </select>
      </div>
      <div class="mb-3">
        <label class="my-form-label" for="zipcode">Zip Code</label>
        <input
          type="text"
          class="form-control"
          id="zipcode"
          placeholder="10101"
          v-model="payment.zipcode"
        />
      </div>
      <br />
      <div class="mb-3">
        <button
          class="btn btn-primary"
          data-bs-target="#collapseTarget"
          data-bs-toggle="collapse"
        >
          Save
        </button>

        <button
          class="btn btn-primary"
          data-bs-target="#collapseTarget"
          data-bs-toggle="collapse"
        >
          Reset
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import '@/assets/css/formLayout.css';

export default {
  name: "CategoryForm",
  setup() {
    const states = [
      { code: "CA", name: "California" },
      { code: "FL", name: "Florida" },
      { code: "GA", name: "Georgia" },
      { code: "MN", name: "Minnesota" },
      { code: "NY", name: "New York" },
      { code: "TX", name: "Texas" },
    ];

    const payment = ref({
      name: "",
      company: "",
      addrLine1: "",
      addrLine2: "",
      city: "",
      state: "",
      zipcode: "75137",
    });
    return {
      payment,
      states,
    };
  },
};
</script>

<style lang="css">

</style>
