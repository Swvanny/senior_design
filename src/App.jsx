import { useEffect, useState } from "react";
import { profile, home, seniorDesign, projects, experience, resume, reflections } from "./content.js";

const pages = [
  ["home", "Home"],
  ["senior-design", "Senior Design"],
  ["projects", "Projects"],
  ...(experience.show ? [["experience", "Experience"]] : []),
  ["resume", "Resume"],
  ["reflections", "Reflections"],
  ["contact", "Contact"],
];

const docPath = (file) => `${import.meta.env.BASE_URL}documents/${encodeURIComponent(file)}`;

// Renders text, turning [[...]] into a visible to-do highlight.
function T({ children }) {
  if (typeof children !== "string") return children;
  const parts = children.split(/(\[\[.+?\]\])/g);
  return parts.map((p, i) =>
    p.startsWith("[[") ? <mark className="todo" key={i}>{p.slice(2, -2)}</mark> : p
  );
}

function useHashPage() {
  const read = () => {
    const h = window.location.hash.slice(1);
    return pages.some(([id]) => id === h) ? h : "home";
  };
  const [page, setPage] = useState(read);
  useEffect(() => {
    const onHash = () => { setPage(read()); window.scrollTo({ top: 0 }); };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  return page;
}

function useTheme() {
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem("theme") || ""; } catch { return ""; }
  });
  useEffect(() => {
    if (theme) document.documentElement.dataset.theme = theme;
    else delete document.documentElement.dataset.theme;
    try { theme ? localStorage.setItem("theme", theme) : localStorage.removeItem("theme"); } catch { /* storage blocked */ }
  }, [theme]);
  const isDark = theme ? theme === "dark" : window.matchMedia?.("(prefers-color-scheme: dark)").matches;
  return [isDark, () => setTheme(isDark ? "light" : "dark")];
}

export default function App() {
  const page = useHashPage();
  const [isDark, toggleTheme] = useTheme();
  const current = pages.find(([id]) => id === page)?.[1];

  useEffect(() => {
    document.title = `${profile.firstName} | ${page === "home" ? "Senior Portfolio" : current}`;
  }, [page, current]);

  return (
    <div className="shell">
      <aside className="sidebar">
        <a className="wordmark" href="#home">
          <span className="wm-first">{profile.firstName}</span>
          <span className="wm-last"><T>{profile.lastName}</T></span>
        </a>
        <p className="sidebar-sub">{profile.program}<br />{profile.school}</p>
        <nav className="nav" aria-label="Main">
          {pages.map(([id, label]) => (
            <a key={id} href={`#${id}`} className={page === id ? "active" : ""} aria-current={page === id ? "page" : undefined}>
              {label}
            </a>
          ))}
        </nav>
        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle light and dark mode">
          {isDark ? "Light mode" : "Dark mode"}
        </button>
      </aside>

      <main className="main" key={page}>
        {page === "home" && <Home />}
        {page === "senior-design" && <SeniorDesign />}
        {page === "projects" && <Projects />}
        {page === "experience" && <Experience />}
        {page === "resume" && <Resume />}
        {page === "reflections" && <Reflections />}
        {page === "contact" && <Contact />}

        <footer className="footer">
          <span>{profile.firstName} <T>{profile.lastName}</T></span>
          <span>Senior portfolio · Class of 2027</span>
        </footer>
      </main>
    </div>
  );
}

function PageHead({ eyebrow, title, children }) {
  return (
    <header className="page-head">
      {eyebrow && <p className="eyebrow"><T>{eyebrow}</T></p>}
      <h1><T>{title}</T></h1>
      {children && <p className="lede"><T>{children}</T></p>}
    </header>
  );
}

function Field({ label, text }) {
  return (
    <div className="field">
      <h3>{label}</h3>
      <p><T>{text}</T></p>
    </div>
  );
}

function Chips({ items }) {
  return <ul className="chips">{items.map((c, i) => <li key={i}><T>{c}</T></li>)}</ul>;
}

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-top">
          <p className="eyebrow">Senior portfolio · {profile.school}</p>
          <h1 className="hero-title">Welcome</h1>
        </div>
        <div className="hero-copy">
          <p className="hero-intro"><T>{home.intro}</T></p>
          <div className="actions">
            <a className="btn" href="#senior-design">See my senior design</a>
            <a className="btn-link" href="#contact">Get in touch →</a>
          </div>
        </div>
      </section>

      <section className="objective">
        <h2>{home.objectiveTitle}</h2>
        <div className="prose">{home.objective.map((p, i) => <p key={i}><T>{p}</T></p>)}</div>
      </section>

      <section className="quicklinks">
        {projects.map((p) => (
          <a key={p.id} href="#projects" className="quicklink" onClick={() => setTimeout(() => document.getElementById(p.id)?.scrollIntoView({ behavior: "smooth" }), 60)}>
            <span className="ql-kind"><T>{p.kind}</T></span>
            <span className="ql-title">{p.title}</span>
          </a>
        ))}
      </section>
    </>
  );
}

function DocLinks({ docs }) {
  return (
    <div className="doc-links">
      <h3>Supporting documents</h3>
      <ul>
        {docs.map((d) => (
          <li key={d.label}>
            {d.href.startsWith("[[")
              ? <span><T>{d.label}</T>: <T>{d.href}</T></span>
              : <a href={d.href.startsWith("http") ? d.href : `${import.meta.env.BASE_URL}${d.href}`} target="_blank" rel="noreferrer">{d.label} ↗</a>}
          </li>
        ))}
      </ul>
    </div>
  );
}

