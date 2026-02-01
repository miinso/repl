---
title: Vue REPL
---

<script setup>
import { ref } from 'vue'

const replRef = ref(null)
const initialValue = `<template>\n  <div>Hello from VitePress</div>\n</template>\n`
</script>

# Vue REPL (VitePress Test)

<Repl
      ref="replRef"
      :initialValue="initialValue"
      filename="App.vue"
      :autoResize="false"
    />
