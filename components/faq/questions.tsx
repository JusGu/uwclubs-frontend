import React from 'react';
import { getURL } from '@/lib/env';

interface IFAQ {
  question: string;
  answer: JSX.Element;
}

const emailLink = <a href="mailto:jjwgu@uwaterloo.ca">jjwgu@uwaterloo.ca</a>;
const clubsList = <a href={`${getURL()}/clubs`}>{getURL()}/clubs</a>;

export const faq: IFAQ[] = [
  {
    question: "What is this?",
    answer: <p>UWClubs is a calendar designed for UWaterloo students to keep track of various club events.</p>,
  },
  {
    question: "Why did you make this?",
    answer: <p>UWClubs was created out of a personal need to navigate club activities better. Last semester, it was quite challenging to keep up with all the various club events happening around campus. I realized that a good platform where all club events are listed didn't exist, so I started making this. My goal is to hopefully make student life more vibrant and fulfilling by providing a hassle-free way to participate in interesting club activities.</p>,
  },
  {
    question: "How can our club join UWClubs?",
    answer: <p>Please reach out to me directly via email at {emailLink}, or message me on Discord at jjwgu. It takes less than 5 minutes to set up and I'm more than happy to guide you through the process. Looking forward to welcoming your club to our platform!</p>,
  },
  {
    question: "Which clubs are a part of UWClubs?",
    answer: <p>We're currently in 'early access' mode. This means we're starting with a handful of clubs to ensure our features are perfect before we roll them out to a wider range of clubs. We believe this approach allows us to tweak and refine based on meaningful feedback. For a list of clubs currently participating you can visit {clubsList}.</p>,
  },
  {
    question: "What if a club I'm interested in isn't listed on UWClubs?",
    answer: <p>If there is a club you're interested in but it's not listed on our platform, we'd love to help! Please email me at {emailLink} or message me on discord @jjwgu with the club name and any relevant information. We are actively expanding our club would love to add additional clubs!</p>,
  },
  {
    question: "This didn't answer my questions",
    answer: <p>Please email me at {emailLink} or message me on discord @jjwgu with any inquiries!</p>,
  }
]