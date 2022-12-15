import { PlayerPlay, ChevronDown, Check } from "tabler-icons-react";
import DropdownAlt from "../components/DropdownAlt";

export default function Home() {
  return (
    <>
      <div className="bg-gradient-to-b from-white to-slate-200 flex flex-col items-center content-center justify-center pt-40">
        <h1 className="text-8xl font-bold text-center">
          A new era of
          <br />
          <span className="text-blue-500">cold outreach!</span>
        </h1>
        <ul className="flex gap-2 mt-8 uppercase font-bold text-sm items-center content-center justify-center">
          <li>Get emails opened</li>
          <li>•</li>
          <li>Enrich email content</li>
          <li>•</li>
          <li>Connect with recipients</li>
        </ul>
        <div className="mt-12 text-center">
          Boost open rates of your cold emails and messages through 100%
          personalized introductory one-liners to your individual recipients.
        </div>
        <ChevronDown size={50} className="mt-20 mb-20" />
      </div>
      <div className="bg-gradient-to-b from-white to-stone-200 flex flex-col items-center content-center justify-center pt-32">
        <div className="flex sm:flex-col lg:flex-row gap-10 mt-20">
          <div className="flex flex-col max-w-lg">
            <p className="text-blue-500 uppercase font-bold text-sm">
              The Proof
            </p>
            <h3 className="font-bold text-3xl pt-5 pb-5">
              Our clients success with Prefacely
            </h3>
            <ul className="flex flex-col gap-1">
              <li className="flex">
                Open Rate Improvement:
                <span class="text-blue-500 pl-1 font-bold">+40%</span>
              </li>
              <li className="flex">
                CTR Improvement:
                <span class="text-blue-500 pl-1 font-bold">+30%</span>
              </li>
              <li className="flex">
                Direct ROI Improvement for Email:
                <span class="text-blue-500 pl-1 font-bold">+50%</span>
              </li>
              <li className="flex">
                Time Saved Per Month:
                <span class="text-blue-500 pl-1 font-bold">+60%</span>
              </li>
            </ul>
          </div>
          <img src="https://unsplash.it/g/500/300/" />
        </div>
        <div className="bg-white rounded-xl flex p-7 gap-7 mt-32 mb-32 flex-col">
          <div>
            <p className="text-2xl font-bold">
              Improve Your Cold Communications
            </p>
            <p className="text-slate-500">
              Find out how Prefacely can improve your cold message open rates
            </p>
          </div>
          <div class="flex flex-col gap-2">
            <div className="form-group flex">
              <p class="flex-none">Number of cold messages sent per month:</p>
              <input
                type="text"
                style={{ outline: "none" }}
                class="border-b-2 border-blue-500 ml-2 flex-1"
              />
            </div>
            <div className="form-group flex">
              <p class="flex-none">Your Industry:</p>
              <input
                type="text"
                style={{ outline: "none" }}
                class="border-b-2 border-blue-500 ml-2 flex-1"
              />
            </div>
            <div className="form-group flex">
              <p class="flex-none">Current (Avg) open rate:</p>
              <input
                type="text"
                style={{ outline: "none" }}
                class="border-b-2 border-blue-500 ml-2 flex-1"
              />
              <p class="flex-none">%</p>
            </div>
            <div className="form-group flex">
              <p class="flex-none">Current (Avg) CTR:</p>
              <input
                type="text"
                style={{ outline: "none" }}
                class="border-b-2 border-blue-500 ml-2 flex-1"
              />
              <p class="flex-none">%</p>
            </div>
            <div className="form-group flex">
              <DropdownAlt
                text="What is your current level of personalization in your messages?"
                data={[
                  {
                    text: "Little: we are not actively using full personalization in our cold messages",
                    click: () => console.log("beans"),
                  },
                  {
                    text: "Some: we try to use some personalization but this is quite limited",
                    click: () => console.log("beans"),
                  },
                  {
                    text: "A lot: we are using personalization in our messages, but not fully and completely to each prospect individually",
                    click: () => console.log("beans"),
                  },
                  {
                    text: "Total: we believe we are using complete personalization in our cold messages to each prospect individually",
                    click: () => console.log("beans"),
                  },
                ]}
                dropdownClicked={() => {}}
                className="px-0 w-full"
              />
            </div>
            <button className="bg-blue-500 text-white p-2 pl-3 pr-3 rounded-3xl w-32 mx-auto mt-4">
              Go
            </button>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-b from-white to-slate-200 flex flex-col items-center content-center justify-center pt-20">
        <div className="flex sm:flex-col lg:flex-row gap-10 mt-20">
          <div className="flex flex-col max-w-lg">
            <p className="text-blue-500 uppercase font-bold text-sm">
              The results
            </p>
            <h3 className="font-bold text-3xl pt-5 pb-5">
              Cold emails and messages with a seriously impressive open rate
            </h3>
            <p>
              Did you know that one of the best ways to improve the open rate of
              your cold messages is the immediate relevance of your cold
              messages is the immediate relevance of the first line?
              <br />
              <br />
              Forget "Hope you are well?", "Can we discuss...", "Have you
              seen...", and other generalised, weak, and irrelevant opening
              approaches which land you in the trash folder automatically.
              <br />
              <br />
              The problem?
              <br />
              <br />
              Finding personalized insights and converting them into catchy and
              relevant one liners for every prospect is tricky and time
              consuming.
              <br />
              <br />
              Introducing: Prefacely
              <br />
              <br />
              With Prefacely, we review your prospects and provide short,
              specific, and relevant insights for you to use for all your
              prospects when reaching out to them cold.
              <br />
              <br />
              That means your message becomes super relevant, immediately.
              <br />
              <br />
              Prefacely drives a much higher open rate which gives your
              communication a better chance of driving the next stage in the
              conversation.
              <br />
              <br />
              <span className="text-blue-500 underline">Try us today</span>,
              with a no risk guarantee.
            </p>
          </div>
          <img src="https://unsplash.it/g/500/300/" />
        </div>
        <div className="flex sm:flex-col lg:flex-row gap-10 mt-20">
          <img
            src="https://unsplash.it/g/500/300/"
            class="md:hidden lg:block"
          />
          <div className="flex flex-col max-w-lg">
            <p className="text-blue-500 uppercase font-bold text-sm">
              Prefacely is simple
            </p>
            <h3 className="font-bold text-3xl pt-5 pb-5">The process</h3>
            <p>
              <span class="text-blue-500 font-bold">Step 1:</span> You supply us
              with your list of individual prospects, then sit back and let us
              work our magic.
              <br />
              <br />
              <span class="text-blue-500 font-bold">Step 2:</span> Prefacely
              uses its own technology, systems, and dedicated team to retrieve
              all the personalized insights for each prospect, converting them
              to introductory one liners.
              <br />
              <br />
              <span class="text-blue-500 font-bold">Step 3:</span> You add the
              best one liner to your message, and witness the true potential of
              cold marketing through messaging.
              <br />
              <br />
              You'll <span class="text-blue-500 font-bold">smash</span> through
              your existing open rates and drive a higher CTR from your cold
              emails and messages.
            </p>
          </div>
          <img
            src="https://unsplash.it/g/500/300/"
            class="md:block lg:hidden"
          />
        </div>
        <div className="bg-white rounded-xl flex p-7 gap-7 mt-32 mb-32 flex-col">
          <div>
            <p className="text-2xl font-bold">Pricing</p>
            <p className="text-slate-500">
              Prefacely provides a prospect-per-month pricing rate,{" "}
              <span class="text-blue-500 font-bold">
                starting from just 0.99 per prospect per month.
              </span>
              <br />
              <br />
              All our new clients receive a no risk guarantee for the first
              month. You have nothing to lose (and a lot to win).
              <br />
              <br />
              Complete the request below to receive pricing information:
            </p>
          </div>
          <div class="flex flex-col gap-2">
            <div className="form-group flex">
              <p class="flex-none">Name:</p>
              <input
                type="text"
                style={{ outline: "none" }}
                class="border-b-2 border-blue-500 ml-2 flex-1"
              />
            </div>
            <div className="form-group flex">
              <p class="flex-none">Email Address:</p>
              <input
                type="text"
                style={{ outline: "none" }}
                class="border-b-2 border-blue-500 ml-2 flex-1"
              />
            </div>
            <div className="form-group flex">
              <p class="flex-none">Company Name:</p>
              <input
                type="text"
                style={{ outline: "none" }}
                class="border-b-2 border-blue-500 ml-2 flex-1"
              />
            </div>
            <div className="form-group flex">
              <p class="flex-none">
                Guesstimate, how many prospects per month do you need prefacely
                for?
              </p>
              <input
                type="text"
                style={{ outline: "none" }}
                class="border-b-2 border-blue-500 ml-2 flex-1"
              />
            </div>
            <button className="bg-blue-500 text-white p-2 pl-3 pr-3 rounded-3xl w-32 mx-auto mt-4">
              Submit
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white flex flex-col p-12 items-center">
        <p className="text-blue-500 uppercase font-bold text-sm">Testimonial</p>
        <div className="flex gap-10 mt-10">
          <p>
            "Before, our cold messages were bland and our open rate was less
            than 20%. With prefacely, we now average an open rate of 55%, which
            has had a direct impact on the ROI of our cold email approach."
            <br />
            <br />- Tony P, Marketing Manager of Bluehawk Design
          </p>
        </div>
      </div>
      <div className="bg-gradient-to-b to-white from-slate-200 flex flex-col items-center content-center justify-center p-20">
        <p>
          Prefacely provides short, specific, and 100% personalized insights for
          cold messages sent to prospects which drives higher open and
          click-through rates.
          <br />
          <br />
          Email us:{" "}
          <a href="mailto:info@prefacely.com" class="text-blue-500">
            info@prefacely.com
          </a>
          <br />
          <br />
          Prefacely Limited, registered in England and Wales with company number
          XXX, whose registered office is at XXXX.
          <br />
          <br />
          Copyright &copy;2023
        </p>
      </div>
    </>
  );
}
