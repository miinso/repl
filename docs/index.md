---
title: Vue REPL
---

<script setup>
import { ref } from 'vue'

const replRef = ref(null)
const initialValue = `<template>\n  <div>Hello from VitePress</div>\n</template>\n`
</script>

# Vue REPL (VitePress Test)

<ClientOnly>
  <div style="height: 360px; border: 1px solid #ddd;">
    <Repl
      ref="replRef"
      :initialValue="initialValue"
      filename="App.vue"
      :autoResize="false"
    />
  </div>
</ClientOnly>
