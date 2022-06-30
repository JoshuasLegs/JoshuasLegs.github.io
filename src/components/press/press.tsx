import "./press.scss";
import title from "../../assets/press/title/title.png";
import vbanner from "../../assets/press/vertical_banner/v_banner.png";
import hbanner from "../../assets/press/horizontal_banner/horizontal_banner.png";
import llogo from "../../assets/press/library_logo/library_logo.png";
import lhero from "../../assets/press/library_hero/library_hero.png";
import screenshot1 from "../../assets/press/Screenshots/s1.png";
import screenshot2 from "../../assets/press/Screenshots/s2.png";
import screenshot3 from "../../assets/press/Screenshots/s3.png";
import screenshot4 from "../../assets/press/Screenshots/s4.png";
import screenshot5 from "../../assets/press/Screenshots/s5.png";
import screenshot6 from "../../assets/press/Screenshots/s6.png";
import trailer from "../../assets/press/trailer.mp4";
import video1 from "../../assets/gameplay1.mp4";
import video1thumbnail from "../../assets/gameplay1.png";
import video2 from "../../assets/gameplay2.mp4";
import video2thumbnail from "../../assets/gameplay2.png";
import video3 from "../../assets/gameplay3.mp4";
import video3thumbnail from "../../assets/gameplay3.png";
import hinotext from "../../assets/press/mp4/hi_notext.mp4";
import jhang from "../../assets/joshua.gif";
import drophi from "../../assets/press/gifs/drophi.gif";
import { useTranslation } from "react-i18next";
import { useCallback } from "react";
import { Link } from "react-router-dom";
import { GameplayItem } from "../gameplay-item/gameplay-item";

export function Press() {

    const { t, i18n } = useTranslation();
    const paths = [[video1thumbnail, video1], [video2thumbnail, video2], [video3thumbnail, video3]]

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
                    <h2 className="text-4xl">{t("featuresTitle")}</h2>
                    <ul>
                        <li>
                            <p className="text-2xl mt-4">{t("feature1")}</p>
                        </li>
                        <li>
                            <p className="text-2xl mt-4">{t("feature2")}</p>
                        </li>
                        <li>
                            <p className="text-2xl mt-4">{t("feature3")}</p>
                        </li>
                        <li>
                            <p className="text-2xl mt-4">{t("feature4")}</p>
                        </li>
                        <li>
                            <p className="text-2xl mt-4">{t("feature5")}</p>
                        </li>
                    </ul>
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
                        <img src={title} alt="title"></img>
                    </div>
                    <div className="mt-2">
                        <img src={vbanner} alt="vertical banner"></img>
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
                    <video poster={title} className='gameplay mt-2' width={1280} height={720} controls preload="none">
                        <source src={trailer} />
                    </video>
                    {paths.map((p, i) => <GameplayItem key={p[0]} className='mt-2 w-full' img={p[0]} video={p[1]}></GameplayItem>)}
                    <video className='gameplay mt-2' width={1280} height={720} controls preload="none">
                        <source src={hinotext} />
                    </video>
                </div>

                <div className="flex flex-col w-full mt-12">
                    <h2 className="text-4xl mb-2">{t("articles")}</h2>
                    <p className="text-2xl mt-4 underline"><a href="https://medium.com/@petitlegume/the-quirks-of-creating-an-indie-game-with-a-one-man-army-and-how-its-possible-2eca32f5fd23">The quirks of creating an indie game with a one man army (and how it’s possible)</a></p>
                </div>

                <div className="flex flex-col w-full mt-12">
                    <h2 className="text-4xl mb-2">{t("fonts")}</h2>
                    <p className="text-2xl mt-4 underline"><a href="https://www.dafont.com/pixel-bug.font">PIXEL BUG</a></p>
                    <p className="text-2xl mt-4 underline"><a href="https://www.dafont.com/pixelatus.font">PIXELATUS</a></p>
                    <p className="text-2xl mt-4 underline"><a href="https://www.dafont.com/a-dripping-marker.font">A DRIPPING MARKER</a></p>
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
                    <p className="text-2xl mt-4">{t("credits2")}</p>
                </div>

                <div className="flex flex-col w-full mt-12">
                    <h2 className="text-4xl mb-2">{t("contact")}</h2>
                    <p className="text-2xl mt-4">Twitter: <a className="underline" href="https://twitter.com/trespetitlegume">https://twitter.com/trespetitlegume</a></p>
                    <p className="text-2xl mt-4">Linkedin: <a className="underline" href="https://www.linkedin.com/in/francis-c%C3%B4t%C3%A9-tremblay-1252b71a7/">https://www.linkedin.com/in/francis-côté-tremblay-tremblay-1252b71a7/</a></p>
                    <p className="text-2xl mt-4">Email: <a className="underline" href="mailto:joshuaslegs@protonmail.com">joshuaslegs@protonmail.com</a></p>
                </div>

            </div>
        </div>
    )
}