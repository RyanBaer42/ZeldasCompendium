import { useState, useEffect } from "react"
import fetchData from "../../ApiCalls"

const ItemDetails = ({itemName}) => {
    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchData(itemName)
          .then(data => {
            setItem(data.data)
            setLoading(false)
          })
          .catch(error => {
            console.log(error)
          })
      }, [itemName])
      
      if (!loading){
          return (
            <div className="ItemDetails">
                
            </div>
          )
      }
}

export default ItemDetails