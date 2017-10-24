/* eslint-disable */

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="main">
        <header>
          <div className="wrapper">
            <h1><a href="index.html" id="logo">Future Bank</a></h1>
            <form id="search" action="" method="post">
              <div className="bg">
                <input type="submit" className="submit" value=""/>
                <input type="text" className="input"/>
              </div>
            </form>
          </div>
          <nav>
            <ul id="menu">
              <li className="alpha" id="menu_active"><a href="index.html"><span><span>Home</span></span></a></li>
              <li><a href="About.html"><span><span>About</span></span> </a></li>
              <li><a href="Projects.html"><span><span>Projects</span></span></a></li>
              <li><a href="Contacts.html"><span><span>Contacts</span></span></a></li>
              <li className="omega"><a href="Sitemap.html"><span><span>Sitemap</span></span></a></li>
            </ul>
          </nav>
          <div className="wrapper">
            <div className="text">
              <span className="text1" id="brand">Welcome to the Future</span>
              <a href="#" className="button">read more</a>
            </div>
          </div>
        </header><div className="ic">More Website Templates at TemplateMonster.com!</div>
        <section id="content">
          <div className="wrapper">
            <div className="wrapper">
              <ul className="banners">
                <li>
                  <a href="#"><img src="images/page1_img1.jpg" alt=""/></a>
                  <div className="pad">
                    <p className="font1">Company History</p>
                    <p>Lorem ipsum doloamet consect etuer adipiscing.</p>
                    <a href="#" className="marker"></a>
                  </div>
                </li>
                <li>
                  <a href="#"><img src="images/page1_img2.jpg" alt=""/></a>
                  <div className="pad">
                    <p className="font1">Our Capabilities</p>
                    <p>Sed ut perspiciatis unde omnis iste naturror voluptatem.</p>
                    <a href="#" className="marker"></a>
                  </div>
                </li>
                <li>
                  <a href="#"><img src="images/page1_img3.jpg" alt=""/></a>
                  <div className="pad">
                    <p className="font1">Where We Deliver</p>
                    <p>Nam libero tempore cum soluta nobis est eligendi optio.</p>
                    <a href="#" className="marker"></a>
                  </div>
                </li>
                <li>
                  <a href="#"><img src="images/page1_img4.jpg" alt=""/></a>
                  <div className="pad">
                    <p className="font1">Operations Consulting</p>
                    <p>Temporibus autem quibusdam et aut officiis.</p>
                    <a href="#" className="marker"></a>
                  </div>
                </li>
              </ul>
            </div>
            <div className="wrapper">
              <div className="box bot pad_bot2">
                <div className="pad">
                  <article className="col1">
                    <h2>Take the best business deal</h2>
                    <strong>Smart Biz Template</strong> is one of <a rel="nofollow" href="http://www.templatemonster.com/website-templates.php" target="_blank">free website templates</a> created by Templates.com team. This website template is optimized for 1024X768 screen resolution. It is also XHTML &amp; CSS valid.
                    <div className="wrapper">
                      <figure className="left marg_right1 marg_top2"><img src="images/page1_img5.jpg" alt=""/></figure>
                      <p className="marg_top">This <a href="http://blog.templatemonster.com/2011/01/24/free-business-website-template-efficient-choice/" target="_blank">Free Business Website Template</a> goes with two packages – with PSD source files and without them. PSD source files are available for free for the registered members of Templates.com. The basic package (without PSD is available for anyone without registration).</p>
                    </div>
                    <p>This website template has several pages: <a href="index.html">Home</a>, <a href="About.html">About</a>, <a href="Projects.html">Projects</a>, <a href="Contacts.html">Contacts</a> (note that contact us form – doesn’t work), <a href="Sitemap.html">Sitemap</a>.</p>
                    <div className="wrapper line1">
                      <ul className="list1 cols">
                        <li><a href="#">At vero eos et accusamus iusto</a></li>
                        <li><a href="#">Odio dignissimos ducimus</a></li>
                        <li><a href="#">Blanditiis praesentium voluptatum</a></li>
                        <li><a href="#">Deleniti atque corrupti quos dolores</a></li>
                      </ul>
                      <ul className="list1 cols pad_left2">
                        <li><a href="#">Sint occaecati cuditate nongd</a></li>
                        <li><a href="#">Provident similque suxpin culpa qui</a></li>
                        <li><a href="#">Officia deserunt mollitia animidt</a></li>
                        <li><a href="#">Etharum quidem rerum facili</a></li>
                      </ul>
                    </div>
                  </article>
                  <article className="col2 pad_left1">
                    <h2>Latest projects</h2>
                    <div className="wrapper">
                      <div className="wrapper pad_bot1">
                        <figure className="left marg_right1"><a href="#"><img src="images/page1_img6.jpg" alt=""/></a></figure>
                        <p>Sed peraspiciatis unde omnis iste natus eraror sit voluptatem accusantium doloremque.</p>
                        <a href="#" className="marker"></a>
                      </div>
                      <div className="wrapper pad_bot1">
                        <figure className="left marg_right1"><a href="#"><img src="images/page1_img7.jpg" alt=""/></a></figure>
                        <p>Laudantiuam totam aperiam, eaque ipsa quaae ab illo inventore veritatais quasi.</p>
                        <a href="#" className="marker"></a>
                      </div>
                      <div className="wrapper">
                        <figure className="left marg_right1"><a href="#"><img src="images/page1_img8.jpg" alt=""/></a></figure>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed.</p>
                        <a href="#" className="marker"></a>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer>
          <a rel="nofollow" href="http://www.templatemonster.com/" target="_blank">Website template</a> designed by TemplateMonster.com<br/>
          <a href="http://www.templates.com/product/3d-models/" target="_blank">3D Models</a> provided by Templates.com
        </footer>
      </div>
    );
  }
}

export default App;
