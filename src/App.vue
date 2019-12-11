<template>
  <div>
    <form v-if="!submitdata && !viewdataes">
      <input type="text" v-model="name" placeholder="Enter person full name" />
      <br />
      <input type="number" v-model="number" placeholder="Enter person Mobile number" />
      <br />
      <input type="email" v-model="email" placeholder="Enter person Email" />
      <br />
      <!-- <input type="password" placeholder="Enter the Password" /> -->
      <br />
      <button v-on:click.prevent="handleSubmit()">Submit</button>
      <button v-on:click.prevent="handleView()">Display</button>
    </form>
    <div v-if="submitdata">
      <h2>Data Submitted Successful.</h2>
    </div>
    <div v-if="viewdataes">
      <h1>List of data View</h1>
      <div v-if="status">
        <div v-for="demo in demodata" v-bind:key="demo">
          <div>{{ demo.title }}</div>
          <div id="demobody">{{ demo.body}}</div>
        </div>
      </div>
      <div v-if="!status">
        <h3>No data avaiable</h3>
      </div>
    </div>
  </div>
</template>

<script>
import viewdata from "./component/viewdata.vue";
export default {
  comments: {
    viewdata: "viewdata"
  },
  data() {
    return {
      name: "",
      number: "",
      email: "",
      submitdata: false,
      viewdataes: false,
      status: 0,
      demodata: []
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
    },
    handleView: function() {
      this.$http
        .post("http://localhost/webserivcedemo/viewstate.php")
        .then(function(data) {
          this.viewdataes = true;
          console.log(data.body);
          this.demodata = data.body.Demodetail;
          this.status = data.body.status;
        });
    }
  }
};
</script>
<style>
h4 {
  float: left;
}
#demobody {
  /* float: left; */
}
</style>;
