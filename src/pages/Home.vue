<template>
  <div>
    <div>
      123
    </div>
    <input type="button" value="Logout" @click="logout" />
  </div>
</template>
<script>
// import AuthService from "@/services/Auth.js";
export default {
  data() {
    return {

    };
  },
  async created() {
    const loginToken = localStorage.getItem("user");
    if (!loginToken) {
      this.$router.push("/login");
    }

  },
  methods: {
    logout() {
      localStorage.removeItem("login_token");
			window.location.href = '/login';

    },
  },
};
</script>
