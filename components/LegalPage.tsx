type LegalSection = {
  title: string;
  body: string;
};

type LegalPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  sections: LegalSection[];
};

export function LegalPage({ eyebrow, title, intro, sections }: LegalPageProps) {
  return (
    <main id="main" className="section-padding legal-page">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{intro}</p>
        </div>
        <div className="legal-content">
          {sections.map((section) => (
            <section key={section.title} aria-labelledby={slugify(section.title)}>
              <h2 id={slugify(section.title)}>{section.title}</h2>
              <p>{section.body}</p>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
