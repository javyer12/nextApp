import { Fragment } from 'react';
import Checkout from '@components/Checkout';
import Order from '@common/Order';

export default function CheckoutOrder({ open, setOpen }) {
    return (
        <Fragment>
            <Order open={open} setOpen={setOpen} />
        </Fragment>
    )
}