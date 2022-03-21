import { useMemo } from "react";
import { ProductItem } from "./ProductItem";

interface SearchResultsProps {
    results: Array<{
        id: number;
        title: string;
        price: number;
    }>;
    onAddToWichList: (id: number) => void;
}

export function SearchResults({ results, onAddToWichList }: SearchResultsProps) {
    const totalPrice = useMemo(() => {
        return results.reduce((acc, product) => acc + product.price, 0)
    }, [results]);

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
