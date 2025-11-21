import {useEffect, useState} from "react";
import {base_url} from "../utils/constants.js";

const AboutMe = () => {
    const [aboutMe, setAboutMe] = useState({});

    useEffect(() => {
        fetch(`${base_url}/v1/peoples/1`)
            .then(res => res.json())
            .then(data => {
                setAboutMe({
                    'name': data.name,
                    'gender': data.gender,
                    'skin_color': data.skin_color,
                    'hair_color': data.hair_color,
                    'height': data.height,
                    'eye_color': data.eye_color,
                    'mass': data.mass,
                    'birth_year': data.birth_year
                })
            })
    },[])

    if (aboutMe) {
        return (
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
        )
    }

}

export default AboutMe;