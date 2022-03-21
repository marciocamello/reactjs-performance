export interface AddProductToWishListProps {
    onAddToWishList: () => void;
    onRequestClose: () => void;
}

export function AddProductToWishList({
    onAddToWishList,
    onRequestClose
}: AddProductToWishListProps) {
    return (
        <span>
            You can add this product to your wish list?
            <button onClick={onAddToWishList}>Sim</button>
            <button onClick={onRequestClose}>Nao</button>
        </span>
    )
}