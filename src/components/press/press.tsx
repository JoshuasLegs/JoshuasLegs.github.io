import "./press.scss";
import title from "../../assets/press/title/title.png";
import stream_in_progress from "../../assets/press/title/stream_in_progress.png";
import capsule from "../../assets/press/title/capsule.png";
import spotlight_banner from "../../assets/press/title/spotlight_banner.png";
import spotlight_banner_empty from "../../assets/press/title/spotlight_banner_empty.png";
import vbanner from "../../assets/press/vertical_banner/v_banner.png";
import hbanner from "../../assets/press/horizontal_banner/horizontal_banner.png";
import textonly_horizontal from "../../assets/press/horizontal_banner/textonly_horizontal.png";
import llogo from "../../assets/press/library_logo/library_logo.png";
import lhero from "../../assets/press/library_hero/library_hero.png";
import screenshot1 from "../../assets/press/Screenshots/s1.png";
import screenshot2 from "../../assets/press/Screenshots/s2.png";
import screenshot3 from "../../assets/press/Screenshots/s3.jpg";
import screenshot4 from "../../assets/press/Screenshots/s4.jpg";
import screenshot5 from "../../assets/press/Screenshots/s5.png";
import screenshot6 from "../../assets/press/Screenshots/s6.png";
import hinotext from "../../assets/press/mp4/hi_notext.mp4";
import hinotextposter from "../../assets/press/mp4/hi_notext.png";
import jhang from "../../assets/joshua.gif";
import drophi from "../../assets/press/gifs/drophi.gif";
import { useTranslation } from "react-i18next";
import { useCallback } from "react";
import { Link } from "react-router-dom";

