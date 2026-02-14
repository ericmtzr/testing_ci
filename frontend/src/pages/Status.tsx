
import React from 'react'

export const Status: React.FC = () => {
  const [data, setData] = React.useState<any>(null)
  const [error, setError] = React.useState<string>('')
  const ping = async () => {
    setError('')
    try{
      const r = await fetch('http://localhost:8000/api/status/')
      const j = await r.json()
      setData(j)
    }catch(e:any){
      setError(String(e))
    }
  }
  return (
    <section>
      <p>Check backend status:</p>
      <button onClick={ping}>Ping API</button>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
      {error && <p style={{color:'crimson'}}>{error}</p>}
    </section>
  )
}
