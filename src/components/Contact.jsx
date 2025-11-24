import Select_C from "./Select_C.jsx";
import {useEffect, useState} from "react";
import {base_url, Planets} from "../utils/constants.js";

const Contact = () => {
    const [planets, setPlanets] = useState([]);

    useEffect(() => {
        fetch(`${base_url}/v1/planets`)
            .then(res => res.json())
            .then(data => {
                const names = data.map(planet =>planet.name);
                setPlanets(names);
            })
    }, []);

    return (
        <div className={'far-galaxy'}>
            <div className="container-form">
                <form action="">

                    <label htmlFor="fname">First Name</label>
                    <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
                    <br/>

                    <label htmlFor="lname">Last Name</label>
                    <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
                    <br/>

                    <label htmlFor="planet">Planet</label>
                    <Planets value={planets}>
                        <Select_C/>
                    </Planets>

                    <div className="subjectContainer">
                        <label htmlFor="subject">Subject</label>
                        <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
                    </div>
                    <input type="submit" value="Submit" className="btn btn-danger mx-1 border-warning"/>

                </form>
            </div>
        </div>
    )
}

export default Contact;