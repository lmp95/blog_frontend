function Masonry({ columns = 2, gap = 20, children }: MasonryProps) {
    const columnWrapper: any = {};
    const result = [];

    for (let i = 0; i < columns; i++) {
        columnWrapper[`column${i}`] = [];
    }

    for (let i = 0; i < children.length; i++) {
        const columnIndex = i % columns;
        columnWrapper[`column${columnIndex}`].push(<div style={{ marginBottom: `${gap}px` }}>{children[i]}</div>);
    }

    for (let i = 0; i < columns; i++) {
        result.push(
            <div
                key={i}
                style={{
                    marginLeft: `${i > 0 ? gap : 0}px`,
                    flex: 1,
                }}
            >
                {columnWrapper[`column${i}`]}
            </div>
        );
    }

    return <div className='flex'>{result}</div>;
}

export default Masonry;

interface MasonryProps {
    columns: number;
    gap: number;
    children: JSX.Element[];
}
