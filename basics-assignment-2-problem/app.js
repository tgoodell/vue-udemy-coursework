const app = Vue.createApp({
    data() {
        return {
            outputOne: 'OUTPUT',
            outputTwo: 'OUTPUT',
        };
    },
    methods: {
        alertMessage(msg) {
            alert(msg);
        },
        changeOutputOne(event) {
            this.outputOne = event.target.value;
        },
        changeOutputTwo(event) {
            this.outputTwo = event.target.value;
        },
    }
})

app.mount('#app')