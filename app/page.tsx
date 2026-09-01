export default function HomePage() {
  const services = [
    {
      title: "Enterprise Data Architecture",
      points: [
        "Enterprise and canonical data models",
        "Information and solution architecture",
        "Data domain and standards design",
        "Integration architecture",
        "Architecture roadmaps",
        "Business and technical alignment",
      ],
    },
    {
      title: "Data Management & MDM",
      points: [
        "Master and reference data management",
        "Customer, supplier, and product masters",
        "Identity resolution and match/merge",
        "Hierarchy and taxonomy design",
        "Data quality and remediation",
        "Golden-record operating models",
      ],
    },
    {
      title: "Data Governance & Trust",
      points: [
        "Governance operating models",
        "Data ownership and stewardship",
        "Metadata, catalog, and business glossary",
        "Data lineage and traceability",
        "Policies, standards, and controls",
        "Data quality and trust frameworks",
      ],
    },
    {
      title: "Integration & Modernization",
      points: [
        "Data migration and modernization",
        "API and systems integration",
        "ETL / ELT and interoperability",
        "Cloud and data-platform strategy",
        "Legacy-system transition",
        "Enterprise information flows",
      ],
    },
    {
      title: "Data Engineering & Analytics",
      points: [
        "Data pipelines and ingestion",
        "Warehouses, lakes, and data platforms",
        "Analytics and business intelligence",
        "Decision-support foundations",
        "Reporting and operational visibility",
        "AI-ready trusted data foundations",
      ],
    },
  ];

  const focusAreas = [
    {
      title: "Enterprise Data Foundations",
      description:
        "Establish the models, standards, ownership, and trusted master and reference data needed to operate consistently across systems.",
      bullets: [
        "Enterprise and canonical data models",
        "Master and reference data management",
        "Customer, supplier, product, and location domains",
        "Hierarchy and taxonomy design",
        "Data quality and reconciliation",
      ],
      platform: "",
    },
    {
      title: "Governance, Metadata & Trust",
      description:
        "Make data understandable, accountable, traceable, and usable through practical governance embedded in day-to-day operations.",
      bullets: [
        "Governance operating models",
        "Data ownership and stewardship",
        "Metadata, catalog, and business glossary",
        "Lineage and traceability",
        "Policies, standards, controls, and quality",
      ],
      platform: "",
    },
    {
      title: "Modernization & Integration",
      description:
        "Connect fragmented environments and modernize data flows without manufacturing unnecessary complexity.",
      bullets: [
        "Data migration and platform modernization",
        "API and systems integration",
        "ETL / ELT and interoperability",
        "Cloud data-platform strategy",
        "Analytics and decision-ready foundations",
      ],
      platform: "",
    },
  ];

  const whoWeServe = [
    "Federal, state, and public-sector organizations",
    "Enterprises with fragmented or complex data environments",
    "Organizations modernizing ERP, CRM, PIM, MDM, and analytics ecosystems",
    "Data and technology leaders establishing governance and architecture",
    "Organizations preparing trusted data foundations for AI and automation",
    "Prime contractors seeking specialized enterprise data expertise",
  ];

  const steps = [
    {
      title: "Assess",
      text: "We evaluate current systems, data flows, business processes, and operational challenges.",
    },
    {
      title: "Design",
      text: "We define architecture, standards, workflows, and a roadmap aligned to business goals.",
    },
    {
      title: "Implement",
      text: "We support the transition from concept to execution with clear structure and usable solutions.",
    },
    {
      title: "Scale",
      text: "We help organizations expand capabilities, improve adoption, and prepare for future intelligence and automation.",
    },
  ];

  const insights = [
    {
      tag: "Perspective",
      title: "Why enterprise data transformations fail before implementation",
      description:
        "A look at the structural gaps that weaken transformation initiatives before systems are ever deployed.",
    },
    {
      tag: "Case Insight",
      title: "The hidden cost of weak enterprise data foundations",
      description:
        "How fragmented information impacts service delivery, visibility, and operational efficiency across complex enterprise environments.",
    },
    {
      tag: "Framework",
      title: "A practical approach to trusted-data readiness for AI",
      description:
        "Moving beyond hype to define what organizations actually need before scaling AI-enabled systems.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="absolute inset-x-0 top-0 z-50 w-full">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <a href="#" className="shrink-0 leading-none">
            <div className="text-3xl font-semibold tracking-tight md:text-4xl">
              <span className="text-white/70">Jax</span>
              <span className="text-[#7CC3EA]">Mckobe</span>
              <span className="ml-2 text-base font-medium tracking-wide text-white/75 md:text-lg">Consulting</span>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium text-white/80 md:flex">
            <a href="#capabilities" className="transition hover:text-white">
              Capabilities
            </a>
            <a href="#experience" className="transition hover:text-white">
              Experience
            </a>
            <a href="#government" className="transition hover:text-white">
              Government
            </a>
            <a href="#about" className="transition hover:text-white">
              About
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </nav>

          <div>
            <a
              href="#contact"
              className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur-sm md:hidden"
            >
              Contact
            </a>

            <a
              href="#contact"
              className="hidden rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-semibold text-white shadow-sm backdrop-blur-sm transition hover:bg-white/15 md:inline-flex"
            >
              Request Consultation
            </a>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden bg-slate-950">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/digital-foundation.jpg')",
            backgroundPosition: "center center",
          }}
        />

        <div className="absolute inset-0 bg-slate-950/76" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(76,150,193,0.28),transparent_34%),radial-gradient(circle_at_80%_35%,rgba(59,130,246,0.14),transparent_22%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.10),transparent_28%)]" />

        <div className="absolute inset-0 shadow-[inset_0_0_180px_rgba(2,6,23,0.78)]" />

        <div className="relative mx-auto grid min-h-[760px] max-w-7xl grid-cols-1 gap-20 px-6 pb-20 pt-32 md:pt-36 lg:min-h-[820px] lg:grid-cols-[1fr_0.92fr] lg:items-center">
          <div className="max-w-2xl">
            <div className="mb-7 inline-flex w-fit rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-[#B9D9EC] backdrop-blur-md">
              Enterprise Data • Architecture • Transformation
            </div>

            <h1 className="max-w-2xl text-4xl font-semibold leading-[1.04] tracking-tight text-white md:text-6xl lg:text-[4.5rem]">
              Enterprise data foundations for trusted transformation
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-200 md:text-[1.2rem] md:leading-9">
          We help government and enterprise organizations modernize complex data environments through data architecture, governance, master data management, integration, and trusted information foundations.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-full bg-[#4C96C1] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_12px_40px_rgba(76,150,193,0.35)] transition hover:brightness-110"
              >
                Request a Consultation
              </a>

              <a
                href="#capabilities"
                className="rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
              >
                View Capabilities
              </a>
            </div>

            <div className="mt-10 flex max-w-xl items-center gap-4">
              <div className="h-px w-16 bg-[#4C96C1]" />
              <div className="h-px flex-1 bg-white/15" />
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Trusted enterprise data",
                "Governed architecture",
                "Scalable modernization",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-full border border-white/12 bg-white/8 px-4 py-2 text-sm text-slate-100 backdrop-blur-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center lg:justify-end">
            <div className="w-full max-w-xl rounded-[2rem] border border-white/10 bg-white/8 p-5 shadow-[0_25px_80px_rgba(2,6,23,0.42)] backdrop-blur-lg">
              <div className="space-y-4">
                <div className="rounded-[1.5rem] border border-emerald-300/15 bg-emerald-400/10 p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-200">
                    Healthcare
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-100 md:text-[15px]">
                    Master data, reference data, quality, models, and trusted enterprise definitions
                  </p>
                </div>

                <div className="rounded-[1.5rem] border border-sky-300/15 bg-sky-400/10 p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-200">
                    Education
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-100 md:text-[15px]">
                    Stewardship, metadata, catalog, lineage, standards, and controls
                  </p>
                </div>

                <div className="rounded-[1.5rem] border border-white/10 bg-white/8 p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-200">
                    Enterprise Data
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-100 md:text-[15px]">
                    Enterprise architecture, integration, migration, cloud data platforms, and analytics
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-white" />
      </section>

      <section id="experience" className="relative z-10 mx-auto max-w-7xl px-6 pb-20 pt-6">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Selected Experience
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
            Enterprise data, governance, and transformation work across complex
            environments
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Representative experience delivering enterprise data transformation,
            governance frameworks, and scalable system architecture.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
            <h3 className="text-lg font-semibold text-slate-950">AO Smith</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Redesigned enterprise product data models across four core
              repositories
            </p>
            <p className="mt-3 text-sm font-medium text-slate-800">
              → Established governance structure, improved data consistency, and
              enabled scalable product management
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
            <h3 className="text-lg font-semibold text-slate-950">
              Mitsubishi Electric Trane
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Defined product data architecture and governance framework across
              systems
            </p>
            <p className="mt-3 text-sm font-medium text-slate-800">
              → Enabled structured product lifecycle management and improved
              cross-system alignment
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
            <h3 className="text-lg font-semibold text-slate-950">US LBM</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Optimized customer and supplier match/merge logic and survivorship
              rules
            </p>
            <p className="mt-3 text-sm font-medium text-slate-800">
              → Increased data accuracy and reduced duplication across
              enterprise systems
            </p>
          </div>
        </div>

        <p className="mt-8 text-xs text-slate-400">
          Representative experience includes work performed directly and through
          consulting organizations. Company names are used for illustrative
          purposes only.
        </p>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-8 md:grid-cols-4">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-slate-500">
              Experience
            </p>
            <p className="mt-2 text-2xl font-semibold text-slate-950">
              15+ Years
            </p>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-slate-500">
              Core Strength
            </p>
            <p className="mt-2 text-2xl font-semibold text-slate-950">
              MDM & Governance
            </p>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-slate-500">
              Delivery Context
            </p>
            <p className="mt-2 text-2xl font-semibold text-slate-950">
              Commercial & Public Sector
            </p>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-slate-500">
              Approach
            </p>
            <p className="mt-2 text-2xl font-semibold text-slate-950">
              Strategy to Execution
            </p>
          </div>
        </div>
      </section>

      <section id="capabilities" className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#4C96C1]">
            What We Do
          </p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
          Enterprise data capabilities from strategy through implementation
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            We help organizations establish trusted enterprise data, governed architecture, and scalable information flows—then carry that structure through modernization and implementation.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <h3 className="text-xl font-semibold text-slate-950">
                {service.title}
              </h3>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-600">
                {service.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[#4C96C1]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Insights
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950">
              Perspectives on data, systems, and digital transformation
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Practical insights grounded in real-world experience designing and
              implementing enterprise systems.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {insights.map((insight) => (
              <div
                key={insight.title}
                className="group cursor-pointer rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {insight.tag}
                </p>
                <h3 className="mt-3 text-2xl font-semibold leading-tight text-slate-950">
                  {insight.title}
                </h3>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  {insight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="focus-areas" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
              Where We Create Value
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
              Built for complex environments where trusted data and operational clarity matter
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Our work concentrates on the enterprise data problems that create the most friction, risk, and transformation cost.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {focusAreas.map((area) => (
              <div
                key={area.title}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <h3 className="text-xl font-semibold text-slate-950">
                  {area.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {area.description}
                </p>
                <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-600">
                  {area.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-emerald-600" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                {area.platform && (
                  <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-700">
                    {area.platform}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
          
          <section className="bg-gradient-to-b from-white to-slate-50">
            <div className="mx-auto max-w-7xl px-6 py-24">
              
              {/* Header */}
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#4C96C1]">
                  Selected Engagement
                </p>

                <h2 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950">
                  Transforming fragmented product data into a scalable enterprise foundation
                </h2>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  Representative engagement delivering enterprise data architecture and governance transformation across a global manufacturing environment.
                </p>
              </div>

              {/* Grid */}
              <div className="mt-12 grid gap-6 md:grid-cols-2">
                
                {/* Context */}
                <div className="relative rounded-3xl bg-white p-6 border border-slate-200/80 shadow-[0_6px_18px_rgba(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 hover:border-[#4C96C1]/30">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#4C96C1]/5 via-transparent to-transparent pointer-events-none" />
                  
                  <div className="relative">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Context
                    </p>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      Global manufacturing organization operating across multiple regions with product data distributed across disconnected systems and platforms.
                    </p>
                  </div>
                </div>

                {/* Challenge */}
                <div className="relative rounded-3xl bg-white p-6 border border-slate-200/80 shadow-[0_6px_18px_rgba(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 hover:border-[#4C96C1]/30">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#4C96C1]/5 via-transparent to-transparent pointer-events-none" />
                  
                  <div className="relative">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Challenge
                    </p>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      Inconsistent data definitions, fragmented governance, and lack of visibility across systems created duplication, inefficiencies, and limited decision-making confidence.
                    </p>
                  </div>
                </div>

                {/* Approach */}
                <div className="relative rounded-3xl bg-white p-6 border border-slate-200/80 shadow-[0_6px_18px_rgba(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 hover:border-[#4C96C1]/30">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#4C96C1]/5 via-transparent to-transparent pointer-events-none" />
                  
                  <div className="relative">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Approach
                    </p>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      Designed and implemented standardized enterprise data models, governance workflows, and integration patterns aligned to business processes and system architecture.
                    </p>
                  </div>
                </div>

                {/* Outcome */}
                <div className="relative rounded-3xl bg-white p-6 border border-slate-200/80 shadow-[0_6px_18px_rgba(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 hover:border-[#4C96C1]/30">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#4C96C1]/5 via-transparent to-transparent pointer-events-none" />
                  
                  <div className="relative">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Outcome
                    </p>

                    <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-600">
                      <li>→ Improved product data consistency across systems</li>
                      <li>→ Reduced duplication and manual reconciliation efforts</li>
                      <li>→ Enabled scalable product lifecycle management</li>
                      <li>→ Strengthened operational visibility and decision-making</li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#4C96C1]">
            How We Work
          </p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
            A practical, structured approach to transformation
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            We focus on building the right foundation first so that growth,
            modernization, and intelligence can follow.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EAF4FA] text-sm font-semibold text-[#4C96C1]">
                {index + 1}
              </div>
              <h3 className="mt-5 text-xl font-semibold text-slate-950">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-900 py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9FD0EA]">
                Why JaxMckobe Consulting
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                Structure before complexity. Foundations before hype.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                Many organizations do not need more disconnected tools. They need
                structure, clarity, and systems that work together.
              </p>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400">
                We believe digital transformation should be understandable,
                implementable, and tied directly to better outcomes.
              </p>
            </div>

            <div className="grid gap-4">
              {[
                "Clear data foundations",
                "Scalable architecture",
                "Practical transformation planning",
                "Cross-functional alignment",
                "Long-term operational value",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-800 bg-slate-800/60 p-4 text-slate-200"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

            <section id="government" className="border-y border-slate-200 bg-slate-950 py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7CC3EA]">
                Government
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                Federal data and information management capabilities
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
                JaxMckobe Consulting supports public-sector organizations with enterprise data architecture,
                governance, master and reference data, data quality, integration, modernization, and
                decision-ready information foundations.
              </p>
              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400">
                JaxMckobe Consulting is building its federal contracting practice around specialized enterprise data expertise, disciplined opportunity qualification, and prime/subcontract teaming where appropriate.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["Enterprise Data", "Architecture, MDM, reference data, quality, canonical models"],
                ["Governance & Trust", "Stewardship, metadata, catalog, lineage, standards, controls"],
                ["Integration", "Migration, APIs, ETL / ELT, interoperability, information flows"],
                ["Modernization", "Cloud data platforms, legacy transition, analytics foundations"],
              ].map(([title, text]) => (
                <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <h3 className="font-semibold text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

<section id="about" className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-4xl">
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:p-10">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#4C96C1] via-sky-300 to-emerald-400" />

            <div className="relative">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#4C96C1]">
                About JaxMckobe Consulting
              </p>

              <h2 className="mt-4 max-w-xl text-4xl font-semibold leading-tight tracking-tight text-slate-950">
                Enterprise data consulting built around clarity, trust, and execution
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                JaxMckobe Consulting helps government and enterprise organizations solve complex data problems through architecture, master data management, governance, integration, modernization, and practical transformation leadership.
              </p>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Our work connects strategy to implementation. We believe modernization succeeds when data is trusted, ownership is clear, architecture is intentional, and technology is grounded in real operational needs.
              </p>

              <div className="mt-8 grid gap-3">
                {[
                  "Trusted data and governance foundations",
                  "Scalable systems aligned to operational reality",
                  "Practical readiness for future intelligence and automation",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-white"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#4C96C1]">
                Who We Serve
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
                Built for institutions that need reliable structure beneath
                critical operations
              </h2>
              <ul className="mt-6 space-y-4 text-base leading-7 text-slate-600">
                {whoWeServe.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#4C96C1]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
                Our Vision
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
                Trusted data, scalable architecture, and operational clarity
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                We believe durable transformation starts with trusted data, scalable architecture, and operating models people can actually use.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-600">
                Our vision is to help organizations see their data clearly, govern it responsibly, connect it across systems, and use it confidently for operations, analytics, automation, and AI.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="rounded-[2rem] bg-gradient-to-r from-[#4C96C1] to-emerald-600 px-8 py-12 text-white shadow-[0_20px_60px_rgba(76,150,193,0.22)] md:px-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
            Define the Right Foundation for Your Organization
          </p>
          <h2 className="mt-3 max-w-4xl text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            Whether you are modernizing enterprise data, establishing governance, resolving master-data fragmentation, integrating systems, or preparing for AI, JaxMckobe Consulting can help define the right path forward.
          </h2>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Schedule a Consultation
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-24 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#4C96C1]">
              Contact
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
              Start the conversation
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              To discuss a commercial, public-sector, or teaming engagement with JaxMckobe Consulting,
              please get in touch.
            </p>

            <div className="mt-8 space-y-4 text-sm text-slate-700">
              <div className="mt-4 space-y-2 text-sm text-slate-600">
                <p>
                  <span className="font-semibold text-slate-900">Email:</span>{" "}
                  info@jaxmckobe.com
                </p>
                <p>
                  <span className="font-semibold text-slate-900">
                    Response Time:
                  </span>{" "}
                  Within 24 hours
                </p>
              </div>
              <div className="mt-6 space-y-2 text-sm text-slate-600">
                <p className="font-semibold tracking-wide text-slate-900">
                  OFFICES
                </p>
                <p>Houston, Texas (USA)</p>
                <p>Douala, Cameroon</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <form className="grid gap-4">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#4C96C1]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#4C96C1]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Organization
                </label>
                <input
                  type="text"
                  placeholder="Organization name"
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#4C96C1]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your needs"
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#4C96C1]"
                />
              </div>

              <button
                type="button"
                className="mt-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} JaxMckobe Consulting. All rights reserved.</div>
          <div className="flex gap-5">
            <a href="#capabilities" className="hover:text-slate-700">
              Capabilities
            </a>
            <a href="#government" className="hover:text-slate-700">
              Government
            </a>
            <a href="#about" className="hover:text-slate-700">
              About
            </a>
            <a href="#contact" className="hover:text-slate-700">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
