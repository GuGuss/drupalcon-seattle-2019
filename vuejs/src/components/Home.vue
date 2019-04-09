<template>
  <div class="row">
    <div class="col-md-3 col-sm-12"  v-for="item in items">
      <div class="card">
        <img class="card-img-top" v-bind:src="item.field_image[0].url">
        <div class="card-body">
          <p class="card-title">  {{ item.title[0].value }} </p>
          <p class="card-text">{{ item.body[0].value }}</p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <button type="button" class="btn btn-sm btn-outline-secondary">Discover</button>
            </div>
            <small class="text-muted">3 mins</small>
          </div>
        </div>
      </div>
    </div>
    <br>
  </div>
</template>

<script>
export default {
  name: 'items',
  data () {
    return {
      items: this.getData()
    }
  },
  methods: {
    getData: function () {
      this.$http.get('data').then(response => {
        this.items = response.body
        console.log(this.items)
      }, response => {
        console.log('Error fetching data from URL. Please make sure your server is running and properly configured.')
      })
    }
  }
}
</script>

