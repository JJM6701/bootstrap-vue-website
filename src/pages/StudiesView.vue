<script setup>
import CaseStudy from "../components/CaseStudy.vue";
import Content1 from "../components/Content1.vue";
import Image2 from "../assets/case2.jpg";
import Image1 from "../assets/case1.jpg";

const caseStudy1 = {
  title: "GlobalTech Solutions",
  content:
    "GlobalTech Solutions, a leading B2B technology provider, sought to improve lead generation and nurture client relationships through more targeted digital marketing efforts.",
  challenges: [
    "Low lead generation despite significant traffic",
    "Ineffective email marketing campaigns",
    "Limited engagement on LinkedIn, a key platform for their audience",
  ],
  solution: [
    "Refined landing pages and lead capture forms to optimise for conversions",
    "Developed a segmented email campaign to nurture leads",
    "Increased LinkedIn activity through sponsored content and targeted outreach",
  ],
  image: Image1,
  stats: [
    { title: "55% Increase", description: "Qualified leads" },
    { title: "45% Improvement", description: "Landing page conversion rate" },
    { title: "35% Growth", description: "Email open rate" },
    { title: "60% Jump", description: "Engagement on LinkedIn" },
    { title: "30% Decrease", description: "Cost per lead (CPL)" },
  ],
};

const caseStudy2 = {
  title: "Urban Outfitters",
  content:
    "Urban Outfitters, a mid-sized e-commerce company, wanted to enhance its online presence and increase sales through a more focused digital marketing strategy. They partnered with Next Lead to optimise their SEO, PPC campaigns, and social media engagement.",
  challenges: [
    "Low organic traffic",
    "Underperforming paid ad campaigns",
    "Inconsistent social media engagement",
  ],
  solution: [
    "Revamping the SEO strategy for targeted keywords",
    "Optimising PPC campaigns for better ROI",
    "Enhancing social media engagement through a targeted content calendar",
  ],
  image: Image2,
  stats: [
    { title: "65% Increase", description: "Organic traffic" },
    { title: "40% Improvement", description: "PPC conversion rate" },
    { title: "50% Growth", description: "Revenue from online sales" },
    { title: "75% Jump", description: "Social media engagement" },
    { title: "35% Increase", description: "Return on ad spend (ROAS)" },
  ],
};
</script>

<template>
  <Content1 />
  <CaseStudy
    :title="caseStudy1.title"
    :content="caseStudy1.content"
    :challenges="caseStudy1.challenges"
    :solution="caseStudy1.solution"
    :image="caseStudy1.image"
    :stats="caseStudy1.stats"
  />
  <CaseStudy
    :title="caseStudy2.title"
    :content="caseStudy2.content"
    :challenges="caseStudy2.challenges"
    :solution="caseStudy2.solution"
    :image="caseStudy2.image"
    :stats="caseStudy2.stats"
  />
</template>
