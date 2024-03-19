console.log('Hello API');

const { createApp } = Vue
createApp({
    data() {
        return {
            emails: []
        }
    },
    methods: {
       async emailGenerator() {
            this.emails = []
            for (let i = 0; i < 10; i++) {
                const response = await axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                        this.emails.push(response.data.response)
                    }
        }
    },

    mounted() {
    },
}).mount('#app')