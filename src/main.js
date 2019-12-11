import Vue from "vue";
import App from "./App.vue";
import VueResource from "vue-resource";
Vue.use(VueResource);
Vue.http.credentials = true;
Vue.http.xhr = {
  withCredentials: true
};
Vue.http.emulateJSON = true;
Vue.http.emulateHTTP = true;
Vue.http.crossOrigin = true;
Vue.http.headers.common["Access-Control-Allow-Origin"] = "*";
Vue.http.headers.common["Content-Type"] = "application/x-www-form-urlencoded";
Vue.http.headers.common["Accept"] = "application/json, text/plain, */*";
Vue.http.headers.common["Access-Control-Allow-Headers"] =
  "Origin, Accept, Content-Type, Authorization, Access-Control-Allow-Origin";
new Vue({
  el: "#app",
  render: h => h(App)
});
