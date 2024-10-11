import styles from '../styles.module.scss'; // lấy scss của Heafer.
import faceIcon from '../../../assets/icons/svgs/face-icon.svg';
import instaIcon from '../../../assets/icons/svgs/instagram-icon.svg';
import ytbIcon from '../../../assets/icons/svgs/youtube-icon.svg';

function BoxIcon({ type, href }) {
    const { BoxIcon } = styles;

    const handleRenderIcon = (type) => {
        switch (type) {
            case 'fb':
                return faceIcon;

            case 'insta':
                return instaIcon;

            case 'ytb':
                return ytbIcon;
            default:
                break;
        }
    };

    return (
        <div className={BoxIcon}>
            <img src={handleRenderIcon(type)} alt={type} />
        </div>
    );
}

export default BoxIcon;
