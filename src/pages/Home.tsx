import hello from '/hello.gif'
import spotify from '/spotify.png'
import '../App.css'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Dialog } from '@mui/material'

function Home() {
  const [pandaMessage, setPandaMessage] = useState<string>('')
  const [pandaSong, setPandaSong] = useState<string>('')
  const [pandaMood, setPandaMood] = useState<string>('')

  function onWhatAreUfeelingsToday() {
    const messages = 'hey trin... sorry but Panda have nothing to say today 🐼'

    const moods = 'Patient'

    setPandaMessage(messages)
    setPandaMood(moods)
  }

  function onSongOfTheDay() {
    setPandaSong('aa')
  }

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/your-username/your-repo/main/data.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not OK');
        }
        return response.json();
      })
      .then(data => {
        console.log('Fetched JSON:', data);
      })
      .catch(error => {
        console.error('Error fetching JSON:', error);
      });


  }, [])

  return (
    <div className='flex flex-col items-center justify-center h-full'>
      <Dialog open={!!pandaMessage} onClose={() => setPandaMessage('')}>
        <div className='flex flex-col items-center justify-center p-5'>
          <h2 className='text-2xl font-bold mb-4'>Panda Arrependido</h2>
          <p className='text-lg mb-4'>{pandaMessage}</p>
          <p className='text-md text-gray-500'>Panda's mood: <span className='font-semibold'>{pandaMood}</span></p>
          <button
            className='button text-black dark:text-white'
            onClick={() => setPandaMessage('')}
          >
            Close
          </button>
        </div>
      </Dialog>
      <Dialog open={!!pandaSong} onClose={() => setPandaSong('')}>
        <div className='flex flex-col items-center justify-center p-5'>
          <h2 className='text-2xl font-bold mb-4'>Panda's Song of the Day</h2>
          <p className='text-lg mb-4'>{pandaSong}</p>
          <iframe className="border-radius:12px" src="https://open.spotify.com/embed/track/6LDAUF7L1PhZh0utprIpe2?utm_source=generator" width="100%" height="352" frameBorder="0"
            allowFullScreen={false} allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          <img src={spotify} alt="Spotify logo" className='w-[100px] mb-4' />
          <button
            className='button text-black dark:text-white'
            onClick={() => setPandaSong('')}
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
      <div className="card">
        <button onClick={() => onSongOfTheDay()} className="rounded-[8px] bg-green-500">
          Song of the day
        </button>
        <p>
        </p>
      </div>
      <Link to={'/send-message'} className="read-the-docs mt-3 text-sm">
        Message Panda Arrependido
      </Link>
    </div>
  )
}

export default Home
