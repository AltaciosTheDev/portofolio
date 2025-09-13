import { Bot, Briefcase, Code, TestTubeDiagonal, User } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Driven Full-Stack Developer with a Mechatronics Edge
            </h3>

            <p className="text-muted-foreground">
              I'm a self-taught developer with a B.Sc. in Mechatronics Engineering, 2 years of experience in the automotive industry, and 1 year in the software industry as a manual QA tester. My background in hardware and software quality assurance gives me a well-rounded perspective when building scalable, reliable applications across the stack.
            </p>

            <p className="text-muted-foreground">
              I’m passionate about solving real-world problems through clean, maintainable code. I'm continuously expanding my skills in full-stack development and automation testing, driven by a strong eye for quality, curiosity, and a commitment to lifelong learning.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="../../Enzo_Altamirano_CV.pdf"
                download
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Full-Stack Development</h4>
                  <p className="text-muted-foreground">
                    Building scalable and efficient web applications using modern frontend and backend technologies.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <TestTubeDiagonal className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Quality Assurance & Testing</h4>
                  <p className="text-muted-foreground">
                    Experience in manual testing with a focus on automation, code reliability and a trained eye for bug free software.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Bot className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Technical Problem Solving</h4>
                  <p className="text-muted-foreground">
                    Leveraging Mechatronics Engineering background to approach problems with analytical thinking and a systems-based mindset.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};