import React from "react";
import { Animoji } from "../../components/Animoji";
import { DarkModeFalseWrapper } from "../../components/DarkModeFalseWrapper";
import { ElementControlsButtons } from "../../components/ElementControlsButtons";
import { ElementControlsTag } from "../../components/ElementControlsTag";
import { ElementIconsImage } from "../../components/ElementIconsImage";
import { ElementNavigation } from "../../components/ElementNavigation";
import { NeonThemeSwapper } from "../../components/NeonThemeSwapper";
import { ScreenIpadPro } from "../../components/ScreenIpadPro";
import "./style.css";

export const WorkHome = () => {
  return (
    <div className="work-home">
      <div className="div-2">
        <div className="element-navigation-avatar">
          <Animoji
            className="animoji-instance"
            image="https://generation-sessions.s3.amazonaws.com/54bef66a4aaf35a5c6af4d52b3f63822/img/image-51@2x.png"
            imageClassName="design-component-instance-node"
            number="forty-eight"
          />
        </div>
        <div className="options">
          <ElementNavigation
            darkMode
            optionClassName="design-component-instance-node-2"
            states="selected-default"
            text="About"
          />
          <ElementNavigation
            darkMode
            highlighter="https://generation-sessions.s3.amazonaws.com/54bef66a4aaf35a5c6af4d52b3f63822/img/highlighter-2@2x.png"
            highlighterClassName="one-navigation-navbaroptions"
            optionClassName="design-component-instance-node-2"
            states="unselected"
            text="Experiences"
          />
          <ElementNavigation
            darkMode
            highlighter="https://generation-sessions.s3.amazonaws.com/54bef66a4aaf35a5c6af4d52b3f63822/img/highlighter-2@2x.png"
            highlighterClassName="element-navigation-instance"
            optionClassName="design-component-instance-node-2"
            states="unselected"
            text="Projects"
          />
          <ElementNavigation
            className="one-navigation-navbaroptions-instance"
            darkMode
            highlighter="https://generation-sessions.s3.amazonaws.com/54bef66a4aaf35a5c6af4d52b3f63822/img/highlighter-2@2x.png"
            highlighterClassName="element-navigation-2"
            optionClassName="design-component-instance-node-2"
            states="unselected"
            text="Get In Touch"
          />
        </div>
      </div>
      <div className="element-home-work-header">
        <div className="frame-wrapper">
          <div className="frame-2">
            <h1 className="text-wrapper">Hello! I’m Diana.</h1>
            <p className="description">
              <span className="span">I am a </span>
              <span className="text-wrapper-2">software engineer.</span>
            </p>
            <div className="frame-3">
              <ElementControlsButtons
                buttonTypes="primary"
                darkMode
                primaryClassName="design-component-instance-node-2"
                states="default"
                text="Say Hi 👋"
              />
              <ElementControlsButtons
                buttonTypes="secondary"
                className="two-controls-buttons"
                darkMode
                primaryClassName="design-component-instance-node-3"
                states="default"
                text1="Learn more"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="element-home-work-project">
        <div className="overlap">
          <div className="frame-4">
            <div className="text-wrapper-3">About me</div>
            <p className="p">I love software development, algorithms, machine learning, and computational biology.</p>
            <DarkModeFalseWrapper
              buttonTypes="secondary"
              className="element-controls-buttons-instance"
              darkMode
              primaryClassName="two-controls-buttons-instance"
              states="default"
              text="Scroll for more"
            />
          </div>
          <div className="deviceipad-pro">
            <div className="overlap-2">
              <div className="camera" />
              <div className="overlap-group-2">
                <img
                  className="union"
                  alt="Union"
                  src="https://generation-sessions.s3.amazonaws.com/54bef66a4aaf35a5c6af4d52b3f63822/img/union.svg"
                />
                <ScreenIpadPro className="screenipad-pro" darkMode={false} hasFrame={false} />
                <ScreenIpadPro className="screen-ipad-pro-12-9" darkMode={false} hasFrame={false} />
                <div className="frame-5">
                  <p className="electrical">
                    <span className="text-wrapper-4">
                      🐻 <br />
                    </span>
                    <span className="text-wrapper-5">Electrical Engineering and Computer Science undergraduate</span>
                  </p>
                  <div className="university-of">
                    <span className="text-wrapper-6">
                      University of California-Berkeley
                      <br />
                    </span>
                    <span className="text-wrapper-7">May 2024</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="element-home-work-contact">
        <div className="frame-6">
          <div className="div-wrapper">
            <div className="text-wrapper-8">Experiences</div>
          </div>
          <p className="description-2">
            <span className="text-wrapper-9">I regularly post my thoughts on </span>
            <span className="text-wrapper-10">twitter</span>
            <span className="text-wrapper-9">, and also write some articles on </span>
            <span className="text-wrapper-10">Medium</span>
            <span className="text-wrapper-9">. Otherwise, my </span>
            <span className="text-wrapper-10">linkedin</span>
            <span className="text-wrapper-9"> is always welcoming.</span>
          </p>
        </div>
        <div className="group">
          <div className="experience">
            <div className="frame-7">
              <div className="text-wrapper-11">Jun - Aug 2023</div>
              <div className="text-wrapper-12">SWE @ Tanium</div>
              <p className="description-3">
                <span className="text-wrapper-13">
                  Software Engineering Intern <br />
                </span>
                <span className="text-wrapper-14">Research &amp; Development Data Access and Integration team.</span>
              </p>
              <div className="frame-8">
                <ElementControlsTag darkMode tagClassName="design-component-instance-node-3" text="Golang" />
                <ElementControlsTag darkMode tagClassName="design-component-instance-node-3" text="Node.js" />
                <ElementControlsTag darkMode tagClassName="design-component-instance-node-3" text="GraphQL" />
              </div>
              <div className="text-wrapper-15">🔐</div>
            </div>
          </div>
          <div className="experience-2">
            <div className="frame-9">
              <div className="text-wrapper-11">Jun - Aug 2022</div>
              <p className="text-wrapper-12">SWE @ The Allen Institute</p>
              <p className="description-4">
                <span className="text-wrapper-13">
                  Software Engineering Intern
                  <br />
                </span>
                <span className="text-wrapper-14">
                  The Allen Institute for Brain Science. <br />
                  Developed a ....{" "}
                </span>
              </p>
              <div className="frame-8">
                <ElementControlsTag darkMode tagClassName="design-component-instance-node-3" text="GraphQL" />
                <ElementControlsTag darkMode tagClassName="design-component-instance-node-3" text="Node.js" />
                <ElementControlsTag darkMode tagClassName="design-component-instance-node-3" text="C#" />
              </div>
              <div className="text-wrapper-15">🧠</div>
            </div>
          </div>
          <div className="experience-3">
            <div className="frame-10">
              <div className="overlap-group-3">
                <div className="text-wrapper-16">Jan 2021 - Present</div>
                <div className="text-wrapper-17">🧠</div>
              </div>
              <p className="text-wrapper-18">ML @ Machine Learning at Berkeley</p>
              <p className="description-5">
                <span className="text-wrapper-13">
                  Internal and Projects Committee Officer
                  <br />
                </span>
                <span className="text-wrapper-14">
                  Project Manager and Lead Machine Learning Developer Consultant w/ Latch.Bio
                </span>
              </p>
              <div className="frame-11">
                <ElementControlsTag darkMode tagClassName="design-component-instance-node-3" text="Mobile App" />
                <ElementControlsTag darkMode tagClassName="design-component-instance-node-3" text="Website" />
                <ElementControlsTag darkMode tagClassName="design-component-instance-node-3" text="SaaS" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="element-home-work-contact">
        <div className="frame-6">
          <div className="div-wrapper">
            <div className="text-wrapper-19">Courses</div>
          </div>
          <p className="description-6">Check out the courses I’ve taken during my time here @ Berkeley.</p>
        </div>
        <div className="overlap-group-wrapper">
          <div className="overlap-group-4">
            <div className="experience-4">
              <div className="frame-12">
                <div className="p-wrapper">
                  <p className="text-wrapper-20">CS61A: Structure &amp; Interpretation of Computer Programs</p>
                </div>
              </div>
            </div>
            <div className="frame-13">
              <ElementControlsTag darkMode tagClassName="design-component-instance-node-3" text="Grade: A+" />
              <ElementControlsTag darkMode tagClassName="design-component-instance-node-3" text="Course Staff Intern" />
              <ElementControlsTag darkMode tagClassName="design-component-instance-node-3" text="Python" />
              <ElementControlsTag
                className="two-controls-tag"
                darkMode
                tagClassName="design-component-instance-node-3"
                text="Fall 21"
              />
            </div>
          </div>
        </div>
        <div className="overlap-wrapper">
          <div className="overlap-group-4">
            <div className="experience-4">
              <div className="frame-12">
                <div className="p-wrapper">
                  <p className="text-wrapper-20">CS170: Efficient Algorithms and Intractable Problems</p>
                </div>
              </div>
            </div>
            <div className="frame-14">
              <ElementControlsTag darkMode tagClassName="design-component-instance-node-3" text="Grade: A" />
              <ElementControlsTag darkMode tagClassName="design-component-instance-node-3" text="Algorithm Theory" />
              <ElementControlsTag darkMode tagClassName="design-component-instance-node-3" text="Fall 22" />
            </div>
          </div>
        </div>
        <div className="group-2">
          <div className="overlap-3">
            <div className="experience-5">
              <div className="frame-15">
                <div className="p-wrapper">
                  <p className="text-wrapper-20">EECS 126: Probability &amp; Random Processes</p>
                </div>
              </div>
            </div>
            <div className="frame-16">
              <ElementControlsTag darkMode tagClassName="design-component-instance-node-3" text="Grade: A" />
              <ElementControlsTag darkMode tagClassName="design-component-instance-node-3" text="Python" />
              <ElementControlsTag darkMode tagClassName="design-component-instance-node-3" text="Fall 22" />
            </div>
          </div>
        </div>
        <div className="group-3">
          <div className="overlap-3">
            <div className="experience-5">
              <div className="frame-15">
                <div className="p-wrapper">
                  <p className="text-wrapper-20">CS61B: Data Structures &amp; Algorithms</p>
                </div>
              </div>
            </div>
            <div className="frame-17">
              <ElementControlsTag darkMode tagClassName="design-component-instance-node-3" text="Grade: A+" />
              <ElementControlsTag darkMode tagClassName="design-component-instance-node-3" text="Java" />
              <ElementControlsTag darkMode tagClassName="design-component-instance-node-3" text="Spring 22" />
            </div>
          </div>
        </div>
      </div>
      <div className="div-3">
        <div className="deviceiphone">
          <div className="i-phone">
            <div className="overlap-group-5">
              <img
                className="iphone-shape"
                alt="Iphone shape"
                src="https://generation-sessions.s3.amazonaws.com/54bef66a4aaf35a5c6af4d52b3f63822/img/iphone-shape-2.svg"
              />
              <img
                className="hardware-buttons"
                alt="Hardware buttons"
                src="https://generation-sessions.s3.amazonaws.com/54bef66a4aaf35a5c6af4d52b3f63822/img/hardware-buttons-2@2x.png"
              />
              <img
                className="inner-screen-frame-w"
                alt="Inner screen frame w"
                src="https://generation-sessions.s3.amazonaws.com/54bef66a4aaf35a5c6af4d52b3f63822/img/inner-screen-frame-w--notch-2.svg"
              />
              <div className="speaker-camera">
                <div className="rectangle" />
                <div className="ellipse" />
              </div>
            </div>
          </div>
        </div>
        <div className="i-phone-wrapper">
          <div className="i-phone">
            <div className="overlap-group-5">
              <img
                className="iphone-shape"
                alt="Iphone shape"
                src="https://generation-sessions.s3.amazonaws.com/54bef66a4aaf35a5c6af4d52b3f63822/img/iphone-shape-1.svg"
              />
              <img
                className="hardware-buttons"
                alt="Hardware buttons"
                src="https://generation-sessions.s3.amazonaws.com/54bef66a4aaf35a5c6af4d52b3f63822/img/hardware-buttons-2@2x.png"
              />
              <img
                className="inner-screen-frame-w"
                alt="Inner screen frame w"
                src="https://generation-sessions.s3.amazonaws.com/54bef66a4aaf35a5c6af4d52b3f63822/img/inner-screen-frame-w--notch-2.svg"
              />
              <div className="speaker-camera">
                <div className="rectangle" />
                <div className="ellipse" />
              </div>
            </div>
          </div>
        </div>
        <div className="deviceiphone-2">
          <div className="i-phone">
            <div className="overlap-group-6">
              <img
                className="iphone-shape-2"
                alt="Iphone shape"
                src="https://generation-sessions.s3.amazonaws.com/54bef66a4aaf35a5c6af4d52b3f63822/img/iphone-shape.svg"
              />
              <img
                className="hardware-buttons-2"
                alt="Hardware buttons"
                src="https://generation-sessions.s3.amazonaws.com/54bef66a4aaf35a5c6af4d52b3f63822/img/hardware-buttons@2x.png"
              />
              <img
                className="inner-screen-frame-w-2"
                alt="Inner screen frame w"
                src="https://generation-sessions.s3.amazonaws.com/54bef66a4aaf35a5c6af4d52b3f63822/img/inner-screen-frame-w--notch.svg"
              />
              <div className="speaker-camera">
                <div className="rectangle" />
                <div className="ellipse" />
              </div>
            </div>
          </div>
        </div>
        <div className="group-4">
          <div className="frame-18">
            <div className="text-wrapper-21">Coral</div>
            <ElementControlsTag
              className="element-controls-tag-instance"
              darkMode
              tagClassName="design-component-instance-node-3"
              text="Mobile App"
            />
            <p className="description-7">
              #1 at Health Hacks 2023 <br />
              An accessible, AI-powered app that provides personalized anxiety management for college students.
            </p>
          </div>
          <ElementControlsButtons
            buttonTypes="secondary"
            className="element-controls-buttons-2"
            darkMode
            primaryClassName="element-controls-buttons-3"
            states="default"
            text1="Tell me more 􀄫"
          />
        </div>
      </div>
      <div className="div-3">
        <div className="overlap-4">
          <NeonThemeSwapper
            className="neon-theme-swapper-instance"
            gradientsType="https://generation-sessions.s3.amazonaws.com/54bef66a4aaf35a5c6af4d52b3f63822/img/-gradients.svg"
            gradientsTypeClassName="neon-theme-swapper-2"
          />
          <div className="element-cards-articlecard">
            <div className="element-icons-image-2" />
            <div className="frame-19">
              <div className="text-wrapper-22">Project Title</div>
              <p className="description-3">
                Fill your project brief here. It can be the outcome of the project, or some success metrics, or a cheesy
                tagline.
              </p>
              <div className="frame-8">
                <ElementControlsTag darkMode tagClassName="design-component-instance-node-3" text="Mobile App" />
                <ElementControlsTag darkMode tagClassName="design-component-instance-node-3" text="Website" />
                <ElementControlsTag darkMode tagClassName="design-component-instance-node-3" text="SaaS" />
              </div>
            </div>
          </div>
        </div>
        <div className="text-wrapper-23">More works.</div>
        <div className="element-cards-articlecard-2">
          <ElementIconsImage
            className="three-icons-image-placeholder"
            darkMode={false}
            shape="square"
            visible={false}
          />
          <div className="frame-20">
            <div className="text-wrapper-22">Project Title</div>
            <p className="description-3">
              Fill your project brief here. It can be the outcome of the project, or some success metrics, or a cheesy
              tagline.
            </p>
            <div className="frame-8">
              <ElementControlsTag darkMode tagClassName="design-component-instance-node-3" text="Mobile App" />
              <ElementControlsTag darkMode tagClassName="design-component-instance-node-3" text="Website" />
              <ElementControlsTag darkMode tagClassName="design-component-instance-node-3" text="SaaS" />
            </div>
          </div>
        </div>
      </div>
      <div className="element-home-work-contact">
        <div className="frame-21">
          <div className="div-wrapper">
            <div className="goals-interests">Goals &amp; Interests</div>
          </div>
          <p className="description-8">
            I am actively looking for a research position in algorithms for computational biology to start now and a
            full time software engineering position for the fall of 2024.
          </p>
          <p className="description-9">I am open to freelancer work for blah blah blah as well.</p>
          <div className="element-controls-buttons-wrapper">
            <ElementControlsButtons
              buttonTypes="primary"
              className="two-controls-buttons"
              darkMode={false}
              primaryClassName="design-component-instance-node-3"
              states="default"
              text="Get in touch!"
            />
          </div>
        </div>
        <div className="element-icons-image-3" />
      </div>
      <div className="div-2">
        <div className="frame-22">
          <div className="text-wrapper-24">Works</div>
          <div className="text-wrapper-24">About</div>
          <div className="text-wrapper-24">Articles</div>
          <div className="text-wrapper-24">Experiments</div>
        </div>
        <div className="text-wrapper-25">© 2021 your name</div>
        <ElementControlsButtons
          buttonTypes="secondary"
          className="element-controls-buttons-4"
          darkMode
          primaryClassName="design-component-instance-node-3"
          states="default"
          text1="Back up 􀄨"
        />
      </div>
    </div>
  );
};
