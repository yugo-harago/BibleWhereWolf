<script setup lang="ts">
</script>

<template>
  <div class="container py-5">
    <header class="text-center mb-5">
      <h1 class="display-4 fw-bold text-primary">聖書ワードウルフ</h1>
      <p class="lead text-muted">聖書の言葉で人狼ゲーム</p>
    </header>
    <main>
      <div class="row justify-content-center">
        <div class="col-md-8 col-lg-6">
          <slot></slot>
        </div>
      </div>
    </main>
    <footer class="text-center mt-5 text-muted small">
      <p>&copy; 2024 Bible Word Wolf</p>
    </footer>
  </div>
</template>
