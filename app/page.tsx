const roleSpectrum = [
  {
    role: "Frontend",
    summary: "사용자가 체감하는 흐름을 설계하고, 빠른 실험으로 경험을 다듬습니다.",
  },
  {
    role: "Backend",
    summary: "핵심 기능을 안정적으로 연결해 서비스의 뼈대를 만듭니다.",
  },
  {
    role: "Data / SAP",
    summary: "비즈니스 규칙을 데이터 구조로 번역해 의사결정을 단단하게 만듭니다.",
  },
  {
    role: "Infrastructure",
    summary: "배포와 운영을 자동화해 팀이 제품 문제에 집중하게 합니다.",
  },
];

const buildLoop = [
  "문제의식 정렬",
  "MVP 범위 확정",
  "기획 + 설계",
  "개발 + 테스트",
  "릴리스 + 회고",
];

const operatingRules = [
  "참여는 자율, 몰입은 책임",
  "기록과 공유를 남겨 팀의 자산으로 전환",
  "직군과 경력보다 문제 해결 태도를 우선",
  "짧은 이벤트보다 반복 가능한 루틴을 설계",
];

const workSpaces = [
  {
    place: "Yongsan Base",
    detail: "오프라인에서는 화이트보드 앞에서 빠르게 가설을 맞추고 즉시 역할을 분담합니다.",
  },
  {
    place: "GitHub Workspace",
    detail: "온라인에서는 이슈, 문서, 코드 리뷰를 하나의 히스토리로 관리합니다.",
  },
];

export default function Home() {
  return (
    <div className="relative overflow-x-hidden">
      <div className="pointer-events-none absolute -left-24 top-24 h-52 w-52 rounded-full bg-[rgba(15,118,110,0.14)] blur-3xl animate-drift" />
      <div className="pointer-events-none absolute -right-16 top-[28rem] h-64 w-64 rounded-full bg-[rgba(228,139,43,0.16)] blur-3xl animate-drift" />

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-5 py-10 md:px-10 md:py-14">
        <section className="soft-card grid-mesh relative overflow-hidden rounded-3xl p-6 md:p-10 animate-fade-up">
          <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full border border-[rgba(15,118,110,0.2)]" />
          <div className="absolute right-12 top-16 h-3 w-3 rounded-full bg-[var(--accent)]" />

          <p className="badge inline-flex w-fit rounded-full px-4 py-1 text-xs font-semibold tracking-[0.18em] uppercase">
            UTOOKs Project
          </p>

          <h1 className="display mt-6 text-4xl leading-tight md:text-6xl">
            혼자 시작한 아이디어를
            <br />
            함께 완성하는 팀
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--muted)] md:text-lg">
            우뚝이들(UTOOKs)은 개발자들이 직무 경계를 넘나들며 실제로 동작하는
            서비스를 만드는 실무형 크루입니다. 우리의 기준은 화려한 기획보다
            배포 가능한 결과물입니다.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            <span className="rounded-full border border-[var(--line)] bg-white px-3 py-1.5 font-medium">
              Core Crew 5+
            </span>
            <span className="rounded-full border border-[var(--line)] bg-white px-3 py-1.5 font-medium">
              3-6 Month MVP Sprint
            </span>
            <span className="rounded-full border border-[var(--line)] bg-white px-3 py-1.5 font-medium">
              Build • Test • Release
            </span>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#flow"
              className="rounded-full bg-[var(--brand)] px-5 py-2.5 text-sm font-semibold text-white transition hover:brightness-110"
            >
              진행 방식 보기
            </a>
            <a
              href="#join"
              className="rounded-full border border-[var(--line)] bg-white px-5 py-2.5 text-sm font-semibold transition hover:bg-[var(--brand-soft)]"
            >
              함께할 사람 찾기
            </a>
          </div>
        </section>

        <section id="flow" className="animate-fade-up" style={{ animationDelay: "0.1s" }}>
          <div className="mb-4 flex items-end justify-between gap-4">
            <h2 className="display text-2xl md:text-3xl">우리가 제품을 만드는 루프</h2>
            <p className="text-sm text-[var(--muted)]">짧게 만들고, 빠르게 검증하고, 꾸준히 개선합니다.</p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {buildLoop.map((step, index) => (
              <article key={step} className="soft-card rounded-2xl p-4">
                <p className="text-xs font-semibold tracking-[0.14em] text-[var(--brand)] uppercase">
                  Step {index + 1}
                </p>
                <h3 className="mt-2 text-lg font-semibold">{step}</h3>
              </article>
            ))}
          </div>
        </section>

        <section className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <h2 className="display mb-4 text-2xl md:text-3xl">역할은 다르게, 목표는 하나로</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {roleSpectrum.map(({ role, summary }) => (
              <article key={role} className="soft-card rounded-2xl p-5">
                <p className="text-xs font-semibold tracking-[0.15em] text-[var(--brand)] uppercase">
                  {role}
                </p>
                <p className="mt-2 leading-7 text-[var(--ink)]">{summary}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-4 lg:grid-cols-[1.25fr_1fr]">
          <article className="soft-card rounded-3xl p-6 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <h2 className="display text-2xl md:text-3xl">운영 철학</h2>
            <ul className="mt-4 space-y-3">
              {operatingRules.map((rule) => (
                <li key={rule} className="rounded-xl border border-[var(--line)] bg-white/80 px-4 py-3 text-sm leading-6 md:text-base">
                  {rule}
                </li>
              ))}
            </ul>
          </article>

          <article className="soft-card rounded-3xl p-6 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <h2 className="display text-2xl md:text-3xl">활동 공간</h2>
            <div className="mt-4 space-y-4">
              {workSpaces.map(({ place, detail }) => (
                <div key={place} className="rounded-xl border border-[var(--line)] bg-white/80 p-4">
                  <h3 className="text-sm font-semibold tracking-[0.12em] text-[var(--brand)] uppercase">
                    {place}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{detail}</p>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section
          id="join"
          className="soft-card animate-fade-up rounded-3xl p-6 md:p-8"
          style={{ animationDelay: "0.5s" }}
        >
          <p className="text-xs font-semibold tracking-[0.16em] text-[var(--brand)] uppercase">
            We are open to collaborators
          </p>
          <h2 className="display mt-3 text-3xl leading-tight md:text-4xl">
            완성해본 경험을 쌓고 싶은 개발자를 기다립니다.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-[var(--muted)]">
            아이디어를 실제 서비스로 끝까지 가져가고 싶다면, UTOOKs와 함께하세요.
            우리는 서로의 전문성을 연결해 결과를 남기고, 그 과정을 다시 팀의 성장
            자산으로 만듭니다.
          </p>
        </section>
      </main>
    </div>
  );
}
