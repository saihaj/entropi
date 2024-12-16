import { RequestDemo } from '@/components/request-demo';
import { cn } from '@/lib/utils';
import Image from 'next/image';

function Nav() {
  return (
    <nav className="sticky top-0 z-10">
      <div className="max-w-screen-lg pt-4 mx-4 backdrop-blur-lg lg:mx-auto">
        <div className="border border-secondary bg-background rounded-2xl">
          <ul className="flex items-center p-2 px-4 justify-between">
            <li className="font-heading font-bold cursor-default">Entropi</li>
            <RequestDemo label="Request Demo" />
          </ul>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="mx-auto relative flex flex-col gap-2 justify-center items-center lg:gap-4 lg:mt-36 mt-28 text-center max-w-[660px]">
      <h1 className="font-heading text-4xl md:text-6xl text-balance tracking-tighter font-bold">
        10x Your Outbound.
      </h1>
      <h2 className="text-md md:text-xl">
        Unlock the power of hyper-personalized outbound to transform your sales
        and drive meaningful connections.
      </h2>
      <RequestDemo className="max-w-28 h-10" label="Get Started" />
    </section>
  );
}

const STRATEGIES = [
  {
    title: 'Goal-Oriented Strategy',
    description: 'Designed to align with your sales objectives and personas.',
  },
  {
    title: 'Multi-Channel Outreach',
    description:
      'Ensures your message gets delivered where your prospects are most active.',
  },
  {
    title: 'Modern Tech Advantage',
    description:
      'Future-proof your sales strategy with cutting-edge capabilities.',
  },
];

function ModernTeams() {
  return (
    <section className="flex relative">
      <div className="flex mx-4 md:mx-auto flex-col gap-2 items-center sm:items-start lg:gap-4 lg:my-72 my-48 max-w-screen-lg w-full lg:w-[1024px]">
        <h1 className="font-heading text-4xl md:text-6xl text-balance tracking-tighter font-bold sm:text-left text-center">
          Built for modern <br /> B2B Selling
        </h1>
        <p className="text-md md:text-xl max-w-[600px] mt-8">
          Entropi is purpose-built for modern B2B sales teams, prioritizing
          qualified outreach, rapid execution, and innovative strategies. It
          equips your team with the tools to connect with key decision-makers,
          personalize outreach, and close deals faster than ever.
        </p>
        <div className="border border-b lg:w-2/3 w-full border-secondary my-8" />
        <div className="flex flex-col gap-16 w-full">
          {STRATEGIES.map((strategy, i) => (
            <div
              key={`${strategy.title}-${i}`}
              className="flex sm:gap-36 gap-0 justify-between sm:justify-normal"
            >
              <h2 className="font-heading text-md md:text-lg font-bold max-w-44">
                {strategy.title}
              </h2>
              <p className="max-w-64 text-md md:text-lg">
                {strategy.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="hidden lg:block absolute bottom-10 right-0 w-[496px] h-full">
        <Image
          src="/images/modern-teams.svg"
          alt="Modern Teams Background Illustration"
          fill
        />
      </div>
    </section>
  );
}

const STEPS = [
  {
    title: 'Define Your Goals',
    description:
      'Tell us what you’re aiming to achieve. Define your target persona and objectives, and we’ll use this input, combined with your account data, to research and curate a tailored list of potential leads.',
    image: '/images/define-goals.svg',
  },
  {
    title: 'Gather Account Data',
    description:
      'Connect your account-level information from tools like Clay, Salesforce, or even a Google Sheet. We analyze the data to understand how these accounts engage with your company.',
    image: '/images/gather-data.svg',
  },
  {
    title: 'Identify Key Targets',
    description:
      'Our intelligence engine analyzes engagement patterns and account data to identify the top champions or decision-makers. This ensures you focus on the most promising leads, maximizing your outreach impact and conversion potential.',
    image: '/images/key-targets.svg',
  },
  {
    title: 'Craft Hyperfocused Messaging',
    description:
      'We craft personalized outreach messages optimized for LinkedIn, email, and more, while also offering custom landing pages to create a unique, tailored experience that sets your outreach apart.',
    image: '/images/hyperfocused.svg',
  },
];

function formatNumberWithLeadingZero(num: number) {
  return num.toString().padStart(2, '0');
}

function Introduction() {
  return (
    <section className="flex flex-col gap-2 items-center lg:gap-4 mb-20 max-w-screen-lg w-full mx-auto">
      <h1 className="font-heading text-4xl md:text-6xl text-balance tracking-tighter font-bold text-center">
        Introducing Entropi
      </h1>
      <p className="text-center max-w-2xl text-md md:text-xl">
        Outdated prospecting tools hold your team back. Entropi empowers you to
        find the right leads and connect with precision, turning your outbound
        efforts into real growth. With four simple steps, we help you focus on
        high-impact leads and close deals faster.
      </p>
      <div>
        {STEPS.map((step, i) => (
          <div
            key={`${step.title}-${i}`}
            className={cn(
              'flex gap-4 lg:gap-20 items-center lg:items-start my-20 flex-col',
              i % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row',
            )}
          >
            <div className="flex flex-col my-auto gap-4 md:gap-10 justify-center md:w-1/2">
              <div
                className={cn(
                  'flex gap-4',
                  i % 2 === 0
                    ? 'md:flex-row md:items-center flex-col items-center'
                    : 'flex-col md:items-start items-center',
                )}
              >
                <div className="bg-text text-background text-4xl md:text-6xl font-heading font-bold p-8 md:p-12 rounded-2xl tracking-tight">
                  {formatNumberWithLeadingZero(i + 1)}
                </div>
                <h2 className="md:text-left text-center font-heading font-bold tracking-tight text-2xl md:text-4xl md:max-w-72">
                  {step.title}
                </h2>
              </div>
              <p className="text-balance text-center md:text-left">
                {step.description}
              </p>
            </div>
            <div className="hidden md:block bg-secondary w-full md:w-1/2 h-[460px] rounded-2xl relative">
              <Image
                src={step.image}
                alt={step.title}
                fill
                className="p-16"
                priority={false}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-background">
      <div className="px-4 max-w-screen-lg mx-auto flex flex-col md:flex-row justify-between md:items-center gap-10">
        <h3 className="font-heading text-4xl md:text-6xl text-balance tracking-tighter font-bold">
          Outreach Smarter.
          <br /> Close Faster.
        </h3>
        <RequestDemo className="max-w-28 h-10" label="Get Started" />
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col w-full">
      <Nav />
      <main className="flex flex-col flex-1">
        <div className="max-w-screen-lg lg:mx-auto mx-4">
          <Hero />
        </div>
        <ModernTeams />
        <div className="max-w-screen-lg lg:mx-auto mx-4">
          <Introduction />
        </div>
        <CTA />
      </main>

      <footer className="max-w-screen-lg mx-4 lg:mx-auto relative mb-2">
        <span className="text-xs">
          © {new Date().getFullYear()} Entropi. All rights reserved.
        </span>
      </footer>
    </div>
  );
}
