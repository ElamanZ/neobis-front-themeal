import React from 'react';
import style from "../Footer/footer.module.css";
import telegram from '../../assets/images/telegram.svg'
import linkedin from '../../assets/images/linkedin.svg'
import github from '../../assets/images/github.svg'
function Footer(props) {
    return (
        <div className={style.footer}>
            <div className={style.footerText}>
                <p>Исследуйте, готовьте, наслаждайтесь.</p>
            </div>
            <div className={style.footerLinks}>
                <a href="https://www.linkedin.com/in/elaman-zarlykov-a91227237/" target="_blank" rel="noopener noreferrer">
                    <img src={linkedin} alt="linkedin_Logo"/>
                </a>
                <a href="https://github.com/ElamanZ" target="_blank" rel="noopener noreferrer" className={style.footerLinks_git}>
                    <img src={github} alt="github_Logo"/>
                </a>
                <a href="https://t.me/elaman_dev" target="_blank" rel="noopener noreferrer" className={style.footerLinks_telegram}>
                    <img src={telegram} alt="telegram_Logo"/>
                </a>
            </div>
        </div>
    );
}

export default Footer;