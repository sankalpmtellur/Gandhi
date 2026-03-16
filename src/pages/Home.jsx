import SectionHeading from "../components/SectionHeading.jsx";
import StatCard from "../components/StatCard.jsx";
import TimelineItem from "../components/TimelineItem.jsx";
import StoryCard from "../components/StoryCard.jsx";

import heroImage from "../assets/MG1.png";
import youngGandhi from "../assets/YoundGandhi.png";
import phases from "../assets/AllphasesofGandhi.png";
import march from "../assets/GandhiOnDandiMarch.png";
import threeMonkeys from "../assets/3MonkeysofGandhi.png";
import charkha from "../assets/CharakaofGandhi.png";
import specs from "../assets/SpecsofGandhi.png";
import portrait from "../assets/MG2.png";

const Home = () => {
  return (
    <div className="bg-paper">
      <section id="story" className="section">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-7">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-10 bg-ink/40" />
            </div>
            <h1 className="animate-fade-up font-display text-4xl leading-[1.1] text-ink md:text-6xl">
              MK Gandhi: a life of truth and courage.
            </h1>
            <p className="max-w-xl text-base text-ink/70 md:text-lg">
              From a shy student in Porbandar to a global symbol of nonviolent resistance, Gandhi's
              journey is a study in moral clarity, disciplined action, and radical compassion.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#journey"
                className="rounded-2xl border border-ink/40 bg-white px-7 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-ink shadow-soft transition hover:border-ink hover:bg-paper"
              >
                Explore Journey
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-saffron/30 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2.5rem] border border-ink/10 bg-white/60 shadow-soft">
              <img
                src={heroImage}
                alt="Mahatma Gandhi portrait"
                className="h-full w-full object-cover animate-float"
              />
            </div>
            <div className="mt-6 rounded-2xl border border-ink/10 bg-white/80 p-4 text-sm text-ink/70 shadow-soft">
              “Live as if you were to die tomorrow. Learn as if you were to live forever.”
            </div>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="mx-auto grid w-full max-w-6xl gap-6 px-6 md:grid-cols-4">
          <StatCard
            label="Satya"
            value="Truth"
            detail="The compass of his leadership, grounding every decision in honesty."
          />
          <StatCard
            label="Ahimsa"
            value="Nonviolence"
            detail="Strength through restraint, refusing harm while demanding justice."
          />
          <StatCard
            label="Swaraj"
            value="Self-rule"
            detail="Freedom built through self-discipline, community, and dignity."
          />
          <StatCard
            label="Sewa"
            value="Service"
            detail="A life devoted to the uplift of the most vulnerable."
          />
        </div>
      </section>

      <section id="journey" className="section bg-white/50">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6">
          <SectionHeading
            eyebrow="Journey"
            title="The long road to freedom"
            subtitle="Gandhi's life was a tapestry of experiments with truth, stitched together by empathy and relentless discipline."
          />
          <div className="space-y-10">
            <TimelineItem
              year="1869"
              title="Early life in Porbandar"
              description="Born into a family of integrity and faith, Gandhi’s childhood nurtured a quiet resolve and a deep curiosity about the moral life."
              image={youngGandhi}
            />
            <TimelineItem
              year="1893"
              title="South Africa & the birth of Satyagraha"
              description="Facing discrimination abroad, he forged the practice of nonviolent resistance—standing firm without hatred, transforming injustice into dialogue."
              image={phases}
            />
            <TimelineItem
              year="1915"
              title="Returning to India"
              description="Gandhi immersed himself in rural India, traveling by rail and foot, listening to farmers, workers, and families. His leadership grew from listening first."
              image={portrait}
            />
          </div>
        </div>
      </section>

      <section id="philosophy" className="section">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Mindset"
              title="Experiments with truth"
              subtitle="Gandhi framed his life as a series of experiments—constant refining of thought, behavior, and impact."
            />
            <div className="grid gap-4">
              <div className="rounded-2xl border border-ink/10 bg-white/70 p-6 shadow-soft">
                <h3 className="font-display text-xl">Nonviolence as strategy</h3>
                <p className="mt-2 text-sm text-ink/70">
                  Ahimsa was not passive. It was disciplined resistance that required courage,
                  training, and a refusal to dehumanize opponents.
                </p>
              </div>
              <div className="rounded-2xl border border-ink/10 bg-white/70 p-6 shadow-soft">
                <h3 className="font-display text-xl">Self-reliance & simplicity</h3>
                <p className="mt-2 text-sm text-ink/70">
                  Gandhi spun his own cloth and championed village industries, teaching that
                  independence begins with everyday choices.
                </p>
              </div>
              <div className="rounded-2xl border border-ink/10 bg-white/70 p-6 shadow-soft">
                <h3 className="font-display text-xl">Unity across differences</h3>
                <p className="mt-2 text-sm text-ink/70">
                  He fought for religious harmony, speaking against caste prejudice and building
                  coalitions rooted in empathy.
                </p>
              </div>
            </div>
          </div>
          <div className="grid gap-6">
            <div className="relative overflow-hidden rounded-[2rem] border border-ink/10 shadow-soft">
              <img
                src={threeMonkeys}
                alt="Three monkeys of Gandhi"
                className="h-80 w-full object-cover md:h-[22rem]"
              />
              <div className="absolute bottom-4 left-4 rounded-full bg-paper/90 px-4 py-2 text-xs uppercase tracking-[0.3em] text-ink/60">
                See no evil · Hear no evil · Speak no evil
              </div>
            </div>
            <div className="relative overflow-hidden rounded-[2rem] border border-ink/10 shadow-soft">
              <img
                src={charkha}
                alt="Charkha symbol"
                className="h-80 w-full object-cover md:h-[22rem]"
              />
              <div className="absolute bottom-4 left-4 rounded-full bg-paper/90 px-4 py-2 text-xs uppercase tracking-[0.3em] text-ink/60">
                The wheel of self-reliance
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white/60">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-6 md:grid-cols-[0.9fr_1.1fr]">
          <img
            src={march}
            alt="Gandhi on the Dandi March"
            className="h-80 w-full rounded-[2rem] object-cover shadow-soft"
          />
          <div className="space-y-5">
            <SectionHeading
              eyebrow="Movement"
              title="The salt march"
              subtitle="In 1930, Gandhi’s 240-mile march to the sea became a global symbol of peaceful civil disobedience."
            />
            <p className="text-sm text-ink/70 md:text-base">
              Walking with villagers, Gandhi turned a simple act—making
              salt—into a revolutionary statement against unjust laws. The march
              showed that ordinary people, moving together with discipline,
              could shift the course of history.
            </p>
          </div>
        </div>
      </section>

      <section id="legacy" className="section">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6">
          <SectionHeading
            eyebrow="Legacy"
            title="Enduring influence"
            subtitle="Gandhi’s approach informs modern movements for justice, sustainability, and ethical leadership."
          />
          <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
            <div className="grid gap-6">
              <StoryCard
                title="The power of moral leadership"
                description="Gandhi’s influence reaches into civil rights movements worldwide, reminding leaders that integrity and empathy are not optional extras."
                image={specs}
              />
              <StoryCard
                title="A global icon"
                description="From classrooms to protest lines, his image stands for the courage to refuse injustice without hatred."
                image={portrait}
              />
            </div>
            <div className="rounded-[2rem] border border-ink/10 bg-ink text-paper shadow-soft">
              <div className="flex h-full flex-col justify-between gap-6 p-8">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-paper/60">
                    In Today’s World
                  </p>
                  <h3 className="mt-4 font-display text-3xl">
                    A modern Gandhi would build communities that lead with
                    conscience.
                  </h3>
                  <p className="mt-4 text-sm text-paper/70">
                    Ethical business, climate justice, and restorative politics
                    all echo Gandhi’s insistence that means matter just as much
                    as ends.
                  </p>
                </div>
                <div className="rounded-2xl bg-paper/10 p-4 text-xs uppercase tracking-[0.3em]">
                  Be the change. Start locally. Lead with empathy.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="cta" className="section bg-sand">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 md:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Stories"
              title="Quiet strength, lasting change"
              subtitle="Gandhi’s life was full of small acts that became large movements. Here are moments that defined his moral compass."
            />
            <div className="grid gap-6 sm:grid-cols-2">
              <StoryCard
                title="The train incident"
                description="A moment of discrimination in South Africa sparked his lifelong commitment to dignity for all."
                image={youngGandhi}
              />
              <StoryCard
                title="The spinning wheel"
                description="The charkha became a daily ritual—an emblem of self-reliance and economic justice."
                image={charkha}
              />
            </div>
          </div>
          <div className="space-y-6">
            <StoryCard
              title="The march to the sea"
              description="Thousands walked beside him, proving that discipline and unity can dismantle unjust power."
              image={march}
            />
            <div className="rounded-2xl border border-ink/10 bg-white/70 p-6 shadow-soft">
              <p className="text-xs uppercase tracking-[0.3em] text-ink/50">
                Final Thought
              </p>
              <p className="mt-4 font-display text-2xl">
                “Faith is not something to grasp; it grows through the courage
                to act.”
              </p>
              <p className="mt-4 text-sm text-ink/70">
                Gandhi’s legacy is less about monuments and more about the daily
                habit of choosing empathy, courage, and truth.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
