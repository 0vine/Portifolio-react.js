import './sectionBanner.css'
import BannerImg from '../../assets/banner-img.png'


export const SectionBanner = () => {
    return(
        <>
        <div className='div-main2'>
        <section className='section-container'>
            <div className='div-container'>
                <h4>Vinicius Moreira</h4>
                <h1>Bem Vindo ao meu portifólio</h1>
                <p>"Persistência é o caminho do êxito"</p>
                <button>Saiba mais</button>
            </div>

            <img src={BannerImg} alt="Imagem PC aleatoria" />
        </section>
        </div>
       
        </>
    )
}