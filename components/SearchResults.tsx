import { ProductItem } from "./ProductItem";

interface SearchResultsProps {
    results: Array<{
        id: string;
        title: string;
        price: number;
    }>;
}

export function SearchResults({ results }: SearchResultsProps) {
    return (
        <div>
            <h1>Search Results</h1>
            <div>
                {results.map(product => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}