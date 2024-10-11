import CountDowntBanner from '@components/CountDowntBanner/CountDowntBanner';
import MainLayout from '@components/Layout/Layout';
import ProductItem from '@components/ProductItem/ProductItem';
import styles from './styles.module.scss';

function HeadingListProduct({data}) {
    const { container, containerItem } = styles;
    return (
        <MainLayout>
            <div className={container}>
                <CountDowntBanner />

                <div className={containerItem}>
                    {data.map((item) => (
                        <ProductItem
                            key={item.id}
                            src={item.images[0]}
                            prevSrc={item.images[1]}
                            name={item.name}
                            prices={item.price}
                        />
                    ))}
                </div>
            </div>
        </MainLayout>
    );
}

export default HeadingListProduct;
