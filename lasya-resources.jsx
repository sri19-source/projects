import { useState } from "react";

const categories = [
  {
    id: "python-dsa",
    label: "Python & DSA",
    icon: "⌨",
    color: "#f59e0b",
    resources: [
      {
        type: "YouTube",
        name: "Corey Schafer",
        url: "youtube.com/@coreyms",
        why: "Best Python tutorials on the internet. Clean, deep, no fluff.",
        free: true,
        priority: "🔥 Must",
      },
      {
        type: "YouTube",
        name: "Tech With Tim",
        url: "youtube.com/@TechWithTim",
        why: "Python projects + ML basics. Great for building real things fast.",
        free: true,
        priority: "High",
      },
      {
        type: "YouTube",
        name: "Abdul Bari (Algorithms)",
        url: "youtube.com/@abdul_bari",
        why: "THE best algorithm explanations. Pure gold for DSA depth.",
        free: true,
        priority: "🔥 Must",
      },
      {
        type: "Website",
        name: "Striver's A2Z DSA Sheet",
        url: "takeuforward.org/strivers-a2z-dsa-course",
        why: "Structured DSA roadmap from zero to interview-ready. Follow this religiously.",
        free: true,
        priority: "🔥 Must",
      },
      {
        type: "Website",
        name: "LeetCode",
        url: "leetcode.com",
        why: "50 easy problems in Year 1, then medium in Year 2. Non-negotiable.",
        free: true,
        priority: "🔥 Must",
      },
      {
        type: "Website",
        name: "Python Docs",
        url: "docs.python.org/3",
        why: "Read the official docs. This habit separates serious devs from casual ones.",
        free: true,
        priority: "Medium",
      },
    ],
  },
  {
    id: "web",
    label: "HTML/CSS/Web",
    icon: "🌐",
    color: "#06b6d4",
    resources: [
      {
        type: "YouTube",
        name: "Kevin Powell",
        url: "youtube.com/@KevinPowell",
        why: "The undisputed king of CSS. Every video is a masterclass.",
        free: true,
        priority: "🔥 Must",
      },
      {
        type: "YouTube",
        name: "Fireship",
        url: "youtube.com/@Fireship",
        why: "100-second tech explainers + full tutorials. Always current, always sharp.",
        free: true,
        priority: "🔥 Must",
      },
      {
        type: "Website",
        name: "MDN Web Docs",
        url: "developer.mozilla.org",
        why: "The bible of web development. Bookmark this forever.",
        free: true,
        priority: "🔥 Must",
      },
      {
        type: "Website",
        name: "CSS-Tricks",
        url: "css-tricks.com",
        why: "Deep CSS articles and guides. Flexbox and Grid guides are legendary.",
        free: true,
        priority: "High",
      },
      {
        type: "Website",
        name: "Frontend Mentor",
        url: "frontendmentor.io",
        why: "Real design challenges to build. Portfolio-worthy projects from day 1.",
        free: true,
        priority: "High",
      },
    ],
  },
  {
    id: "aiml",
    label: "AI & ML",
    icon: "🧠",
    color: "#e8473f",
    resources: [
      {
        type: "YouTube",
        name: "Andrej Karpathy",
        url: "youtube.com/@AndrejKarpathy",
        why: "Neural networks from absolute scratch. Made by an ex-OpenAI/Tesla AI director. Watch everything.",
        free: true,
        priority: "🔥 Must",
      },
      {
        type: "YouTube",
        name: "3Blue1Brown",
        url: "youtube.com/@3blue1brown",
        why: "Math visualizations for ML (linear algebra, calculus, neural nets). The most beautiful math content alive.",
        free: true,
        priority: "🔥 Must",
      },
      {
        type: "YouTube",
        name: "Sentdex",
        url: "youtube.com/@sentdex",
        why: "Practical Python + ML projects. Great for building things while learning.",
        free: true,
        priority: "High",
      },
      {
        type: "Website",
        name: "fast.ai",
        url: "fast.ai",
        why: "Top-down practical deep learning. Used by researchers worldwide. Free and exceptional.",
        free: true,
        priority: "🔥 Must",
      },
      {
        type: "Website",
        name: "Kaggle",
        url: "kaggle.com",
        why: "Free datasets, notebooks, competitions, and micro-courses. Your ML playground.",
        free: true,
        priority: "🔥 Must",
      },
      {
        type: "Website",
        name: "Papers With Code",
        url: "paperswithcode.com",
        why: "Read ML research papers with implementations. Start doing this in Year 2.",
        free: true,
        priority: "High",
      },
      {
        type: "Course",
        name: "DeepLearning.AI (Coursera)",
        url: "deeplearning.ai",
        why: "Andrew Ng's updated ML specializations. Audit for free. Structured and rigorous.",
        free: false,
        freeNote: "Audit free",
        priority: "🔥 Must",
      },
      {
        type: "Website",
        name: "HuggingFace",
        url: "huggingface.co",
        why: "The GitHub of AI models. Learn to use and fine-tune models here in Year 2.",
        free: true,
        priority: "High",
      },
    ],
  },
  {
    id: "quantum",
    label: "Quantum Computing",
    icon: "⚛",
    color: "#8b5cf6",
    resources: [
      {
        type: "Website",
        name: "IBM Quantum Learning",
        url: "learning.quantum.ibm.com",
        why: "Official free IBM platform. Qiskit tutorials, real quantum hardware access. Start here.",
        free: true,
        priority: "🔥 Must",
      },
      {
        type: "Website",
        name: "Qiskit Textbook",
        url: "qiskit.org/learn",
        why: "Open-source quantum computing textbook. Rigorous and hands-on at the same time.",
        free: true,
        priority: "🔥 Must",
      },
      {
        type: "YouTube",
        name: "Qiskit (Official Channel)",
        url: "youtube.com/@qiskit",
        why: "Video lectures on quantum circuits, algorithms, and real IBM hardware demos.",
        free: true,
        priority: "High",
      },
      {
        type: "YouTube",
        name: "Quantum Computing India",
        url: "youtube.com/@QuantumComputingIndia",
        why: "India-focused quantum content. Great for local ecosystem awareness.",
        free: true,
        priority: "Medium",
      },
    ],
  },
  {
    id: "cyber",
    label: "Cybersecurity",
    icon: "🔐",
    color: "#22c55e",
    resources: [
      {
        type: "Website",
        name: "TryHackMe",
        url: "tryhackme.com",
        why: "Gamified, hands-on cybersecurity learning. Beginner to advanced. Start with free rooms.",
        free: true,
        priority: "🔥 Must",
      },
      {
        type: "Website",
        name: "HackTheBox",
        url: "hackthebox.com",
        why: "Real-world ethical hacking challenges. Used by professional pentesters.",
        free: true,
        priority: "High",
      },
      {
        type: "Website",
        name: "OWASP",
        url: "owasp.org",
        why: "The definitive resource for web security. Know the Top 10 vulnerabilities inside out.",
        free: true,
        priority: "🔥 Must",
      },
      {
        type: "YouTube",
        name: "NetworkChuck",
        url: "youtube.com/@NetworkChuck",
        why: "Makes cybersecurity fun and practical. Great for early exploration of the field.",
        free: true,
        priority: "High",
      },
      {
        type: "YouTube",
        name: "John Hammond",
        url: "youtube.com/@_JohnHammond",
        why: "CTF walkthroughs and malware analysis. Watch this to think like a hacker.",
        free: true,
        priority: "High",
      },
      {
        type: "Website",
        name: "PicoCTF",
        url: "picoctf.org",
        why: "Carnegie Mellon's beginner CTF. Perfect for Year 1 cybersecurity projects.",
        free: true,
        priority: "High",
      },
    ],
  },
  {
    id: "uiux",
    label: "UI/UX Design",
    icon: "✦",
    color: "#f472b6",
    resources: [
      {
        type: "Website",
        name: "Figma",
        url: "figma.com",
        why: "The industry-standard design tool. Free for students. Learn this first.",
        free: true,
        priority: "🔥 Must",
      },
      {
        type: "Course",
        name: "Google UX Design Certificate",
        url: "coursera.org/professional-certificates/google-ux-design",
        why: "The best structured UX course available. Portfolio-building included.",
        free: false,
        freeNote: "Audit free",
        priority: "🔥 Must",
      },
      {
        type: "YouTube",
        name: "Mizko",
        url: "youtube.com/@Mizko",
        why: "UI/UX case studies and Figma tutorials from a senior product designer.",
        free: true,
        priority: "High",
      },
      {
        type: "Website",
        name: "Dribbble",
        url: "dribbble.com",
        why: "Inspiration for UI design. Study the best work, then copy the style (not the work).",
        free: true,
        priority: "Medium",
      },
      {
        type: "Website",
        name: "Laws of UX",
        url: "lawsofux.com",
        why: "Beautifully presented UX principles every designer must know.",
        free: true,
        priority: "High",
      },
      {
        type: "Website",
        name: "Refactoring UI",
        url: "refactoringui.com",
        why: "Practical design tips for developers who want to make great UIs. Game-changer book.",
        free: false,
        freeNote: "Book ~$99 but worth it",
        priority: "High",
      },
    ],
  },
  {
    id: "arvr",
    label: "AR / VR",
    icon: "🥽",
    color: "#fb923c",
    resources: [
      {
        type: "Website",
        name: "Unity Learn",
        url: "learn.unity.com",
        why: "Free Unity courses including AR/VR. The most used game + XR engine in the industry.",
        free: true,
        priority: "🔥 Must",
      },
      {
        type: "Website",
        name: "WebXR Device API (MDN)",
        url: "developer.mozilla.org/en-US/docs/Web/API/WebXR_Device_API",
        why: "Browser-native AR/VR without app installs. Great for web-based XR projects.",
        free: true,
        priority: "High",
      },
      {
        type: "YouTube",
        name: "Valem Tutorials",
        url: "youtube.com/@ValemTutorials",
        why: "Focused Unity VR tutorials. Perfect for building your first VR experience.",
        free: true,
        priority: "High",
      },
      {
        type: "Website",
        name: "A-Frame",
        url: "aframe.io",
        why: "Open-source web framework for VR. Build VR scenes with HTML. Fastest entry point.",
        free: true,
        priority: "High",
      },
    ],
  },
  {
    id: "business",
    label: "Business & Marketing",
    icon: "📈",
    color: "#34d399",
    resources: [
      {
        type: "Newsletter",
        name: "Lenny's Newsletter",
        url: "lennysnewsletter.com",
        why: "The best product & growth newsletter on the internet. Read every issue.",
        free: true,
        priority: "🔥 Must",
      },
      {
        type: "Website",
        name: "HubSpot Academy",
        url: "academy.hubspot.com",
        why: "Free marketing certifications. Digital marketing, SEO, content strategy.",
        free: true,
        priority: "🔥 Must",
      },
      {
        type: "YouTube",
        name: "Y Combinator",
        url: "youtube.com/@ycombinator",
        why: "Startup School lectures from the world's top startup accelerator. CEO mindset fuel.",
        free: true,
        priority: "🔥 Must",
      },
      {
        type: "Website",
        name: "YC Startup School",
        url: "startupschool.org",
        why: "Free 10-week founder course by Y Combinator. Apply even as a student.",
        free: true,
        priority: "🔥 Must",
      },
      {
        type: "Newsletter",
        name: "The Hustle",
        url: "thehustle.co",
        why: "Daily business news, written sharply. Stay updated on industry moves.",
        free: true,
        priority: "Medium",
      },
      {
        type: "YouTube",
        name: "Alex Hormozi",
        url: "youtube.com/@AlexHormozi",
        why: "Business strategy and scaling. Direct, no-BS frameworks for building companies.",
        free: true,
        priority: "High",
      },
    ],
  },
  {
    id: "general",
    label: "Essential Platforms",
    icon: "◈",
    color: "#a78bfa",
    resources: [
      {
        type: "Platform",
        name: "GitHub",
        url: "github.com",
        why: "Your public portfolio. Every project goes here. Green commit streak = visible work ethic.",
        free: true,
        priority: "🔥 Must",
      },
      {
        type: "Platform",
        name: "LinkedIn",
        url: "linkedin.com",
        why: "Build your professional brand NOW, not later. Post your projects. Recruiters watch this.",
        free: true,
        priority: "🔥 Must",
      },
      {
        type: "Platform",
        name: "Notion",
        url: "notion.so",
        why: "Track your roadmap, take notes, build a second brain. Free for students.",
        free: true,
        priority: "High",
      },
      {
        type: "Platform",
        name: "Replit",
        url: "replit.com",
        why: "Browser-based coding. Great for quick experiments without setup friction.",
        free: true,
        priority: "Medium",
      },
      {
        type: "Website",
        name: "roadmap.sh",
        url: "roadmap.sh",
        why: "Visual skill roadmaps for every tech domain. Cross-reference with your plan.",
        free: true,
        priority: "High",
      },
      {
        type: "Platform",
        name: "Dev.to / Hashnode",
        url: "dev.to",
        why: "Write about what you build. A blog = proof of depth. Technical writing is underrated.",
        free: true,
        priority: "High",
      },
    ],
  },
];

