import { PageTemplate } from "./PageTemplate"
import { SectionBanner } from "./components/SectionBanner/SectionBanner"
import { SectionAboutMe } from "./components/SectionAboutMe"
import { SectionTecn } from "./components/SectionTecn"
import { SectionProjects } from "./components/SectionProjects"
import { technologies } from "./data/technologies"
import { projects } from "./data/projects"
import "./styles/GlobalStyles.css"


function App() {

  return (
    <>
    <PageTemplate>
      <SectionBanner></SectionBanner>
      <SectionAboutMe></SectionAboutMe>
      <SectionTecn tecnologias={technologies}></SectionTecn>
      <SectionProjects projetos={projects}></SectionProjects>
    </PageTemplate>
    </>
  )
}

export default App
