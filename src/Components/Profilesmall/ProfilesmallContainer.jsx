import React from "react";
import {connect} from "react-redux";
import Profilesmall from "./profilesmall";
import {fullNameSelector, photosSelector} from "./ProfileSmallSelector";

let mapStateToProps = (state) => {
    return {

        fullName: fullNameSelector(state),
        photos: photosSelector(state),

    }
}

export default connect(mapStateToProps, null)(Profilesmall);