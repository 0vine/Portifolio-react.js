import './sectionProjects.css'
import giticon from "../../assets/git-icon.png";


export const SectionProjects = ({projetos}) =>{
    return(
        <>
        <div className='div-main5'>
        <section className='container-project'>
            <header>
                <h1>Projetos</h1>
            </header>
            <ul className='ul-list2'>
                {projetos.map(projeto => {
                    return(
                        <li key={projeto.id} className='list-project'>
                            <div className='div-conteudo'>
                            <h4>{projeto.name}</h4>
                            <p>{projeto.description}</p>
                            <a href={projeto.link} target="_blank">Saiba mais</a>
                            </div> 
                            <div className='div-git'>
                            <img src={giticon} alt="logo-github" />
                            </div>
                        </li>
                    )
                })}
            </ul>
        </section>
        </div>
       
        </>
    )
}