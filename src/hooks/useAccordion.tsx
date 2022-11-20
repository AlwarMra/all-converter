import { useState } from 'react'

type Selected = string | number | null

interface Accordion {
  selected: Selected
  toggleAccordion: (i: string) => void
}

export default function useAccordion(): Accordion {
  const [selected, setSelected] = useState<Selected>(null)

  function toggleAccordion(i: any) {
    console.log(i)
    if (selected === i) return setSelected(null)
    return setSelected(i)
  }
  return {
    selected,
    toggleAccordion,
  }
}
