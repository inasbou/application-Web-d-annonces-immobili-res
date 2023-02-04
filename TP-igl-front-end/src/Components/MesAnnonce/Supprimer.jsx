import React from 'react'
import { useEffect } from 'react';
const Supprimer = (props) => {
     console.log(props.id)
    useEffect(() => {
        // DELETE request using fetch inside useEffect React hook
        fetch(`http://127.0.0.1:5000/Supprimer/${props.id}`, {
            'method':'DELETE',
            
          })
            //.then(() => setStatus('Delete successful'));
    
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);


  return (
    <div></div>
  )
}

export default Supprimer