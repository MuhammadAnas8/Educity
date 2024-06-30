import React from 'react'
import './Programs.css'
import program_1 from '../../assets/program-1.png';
import program_2 from '../../assets/program-2.png';
import program_3 from '../../assets/program-3.png';
import program_icon_1 from '../../assets/program-icon-1.png';
import program_icon_2 from '../../assets/program-icon-2.png';
import program_icon_3 from '../../assets/program-icon-3.png';


function ProgramsFunc(props) {
    // const { programProps } = props;
  
    return (
      <div className="programs">
        {props.programProps.map(({ imageUrl, Picon, text}, index) => (
          <div className="program" key = {index} >
            <img src={imageUrl} alt={`Program}`} />
            <div className="caption">
                <img src={Picon} alt="" />
                <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
  function Programs() {
    const programProps=[
        {imageUrl: program_1, Picon: program_icon_1, text: "Graduation degree"}
        ,{imageUrl: program_2, Picon: program_icon_2, text: "Masters Degree"}
        ,{imageUrl: program_3, Picon: program_icon_3, text: "Post Graduate Degree"}
    ];
    return (
      <div id='programs'> 
      <ProgramsFunc programProps={programProps} /> 
      </div>
    )
  }
export default Programs;
