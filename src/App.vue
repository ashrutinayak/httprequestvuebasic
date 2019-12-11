<template>
  <div>
    <form v-if="!submitdata">
      <input type="text" v-model="name" placeholder="Enter person full name" />
      <br />
      <input
        type="number"
        v-model="number"
        placeholder="Enter person Mobile number"
      />
      <br />
      <input type="email" v-model="email" placeholder="Enter person Email" />
      <br />
      <!-- <input type="password" placeholder="Enter the Password" /> -->
      <br />
      <button v-on:click.prevent="handleSubmit()">Submit</button>
    </form>
    <div v-if="submitdata">
      <h2>Data Submitted Successful.</h2>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      number: "",
      email: "",
      submitdata: false
    };
  },
  methods: {
    handleSubmit: function() {
      var data1 = {
        title: this.name,
        body: this.number + this.email
      };
      this.$http
        .post("http://localhost/webserivcedemo/state.php", {
          title: this.name,
          body: this.number + this.email
        })
        .then(function(data) {
          this.submitdata = true;
        });
    }
  }
};
</script>
<style></style>;
