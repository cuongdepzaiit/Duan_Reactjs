import { dataMenu } from '@components/Footer/contansFooter';
import styles from './styles.module.scss'
function MyFooter() {
    const {container, boxNav, textFooter, iconsFooter, textFooterRinght} = styles
    return <div className={container}>
        
        <div>
            <img src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/marseille-logo.png" 
            alt="" 
            width={120}
            height={45}/>
        </div>
        <div className={boxNav}>
            {dataMenu.map((item) => (
                <div> {item.content}</div>
            ))}
        </div>
        <p className={textFooter}>Guaranteed safe ckeckout</p>
        <div className={iconsFooter}>
            <img src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/elementor/thumbs/Icons-123-pzks3go5g30b2zz95xno9hgdw0h3o8xu97fbaqhtb6.png" 
            alt="" />
        </div>
        <p className={textFooterRinght}>Copyright © 2024 XStore theme. Created by CuongDev - WordPress WooCommerce themes.</p>




    </div>;
}

export default MyFooter;
