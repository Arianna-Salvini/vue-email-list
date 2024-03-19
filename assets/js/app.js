console.log('Hello API');

const { createApp } = Vue
createApp({
    data() {
        return {
            emails: [],
        }
    },
    methods: {

        // emailGenerator() {
        //     // Svuoto la lista ad ogni generazione
        //     this.emails = []

        //     // Itero la richiesta per 10 volte
        //     for (let i = 0; i < 10; i++) {
        //         axios
        //             .get('https://flynn.boolean.careers/exercises/api/random/mail')
        //             .then(response => {
        //                 // console.log(response.data.response);
        //                 this.emails.push(response.data.response)
        //             })

        //     }
        // },

        ///// Async/await /////
        async emailGenerator() {
            this.emails = []

            for (let i = 0; i < 10; i++) {
                const response = await axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                this.emails.push(response.data.response)
            }

        },

    },
}).mount('#app')