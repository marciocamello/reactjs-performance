import { List, ListRowRenderer } from 'react-virtualized';
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

    const rowRenderer: ListRowRenderer = ({ index, key, style }) => {
        return (
            <div
                key={key}
                style={style}
            >
                <ProductItem
                    product={results[index]}
                    onAddToWichList={onAddToWichList}
                />
            </div>
        )
    }

    return (
        <div>
            <h1>{totalPrice}</h1>

            <List
                height={300}
                rowHeight={30}
                width={400}
                overscanRowCount={5}
                rowCount={results.length}
                rowRenderer={rowRenderer}
            />
        </div>
    )
}

// Only use useMemo if

// 1. weight calculation is too heavy
// 2. Comparison to other components is too heavy
