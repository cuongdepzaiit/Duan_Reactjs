import styles from './styles.module.scss';
import eyeIcon from '../../assets/icons/svgs/eye-icon.svg';
import reLoadIcon from '../../assets/icons/svgs/reload-icon.svg';
import heartIcon from '../../assets/icons/svgs/heart-icon.svg';
import bikeIcons from '../../assets/icons/svgs/bike-icon.svg';
function ProductItem({src, prevSrc, name, prices}) {
    const { boxImg, showImgWhenHover, showfncWhenHover, boxIcons, title, price } = styles;
    return (
        <div>
            <div className={boxImg}>
                <img
                    src={src}
                    alt=''
                />

                <img
                    src={prevSrc}
                    alt=''
                    className={showImgWhenHover}
                />
                <div className={showfncWhenHover}>
                    <div className={boxIcons}>
                        <img src={bikeIcons} alt='' />
                    </div>

                    <div className={boxIcons}>
                        <img src={heartIcon} alt='' />
                    </div>
                    <div className={boxIcons}>
                        <img src={reLoadIcon} alt='' />
                    </div>
                    <div className={boxIcons}>
                        <img src={eyeIcon} alt='' />
                    </div>
                </div>
            </div>
            <div className={title}>{name}</div>
            <div className={price}>${prices}</div>
        </div>
    );
}

export default ProductItem;
