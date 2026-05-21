import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope
} from "react-icons/fa";

const projects = [
  {
    title: "Context-Aware RAG Chatbot",
    desc: "Multi-PDF conversational AI system using FAISS + Gemini + MMR retrieval.",
    github: "https://github.com/maw-khan/context-aware-rag-chatbot-gemini",
    demo: "https://pdfcantalk.streamlit.app/",
    image: "/projects/rag-home.png",
    architecture: "/diagrams/rag.png",
    stack: ["LangChain", "FAISS", "Gemini", "Streamlit"],
    flow:
      "PDF → Chunking → Embeddings → FAISS → MMR Retrieval → Gemini → Grounded Response",
    details:
      "Built a production-style conversational RAG system with semantic retrieval, conversational memory, explainable citations, FAISS indexing, and Gemini-powered grounded generation.",
  },

  {
    title: "AI Resume Analyzer",
    desc: "ATS-style resume scoring system with NLP + Gemini feedback engine.",
    github: "https://github.com/maw-khan/resume-analyzer-ai",
    demo: "https://atsresume-analyzer.streamlit.app/",
    image: "/projects/resume-home.png",
    architecture: "/diagrams/resume.png",
    stack: ["NLP", "Gemini", "PyMuPDF"],
    flow:
      "Resume → Parsing → Keywords → ATS Matching → AI Feedback Generation",
    details:
      "Designed a recruitment intelligence system with resume parsing, ATS scoring logic, keyword extraction, skill gap analysis, and AI-powered optimization recommendations.",
  },

  {
    title: "YouTube RAG Chatbot",
    desc: "Turn YouTube videos into searchable AI knowledge base using RAG.",
    github: "https://github.com/maw-khan/youtube-rag-chatbot",
    demo: "https://chatwithvideos.streamlit.app/",
    image: "/projects/youtube-home.png",
    architecture: "/diagrams/youtube.png",
    stack: ["FAISS", "Transformers", "Gemini"],
    flow:
      "Video → Transcript → Chunking → Embeddings → Reranking → QA System",
    details:
      "Implemented transcript intelligence, timestamp-aware retrieval, neural reranking, semantic search, and conversational QA over YouTube content.",
  },

  {
    title: "Research Paper Assistant",
    desc: "Multi-paper AI system with reranking + literature review generation.",
    github: "https://github.com/maw-khan/research-paper-assistant",
    demo: "https://chatwithresearchpaper.streamlit.app/",
    image: "/projects/research-home.png",
    architecture: "/diagrams/research.png",
    stack: ["FAISS", "Cross-Encoder", "Gemini"],
    flow:
      "PDFs → Embeddings → Retrieval → Cross-Encoder → Literature Synthesis",
    details:
      "Built an academic AI assistant supporting semantic research search, grounded QA, reranking, literature review generation, and research summarization.",
  },
];

