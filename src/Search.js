const Search = ({ filters, removeOneFilter, clearAllFilters }) => {
    return (  
        <div className="filters-panel">
            <section className="all-filters">
                { filters.map(filter => {
                    return (
                        <div className="filter-applied" key={ filter }>
                            <button className="filter-name">
                                { filter }
                            </button>
                            <button className="filter-remove" 
                                value={ filter } 
                                onClick={(e) => removeOneFilter(e.target.value)}>
                            </button>   
                        </div>
                    )
                }) }
            </section>
            <div className="clear-filters"
                onClick={ () => clearAllFilters() }>Limpar</div>
        </div>
    );
}
 
export default Search;