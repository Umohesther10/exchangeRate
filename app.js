new Vue({
  el: "#app",
  data: {
    exchangeRates: {},
    base: "",
    date: ""
  },
  created() {
    //call the api
    axios
      .get("https://api.exchangeratesapi.io/latest")
      .then(res => {
        //set the value in res.data to our app value
        this.exchangeRates = res.data.rates;
        this.base = res.data.base;
        this.date = res.data.date;
      })
      .catch(err => {
        console.log(err);
      });
  }
});
