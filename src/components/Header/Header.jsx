import BoxIcon from './Box-icon/Box-icon';
import { dataBoxIcon, dataMenu } from './constans';
import Menu from './Menu/Menu';
import styles from './styles.module.scss';
import Logo from '../../assets/icons/images/Logo-retina.png';
import reLoadIcon from '../../assets/icons/svgs/reload-icon.svg';
import heartIcon from '../../assets/icons/svgs/heart-icon.svg';
import cartIcon from '../../assets/icons/svgs/cart-icon.svg';
import useScrollHandling from '@/hooks/useScrollhandling';
import { useEffect } from 'react';
import { useState } from 'react';
import classNames from 'classnames';

function MyHeader() {
    const {
        containeBoxIcon,
        containeMenuOne,
        containerHeader,
        containeBox,
        container,
        fixedHeader,
        topHeader
    } = styles;
    const { scrollPosition } = useScrollHandling();
    const [fixedPosition, setFixedPosition] = useState(false);
    console.log(scrollPosition);

    useEffect(() => {
        // if (scrollPosition > 80) {
        //     setFixedPosition(true);
        // } else {
        //     setFixedPosition(false);
        // }

        // setFixedPosition(scrollPosition > 80 ? true : false);

        setFixedPosition(scrollPosition > 100 ? true : false);
    }, [scrollPosition]);
    return (
        <div
            className={classNames(container, topHeader, {
                [fixedHeader]: fixedPosition
            })}
        >
            <div className={containerHeader}>
                <div className={containeBox}>
                    {/* menu icon Face, Insta, Youtube */}
                    <div className={containeBoxIcon}>
                        {dataBoxIcon.map((item) => {
                            return (
                                <BoxIcon type={item.type} href={item.href} />
                            );
                        })}
                    </div>
                    {/* menu Danh sách 1 */}
                    <div className={containeMenuOne}>
                        {dataMenu.slice(0, 3).map((item) => {
                            return (
                                <Menu content={item.content} href={item.href} />
                            );
                        })}
                    </div>
                </div>

                <div>
                    <img
                        src={Logo}
                        alt='Logo'
                        style={{
                            width: '153px',
                            height: '53px'
                        }}
                    />
                </div>

                <div className={containeBoxIcon}>
                    <div className={containeMenuOne}>
                        {dataMenu.slice(3, dataMenu.length).map((item) => {
                            return (
                                <Menu content={item.content} href={item.href} />
                            );
                        })}
                    </div>

                    {/* menu icon Face, Insta, Youtube */}
                    <div className={containeBoxIcon}>
                        <img
                            width={26}
                            height={26}
                            src={reLoadIcon}
                            alt='reLoadIcon'
                        />
                        <img
                            width={26}
                            height={26}
                            src={heartIcon}
                            alt='heartIcon'
                        />
                        <img
                            width={26}
                            height={26}
                            src={cartIcon}
                            alt='cartIcon'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default MyHeader;
