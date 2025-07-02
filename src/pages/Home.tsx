import hello from '/hello.gif'
import spotify from '/spotify.png'
import '../App.css'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Dialog } from '@mui/material'

function Home() {
  const [pandaMessage, setPandaMessage] = useState<string>('')
  const [pandaSongLink, setPandaSongLink] = useState<string>('')
  const [pandaSong, setPandaSong] = useState<boolean>(false)
  const [pandaMood, setPandaMood] = useState<string>('')

  function onWhatAreUfeelingsToday() {
    const messages = 'hey trin... sorry but Panda have nothing to say today 🐼'
    const moods = 'Patient'

    const message = localStorage.getItem('pandaMessage') && setPandaMessage(localStorage.getItem('pandaMessage') || '')
    setPandaMessage(message || messages)
    
    const mood = localStorage.getItem('pandaMood') && setPandaMood(localStorage.getItem('pandaMood') || '')
    setPandaMood(mood || moods)
  }

  function onSongOfTheDay() {
    setPandaSong(true)
  }

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/debora-maciel/trin-forgive-me/refs/heads/main/feeling.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not OK');
        }
        return response.json();
      })
      .then(data => {
        localStorage.setItem('pandaMood', JSON.stringify(data.mood));
        localStorage.setItem('pandaMessage', JSON.stringify(data.message));
        setPandaSongLink(data.song);
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
          <p className='text-base mb-4 text-left bg-gray-200 shadow-inner rounded-lg p-2'>{pandaMessage}</p>
          <p className='text-md text-gray-500 mb-2'>Panda's mood: <span className='font-semibold'>{pandaMood}</span></p>
          <button
            className='button text-black dark:text-white'
            onClick={() => setPandaMessage('')}
          >
            Close
          </button>
        </div>
      </Dialog>
      <Dialog open={pandaSong} onClose={() => setPandaSong(false)}>
        <div className='flex flex-col items-center justify-center p-5'>
          <h2 className='text-2xl font-bold mb-4'>Panda's Song of the Day</h2>
          <p className='text-lg mb-4'>{pandaSong}</p>
          <iframe className="border-radius:12px"
            src={pandaSongLink} width="100%" height="352"
            frameBorder="0"
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          <button
            className='button text-black dark:text-white mt-2'
            onClick={() => setPandaSong(false)}
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
      {pandaSongLink && (
        <div className="card">
          <button onClick={() => onSongOfTheDay()} className="rounded-[8px] bg-green-500 flex gap-2 items-center justify-center ">
            <img src={spotify} alt="Spotify logo" className='w-[20px]' />  Song of the day
          </button>
          <p>
          </p>
        </div>
      )}
      <Link to={'/send-message'} className="read-the-docs mt-3 text-sm">
        Message Panda Arrependido
      </Link>
    </div>
  )
}

export default Home
