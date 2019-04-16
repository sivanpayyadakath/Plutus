import React from 'react'

const ProjectSumary = ({project}) => {
    return(
        <div>
            <div className="card">
                <span className="card-title"></span>
                <p>{project.title}</p>
                <p>{project.content}</p>
                <p>5th June,2019</p>
            </div>
        </div>
    )
}

export default ProjectSumary