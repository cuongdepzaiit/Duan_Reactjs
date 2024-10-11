
import styles from './style.module.scss';

function MainLayout({children}) {
    const {wrapLayout, container } = styles;
    return ( 
        //clsx thường dùng để nhóm các className lại chung với nhau.
        <main className={wrapLayout}>
            <div className={container}>{children}</div>
        
        </main>
     );
}

export default MainLayout;