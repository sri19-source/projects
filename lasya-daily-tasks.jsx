import { useState, useEffect } from "react";

// ─── DATA ───────────────────────────────────────────────────────────────────

const DAILY_ROUTINE = [
  { time: "6:00–6:30 AM", task: "Wake up + review today's tasks", icon: "☀" },
  { time: "6:30–8:00 AM", task: "Deep learning block (theory / videos)", icon: "📖" },
  { time: "8:00–9:00 AM", task: "College / Morning prep", icon: "🎒" },
  { time: "4:00–6:00 PM", task: "Coding / Project work block", icon: "⌨" },
  { time: "6:00–6:30 PM", task: "LeetCode / DSA (1 problem)", icon: "🧩" },
  { time: "6:30–7:00 PM", task: "Reading (tech blog / book / paper)", icon: "📰" },
  { time: "9:00–9:30 PM", task: "GitHub commit + LinkedIn post (3x/week)", icon: "🚀" },
  { time: "9:30–10:00 PM", task: "Review + plan tomorrow", icon: "📋" },
];

const WEEKS = [
  // ── Q1: Python · C · HTML/CSS ──────────────────────────────────────────
  {
    week: 1, quarter: "Q1", phase: "Python · C · HTML/CSS",
    title: "Setup & Python Basics",
    color: "#f59e0b",
    days: [
      { day: "Mon", tasks: ["Install Python, VS Code, Git", "Create GitHub account + first repo", "Python: variables, data types, print"], resources: ["Corey Schafer – Python Basics Playlist"] },
      { day: "Tue", tasks: ["Python: if/else, loops, functions", "Write a number guessing game in Python"], resources: ["Corey Schafer YT"] },
      { day: "Wed", tasks: ["Python: lists, tuples, dictionaries", "Build a contact book (dict-based)"], resources: ["Python Docs – Data Structures"] },
      { day: "Thu", tasks: ["Python: file I/O, reading/writing files", "Build a to-do list that saves to a .txt file"], resources: ["Corey Schafer – File Objects"] },
      { day: "Fri", tasks: ["Python: OOP basics (classes, methods)", "Create a simple Bank Account class"], resources: ["Corey Schafer – OOP Series"] },
      { day: "Sat", tasks: ["C: Install GCC, write Hello World", "C: variables, printf, scanf, basic I/O"], resources: ["CS50 Week 1 (Harvard)"] },
      { day: "Sun", tasks: ["Review week 1 code", "Push everything to GitHub", "Write a short LinkedIn post: 'Day 7 of my coding journey'"], resources: [] },
    ]
  },
  {
    week: 2, quarter: "Q1", phase: "Python · C · HTML/CSS",
    title: "Python Intermediate + C Fundamentals",
    color: "#f59e0b",
    days: [
      { day: "Mon", tasks: ["Python: modules, pip, virtual environments", "C: if/else, loops, for/while"], resources: ["Corey Schafer – venv"] },
      { day: "Tue", tasks: ["Python: error handling (try/except)", "C: functions, return types, parameters"], resources: [] },
      { day: "Wed", tasks: ["Python: list comprehensions, lambda, map/filter", "C: arrays, string manipulation"], resources: [] },
      { day: "Thu", tasks: ["C: pointers — the most important concept in C", "Draw memory diagrams by hand"], resources: ["CS50 – Pointers lecture"] },
      { day: "Fri", tasks: ["Python project: Password Generator tool", "Push to GitHub with a README"], resources: [] },
      { day: "Sat", tasks: ["HTML: structure, tags, semantic HTML5", "Build a basic personal webpage"], resources: ["MDN – HTML Basics"] },
      { day: "Sun", tasks: ["CSS: selectors, box model, colors, fonts", "Style your personal webpage"], resources: ["Kevin Powell – Box Model"] },
    ]
  },
  {
    week: 3, quarter: "Q1", phase: "Python · C · HTML/CSS",
    title: "CSS Depth + C Pointers",
    color: "#f59e0b",
    days: [
      { day: "Mon", tasks: ["CSS: Flexbox — full deep dive", "Rebuild a navbar using Flexbox"], resources: ["Kevin Powell – Flexbox"] },
      { day: "Tue", tasks: ["CSS: Grid layout", "Build a photo gallery using Grid"], resources: ["Kevin Powell – Grid"] },
      { day: "Wed", tasks: ["C: structs, typedef", "C: dynamic memory (malloc, free)"], resources: ["CS50 – Memory lecture"] },
      { day: "Thu", tasks: ["CSS: responsive design, media queries", "Make your webpage mobile-friendly"], resources: [] },
      { day: "Fri", tasks: ["Python: Build a web scraper (BeautifulSoup)", "Scrape a news site, save headlines to CSV"], resources: ["Tech With Tim – Web Scraping"] },
      { day: "Sat", tasks: ["Frontend Mentor: pick 1 Newbie challenge", "Complete the challenge in HTML/CSS"], resources: ["frontendmentor.io"] },
      { day: "Sun", tasks: ["GitHub: clean up repos, write good READMEs", "LinkedIn: post your Frontend Mentor project"], resources: [] },
    ]
  },
  {
    week: 4, quarter: "Q1", phase: "Python · C · HTML/CSS",
    title: "Portfolio Website Project",
    color: "#f59e0b",
    days: [
      { day: "Mon", tasks: ["Plan your portfolio website: sections, content, layout", "Sketch wireframe on paper or Figma"], resources: [] },
      { day: "Tue", tasks: ["Build portfolio: Hero section + About"], resources: [] },
      { day: "Wed", tasks: ["Build portfolio: Projects section + Skills"], resources: [] },
      { day: "Thu", tasks: ["Build portfolio: Contact form + footer", "Make it fully responsive"], resources: [] },
      { day: "Fri", tasks: ["Polish portfolio: animations, hover effects, fonts", "Deploy on GitHub Pages (free hosting)"], resources: ["GitHub Pages docs"] },
      { day: "Sat", tasks: ["C mini-project: Simple calculator using functions + structs"], resources: [] },
      { day: "Sun", tasks: ["Week review: what was hard? Write it down", "Share portfolio link on LinkedIn"], resources: [] },
    ]
  },
  // ── Q2: DSA + Java ────────────────────────────────────────────────────
  {
    week: 5, quarter: "Q2", phase: "DSA + Java",
    title: "Arrays & Complexity + Java Entry",
    color: "#06b6d4",
    days: [
      { day: "Mon", tasks: ["DSA: Big O notation — time & space complexity", "Watch Abdul Bari: Complexity Analysis"], resources: ["Abdul Bari YT – Complexity"] },
      { day: "Tue", tasks: ["DSA: Arrays — traversal, insertion, deletion", "LeetCode: Two Sum (Easy)"], resources: ["Striver A2Z – Arrays"] },
      { day: "Wed", tasks: ["DSA: Prefix sums, sliding window intro", "LeetCode: Best Time to Buy/Sell Stock"], resources: [] },
      { day: "Thu", tasks: ["Java: Install JDK, Hello World, data types", "Java: OOP — classes, objects, constructors"], resources: ["Head First Java – Ch1-2"] },
      { day: "Fri", tasks: ["Java: Inheritance, polymorphism, interfaces", "Build a simple Shape hierarchy in Java"], resources: [] },
      { day: "Sat", tasks: ["DSA: Strings — reverse, palindrome, anagram", "LeetCode: Valid Palindrome (Easy)"], resources: [] },
      { day: "Sun", tasks: ["LeetCode: 2 easy problems of choice", "Push Java code to GitHub"], resources: [] },
    ]
  },
  {
    week: 6, quarter: "Q2", phase: "DSA + Java",
    title: "Linked Lists + Java Collections",
    color: "#06b6d4",
    days: [
      { day: "Mon", tasks: ["DSA: Linked List — singly linked list, insert/delete", "Implement from scratch in Python"], resources: ["Abdul Bari – Linked Lists"] },
      { day: "Tue", tasks: ["DSA: Doubly linked list, circular linked list", "LeetCode: Reverse Linked List (Easy)"], resources: [] },
      { day: "Wed", tasks: ["Java: ArrayList, LinkedList, HashMap, HashSet", "Java: Exception handling (try/catch/finally)"], resources: [] },
      { day: "Thu", tasks: ["DSA: Stacks — implementation, use cases", "LeetCode: Valid Parentheses (Easy)"], resources: [] },
      { day: "Fri", tasks: ["DSA: Queues — circular queue, deque", "LeetCode: Implement Queue using Stacks"], resources: [] },
      { day: "Sat", tasks: ["Java mini-project: Banking System (OOP)", "Classes: Account, SavingsAccount, Transaction"], resources: [] },
      { day: "Sun", tasks: ["Review DSA notes", "GitHub commit + update LinkedIn with progress"], resources: [] },
    ]
  },
  {
    week: 7, quarter: "Q2", phase: "DSA + Java",
    title: "Trees + Recursion",
    color: "#06b6d4",
    days: [
      { day: "Mon", tasks: ["DSA: Recursion — base case, call stack", "Implement factorial, fibonacci recursively"], resources: ["Abdul Bari – Recursion"] },
      { day: "Tue", tasks: ["DSA: Binary Tree — insert, traverse (in/pre/post order)", "LeetCode: Invert Binary Tree (Easy)"], resources: [] },
      { day: "Wed", tasks: ["DSA: Binary Search Tree — search, insert, delete", "LeetCode: Validate BST (Medium)"], resources: [] },
      { day: "Thu", tasks: ["DSA: Binary Search on arrays", "LeetCode: Binary Search (Easy) + Search Insert Position"], resources: [] },
      { day: "Fri", tasks: ["DSA: Sorting — Bubble, Selection, Insertion", "Visualize sorting with print statements"], resources: [] },
      { day: "Sat", tasks: ["Build a DSA Visualizer web page (HTML/CSS/JS)", "Animate array sorting with JS"], resources: [] },
      { day: "Sun", tasks: ["LeetCode: 3 problems (mix of easy/medium)", "Week review + GitHub push"], resources: [] },
    ]
  },
  {
    week: 8, quarter: "Q2", phase: "DSA + Java",
    title: "Advanced Sorting + Hashing",
    color: "#06b6d4",
    days: [
      { day: "Mon", tasks: ["DSA: Merge Sort — divide and conquer", "Implement in Python, trace through example"], resources: [] },
      { day: "Tue", tasks: ["DSA: Quick Sort", "Compare performance: bubble vs merge vs quick"], resources: [] },
      { day: "Wed", tasks: ["DSA: Hashing — hash tables, collision handling", "LeetCode: Two Sum (revisit, use hashmap now)"], resources: [] },
      { day: "Thu", tasks: ["DSA: Graphs intro — representation (adjacency list/matrix)", "BFS and DFS conceptually"], resources: ["Abdul Bari – Graph Theory"] },
      { day: "Fri", tasks: ["Implement BFS in Python on a sample graph", "LeetCode: Number of Islands (Medium)"], resources: [] },
      { day: "Sat", tasks: ["Java Banking System: finish + test all features", "Write unit tests with JUnit basics"], resources: [] },
      { day: "Sun", tasks: ["LeetCode milestone: count total problems solved", "LinkedIn post: 'Month 2 progress update'"], resources: [] },
    ]
  },
  // ── Q3: ML Foundations ────────────────────────────────────────────────
  {
    week: 9, quarter: "Q3", phase: "AI & ML Foundations",
    title: "Math for ML",
    color: "#e8473f",
    days: [
      { day: "Mon", tasks: ["Linear Algebra: vectors, matrices, dot product", "Watch 3Blue1Brown – Essence of Linear Algebra (Ch1-3)"], resources: ["3Blue1Brown YT"] },
      { day: "Tue", tasks: ["Linear Algebra: matrix multiplication, transpose, inverse", "3Blue1Brown Ch4-6"], resources: [] },
      { day: "Wed", tasks: ["Calculus: derivatives, chain rule (for backprop)", "3Blue1Brown – Essence of Calculus (Ch1-4)"], resources: [] },
      { day: "Thu", tasks: ["Stats: mean, variance, std deviation, normal distribution", "Probability: Bayes theorem"], resources: ["StatQuest YT – Probability"] },
      { day: "Fri", tasks: ["Install: numpy, pandas, matplotlib, scikit-learn", "NumPy: arrays, operations, broadcasting"], resources: ["Kaggle – NumPy micro-course"] },
      { day: "Sat", tasks: ["Pandas: DataFrames, read CSV, groupby, filtering", "Load the Titanic dataset, explore it"], resources: ["Kaggle – Pandas micro-course"] },
      { day: "Sun", tasks: ["Matplotlib: line plots, bar charts, scatter plots", "Visualize Titanic survival data"], resources: [] },
    ]
  },
  {
    week: 10, quarter: "Q3", phase: "AI & ML Foundations",
    title: "Supervised Learning",
    color: "#e8473f",
    days: [
      { day: "Mon", tasks: ["ML: What is ML? Types (supervised/unsupervised/RL)", "CS229 Lecture 1 — Andrew Ng"], resources: ["Stanford CS229 YT"] },
      { day: "Tue", tasks: ["Linear Regression: concept, cost function, gradient descent", "Implement from scratch in NumPy"], resources: [] },
      { day: "Wed", tasks: ["Logistic Regression: sigmoid, binary classification", "Scikit-learn: fit/predict/score API"], resources: [] },
      { day: "Thu", tasks: ["Model evaluation: train/test split, accuracy, precision, recall, F1", "Practice on Titanic dataset"], resources: ["Kaggle – Intro to ML"] },
      { day: "Fri", tasks: ["Decision Trees + Random Forests: concept + sklearn", "Kaggle: Titanic competition (submit first entry)"], resources: [] },
      { day: "Sat", tasks: ["Project START: House Price Predictor", "EDA: explore the dataset, visualize correlations"], resources: ["Kaggle – Housing dataset"] },
      { day: "Sun", tasks: ["House Price: feature engineering, model training", "Push notebook to GitHub"], resources: [] },
    ]
  },
  {
    week: 11, quarter: "Q3", phase: "AI & ML Foundations",
    title: "First ML Projects",
    color: "#e8473f",
    days: [
      { day: "Mon", tasks: ["House Price Predictor: tune model, evaluate RMSE", "Write README documenting your approach"], resources: [] },
      { day: "Tue", tasks: ["Spam Classifier: load email dataset (UCI/Kaggle)", "Preprocess text: tokenize, remove stopwords"], resources: [] },
      { day: "Wed", tasks: ["Spam Classifier: TF-IDF + Naive Bayes model", "Evaluate with confusion matrix"], resources: [] },
      { day: "Thu", tasks: ["Unsupervised: K-Means clustering concept", "Cluster the Iris dataset, visualize clusters"], resources: [] },
      { day: "Fri", tasks: ["Finish Spam Classifier — deploy on GitHub", "Write a short blog post / LinkedIn post explaining the project"], resources: [] },
      { day: "Sat", tasks: ["Kaggle: join a beginner competition", "Submit at least one prediction"], resources: [] },
      { day: "Sun", tasks: ["Review ML fundamentals notes", "DSA: LeetCode — 2 medium problems"], resources: [] },
    ]
  },
  {
    week: 12, quarter: "Q3", phase: "AI & ML Foundations",
    title: "ML Consolidation + Intro to DL",
    color: "#e8473f",
    days: [
      { day: "Mon", tasks: ["Neural Nets: perceptron, activation functions (ReLU, sigmoid)", "Watch 3Blue1Brown – Neural Networks series"], resources: ["3Blue1Brown – Neural Nets"] },
      { day: "Tue", tasks: ["Neural Nets: forward propagation, loss functions", "Karpathy: micrograd walkthrough (video)"], resources: ["Andrej Karpathy YT – micrograd"] },
      { day: "Wed", tasks: ["Neural Nets: backpropagation — understand it deeply", "Implement a 2-layer net in NumPy from scratch"], resources: [] },
      { day: "Thu", tasks: ["PyTorch: tensors, autograd basics", "Reimplement your NumPy net in PyTorch"], resources: ["PyTorch official tutorials"] },
      { day: "Fri", tasks: ["PyTorch: training loop, optimizer, loss", "Train on a simple dataset (XOR or MNIST)"], resources: [] },
      { day: "Sat", tasks: ["Q3 review: list all projects built, all concepts learned", "Update GitHub README files"], resources: [] },
      { day: "Sun", tasks: ["LinkedIn: post a Q3 summary — what you built + learned", "Rest and reflect"], resources: [] },
    ]
  },
  // ── Q4: DL + Emerging Tech ────────────────────────────────────────────
  {
    week: 13, quarter: "Q4", phase: "Deep Learning + Tech Exposure",
    title: "Deep Learning + MNIST",
    color: "#8b5cf6",
    days: [
      { day: "Mon", tasks: ["CNN: convolution, pooling, feature maps", "Watch Karpathy or fast.ai CNN lecture"], resources: ["fast.ai – Lesson 1"] },
      { day: "Tue", tasks: ["Build MNIST digit classifier in PyTorch", "Track accuracy, visualize predictions"], resources: [] },
      { day: "Wed", tasks: ["CNN: add convolutional layers, compare accuracy", "Experiment with hyperparameters"], resources: [] },
      { day: "Thu", tasks: ["Figma: install, explore UI, learn basic tools", "Watch Mizko – Figma beginner tutorial"], resources: ["Mizko YT"] },
      { day: "Fri", tasks: ["Figma: design a simple mobile app screen (your choice)", "Learn: frames, auto layout, components"], resources: [] },
      { day: "Sat", tasks: ["Cybersecurity: CIA triad, threat models, OWASP Top 10", "TryHackMe: complete 'Pre-Security' path (start)"], resources: ["TryHackMe – Pre-Security"] },
      { day: "Sun", tasks: ["MNIST project: finalize, write README, push to GitHub"], resources: [] },
    ]
  },
  {
    week: 14, quarter: "Q4", phase: "Deep Learning + Tech Exposure",
    title: "UI/UX + Cybersecurity + Quantum Intro",
    color: "#8b5cf6",
    days: [
      { day: "Mon", tasks: ["Google UX Design Certificate: start Week 1", "Learn: UX research, empathy maps, user personas"], resources: ["Coursera – Google UX Cert"] },
      { day: "Tue", tasks: ["Figma: design a portfolio UI kit (your personal design system)", "Colors, typography, button styles"], resources: [] },
      { day: "Wed", tasks: ["Quantum: what is a qubit? Superposition, entanglement", "IBM Quantum Learning: Chapter 1"], resources: ["IBM Quantum Learning"] },
      { day: "Thu", tasks: ["Quantum: quantum gates (X, H, CNOT) in Qiskit", "Run first quantum circuit on IBM simulator"], resources: ["Qiskit Textbook – Ch1"] },
      { day: "Fri", tasks: ["TryHackMe: Linux fundamentals room (Part 1 + 2)", "Learn basic terminal commands for security"], resources: [] },
      { day: "Sat", tasks: ["Cybersecurity: PicoCTF — solve 3 beginner challenges", "Document your solutions"], resources: ["picoctf.org"] },
      { day: "Sun", tasks: ["GitHub: all new projects pushed + documented", "Week review notes in Notion"], resources: [] },
    ]
  },
  {
    week: 15, quarter: "Q4", phase: "Deep Learning + Tech Exposure",
    title: "Full Integration Week",
    color: "#8b5cf6",
    days: [
      { day: "Mon", tasks: ["DSA: Dynamic Programming intro (memoization)", "LeetCode: Climbing Stairs (Easy DP)"], resources: [] },
      { day: "Tue", tasks: ["DP: Fibonacci DP, 0/1 Knapsack", "LeetCode: House Robber (Medium)"], resources: [] },
      { day: "Wed", tasks: ["Karpathy: watch 'makemore' Part 1 (bigram language model)", "Understand character-level language models"], resources: ["Karpathy YT – makemore"] },
      { day: "Thu", tasks: ["Build a tiny bigram model on your own text dataset", "Use your name or song lyrics as training data"], resources: [] },
      { day: "Fri", tasks: ["Figma: design a complete app (3 screens) — health tracker or study planner"], resources: [] },
      { day: "Sat", tasks: ["TryHackMe: complete 'Network Fundamentals' room"], resources: [] },
      { day: "Sun", tasks: ["Rest + review Q4 progress", "What's your strongest area? Write it down"], resources: [] },
    ]
  },
  {
    week: 16, quarter: "Q4", phase: "Deep Learning + Tech Exposure",
    title: "Year 1 Capstone Week",
    color: "#8b5cf6",
    days: [
      { day: "Mon", tasks: ["Pick your best 3 projects from the year", "Write detailed READMEs: problem, approach, results, demo GIF"], resources: [] },
      { day: "Tue", tasks: ["Polish portfolio website: add all Year 1 projects", "Update skills section"], resources: [] },
      { day: "Wed", tasks: ["LinkedIn: write a full Year 1 recap post", "What you built, what you learned, what's next"], resources: [] },
      { day: "Thu", tasks: ["LeetCode: solve 5 problems (mix easy + medium)", "Identify weak DSA topics"], resources: [] },
      { day: "Fri", tasks: ["Open source: find a beginner-friendly issue on GitHub", "Explore HuggingFace, PyTorch, or Qiskit repos"], resources: ["github.com/explore – good first issue"] },
      { day: "Sat", tasks: ["Plan Year 2: review Q5-Q8 roadmap", "Write your specific goals for the next 12 months"], resources: [] },
      { day: "Sun", tasks: ["Rest. You completed Year 1. That's massive.", "Celebrate — then plan the next move."], resources: [] },
    ]
  },
];

