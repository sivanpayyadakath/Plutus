import React, { Component } from 'react'
import Notifications from './Notifications.js'
import ProjectList from '../projects/ProjectList.js'
import { connect } from 'react-redux'


class Dashboard extends Component{
    render(){
        const { projects } = this.props;
        return(
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6"><ProjectList projects = {projects}/></div>
                    <div className="col s12 m5 offset-m1"><Notifications/></div>
                </div>
            </div>
        );
    }
}

const mapStatetoProps = (state) => { 
    return{
        projects: state.project.projects
    }
}

export default connect(mapStatetoProps)(Dashboard);