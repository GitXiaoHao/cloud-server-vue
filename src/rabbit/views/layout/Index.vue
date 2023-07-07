<template>
  <LayoutNav/>
  <LayoutHeader/>
<!--  二级路由出口-->
  <router-view/>
  <LayoutFooter/>
</template>

<script setup>

import LayoutNav from "@/rabbit/views/layout/components/LayoutNav.vue";
import LayoutHeader from "@/rabbit/views/layout/components/LayoutHeader.vue";
import LayoutFooter from "@/rabbit/views/layout/components/LayoutFooter.vue";
</script>

<style scoped>

</style>