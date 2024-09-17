<script setup>
import Hero2 from "../components/Hero2.vue";
import Insights from "../components/Insights.vue";
import Pricing from "../components/Pricing.vue";

const pricingOptions = [
  {
    price: "$500",
    planName: "Basic Plan",
    features: [
      "Keyword Research & Optimisation",
      "Basic Technical SEO",
      "Monthly Performance Report",
    ],
  },
  {
    price: "$1000",
    planName: "Standard Plan",
    features: [
      "Comprehensive Keyword Strategy",
      "Advanced Technical SEO",
      "Content Creation & Link Building",
    ],
  },
  {
    price: "$2000",
    planName: "Premium Plan",
    features: [
      "Full-Scope Keyword Strategy",
      "Complete Technical SEO",
      "Content & Outreach Strategy",
    ],
  },
];
</script>

<template>
  <Hero2 title="SEO" />
  <Pricing :pricingOptions="pricingOptions" />
  <Insights />
</template>
