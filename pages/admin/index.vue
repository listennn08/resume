<script setup lang="ts">
const projects = inject('projects')
const experiences = inject('experiences')

const skillCategory = reactive([
  {
    title: 'JavaScript',
    skills: [
      'Typescript',
      'ES6+',
      '使用 AJAX 串接 RESTful API',
      'ESLint',
    ]
  },
  {
    title: 'Framework',
    skills: [
      'Vue',
      'Vuex',
      'Pinia',
      'React',
      'Redux ',
    ],
  },
  {
    title: 'CSS Processor',
    skills: [
      'SCSS',
      'PostCSS',
    ],
  },
  {
    title: 'Tools',
    skills: [
      'Git 版本控制',
      'Vite',
      'Webpack',
    ],
  },
])

const getDate = (y: number, m: number) => `${y} 年 ${m} 月`
</script>
<template>
  <main my="4" border border-gray-500 border-op50 pa-4 rounded-md shadow>
    <section sm="flex items-start" mb="4">
      <img src="https://randomuser.me/api/portraits/men/36.jpg" rounded="full" mr="4" />
      <div w="full">
        <h1 text="2xl" font="bold" mb="4">
          戴立昇
          <span text="xl">Matt Tai</span>
        </h1>
        <p mb="4">
          在公司開發既有專案，也於下班時間精進自己摸索程式語言 ，樂於分享所學知識，也喜歡探索未知的事物，學習新的知識，享受開發與解決問題的樂趣！
        </p>
        <p mb="2">
          <Link inline-block w-8 h-8 i-mdi-github href="#" />
          <Link inline-block w-8 h-8 i-mdi-linkedin href="#" />
        </p>
        <p lh="1.2rem">
          職稱：前端工程師<br />
          地點：台北<br />
          信箱：<Link href="mailto:c6427733@gmail.com">c6427733@gmail.com</Link><br />
          電話：<Link href="tel:+886-986249722">0986249722</Link><br />
        </p>
      </div>
    </section>
    <section>
      <h2 text="xl" mb="2">技能</h2>
      <div flex="~ wrap" mx="-4">
        <div w-full sm="w-1/2" md="w-1/3" px="4" mb="4" v-for="({ title, skills }) in skillCategory" :key="title" box-border>
          <h3 text="lg" pb="1" mb="3" border-b="2 gray-500 op50">{{ title }}</h3>
          <ul list-disc ml="5">
            <li mb="2" v-for="skill in skills" :key="title + skill">{{ skill }}</li>
          </ul>
        </div>
      </div>
    </section>
    <section>
      <h2 text="xl" mb="2">專案</h2>
      <div v-for="project in projects" :key="project.id" mb="4">
        <h3 text="lg" mb="1" font="bold">
          <Link :href="project.demoUrl" no-underline>{{ project.title }}</Link>
        </h3>
        <Link :href="project.sourceUrl" inline-block mb="3">source code</Link>
        <div>
          <div mb="2">
            <h4 mb="2">使用技術</h4>
            <ul lh="1.5rem" flex justify="start">
              <li v-for="{ name, descriptions } in project.skills" :key="name" w="1/3">
                <span font="semibold">{{ name }}</span>
                <ul list-disc ml="5" >
                  <li v-for="description, i in descriptions" :key="name + i">{{ description }}</li>
                </ul>
              </li>
            </ul>
          </div>
          <div w="full" flex items="start" mx="-2">
            <img
              v-for="image in project.images"
              :key="image"
              :src="image"
              w="1/2"
              ma="2"
              object="contain"
            />
          </div>
        </div>
      </div>
    </section>
    <section>
      <h2 text="xl" mb="2">工作經歷</h2>
      <ul>
        <li
          v-for="exp in experiences"
          :key="exp.title"
          relative
          pl="4"
          mb="4"
          class="not-last-of-type:before:top-5.2 not-last-of-type:before:-bottom-9.2"
          before="absolute content-empty left-0.8 border-1 border-gray-500"
          after="absolute content-empty left-0 top-3 w-2 h-2 bg-gray-500 transform rotate-45 origin-center"
        >
          <h3 text="lg" font="bold">
            {{ exp.title }}—{{ exp.position}}，
            {{ getDate(exp.start.year, exp.start.month) }} - {{ exp.isWorking ? '至今' : getDate(exp.end.year, exp.end.month)}}
          </h3>
          <ul lh="1.5rem" ml="5">
            <li
              list-disc
              v-for="desc in exp.descriptions"
              :key="desc"
            >
              {{ desc }}
            </li>
            <li>
              <ul ml="5" list-circle>
                <li v-for="jobProject in exp.projects">
                  {{ jobProject.title }}
                  <ul py="1">
                    <li v-for="jobSkill in jobProject.skills">{{ jobSkill }}</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </section>
  </main>
</template>