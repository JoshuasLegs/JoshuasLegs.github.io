
import gameplay1png from "./../../assets/gameplay1.png";
import gameplay1 from "./../../assets/gameplay1.mp4";
import gameplay2png from "./../../assets/gameplay2.png";
import gameplay2 from "./../../assets/gameplay2.mp4";
import gameplay3png from "./../../assets/gameplay3.png";
import gameplay3 from "./../../assets/gameplay3.mp4";
import joshua from './../../assets/joshua.gif';
import hang from './../../assets/hang.mp4';
import rock from './../../assets/rock.png';
import web from "./../../assets/web.mp4";

import "./home.scss";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Fade } from "react-awesome-reveal";
import { GameplayItem } from "../gameplay-item/gameplay-item";
import { Link } from "react-router-dom";


export function Home() {

    const { t, i18n } = useTranslation();
    const paths = [[gameplay3png, gameplay3], [gameplay2png, gameplay2], [gameplay1png, gameplay1]]

    const onLangChange = useCallback((l: string) => {
        i18n.changeLanguage(l);
    }, [i18n])

    return (
        <div className="App h-full" >
            <div className="section flex-col flex section2">
                <div className="text-center white pixelatus text-base md:text-3xl mt-5 underline">
                    <Link to="/press">{t("presskit")}</Link>
                </div>
                <div className="flex flex-row justify-center items-center mt-3">
                    <span className='text-base md:text-3xl red-light pixelatus' >{t("A GAME BY:")}</span>
                    <div>
                        <a className='text-base md:text-3xl white ml-5 pixelatus underline' href="https://twitter.com/trespetitlegume">@trespetitlegume</a>
                    </div>
                </div>
                <Fade delay={100} duration={1500} className='m-5 flex justify-center pixelatus text-2xl md:text-4xl white'>
                    <p className="text-width text-center uppercase">{t("styleDescription")}</p>
                </Fade>
                <div className='mt-24 flex flex-col content-center items-center'>
                    {paths.map((p, i) => <GameplayItem key={p[0]} className='text-width mb-10' img={p[0]} video={p[1]}></GameplayItem>)}
                </div>
                <Fade delay={100} duration={1500} className='text-center pixelatus text-2xl md:text-4xl red-light m-5 mt-0 flex justify-center text-center'>
                    <span className='text-width uppercase'>{t("gameplayTitle")}</span>
                </Fade>
                <div className="flex flex-row items-center justify-center">
                    <div className='half'>
                        <video className='web w-full' muted autoPlay width={720} height={1280} loop playsInline controls={false} preload='auto'>
                            <source src={web} type="video/mp4" />
                        </video>
                    </div>
                    <Fade delay={100} duration={1500} className='text-left flex pixelatus text-2xl md:text-4xl red-light mr-10 half z-10'>
                        <span className='gif-text uppercase'>{t("webDescription")}</span>
                    </Fade>
                </div>

                <div className="flex flex-row items-center justify-center">
                    <Fade delay={100} duration={1500} className='text-right flex pixelatus text-2xl md:text-4xl red-light ml-10 z-10 half justify-end'>
                        <span className='gif-text uppercase'>{t("gripDescription")}</span>
                    </Fade>
                    <div className='half'>
                        <video className='hang w-full' muted autoPlay width={720} height={1280} loop playsInline controls={false} preload='auto'>
                            <source src={hang} type="video/mp4" />
                        </video>
                    </div>
                </div>

                <Fade delay={200} duration={1500} className='mt-5 text-center pixelatus text-2xl md:text-4xl red-light m-5 mt-24 flex justify-center'>
                    <span className='text-width uppercase'>{t("gameDescription2")}</span>
                </Fade>
                <Fade delay={100} duration={1500} className='mt-5 text-center pixelatus text-2xl md:text-4xl white m-5 flex justify-center'>
                    <span className='text-width uppercase'>{t("gameDescription")}</span>
                </Fade>
                <div className="flex flex-col w-full justify-center content-end">
                    <div className='flex flex-row justify-center items-end'>
                        <img src={rock} className="rock joshua-rock contain" alt="logo" />
                    </div>
                </div>
            </div >

            <div className="section flex flex-col content-center justify-between section1">
                <div className="flex flex-col w-full content-center justify-center">
                    <div className='flex flex-row justify-center items-start'><img src={joshua} className="joshua-gif joshua-rock contain" alt="logo" /></div>
                    <div><p className="text-center pixelatus text-3xl white uppercase">{t("SCROLL UP TO CLIMB")}</p></div>
                </div>
                <div className="flex flex-col content-center justify-center">
                    <div className='mb-2'>
                        <h1 className="title second text-center">JOSHUAS</h1>
                        <h1 className="title first text-center">LEGS</h1>
                    </div>
                    <div className='mb-2'>
                        <p className="text-center pixelatus text-xl md:text-2xl white uppercase">{t("comingsoon")}</p>
                    </div>
                    <div className="flex flex-row platforms justify-center items-center mb-4 white">
                        <a className='text-xl md:text-2xl disabled' href="/">PC</a>
                        <div className='white-square md:m-1'></div>
                        <a className='text-xl md:text-2xl disabled' href='/'>SWITCH</a>
                        <div className='white-square md:m-1'></div>
                        <a className='text-xl md:text-2xl disabled' href='/'>PS4</a>
                        <div className='white-square md:m-1 disabled'></div>
                        <a className='text-xl md:text-2xl disabled' href='/'>IOS</a>
                        <div className='white-square md:m-1'></div>
                        <a className='text-xl md:text-2xl disabled' href="/">ANDROID</a>
                        <div className='white-square md:m-1'></div>
                        <a className='text-xl md:text-2xl' href='https://danielletremblay.bandcamp.com'>OST</a>
                    </div>
                    <div className='flex flex-row justify-center text-2xl red-light pixelatus mb-4'>
                        <button onClick={() => onLangChange("en")}>EN</button>
                        <span className='md:text-3xl ml-1 mr-1'>/</span>
                        <button onClick={() => onLangChange("fr")}>FR</button>
                    </div>
                </div>

            </div>

        </div >
    );
}