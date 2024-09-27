<script setup>
import Hero2 from "../components/Hero2.vue";
import Insights from "../components/Insights.vue";
import Pricing from "../components/Pricing.vue";

const pricingOptions = [
  {
    price: "500",
    planName: "Basic Plan",
    features: [
      "Campaign Setup & Management",
      "Budget Management",
      "Bid Optimisation",
    ],
  },
  {
    price: "1000",
    planName: "Standard Plan",
    features: [
      "Comprehensive Ads Management",
      "A/B Testing",
      "Detailed Monthly Reporting",
    ],
  },
  {
    price: "2000",
    planName: "Premium Plan",
    features: [
      "Full-Service Management",
      "Advanced Ad Strategy",
      "Comprehensive Reporting",
    ],
  },
];
</script>

<template>
  <Hero2 title="Google Ads" />
  <Pricing :pricingOptions="pricingOptions" />
  <Insights />
</template>
