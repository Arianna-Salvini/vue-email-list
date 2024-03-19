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
            this.emails= []
            for (let i = 0; i < 10; i++) {
                axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then(response => {
                    // console.log(response.data.response);
                })
            }
            
        }
    },

    mounted() {
    },
}).mount('#app')