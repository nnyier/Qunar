<template>
  <div id="app">
    <!-- 除了Detail组件，其他都缓存 -->
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
</style>
