import { useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      navigate('/')
    }, 3500)
    // eslint-disable-next-line
  }, [])

  return (
    <main className='notFound'>
      <h1>404</h1>
      <h2>Oops, Page Not Found!</h2>
      <p>
        You will be automatically redirected back to the{' '}
        <Link to='/'>Home</Link> page
      </p>
    </main>
  )
}

export default NotFound
