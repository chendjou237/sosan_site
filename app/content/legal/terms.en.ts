/**
 * English terms and conditions. Section ids and block structure mirror
 * terms.fr.ts exactly, so anchors work in both locales.
 *
 * LEGAL REVIEW: the two `disclaimer` blocks (§10 and §11), the refund
 * percentages and windows in §13, the practitioner certification note in §6 and
 * the 2-year retention period in §5 are substantive legal terms. This is a
 * faithful translation, not legal advice — have counsel confirm the English
 * wording carries the same effect under Cameroonian law before relying on it.
 */
import type { LegalDocument } from "../../LegalDoc";

export const doc: LegalDocument = {
  title: "SOSAN Terms and Conditions of Use",
  intro:
    "These terms govern your use of the SOSAN application and platform: what the service does, the obligations of healthcare professionals, intellectual property, refunds and warranties.",
  sections: [
    {
      id: "introduction",
      heading: "Introduction",
      blocks: [
        {
          kind: "p",
          text: "Welcome to SOSAN. By accessing and using our application, you agree to be bound by these Terms and Conditions of Use, which form a legally binding agreement between SOSAN and you.",
        },
      ],
    },
    {
      id: "objet",
      heading: "Purpose of the Application",
      blocks: [
        {
          kind: "p",
          text: "SOSAN exists to make medical care more accessible in sub-Saharan Africa, and in Cameroon in particular. Our platform offers a range of services, including:",
        },
        {
          kind: "ul",
          items: [
            "Telemedicine and remote consultations,",
            "Online pharmacy,",
            "Management of consultations and medical tests,",
            "A health mutual for better access to care.",
          ],
        },
      ],
    },
    {
      id: "donnees-personnelles",
      heading: "Collection and Use of Personal Data",
      blocks: [
        {
          kind: "p",
          text: "By using SOSAN, you accept the collection and processing of the following personal data:",
        },
        {
          kind: "ul",
          items: [
            "Identifying information: surname, first name, email address, telephone number.",
            "Medical data: consultation history, prescriptions and other health data.",
            "Payment data: the information needed for transactions made through the application.",
          ],
        },
        {
          kind: "p",
          text: "This data is used to improve your experience, to support your interactions with healthcare professionals, and to keep SOSAN’s services running properly.",
        },
      ],
    },
    {
      id: "partage-protection",
      heading: "Sharing and Protection of Personal Data",
      blocks: [
        {
          kind: "p",
          text: "SOSAN undertakes to protect your personal information by putting advanced security measures in place (encryption, secure connections). Your data will be shared only with:",
        },
        {
          kind: "ul",
          items: [
            "Accredited healthcare professionals, to ensure accurate diagnoses.",
            "Third-party providers handling payment and logistics, in accordance with our Privacy Policy.",
          ],
        },
        {
          kind: "p",
          text: "SOSAN does not sell or rent your personal data to unauthorised third parties.",
        },
      ],
    },
    {
      id: "suppression-compte",
      heading: "Account and User Data Deletion",
      blocks: [
        {
          kind: "p",
          text: "SOSAN allows its users to delete their accounts for any reason. However, certain personal data will necessarily be retained for a period of 2 years after the account is deleted.",
        },
      ],
    },
    {
      id: "conditions-specifiques",
      heading: "Specific Conditions of Use",
      blocks: [
        {
          kind: "p",
          text: "Use of SOSAN by doctors, hospitals, laboratories and pharmacies is subject to producing a valid accreditation and any legal document issued by the competent Cameroonian authorities. Any abusive or fraudulent use of the platform may lead to sanctions, including legal proceedings.",
        },
        {
          kind: "note",
          title: "Important notice",
          paragraphs: [
            "On registering with the platform, the healthcare professional certifies on their honour that they hold all the administrative, professional-body and legal authorisations required to practise on Cameroonian territory, whether as their principal or a secondary activity.",
            "Sosan exercises no control over, and in no way intervenes in, how registered practitioners discharge their professional or statutory obligations. Sosan disclaims all liability in the event of any dispute, or any disciplinary, administrative or judicial sanction, arising from a healthcare professional’s failure to meet their duty of service to public institutions, or from any unauthorised absence from their official post.",
          ],
        },
      ],
    },
    {
      id: "propriete-intellectuelle",
      heading: "Intellectual Property",
      blocks: [
        {
          kind: "p",
          text: "All SOSAN content (patents, trade marks, designs, videos, images, logos, and so on) is protected by Cameroonian and international intellectual property law.",
        },
        {
          kind: "ul",
          items: [
            "Using the SOSAN name, logo or any other SOSAN mark without written authorisation is strictly prohibited.",
            "Any infringement will result in legal sanctions.",
          ],
        },
      ],
    },
    {
      id: "abonnement",
      heading: "Subscription and Pricing",
      blocks: [
        {
          kind: "p",
          text: "SOSAN offers several subscription plans suited to your needs and your means. Once your subscription package is paid for, you have access to the services included in your plan.",
        },
      ],
    },
    {
      id: "commentaires",
      heading: "Reporting Errors and Giving Feedback",
      blocks: [
        {
          kind: "p",
          text: "You may provide us, either directly at contact@sosanmed.com or through third-party sites and tools, with information and comments about errors, suggested improvements, ideas, problems, complaints and other matters relating to our service (“feedback”).",
        },
        { kind: "p", text: "You acknowledge and agree that:" },
        {
          kind: "ul",
          items: [
            "You will not retain, acquire or assert any intellectual property right, or any other right, title or interest in the Feedback;",
            "The Company may have development ideas similar to the Feedback;",
            "The Feedback contains no confidential or proprietary information of yours or of any third party;",
            "The Company is under no obligation of confidentiality with respect to the Feedback. Where transfer of ownership of the Feedback is not possible by reason of applicable mandatory law, you grant the Company and its affiliates an exclusive, transferable, irrevocable, royalty-free, sub-licensable, unlimited and perpetual right to use (including to copy, modify, create derivative works from, publish, distribute and commercialise) the Feedback in any manner and for any purpose.",
          ],
        },
      ],
    },
    {
      id: "liens-tiers",
      heading: "Links to Other Websites",
      blocks: [
        {
          kind: "p",
          text: "Our service may contain links to third-party websites or services that are not owned or controlled by SOSAN.",
        },
        {
          kind: "p",
          text: "SOSAN has no control over, and assumes no responsibility for, the content, privacy policies or practices of any third-party website or service. We do not guarantee the offerings of these entities/individuals or of their websites.",
        },
        {
          kind: "disclaimer",
          paragraphs: [
            "YOU ACKNOWLEDGE AND AGREE THAT THE COMPANY SHALL NOT BE LIABLE, DIRECTLY OR INDIRECTLY, FOR ANY DAMAGE OR LOSS CAUSED OR ALLEGED TO BE CAUSED BY OR IN CONNECTION WITH THE USE OF, OR RELIANCE ON, ANY SUCH CONTENT, GOODS OR SERVICES AVAILABLE ON OR THROUGH ANY THIRD-PARTY WEBSITES OR SERVICES.",
            "WE STRONGLY ADVISE YOU TO READ THE TERMS OF SERVICE AND PRIVACY POLICIES OF ANY THIRD-PARTY WEBSITE OR SERVICE THAT YOU VISIT.",
          ],
        },
      ],
    },
    {
      id: "exclusion-garantie",
      heading: "Disclaimer of Warranties",
      blocks: [
        {
          kind: "disclaimer",
          paragraphs: [
            "THESE SERVICES ARE PROVIDED BY THE COMPANY ON AN “AS IS” AND “AS AVAILABLE” BASIS. THE COMPANY MAKES NO REPRESENTATIONS OR WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, AS TO THE OPERATION OF ITS SERVICES, OR THE INFORMATION, CONTENT OR MATERIALS INCLUDED THEREIN. YOU EXPRESSLY AGREE THAT YOUR USE OF THESE SERVICES, THEIR CONTENT AND ANY SERVICE OR ITEM OBTAINED FROM US IS AT YOUR SOLE RISK.",
            "NEITHER THE COMPANY NOR ANY PERSON ASSOCIATED WITH THE COMPANY MAKES ANY WARRANTY OR REPRESENTATION WITH RESPECT TO THE COMPLETENESS, SECURITY, RELIABILITY, QUALITY, ACCURACY OR AVAILABILITY OF THE SERVICES. WITHOUT LIMITING THE FOREGOING, NEITHER THE COMPANY NOR ANYONE ASSOCIATED WITH THE COMPANY REPRESENTS OR WARRANTS THAT THE SERVICES, THEIR CONTENT OR ANY SERVICE OR ITEM OBTAINED THROUGH THE SERVICES WILL BE ACCURATE, RELIABLE, ERROR-FREE OR UNINTERRUPTED, THAT DEFECTS WILL BE CORRECTED, THAT THE SERVICES OR THE SERVER THAT MAKES THEM AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS, OR THAT THE SERVICES OR ANY SERVICE OR ITEM OBTAINED THROUGH THE SERVICES WILL OTHERWISE MEET YOUR NEEDS OR EXPECTATIONS.",
            "THE COMPANY HEREBY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, STATUTORY OR OTHERWISE, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF MERCHANTABILITY, NON-INFRINGEMENT AND FITNESS FOR A PARTICULAR PURPOSE.",
            "THE FOREGOING DOES NOT AFFECT ANY WARRANTIES THAT CANNOT BE EXCLUDED OR LIMITED UNDER APPLICABLE LAW.",
          ],
        },
      ],
    },
    {
      id: "modifications-service",
      heading: "Changes to the Service",
      blocks: [
        {
          kind: "p",
          text: "We reserve the right to withdraw or amend our Service, and any service or material we provide through the Service, at our sole discretion and without notice. We will not be liable if, for any reason, all or any part of the Service is unavailable at any time or for any period. From time to time, we may restrict access to some parts of the Service, or to the entire Service, to users, including registered users.",
        },
      ],
    },
    {
      id: "remboursement",
      heading: "Refund Policy",
      blocks: [
        {
          kind: "ul",
          items: [
            "Consultations must be cancelled at least 6 hours in advance to qualify for an 80% refund within 48 hours.",
            "No refund is granted for cancellations made less than 6 hours in advance.",
            "If a doctor cancels a consultation, 100% of the amount will be refunded to you, and 20% of their commission will be withheld from their next consultation.",
            "SOSAN reserves the right to cancel any order in the event of fraud, a pricing error, or insufficient availability of the service.",
          ],
        },
      ],
    },
    {
      id: "modification-tcu",
      heading: "Changes to the Terms and Conditions",
      blocks: [
        {
          kind: "p",
          text: "SOSAN reserves the right to amend these Terms and Conditions unilaterally. Any update will be communicated to users through the application or by email.",
        },
      ],
    },
    {
      id: "acceptation",
      heading: "Acceptance of the Terms",
      blocks: [
        {
          kind: "p",
          text: "By using SOSAN, you confirm that you have read, understood and accepted these Terms and Conditions of Use.",
        },
      ],
    },
    {
      id: "contact",
      heading: "Contact",
      blocks: [
        {
          kind: "p",
          text: "Please send your feedback, comments and technical support requests by email to: contact@sosanmed.com",
        },
      ],
    },
  ],
};
