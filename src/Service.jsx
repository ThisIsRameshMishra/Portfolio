import React from "react";
import sdata from "./Sdata";
import Card from "./Cards";
const Service = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Courses</h1>
      </div>
      <div className="container-fluid nav bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">


 


            {
          
                sdata.map((val,ind)=>{
                   return <Card
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
export default Service;
