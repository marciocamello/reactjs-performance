interface ProductItemProps {
    product: {
        id: string;
        title: string;
        price: number;
    }
}

export function ProductItem({ product }: ProductItemProps) {
    return (
        <div>
            <span>{product.title} - <strong>{product.price}</strong></span>
        </div>
    )
}