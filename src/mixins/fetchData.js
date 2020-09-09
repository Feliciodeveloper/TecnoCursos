export default {
  data() {
    return {
      api: {},
    };
  },
  methods: {
    fetchData(param) {
      fetch(`http://localhost:3000/${param}`)
        .then((r) => r.json())
        .then((r) => {
          this.api = r;
        });
    },
  },
}