import OptionItem from "./OptionItem.jsx";
import {useContext} from "react";
import {Planets} from "../utils/constants.js";

const Select_C = () => {
    const planets = useContext(Planets);
    return (
        <select id="planet" name="planet">
            <option value="" disabled selected hidden>Select planet</option>
            {planets.map(item => <OptionItem data={item} key={item}/>)}
        </select>
    )
}
export default Select_C;