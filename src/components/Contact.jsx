const Contact = () => {
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

                    <label htmlFor="country">Country</label>
                    <select id="country" name="country">
                        <option value="" disabled selected hidden>Select country</option>
                        <option value="australia">Australia</option>
                        <option value="canada">Canada</option>
                        <option value="usa">USA</option>
                    </select>

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