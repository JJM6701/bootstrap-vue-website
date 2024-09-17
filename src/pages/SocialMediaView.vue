<script setup>
import Hero2 from "../components/Hero2.vue";
import Insights from "../components/Insights.vue";
import Pricing from "../components/Pricing.vue";

const pricingOptions = [
  {
    price: "$500",
    planName: "Basic Plan",
    features: [
      "Profile Setup & Optimisation",
      "Content Posting",
      "Monthly Engagement Report",
    ],
  },
  {
    price: "$1000",
    planName: "Standard Plan",
    features: [
      "Multi-Platform Management",
      "Content Creation & Posting",
      "Analytics & Growth Report",
    ],
  },
  {
    price: "$2000",
    planName: "Premium Plan",
    features: [
      "Full-Service Management",
      "Custom Content Strategy",
      "In-Depth Analytics Review",
    ],
  },
];
</script>

<template>
  <Hero2 title="Social Media" />
  <Pricing :pricingOptions="pricingOptions" />
  <Insights />
</template>
