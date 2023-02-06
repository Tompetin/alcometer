import React from 'react'

export default function Options(arvot) {
  const LKM = []

  for (let i = arvot.min;i <= arvot.max;i = i + 1) {
    LKM.push(i)
  }

  return (
    LKM.map (LKM => {
      return <option value={LKM}>{LKM.toFixed(0)}</option>
    })
  )
}