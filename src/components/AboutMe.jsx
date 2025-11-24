import {useEffect, useState} from "react";
import {base_url, validDataPeriod} from "../utils/constants.js";

const AboutMe = () => {
    const [aboutMe, setAboutMe] = useState({});

    useEffect(() => {
            let lastUpdate = localStorage.getItem("lastUpdate");
            let info = localStorage.getItem("info");

            if (lastUpdate) {
                //check if data is up to date
                if ((Date.now() - lastUpdate > validDataPeriod)) {
                    fetch(`${base_url}/v1/peoples/1`)
                        .then(res => res.json())
                        .then(data => {
                            info = {
                                'name': data.name,
                                'gender': data.gender,
                                'skin_color': data.skin_color,
                                'hair_color': data.hair_color,
                                'height': data.height,
                                'eye_color': data.eye_color,
                                'mass': data.mass,
                                'birth_year': data.birth_year
                            }
                            setAboutMe(info);
                        })
                    localStorage.clear();
                    localStorage.setItem("lastUpdate", Date.now());
                    localStorage.setItem("info", JSON.stringify(info));
                } else {
                    setAboutMe(JSON.parse(localStorage.getItem('info')));
                }


            } else {
                fetch(`${base_url}/v1/peoples/1`)
                    .then(res => res.json())
                    .then(data => {
                        info = {
                            'name': data.name,
                            'gender': data.gender,
                            'skin_color': data.skin_color,
                            'hair_color': data.hair_color,
                            'height': data.height,
                            'eye_color': data.eye_color,
                            'mass': data.mass,
                            'birth_year': data.birth_year
                        }
                        setAboutMe(info);
                        localStorage.clear();
                        localStorage.setItem("lastUpdate", Date.now());
                        localStorage.setItem("info", JSON.stringify(info));
                    })
            }
        }, []
    )


    return (
        <>
            {(!!aboutMe) &&
                <div className={'far-galaxy'}>
                    <p>Name: {aboutMe.name}</p>
                    <p>Gender: {aboutMe.gender}</p>
                    <p>Skin color: {aboutMe.skin_color}</p>
                    <p>Hair color: {aboutMe.hair_color}</p>
                    <p>Height: {aboutMe.height}</p>
                    <p>Eye color: {aboutMe.eye_color}</p>
                    <p>Weight: {aboutMe.mass}</p>
                    <p>Birth year: {aboutMe.birth_year}</p>
                </div>
            }
        </>
    )
}

export default AboutMe;