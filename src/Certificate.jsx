import React from "react";
import certdata from "./Certificatedata";

import CardCert from "./CardCert";
const Certificate = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Acheivements</h1>
      </div>
      <div className="container-fluid nav bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">


 


            {
          
                certdata.map((val,ind)=>{
                   return <CardCert
                        imgsrc={val.imgsrc}
                        title={val.title}
                        sname={val.sname}
                        link={val.link}
                    />
                })
           
            }
             </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Certificate;
