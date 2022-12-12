import React from 'react'


type Props = {
    input: string,
    className?: string
    handleInput?: (e: React.ChangeEvent<HTMLInputElement>) => void
    maxLength?: number
}

const Input = (props: Props) => {
    const { input, className, handleInput, maxLength } = props
  return (
    <div className={className}>
        <input maxLength={maxLength} placeholder='Add todo...' type="text" value={input} onChange={handleInput} />
    </div>
  )
}

export default Input