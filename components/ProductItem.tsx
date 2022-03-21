import dynamic from "next/dynamic";
import { memo, useState } from "react";
import { AddProductToWishListProps } from "./AddProductToWishList";

const AddProductToWishList = dynamic<AddProductToWishListProps>(() => {
    return import("./AddProductToWishList").then(module => module.AddProductToWishList);
}, {
    loading: () => <span>Loading...</span>
});

interface ProductItemProps {
    product: {
        id: number;
        title: string;
        price: number;
        priceFormatted: string;
    };
    onAddToWichList: (id: number) => void;
}

function ProductItemComponent({ product, onAddToWichList }: ProductItemProps) {
    const [showAddToWishList, setShowAddToWishList] = useState(false);

    async function showFormattedDate() {
        //const {format} = await import('./formattedDate.js');
        //const formattedDate = format(new Date());
        //console.log(formattedDate);
    }

    return (
        <div>
            {product.title} - <strong>{product.priceFormatted}</strong>
            <button onClick={() => setShowAddToWishList(true)}>Add to wish list</button>

            {showAddToWishList && (
                <AddProductToWishList
                    onAddToWishList={() => onAddToWichList(product.id)}
                    onRequestClose={() => setShowAddToWishList(false)}
                />
            )}
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
