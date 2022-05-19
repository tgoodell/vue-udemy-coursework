const app = Vue.createApp({
    data() {
        return {
            taskList: [],
            newTask: '',
            listVisibility: true,
        };
    },
    methods: {
        addTask() {
            this.taskList.push(this.newTask);
            newTask = '';
        },
        changeVisibility() {
            this.listVisibility = !this.listVisibility;
        }
    },
})

app.mount('#assignment')