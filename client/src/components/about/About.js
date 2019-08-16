import React, { Component } from 'react';
import './about.css'


class About extends Component {

  render() {
    return (
      <div className="about">
        <div className="container">
          <div className="row">

            <div className="column-12 column-body">
              <article>

                <h1 className="about-me">ABOUT ME</h1>

                <hr className="about-hr"/>
                <div className="column-8">
                  <p id="about-text">I am a web developer from Vancouver, BC.
                  My goal is to specialize in front-end development.
                  One of the aspects that I enjoy the most when starting
                  a new project is coming up with a new design.
                  When I am not developing, I enjoy spending time with my dog
                  and playing hockey.</p>
                </div>

              <br/>
              </article>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default About;
