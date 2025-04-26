import React from 'react'

const Modal = ({ children }: {
  children: React.ReactNode
}) => {
  return (
    <div className="modal">
      <div>
        { children }
      </div>
    </div>
  )
}

export default Modal