const typeColors = {
  YouTube: "#e8473f",
  Website: "#06b6d4",
  Course: "#f59e0b",
  Newsletter: "#34d399",
  Platform: "#a78bfa",
};

const priorityStyle = {
  "🔥 Must": { bg: "#e8473f22", color: "#e8473f", border: "#e8473f44" },
  "High": { bg: "#f59e0b22", color: "#f59e0b", border: "#f59e0b44" },
  "Medium": { bg: "#33333344", color: "#666", border: "#33333366" },
};

export default function Resources() {
  const [active, setActive] = useState("python-dsa");
  const [search, setSearch] = useState("");

  const allResources = search.trim()
    ? categories.flatMap(c =>
        c.resources
          .filter(r =>
            r.name.toLowerCase().includes(search.toLowerCase()) ||
            r.why.toLowerCase().includes(search.toLowerCase()) ||
            r.type.toLowerCase().includes(search.toLowerCase())
          )
          .map(r => ({ ...r, catColor: c.color, catLabel: c.label }))
      )
    : null;

  const activeCat = categories.find(c => c.id === active);

  return (
    <div style={{
      fontFamily: "'IBM Plex Mono', 'Courier New', monospace",
      background: "#050505",
      color: "#d4d0c8",
      minHeight: "100vh",
      margin: 0,
      padding: 0,
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,300;0,400;0,500;1,300&family=Fraunces:ital,wght@0,600;1,400&display=swap');
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 3px; }
        ::-webkit-scrollbar-track { background: #0a0a0a; }
        ::-webkit-scrollbar-thumb { background: #2a2a2a; }

        .res-card {
          background: #0d0d0d;
          border: 1px solid #1a1a1a;
          padding: 20px;
          margin-bottom: 10px;
          transition: all 0.18s;
          position: relative;
          cursor: default;
        }
        .res-card:hover {
          border-color: #2a2a2a;
          background: #111;
          transform: translateX(3px);
        }
        .cat-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 14px;
          background: transparent;
          border: 1px solid #1a1a1a;
          color: #444;
          cursor: pointer;
          font-family: 'IBM Plex Mono', monospace;
          font-size: 0.7rem;
          letter-spacing: 0.08em;
          transition: all 0.18s;
          white-space: nowrap;
          border-radius: 2px;
        }
        .cat-btn:hover { color: #888; border-color: #2a2a2a; }
        .cat-btn.active { color: #d4d0c8; border-color: currentColor; background: #111; }
        .type-badge {
          font-size: 0.6rem;
          padding: 2px 8px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          border-radius: 1px;
        }
        .priority-badge {
          font-size: 0.6rem;
          padding: 2px 8px;
          letter-spacing: 0.05em;
          border-radius: 1px;
        }
        .search-input {
          width: 100%;
          background: #0d0d0d;
          border: 1px solid #1a1a1a;
          border-radius: 2px;
          color: #d4d0c8;
          font-family: 'IBM Plex Mono', monospace;
          font-size: 0.8rem;
          padding: 12px 16px;
          outline: none;
          transition: border-color 0.2s;
        }
        .search-input::placeholder { color: #333; }
        .search-input:focus { border-color: #2a2a2a; }
        .url-link {
          color: #333;
          font-size: 0.68rem;
          letter-spacing: 0.05em;
          transition: color 0.15s;
          text-decoration: none;
        }
        .url-link:hover { color: #666; }
        .animate-in { animation: fade 0.3s ease forwards; }
        @keyframes fade { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
        .count-bubble {
          background: #1a1a1a;
          color: #444;
          font-size: 0.6rem;
          padding: 1px 6px;
          border-radius: 10px;
          min-width: 20px;
          text-align: center;
        }
      `}</style>

      {/* Header */}
      <div style={{
        padding: "48px 40px 32px",
        borderBottom: "1px solid #111",
        maxWidth: 960,
        margin: "0 auto",
      }}>
        <div style={{ fontSize: "0.6rem", letterSpacing: "0.3em", color: "#333", textTransform: "uppercase", marginBottom: 12 }}>
          Resource Library · Lasya's 2-Year Plan
        </div>
        <h1 style={{
          fontFamily: "'Fraunces', serif",
          fontSize: "clamp(2rem, 5vw, 3.8rem)",
          fontWeight: 600,
          lineHeight: 1.1,
          margin: 0,
          marginBottom: 8,
          color: "#e8e4dc",
        }}>
          Every resource you need.<br />
          <span style={{ fontStyle: "italic", fontWeight: 400, color: "#444" }}>Nothing you don't.</span>
        </h1>
        <p style={{ color: "#333", fontSize: "0.78rem", marginTop: 16, lineHeight: 1.7 }}>
          {categories.reduce((s, c) => s + c.resources.length, 0)} handpicked resources across {categories.length} domains. Sorted by what actually matters.
        </p>

        {/* Search */}
        <div style={{ marginTop: 24, position: "relative" }}>
          <input
            className="search-input"
            placeholder="Search resources..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", color: "#444", cursor: "pointer", fontSize: "1rem", fontFamily: "monospace" }}
            >×</button>
          )}
        </div>
      </div>

      <div style={{ maxWidth: 960, margin: "0 auto", display: "flex", gap: 0 }}>
        {/* Sidebar */}
        {!search && (
          <div style={{
            width: 220,
            flexShrink: 0,
            padding: "24px 20px",
            borderRight: "1px solid #111",
            position: "sticky",
            top: 0,
            height: "fit-content",
          }}>
            <div style={{ fontSize: "0.6rem", letterSpacing: "0.2em", color: "#2a2a2a", textTransform: "uppercase", marginBottom: 12 }}>Domains</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {categories.map(c => (
                <button
                  key={c.id}
                  className={`cat-btn ${active === c.id ? "active" : ""}`}
                  style={active === c.id ? { color: c.color, borderColor: c.color + "66", background: c.color + "0d" } : {}}
                  onClick={() => setActive(c.id)}
                >
                  <span style={{ fontSize: "0.85rem" }}>{c.icon}</span>
                  <span style={{ flex: 1, textAlign: "left" }}>{c.label}</span>
                  <span className="count-bubble">{c.resources.length}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Main content */}
        <div style={{ flex: 1, padding: "24px 32px" }}>
          {search ? (
            // Search results
            <div className="animate-in">
              <div style={{ fontSize: "0.7rem", color: "#333", marginBottom: 20 }}>
                {allResources.length} result{allResources.length !== 1 ? "s" : ""} for "{search}"
              </div>
              {allResources.length === 0 ? (
                <div style={{ color: "#2a2a2a", fontSize: "0.8rem", textAlign: "center", padding: "60px 0" }}>Nothing found. Try a different search.</div>
              ) : (
                allResources.map((r, i) => (
                  <ResourceCard key={i} r={r} showCat />
                ))
              )}
            </div>
          ) : activeCat ? (
            <div className="animate-in" key={active}>
              <div style={{ marginBottom: 24 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                  <span style={{ fontSize: "1.4rem" }}>{activeCat.icon}</span>
                  <h2 style={{
                    fontFamily: "'Fraunces', serif",
                    fontSize: "1.6rem",
                    color: activeCat.color,
                    margin: 0,
                    fontWeight: 600,
                  }}>{activeCat.label}</h2>
                </div>
                <div style={{ fontSize: "0.68rem", color: "#2a2a2a" }}>
                  {activeCat.resources.filter(r => r.priority === "🔥 Must").length} must-haves · {activeCat.resources.length} total
                </div>
              </div>

              {/* Must section first */}
              {["🔥 Must", "High", "Medium"].map(p => {
                const filtered = activeCat.resources.filter(r => r.priority === p);
                if (!filtered.length) return null;
                return (
                  <div key={p} style={{ marginBottom: 24 }}>
                    <div style={{
                      fontSize: "0.6rem",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: p === "🔥 Must" ? activeCat.color : p === "High" ? "#555" : "#2a2a2a",
                      marginBottom: 10,
                      paddingBottom: 6,
                      borderBottom: "1px solid #111",
                    }}>
                      {p === "🔥 Must" ? "🔥 Start with these" : p === "High" ? "→ Add these next" : "· Also useful"}
                    </div>
                    {filtered.map((r, i) => <ResourceCard key={i} r={r} catColor={activeCat.color} />)}
                  </div>
                );
              })}
            </div>
          ) : null}
        </div>
      </div>

      {/* Footer note */}
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "20px 40px 48px", borderTop: "1px solid #0f0f0f" }}>
        <p style={{ fontSize: "0.68rem", color: "#222", lineHeight: 1.8, fontStyle: "italic" }}>
          All resources marked free are genuinely free. Paid ones are noted with audit options where available.<br />
          One rule: don't collect resources. Use them. Build something. Ship it.
        </p>
      </div>
    </div>
  );
}

function ResourceCard({ r, catColor, showCat }) {
  const tc = typeColors[r.type] || "#666";
  const ps = priorityStyle[r.priority] || priorityStyle["Medium"];

  return (
    <div className="res-card">
      {/* Left accent */}
      <div style={{
        position: "absolute",
        left: 0, top: 0, bottom: 0,
        width: 2,
        background: r.priority === "🔥 Must" ? (catColor || r.catColor || "#e8473f") : "#1a1a1a",
      }} />

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10, flexWrap: "wrap", gap: 6 }}>
        <div style={{ display: "flex", gap: 6, alignItems: "center", flexWrap: "wrap" }}>
          <span className="type-badge" style={{ background: tc + "22", color: tc, border: `1px solid ${tc}44` }}>
            {r.type}
          </span>
          {showCat && r.catLabel && (
            <span className="type-badge" style={{ background: "#1a1a1a", color: "#444", border: "1px solid #222" }}>
              {r.catLabel}
            </span>
          )}
          <span className="priority-badge" style={{ background: ps.bg, color: ps.color, border: `1px solid ${ps.border}` }}>
            {r.priority}
          </span>
        </div>
        {r.free === false && r.freeNote && (
          <span style={{ fontSize: "0.62rem", color: "#444", fontStyle: "italic" }}>{r.freeNote}</span>
        )}
      </div>

      <div style={{ fontWeight: 500, fontSize: "0.9rem", color: "#c8c4bc", marginBottom: 6 }}>{r.name}</div>
      <div style={{ fontSize: "0.76rem", color: "#555", lineHeight: 1.75, marginBottom: 10 }}>{r.why}</div>
      <a
        href={`https://${r.url}`}
        target="_blank"
        rel="noopener noreferrer"
        className="url-link"
      >
        ↗ {r.url}
      </a>
    </div>
  );
}
