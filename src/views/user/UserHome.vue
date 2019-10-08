<template>
  <Helloworld />
</template>

<script>
import Helloworld from "../../components/HelloWorld";
import UserDashboardLayout from "../../layouts/UserDashboareLayout";
export default {
  components: {
    Helloworld
  },
  created() {
    this.$emit(`update:layout`, UserDashboardLayout);
  }
};
</script>
