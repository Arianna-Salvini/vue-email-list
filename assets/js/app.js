console.log('Hello API');

const { createApp } = Vue
createApp({
    data() {
        return {
            emails: []
        }
    },
    methods: {
        emailGenerator() {
            for (let i = 0; i < 10; i++) {
                axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then(response => {
                    // console.log(response.data.response);
                    this.emails.push(response.data.response)
                })
            }
            
        }
    },

    mounted() {
    },
}).mount('#app')