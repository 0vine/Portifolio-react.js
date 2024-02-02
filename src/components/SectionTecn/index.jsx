import './sectionTech.css'

export const SectionTecn = ({ tecnologias }) => {


    return (
        <>
        <div className="div-main4">
        <section className="container-main">
                <header>
                    <h1>Tecnologias</h1>
                </header>
                <ul className='ul-list'>
                    {tecnologias.map(tecnologia => {
                        return (
                            <li key={tecnologia.id} className='li-object'>
                                <img src={tecnologia.img} alt="#" />
                                <h4>{tecnologia.name}</h4>
                            </li>
                            
                        )
                    })}

                </ul>
            </section>
        </div>
          
        </>
    )
}