import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import {
  ArrowRightIcon,
  BookOpenIcon,
  CheckCircleIcon,
  SparklesIcon,
} from "@/components/HeroIcons";

type Program = {
  title: string;
  description: string;
};

type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

const programs: Program[] = [
  {
    title: "Expert Masterclass Series",
    description:
      "Focused sessions led by diaspora and global STEM experts, with reading prompts, applied discussion and moderated Q&A.",
  },
  {
    title: "Research Acceleration Clinics",
    description:
      "Small-group support for research questions, methods, proposal clarity, literature positioning and publication readiness.",
  },
  {
    title: "Applied Technology Labs",
    description:
      "Hands-on labs that translate technical concepts into reproducible workflows, prototypes, datasets or field-ready tools.",
  },
  {
    title: "Mentoring and Office Hours",
    description:
      "Structured access to mentors for participant questions, project direction, professional development and next-step planning.",
  },
  {
    title: "Innovation and Commercialization",
    description:
      "Guidance on problem framing, stakeholder discovery, responsible technology transfer and pathways from research to use.",
  },
  {
    title: "Cultural and Institutional Exchange",
    description:
      "Preparation and facilitation that helps international experts, host institutions and participants work across context with respect.",
  },
  {
    title: "Train-the-Trainer",
    description:
      "Faculty and facilitator development designed to help partner institutions continue delivery after the initial cohort.",
  },
];

const partnerInstitutions = [
  "Universities and graduate schools",
  "Research institutes and centers",
  "Technology companies and industry groups",
  "Professional associations and foundations",
  "Embassies, development agencies and CSR teams",
  "Diaspora STEM experts and expert networks",
];

const participantGroups = [
  "Master's and PhD students in STEM fields",
  "Early-career researchers building rigorous methods",
  "Selected faculty seeking applied program models",
  "Research teams preparing outputs, proposals or collaborations",
  "Institutions in Nigeria and West Africa developing local capacity",
];

const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    description:
      "Clarify institutional needs, participant profile, available experts, delivery constraints and evidence priorities.",
  },
  {
    number: "02",
    title: "Co-Design",
    description:
      "Shape the curriculum, expert roster, participant tasks, schedule and support model with partner input.",
  },
  {
    number: "03",
    title: "Deliver",
    description:
      "Coordinate live sessions, hybrid workshops, facilitation, mentor access and practical assignments.",
  },
  {
    number: "04",
    title: "Demonstrate",
    description:
      "Help participants present research progress, applied artifacts, prototypes or next-step plans.",
  },
  {
    number: "05",
    title: "Evaluate & Scale",
    description:
      "Report evidence-ready outcomes and identify what should be repeated, adapted or expanded.",
  },
];

const pilotWeeks = [
  {
    range: "Weeks 1-2",
    description: "Orientation, needs assessment and research-goal alignment.",
  },
  {
    range: "Weeks 3-6",
    description: "Masterclasses, research clinics and applied technical labs.",
  },
  {
    range: "Weeks 7-10",
    description: "Mentor office hours, group work and draft output development.",
  },
  {
    range: "Weeks 11-12",
    description:
      "Participant demonstrations, feedback and evidence-ready reporting.",
  },
];

const outcomes = [
  "Participant completion",
  "Knowledge gain",
  "Applied outputs",
  "Mentor engagement",
  "Follow-on collaborations",
];

