import React, {Component} from "react";
import Widecard from '../components/Widecard';
class Education extends Component {
    render(){
        return(
            <div className="condiv">
                <h1 className="subtopic">My Education</h1>
                <Widecard title="Computer Science" where="Kasetsart University" from="2016" to="Present"/>
                


            </div>
        )
    }
}

export default Education