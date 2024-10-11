

import Button from '@components/Button/Button';
import styles from './styles.module.scss';
function MyBanner() {
    const { container, content, title, des } = styles;
    return (
        <div className={container}>
            <div className={content}>
               
                <h1 className={title}>XStore Maserati Vietnamese </h1>
                <div className={des}>
                    Make yours celebrations even more special this years with
                    beautiful.
                </div>

               <Button content={'Go to shopping'}/>
            </div>
        </div>
    );
}

export default MyBanner;
