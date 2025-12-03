import Select_C from "./Select_C.jsx";
import {useEffect, useState} from "react";
import {base_url, Planets} from "../utils/constants.js";

const Contact = () => {
    const [planets, setPlanets] = useState([]);

    useEffect(() => {
        fetch(`${base_url}/v1/planets`)
            .then(res => res.json())
            .then(data => {
                const names = data.map(planet => planet.name);
                setPlanets(names);
            })
    }, []);

    return (
        <form action="" className="flex flex-col w-3/5 ps-4">
            <div className="flex items-center justify-between">
                <label htmlFor="fname">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name.." className="input-primary"/>
            </div>

            <div className="flex items-center justify-between">
                <label htmlFor="lname">Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name.." className="input-primary"/>
            </div>

            <div className="flex items-center justify-between">
                <label htmlFor="planet">Planet</label>
                <Planets value={planets}>
                    <Select_C/>
                </Planets>
            </div>

            <div className="flex items-center justify-between">
                <label htmlFor="subject">Subject</label>
                <textarea id="subject" name="subject" placeholder="Write something.."
                          className="input-primary h-[150px] resize-none"></textarea>
            </div>


            <div className="flex justify-end">
                <input type="submit" value="Submit"
                       className="bg-red border-1 px-5 py-3 mb-4 rounded-md cursor-pointer hover:bg-red-500 hover:text-white"/>
            </div>
        </form>
    )
}

export default Contact;