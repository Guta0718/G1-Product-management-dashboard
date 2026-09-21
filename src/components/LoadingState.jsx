function LoadingState({ message = 'Loading...' }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-24 text-center">
      <div className="h-10 w-10 animate-spin rounded-full border-2 border-ink/15 border-t-cobalt" />
      <p className="text-sm text-ink/60">{message}</p>
    </div>
  )
}

export default LoadingState
