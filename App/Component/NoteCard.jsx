import axios from 'axios'
import React, { useState } from 'react'


function NoteCard({ id, title, dsicr, color, colorName, handleDelete }) {
  const [isNotEditing, setIsEditing] = useState(true)
  const [updateContent, setUpdatedContent] = useState({
    id,
    title,
    dsicr,
    color
  })
  const handleSubmit = (e)=>{
    e.preventDefault()
    setIsEditing(preState => !preState)
    
  }
  const deleteNote = (id)=>{
    console.log(id)
    axios.delete(`http://localhost:3000/deleteById/${id}`)
      .then(res => console.log(res))
    handleDelete(id)
  }
  return (

    <form onSubmit={handleSubmit}>
    <div 
      style={{ 
        backgroundColor: updateContent.color, 
        padding: "10px", 
        borderRadius: '10px', 
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', 
        maxWidth: '500px', 
        margin: '0 auto'
      }}
    >
      <div 
        style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '10px', 
          padding: '16px'
        }}
      >
        <div style={{ marginBottom: '16px' }}>
          <h2 
            style={{ 
              fontSize: '1.25rem', 
              fontWeight: 'bold', 
              marginBottom: '8px'
            }}
          >
            Title
          </h2>
          <input
            type="text"
            value={updateContent.title}
            disabled={isNotEditing}
            onChange={(e) => setUpdatedContent(prevState => ({ ...prevState, title: e.target.value }))}
            required
            style={{ 
              width: '100%', 
              padding: '8px', 
              border: '1px solid #ddd', 
              borderRadius: '4px'
            }}
          />
        </div>
        <div style={{ marginBottom: '16px' }}>
          <h2 
            style={{ 
              fontSize: '1.25rem', 
              fontWeight: 'bold', 
              marginBottom: '8px'
            }}
          >
            Description
          </h2>
          <input
            type="text"
            value={updateContent.dsicr}
            disabled={isNotEditing}
            onChange={(e) => setUpdatedContent(prevState => ({ ...prevState, dsicr: e.target.value }))}
            required
            style={{ 
              width: '100%', 
              padding: '8px', 
              border: '1px solid #ddd', 
              borderRadius: '4px'
            }}
          />
        </div>
        <div style={{ marginBottom: '16px' }}>
          <h2 
            style={{ 
              fontSize: '1.25rem', 
              fontWeight: 'bold', 
              marginBottom: '8px'
            }}
          >
            Color
          </h2>
          <input
            type="text"
            value={colorName}
            disabled={isNotEditing}
            required
            style={{ 
              width: '100%', 
              padding: '8px', 
              border: '1px solid #ddd', 
              borderRadius: '4px'
            }}
          />
          
        </div>
        <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
          <button
            type="button"
            onClick={() => deleteNote(id)}
            style={{ 
              backgroundColor: 'red', 
              color: 'white', 
              padding: '8px 16px', 
              border: 'none', 
              borderRadius: '4px', 
              cursor: 'pointer'
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  </form>
  )
}

export default NoteCard
