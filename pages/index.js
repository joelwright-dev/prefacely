import { PlayerPlay, ChevronDown, Check } from "tabler-icons-react";

export default function Home() {
  return (
    <>
      <div className="bg-gradient-to-b from-white to-slate-200 flex flex-col items-center content-center justify-center pt-40">
        <h1 className="text-8xl font-bold">
          A new era of
          <br />
          <span className="text-blue-500">lead generation</span>
        </h1>
        <ul className="flex gap-2 mt-8 uppercase font-bold text-sm items-center content-center justify-center">
          <li>Extract lists of leads</li>
          <li>•</li>
          <li>Enrich data & emails</li>
          <li>•</li>
          <li>Send outreach campaigns</li>
        </ul>
        <div className="bg-white rounded-3xl p-1 w-96 shadow flex justify-between pl-4 mt-12">
          <input
            type="text"
            placeholder="Enter your email"
            style={{ outline: "none" }}
          />
          <button className="bg-blue-500 text-white p-2 pl-3 pr-3 rounded-3xl right-0">
            Start free trial
          </button>
        </div>
        <p className="text-slate-500 mt-4 mb-8">No credit card required</p>
        <button className="flex border-2 border-blue-500 p-2 pl-4 pr-4 rounded-3xl text-blue-500 items-center gap-1">
          <PlayerPlay size={18} />
          Watch video
        </button>
        <ChevronDown size={50} className="mt-20 mb-20" />
      </div>
      <div className="bg-white flex flex-col p-12 items-center">
        <p className="text-blue-500 uppercase font-bold text-sm">
          Trusted by 100,000+ businesses
        </p>
        <div className="flex gap-10 mt-10">
          <img src="https://unsplash.it/g/100/50/" />
          <img src="https://unsplash.it/g/100/50/" />
          <img src="https://unsplash.it/g/100/50/" />
          <img src="https://unsplash.it/g/100/50/" />
          <img src="https://unsplash.it/g/100/50/" />
          <img src="https://unsplash.it/g/100/50/" />
        </div>
      </div>
      <div className="bg-gradient-to-b from-slate-200 to-stone-200 flex flex-col items-center content-center justify-center pt-32">
        <h2 className="text-5xl font-bold">Why Prefacely?</h2>
        <div className="flex sm:flex-col lg:flex-row gap-10 mt-20">
          <div className="flex flex-col max-w-lg">
            <p className="text-blue-500 uppercase font-bold text-sm">
              Powerful lead gen solutions
            </p>
            <h3 className="font-bold text-3xl pt-5 pb-5">
              Generate leads from all major networks & websites
            </h3>
            <ul className="flex flex-col gap-1">
              <li className="flex">
                <Check color="#32CD32" /> 100+ ready-made automations
              </li>
              <li className="flex">
                <Check color="#32CD32" /> Prebuilt workflows for all your goals
              </li>
              <li className="flex">
                <Check color="#32CD32" /> Import data seamlessly to any CRM
              </li>
            </ul>
          </div>
          <img src="https://unsplash.it/g/500/300/" />
        </div>
        <div className="flex sm:flex-col lg:flex-row gap-10 mt-48">
          <img
            src="https://unsplash.it/g/500/300/"
            className="lg:block sm:hidden"
          />
          <div className="flex flex-col max-w-lg">
            <p className="text-blue-500 uppercase font-bold text-sm">
              Powerful lead gen solutions
            </p>
            <h3 className="font-bold text-3xl pt-5 pb-5">
              Generate leads from all major networks & websites
            </h3>
            <ul className="flex flex-col gap-1">
              <li className="flex">
                <Check color="#32CD32" /> 100+ ready-made automations
              </li>
              <li className="flex">
                <Check color="#32CD32" /> Prebuilt workflows for all your goals
              </li>
              <li className="flex">
                <Check color="#32CD32" /> Import data seamlessly to any CRM
              </li>
            </ul>
          </div>
          <img
            src="https://unsplash.it/g/500/300/"
            className="lg:hidden sm:block"
          />
        </div>
        <div className="flex sm:flex-col lg:flex-row gap-10 mt-48">
          <div className="flex flex-col max-w-lg">
            <p className="text-blue-500 uppercase font-bold text-sm">
              Powerful lead gen solutions
            </p>
            <h3 className="font-bold text-3xl pt-5 pb-5">
              Generate leads from all major networks & websites
            </h3>
            <ul className="flex flex-col gap-1">
              <li className="flex">
                <Check color="#32CD32" /> 100+ ready-made automations
              </li>
              <li className="flex">
                <Check color="#32CD32" /> Prebuilt workflows for all your goals
              </li>
              <li className="flex">
                <Check color="#32CD32" /> Import data seamlessly to any CRM
              </li>
            </ul>
          </div>
          <img src="https://unsplash.it/g/500/300/" />
        </div>
        <div className="bg-white rounded-xl">
          <p>Ready to boost your growth?</p>
          <p>14-day free trial - no credit card required</p>
          <div className="bg-white rounded-3xl p-1 w-96 shadow flex justify-between pl-4 mt-12">
            <input
              type="text"
              placeholder="Enter your email"
              style={{ outline: "none" }}
            />
            <button className="bg-blue-500 text-white p-2 pl-3 pr-3 rounded-3xl right-0">
              Start free trial
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
