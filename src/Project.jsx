import React, { useState } from 'react';
import sproject from "./Sproject";
import Cardproject from "./Cardproject";
const Project = (props) => {
   
    return (
        <>
           <section className="site-banner site-banner--dark">
	<div className="site-banner__inner anim anim-up anim-fade loaded">
		<div className="site-banner__content">
			<div>	
						<h1 className="site-banner__title">
					<strong>My Projects</strong>
				</h1>
		</div>
				
		</div>	
	</div>
</section>




<div className="my-5">
        <h1 className="text-center"></h1>
      </div>
      <div className="container-fluid nav bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">


 


            {
          
                sproject.map((val,ind)=>{
                   return <Cardproject
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
}
export default Project;