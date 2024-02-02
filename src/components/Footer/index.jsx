import wppicon from "../../assets/whatsapp-icon.png";
import linkedinicon from "../../assets/linkedin-icon.png";
import githubicon from "../../assets/github-icon.png";
import'./footer.css'

export const Footer = () => {
    return (
        <>
            <div className="divmain6">
                <footer className="container-footer">
                    <div className="div-contatos">
                        <h1>Contato</h1>
                        <img src={wppicon} alt="WhatsApp" />
                        <img src={linkedinicon} alt="Linkedin" />
                        <img src={githubicon} alt="Github" />
                    </div>
                    <p>- Todos os direitos reservados - Vinicius Moreira</p>
                </footer>
            </div>

        </>
    )
}