export default function App() {

  const [active, setActive] = useState(null);

  const formRef = useRef();

  const sendEmail = (e) => {

    e.preventDefault();

    emailjs.sendForm(
      "service_hmt1sv9",
      "template_ql2clum",
      formRef.current,
      "8jcRPbjVGvSRsB2PZ"
    )
    .then(() => {

      alert("Message sent successfully!");

      formRef.current.reset();

    })
    .catch((error) => {

      console.log(error);

      alert("Failed to send message.");

    });

  };

  return (

    <div className="app">

      {/* NAVBAR */}
      <nav className="navbar">

        <div className="logo">
          MAWK Portfolio
        </div>

        <div className="navLinks">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="resumeBtn"
        >
          Resume
        </a>

      </nav>

      {/* HERO */}
      <section className="hero">

        <div className="heroBackground">

          <div className="neuron neuron1"></div>
          <div className="neuron neuron2"></div>
          <div className="neuron neuron3"></div>
          <div className="neuron neuron4"></div>
          <div className="neuron neuron5"></div>

          <div className="line line1"></div>
          <div className="line line2"></div>
          <div className="line line3"></div>

        </div>

        <motion.div
          className="heroContent"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >

          <h1>
            Building
            <span className="gradient"> Elite AI Systems </span>
            For Real-World Deployment
          </h1>

          <div className="typing">

            <TypeAnimation
              sequence={[
                "RAG Engineer", 1500,
                "LLM Application Developer", 1500,
                "AI Systems Architect", 1500,
              ]}
              speed={50}
              repeat={Infinity}
            />

          </div>

          <p className="heroText">
            I build production-grade AI systems focused on
            Retrieval-Augmented Generation, semantic search,
            LLM orchestration, reranking pipelines,
            grounded responses, and deployable AI applications.
          </p>

          <div className="heroButtons">

            <a href="#projects" className="primaryBtn">
              Explore Projects
            </a>

            <a
              href="/resume.pdf"
              download
              className="secondaryBtn"
            >
              Download Resume
            </a>

          </div>

        </motion.div>

      </section>

      {/* ABOUT */}
      <section id="about" className="section">

        <h2>About Me</h2>

        <p className="aboutText">
          I specialize in building modern AI systems with strong focus on
          Retrieval-Augmented Generation (RAG), semantic retrieval,
          vector databases, conversational AI, neural reranking,
          prompt engineering, and production deployment.

          My goal is to engineer AI systems that are not just demos —
          but scalable, reliable, explainable, and deployable in
          real-world environments.

          I offer the following services:
        </p>

        <div className="servicesGrid">

          <div className="serviceCard">
            <h3>RAG Systems</h3>
            <p>Production-grade Retrieval-Augmented Generation pipelines.</p>
          </div>

          <div className="serviceCard">
            <h3>LLM Apps</h3>
            <p>Custom AI applications using Gemini, LangChain, and Streamlit.</p>
          </div>

          <div className="serviceCard">
            <h3>Semantic Search</h3>
            <p>Vector databases, embeddings, reranking, and retrieval systems.</p>
          </div>

          <div className="serviceCard">
            <h3>Research AI</h3>
            <p>Academic intelligence systems and literature review assistants.</p>
          </div>

          <div className="serviceCard">
            <h3>AI Chatbots</h3>
            <p>Conversational AI assistants with grounded responses.</p>
          </div>

          <div className="serviceCard">
            <h3>Streamlit Deployment</h3>
            <p>Interactive AI web apps deployed publicly on Streamlit Cloud.</p>
          </div>

        </div>

      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">

        <h2>Featured AI Systems</h2>

        <div className="projectGrid">

          {projects.map((p, i) => (

            <motion.div
              key={i}
              className="projectCard"
              whileHover={{ y: -10 }}
            >

              <div className="projectImageContainer">

                <img
                  src={p.image}
                  alt={p.title}
                  className="projectImage"
                />

              </div>

              <div className="projectContent">

                <h3>{p.title}</h3>

                <p>{p.desc}</p>

                <div className="stack">

                  {p.stack.map((s) => (
                    <span key={s}>{s}</span>
                  ))}

                </div>

                <button
                  className="viewBtn"
                  onClick={() => setActive(p)}
                >
                  View Project
                </button>

              </div>

            </motion.div>

          ))}

        </div>

      </section>

      {/* POPUP */}
      <AnimatePresence>

        {active && (

          <motion.div
            className="popupOverlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >

            <motion.div
              className="popup"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            >

              <button
                className="closeBtn"
                onClick={() => setActive(null)}
              >
                ✕
              </button>

              <div className="popupLayout">

                <div className="popupLeft">

                  <img
                    src={active.architecture}
                    alt={active.title}
                    className="popupArchitecture"
                  />

                </div>

                <div className="popupRight">

                  <h2>{active.title}</h2>

                  <p className="popupDesc">
                    {active.details}
                  </p>

                  <div className="flowBox">
                    {active.flow}
                  </div>

                  <div className="stack popupStack">

                    {active.stack.map((s) => (
                      <span key={s}>{s}</span>
                    ))}

                  </div>

                  <div className="popupButtons">

                    <a
                      href={active.github}
                      target="_blank"
                      rel="noreferrer"
                      className="primaryBtn"
                    >
                      GitHub Repository
                    </a>

                    <a
                      href={active.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="secondaryBtn"
                    >
                      Live Demo
                    </a>

                  </div>

                </div>

              </div>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

      {/* CONTACT */}
      <section id="contact" className="contactSection">

        <h2>Let’s Build AI Systems</h2>

        <p className="contactText">
          Open for AI Engineering, RAG Development,
          LLM Applications, and Freelance AI Projects.
        </p>

        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="contactForm"
        >

          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
          />

          <button
            type="submit"
            className="primaryBtn"
          >
            Send Message
          </button>

        </form>

        <div className="socials">

          <a
            href="mailto:mawkhan5031@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <FaEnvelope />
          </a>

          <a
            href="https://github.com/maw-khan"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/muhammad-ali-waris-khan-97a8ba146/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

        </div>

      </section>

    </div>
  );
}