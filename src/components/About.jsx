import React from "react";
import ParallaxSection from "./ParallaxSection";

function About() {
  const sections = [
    {
      title: "About Us",
      bg: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
      content:
        "We are a forward-thinking company focused on delivering high-quality services and innovative solutions. Our goal is to create long-term value for our clients through reliability, efficiency, and continuous improvement.",
    },
    {
      title: "About the Promoter",
      bg: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
      content:
        "The company is led by an experienced promoter with strong industry expertise and a vision to build a trusted and scalable business. Their leadership drives innovation and ensures consistent growth.",
    },
    {
      title: "About the Company",
      bg: "https://images.unsplash.com/photo-1497366216548-37526070297c",
      content:
        "Our company specializes in delivering customer-centric solutions with a focus on quality, performance, and reliability. We work across multiple domains to provide end-to-end services.",
    },
    {
      title: "Mission & Vision",
      bg: "https://imgs.search.brave.com/CfGLu7rSYMEezQw4wCLX4UHYQ_1DnAPHKK-1hg31oOA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bjJncm93dGguY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDEw/LzEyL0Fkb2JlU3Rv/Y2tfMTQzMzAzNjgw/LXNjYWxlZC5qcGVn",
      content:
        "Our mission is to deliver excellence through innovation and commitment. Our vision is to become a leading organization recognized for quality, trust, and customer satisfaction.",
    },
    {
      title: "Company Inception",
      bg: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      content:
        "Founded with a clear vision and strong determination, the company started its journey with a small team and has grown steadily through dedication and hard work.",
    },
    {
      title: "Certifications",
      bg: "https://imgs.search.brave.com/GiKz20MvEQm3Vo6NI90plpYhPiR83rZrn8y9hv1fUnI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudGVtcGxhdGUu/bmV0L3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDE5LzAzL0J1c2lu/ZXNzLUNlcnRpZmlj/YXRlcy5wbmc",
      content:
        "We have earned multiple certifications that reflect our commitment to quality, safety, and industry standards.",
      images: [
        "https://imgs.search.brave.com/tovGn14DwNgas0lCqfqaAcpaAnOg9pcKMxppH2Sx6iM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuYmVzdHRlbXBs/YXRlcy5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMjQvMDYv/QnVzaW5lc3MtQ2Vy/dGlmaWNhdGUtRGVz/aWduLXNjYWxlZC5q/cGc",
        "https://imgs.search.brave.com/BAHVbMP89ORegNz6XXUiVjDcCoBsHuvkquwGP0tdZq0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tYXJr/ZXRwbGFjZS5jYW52/YS5jb20vRUFFOW9v/UkFKblEvMi8wLzE2/MDB3L2NhbnZhLWJs/dWUtc2ltcGxlLWFj/aGlldmVtZW50LWNl/cnRpZmljYXRlLUlV/dVlnVE9zU3M0Lmpw/Zw",
        "https://imgs.search.brave.com/FF6MbKSKzwRMUJJDi3AJjY1A_e6YJpnNYAWyGeDDkZk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9jZXJ0aWZpY2F0/ZS1kZXNpZ25fMTIz/MzQ4Ni0zNS5qcGc_/c2VtdD1haXNfaHli/cmlk",
      ],
    },
    {
      title: "Statutory Certifications",
      bg: "https://images.unsplash.com/photo-1521791136064-7986c2920216",
      content:
        "We comply with all statutory and legal requirements, ensuring transparency and trust in our operations.",
      images: [
        "https://imgs.search.brave.com/MlJj8Fi5i8fs0_uZf7E2w9LFVNsSWVaGlPM6xr5dVqQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMTEv/MDgwLzA5Ni9zbWFs/bC9yZWQtYW5kLWdv/bGQtY2VydGlmaWNh/dGUtb2YtYWNoaWV2/ZW1lbnQtdGVtcGxh/dGUtc2V0LXdpdGgt/Z29sZC1iYWRnZS1h/bmQtYm9yZGVyLWZv/ci1hd2FyZC1idXNp/bmVzcy1hbmQtZWR1/Y2F0aW9uLW5lZWRz/LWlsbHVzdHJhdGlv/bi12ZWN0b3IuanBn",
        "https://imgs.search.brave.com/3g0yfoLLaOPq2P_orFjuvFUlgB9gDa5X7_bjO0uGbMA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS12ZWN0b3Iv/ZWxlZ2FudC1jZXJ0/aWZpY2F0ZS13aXRo/LWZyYW1lXzIzLTIx/NDg2NzI2NTUuanBn/P3NlbXQ9YWlzX2h5/YnJpZCZ3PTc0MCZx/PTgw",
      ],
    },
  ];

  return (
    <div id="about" className="w-full"> 
      {sections.map((section) => (
        <ParallaxSection key={section.title} {...section} />
      ))}
    </div>
  );
}

export default About;
