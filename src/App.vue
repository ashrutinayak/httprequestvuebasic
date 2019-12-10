<template>
  <div>
    <form v-if="!submitdata">
      <input type="text" v-model="name" placeholder="Enter person full name" />
      <br />
      <input type="number" v-model="number" placeholder="Enter person Mobile number" />
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
      this.$http
        .post("https://jsonplaceholder.typicode.com/posts", {
          title: this.name,
          body: this.number + this.email,
          userId: 1
        })
        .then(function(data) {
          console.log(data);
          this.submitdata = true;
        });
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
