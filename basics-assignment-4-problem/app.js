const app = Vue.createApp({
    data() {
        return {
            firstClass: '',
            canSee: true,
            visibilityClass: 'visible',
        };
    },
    methods: {
        grabClassFromText(event) {
            this.firstClass = event.target.value;
        },
        changeVisibility() {
            this.canSee = !this.canSee;
            if (this.canSee) {
                this.visibilityClass = 'visible';
            }
            else {
                this.visibilityClass = 'invisible';
            }
        },
    },
    computed: {
        
    },
})

app.mount('#assignment')