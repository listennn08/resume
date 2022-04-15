<script setup lang="ts">

interface Props {
  [key: string]: string
  href: string
}

const props = withDefaults(defineProps<Props>(), {
  href: '#',
})

const { href, ...otherProps } = props
</script>
<template>
  <a :href="href" target="_blank" class="text-dark-200" hover="text-green-500" dark="text-light" v-bind="otherProps">
    <slot />
  </a>
</template>