const QUARTER_META = {
  "Q1": { label: "Core Programming", color: "#f59e0b" },
  "Q2": { label: "DSA + Java", color: "#06b6d4" },
  "Q3": { label: "AI & ML", color: "#e8473f" },
  "Q4": { label: "Deep Learning + Tech", color: "#8b5cf6" },
};

// ─── STORAGE KEY ────────────────────────────────────────────────────────────
const STORAGE_KEY = "lasya-tasks-v1";

export default function DailyTasks() {
  const [completed, setCompleted] = useState({});
  const [activeWeek, setActiveWeek] = useState(1);
  const [activeDay, setActiveDay] = useState(0);
  const [view, setView] = useState("week"); // "week" | "routine" | "progress"
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const r = await window.storage.get(STORAGE_KEY);
        if (r) setCompleted(JSON.parse(r.value));
      } catch {}
      setLoaded(true);
    })();
  }, []);

  const saveCompleted = async (newState) => {
    setCompleted(newState);
    try { await window.storage.set(STORAGE_KEY, JSON.stringify(newState)); } catch {}
  };

  const toggleTask = (weekIdx, dayIdx, taskIdx) => {
    const key = `${weekIdx}-${dayIdx}-${taskIdx}`;
    const next = { ...completed, [key]: !completed[key] };
    saveCompleted(next);
  };

  const weekData = WEEKS.find(w => w.week === activeWeek);
  const dayData = weekData?.days[activeDay];

  const weekProgress = (w) => {
    const week = WEEKS.find(wk => wk.week === w);
    if (!week) return 0;
    let total = 0, done = 0;
    week.days.forEach((d, di) => d.tasks.forEach((_, ti) => {
      total++;
      if (completed[`${w}-${di}-${ti}`]) done++;
    }));
    return total ? Math.round((done / total) * 100) : 0;
  };

  const totalProgress = () => {
    let total = 0, done = 0;
    WEEKS.forEach(w => w.days.forEach((d, di) => d.tasks.forEach((_, ti) => {
      total++;
      if (completed[`${w.week}-${di}-${ti}`]) done++;
    })));
    return total ? Math.round((done / total) * 100) : 0;
  };

  if (!loaded) return (
    <div style={{ background: "#050505", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "monospace", color: "#333" }}>
      Loading your tasks...
    </div>
  );

  return (
    <div style={{
      fontFamily: "'Azeret Mono', 'Courier New', monospace",
      background: "#050505",
      color: "#ccc8c0",
      minHeight: "100vh",
      margin: 0,
      padding: 0,
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Azeret+Mono:wght@300;400;500;600&family=Cormorant+Garamond:ital,wght@0,600;1,400&display=swap');
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 3px; height: 3px; }
        ::-webkit-scrollbar-track { background: #0a0a0a; }
        ::-webkit-scrollbar-thumb { background: #1e1e1e; }

        .nav-btn {
          background: transparent;
          border: 1px solid #1a1a1a;
          color: #444;
          padding: 8px 18px;
          font-family: 'Azeret Mono', monospace;
          font-size: 0.68rem;
          letter-spacing: 0.1em;
          cursor: pointer;
          transition: all 0.15s;
          text-transform: uppercase;
        }
        .nav-btn:hover { color: #888; border-color: #2a2a2a; }
        .nav-btn.active { color: #ccc8c0; border-color: #444; background: #0f0f0f; }

        .week-pill {
          padding: 6px 12px;
          font-size: 0.65rem;
          border: 1px solid #151515;
          cursor: pointer;
          transition: all 0.15s;
          font-family: 'Azeret Mono', monospace;
          letter-spacing: 0.05em;
          background: #0a0a0a;
          color: #333;
          position: relative;
          white-space: nowrap;
        }
        .week-pill:hover { border-color: #2a2a2a; color: #666; }
        .week-pill.active { border-color: currentColor; color: #ccc8c0; background: #111; }

        .day-tab {
          padding: 8px 14px;
          font-size: 0.65rem;
          border: none;
          border-bottom: 2px solid transparent;
          cursor: pointer;
          transition: all 0.15s;
          font-family: 'Azeret Mono', monospace;
          letter-spacing: 0.08em;
          background: transparent;
          color: #333;
          text-transform: uppercase;
        }
        .day-tab:hover { color: #666; }
        .day-tab.active { color: #ccc8c0; border-bottom-color: currentColor; }

        .task-row {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 10px 0;
          border-bottom: 1px solid #0f0f0f;
          cursor: pointer;
          transition: all 0.1s;
        }
        .task-row:hover { padding-left: 4px; }
        .task-row:last-child { border-bottom: none; }

        .checkbox {
          width: 16px;
          height: 16px;
          border: 1px solid #2a2a2a;
          flex-shrink: 0;
          margin-top: 2px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.15s;
          border-radius: 2px;
        }
        .checkbox.done { border-color: #22c55e; background: #22c55e18; }

        .progress-bar-bg {
          background: #111;
          height: 2px;
          border-radius: 1px;
          overflow: hidden;
        }
        .progress-bar-fill {
          height: 100%;
          border-radius: 1px;
          transition: width 0.4s ease;
        }

        .routine-row {
          display: flex;
          gap: 16px;
          padding: 14px 0;
          border-bottom: 1px solid #0f0f0f;
          align-items: center;
        }
        .routine-row:last-child { border-bottom: none; }

        .animate-in { animation: fadeIn 0.3s ease forwards; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(5px); } to { opacity: 1; transform: translateY(0); } }

        .stat-block {
          background: #0d0d0d;
          border: 1px solid #151515;
          padding: 20px;
          flex: 1;
          min-width: 120px;
        }
      `}</style>

      {/* Header */}
      <div style={{ padding: "40px 32px 24px", borderBottom: "1px solid #0f0f0f", maxWidth: 860, margin: "0 auto" }}>
        <div style={{ fontSize: "0.58rem", letterSpacing: "0.3em", color: "#2a2a2a", textTransform: "uppercase", marginBottom: 10 }}>
          Daily Task System · Year 1 · Lasya
        </div>
        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(2rem, 5vw, 3.2rem)",
          fontWeight: 600,
          margin: "0 0 4px",
          color: "#e8e4dc",
          lineHeight: 1.1,
        }}>
          Every day counts.
        </h1>
        <p style={{ color: "#2a2a2a", fontSize: "0.72rem", margin: "8px 0 0" }}>
          16 weeks · 112 days · 400+ tasks · Your progress is saved automatically.
        </p>

        {/* Overall progress */}
        <div style={{ marginTop: 20, display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ flex: 1 }}>
            <div className="progress-bar-bg">
              <div className="progress-bar-fill" style={{ width: `${totalProgress()}%`, background: "linear-gradient(90deg, #e8473f, #f59e0b)" }} />
            </div>
          </div>
          <div style={{ fontSize: "0.7rem", color: "#444", whiteSpace: "nowrap" }}>{totalProgress()}% complete</div>
        </div>
      </div>

      {/* Nav */}
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "16px 32px", display: "flex", gap: 6, borderBottom: "1px solid #0f0f0f" }}>
        {[["week", "Weekly Tasks"], ["routine", "Daily Routine"], ["progress", "Progress"]].map(([v, l]) => (
          <button key={v} className={`nav-btn ${view === v ? "active" : ""}`} onClick={() => setView(v)}>{l}</button>
        ))}
      </div>

      <div style={{ maxWidth: 860, margin: "0 auto", padding: "24px 32px 60px" }}>

        {/* ── WEEKLY VIEW ── */}
        {view === "week" && (
          <div className="animate-in">
            {/* Quarter selector */}
            <div style={{ marginBottom: 20 }}>
              <div style={{ fontSize: "0.58rem", letterSpacing: "0.2em", color: "#2a2a2a", textTransform: "uppercase", marginBottom: 10 }}>Quarter</div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {Object.entries(QUARTER_META).map(([q, meta]) => {
                  const weeks = WEEKS.filter(w => w.quarter === q);
                  const isActive = weeks.some(w => w.week === activeWeek);
                  return (
                    <button
                      key={q}
                      className={`week-pill ${isActive ? "active" : ""}`}
                      style={isActive ? { borderColor: meta.color + "88", color: meta.color } : {}}
                      onClick={() => { setActiveWeek(weeks[0].week); setActiveDay(0); }}
                    >
                      {q} — {meta.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Week selector */}
            <div style={{ marginBottom: 24 }}>
              <div style={{ fontSize: "0.58rem", letterSpacing: "0.2em", color: "#2a2a2a", textTransform: "uppercase", marginBottom: 10 }}>Week</div>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                {WEEKS.filter(w => w.quarter === weekData?.quarter).map(w => {
                  const prog = weekProgress(w.week);
                  const meta = QUARTER_META[w.quarter];
                  return (
                    <button
                      key={w.week}
                      className={`week-pill ${activeWeek === w.week ? "active" : ""}`}
                      style={activeWeek === w.week ? { borderColor: meta.color + "88", color: meta.color } : {}}
                      onClick={() => { setActiveWeek(w.week); setActiveDay(0); }}
                    >
                      W{w.week}
                      {prog > 0 && <span style={{ marginLeft: 4, fontSize: "0.55rem", opacity: 0.6 }}>{prog}%</span>}
                    </button>
                  );
                })}
              </div>
            </div>

            {weekData && (
              <>
                {/* Week header */}
                <div style={{ marginBottom: 20, paddingBottom: 16, borderBottom: "1px solid #111" }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
                    <span style={{ fontSize: "0.6rem", letterSpacing: "0.2em", color: QUARTER_META[weekData.quarter]?.color, textTransform: "uppercase" }}>
                      Week {weekData.week} · {weekData.quarter}
                    </span>
                    <span style={{ fontSize: "0.58rem", color: "#2a2a2a" }}>{weekData.phase}</span>
                  </div>
                  <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.6rem", margin: "4px 0 8px", color: "#e0dcd4", fontWeight: 600 }}>
                    {weekData.title}
                  </h2>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ flex: 1, maxWidth: 200 }}>
                      <div className="progress-bar-bg">
                        <div className="progress-bar-fill" style={{
                          width: `${weekProgress(activeWeek)}%`,
                          background: QUARTER_META[weekData.quarter]?.color || "#e8473f"
                        }} />
                      </div>
                    </div>
                    <span style={{ fontSize: "0.65rem", color: "#333" }}>{weekProgress(activeWeek)}% done</span>
                  </div>
                </div>

                {/* Day tabs */}
                <div style={{ display: "flex", gap: 0, borderBottom: "1px solid #0f0f0f", marginBottom: 20, overflowX: "auto" }}>
                  {weekData.days.map((d, i) => {
                    const dayTotal = d.tasks.length;
                    const dayDone = d.tasks.filter((_, ti) => completed[`${activeWeek}-${i}-${ti}`]).length;
                    return (
                      <button
                        key={d.day}
                        className={`day-tab ${activeDay === i ? "active" : ""}`}
                        style={activeDay === i ? { borderBottomColor: QUARTER_META[weekData.quarter]?.color } : {}}
                        onClick={() => setActiveDay(i)}
                      >
                        {d.day}
                        {dayDone > 0 && (
                          <span style={{ marginLeft: 4, fontSize: "0.55rem", color: "#22c55e" }}>
                            {dayDone === dayTotal ? "✓" : `${dayDone}/${dayTotal}`}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Tasks */}
                {dayData && (
                  <div className="animate-in" key={`${activeWeek}-${activeDay}`}>
                    <div style={{ fontSize: "0.6rem", letterSpacing: "0.15em", color: "#2a2a2a", textTransform: "uppercase", marginBottom: 14 }}>
                      {dayData.tasks.length} tasks today
                    </div>
                    {dayData.tasks.map((task, ti) => {
                      const key = `${activeWeek}-${activeDay}-${ti}`;
                      const done = !!completed[key];
                      return (
                        <div key={ti} className="task-row" onClick={() => toggleTask(activeWeek, activeDay, ti)}>
                          <div className={`checkbox ${done ? "done" : ""}`}>
                            {done && <span style={{ color: "#22c55e", fontSize: "0.6rem" }}>✓</span>}
                          </div>
                          <span style={{
                            fontSize: "0.82rem",
                            lineHeight: 1.6,
                            color: done ? "#2a2a2a" : "#a8a4a0",
                            textDecoration: done ? "line-through" : "none",
                            transition: "all 0.2s",
                          }}>
                            {task}
                          </span>
                        </div>
                      );
                    })}

                    {/* Resources */}
                    {dayData.resources?.length > 0 && (
                      <div style={{ marginTop: 20, paddingTop: 16, borderTop: "1px solid #0f0f0f" }}>
                        <div style={{ fontSize: "0.58rem", letterSpacing: "0.2em", color: "#2a2a2a", textTransform: "uppercase", marginBottom: 10 }}>
                          Resources for today
                        </div>
                        {dayData.resources.map((r, i) => (
                          <div key={i} style={{ fontSize: "0.72rem", color: "#444", padding: "4px 0", display: "flex", gap: 8 }}>
                            <span style={{ color: "#2a2a2a" }}>→</span>
                            <span>{r}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </>
            )}
          </div>
        )}

        {/* ── DAILY ROUTINE ── */}
        {view === "routine" && (
          <div className="animate-in">
            <div style={{ marginBottom: 24 }}>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.8rem", color: "#e0dcd4", margin: "0 0 6px", fontWeight: 600 }}>
                Your Daily Structure
              </h2>
              <p style={{ fontSize: "0.72rem", color: "#333", lineHeight: 1.7 }}>
                Non-negotiable. Repeat daily for 730 days. That's the whole plan.
              </p>
            </div>

            {DAILY_ROUTINE.map((r, i) => (
              <div key={i} className="routine-row">
                <span style={{ fontSize: "1.1rem", width: 24 }}>{r.icon}</span>
                <span style={{ fontSize: "0.7rem", color: "#333", width: 140, flexShrink: 0, letterSpacing: "0.05em" }}>{r.time}</span>
                <span style={{ fontSize: "0.82rem", color: "#a8a4a0", lineHeight: 1.5 }}>{r.task}</span>
              </div>
            ))}

            <div style={{ marginTop: 32, background: "#0d0d0d", border: "1px solid #111", padding: 20 }}>
              <div style={{ fontSize: "0.6rem", letterSpacing: "0.2em", color: "#2a2a2a", textTransform: "uppercase", marginBottom: 12 }}>Daily non-negotiables</div>
              {[
                "1 LeetCode problem every single day",
                "GitHub commit — even if it's just a README edit",
                "30 min of reading (book, blog, paper)",
                "LinkedIn post 3x/week minimum",
                "Notion: log what you did + what's next",
              ].map((item, i) => (
                <div key={i} style={{ fontSize: "0.78rem", color: "#555", padding: "6px 0", borderBottom: "1px solid #0f0f0f", display: "flex", gap: 10 }}>
                  <span style={{ color: "#2a2a2a" }}>—</span>{item}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── PROGRESS VIEW ── */}
        {view === "progress" && (
          <div className="animate-in">
            <div style={{ marginBottom: 24 }}>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.8rem", color: "#e0dcd4", margin: "0 0 6px", fontWeight: 600 }}>
                Your Progress
              </h2>
            </div>

            {/* Stats */}
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 32 }}>
              {[
                ["Overall", `${totalProgress()}%`, "#e8473f"],
                ["Weeks", `${WEEKS.filter(w => weekProgress(w.week) === 100).length}/${WEEKS.length}`, "#22c55e"],
                ["Tasks Done", `${Object.values(completed).filter(Boolean).length}`, "#f59e0b"],
              ].map(([label, val, color]) => (
                <div key={label} className="stat-block">
                  <div style={{ fontSize: "0.58rem", letterSpacing: "0.2em", color: "#2a2a2a", textTransform: "uppercase", marginBottom: 6 }}>{label}</div>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", color, fontWeight: 600 }}>{val}</div>
                </div>
              ))}
            </div>

            {/* Per-quarter progress */}
            {Object.entries(QUARTER_META).map(([q, meta]) => {
              const weeks = WEEKS.filter(w => w.quarter === q);
              return (
                <div key={q} style={{ marginBottom: 24 }}>
                  <div style={{ fontSize: "0.6rem", letterSpacing: "0.15em", color: meta.color, textTransform: "uppercase", marginBottom: 10 }}>
                    {q} — {meta.label}
                  </div>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                    {weeks.map(w => {
                      const p = weekProgress(w.week);
                      return (
                        <div key={w.week} style={{ minWidth: 80 }}>
                          <div style={{ fontSize: "0.6rem", color: "#333", marginBottom: 4 }}>W{w.week}</div>
                          <div className="progress-bar-bg" style={{ height: 3 }}>
                            <div className="progress-bar-fill" style={{ width: `${p}%`, background: meta.color }} />
                          </div>
                          <div style={{ fontSize: "0.6rem", color: p === 100 ? "#22c55e" : "#2a2a2a", marginTop: 3 }}>{p}%</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
