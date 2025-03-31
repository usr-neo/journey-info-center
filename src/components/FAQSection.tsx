
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs = [
  {
    question: "What is a visa and why do I need one?",
    answer: "A visa is an official document or endorsement in your passport that grants you permission to enter, stay, or leave a specific country for a designated period. You need a visa because many countries require foreign visitors to obtain authorization before entering their territory for purposes such as tourism, business, study, or work. Visa policies vary by country and are designed to control immigration and security."
  },
  {
    question: "How long before my trip should I apply for a visa?",
    answer: "It's recommended to apply for a visa at least 4-8 weeks before your planned travel date. Processing times vary widely based on the country, visa type, and current application volume. Some countries may process visas in a few days, while others might take several months. During peak travel seasons, processing times can be longer, so early application is advised."
  },
  {
    question: "What documents are typically required for a visa application?",
    answer: "Common documents include a valid passport with at least 6 months validity beyond your planned stay, completed visa application forms, passport-sized photos, proof of financial means (bank statements), round-trip flight reservations, accommodation details, travel insurance, invitation letters (if applicable), and evidence of ties to your home country. Specific requirements vary by country and visa type."
  },
  {
    question: "What is a visa interview and how should I prepare?",
    answer: "A visa interview is a face-to-face meeting with a consular officer who will evaluate your visa eligibility. To prepare: 1) Review your application and supporting documents, 2) Know your travel plans in detail, 3) Be ready to explain your ties to your home country, 4) Dress professionally, 5) Answer questions truthfully and concisely, 6) Bring original documents plus copies, and 7) Arrive early for your appointment."
  },
  {
    question: "Can my visa application be rejected? What are common reasons?",
    answer: "Yes, visa applications can be rejected. Common reasons include incomplete or incorrect application forms, insufficient financial resources to support your stay, lack of strong ties to your home country (suggesting immigration intent), previous immigration violations, criminal history, providing false information, insufficient travel insurance, or not meeting specific visa category requirements."
  },
  {
    question: "What is the difference between single entry and multiple entry visas?",
    answer: "A single entry visa allows you to enter the country only once. Once you leave, the visa becomes invalid, even if it hasn't expired. A multiple entry visa permits you to enter and exit the country multiple times during the visa's validity period without needing to reapply. Multiple entry visas are typically more expensive but advantageous for frequent travelers."
  },
  {
    question: "Can I extend my visa if I want to stay longer?",
    answer: "In many countries, it's possible to extend your visa while in the country, but this depends on local immigration policies. You generally need to apply for an extension before your current visa expires and demonstrate valid reasons for extending your stay. The process usually involves submitting an application to the local immigration office along with supporting documents and paying an extension fee."
  },
  {
    question: "What is visa-free travel and which countries offer it?",
    answer: "Visa-free travel allows citizens of certain countries to enter another country without obtaining a visa beforehand, typically for tourism or business purposes for a limited period (often 30-90 days). The list of countries offering visa-free access varies based on your nationality. Countries with strong passports like Japan, Singapore, Germany, and South Korea typically enjoy visa-free access to 180+ countries."
  },
  {
    question: "What is an e-Visa and how does it differ from a regular visa?",
    answer: "An e-Visa (electronic visa) is issued digitally and linked to your passport electronically. You apply online, receive approval via email, and either print the e-Visa or simply present your passport at immigration. Unlike traditional visas that require in-person applications at embassies/consulates and passport submission, e-Visas offer a streamlined, paperless process that's typically faster. However, e-Visas are not offered by all countries and may have different eligibility criteria."
  },
  {
    question: "How much does a visa typically cost?",
    answer: "Visa fees vary widely based on the country, visa type, your nationality, and processing speed. Tourist visas can range from $20 to $160 or more. Student and work visas generally cost more, often $200-$500. Some countries also charge additional fees for biometrics, visa processing centers, or expedited service. These fees are usually non-refundable, even if your application is denied."
  },
  {
    question: "Do I need a transit visa if I'm just connecting through a country?",
    answer: "This depends on the country, your nationality, whether you leave the international transit area, and the length of your layover. Many countries offer transit without visa (TWOV) facilities for short connections where you don't leave the international zone. However, some countries require transit visas regardless of whether you leave the airport. Always check the specific requirements based on your itinerary and nationality."
  },
  {
    question: "What's the difference between a tourist visa and a business visa?",
    answer: "Tourist visas are for recreational travel, visiting friends/family, or sightseeing. Business visas are for professional activities like meetings, conferences, negotiations, or site visits. Business visas don't permit actual employment but allow business-related activities. The application process is similar, but business visa applications typically require additional documents like invitation letters from business partners, company introduction letters, or conference registration details."
  }
];

const FAQSection = () => {
  return (
    <div className="container py-12">
      <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
      <p className="text-muted-foreground mb-8">
        Find answers to common questions about visa applications and international travel requirements.
      </p>

      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground">{faq.answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="mt-10 p-6 border rounded-lg bg-primary/5">
        <h3 className="text-xl font-medium mb-3">Still have questions?</h3>
        <p className="mb-2">
          We understand that visa applications can be complex. If you couldn't find the answer to your question, reach out to us or consult the official embassy website of your destination country for the most accurate information.
        </p>
        <p className="text-sm text-muted-foreground">
          Please note that visa requirements and processes can change frequently. Always verify information with the relevant embassy or consulate before making travel plans.
        </p>
      </div>
    </div>
  );
};

export default FAQSection;
