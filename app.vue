<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import { getInformation, getProjects, getExperiences } from '~/utils/firebase'

const { data: information } = useAsyncData('information', async () => (await getInformation()))
const { data: projects } = useAsyncData('projects', async () => (await getProjects()).sort((a, b) => a.order - b.order ))
const { data: experiences } = useAsyncData('experiences', async () => (await getExperiences()).sort((a, b) => a.order - b.order ))

provide('information', information)
provide('projects', projects)
provide('experiences', experiences)

const isDark = useDark()
const toggle = useToggle(isDark)

const print = () => {
  window.print()
}
provide('isDark', isDark)
provide('toggle', toggle)
</script>
<template>
  <div pa-4 min-h="screen" text="dark-200"  bg="light" dark="bg-dark-200 text-light" print="pa-0 bg-white">
    <div md="w-10/12" lg="w-1/2" mx-auto print="w-screen">
      <div flex justify="end" mb="4" mx="-2" print="hidden">
        <button
          @click="print"
          text="lg"
          i-ic-outline-print
          cursor="pointer"
          mx="2"
        />
        <button
          @click="toggle()"
          text="lg"
          i-ic-outline-dark-mode
          dark="i-ic-outline-light-mode text-light"
          cursor="pointer"
          mx="2"
        />
      </div>
      <NuxtPage />
    </div>
  </div>
</template>
