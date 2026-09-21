function ErrorState({ message = 'Something went wrong. Please try again.', onRetry }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-coral/30 bg-coral/5 py-16 text-center">
      <p className="text-sm font-medium text-coral">{message}</p>
      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="rounded-full border border-ink px-5 py-2 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-paper"
        >
          Try again
        </button>
      )}
    </div>
  )
}

export default ErrorState
