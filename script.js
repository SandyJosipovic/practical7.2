const Name = {
  props: {
    username: String,
    password: String
  },
  template: `
    <input 
      type="text"
      :value="username"
      @input="$emit('update:username', $event.target.value)">

    <input
      type="text"
      :value="password"
      @input="$emit('update:password', $event.target.value)">
  `
};

const namenamename = {
  components: {
    Name,
  },
  data() {
    return {
      username: 'User1234',
      password: 'pas1234',
    };
  },
};

Vue.createApp(HelloVueApp).mount('#v-model-example')