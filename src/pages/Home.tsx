import hello from '/hello.gif'
import '../App.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Dialog } from '@mui/material'

function Home() {
  const [pandaMessage, setPandaMessage] = useState<string>('')
  const [pandaMood, setPandaMood] = useState<string>('')

  function onWhatAreUfeelingsToday() {
    const messages = 'hey trin... sorry but Panda have nothing to say today 🐼'

    const moods = 'Patient'

    setPandaMessage(messages)
    setPandaMood(moods)
  }

  return (
    <div className='flex flex-col items-center justify-center h-full'>
      <Dialog open={!!pandaMessage} onClose={() => setPandaMessage('')}>
        <div className='flex flex-col items-center justify-center p-5'>
          <h2 className='text-2xl font-bold mb-4'>Panda Arrependido</h2>
          <p className='text-lg mb-4'>{pandaMessage}</p>
          <p className='text-md text-gray-500'>Panda's mood: <span className='font-semibold'>{pandaMood}</span></p>
          <button
            className='mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600'
            onClick={() => setPandaMessage('')}
          >
            Close
          </button>
        </div>
      </Dialog>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={hello} className='w-[200px]' alt="Vite logo" />
        </a>
      </div>
      <h3>Check what Panda Arrependido have to say daily!</h3>
      <div className="card">
        <button onClick={() => onWhatAreUfeelingsToday()} className="button">
          How ure feeling today Panda?
        </button>
        <p>
        </p>
      </div>
      <Link to={'/send-message'} className="read-the-docs">
        Click here to send a message to Panda Arrependido
      </Link>
    </div>
  )
}

export default Home
