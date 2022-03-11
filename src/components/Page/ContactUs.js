import React, {useState} from 'react'

export default function ContactUs() {

  const [data, setData] = useState(null)

  function getData(val) {
    setData(val.target.value)
    console.warn(val.target.value);
  }
  return (
    <div className='contct_mn'>
    {data}
      <input type="text" onChange={getData} />
    </div>
  )
}