export default function HomePage() {
  return (
    <main id="main">
      <section className="hero section-padding">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-7">
              <p className="hero-badge">
                <SparklesIcon className="hero-badge__icon" />
                Practical exchange for researchers
              </p>
              <p className="eyebrow">
                Global STEM Knowledge Transfer, Graduate Research Development &
                Cultural Exchange
              </p>
              <h1>
                Connecting <span>Global STEM Expertise</span> with
                Africa&apos;s Next Generation of Researchers.
              </h1>
              <p className="hero__copy">
                AbrahamArcade Wholeness Enterprise LLC helps institutions
                co-design practical knowledge-transfer programs for
                master&apos;s and PhD students, early-career researchers and
                selected faculty in Nigeria and West Africa.
              </p>
              <div className="d-flex flex-column flex-sm-row gap-3 mt-4">
                <a className="btn btn-primary btn-lg" href="#contact">
                  Discuss a Partnership <ArrowRightIcon className="icon-sm" />
                </a>
                <a className="btn btn-outline-light btn-lg" href="#programs">
                  Explore Programs
                </a>
              </div>
            </div>
            <div className="col-lg-5">
              <div
                className="hero-visual"
                aria-label="AbrahamArcade Wholeness Enterprise brand"
              >
                <div className="hero-dots" aria-hidden="true" />
                <div className="hero-orbit" aria-hidden="true" />
                <div className="hero-logo-panel">
                  <Image
                    src="/assets/img/awe-consulting-logo.png"
                    width={1122}
                    height={272}
                    alt="AWE Consulting, AbrahamArcade Wholeness Enterprise brand mark"
                    priority
                  />
                </div>
                <div className="hero-feature-card">
                  <div className="feature-icon" aria-hidden="true">
                    <BookOpenIcon className="icon-md" />
                  </div>
                  <h2 className="h4">Hybrid STEM Knowledge Transfer</h2>
                  <div className="hero-card-line" aria-hidden="true" />
                  <p>
                    Expert coordination, cohort delivery, cultural orientation
                    and impact reporting for research-centered exchange.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-label="Institutional focus">
        <div className="container">
          <div className="trust-panel">
            <span>Universities</span>
            <span>Research Institutions</span>
            <span>Industry Partners</span>
            <span>Development Organizations</span>
          </div>
        </div>
      </section>

      <section id="programs" className="section-padding">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Program Pillars</p>
            <h2>
              Practical formats for research capability and two-way exchange.
            </h2>
            <p>
              Each program is scoped with institutional partners, subject-matter
              experts and local delivery teams so participants can move from
              concepts to applied outputs.
            </p>
          </div>

          <div className="row g-4">
            {programs.map((program) => (
              <div className="col-md-6 col-xl-4" key={program.title}>
                <article className="card program-card h-100">
                  <div className="card-body">
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
            <p className="eyebrow">Who We Serve</p>
            <h2>
              Built for institutions and participants who need applied, credible
              exchange.
            </h2>
          </div>
          <div className="row g-4">
            <AudienceList
              title="Partner institutions"
              items={partnerInstitutions}
            />
            <AudienceList title="Participant groups" items={participantGroups} />
          </div>
        </div>
      </section>

      <section id="how-it-works" className="section-padding">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">How It Works</p>
            <h2>
              A clear path from partnership goals to measurable learning
              outputs.
            </h2>
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

      <section className="section-padding section-tint">
        <div className="container">
          <div className="row align-items-start g-5">
            <div className="col-lg-5">
              <p className="eyebrow">Configurable Model</p>
              <h2>Featured pilot program</h2>
              <p className="lead">
                A sample 8-12 week hybrid STEM knowledge-transfer cohort for
                graduate researchers.
              </p>
              <p>
                This is a configurable model, not a completed case study. The
                structure can be adapted by discipline, partner goals,
                participant level and expert availability.
              </p>
            </div>
            <div className="col-lg-7">
              <div
                className="pilot-table"
                role="list"
                aria-label="Pilot program components"
              >
                {pilotWeeks.map((week) => (
                  <div role="listitem" key={week.range}>
                    <strong>{week.range}</strong>
                    <span>{week.description}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="outcomes" className="section-padding">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Outcomes</p>
            <h2>Evidence-ready measures for every cohort.</h2>
            <p>
              Final metrics should be confirmed with partner institutions and
              reported transparently after delivery.
            </p>
          </div>
          <div className="row g-4">
            {outcomes.map((outcome) => (
              <div className="col-sm-6 col-lg" key={outcome}>
                <div className="metric-card">
                  <span>Placeholder</span>
                  <strong>{outcome}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="section-padding section-tint">
        <div className="container">
          <div className="row g-5 align-items-start">
            <div className="col-lg-5">
              <p className="eyebrow">About</p>
              <h2>
                Program-development support for institutions that want exchange
                to become useful work.
              </h2>
            </div>
            <div className="col-lg-7">
              <p>
                AbrahamArcade Wholeness Enterprise LLC is a program-development
                and consulting organization coordinating expert partnerships,
                local delivery, cultural orientation, administration and impact
                reporting.
              </p>
              <p>
                Its work is designed to help partner institutions connect
                credible STEM expertise with graduate researchers and faculty in
                ways that respect local context, strengthen applied capability
                and create practical outputs that can be reviewed after each
                cohort.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band" aria-label="Partnership call to action">
        <div className="container d-flex flex-column flex-lg-row align-items-lg-center justify-content-between gap-4">
          <div>
            <p className="eyebrow mb-2">Partnerships</p>
            <h2 className="h3 mb-0">
              Co-design a STEM knowledge-transfer cohort for your institution.
            </h2>
          </div>
          <a className="btn btn-light btn-lg" href="#contact">
            Start the Conversation
          </a>
        </div>
      </section>

      <section id="contact" className="section-padding">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-5">
              <p className="eyebrow">Contact</p>
              <h2>Discuss a partnership.</h2>
              <p>
                Share the institutional goal, participant group and program
                format you have in mind. Connect a secure form endpoint before
                public launch.
              </p>
              <div className="contact-list">
                <a href="mailto:partnerships@example.com">
                  partnerships@example.com
                </a>
                <a href="tel:+10000000000">+1 (000) 000-0000</a>
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

function AudienceList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="col-lg-6">
      <div className="service-block">
        <h3 className="h4">{title}</h3>
        <ul className="check-list">
          {items.map((item) => (
            <li key={item}>
              <CheckCircleIcon className="check-icon" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
