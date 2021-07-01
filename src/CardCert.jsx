import React from "react";


const CardCert = (props) => {
  return (
    <>
     
              <div className="col-md-4 col-10 mx-auto">
              
                <div className="card">
                
                  <img src={props.imgsrc} className="card-img-top" alt="..." />
                  
                  <div className="card-body">
                    <h5 className="card-title font-weight-bold">{props.sname}</h5>
                    <hr/>
                    <p className="card-text">
                     {props.title}
                    </p>
                    <a href={props.link} target="blank" className="btn btn-primary">
                     Certificate
                    </a>
                    
                  </div>
                 
                </div>
                
                <div>
               
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>


</div>
                </div>

               

              


    </>
  );
};
export default CardCert;
