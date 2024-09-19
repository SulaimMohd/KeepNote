async function findColorName(hexString){
  try {
    hexString = hexString.slice(1, hexString.length)
    console.log(hexString)
    const res = await fetch(`https://www.thecolorapi.com/id?hex=${hexString}`)
    const data = await res.json()

    return data.name.value
    
  } catch (err) {
    console.log(err)
  }
  
}

module.exports = findColorName