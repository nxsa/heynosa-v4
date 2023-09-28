<template>
  <div id="footer-control" class="index-wrapper">
    <header class="pg-header">
      <NuxtLink to="/" class="brand-img">
        <h1 class="header-text site-header">Nosa Onaiwu</h1>
      </NuxtLink>
    </header>
    <section class="pg-content">
      <div class="item-content">
        <p class="content">I’m Nosa, a product designer, and developer. <br>
          I design and building web and mobile applications that solves problems and help people achieve their goals. I am
          passionate about creating, and simplifying complex, digital experiences that foster consistent user interactions
          across a product. </p>
        <div class="item-status">
          <span class="__label">Availablity</span>
          <span class="__value lz success">Open for work</span>
        </div>
        <p class="content">I love helping companies go from 0-to-1 and then figure out what's next. I've spent my career
          working with early-stage startups/founders as they try to figure out how to translate solutions into appropriate
          digital experiences for their customers.</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}

.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}

.layout-enter-from,
.layout-leave-to {
  filter: grayscale(1);
}
</style>