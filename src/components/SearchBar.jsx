function SearchBar({ value, onChange }) {
  return (
    <div className="relative w-full sm:max-w-xs">
      <label htmlFor="product-search" className="sr-only">
        Search products
      </label>
      <input
        id="product-search"
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search products by name..."
        className="w-full rounded-full border border-ink/15 bg-white px-5 py-2.5 text-sm text-ink placeholder:text-ink/40 focus:border-cobalt"
      />
    </div>
  )
}

export default SearchBar
