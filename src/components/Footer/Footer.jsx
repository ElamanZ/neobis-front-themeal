import React from 'react';
import style from "../Footer/footer.module.css";
import habr from '../../assets/images/habr.svg'
import linkedin from '../../assets/images/linkedin.svg'
import github from '../../assets/images/github.svg'
function Footer(props) {
    return (
        <div className={style.footer}>
            <div className={style.footerText}>
                <h2>Исследуйте, готовьте, наслаждайтесь.</h2>
            </div>
            <div className={style.footerLinks}>
                <a href="https://www.linkedin.com/in/elaman-zarlykov-a91227237/" target="_blank" rel="noopener noreferrer" className={style.footerLinks_linkedin}>
                    <img src={linkedin} alt="linkedin_Logo"/>
                </a>
                <a href="https://github.com/ElamanZ" target="_blank" rel="noopener noreferrer">
                    <img src={github} alt="github_Logo"/>
                </a>
                <a href="https://career.habr.com/elaman_08" target="_blank" rel="noopener noreferrer" className={style.footerLinks_habr}>
                    <img src={habr} alt="habr_Logo"/>
                </a>

            </div>
        </div>
    );
}

export default Footer;