function SeniorDesign() {
  const s = seniorDesign;
  return (
    <>
      <PageHead eyebrow={s.meta} title={s.title} />
      <section className="sd">
        <div className="grid-2">
          <Field label="Project description" text={s.description} />
          <Field label="My role" text={s.role} />
          <Field label="Skills & knowledge gained" text={s.skills} />
          <Field label="Big-picture contribution" text={s.bigPicture} />
        </div>
        {(s.resources?.length > 0 || s.documents?.length > 0) && (
          <div className="sd-foot">
            {s.resources?.length > 0 && <div><h3>Built with</h3><Chips items={s.resources} /></div>}
            {s.documents?.length > 0 && <DocLinks docs={s.documents} />}
          </div>
        )}
      </section>
    </>
  );
}

function Projects() {
  return (
    <>
      <PageHead eyebrow={`${projects.length} projects`} title="Projects">
        Coursework, personal builds, and competition work outside of senior design.
      </PageHead>
      <div className="project-list">
        {projects.map((p) => (
          <article className="project" id={p.id} key={p.id}>
            <header className="project-head">
              <p className="eyebrow"><T>{p.kind}</T></p>
              <h2>{p.title}</h2>
            </header>
            <div className="grid-2">
              <Field label="Description" text={p.description} />
              <Field label="My role" text={p.role} />
              <Field label="Skills gained" text={p.skills} />
              <div className="field"><h3>Resources used</h3><Chips items={p.resources} /></div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}

function Experience() {
  const e = experience;
  return (
    <>
      <PageHead eyebrow="Internship / co-op" title={e.title}>{[e.company, e.team, e.dates].filter(Boolean).join(" · ")}</PageHead>
      <section className="grid-2 exp">
        {e.duties && <Field label="Duties & projects" text={e.duties} />}
        {e.technical && <Field label="Technical skills" text={e.technical} />}
        {e.soft && <Field label="Soft skills" text={e.soft} />}
        {e.evaluations && <Field label="Evaluations" text={e.evaluations} />}
        {e.presentations && <Field label="Presentations" text={e.presentations} />}
        {e.documents?.length > 0 && <DocLinks docs={e.documents} />}
      </section>
    </>
  );
}

function PdfViewer({ title, file }) {
  const path = docPath(file);
  const [state, setState] = useState("checking");
  useEffect(() => {
    let alive = true;
    fetch(path, { method: "HEAD" })
      .then((r) => alive && setState(r.ok && (r.headers.get("content-type") || "").includes("pdf") ? "ok" : "missing"))
      .catch(() => alive && setState("missing"));
    return () => { alive = false; };
  }, [path]);

  return (
    <div className="pdf">
      <div className="pdf-bar">
        <span>{file}</span>
        {state === "ok" && <a href={path} target="_blank" rel="noreferrer">Open in new tab ↗</a>}
      </div>
      {state === "ok"
        ? <iframe title={title} src={path} />
        : <div className="pdf-missing">
            {state === "checking" ? "Loading…" : <>Add <code>public/documents/{file}</code> and it will appear here.</>}
          </div>}
    </div>
  );
}

function Resume() {
  return (
    <>
      <PageHead title="Resume">Full resume below, with highlights for quick reading.</PageHead>
      <section className="resume-highlights">
        {resume.highlights.map((h) => (
          <div key={h.label}>
            <h3>{h.label}</h3>
            <ul>{h.items.map((it, i) => <li key={i}><T>{it}</T></li>)}</ul>
          </div>
        ))}
      </section>
      <PdfViewer title="Resume" file={resume.file} />
    </>
  );
}

function Reflections() {
  const [open, setOpen] = useState(reflections[0].id);
  const r = reflections.find((x) => x.id === open);
  return (
    <>
      <PageHead title="Reflections">Required writing for the portfolio, including the ethics paper from CPRE/EE 394.</PageHead>
      <div className="tabs" role="tablist">
        {reflections.map((x) => (
          <button key={x.id} role="tab" aria-selected={open === x.id} className={open === x.id ? "active" : ""} onClick={() => setOpen(x.id)}>
            {x.title}
          </button>
        ))}
      </div>
      <p className="tab-blurb"><T>{r.blurb}</T></p>
      <PdfViewer key={r.id} title={r.title} file={r.file} />
    </>
  );
}

function Contact() {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard?.writeText(profile.email).then(() => { setCopied(true); setTimeout(() => setCopied(false), 1600); }).catch(() => {});
  };
  const rows = [
    ["Phone", profile.phone],
    ["Location", profile.location],
    ["LinkedIn", profile.linkedin, profile.linkedinUrl],
    ["GitHub", profile.github, profile.githubUrl],
  ];
  return (
    <>
      <PageHead title="Contact">I'm glad to talk about my work, internships, or full-time roles after spring 2027.</PageHead>
      <section className="contact">
        <div className="email-block">
          <h3>Email</h3>
          <a className="email" href={`mailto:${profile.email.replace(/\[\[|\]\]/g, "")}`}><T>{profile.email}</T></a>
          <button className="btn-link" onClick={copy}>{copied ? "Copied" : "Copy address"}</button>
        </div>
        <dl className="contact-list">
          {rows.filter(([, v]) => v).map(([k, v, url]) => (
            <div key={k}>
              <dt>{k}</dt>
              <dd>{url ? <a href={url} target="_blank" rel="noreferrer"><T>{v}</T> ↗</a> : <T>{v}</T>}</dd>
            </div>
          ))}
        </dl>
      </section>
    </>
  );
}
