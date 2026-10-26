import { useEffect, useRef, useState } from "react";
import { PROFILE, CONTACT, SKILLS, PROJECTS, EDUCATION } from "./data.js";

const NAV = ["Home", "About", "Skills", "Projects", "Education", "Contact"];
const id = (s) => s.toLowerCase();
const resumeHref = PROFILE.resumeFile ? `${import.meta.env.BASE_URL}${PROFILE.resumeFile}` : "";

const ICONS = {
  github: "M12 .5a11.5 11.5 0 0 0-3.6 22.4c.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.2c0 .3.2.7.8.6A11.5 11.5 0 0 0 12 .5z",
  linkedin: "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.5h4V21H3V9.5zm6.5 0h3.8v1.6h.1c.5-1 1.8-2 3.8-2 4 0 4.8 2.6 4.8 6V21h-4v-5.2c0-1.3 0-2.9-1.8-2.9s-2.1 1.4-2.1 2.8V21h-4V9.5z",
  mail: "M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm1 2v.5l8 5.5 8-5.5V7H4zm16 3-8 5.5L4 10v7h16v-7z",
  download: "M11 3h2v9.2l3.3-3.3 1.4 1.4L12 16 6.3 10.3l1.4-1.4 3.3 3.3V3zM5 19h14v2H5v-2z",
};
const Icon = ({ n }) => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true"><path d={ICONS[n]} /></svg>
);

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("in");
      return;
    }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add("in"); io.disconnect(); }
    }, { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

function Section({ name, title, children }) {
  const ref = useReveal();
  return (
    <section id={id(name)} className="section" aria-labelledby={`${id(name)}-h`}>
      <div ref={ref} className="wrap reveal">
        <h2 id={`${id(name)}-h`}>{title}</h2>
        {children}
      </div>
    </section>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <nav className="wrap nav" aria-label="Main">
        <a href="#home" className="brand" aria-label="Maathesvaaran S, home">MS</a>
        <button className="burger" aria-expanded={open} aria-controls="menu" onClick={() => setOpen(!open)}>
          <span className="sr">Menu</span><i /><i /><i />
        </button>
        <ul id="menu" className={open ? "menu open" : "menu"}>
          {NAV.map((n) => (
            <li key={n}><a href={`#${id(n)}`} onClick={() => setOpen(false)}>{n}</a></li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="hero" aria-label="Introduction">
      <div className="wrap hero-grid">
        <div>
          <p className="status"><span className="dot" />Open to fresher opportunities</p>
          <p className="hello">Hello, I'm</p>
          <h1>MAATHESVAARAN S</h1>
          <p className="role">{PROFILE.role}</p>
          <p className="lead">{PROFILE.intro}</p>
          <div className="btns">
            <a className="btn primary" href="#projects">View my projects</a>
            {resumeHref ? (
              <a className="btn" href={resumeHref} download><Icon n="download" />Download resume</a>
            ) : (
              <span className="btn off" role="link" aria-disabled="true" title="Add your resume: see README">Download resume</span>
            )}
            <a className="btn" href="#contact">Contact me</a>
          </div>
        </div>
        <div className="code" aria-hidden="true">
          <div className="code-bar"><i /><i /><i /><span>Developer.java</span></div>
          <pre><code>
<span className="k">public class</span> <span className="t">Developer</span> {"{"}{"\n"}
{"  "}<span className="t">String</span> name = <span className="s">"Maathesvaaran S"</span>;{"\n"}
{"  "}<span className="t">String</span> degree = <span className="s">"B.E. CSE, 2027"</span>;{"\n"}
{"\n"}
{"  "}<span className="t">String</span>[] using = {"{"}{"\n"}
{"    "}<span className="s">"Java"</span>, <span className="s">"SQL"</span>, <span className="s">"Git"</span>{"\n"}
{"  "}{"}"};{"\n"}
{"  "}<span className="t">String</span>[] learning = {"{"}{"\n"}
{"    "}<span className="s">"DSA"</span>, <span className="s">"JavaScript"</span>{"\n"}
{"  "}{"}"};{"\n"}
{"\n"}
{"  "}<span className="k">void</span> <span className="f">build</span>() {"{"}{"\n"}
{"    "}<span className="c">// learn, apply, repeat</span>{"\n"}
{"  "}{"}"}{"\n"}
{"}"}
          </code></pre>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <Section name="About" title="About me">
      <div className="prose">
        <p>I'm a final-year B.E. Computer Science and Engineering student, graduating in 2027. Right now I'm focused on getting my programming fundamentals solid, especially Java, SQL and object-oriented programming.</p>
        <p>I like building small projects to apply what I learn, because that's where concepts actually start to make sense. I'm looking for a fresher role where I can keep improving, build useful applications and contribute to a development team.</p>
        <p className="muted">Based in {PROFILE.location}.</p>
      </div>
    </Section>
  );
}

const LEVEL = { using: "Using in projects", basic: "Basic level", learning: "Learning" };

function Skills() {
  return (
    <Section name="Skills" title="Skills">
      <ul className="legend" aria-label="Legend">
        {Object.entries(LEVEL).map(([k, v]) => (<li key={k}><span className={`pip ${k}`} />{v}</li>))}
      </ul>
      <div className="skill-grid">
        {SKILLS.map((g) => (
          <div className="card" key={g.group}>
            <h3>{g.group}</h3>
            <ul className="chips">
              {g.items.map(([n, lv]) => (
                <li key={n} className="chip"><span className={`pip ${lv}`} aria-hidden="true" />{n}<span className="sr"> ({LEVEL[lv]})</span></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

function LinkBtn({ href, children, label }) {
  return href ? (
    <a className="btn sm" href={href} target="_blank" rel="noopener noreferrer">{children}</a>
  ) : (
    <span className="btn sm off" role="link" aria-disabled="true" title={`Add ${label} in src/data.js`}>{children}</span>
  );
}

function Projects() {
  return (
    <Section name="Projects" title="Projects">
      <div className="proj-grid">
        {PROJECTS.map((p) => (
          <article className="card proj" key={p.name}>
            <p className="kind">{p.kind}</p>
            <h3>{p.name}</h3>
            <p>{p.description}</p>
            <ul className="feat">{p.features.map((f) => <li key={f}>{f}</li>)}</ul>
            {p.note && <p className="note">{p.note}</p>}
            <ul className="tags" aria-label="Technologies">{p.tags.map((t) => <li key={t}>{t}</li>)}</ul>
            <div className="btns">
              <LinkBtn href={p.repo} label="the repository link"><Icon n="github" />{p.repo ? "GitHub" : "GitHub link soon"}</LinkBtn>
              {p.demo && <LinkBtn href={p.demo} label="the demo link">Live demo</LinkBtn>}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Education() {
  return (
    <Section name="Education" title="Education">
      <div className="card edu">
        <div className="edu-mark" aria-hidden="true" />
        <div>
          <h3>{EDUCATION.degree}</h3>
          <p>{EDUCATION.college}</p>
          <p className="muted">{EDUCATION.graduation}</p>
          <p className="cgpa">CGPA <strong>{EDUCATION.cgpa}</strong></p>
        </div>
      </div>
    </Section>
  );
}

function Contact() {
  const [f, setF] = useState({ name: "", email: "", message: "" });
  const [state, setState] = useState("idle");
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  async function submit(e) {
    e.preventDefault();
    if (!CONTACT.formEndpoint) return setState("unconfigured");
    setState("sending");
    try {
      const r = await fetch(CONTACT.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(f),
      });
      if (!r.ok) throw new Error();
      setState("sent");
      setF({ name: "", email: "", message: "" });
    } catch {
      setState("error");
    }
  }

  const links = [
    ["Email", CONTACT.email && `mailto:${CONTACT.email}`, "mail", CONTACT.email],
    ["GitHub", CONTACT.github, "github", CONTACT.github && CONTACT.github.replace("https://", "")],
    ["LinkedIn", CONTACT.linkedin, "linkedin", CONTACT.linkedin && CONTACT.linkedin.replace("https://", "")],
  ];

  return (
    <Section name="Contact" title="Contact me">
      <div className="contact-grid">
        <form className="card form" onSubmit={submit} noValidate={false}>
          <label>Name<input required value={f.name} onChange={set("name")} autoComplete="name" /></label>
          <label>Email<input required type="email" value={f.email} onChange={set("email")} autoComplete="email" /></label>
          <label>Message<textarea required rows="5" value={f.message} onChange={set("message")} /></label>
          <button className="btn primary" type="submit" disabled={state === "sending"}>{state === "sending" ? "Sending..." : "Send message"}</button>
          <p className="form-msg" role="status" aria-live="polite">
            {state === "sent" && "Message sent. Thank you."}
            {state === "error" && "The message could not be sent. Please try again or use the links."}
            {state === "unconfigured" && "This form isn't connected yet. Set formEndpoint in src/data.js (see README)."}
          </p>
        </form>
        <ul className="links">
          {links.map(([label, href, icon, text]) => (
            <li key={label}>
              {href ? (
                <a className="card link" href={href} target={label === "Email" ? undefined : "_blank"} rel="noopener noreferrer"><Icon n={icon} /><span><b>{label}</b><small>{text}</small></span></a>
              ) : (
                <div className="card link off"><Icon n={icon} /><span><b>{label}</b><small>Not added yet. Edit src/data.js</small></span></div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

export default function App() {
  return (
    <>
      <a className="skip" href="#about">Skip to content</a>
      <Header />
      <main>
        <Hero /><About /><Skills /><Projects /><Education /><Contact />
      </main>
      <footer className="footer"><div className="wrap">Designed and built by Maathesvaaran S. &copy; {new Date().getFullYear()}</div></footer>
    </>
  );
}
