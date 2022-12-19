import { PlayerPlay, ChevronDown, Check } from "tabler-icons-react";
import DropdownAlt from "../components/DropdownAlt";
import Chart from "../public/chart.svg";
import Email from "../public/email.svg";
import Rocket from "../public/rocket.svg";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import Modal from "../components/Modal";
import emailjs from "@emailjs/browser";

export default function Home() {
  const [modal, setModal] = useState(false);
  const [personalization, setPersonalization] = useState("");
  const [calculateData, setCalculateData] = useState({});

  const submitCalculator = (event) => {
    event.preventDefault();
    setModal(true);
    setCalculateData({
      coldMessages: event.target.coldmessages.value,
      industry: event.target.industry.value,
      openRate: event.target.openrate.value,
      ctr: event.target.ctr.value,
      personalization: personalization,
    });
  };

  const submitPricing = (event) => {
    event.preventDefault();
    const formdata = {
      name: event.target.name.value,
      email: event.target.email.value,
      company: event.target.company.value,
      prospects: event.target.prospects.value,
    };
    emailjs
      .send(
        "service_4ws5mht",
        "template_znhfkmm",
        formdata,
        "dFICM-93zaiNVoeX8"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (err) => {
          console.log("FAILED!", err);
        }
      );
  };

  return (
    <>
      <div className="bg-gradient-to-b from-white to-slate-200 flex flex-col items-center content-center justify-center pt-40 h-screen lg:-mt-20">
        <h1 className="lg:text-8xl text-4xl sm:text-6xl font-bold text-center">
          A new era of
          <br />
          <span className="text-blue-500">cold outreach!</span>
        </h1>
        <ul className="flex-col sm:flex-row flex gap-2 mt-8 uppercase font-bold text-sm items-center content-center justify-center">
          <li>Get emails opened</li>
          <li className="hidden sm:flex">•</li>
          <li>Enrich email content</li>
          <li className="hidden sm:flex">•</li>
          <li>Connect with recipients</li>
        </ul>
        <div className="mt-12 text-center max-w-sm px-5 sm:max-w-2xl">
          Boost open rates of your cold emails and messages through 100%
          personalized introductory one-liners to your individual recipients.
        </div>
        <ChevronDown size={50} className="mt-20 mb-20" />
      </div>
      <div className="bg-gradient-to-b from-white to-stone-200 flex flex-col items-center content-center justify-center pt-32">
        <div
          id="the-proof"
          className="flex flex-col sm:flex-row gap-10 mt-20 w-full px-10 sm:w-auto"
        >
          <div className="flex flex-col">
            <p className="text-blue-500 uppercase font-bold text-sm">
              The Proof
            </p>
            <h3 className="font-bold text-3xl pt-5 pb-5">
              Our clients success with Prefacely
            </h3>
            <ul className="flex flex-col gap-1">
              <li className="flex">
                Open Rate Improvement:
                <span className="text-blue-500 pl-1 font-bold">+40%</span>
              </li>
              <li className="flex">
                CTR Improvement:
                <span className="text-blue-500 pl-1 font-bold">+30%</span>
              </li>
              <li className="flex">
                Direct ROI Improvement for Email:
                <span className="text-blue-500 pl-1 font-bold">+50%</span>
              </li>
              <li className="flex">
                Time Saved Per Month:
                <span className="text-blue-500 pl-1 font-bold">+60%</span>
              </li>
            </ul>
          </div>
          <Chart className="max-w-xs sm:max-w-sm" />
        </div>
        <div
          id="improve-your-cold-communications"
          className="bg-white rounded-xl flex p-7 gap-7 mt-32 mb-32 flex-col mx-5"
        >
          <div>
            <p className="text-2xl font-bold">
              Improve Your Cold Communications
            </p>
            <p className="text-slate-500">
              Find out how Prefacely can improve your cold message open rates
            </p>
          </div>
          <form className="flex flex-col gap-2" onSubmit={submitCalculator}>
            <div className="form-group flex flex-col sm:flex-row">
              <p className="flex-none">
                Number of cold messages sent per month:
              </p>
              <input
                type="text"
                name="coldmessages"
                style={{ outline: "none" }}
                className="border-b-2 border-blue-500 sm:ml-2 flex-1"
              />
            </div>
            <div className="form-group flex flex-col sm:flex-row">
              <p className="flex-none">Your Industry:</p>
              <input
                type="text"
                name="industry"
                style={{ outline: "none" }}
                className="border-b-2 border-blue-500 sm:ml-2 flex-1"
              />
            </div>
            <div className="form-group flex flex-col sm:flex-row">
              <p className="flex-none">Current (Avg) open rate:</p>
              <div className="flex w-full">
                <input
                  type="text"
                  name="openrate"
                  style={{ outline: "none" }}
                  className="border-b-2 border-blue-500 sm:ml-2 flex-1"
                />
                <p className="flex-none">%</p>
              </div>
            </div>
            <div className="form-group flex flex-col sm:flex-row">
              <p className="flex-none">Current (Avg) CTR:</p>
              <div className="flex w-full">
                <input
                  type="text"
                  name="ctr"
                  style={{ outline: "none" }}
                  className="border-b-2 border-blue-500 sm:ml-2 flex-1"
                />
                <p className="flex-none">%</p>
              </div>
            </div>
            <div className="form-group flex">
              <DropdownAlt
                text="What is your current level of personalization in your messages?"
                data={[
                  {
                    text: "Little: we are not actively using full personalization in our cold messages",
                    click: () =>
                      setPersonalization(
                        "Little: we are not actively using full personalization in our cold messages"
                      ),
                  },
                  {
                    text: "Some: we try to use some personalization but this is quite limited",
                    click: () =>
                      setPersonalization(
                        "Some: we try to use some personalization but this is quite limited"
                      ),
                  },
                  {
                    text: "A lot: we are using personalization in our messages, but not fully and completely to each prospect individually",
                    click: () =>
                      setPersonalization(
                        "A lot: we are using personalization in our messages, but not fully and completely to each prospect individually"
                      ),
                  },
                  {
                    text: "Total: we believe we are using complete personalization in our cold messages to each prospect individually",
                    click: () =>
                      setPersonalization(
                        "Total: we believe we are using complete personalization in our cold messages to each prospect individually"
                      ),
                  },
                ]}
                className="px-0 w-full"
              />
            </div>
            <button
              className="bg-blue-500 text-white p-2 pl-3 pr-3 rounded-3xl w-32 mx-auto mt-4"
              type="submit"
            >
              Go
            </button>
          </form>
        </div>
      </div>
      <div className="bg-gradient-to-b from-white to-slate-200 flex flex-col items-center content-center justify-center pt-20">
        <div
          id="the-results"
          className="flex flex-col sm:flex-row gap-10 mt-20 w-full sm:w-auto px-10"
        >
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
              Forget &quot;Hope you are well?&quot;, &quot;Can we
              discuss...&quot;, &quot;Have you seen...&quot;, and other
              generalised, weak, and irrelevant opening approaches which land
              you in the trash folder automatically.
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
          <Email className="max-w-xs sm:max-w-sm" />
        </div>
        <div
          id="the-process"
          className="flex flex-col sm:flex-row w-full px-10 gap-10 mt-20 sm:w-auto"
        >
          <Rocket className="hidden sm:block max-w-xs sm:max-w-sm" />
          <div className="flex flex-col max-w-lg">
            <p className="text-blue-500 uppercase font-bold text-sm">
              Prefacely is simple
            </p>
            <h3 className="font-bold text-3xl pt-5 pb-5">The process</h3>
            <p>
              <span className="text-blue-500 font-bold">Step 1:</span> You
              supply us with your list of individual prospects, then sit back
              and let us work our magic.
              <br />
              <br />
              <span className="text-blue-500 font-bold">Step 2:</span> Prefacely
              uses its own technology, systems, and dedicated team to retrieve
              all the personalized insights for each prospect, converting them
              to introductory one liners.
              <br />
              <br />
              <span className="text-blue-500 font-bold">Step 3:</span> You add
              the best one liner to your message, and witness the true potential
              of cold marketing through messaging.
              <br />
              <br />
              You&apos;ll <span className="text-blue-500 font-bold">
                smash
              </span>{" "}
              through your existing open rates and drive a higher CTR from your
              cold emails and messages.
            </p>
          </div>
          <Rocket className="visible sm:hidden max-w-xs sm:max-w-sm" />
        </div>
        <div
          id="pricing"
          className="bg-white rounded-xl flex p-7 gap-7 mt-32 mb-32 flex-col mx-5"
        >
          <div>
            <p className="text-2xl font-bold">Pricing</p>
            <p className="text-slate-500">
              Prefacely provides a prospect-per-month pricing rate,{" "}
              <span className="text-blue-500 font-bold">
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
          <form className="flex gap-2 flex-col" onSubmit={submitPricing}>
            <div className="form-group flex flex-col sm:flex-row">
              <p className="flex-none">Name:</p>
              <input
                type="text"
                name="name"
                style={{ outline: "none" }}
                className="border-b-2 border-blue-500 sm:ml-2 flex-1"
              />
            </div>
            <div className="form-group flex flex-col sm:flex-row">
              <p className="flex-none">Email Address:</p>
              <input
                type="text"
                name="email"
                style={{ outline: "none" }}
                className="border-b-2 border-blue-500 sm:ml-2 flex-1"
              />
            </div>
            <div className="form-group flex flex-col sm:flex-row">
              <p className="flex-none">Company Name:</p>
              <input
                type="text"
                name="company"
                style={{ outline: "none" }}
                className="border-b-2 border-blue-500 sm:ml-2 flex-1"
              />
            </div>
            <div className="form-group flex flex-col sm:flex-row">
              <p className="flex">
                Guesstimate, how many prospects per month do you need prefacely
                for?
              </p>
              <input
                type="text"
                name="prospects"
                style={{ outline: "none" }}
                className="border-b-2 border-blue-500 sm:ml-2 flex-1"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 pl-3 pr-3 rounded-3xl w-32 mx-auto mt-4"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="bg-white flex flex-col p-12 items-center">
        <p className="text-blue-500 uppercase font-bold text-sm">
          Clients Love Prefacely
        </p>
        <div className="flex gap-10 mt-10 max-w-3xl">
          <p>
            &quot;Before, our cold messages were bland and our open rate was
            less than 20%. With prefacely, we now average an open rate of 55%,
            which has had a direct impact on the ROI of our cold email
            approach.&quot;
            <br />
            <br />- Tony P, Marketing Manager of Bluehawk Design
          </p>
        </div>
      </div>
      <div className="bg-gradient-to-b to-white from-slate-200 flex flex-col items-center content-center justify-center p-10 sm:p-20">
        <p className="max-w-3xl">
          Prefacely provides short, specific, and 100% personalized insights for
          cold messages sent to prospects which drives higher open and
          click-through rates.
          <br />
          <br />
          Email us:{" "}
          <a href="mailto:info@prefacely.com" className="text-blue-500">
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

      <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
        {modal && (
          <Modal
            closeModal={() => setModal(false)}
            title="Calculating..."
            body="Prefacely will now find out how we can improve your cold message open rates"
            button="Calculate"
            email={true}
            formdata={calculateData}
          />
        )}
      </AnimatePresence>
    </>
  );
}
