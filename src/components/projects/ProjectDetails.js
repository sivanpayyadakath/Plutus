import React from 'react'

const ProjectDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
        <div className="card">
            <div className="card-content">
                <span className="card-title">Project title - {id}</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ducimus quae, recusandae fugiat sunt debitis porro commodi? At, tempora repudiandae? Sapiente hic doloribus totam consequuntur architecto reprehenderit minus magnam beatae.</p>
            </div>
            <div className="card-action">
                <div>Posted By sivan</div>
                <div>5th June</div>
            </div>
        </div>
    </div>
  )
}

export default ProjectDetails
