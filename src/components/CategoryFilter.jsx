function CategoryFilter({ category = [], selected, onChange }) {
  const options = ['all', ...category]

  return (
    <div className="flex flex-wrap gap-2">
      {options.map((category) => {
        const isActive = category === selected
        const label = category === 'all' ? 'All' : category

        return (
          <button
            key={category}
            type="button"
            onClick={() => onChange(category)}
            className={`rounded-full border px-4 py-2 text-sm font-medium capitalize transition-colors ${isActive
              ? 'border-ink bg-ink text-paper'
              : 'border-ink/15 bg-white text-ink/70 hover:border-ink/40'
              }`}
          >
            {label}
          </button>
        )
      })}
    </div>
  )
}

export default CategoryFilter
