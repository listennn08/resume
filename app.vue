<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
const isDark = useDark()
const toggle = useToggle(isDark)
provide('isDark', isDark)
provide('toggle', toggle)
</script>
<template>
  <div pa-4 min-h="screen" dark="bg-dark-200 text-light">
    <div w="6/12" mx-auto>
      <div flex justify="end" mb="4">
        <button 
          @click="toggle()"
          text="lg"
          i-ic-outline-dark-mode
          dark="i-ic-outline-light-mode text-light"
          cursor="pointer"
        />
      </div>
      <NuxtPage />
    </div>
  </div>
</template>
