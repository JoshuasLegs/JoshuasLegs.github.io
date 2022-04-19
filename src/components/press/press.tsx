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
import jhang from "../../assets/joshua.gif";
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
                    <h2 className="text-4xl">{t("logos")}</h2>
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
                    <h2 className="text-4xl">{t("images")}</h2>
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
                    <h2 className="text-4xl">{t("gifs")}</h2>
                    <div className="flex-col">
                        <img className="mt-2" src={jhang} alt="joshua hanging"></img>
                    </div>
                </div>

            </div>
        </div>
    )
}