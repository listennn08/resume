type Skill = {
  name: string
  descriptions: string[]
}

type Infomation = {
  cnName: string
  description: string
  enName: string
  expectLoacation: string[]
  expectPosition: string
  mail: string
  phone: number
}

type Project = {
  title: string
  demoUrl: string
  sourceUrl: string
  description: string
  images: string[]
  skills: Skill[]
  order: number
}

type Experience = {
  title: string
  position: string
  descriptions: string[]
  isWorking: boolean
  order: number
  start: {
    year: number
    month: number
  }
  end: {
    year: number
    month: number
  }
  projects: {
    title: string
    description: string
    skills: string[]
  }[]
}