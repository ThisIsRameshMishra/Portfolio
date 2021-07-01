import React from 'react';
import { NavLink } from "react-router-dom";
const Footer=()=>{
    return (
        <>

<section className="site-cta">
			<div className="site-cta__inner">
				<div className="grid grid--m-1">
					<div className="grid__col grid__col--8">
						<div className="content-styles spacing-tiny-bottom">
							<h2 className="site-cta__title">
								Let's Work Together
							</h2>
							<p className="site-cta__txt">
								Have a project you'd like to discuss?
							</p>
						</div>
						<NavLink to="./contact" className="btn-get-started">
                      Contact Me
                    </NavLink>
					</div>
					<div className="grid__col grid__col--4 grid__col--v-center">
						<ul className="icon-list icon-list--light list-style-type:none">
							<li>
                            <a href="https://www.linkedin.com/in/ramesh-mishra-171a25166/" target="_blank">
                            <img className="list_img_5" src="https://image.flaticon.com/icons/png/512/145/145807.png" alt="asdf"/>
                            </a>
                            </li>


                            <li> 
                            <a href="https://www.instagram.com/_ramesh.mishra_/" target="_blank" >
                            <img className="list_img_6" src="https://image.flaticon.com/icons/png/512/733/733558.png" alt="asdf"/>
                            </a>
                            </li>
                            

                            <li> 
                            <a href="https://github.com/ThisIsRameshMishra" target="_blank">
                            <img className="list_img_7" src="https://image.flaticon.com/icons/png/512/270/270798.png" alt="asdf"/>
                            </a>
                            </li>


                            <li>
                            <a href="https://www.facebook.com/profile.php?id=100008608954038" target="_blank">
                            <img className="list_img_8" src="https://image.flaticon.com/icons/png/512/145/145802.png" alt="asdf"/>
                            </a>
                            </li>
						</ul>
					</div>
				</div>
			</div>
		</section>


        <footer className="site-footer">
		<div className="site-footer__inner">
			<p className="last">
				© 2021 Seb Kay. All rights reserved.
			</p>
		</div>
	</footer>
    
        
        </>
    );
}
export default Footer;