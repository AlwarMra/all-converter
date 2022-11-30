import Cell from './Cell'
import Row from './Row'
import Thead from './Thead'

interface Children {
  children?: React.ReactNode
}
const Table = ({ children }: Children) => {
  return (
    <table className='border-collapse table-auto w-full overflow-hidden mb-4'>
      {children}
    </table>
  )
}

Table.Row = Row
Table.Thead = Thead
Table.Cell = Cell

export default Table
