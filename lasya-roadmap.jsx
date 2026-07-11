import { useState } from "react";

const data = {
  year1: {
    label: "YEAR 1 — THE FOUNDATION",
    subtitle: "Code. Think. Build. Dominate.",
    color: "#e8473f",
    quarters: [
      {
        q: "Q1",
        title: "Core Programming Mastery",
        months: "May – Jul 2026",
        focus: "Python · C · HTML/CSS",
        skills: [
          "Python: OOP, file I/O, modules, virtual envs",
          "C: Pointers, memory, structs — think like a machine",
          "HTML/CSS: Flexbox, Grid, responsive layouts",
          "Git & GitHub — your public portfolio starts NOW",
        ],
        projects: [
          "Portfolio website (HTML/CSS) — your digital identity",
          "Python CLI tools (to-do manager, file organizer)",
          "Recreate Amazon/Flipkart UI from scratch in CSS",
        ],
        resources: [
          "CS50C (Harvard) for C fundamentals",
          "Python Crash Course (book)",
          "Kevin Powell (CSS YouTube)",
        ],
      },
      {
        q: "Q2",
        title: "DSA + Java Entry",
        months: "Aug – Oct 2026",
        focus: "DSA with Python & C · Java basics",
        skills: [
          "Arrays, Linked Lists, Stacks, Queues, Trees",
          "Sorting & Searching algorithms",
          "Java: OOP, Collections, Exception Handling",
          "Time & Space complexity — Big O thinking",
        ],
        projects: [
          "DSA visualizer web app (HTML/CSS/JS)",
          "Java mini banking system (OOP showcase)",
          "LeetCode: 50 easy problems solved & documented",
        ],
        resources: [
          "Striver's DSA Sheet (A2Z)",
          "Abdul Bari Algorithms (YouTube)",
          "Head First Java (book)",
        ],
      },
      {
        q: "Q3",
        title: "AI & ML Foundations",
        months: "Nov 2026 – Jan 2027",
        focus: "Math · ML · First Models",
        skills: [
          "Linear Algebra & Calculus for ML (3Blue1Brown)",
          "Probability & Statistics basics",
          "Supervised Learning: Regression, Classification",
          "Scikit-learn, Pandas, NumPy, Matplotlib",
        ],
        projects: [
          "House Price Predictor (regression)",
          "Spam Email Classifier (Naive Bayes)",
          "EDA + visualization on a real Kaggle dataset",
        ],
        resources: [
          "Stanford CS229 (Andrew Ng lectures)",
          "Hands-On ML with Scikit-Learn (book)",
          "Kaggle micro-courses (free)",
        ],
      },
      {
        q: "Q4",
        title: "Deep Learning + Tech Exposure",
        months: "Feb – Apr 2027",
        focus: "Neural Networks · First DL Projects · Emerging Tech intro",
        skills: [
          "Neural Nets from scratch (Karpathy's Zero to Hero)",
          "Intro to PyTorch",
          "Intro to Cybersecurity (CIA triad, OWASP Top 10)",
          "Intro to Quantum Computing concepts (IBM Qiskit)",
          "UI/UX basics: Figma, design systems, wireframing",
        ],
        projects: [
          "MNIST digit recognizer (PyTorch)",
          "Personal Figma portfolio UI kit",
          "Cybersecurity: basic CTF challenge (PicoCTF)",
        ],
        resources: [
          "Andrej Karpathy – Neural Nets Zero to Hero",
          "Google UX Design Certificate (Coursera)",
          "IBM Qiskit Textbook (free)",
          "TryHackMe (cybersecurity hands-on)",
        ],
      },
    ],
  },
  year2: {
    label: "YEAR 2 — THE EMPIRE",
    subtitle: "Lead. Build Products. Become Unforgettable.",
    color: "#7c3aed",
    quarters: [
      {
        q: "Q5",
        title: "Advanced AI/ML + LLMs",
        months: "May – Jul 2027",
        focus: "Deep Learning · NLP · LLM APIs",
        skills: [
          "CNNs, RNNs, Transformers architecture",
          "HuggingFace, OpenAI/Anthropic APIs",
          "Fine-tuning models on custom datasets",
          "Prompt engineering & RAG systems",
        ],
        projects: [
          "AI Study Assistant (RAG + your own notes)",
          "Sentiment analyzer for product reviews",
          "Custom chatbot for a niche domain (your choice)",
        ],
        resources: [
          "fast.ai Practical Deep Learning",
          "DeepLearning.AI Specialization (Coursera)",
          "Attention Is All You Need paper + implementation",
        ],
      },
      {
        q: "Q6",
        title: "Quantum + Cybersecurity + VR/AR",
        months: "Aug – Oct 2027",
        focus: "Specialized Tech Depth",
        skills: [
          "Quantum gates, circuits, Grover's & Shor's algorithms",
          "Network security, ethical hacking basics, VAPT",
          "AR/VR: Unity basics + WebXR",
          "Cybersecurity: Python scripting for automation",
        ],
        projects: [
          "Quantum algorithm demo with Qiskit",
          "AR product viewer (WebXR or Unity)",
          "Security audit script for web vulnerabilities",
        ],
        resources: [
          "IBM Quantum Learning (free)",
          "CompTIA Security+ prep material",
          "Unity Learn (free AR/VR path)",
        ],
      },
      {
        q: "Q7",
        title: "Business + Marketing + Leadership",
        months: "Nov 2027 – Jan 2028",
        focus: "CEO Mindset · Strategy · GTM",
        skills: [
          "Digital marketing: SEO, SEM, Social Media strategy",
          "Product management: roadmaps, PRDs, metrics",
          "Growth hacking & startup GTM strategy",
          "Financial basics: P&L, unit economics, fundraising",
          "Negotiation, public speaking, storytelling",
        ],
        projects: [
          "Launch a micro-SaaS or productized service",
          "Write a GTM strategy doc for one of your projects",
          "Build a personal brand (LinkedIn + blog/newsletter)",
        ],
        resources: [
          "Zero to One (book) — Peter Thiel",
          "HubSpot Marketing Certificate (free)",
          "Lenny's Newsletter (product & growth)",
          "The Lean Startup (book)",
        ],
      },
      {
        q: "Q8",
        title: "CAPSTONE — Stand Out Portfolio",
        months: "Feb – Apr 2028",
        focus: "Flagship Projects · Interviews · CEO Foundation",
        skills: [
          "System design fundamentals",
          "Full-stack ML product deployment",
          "Technical interview prep (DSA + behavioral)",
          "Building in public, networking, pitching",
        ],
        projects: [
          "🏆 AI-powered SaaS product (end-to-end, deployed)",
          "🏆 Quantum + ML hybrid research mini-paper",
          "🏆 AR/VR experience (interactive demo)",
          "🏆 Open source contribution to a major ML repo",
        ],
        resources: [
          "System Design Interview (book) — Alex Xu",
          "Grokking the Coding Interview (Educative)",
          "Y Combinator Startup School (free)",
        ],
      },
    ],
  },
};

