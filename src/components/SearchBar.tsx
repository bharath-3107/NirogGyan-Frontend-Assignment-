import React from 'react'

interface Props {
  query: string
  setQuery: (value: string) => void
}

const SearchBar: React.FC<Props> = ({ query, setQuery }) => (
  <input
    type="text"
    value={query}
    onChange={(e) => setQuery(e.target.value)}
    placeholder="Search by name or specialization"
    className="w-full p-2 border rounded mb-4"
  />
)

export default SearchBar
