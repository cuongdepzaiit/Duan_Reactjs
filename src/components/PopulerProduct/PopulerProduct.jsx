import MainLayout from '@components/Layout/Layout';
import ProductItem from '@components/ProductItem/ProductItem';
import styles from './styles.module.scss';
function PopulerProduct({ data }) {
    const { container } = styles;
    return (
        <>
            <MainLayout>
                <div className={container}>
                    {data.map((item) =>(
                        <ProductItem key={item}
                        src={item.images[0]}
                        prevSrc={item.images[1]}
                        name={item.name}
                        prices={item.price}
                        />

                    ))}
           
                </div>
            </MainLayout>
        </>
    );
}

export default PopulerProduct;
