const app = Vue.createApp({
    data() {
        return {
            result: 0,
        };
    },
    methods: {
        addNum(num) {
            this.result+=num;
            console.log(this.result);
        },
    },
    computed: {
        checkResult() {
            if (this.result < 37) {
                return "Not there yet.";
            }
            else if (this.result > 37) {
                return "Too much!";
            }
            else {
                return "37";
            }
        }
    },
    watch: {
        resetResult() {
            setTimeout(function () {
                result = 0;
            }, 5000);
        },
    },
})

app.mount('#assignment')