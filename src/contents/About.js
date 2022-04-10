import React, {Component} from "react";
import profilepic from '../img/profile.jpg'

class About extends Component   {
    render(){
        return(
            <div className="condiv about">
                <h1 className="subtopic">About Me</h1>
                {/* <img src="https://scontent.fbkk2-8.fna.fbcdn.net/v/t1.15752-9/274344768_978065556459998_1969415754447712283_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=ae9488&_nc_ohc=LktCJIk0rUYAX-AUAXX&tn=2tFQhstMxeon8-ft&_nc_ht=scontent.fbkk2-8.fna&oh=03_AVLu0bXpBclNcDPACXdVwFqSrCZc4CIxHndd-Yk3C_4m2w&oe=627832B1"> */}

                {/* </img> */}

                <img src={profilepic} alt="profile" className="profilepic"/>
                <h3>Hi, I'm Praew Paksanont</h3>
                <p>I love programming</p>
            </div>
        )
    }
}

export default About;