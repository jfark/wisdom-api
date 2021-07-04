var baseURL = "https://api.adviceslip.com/advice";
var vm = new Vue({
    el: "#app",
    data: {
        advice: []
    },
    methods: {
        getAdvice: function() {
            axios.get(baseURL).then(function(response){
                console.log(response);
                vm.advice = response.data;
            })
        }
    },
    created: function() {
        this.getAdvice();
    }
});