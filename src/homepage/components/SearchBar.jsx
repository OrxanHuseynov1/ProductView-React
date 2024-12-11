import {themeStore} from "../../common/Store"
import { useStore } from "zustand"


const SearchBar = ({searchTerm,setSearchTerm}) => {

  const {theme,toggle} = useStore(themeStore)    



  return (
    <div className="flex items-center justify-center border-b border-zinc-400 py-4 gap-3">
        <button onClick={toggle}>{theme === "light" ? "Active dark mode" : "Active light mode"}</button>
        <h3>Search: </h3>
        <input type="text" className="border border-zinc-400 p-2" placeholder="Search for items" value={searchTerm} onChange={(e) => {setSearchTerm(e.target.value)}} />

    </div>
  )
}

export default SearchBar