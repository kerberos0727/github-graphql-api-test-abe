import Head from 'next/head'
import Login from './login'

export default function Home({client, setClient}) {
  return (
    <Login  client={client} setClient={setClient}/>    
  )
}

// export async function getStaticProps() {
//   const allPostsData = getSortedPostsData()
//   return {
//     props: {
//       allPostsData
//     }
//   }
// }