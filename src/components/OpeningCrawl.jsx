import {base_url} from "../utils/constants.js";
import {useEffect, useState} from "react";

const OpeningCrawl = () => {

    const [openingCrawl, setOpeningCrawl] = useState();

    useEffect(() => {
        const episode = Math.floor(Math.random() * 6) + 1;
        fetch(`${base_url}/v1/films/${episode}`)
            .then(res => res.json())
            .then(data => setOpeningCrawl(data.opening_crawl))
            .catch(() => setOpeningCrawl('Error loading opening crawl'))

    }, [])

    if (openingCrawl) {

        return (
            <p className="text-info">{openingCrawl}</p>
        );
    } else {
        return (
            <div className="flex justify-center">
            <div
                className="w-10 h-10 border-4 border-t-main border-grey rounded-full animate-spin"
            ></div>
            <p className="text-info px-2.5">
                Loading...
            </p>
            </div>
        );
    }

};

export default OpeningCrawl;