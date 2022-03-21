import { memo } from "react";

interface ProductItemProps {
    product: {
        id: string;
        title: string;
        price: number;
    }
}

function ProductItemComponent({ product }: ProductItemProps) {
    return (
        <div>
            {product.title} - <strong>{product.price}</strong>
        </div>
    )
}

export const ProductItem = memo(ProductItemComponent, (preProps, nextProps) => {
    return Object.is(preProps.product, nextProps.product);
});

// Only use memo if
// 1. pure functional component is used.
// 2. renders too often
// 3. Re-renders with same props
// 4. Medium to big-size components
