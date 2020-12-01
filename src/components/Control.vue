<template>
  <div>
    <h1>Control Locomotive</h1>
    <form @submit.prevent="updateLoco">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Direction:</label> &nbsp;
            <toggle-button v-model="post.forward" :width="75" :labels="{checked: 'Forward', unchecked: 'Backward'}" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Throttle:</label> &nbsp;
            <vue-slider v-model="post.throttle"></vue-slider>
          </div>
        </div>
      </div>
      <br />
      <div class="form-group">
        <button class="btn btn-primary">Send</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: {},
    };
  },
  methods: {
    updateLoco() {
      console.log(this.post);
      let uri = 'http://localhost:4000/api/throttle';
      this.axios.post(uri, this.post).then((res) => {
        console.log(res);
      });
    }
  },
};
</script>