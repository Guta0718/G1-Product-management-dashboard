function WishlistButton({ saved, onClick, className = "" }) {
  return (
    <button
      type="button"
      aria-label={saved ? "Remove from wishlist" : "Add to wishlist"}
      aria-pressed={saved}
      onClick={onClick}
      className={`flex h-9 w-9 items-center justify-center rounded-full border border-ink/15 bg-white/90 text-lg leading-none shadow-sm backdrop-blur transition-colors hover:border-coral hover:text-coral ${className}`}
    >
      <span aria-hidden="true">{saved ? "♥" : "♡"}</span>
    </button>
  );
}

export default WishlistButton;