export function Press() {

    const { t, i18n } = useTranslation();

    const onLangChange = useCallback((l: string) => {
        i18n.changeLanguage(l);
    }, [i18n])

    return (
        <div className="h-full w-full flex justify-center white pixelatus">
            <div className="flex flex-col press-container w-full px-4 py-4">

                <div className="flex flex-row justify-between text-2xl my-2">
                    <div><Link to="/" className="underline">home</Link><span className="mx-2">/</span><span>press</span></div>
                    <div><button onClick={() => onLangChange("en")}>EN</button><span className="ml-2">/</span> <button onClick={() => onLangChange("fr")}>FR</button></div>
                </div>
                <div className="flex flex-row w-full"><img className="w-full" src={title} alt="title"></img></div>

                <div className="flex flex-col w-full mt-12">
                    <h2 className="text-4xl">{t("descriptionTitle")}</h2>
                    <p className="text-2xl mt-4">{t("description1")}</p>
                    <p className="text-2xl mt-4">{t("description2")}</p>
                </div>


                <div className="flex flex-col w-full mt-12">
                    <h2 className="text-4xl">{t("historyTitle")}</h2>
                    <p className="text-2xl mt-4">{t("history")}</p>
                </div>

                <div className="flex flex-col w-full mt-12">
                    <h2 className="text-4xl mb-2">{t("logos")}</h2>
                    <div className="flex flex-row mt-2">
                        <div><img src={llogo} alt="logo"></img></div>
                        <div className="ml-2 flex flex-col grow-0 items-end justify-end"><div><img src={hbanner} alt="horizontal banner"></img></div></div>
                    </div>
                    <div className="mt-2">
                        <img src={textonly_horizontal} alt="textonly_horizontal"></img>
                    </div>
                    <div className="mt-2">
                        <img src={title} alt="title"></img>
                    </div>
                    <div className="mt-2">
                        <img src={stream_in_progress} alt="streaminprogress"></img>
                    </div>
                    <div className="mt-2">
                        <img src={vbanner} alt="vertical banner"></img>
                    </div>
                    <div className="mt-2">
                        <img src={capsule} alt="capsule banner"></img>
                    </div>
                    <div className="mt-2">
                        <img src={spotlight_banner} alt="spotlight_banner"></img>
                    </div>
                    <div className="mt-2">
                        <img src={spotlight_banner_empty} alt="spotlight_banner_empty"></img>
                    </div>
                </div>

                <div className="flex flex-col w-full mt-12">
                    <h2 className="text-4xl mb-2">{t("images")}</h2>
                    <div className="flex-col">
                        <img className="mt-2" src={lhero} alt="hero"></img>
                    </div>
                    <div className="flex flex-row mt-2">
                        <div><img src={screenshot1} alt="screenshot1"></img></div>
                        <div className="ml-2"><img src={screenshot2} alt="screenshot2"></img></div>
                    </div>
                    <div className="flex flex-row mt-2">
                        <div><img src={screenshot3} alt="screenshot3"></img></div>
                        <div className="ml-2"><img src={screenshot4} alt="screenshot4"></img></div>
                    </div>
                    <div className="flex flex-row mt-2">
                        <div><img src={screenshot5} alt="screenshot5"></img></div>
                        <div className="ml-2"><img src={screenshot6} alt="screenshot6"></img></div>
                    </div>
                </div>

                <div className="flex flex-col w-full mt-12">
                    <h2 className="text-4xl mb-2">{t("gifs")}</h2>
                    <div className="flex-col">
                        <img className="mt-2" src={jhang} alt="joshua hanging"></img>
                    </div>
                    <div className="flex-col">
                        <img className="mt-2" src={drophi} alt="joshua hi"></img>
                    </div>
                </div>

                <div className="flex flex-col w-full mt-12">
                    <h2 className="text-4xl mb-4">{t("videos")}</h2>
                    <div className="video mt-4">
                        <video poster={hinotextposter} className='gameplay 'width={1280} height={720} controls preload="none">
                            <source src={hinotext} />
                        </video>
                    </div>
                </div>

                <div className="flex flex-col w-full mt-12">
                    <h2 className="text-4xl mb-2">{t("articles")}</h2>
                    <p className="text-2xl mt-4 underline"><a href="https://medium.com/@petitlegume/the-quirks-of-creating-an-indie-game-with-a-one-man-army-and-how-its-possible-2eca32f5fd23">The quirks of creating an indie game with a one man army (and how it’s possible)</a></p>
                </div>

                <div className="flex flex-col w-full mt-12">
                    <h2 className="text-4xl mb-2">{t("fonts")}</h2>
                    <p className="text-2xl mt-4"><a className="pixelbug underline" href="https://www.dafont.com/pixel-bug.font">PIXEL BUG</a> (titles)</p>
                    <p className="text-2xl mt-4"><a className="pixelatus underline" href="https://www.dafont.com/pixelatus.font">PIXELATUS</a> (text bodies)</p>
                    <p className="text-2xl mt-4"><a className="dripping underline" href="https://www.dafont.com/a-dripping-marker.font">A DRIPPING MARKER</a> (In-game signs)</p>
                    <p className="text-2xl mt-4"><a className="odin underline" href="https://www.dafont.com/odin-rounded.font">ODIN ROUNDED</a> (Banner announcements)</p>
                    
                </div>

                <div className="flex flex-col w-full mt-12">
                    <h2 className="text-4xl mb-2">{t("palette")}</h2>
                    <p className="text-2xl mt-4">{t("primary")} <span className="primary-color">#92252b</span></p>
                    <p className="text-2xl mt-4">{t("primary2")} <span className="primary-color-shadow">#FF0000</span></p>
                    <p className="text-2xl mt-4">{t("secondary")}<span className="secondary-color"> #9A36A1</span></p>
                </div>

                <div className="flex flex-col w-full mt-12">
                    <h2 className="text-4xl mb-2">{t("credits")}</h2>
                    <p className="text-2xl mt-4">{t("credits1")}</p>
                    <a href="https://danielletremblay.bandcamp.com/album/joshuas-legs" className="underline text-2xl mt-4">{t("credits2")}</a>
                </div>

                <div className="flex flex-col w-full mt-12">
                    <h2 className="text-4xl mb-2">{t("contact")}</h2>
                    <p className="text-2xl mt-4">Twitter: <a className="underline" href="https://twitter.com/JoshuasLegsGame">https://twitter.com/JoshuasLegsGame</a></p>
                    <p className="text-2xl mt-4">Linkedin: <a className="underline" href="https://www.linkedin.com/in/francis-c%C3%B4t%C3%A9-tremblay-1252b71a7/">https://www.linkedin.com/in/francis-côté-tremblay-tremblay-1252b71a7/</a></p>
                    <p className="text-2xl mt-4">Email: <a className="underline" href="mailto:joshuaslegs@protonmail.com">joshuaslegs@pm.me</a></p>
                </div>

            </div>
        </div>
    )
}