import { useCallback, useEffect } from 'react';
import joshua from './assets/joshua.gif';
import hang from './assets/hang.mp4';
import rock from './assets/rock.png';
import './App.scss';
import { GameplayItem } from './components/gameplay-item/gameplay-item';
import gameplay1png from "./assets/gameplay1.png";
import gameplay1 from "./assets/gameplay1.mp4";
import gameplay2png from "./assets/gameplay2.png";
import gameplay2 from "./assets/gameplay2.mp4";
import web from "./assets/web.mp4";
import { useTranslation } from 'react-i18next';

function App() {

  const { t, i18n } = useTranslation();
  const paths = [[gameplay1png, gameplay1], [gameplay2png, gameplay2]]

  const onLangChange = useCallback((l: string) => {
    i18n.changeLanguage(l);
  }, [i18n])

  const resizeObserver = new ResizeObserver(entries => {
    const body = document.querySelector("body");
    if (body)
      body.scrollTo(0, document.body.scrollHeight);
  })


  useEffect(() => {
    resizeObserver.observe(document.body)
    setTimeout(() => resizeObserver.unobserve(document.body), 3000)
  })


  return (
    <div className="App h-full" >
      <div className="section flex-col flex section2">
        <div className="flex flex-row justify-center items-center mt-5">
          <span className='text-base md:text-3xl red pixelatus' >{t("A GAME BY:")}</span>
          <div><a className='text-base md:text-3xl white ml-5 pixelatus' href="https://twitter.com/trespetitlegume">@trespetitlegume</a>
          </div>
        </div>
        <div className='m-5 flex justify-center pixelatus text-lg white'><p className="text-width text-center">{t("styleDescription")}</p></div>
        <div className='mt-24 flex flex-row content-center justify-center'>
          {paths.map((p, i) => <GameplayItem key={i} img={p[0]} video={p[1]}></GameplayItem>)}
        </div>
        <div className='mt-5 text-center pixelatus text-2xl md:text-4xl red m-5 mt-12 flex justify-center text-center'> <span className='text-width'>{t("gameplayTitle")}</span></div>
        <div className="flex flex-row items-center justify-center">
          <div className='half'>
            <video className='web w-full' muted autoPlay width={720} height={1280} loop playsInline controls={false} preload='auto'>
              <source src={web} type="video/mp4" />
            </video>
          </div>
          <div className='text-left flex pixelatus text-2xl md:text-4xl red mr-10 half z-10'><span className='gif-text'>{t("webDescription")}</span></div>
        </div>

        <div className="flex flex-row items-center justify-center">
          <div className='text-right flex pixelatus text-2xl md:text-4xl red ml-10 z-10 half justify-end'><span className='gif-text'>{t("gripDescription")}</span></div>
          <div className='half'>
            <video className='hang w-full' muted autoPlay width={720} height={1280} loop playsInline controls={false} preload='auto'>
              <source src={hang} type="video/mp4" />
            </video>
          </div>
        </div>

        <div className='mt-5 text-center pixelatus text-2xl md:text-4xl red m-5 mt-24 flex justify-center'> <span className='text-width'>{t("gameDescription")}</span></div>
        <div className="flex flex-col w-full justify-center content-end">
          <div className='flex flex-row justify-center items-end'>
            <img src={rock} className="rock joshua-rock contain" alt="logo" />
          </div>
        </div>
      </div >

      <div className="section flex flex-col content-center justify-between section1">
        <div className="flex flex-col w-full content-center justify-center">
          <div className='flex flex-row justify-center items-start'><img src={joshua} className="joshua-gif joshua-rock contain" alt="logo" /></div>
          <div><p className="text-center pixelatus text-lg red">{t("SCROLL UP TO CLIMB")}</p></div>
        </div>
        <div className="flex flex-col content-center justify-center">
          <div className='mb-2'>
            <h1 className="title second text-center">JOSHUAS</h1>
            <h1 className="title first text-center">LEGS</h1>
          </div>
          <div className="flex flex-row platforms justify-center items-center mb-4">
            <a className='text-xl md:text-2xl' href="">PC</a>
            <div className='white-square md:m-1'></div>
            <a className='text-xl md:text-2xl' href=''>SWITCH</a>
            <div className='white-square md:m-1'></div>
            <a className='text-xl md:text-2xl' href=''>PS4</a>
            <div className='white-square md:m-1'></div>
            <a className='text-xl md:text-2xl' href=''>IOS</a>
            <div className='white-square md:m-1'></div>
            <a className='text-xl md:text-2xl' href="">ANDROID</a>
            <div className='white-square md:m-1'></div>
            <a className='text-xl md:text-2xl' href=''>OST</a>
          </div>
          <div className='flex flex-row justify-center text-2xl red pixelatus mb-4'>
            <button onClick={() => onLangChange("en")}>EN</button>
            <span className='md:text-3xl ml-1 mr-1'>/</span>
            <button onClick={() => onLangChange("fr")}>FR</button>
          </div>
        </div>

      </div>

    </div >
  );
}

export default App;
