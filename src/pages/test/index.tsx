import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Panels = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let panels = gsap.utils.toArray(".panel") as HTMLElement[];
    let tops = panels.map((panel) =>
      ScrollTrigger.create({ trigger: panel, start: "top top" })
    );

    panels.forEach((panel: HTMLElement, i) => {
      ScrollTrigger.create({
        trigger: panel,
        start: () =>
          panel.offsetHeight < window.innerHeight ? "top top" : "bottom bottom",
        pin: true,
        pinSpacing: false,
      });
    });

    ScrollTrigger.create({
      snap: {
        snapTo: (progress: any, self: any) => {
          let panelStarts = tops.map((st) => st.start),
            snapScroll = gsap.utils.snap(panelStarts, self.scroll());
          return gsap.utils.normalize(
            0,
            ScrollTrigger.maxScroll(window),
            snapScroll
          );
        },
        duration: 0.5,
      }, // set the type of snap to SnapVars
    });
  }, []);

  return (
    <>
      <div className="description panel blue">
        <div>
          <h1>Layered pinning</h1>
          <p>Use pinning to layer panels on top of each other as you scroll.</p>
          <div className="scroll-down">
            Scroll down<div className="arrow"></div>
          </div>
        </div>
      </div>

      <section className="panel red">ONE</section>
      <section className="panel orange" style={{ height: "220vh" }}>
        TWO
      </section>
      <section className="panel purple" style={{ height: "50vh" }}>
        THREE
      </section>
      <section className="panel green">FOUR</section>
    </>
  );
};

export default Panels;
