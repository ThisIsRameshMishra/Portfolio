import React from "react";
import { NavLink } from "react-router-dom";
import Web from "../src/img1.png"

const About = () => {
  return (
    <>
      <section className="site-banner site-banner--dark">
	<div className="site-banner__inner anim anim-up anim-fade loaded">
		<div className="site-banner__content">
			

			<div>	
						<h1 className="site-banner__title">
					<strong>About Me</strong>
				</h1>
				</div>


			
				<h2 className="site-banner__subtitle">
					Find out who I am, where I'm from and what I'm all about.
				</h2>
			

			
		</div>

		
	</div>
</section>

<hr/>

<section className="section section--small spacing-huge-top">
		<div className="content-styles">
			<h2 id="who-i-am"><strong>Who I Am</strong></h2>

<p className=" who_i text-large">
	My name's Ramesh Mishra. I'm a web designer and software developer.
    Currently,I am pursuing my B.E in BMS Institute of Technology in EEE Branch.Apart form that I have developed my techinical skills in IT Field.
</p>

<p>I do love Coding.I have done courses on Data Structure and Algorithms and I do pratice to maintain my flow on DSA.I do programming on different Sites.Ex:-GFG,LeetCode,CodeChef,InterviewBit.....</p>

<p>Check my all projects here .</p>
<p><NavLink to="./contact" className="btn btn-outline-primary">Projects</NavLink></p>







<hr/>



		

	

<section class="devCardSection ">
        <div class="wrapper centerDiv">
            <h2 class="sectionHeading textCenter">
                Technologies I work with
            </h2>
            <p class="sectionDescription">We create back-end and front-end solutions using top-notch and up-to-date technologies, that are reliable, future-proof and scalable.</p>
        </div>
        <div class="devCardOuter">
            <div class="devCardContainer">
                <div class="devCard">
   
    <div class="cardInfo">
        <p class="cardTitle">VS Code</p>
        <p class="cardDesc">It is a code editor redefined and optimized for building and debugging modern web and cloud applications.</p>
    </div>
</div>


<div class="devCard">
    
    <div class="cardInfo">
        <p class="cardTitle">JAVA</p>
        <p class="cardDesc">The langauge which i used to do coding on different coding platforms and implementation of data structure and algorithms.</p>
    </div>
</div> 


<div class="devCard">
    
    <div class="cardInfo">
        <p class="cardTitle">BootStrap</p>
        <p class="cardDesc">The world’s most popular front-end open source toolkit,extensive prebuilt components,and powerful JavaScript plugins.</p>
    </div>
</div> <div class="devCard">
   
    <div class="cardInfo">
        <p class="cardTitle">React</p>
        <p class="cardDesc">We use React.js to build design system based, dynamic and modern front-end web apps.</p>
    </div>
</div> <div class="devCard">
   
    <div class="cardInfo">
        <p class="cardTitle">React Native</p>
        <p class="cardDesc">React Native allows us to build and deploy multiplatform, native apps for Android and iOS.</p>
    </div>
</div>
  <div class="devCard">
   
    <div class="cardInfo">
        <p class="cardTitle">HTML5 + CSS3 + JS</p>
        <p class="cardDesc">We use HTML5, CSS3 and JS for pixel-perfect and search engine friendly projects.</p>
    </div>
</div> <div class="devCard">
    
    <div class="cardInfo">
        <p class="cardTitle">Node</p>
        <p class="cardDesc">Lightweight and efficient Javascript backends for data intensive, real-time, flexible apps.</p>
    </div>
</div>             
   </div>
        </div>
        <div class="wrapper">
            <div class="nextBtn">
                <span>more</span>
                <img src="/user/themes/hype4-theme/img/company/arrow_more.svg " alt="Arrow icon"/>
            </div>
        </div>
    </section>

<hr/>

<h2 id="why-work-with-me"><strong>Why Work With Me</strong></h2>

<p>There’s nothing I enjoy more than designing and developing good websites for nice people. It really is that simple.</p>

<p>I’ve spent many years trying to perfect what I do and while I’ll never be perfect, I do my best to come close.</p>

<p>If you’ve got a project you’d like to work on with me just get in touch and we can get to work!</p>

<p><NavLink to="./contact" className="btn btn-outline-primary">Contact</NavLink></p>

		</div>
	</section>

    </>
  );
};
export default About;
