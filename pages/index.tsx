import Login from './login'

export default function Home({client, setClient}) {
  return (
    <Login  client={client} setClient={setClient}/>    
  )
}
