import { NextPage } from 'next'
import Layout from '../components/Layout'

import Cart from '../components/Cart'
import CartSummary from '../components/CartSummary'
import Products from '../components/Products'

const ProductPage: NextPage = () => {

    return (
        <Layout title="Kalani Products">
            <div>
                <Cart>
                    <CartSummary />
                    <Products />
                </Cart>
            </div>
        </Layout>
    )
}

export default ProductPage