const { createApp } = Vue;
createApp({
    data() {
        return {
            message: 'Hello Vue!',
            images : [
                "01.webp",
                "02.webp",
                "03.webp",
                "04.webp",
                "05.webp"
            ],
            activeIndex : 0,
        }
    },
    

}).mount('#app');