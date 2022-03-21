import { ProductItem } from "./ProductItem";

interface SearchResultsProps {
    totalPrice: number;
    results: Array<{
        id: number;
        title: string;
        price: number;
        priceFormatted: string;
    }>;
    onAddToWichList: (id: number) => void;
}

export function SearchResults({ results, totalPrice, onAddToWichList }: SearchResultsProps) {

    return (
        <div>
            <h1>{totalPrice}</h1>
            <div>
                {results.map(product => (
                    <ProductItem
                        key={product.id}
                        product={product}
                        onAddToWichList={onAddToWichList}
                    />
                ))}
            </div>
        </div>
    )
}

// Only use useMemo if

// 1. weight calculation is too heavy
// 2. Comparison to other components is too heavy