const standoutProjects = [
  {
    icon: "🤖",
    title: "AI Study OS",
    desc: "A RAG-powered personal learning assistant trained on your own notes, syllabus, and textbooks. Built with LangChain + Next.js.",
    impact: "Shows LLM engineering + full-stack skills",
    tag: "AI/ML + Full-Stack",
  },
  {
    icon: "🔐",
    title: "SecureVault",
    desc: "A Python-based web security scanner that detects OWASP Top 10 vulnerabilities in any URL. Deployed as a web tool.",
    impact: "Rare combo: security + engineering",
    tag: "Cybersecurity",
  },
  {
    icon: "⚛️",
    title: "Quantum ML Hybrid",
    desc: "Implement a hybrid quantum-classical classifier using Qiskit + PyTorch. Document the results and publish a write-up.",
    impact: "Almost no one at undergrad level does this",
    tag: "Quantum + ML",
  },
  {
    icon: "🥽",
    title: "AR Commerce App",
    desc: "Try-before-you-buy AR product visualizer for e-commerce using WebXR. Pair it with a marketing case study.",
    impact: "Ties tech to business use-case — CEO thinking",
    tag: "AR/VR + Business",
  },
  {
    icon: "📊",
    title: "Growth Analytics Dashboard",
    desc: "Full-stack dashboard for a real small business with ML-powered sales forecasting. Real client = real impact.",
    impact: "Real-world business value + ML + UI/UX",
    tag: "Business + ML + UX",
  },
  {
    icon: "🎮",
    title: "AI-Powered Game",
    desc: "A browser game with a dynamic AI NPC that learns from player behavior using a simple RL loop.",
    impact: "Shows creativity + RL + game dev",
    tag: "Game Dev + AI (Optional)",
  },
];

