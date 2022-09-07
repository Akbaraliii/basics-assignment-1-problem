const app = Vue.createApp({
  data() {
    return {
      name: 'Azamjon',
      age: 25,
      imageUrl:
        'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492__340.jpg',
    };
  },
  methods: {
    calculateAge() {
      return this.age + 5;
    },
    calculateRandom() {
      return Math.random();
    },
    // randomNumber() {
    //   const random = Math.floor(Math.random() * 10);
    //   random.textContext();
    //},
  },
});

app.mount('#assignment');
