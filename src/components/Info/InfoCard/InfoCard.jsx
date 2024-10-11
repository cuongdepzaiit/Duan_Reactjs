import styles from '../../Info/styles.module.scss';
// import Truckicon from '../../../assets/icons/svgs/track-icon.svg'

function InfoCard({content, description, src}) {
    console.log(content, description, src);
    
    const { containerCard, containerContent, title, des } = styles;
    return <div className={containerCard}>

            <img width={40} height={40} src={src} alt='Truckicon' />
            <div className={containerContent}>
                <div className={title}>{content}</div>
                <div className={des}>{description}</div>
            </div>
        </div>
    
}

export default InfoCard;
