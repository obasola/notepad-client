<template>
  <div>
    <h3>Payment</h3>
    <form novalidate>
      <div class="row">
        <div class="col-md-6">
          <div>
            <strong>Notepad - {{ subtitle }}</strong>
          </div>
          <form-group>
            <div class="form-row">
              <div class="form-row col-md-6">
                <label for="title">Title</label>
                <input
                  class="form-control"
                  id="title"
                  v-model="leaflet.title"
                  type="text"
                  placeholder="note title"
                />
              </div>
              <div class="form-row col-md-6">
                <label for="desc">Description</label>
                <input
                  class="form-control"
                  id="desc"
                  type="text"
                  placeholder="your name"
                  v-model="leaflet.description"
                />
              </div>

              <div class="form-group col-md-6">
                <label for="state-province">State/Province</label>
                <select
                  class="form-control"
                  id="stateProvince"
                  v-model="payment.state"
                >
                  <option v-for="s in docTypes" :key="s.code">
                    {{ s.name }}
                  </option>
                </select>
              </div>
            </div>
            <div class="button">
              <button class="btn btn-primary">Save</button>
              <button class="btn btn-danger">Reset</button>
            </div>
          </form-group>
        </div>
      </div>
      <div>
        <pre>{{ payment }}</pre>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "NoteForm",
  props: {
    subtitle: String,
  },
  setup() {
    const docTypes = [
      { code: "H2", name: "How 2" },
      { code: "OB", name: "On-Boarding" },
      { code: "DC", name: "Documents" },
      { code: "MI", name: "Misc" },
    ];

    const leaflet = ref({
      title: "",
      description: "",
      category: "",
      dateRecorded: "",
    });
    return {
      leaflet,
      docTypes,
    };
  },
};
</script>

<style lang="css">
.button {
  float: right;
}
</style>
