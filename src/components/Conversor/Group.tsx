interface Group {
  title: string
  type: string
  children: React.ReactNode
}

const Group: React.FC<Group> = ({ type, title, children }) => {
  return (
    <div data-type={type} className='mb-4'>
      <p className='m-2 font-bold'>{title}:</p>
      <div className='flex gap-3'>{children}</div>
    </div>
  )
}

export default Group
