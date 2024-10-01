function TeamSection(props){
    return(
        <div>
    <div className='team-info'> 

        <div className="photo"
        style={{
          backgroundImage: `url(${props.Photo})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          height: '150px',
          width: '150px', 
          borderRadius: '50%', 
        }}>
        {/* <img src={props.Photo} alt={`${props.name} ${props.Fname}`} style={{ width: '150px', height: '150px' }} />  */}
               </div>

        <div className="info">  
            <h2 className="job"
        style={{
        fontSize: props.Size,
      
      }}>{props.job}</h2>
            <p>{props.name} {props.Fname}</p> </div>
        </div>


    </div>



    );




}

export default TeamSection