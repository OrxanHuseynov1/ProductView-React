const SearchBar = ({searchTerm,setSearchTerm}) => {
  return (
    <div className="flex items-center justify-center border-b border-zinc-400 py-4 gap-3">
        <h3>Search: </h3>
        <input type="text" className="border border-zinc-400 p-2" placeholder="Search for items" value={searchTerm} onChange={(e) => {setSearchTerm(e.target.value)}} />

    </div>
  )
}

export default SearchBar