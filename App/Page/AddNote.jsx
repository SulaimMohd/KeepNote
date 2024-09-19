import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import Loader from '../Component/Loader'

function AddNote() {
  const navigate = useNavigate()

  const [state, setState] = useState({
    title: '',
    dsicr: '',
    color: '#ffffff'
  })
  const [loading, setLoading] = useState(false)

  const handleSave = async(e) => {
    e.preventDefault()
    console.log(state)
    setLoading(true)
    await axios.post("http://localhost:3000/addNote", {
      title: state.title,
      discription:state.dsicr,
      color:state.color
    }).then(res => console.log(res))
    setLoading(false)
    navigate('/')
    setState({
      title: '',
      dsicr: '',
      color: '#ffffff'
    })
  }
  if(loading) return <h1 
  style={{ 
    display: 'flex', 
    height: '100%', 
    width: '100%', 
    justifyContent: 'center', 
    alignItems: 'center' 
  }}
>
  Loading
</h1>
  return (
    <form 
  onSubmit={handleSave} 
  style={{
    maxWidth: '35rem', 
    margin: '0 auto', 
    backgroundColor: 'white', 
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', 
    borderRadius: '0.5rem', 
    padding: '1.5rem'
  }}
>
  <div style={{  display: 'flex', flexDirection: 'column', gap: '15px' }}>
    
    {/* Title Input */}
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <label 
        htmlFor="title" 
        style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.5rem' }}
      >
        Title
      </label>
      <input
        name="title"
        id="title"
        style={{
          border: '1px solid #2563eb', 
          padding: '0.5rem 0.75rem', 
          borderRadius: '0.375rem'
        }}
        type="text"
        value={state.title}
        required
        onChange={(e) => setState(preState => ({ ...preState, title: e.target.value }))}
      />
    </div>
    
    {/* Description Input */}
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <label 
        htmlFor="dsicr" 
        style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.5rem' }}
      >
        Description
      </label>
      <input
        name="dsicr"
        id="dsicr"
        style={{
          border: '1px solid #2563eb', 
          padding: '0.5rem 0.75rem', 
          borderRadius: '0.375rem'
        }}
        type="text"
        value={state.dsicr}
        required
        onChange={(e) => setState(preState => ({ ...preState, dsicr: e.target.value }))}
      />
    </div>
    
    {/* Color Input */}
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <label 
        htmlFor="color" 
        style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.5rem' }}
      >
        Color
      </label>
      <input
        name="color"
        id="color"
        style={{
          border: '1px solid #2563eb', 
          padding: '0.5rem 0.75rem', 
          borderRadius: '0.375rem'
        }}
        type="color"
        value={state.color}
        onChange={(e) => setState(preState => ({ ...preState, color: e.target.value }))}
      />
    </div>
    
    {/* Submit Button */}
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <button
        type="submit"
        style={{
          backgroundColor: '#2563eb', 
          color: 'white', 
          padding: '0.5rem 1rem', 
          borderRadius: '0.375rem', 
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', 
          cursor: 'pointer',
          transition: 'background-color 0.2s'
        }}
        onMouseEnter={(e) => e.target.style.backgroundColor = '#1d4ed8'}
        onMouseLeave={(e) => e.target.style.backgroundColor = '#2563eb'}
      >
        Save
      </button>
    </div>
  </div>
</form>)
}

export default AddNote