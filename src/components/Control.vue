<template>
  <div>
    <h1>Control Locomotive</h1>
    <form @submit.prevent="updateLoco">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Direction:</label> &nbsp;
            <toggle-button
              v-model="post.forward"
              :width="75"
              :labels="{ checked: 'Forward', unchecked: 'Backward' }"
            />
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

    <h2>Telemetry</h2>
    <div class="row">
      <div class="col-md-6">
        <div class="form-group">
          <label>Direction:</label> &nbsp;
          {{ telemetry.forward ? 'Forward' : 'Backward' }}
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <div class="form-group">
          <label>Throttle:</label> &nbsp;
          {{ telemetry.throttle }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: {},
      telemetry: {
        forward: false,
        throttle: 0,
      },
    };
  },
  methods: {
    updateLoco() {
      // These should get pulled from a config file later
      let throttleUri = "http://localhost:4000/api/throttle";
      let telemetryUri = "http://localhost:4000/api/telemetry";

      this.axios.post(throttleUri, this.post).then(() => {
        this.axios.get(telemetryUri).then((currentTelemetry) => {
          this.telemetry.forward = currentTelemetry.data.forward;
          this.telemetry.throttle = currentTelemetry.data.throttle;
          console.log(this.telemetry);
        });
      });
    },
  },
};
</script>