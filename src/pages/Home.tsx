import spotify from '/spotify.png'
import camera from '/camera.png'
import '../App.css'
import { useEffect, useState } from 'react'
import PandaMessage from './components/PandaMessage'
import DailyPicture from './components/DailyPicture'
import PandaSong from './components/PandaSong'

function Home() {
  const [pandaMessage, setPandaMessage] = useState<string>('')
  const [pandaSongLink, setPandaSongLink] = useState<string>('')
  const [pandaSong, setPandaSong] = useState<boolean>(false)
  const [openDailyPicture, setOpenDailyPicture] = useState<boolean>(false)
  const [dailyPicture, setDailyPicture] = useState<string>('')
  const [pandaMood, setPandaMood] = useState<string>('')

  function onWhatAreUfeelingsToday() {
    const messages = 'hey trin... sorry but Panda have nothing to say today 🐼'
    const moods = 'Patient'

    const message = localStorage.getItem('pandaMessage')
    if (message) {
      setPandaMessage(message)
    } else {
      setPandaMessage(messages)
    }

    const mood = localStorage.getItem('pandaMood')
    if (mood) {
      setPandaMood(mood)
    } else {
      setPandaMood(moods)
    }
  }

  function onSongOfTheDay() {
    setPandaSong(true)
  }

  const storedImage = () => {
    const image = localStorage.getItem('pandaImage')
    if (image != null && image !== 'undefined') {
      return image.replace(/"/g, '').replace(/'/g, '');
    } else {
      return '/zzz.gif'
    }
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
        localStorage.setItem('pandaImage', JSON.stringify(data.image));
        setDailyPicture(data.dailyPicture)
        setPandaSongLink(data.song);
        console.log('Fetched JSON:', data);
      })
      .catch(error => {
        console.error('Error fetching JSON:', error);
      });


  }, [])

  return (
    <div className='flex flex-col items-center justify-center h-full'>
      <PandaMessage key={'panda-message-component'} pandaMessage={pandaMessage} pandaMood={pandaMood} setPandaMessage={setPandaMessage} />
      <DailyPicture key={'daily-picture-component'} dailyPicture={dailyPicture} openDailyPicture={openDailyPicture} setOpenDailyPicture={setOpenDailyPicture} />
      <PandaSong key={'panda-song-component'} pandaSong={pandaSong} pandaSongLink={pandaSongLink} setPandaSong={setPandaSong} />
      <div>
        {/* <a href="https://www.economist.com/sites/default/files/images/print-edition/20160910_CNP002_0.jpg" target="_blank"> */}
        <img draggable={true} src={storedImage()} className='w-[200px]' alt={storedImage()} />
        {/* </a> */}
      </div>
      <p className='text-xl font-bold'>Check what Panda Arrependido have to say!</p>
      <div className="card">
        <button onClick={() => onWhatAreUfeelingsToday()} className="button">
          What do u have to tell me today, Panda?
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
      {dailyPicture && (
        <button onClick={() => setOpenDailyPicture(true)} className="rounded-[8px] bg-green-500 flex gap-2 items-center justify-center ">
          <img src={camera} alt="Photo logo" className='w-[20px]' />  Picture of the day
        </button>
      )}
      {/* <Link to={'/send-message'} className="read-the-docs mt-3 text-sm">
        Message Panda Arrependido
      </Link> */}
    </div>
  )
}

export default Home
