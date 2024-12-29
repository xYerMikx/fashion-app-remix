import { useCallback, useState } from 'react'

export function useModal(initialState: boolean = false) {
  const [showModal, setShowModal] = useState(initialState)

  const handleOpen = useCallback(() => {
    setShowModal(true)
  }, [])

  const handleClose = useCallback(() => {
    setShowModal(false)
  }, [])

  return {
    isOpen: showModal,
    handleOpen,
    handleClose,
  }
}
