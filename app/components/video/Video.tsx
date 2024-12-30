import { useRef, useEffect } from 'react'

export const Video = () => {
  const iframeRef = useRef<HTMLIFrameElement | null>(null)

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== 'https://www.youtube.com') return
    }

    window.addEventListener('message', handleMessage)

    return () => {
      window.removeEventListener('message', handleMessage)
    }
  }, [])

  return (
    <div className="group relative mt-16">
      <iframe
        ref={iframeRef}
        width="640"
        height="390"
        src={`https://www.youtube.com/embed/r4B69HAOXnA?enablejsapi=1&autohide=1&modestbranding=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube video player"
        className="w-full rounded-lg"
      />
    </div>
  )
}
