import { useEffect, useState } from 'react'
import axios from 'axios'
import NoteCard from '../Component/NoteCard'
import { useNavigate } from 'react-router-dom'

function App() {
  const [allNotes, setAllNotes] = useState([])
  const navigate = useNavigate()
  const [colorName, setColorName] = useState('')
  const [finding, setFinding] = useState(false)
  const [filteredItems, setFilteredItems] = useState([])
  const [flag, setFlag] = useState(false)
  const handleSubmit = async(e)=>{
    e.preventDefault()
    console.log(colorName)
    setFinding(true)
    await axios.get(`http://localhost:3000/fillteredNote/${colorName}`)
      .then(res => setAllNotes(res.data))
    
  }
  
  useEffect(()=>{
    axios.get('http://localhost:3000/allNotes')
      .then((res)=> setAllNotes(res.data))
  }, [flag])

  const clearAllNotes = async()=>{
    axios.delete('http://localhost:3000/deleteAllNotes').then(res => console.log(res))
    setFlag(pre => !pre)
  }
  console.log(allNotes)
  if(finding){
    filteredItems.length > 0 ? (filteredItems.map(note => (<NoteCard  
      key={note.id} 
      id={note._id} 
      title={note.title} 
      dsicr={note.discription} 
      color={note.color} 
      colorName={note.colorName}
    />))):(<h1>Note found Item with color Name {colorName}</h1>)
  }
  return ( 
    <div style={{ padding: '24px' }}> {/* Equivalent to p-6 */}
    <div 
      style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginBottom: '24px' // Equivalent to mb-6
      }}
    >
      <button 
        onClick={() => navigate('/addNote')} 
        style={{ 
          backgroundColor: '#1d4ed8', // bg-blue-600
          color: 'white', 
          padding: '8px 16px', // Equivalent to px-4 py-2
          borderRadius: '6px', // Equivalent to rounded (0.375rem or 6px)
          boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)', // Equivalent to shadow
          cursor: 'pointer', 
          border: 'none' // Remove border
        }}
        onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#1e40af'} // Equivalent to hover:bg-blue-700
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#1d4ed8'} // Revert to original color
      >
        Create new Note
      </button>

      <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <input
          type='text'
          value={colorName}
          onChange={(e)=> setColorName(e.target.value)}
          style={{ 
            padding: '8px', 
            border: '1px solid #cbd5e0', // Equivalent to border (Tailwind's default gray-300)
            borderRadius: '6px', // Equivalent to rounded (0.375rem or 6px)
            width: 'auto', // Adjust width as needed
            marginRight: '8px' // Space between input and button

          }}
          placeholder='Enter Color...'
          required
        />
        <button 
          style={{ 
            backgroundColor: '#3b82f6', // A lighter blue for the find button
            color: 'white', 
            padding: '8px 16px', 
            borderRadius: '6px', 
            boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)', 
            cursor: 'pointer', 
            border: 'none' // Remove border
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#2563eb'} // Hover effect
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#3b82f6'} // Revert to original color
        >
          Find!!
        </button>
      </form>

      <button 
        onClick={() => clearAllNotes()} 
        style={{ 
          backgroundColor: '#dc2626', // bg-red-600
          color: 'white', 
          padding: '8px 16px', 
          borderRadius: '6px', 
          boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)', 
          cursor: 'pointer', 
          border: 'none' // Remove border
        }}
        onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#b91c1c'} // Equivalent to hover:bg-red-700
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#dc2626'} // Revert to original color
      >
        Clear Notes
      </button>
    </div>
    
    <div 
      style={{ 
        display: 'grid', 
        gap: '24px', // Equivalent to gap-6
        gridTemplateColumns: 'repeat(3, 1fr)' // Equivalent to grid-cols-3
      }}
    >
      {allNotes.length > 0 ? allNotes.map(note => (
        <NoteCard  
          key={note.id} 
          id={note._id} 
          title={note.title} 
          dsicr={note.discription} 
          color={note.color} 
          colorName={note.colorName}
        />
      )) : (
        <h1 
          style={{ 
            fontSize: '1.25rem', // Equivalent to text-xl
            fontWeight: '600', // Equivalent to font-semibold
            textAlign: 'center', 
            gridColumn: 'span 3', // Equivalent to col-span-full
            marginTop: '40px' // Equivalent to mt-10
          }}
        >
          Empty!!
        </h1>
      )}
    </div>
  </div>
  )
}

export default App
