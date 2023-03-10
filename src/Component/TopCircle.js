import profile from "../assets/img/profile.png"
const TopCircle=(props)=>{
    return(
      <div key={props.id} className={`${props.class} hover-text`} id={props.id}>
            <div className="tooltip-text">
              <img src={profile} width={50} height={50}/>
              <h3>{props.name}</h3>
              <h6>{props.position}</h6>
              <p>Team<br/>
                {props.team}
              </p>
              <p>Project<br/>
                {props.project}</p>
            </div>
          </div>
    )
  }
  export default TopCircle;