export default function Roadmap() {
  const [activeYear, setActiveYear] = useState("year1");
  const [expandedQ, setExpandedQ] = useState(null);

  const year = data[activeYear];

  return (
    <div style={{
      fontFamily: "'DM Mono', 'Courier New', monospace",
      background: "#0a0a0a",
      color: "#f0ece0",
      minHeight: "100vh",
      padding: "0",
      margin: "0",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&family=Playfair+Display:ital,wght@0,700;1,400&display=swap');
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #111; }
        ::-webkit-scrollbar-thumb { background: #e8473f; border-radius: 2px; }

        .hero-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.5rem, 6vw, 5rem);
          font-weight: 700;
          line-height: 1.05;
          letter-spacing: -0.02em;
        }
        .tab-btn {
          cursor: pointer;
          border: none;
          padding: 12px 28px;
          font-family: 'DM Mono', monospace;
          font-size: 0.75rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          transition: all 0.25s;
          font-weight: 500;
        }
        .tab-btn.active-y1 { background: #e8473f; color: #fff; }
        .tab-btn.active-y2 { background: #7c3aed; color: #fff; }
        .tab-btn.inactive { background: transparent; color: #666; border: 1px solid #222; }
        .tab-btn:hover { opacity: 0.85; }

        .q-card {
          border: 1px solid #1e1e1e;
          border-radius: 2px;
          margin-bottom: 12px;
          overflow: hidden;
          transition: border-color 0.2s;
        }
        .q-card:hover { border-color: #333; }
        .q-header {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 20px 24px;
          cursor: pointer;
          user-select: none;
          background: #0f0f0f;
        }
        .q-header:hover { background: #141414; }
        .q-badge {
          font-size: 0.65rem;
          letter-spacing: 0.15em;
          padding: 4px 10px;
          font-weight: 500;
        }
        .q-body {
          padding: 0 24px 24px;
          background: #0d0d0d;
          border-top: 1px solid #1a1a1a;
        }
        .tag-pill {
          display: inline-block;
          font-size: 0.65rem;
          letter-spacing: 0.1em;
          padding: 3px 10px;
          border-radius: 20px;
          margin: 2px;
          text-transform: uppercase;
        }
        .project-card {
          background: #111;
          border: 1px solid #1e1e1e;
          border-radius: 2px;
          padding: 20px;
          margin-bottom: 12px;
          transition: all 0.2s;
          position: relative;
          overflow: hidden;
        }
        .project-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 3px; height: 100%;
        }
        .project-card:hover { border-color: #2a2a2a; transform: translateX(2px); }
        .section-label {
          font-size: 0.65rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #444;
          margin: 20px 0 10px;
        }
        .list-item {
          font-size: 0.8rem;
          line-height: 1.8;
          color: #aaa;
          display: flex;
          gap: 10px;
          align-items: flex-start;
        }
        .list-item::before { content: '—'; color: #333; flex-shrink: 0; margin-top: 1px; }
        .animate-in {
          animation: fadeUp 0.4s ease forwards;
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .ceo-banner {
          background: linear-gradient(135deg, #1a0a2e 0%, #0f1a10 50%, #1a0808 100%);
          border: 1px solid #2a1a4a;
          border-radius: 2px;
          padding: 40px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .ceo-banner::before {
          content: 'CEO';
          position: absolute;
          font-family: 'Playfair Display', serif;
          font-size: 12rem;
          color: rgba(255,255,255,0.02);
          font-weight: 700;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          white-space: nowrap;
          pointer-events: none;
        }
      `}</style>

      {/* Hero */}
      <div style={{
        padding: "60px 40px 40px",
        borderBottom: "1px solid #1a1a1a",
        maxWidth: 900,
        margin: "0 auto",
      }}>
        <div style={{ fontSize: "0.65rem", letterSpacing: "0.25em", color: "#e8473f", marginBottom: 16, textTransform: "uppercase" }}>
          ◈ 2-Year Mastery Roadmap · Lasya
        </div>
        <h1 className="hero-title">
          From Student<br />
          <span style={{ fontStyle: "italic", color: "#e8473f" }}>to CEO.</span>
        </h1>
        <p style={{ color: "#555", fontSize: "0.85rem", marginTop: 20, lineHeight: 1.7, maxWidth: 520 }}>
          AI · ML · Quantum · Cybersecurity · AR/VR · UI/UX · Business Strategy.<br />
          Two years. One relentless builder. No shortcuts.
        </p>

        {/* Stats bar */}
        <div style={{ display: "flex", gap: 40, marginTop: 36, paddingTop: 28, borderTop: "1px solid #1a1a1a", flexWrap: "wrap" }}>
          {[
            ["8", "Quarters"],
            ["6+", "Domains"],
            ["20+", "Projects"],
            ["∞", "Impact"],
          ].map(([num, label]) => (
            <div key={label}>
              <div style={{ fontSize: "1.8rem", fontFamily: "'Playfair Display', serif", color: "#f0ece0" }}>{num}</div>
              <div style={{ fontSize: "0.65rem", letterSpacing: "0.15em", color: "#444", textTransform: "uppercase" }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Year tabs */}
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "32px 40px 0" }}>
        <div style={{ display: "flex", gap: 8, marginBottom: 32 }}>
          <button
            className={`tab-btn ${activeYear === "year1" ? "active-y1" : "inactive"}`}
            onClick={() => { setActiveYear("year1"); setExpandedQ(null); }}
          >
            Year 1 — Foundation
          </button>
          <button
            className={`tab-btn ${activeYear === "year2" ? "active-y2" : "inactive"}`}
            onClick={() => { setActiveYear("year2"); setExpandedQ(null); }}
          >
            Year 2 — Empire
          </button>
        </div>

        {/* Year header */}
        <div style={{ marginBottom: 28 }} key={activeYear} className="animate-in">
          <div style={{
            fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase",
            color: year.color, marginBottom: 6
          }}>
            {year.label}
          </div>
          <div style={{ color: "#555", fontSize: "0.85rem", fontStyle: "italic" }}>{year.subtitle}</div>
        </div>

        {/* Quarters */}
        {year.quarters.map((q, i) => (
          <div className="q-card" key={q.q}>
            <div
              className="q-header"
              onClick={() => setExpandedQ(expandedQ === i ? null : i)}
            >
              <span className="q-badge" style={{ background: year.color + "22", color: year.color, border: `1px solid ${year.color}44` }}>
                {q.q}
              </span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: "0.95rem", fontWeight: 500, color: "#e0ddd5" }}>{q.title}</div>
                <div style={{ fontSize: "0.7rem", color: "#444", marginTop: 2 }}>{q.months} · {q.focus}</div>
              </div>
              <span style={{ color: "#333", fontSize: "1.2rem" }}>{expandedQ === i ? "−" : "+"}</span>
            </div>

            {expandedQ === i && (
              <div className="q-body animate-in">
                <div className="section-label">Skills to Build</div>
                {q.skills.map(s => (
                  <div className="list-item" key={s}><span>{s}</span></div>
                ))}

                <div className="section-label">Projects</div>
                {q.projects.map(p => (
                  <div className="list-item" key={p} style={{ color: "#c8c4b8" }}>
                    <span>{p}</span>
                  </div>
                ))}

                <div className="section-label">Resources</div>
                {q.resources.map(r => (
                  <div className="list-item" key={r}><span>{r}</span></div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Standout Projects */}
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "48px 40px 20px" }}>
        <div style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#e8473f", marginBottom: 8 }}>
          ◈ Interview Killers
        </div>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", marginBottom: 28, color: "#f0ece0" }}>
          Projects That Make You<br />
          <span style={{ fontStyle: "italic", color: "#7c3aed" }}>Impossible to Ignore</span>
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 12 }}>
          {standoutProjects.map(p => (
            <div
              className="project-card"
              key={p.title}
              style={{ borderLeftColor: p.tag.includes("AI") ? "#e8473f" : p.tag.includes("Quantum") ? "#7c3aed" : p.tag.includes("Cyber") ? "#22c55e" : p.tag.includes("AR") ? "#f59e0b" : p.tag.includes("Game") ? "#06b6d4" : "#888" }}
            >
              <style>{`.project-card:nth-child(${standoutProjects.indexOf(p)+1})::before { background: ${p.tag.includes("AI") ? "#e8473f" : p.tag.includes("Quantum") ? "#7c3aed" : p.tag.includes("Cyber") ? "#22c55e" : p.tag.includes("AR") ? "#f59e0b" : p.tag.includes("Game") ? "#06b6d4" : "#888"}; }`}</style>
              <div style={{ fontSize: "1.5rem", marginBottom: 10 }}>{p.icon}</div>
              <div style={{ fontWeight: 500, fontSize: "0.9rem", color: "#e0ddd5", marginBottom: 8 }}>{p.title}</div>
              <div style={{ fontSize: "0.78rem", color: "#666", lineHeight: 1.7, marginBottom: 12 }}>{p.desc}</div>
              <div style={{ fontSize: "0.7rem", color: "#7c3aed", fontStyle: "italic", marginBottom: 10 }}>→ {p.impact}</div>
              <span className="tag-pill" style={{ background: "#1a1a1a", color: "#555", border: "1px solid #222" }}>{p.tag}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CEO Banner */}
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "20px 40px 60px" }}>
        <div className="ceo-banner">
          <div style={{ fontSize: "0.65rem", letterSpacing: "0.25em", color: "#7c3aed", textTransform: "uppercase", marginBottom: 12 }}>
            The end game
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 4vw, 3rem)", lineHeight: 1.2, marginBottom: 16 }}>
            Independent. Powerful.<br />
            <span style={{ fontStyle: "italic", color: "#e8473f" }}>The CEO in the room.</span>
          </h2>
          <p style={{ color: "#555", fontSize: "0.82rem", maxWidth: 480, margin: "0 auto", lineHeight: 1.8 }}>
            By the end of 2 years you'll have shipped real products, understood technology at depth, spoken the language of business, and built the kind of track record that makes companies <em style={{ color: "#888" }}>compete for you</em> — not the other way around.
          </p>
          <div style={{ marginTop: 32, display: "flex", gap: 20, justifyContent: "center", flexWrap: "wrap" }}>
            {["Build in public", "Ship real products", "Own your narrative", "Never stop learning"].map(m => (
              <span key={m} style={{ fontSize: "0.7rem", letterSpacing: "0.1em", color: "#333", textTransform: "uppercase" }}>
                · {m}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
