import Image from "next/image";
import { use } from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import parse from "html-react-parser";

import PrintButton from "@/app/components/print-button";
import ToggleThemeButton from "@/app/components/toggle-theme-button";
import TranslateButton from "@/app/components/translate-button";

import { useTranslation } from "@/i18n";
import experienceDataEN from "@/i18n/locales/en/experiences.json";
import experienceDataTW from "@/i18n/locales/zh-TW/experiences.json";
import educationDataEN from "@/i18n/locales/en/educations.json";
import educationDataTW from "@/i18n/locales/zh-TW/educations.json";
import projectsDataEN from "@/i18n/locales/en/projects.json";
import projectsDataTW from "@/i18n/locales/zh-TW/projects.json";

import Avatar from "@/app/assets/avatar.jpeg";

export default function Page({ params }: { params: Promise<{ language: string }> }) {
  const { language } = use(params);
  const { t } = use(useTranslation(language, "resume"));
  const experienceData = language === "zh-TW" ? experienceDataTW : experienceDataEN;
  const projectsData = language === "zh-TW" ? projectsDataTW : projectsDataEN;
  const educationData = language === "zh-TW" ? educationDataTW : educationDataEN;


  return (
    <>
      <div className="fixed top-4 right-4 z-50 flex gap-x-6 items-center">
        <TranslateButton />
        <ToggleThemeButton />
      </div>
      <PrintButton>
        <>
          <section className="flex">
            <div className="w-3/12">
              <Image
                src={Avatar}
                alt="Avatar"
                className="logo mx-4 mb-4 rounded-full"
                height={128}
                loading="eager"
              />
              <div>
                <h1 className="text-3xl font-bold">
                  {t("name")}
                  {language === "zh-TW" &&  (
                    <span className="text-lg pl-2">
                      {t("name_second")}
                    </span>
                  )}
                </h1>
                <h2 className="text-xl">{t("title")}</h2>
              </div>
            </div>
            <div className="w-9/12 flex flex-col p-4">
              <p className="text-lg text-pretty border-b border-gray-300 pb-8 mb-4">
                {t("introduce")}
              </p>
              <div className="text-lg mb-2">
                {t("email")}: <a href="mailto:c6427733@gmail.com" className="not:dark:text-info font-bold hover:text-secondary hover:underline">c6427733@gmail.com</a>
              </div>
              <div className="flex gap-x-2">
                <a href="https://github.com/listennn08" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-all">
                  <FaGithubSquare size={24} />
                </a>
                <a href="https://www.linkedin.com/in/matt-tai/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-all">
                  <FaLinkedin size={24} />
                </a>
              </div>
            </div>
          </section>

          <section className="mb-6">
            <h3 className="text-3xl font-bold mb-4">{t("skills")}</h3>
            <div className="flex flex-wrap gap-4">
              <div className="w-full sm:w-[calc(100%_/_3_-_1rem)]">
                <div>
                  <h4 className="text-xl font-bold mb-2 border-b border-gray-300">Frontend</h4>
                  <ul className="list-disc pl-6 marker:text-gray-600 text-lg">
                    <li>Vue</li>
                    <li>React</li>
                    <li>ES6+</li>
                    <li>SCSS/SASS/PostCSS</li>
                    <li>TypeScript</li>
                  </ul>
                </div>
              </div>
              <div className="w-full sm:w-[calc(100%_/_3_-_1rem)]">
                <div>
                  <h4 className="text-xl font-bold mb-2 border-b border-gray-300">Backend</h4>
                  <ul className="list-disc pl-6 marker:text-gray-600 text-lg">
                    <li>Node.js</li>
                    <li>Express</li>
                  </ul>
                </div>
              </div>
              <div className="w-full sm:w-[calc(100%_/_3_-_1rem)]">
                <div>
                  <h4 className="text-xl font-bold mb-2 border-b border-gray-300">Tools</h4>
                  <ul className="list-disc pl-6 marker:text-gray-600 text-lg">
                    <li>Git</li>
                    <li>Vite</li>
                    <li>Webpack</li>
                    <li>Docker</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-6">
            <h3 className="text-3xl font-bold mb-4">{t("experiences")}</h3>

            <div className="flex flex-col gap-y-8 divide-y divide-gray-300">
              {experienceData.map((experience, index) => (
                <div key={experience.company} className={`flex flex-col pb-8 ${index === 1 ? 'page-break' : ''}`}>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-2xl font-bold">{parse(experience.company)}</h4>
                    <span className="text-gray-400 italic">{parse(experience.duration)}</span>
                  </div>
                  <p className="text-xl font-semibold mb-2">{parse(experience.title)}</p>

                  <ul className="list-disc pl-6 marker:text-gray-600 text-pretty text-lg">
                    {experience.responsibilities.map((responsibility) => (
                      <li key={responsibility}>{parse(responsibility)}</li>
                    ))}
                  </ul>

                  {experience.keyProjects && (
                    <div>
                      <p className="text-lg font-bold mb-1">{t("keyProjects")}</p>
                      <ul className="list-disc pl-6 marker:text-gray-600 text-lg">
                        {Object.entries(experience.keyProjects).map(([key, value]) => (
                          <li key={key}>
                            <b>{key}:</b> {parse(value)}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <div>
                    <p className="text-lg font-bold mb-1">{t("techStack")}</p>
                    <ol className="list-none  pl-6 marker:text-gray-600 text-lg">
                      {Object.entries(experience.techStack).map(([key, value]) => (
                        <li key={key}>{key}: {parse(value)}</li>
                      ))}
                    </ol>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-6">
            <h3 className="text-3xl font-bold mb-4">{t("projects")}</h3>

            {projectsData.map((project, index) => (
              <div key={project.name} className={`flex items-start gap-x-3 mb-4 ${index === 1 ? 'page-break' : ''}`}>
                <Image src={project.img_path} alt={project.name} width={350} height={350} style={{ width: 'auto', height: 'auto' }} loading="eager" />
                <div className="flex-1">
                  <h4 className="text-2xl font-bold">{project.name}</h4>
                  <div className="text-lg mb-4 flex items-center gap-1">
                    <a className="hover:text-secondary" href={project.source_link} target="_blank">Github</a>
                    <span className="text-gray-600">|</span>
                    <a className="hover:text-secondary" href={project.demo_link} target="_blank">Demo</a>
                  </div>
                  <p className="text-lg mb-4">{project.description}</p>
                  <div className="text-lg mb-4 flex items-center gap-1">
                    {t("techStack")}: {project.techStack}
                  </div>
                </div>
              </div>
            ))}
          </section>

          <section className="mb-6">
            <h3 className="text-3xl font-bold mb-4">{t("education")}</h3>
            {educationData.map((education) => (
              <div key={education.name} className="flex flex-col pb-8">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-2xl font-bold">{parse(education.name)}</h4>
                  <span className="text-gray-600 italic">{parse(education.duration)}</span>
                </div>
                <p className="text-xl font-semibold mb-2">{parse(education.degree)}</p>
              </div>
            ))}
          </section>
        </>
      </PrintButton>
    </>
  );
}
