// Import the functions you need from the SDKs you need

import { FirebaseError, initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs, addDoc, Firestore, getDoc } from 'firebase/firestore/lite'

function initialFirebase () {
   // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  const config = useRuntimeConfig()
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: config.F_API_KEY,
    authDomain: config.F_AUTH_DOMAIN,
    projectId: config.F_PROJECT_ID,
    storageBucket: config.F_STORAGE_BUCKET,
    messagingSenderId: config.F_MESSAGING_SENDER_ID,
    appId: config.F_APP_ID,
  }

  // Initialize Firebase
  const app = initializeApp(firebaseConfig)

  const db = getFirestore(app)

  return {
    app, db
  }
}


const getCollection = (db: Firestore, cn: string) => collection(db, cn)

export const getInformation = async () => {
  const { db } = initialFirebase()
  return (await getDocs(getCollection(db, 'information'))).docs.map((el) => el.data())[0]
}

export const getProjects = async () => {
  const { db } = initialFirebase()
  return (await getDocs(getCollection(db, 'projects'))).docs.map((el) => el.data())
}
export const createProject = async (project: Project) => {
  const { db } = initialFirebase()
  await addDoc(getCollection(db, 'projects'), project)
}

export const getExperiences = async () => {
  const { db } = initialFirebase()
  return (await getDocs(getCollection(db, 'experiences'))).docs.map((el) => el.data())
}
export const createExperience = async (experience: Experience) => {
  const { db } = initialFirebase()
  return await addDoc(getCollection(db, 'experiences'), experience)
}