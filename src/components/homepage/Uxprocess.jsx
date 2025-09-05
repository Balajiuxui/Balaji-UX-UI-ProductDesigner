import React from "react";
import "./uxprocess.css"; // your CSS file
import { LayoutGroup, motion } from "motion/react"
import Reveal from '../reveal/Reveal';


const UxProcess = () => {
  return (
    <section className="ux-process" id="design-process">
      <div className="container">
        <div className="ux-process-title-para">
            <Reveal direction="up">
          <div className="title-with-icon">
            <img
              src="icons/Group 255.svg"
              alt="Description of icon"
              className="ux-process-icon"
            />
            <h1 className="heading-4 ux-process-title">
              How I Design — Fast, Focused, and for People
            </h1>
          </div>
          </Reveal>
          <Reveal direction="up" delay={0.2}>
          <p className="ux-process-para">
            I design with speed and empathy — combining Design Thinking and Lean
            UX to solve real problems through quick learning, testing, and
            iteration.
          </p>
          </Reveal>
        </div>

        <div className="ux-process-section">
          {/* Row 1 */}
          <div className="eachblockrow">
          
            <motion.div
            className="eachblock"
  initial={{ opacity: 0, x: -40 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
    viewport={{ once: true, amount: 0.3 }} 
 >
              <div className="eachblock-title">
                <h1 className="ux-process-section-number heading-4">01.</h1>
                <h1 className="ux-process-section-title heading-4">
                  Empathize: Real People, Real Problems
                </h1>
              </div>
              <h1 className="overline overline-eachblock">
                “Design starts with listening, not sketching.”
              </h1>
              <h1 className="eachblockpara">
                I talk to users, not just about what they want — but what
                frustrates, delights, or confuses them. Whether it’s a farmer
                using an education app or a technician monitoring factory data,
                I aim to see the world through their eyes.
              </h1>
              <ul className="eachblockpara">
                <li>Interviews & shadowing</li>
                <li>Rapid surveys</li>
                <li>Experience mapping</li>
              </ul>
            </motion.div>

           <motion.div
            className="eachblock"
  initial={{ opacity: 0, x: 40 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
    viewport={{ once: true, amount: 0.3 }} 
 >
              <div className="eachblock-title">
                <h1 className="ux-process-section-number heading-4">02.</h1>
                <h1 className="ux-process-section-title heading-4">
                  Define: Align Before You Design
                </h1>
              </div>
              <h1 className="overline overline-eachblock">
                “If we’re not solving the right problem, nothing else matters.”
              </h1>
              <h1 className="eachblockpara">
                I turn observations into hypotheses, not feature wishlists. I
                collaborate with PMs and devs early to ensure we’re all solving
                the same thing — with measurable outcomes in mind.
              </h1>
              <h1 className="eachblocksubtitle heading-6">
                Lean UX Hypothesis Example:
              </h1>
              <h1 className="eachblockpara">
                “We believe that rural students need a practice exam system to
                stay engaged. We'll know we're right if usage increases by 50%
                in 3 weeks.”
              </h1>
            </motion.div>
          </div>

          {/* Row 2 */}
          <div className="eachblockrow">
             <motion.div
            className="eachblock"
  initial={{ opacity: 0, x: -40 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
    viewport={{ once: true, amount: 0.3 }} 
 >
              <div className="eachblock-title">
                <h1 className="ux-process-section-number heading-4">03.</h1>
                <h1 className="ux-process-section-title heading-4">
                  Ideate: Think Bold, Sketch Fast
                </h1>
              </div>
              <h1 className="overline overline-eachblock">
                “Great design ideas don’t live in isolation — they live on
                whiteboards.”
              </h1>
              <h1 className="eachblockpara">
                Instead of designing in silos, I co-create. We sketch together,
                brainstorm wildly, and explore multiple directions — knowing
                most ideas are just stepping stones toward something better.
              </h1>
              <ul className="eachblockpara">
                <li>Sketching sessions</li>
                <li>Design sprints</li>
                <li>Quick user storyboarding</li>
              </ul>
            </motion.div>

               <motion.div
            className="eachblock"
  initial={{ opacity: 0, x: 40 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
    viewport={{ once: true, amount: 0.3 }} 
 >
              <div className="eachblock-title">
                <h1 className="ux-process-section-number heading-4">04.</h1>
                <h1 className="ux-process-section-title heading-4">
                  Prototype & Test: Learn Fast, Fail Smart
                </h1>
              </div>
              <h1 className="overline overline-eachblock">
                “Fail fast? No — learn fast.”
              </h1>
              <h1 className="eachblockpara">
                I build low-fi prototypes — from clickable wireframes to simple
                animations — and test them early with real users. This lets me
                validate the UX quickly before wasting time on polish. Every
                test sharpens the solution.
              </h1>
              <ul className="eachblockpara">
                <li>Clickable flows</li>
                <li>5-user tests</li>
                <li>Feedback synthesis in hours, not days</li>
              </ul>
            </motion.div>
          </div>

          {/* Row 3 */}
          <div className="eachblockrow">
            <motion.div
            className="eachblock"
  initial={{ opacity: 0, x: -40 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
    viewport={{ once: true, amount: 0.3 }} 
 >
              <div className="eachblock-title">
                <h1 className="ux-process-section-number heading-4">05.</h1>
                <h1 className="ux-process-section-title heading-4">
                  Iterate & Ship: Small Wins, Big Impact
                </h1>
              </div>
              <h1 className="overline overline-eachblock">
                “Perfect is the enemy of progress.”
              </h1>
              <h1 className="eachblockpara">
                Instead of giant handoffs, I work in quick loops — design, test,
                refine, ship. I stay in sync with developers to ensure smooth
                handoff and pixel precision. Post-launch, I gather insights and
                tweak continuously.
              </h1>
              <ul className="eachblockpara">
                <li>Dev-ready components</li>
                <li>Design QA support</li>
                <li>Live feedback + analytics</li>
              </ul>
            </motion.div>

               <motion.div
            className="eachblock"
  initial={{ opacity: 0, x: 40 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
    viewport={{ once: true, amount: 0.3 }} 
    
 >
              <div className="eachblock-title">
                <h1 className="ux-process-section-number heading-4">06.</h1>
                <h1 className="ux-process-section-title heading-4">
                  Accessibility is Built In, Not Bolted On
                </h1>
              </div>
              <h1 className="overline overline-eachblock">
                “Design isn’t truly good unless it’s good for everyone.”
              </h1>
              <h1 className="eachblockpara">
                Every project I work on respects diverse users — including those
                with disabilities or low-end devices. I apply WCAG guidelines,
                use accessible color palettes, and test for keyboard and screen
                reader compatibility.
              </h1>
            </motion.div>
          </div>

<Reveal direction="up" delay={0.5}>

          <h1 className="heading-4 ux-process-last-test">
            This process isn’t just theory. It’s how I’ve shipped 8+ products —
            from real-time factory dashboards to gamified rural learning
            platforms — all with empathy, speed, and measurable success.
          </h1>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default UxProcess;
