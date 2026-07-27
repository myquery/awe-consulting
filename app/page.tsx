import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";

type Program = {
  title: string;
  description: string;
};

type Audience = {
  title: string;
  description: string;
};

type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

type Outcome = {
  title: string;
  description: string;
};

const programs: Program[] = [
  {
    title: "STEM Knowledge Transfer",
    description:
      "Moving laboratory practice, technical methodology and teaching standards from global centres of excellence into regional faculties.",
  },
  {
    title: "Graduate Research Development",
    description:
      "Building research capacity through structured mentorship, supervision frameworks and international exchange.",
  },
  {
    title: "Institutional Partnerships",
    description:
      "Harmonising curricula and research standards, and mediating durable partnership frameworks between institutions.",
  },
  {
    title: "Cultural Exchange",
    description:
      "Enabling effective collaboration through rigorous cultural preparation and local context integration.",
  },
];

const audiences: Audience[] = [
  {
    title: "Universities",
    description:
      "Curriculum reform, faculty development and stronger research supervision at the tertiary level.",
  },
  {
    title: "Research Institutes",
    description:
      "Laboratory capability, grant strategy and publication readiness for technical teams.",
  },
  {
    title: "Development Agencies",
    description:
      "Educational programming designed for measurable, reportable human capital outcomes.",
  },
  {
    title: "Corporations",
    description:
      "Talent pipelines, applied research collaborations and regional technical partnerships.",
  },
  {
    title: "International Partners",
    description:
      "Trusted local coordination for institutions entering the West African ecosystem.",
  },
  {
    title: "Government Bodies",
    description:
      "Policy-aligned STEM capacity programmes at state and federal level.",
  },
];

const trustItems = [
  "Universities",
  "Research institutes",
  "Development agencies",
  "Corporations",
  "International partners",
];

const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Contextual Audit",
    description:
      "Assessment of institutional strengths, infrastructure gaps and the regulatory environment in the target region.",
  },
  {
    number: "02",
    title: "Expert Matching",
    description:
      "Identification and engagement of global subject specialists with the precise disciplinary and pedagogical expertise required.",
  },
  {
    number: "03",
    title: "Framework Deployment",
    description:
      "Delivery of the knowledge transfer programme against defined qualitative and quantitative milestones.",
  },
  {
    number: "04",
    title: "Handover & Retention",
    description:
      "Transfer of ownership to local faculty, with monitoring so capability remains after the engagement ends.",
  },
];

const pilotBullets = [
  "Scoped to one faculty, department or research theme",
  "Matched visiting expertise and local counterpart leads",
  "Agreed milestones, review points and handover plan",
];

const outcomes: Outcome[] = [
  {
    title: "Stronger research supervision",
    description:
      "Faculty gain current methodology, review practice and publication standards they can apply independently.",
  },
  {
    title: "Durable institutional links",
    description:
      "Relationships are formalised so collaboration continues beyond any single visit or project cycle.",
  },
  {
    title: "Better prepared graduates",
    description:
      "Research students work to internationally recognised expectations from the start of their programme.",
  },
  {
    title: "Retained local capability",
    description:
      "Knowledge stays in the institution through documented practice, local leads and structured handover.",
  },
];

export default function HomePage() {
  return (
    <main id="main">
      <section className="hero section-padding">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <p className="eyebrow">Global STEM Knowledge Transfer</p>
              <h1>
                Bridging Global <span>Academic Capital</span>
              </h1>
              <p className="hero__copy">
                AWE Consulting coordinates STEM knowledge transfer, graduate
                research development, institutional partnerships and cultural
                exchange between global experts and institutions in Nigeria and
                West Africa.
              </p>
              <div className="d-flex flex-column flex-sm-row gap-3 mt-4">
                <a className="btn btn-primary btn-lg" href="#contact">
                  Start a conversation
                </a>
                <a className="btn btn-outline-dark btn-lg" href="#programs">
                  Explore programmes
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="hero-visual"
                aria-label="AbrahamArcade Wholeness Enterprise brand"
              >
                <Image
                  className="hero-photo"
                  src="/assets/img/lovable-campus.jpg"
                  width={1200}
                  height={1408}
                  alt="Aerial view of a university research campus in Lagos, Nigeria"
                  priority
                />
                <div className="hero-feature-card">
                  <p>
                    Institutional capacity building for universities and
                    research centres across Nigeria and West Africa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-label="Institutional focus">
        <div className="container">
          <h2 className="trust-heading">Built for institutional collaboration</h2>
          <div className="trust-panel">
            {trustItems.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section id="programs" className="section-padding section-tint">
        <div className="container">
          <div className="section-heading">
            <h2>Programme Pillars</h2>
            <p>
              Four connected areas of work that together move expertise, people
              and standards between global institutions and the region.
            </p>
          </div>

          <div className="program-grid">
            {programs.map((program, index) => (
              <div className="program-grid__item" key={program.title}>
                <article className="card program-card h-100">
                  <div className="card-body">
                    <span className="program-card__number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="h5">{program.title}</h3>
                    <p>{program.description}</p>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="who-we-serve" className="section-padding section-tint">
        <div className="container">
          <div className="section-heading">
            <h2>Who We Serve</h2>
            <p>
              We work with the institutions shaping scientific capability in
              Nigeria and the wider region.
            </p>
          </div>
          <div className="audience-grid">
            {audiences.map((audience) => (
              <article className="audience-item" key={audience.title}>
                <h3>{audience.title}</h3>
                <p>{audience.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="section-padding">
        <div className="container">
          <div className="section-heading">
            <h2>Delivery Process</h2>
            <p>
              A rigorous, evidence-led approach to institutional capacity
              building that prioritises sustainability and local ownership.
            </p>
          </div>
          <div className="process-grid">
            {processSteps.map((step) => (
              <article className="process-step" key={step.number}>
                <span className="process-step__number">{step.number}</span>
                <h3 className="h5">{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding pilot-section">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <p className="eyebrow">Pilot Programme</p>
              <h2>
                A structured first <span>engagement</span>
              </h2>
              <p>
                Institutions can begin with a defined pilot: a single
                department, a single research theme, and an agreed set of
                milestones. The pilot establishes the working relationship,
                tests the delivery framework in your context and produces a
                documented plan for wider rollout.
              </p>
              <ul className="pilot-list">
                {pilotBullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <a className="btn btn-dark btn-lg" href="#contact">
                Discuss a pilot
              </a>
            </div>
            <div className="col-lg-6">
              <Image
                className="pilot-image"
                src="/assets/img/lovable-lab.jpg"
                width={1200}
                height={912}
                alt="Postgraduate researchers working with a visiting professor in a university laboratory"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="outcomes" className="section-padding">
        <div className="container">
          <div className="section-heading">
            <h2>Outcomes</h2>
            <p>
              What partner institutions should expect from a completed AWE
              engagement.
            </p>
          </div>
          <div className="outcome-grid">
            {outcomes.map((outcome) => (
              <div className="outcome-grid__item" key={outcome.title}>
                <div className="metric-card">
                  <strong>{outcome.title}</strong>
                  <p>{outcome.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section-padding contact-section">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-5">
              <h2>
                Establish your <span>global footprint</span>
              </h2>
              <p>
                Tell us about your institution and the capability you want to
                build. We will respond with a proposed scope and next steps.
              </p>
              <div className="contact-list"><span>6439 Union CE, Glen Burnie MD, 21061, USA</span>
                <a href="mailto:partnerships@awe-consulting.org">
                  partnerships@awe-consulting.org
                </a>
                <span>Lagos, Nigeria | London, UK</span>
              </div>
            </div>
            <div className="col-lg-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
