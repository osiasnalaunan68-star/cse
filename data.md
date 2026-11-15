## File: ./firebase.json
```
{
  "hosting": {
    "site": "cse-reviewer-ph-fcfbc",
    "public": "frontend/dist",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ],
    "headers": [
      {
        "source": "/index.html",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "no-cache"
          }
        ]
      },
      {
        "source": "/assets/**",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "public, max-age=31536000, immutable"
          }
        ]
      }
    ]
  },
  "firestore": {
    "rules": "firestore.rules"
  }
}```

## File: ./frontend/package.json
```
{
  "name": "cse-reviewer",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite --host",
    "build": "vite build",
    "preview": "vite preview --host"
  },
  "dependencies": {
    "firebase": "^13.3.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.3.4",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.4.49",
    "tailwindcss": "^3.4.17",
    "vite": "^5.4.11"
  }
}
```

## File: ./frontend/src/data/defaultQuizzes/cse.json
```
{}
```

## File: ./frontend/src/data/defaultQuizzes/math.json
```
{}
```

## File: ./frontend/src/data/library/cse-library-imported-2026-11-13 (1).json
```
{
  "format": "cse-library",
  "version": 1,
  "exportedAt": "2026-11-13T22:14:52.012Z",
  "topics": [
    {
      "subject": "Numerical Ability",
      "subject_icon": "🔢",
      "topic": "Fractions",
      "topic_order": 1,
      "keywords": [
        "fractions",
        "praksyon",
        "numerator",
        "denominator",
        "proper",
        "improper",
        "mixed number",
        "equivalent"
      ],
      "ai": {
        "title": "Gabay sa Fractions (Mga Praksyon)",
        "content": "📖 Kahulugan\nAng fraction ay kumakatawan sa bahagi ng isang kabuuan. May dalawang pangunahing bahagi: numerator (taas) at denominator (baba).\n\n🔍 Breakdown\n• Proper Fraction — numerator < denominator\n• Improper Fraction — numerator ≥ denominator\n• Mixed Number — whole number + proper fraction\n• Equivalent Fractions — magkaibang numero, parehong halaga\n• Operations: Addition, Subtraction, Multiplication, Division\n\n💡 Simpleng Paliwanag\nIsipin mo na pizza na hinati sa 4 na slice. Kung kumuha ka ng 3, ang fraction mo ay 3/4. Ang 4 ay denominator (kabuuang slices), ang 3 ay numerator (kinuha mo).\n\n📦 Halimbawa\n• Proper: 3/4\n• Improper: 5/2 = 2 1/2\n• Equivalent: 1/2 = 2/4 = 4/8\n\n⭐ Bakit Mahalaga Ito?\nAng fractions ay pundasyon ng maraming math problems sa CSE — ratios, percentages, at word problems.\n\n⚠️ Dapat Tandaan\n• Sa addition at subtraction, kailangang magkapareho muna ang denominator.\n• Sa multiplication, i-multiply ang numerator sa numerator at denominator sa denominator.\n• Sa division, i-reciprocal (baliktarin) ang pangalawang fraction bago mag-multiply.\n\n🎯 Exam Tip\nSa CSE, madalas may fraction operations. Alamin ang LCD (Least Common Denominator) para mabilis ang addition at subtraction.",
        "prompt": "Explain fractions (proper, improper, mixed, equivalent) and the four basic operations with step-by-step examples, plus common Civil Service Exam traps."
      },
      "sections": [
        {
          "id": "s1",
          "heading": "English Definition",
          "ai": {
            "title": "Ano ang Fraction?",
            "content": "📖 Kahulugan\nAng fraction ay kumakatawan sa bahagi ng isang kabuuan o bilang na nagpapakita ng paghahati.\n\n💡 Simpleng Paliwanag\nMayroon itong dalawang bahagi: numerator (nasa itaas, kung ilang bahagi ang kinukuha) at denominator (nasa ibaba, kung ilang pantay na bahagi hinati ang kabuuan).\n\n⚠️ Dapat Tandaan\nNumerator sa itaas, denominator sa ibaba. Hindi pwedeng zero ang denominator.",
            "prompt": "Explain what a fraction is, its parts (numerator and denominator), and give simple examples."
          },
          "paragraphs": [
            {
              "id": "p1",
              "text": "A fraction represents a part of a whole or a number that expresses division. It consists of two main parts: the numerator (the top number, which indicates how many parts are being considered) and the denominator (the bottom number, which indicates the total number of equal parts).",
              "ai": {
                "title": "Kahulugan ng Fraction",
                "content": "📖 Kahulugan\nAng fraction ay bahagi ng isang buo o bilang na nagpapakita ng paghahati.\n\n💡 Simpleng Paliwanag\nBinubuo ito ng numerator (taas) at denominator (baba). Ang numerator ay kung ilang bahagi ang kinukuha; ang denominator ay kung ilang pantay na bahagi ang kabuuan.\n\n⚠️ Dapat Tandaan\nHalimbawa: sa 3/4, ang 3 ay numerator at ang 4 ay denominator.",
                "prompt": "Explain this definition of a fraction with simple real-life examples."
              }
            }
          ]
        },
        {
          "id": "s2",
          "heading": "Important Types of Fractions",
          "ai": {
            "title": "Mga Uri ng Fractions",
            "content": "📖 Kahulugan\nApat na uri ng fractions: proper, improper, mixed number, at equivalent.\n\n💡 Simpleng Paliwanag\nTingnan lang ang numerator at denominator: kung mas maliit ang numerator, proper; kung mas malaki o pantay, improper. Ang mixed number ay may buong bilang at fraction. Ang equivalent ay magkaiba ang itsura pero pareho ang halaga.\n\n⚠️ Dapat Tandaan\nAng improper fraction ay pwedeng gawing mixed number. Ang equivalent fractions ay nakukuha sa pamamagitan ng multiply o divide ng numerator at denominator sa parehong numero.",
            "prompt": "Explain the four types of fractions with examples and how they convert into each other."
          },
          "paragraphs": [
            {
              "id": "p1",
              "label": "Proper Fraction:",
              "text": "A fraction whose numerator is smaller than its denominator.",
              "ai": {
                "title": "Proper Fraction",
                "content": "📖 Kahulugan\nAng proper fraction ay may numerator na mas maliit kaysa denominator.\n\n💡 Simpleng Paliwanag\nMas mababa sa 1 ang value nito — kasi mas kaunti ang kinuha kaysa sa buong hinati.\n\n⚠️ Dapat Tandaan\nHalimbawa: 3/4, 1/2, 5/8 — lahat proper fractions.",
                "prompt": "Explain proper fractions with examples and why their value is less than 1."
              }
            },
            {
              "id": "p2",
              "label": "Example:",
              "indent": 1,
              "text": "3/4 means 3 out of 4 equal parts.",
              "ai": {
                "title": "Halimbawa ng Proper Fraction",
                "content": "Tanong: Bakit proper fraction ang 3/4?\nSagot: Dahil mas maliit ang numerator (3) kaysa denominator (4). Ibig sabihin, kumuha ka ng 3 bahagi mula sa 4 na pantay na bahagi.",
                "prompt": "Explain why 3/4 is a proper fraction with a real-life example."
              }
            },
            {
              "id": "p3",
              "label": "Improper Fraction:",
              "text": "A fraction whose numerator is greater than or equal to its denominator.",
              "ai": {
                "title": "Improper Fraction",
                "content": "📖 Kahulugan\nAng improper fraction ay may numerator na mas malaki o pantay sa denominator.\n\n💡 Simpleng Paliwanag\nAng value nito ay 1 o higit pa — kasi pantay o lumampas na ang kinuha sa buong hinati.\n\n⚠️ Dapat Tandaan\nHalimbawa: 5/2, 7/4, 9/9 — lahat improper fractions.",
                "prompt": "Explain improper fractions with examples and how they convert to mixed numbers."
              }
            },
            {
              "id": "p4",
              "label": "Example:",
              "indent": 1,
              "text": "5/2, which is equivalent to 2 1/2.",
              "ai": {
                "title": "Halimbawa ng Improper Fraction",
                "content": "Tanong: Paano naging 2 1/2 ang 5/2?\nSagot: I-divide ang 5 sa 2 = 2 remainder 1. Kaya 2 1/2. Ang 2 ay buong bilang, ang 1/2 ay natirang fraction.",
                "prompt": "Explain how to convert 5/2 into the mixed number 2 1/2 step by step."
              }
            },
            {
              "id": "p5",
              "label": "Mixed Number:",
              "text": "A number consisting of a whole number and a proper fraction.",
              "ai": {
                "title": "Mixed Number",
                "content": "📖 Kahulugan\nAng mixed number ay binubuo ng buong bilang at proper fraction.\n\n💡 Simpleng Paliwanag\nKombinasyon ito — may buong bahagi at may fraction na bahagi.\n\n⚠️ Dapat Tandaan\nHalimbawa: 2 1/2, 3 3/4, 5 1/8 — lahat mixed numbers.",
                "prompt": "Explain mixed numbers with examples and how they relate to improper fractions."
              }
            },
            {
              "id": "p6",
              "label": "Example:",
              "indent": 1,
              "text": "2 1/2",
              "ai": {
                "title": "Halimbawa ng Mixed Number",
                "content": "Tanong: Ano ang ibig sabihin ng 2 1/2?\nSagot: Ibig sabihin, may 2 buong yunit at 1/2 pang bahagi. Katumbas ito ng improper fraction na 5/2.",
                "prompt": "Explain the mixed number 2 1/2 with a real-life example."
              }
            },
            {
              "id": "p7",
              "label": "Equivalent Fractions:",
              "text": "Fractions that have different numerators and denominators but represent the same value.",
              "ai": {
                "title": "Equivalent Fractions",
                "content": "📖 Kahulugan\nAng equivalent fractions ay magkaiba ang numerator at denominator pero pareho ang halaga.\n\n💡 Simpleng Paliwanag\nParang iba-ibang damit pero iisang tao — magkaiba ang itsura, pareho ang value.\n\n⚠️ Dapat Tandaan\nNakukuha ito sa pag-multiply o pag-divide ng numerator at denominator sa parehong numero.",
                "prompt": "Explain equivalent fractions with examples and how to find them."
              }
            },
            {
              "id": "p8",
              "label": "Example:",
              "indent": 1,
              "text": "1/2 = 2/4 = 4/8",
              "ai": {
                "title": "Halimbawa ng Equivalent Fractions",
                "content": "Tanong: Bakit equivalent ang 1/2, 2/4, at 4/8?\nSagot: I-multiply lang ang numerator at denominator sa parehong numero: 1×2/2×2 = 2/4; 2×2/4×2 = 4/8. Pareho silang 0.5 ang value.",
                "prompt": "Explain why 1/2, 2/4, and 4/8 are equivalent fractions."
              }
            }
          ]
        },
        {
          "id": "s3",
          "heading": "Basic Operations on Fractions",
          "ai": {
            "title": "Mga Operasyon sa Fractions",
            "content": "📖 Kahulugan\nApat na basic operations: addition, subtraction, multiplication, at division.\n\n💡 Simpleng Paliwanag\nAng addition at subtraction ay kailangan ng common denominator. Ang multiplication ay direkta lang (numerator × numerator, denominator × denominator). Ang division ay i-reciprocal ang second fraction bago mag-multiply.\n\n⚠️ Dapat Tandaan\nPinakamadaling pagkakamali: mag-add ng fractions na hindi pareho ang denominator. Laging hanapin ang LCD muna.",
            "prompt": "Explain the four basic operations on fractions with step-by-step examples and common mistakes."
          },
          "paragraphs": [
            {
              "id": "p1",
              "label": "1. Addition:",
              "text": "Find a common denominator before adding the numerators.",
              "ai": {
                "title": "Addition of Fractions",
                "content": "📖 Kahulugan\nSa addition, kailangang magkapareho muna ang denominator bago mag-add ng numerators.\n\n💡 Simpleng Paliwanag\nHindi pwedeng direkta ang addition kung magkaiba ang denominator. Hanapin muna ang LCD (Least Common Denominator).\n\n⚠️ Dapat Tandaan\nPag pareho na ang denominator, i-add lang ang numerators at i-keep ang denominator.",
                "prompt": "Explain how to add fractions with different denominators step by step."
              }
            },
            {
              "id": "p2",
              "label": "Example:",
              "indent": 1,
              "text": "1/2 + 1/4 = 2/4 + 1/4 = 3/4",
              "ai": {
                "title": "Halimbawa ng Addition",
                "content": "Tanong: Paano naging 3/4 ang 1/2 + 1/4?\nSagot: Ang LCD ng 2 at 4 ay 4. Gawing 2/4 ang 1/2 (multiply numerator at denominator sa 2). Tapos 2/4 + 1/4 = 3/4.",
                "prompt": "Explain the step-by-step solution for 1/2 + 1/4."
              }
            },
            {
              "id": "p3",
              "label": "2. Subtraction:",
              "text": "Find a common denominator before subtracting the numerators.",
              "ai": {
                "title": "Subtraction of Fractions",
                "content": "📖 Kahulugan\nSa subtraction, kailangan din ng common denominator bago mag-subtract ng numerators.\n\n💡 Simpleng Paliwanag\nPareho lang sa addition — common denominator muna, tapos subtract.\n\n⚠️ Dapat Tandaan\nPag pareho na ang denominator, i-subtract lang ang numerators at i-keep ang denominator.",
                "prompt": "Explain how to subtract fractions with different denominators step by step."
              }
            },
            {
              "id": "p4",
              "label": "Example:",
              "indent": 1,
              "text": "3/4 − 1/4 = 2/4 = 1/2",
              "ai": {
                "title": "Halimbawa ng Subtraction",
                "content": "Tanong: Bakit 1/2 ang 3/4 − 1/4?\nSagot: Pareho na ang denominator (4), kaya 3−1 = 2. Kaya 2/4. I-simplify: 2/4 = 1/2.",
                "prompt": "Explain the step-by-step solution for 3/4 − 1/4."
              }
            },
            {
              "id": "p5",
              "label": "3. Multiplication:",
              "text": "Multiply the numerators together and the denominators together.",
              "ai": {
                "title": "Multiplication of Fractions",
                "content": "📖 Kahulugan\nSa multiplication, direkta lang — numerator × numerator, denominator × denominator.\n\n💡 Simpleng Paliwanag\nHindi kailangan ng common denominator sa multiplication. Direkta lang ang multiply.\n\n⚠️ Dapat Tandaan\nPagkatapos mag-multiply, i-simplify ang sagot kung posible.",
                "prompt": "Explain how to multiply fractions step by step."
              }
            },
            {
              "id": "p6",
              "label": "Example:",
              "indent": 1,
              "text": "2/3 × 3/4 = 6/12 = 1/2",
              "ai": {
                "title": "Halimbawa ng Multiplication",
                "content": "Tanong: Paano naging 1/2 ang 2/3 × 3/4?\nSagot: 2×3 = 6 (numerator); 3×4 = 12 (denominator). Kaya 6/12. I-simplify: 6/12 = 1/2.",
                "prompt": "Explain the step-by-step solution for 2/3 × 3/4."
              }
            },
            {
              "id": "p7",
              "label": "4. Division:",
              "text": "Keep the first fraction, change division into multiplication, and invert the second fraction.",
              "ai": {
                "title": "Division of Fractions",
                "content": "📖 Kahulugan\nSa division, i-keep ang first fraction, gawing multiplication ang division sign, at i-reciprocal (baliktarin) ang second fraction.\n\n💡 Simpleng Paliwanag\nAng reciprocal ng 1/4 ay 4/1. Kaya ang 1/2 ÷ 1/4 ay nagiging 1/2 × 4/1.\n\n⚠️ Dapat Tandaan\nTandaan ang rule: Keep-Change-Flip (Keep first, Change ÷ to ×, Flip second).",
                "prompt": "Explain how to divide fractions using the Keep-Change-Flip rule with examples."
              }
            },
            {
              "id": "p8",
              "label": "Example:",
              "indent": 1,
              "text": "1/2 ÷ 1/4 = 1/2 × 4/1 = 2",
              "ai": {
                "title": "Halimbawa ng Division",
                "content": "Tanong: Bakit 2 ang 1/2 ÷ 1/4?\nSagot: Keep 1/2, change ÷ to ×, flip 1/4 to 4/1. Kaya 1/2 × 4/1 = 4/2 = 2.",
                "prompt": "Explain the step-by-step solution for 1/2 ÷ 1/4."
              }
            }
          ]
        }
      ]
    },
    {
      "subject": "Numerical Ability",
      "subject_icon": "🔢",
      "topic": "Percentages",
      "topic_order": 2,
      "keywords": [
        "percentages",
        "porsyento",
        "discount",
        "increase",
        "decimal",
        "fraction",
        "per hundred"
      ],
      "ai": {
        "title": "Gabay sa Percentages (Porsyento)",
        "content": "📖 Kahulugan\nAng percentage ay paraan ng pagpapahayag ng numero o proporsyon bilang fraction ng 100. Symbol: %.\n\n🔍 Breakdown\n• Finding the percentage of a number\n• Finding what percentage one number is of another\n• Percentage discount\n• Percentage increase\n\n💡 Simpleng Paliwanag\nAng percentage ay \"bahagi ng isang daan.\" Para gawing decimal, ilipat ang decimal point ng dalawang puwesto pakaliwa. 50% = 0.50, 25% = 0.25, 10% = 0.10.\n\n📦 Halimbawa\n• 20% of 500 = 0.20 × 500 = 100\n• 40/50 × 100 = 80%\n• ₱800 with 25% discount = ₱600\n• ₱500 → ₱600 = 20% increase\n\n⭐ Bakit Mahalaga Ito?\nMadalas ito sa CSE — discounts, exam scores, interest, at statistics.\n\n⚠️ Dapat Tandaan\n• 50% = 0.50 = 1/2\n• 25% = 0.25 = 1/4\n• 10% = 0.10 = 1/10\n• 100% = 1.00 = buong halaga\n\n🎯 Exam Tip\nSa discount problems, i-multiply ang original price sa discount rate para makuha ang discount amount, tapos i-subtract sa original price.",
        "prompt": "Explain percentages in simple Tagalog, covering finding percentage, discount, and increase, with formulas and CSE examples."
      },
      "sections": [
        {
          "id": "s1",
          "heading": "English Definition",
          "ai": {
            "title": "Ano ang Percentage?",
            "content": "📖 Kahulugan\nAng percentage ay paraan ng pagpapahayag ng numero bilang fraction ng 100.\n\n💡 Simpleng Paliwanag\nGinagamit ito sa discounts, taxes, interest rates, exam scores, profits, at statistical comparisons.\n\n⚠️ Dapat Tandaan\nAng % ay nangangahulugang \"per hundred\" — kaya 20% ay 20/100 o 0.20.",
            "prompt": "Explain what a percentage is and where it is commonly used."
          },
          "paragraphs": [
            {
              "id": "p1",
              "text": "A percentage is a way of expressing a number or proportion as a fraction of 100. It is represented by the symbol (%) and is commonly used in calculating discounts, taxes, interest rates, examination scores, profits, and statistical comparisons.",
              "ai": {
                "title": "Kahulugan ng Percentage",
                "content": "📖 Kahulugan\nAng percentage ay nagpapahayag ng numero bilang bahagi ng 100. Symbol: %.\n\n💡 Simpleng Paliwanag\nGinagamit ito sa maraming bagay: discounts sa tindahan, tax, interest sa bangko, exam scores, at statistics.\n\n⚠️ Dapat Tandaan\nAng 20% ay katumbas ng 20/100 o 0.20. Ang 100% ay ang buong halaga.",
                "prompt": "Explain this definition of percentage with everyday examples."
              }
            }
          ]
        },
        {
          "id": "s2",
          "heading": "Important Concepts and Formulas",
          "ai": {
            "title": "Mga Formula sa Percentage",
            "content": "📖 Kahulugan\nApat na pangunahing konsepto: finding percentage, finding rate, discount, at increase.\n\n💡 Simpleng Paliwanag\nAng bawat isa ay may sariling formula. Alamin kung ano ang hinahanap: percentage (bahagi), rate (%), o base (buo).\n\n⚠️ Dapat Tandaan\nP = R × B (Percentage = Rate × Base). Ito ang pinaka-pundasyon na formula.",
            "prompt": "Explain the four main percentage formulas with examples."
          },
          "paragraphs": [
            {
              "id": "p1",
              "label": "1. Finding the Percentage of a Number:",
              "text": "Convert the percentage into a decimal, then multiply it by the given number.",
              "ai": {
                "title": "Finding the Percentage",
                "content": "📖 Kahulugan\nPara hanapin ang percentage ng isang numero, gawing decimal ang % at i-multiply sa numero.\n\n💡 Simpleng Paliwanag\n20% → 0.20. Tapos 0.20 × 500 = 100.\n\n⚠️ Dapat Tandaan\nIlipat ang decimal point ng dalawang puwesto pakaliwa para gawing decimal ang %.",
                "prompt": "Explain how to find the percentage of a number with examples."
              }
            },
            {
              "id": "p2",
              "label": "Example:",
              "indent": 1,
              "text": "What is 20% of 500? 20% × 500 = 0.20 × 500 = 100",
              "ai": {
                "title": "Halimbawa: 20% of 500",
                "content": "Tanong: Paano naging 100 ang 20% ng 500?\nSagot: 20% = 0.20. Tapos 0.20 × 500 = 100.",
                "prompt": "Explain step by step how to compute 20% of 500."
              }
            },
            {
              "id": "p3",
              "label": "2. Finding What Percentage One Number Is of Another:",
              "text": "Divide the part by the whole, then multiply by 100.",
              "ai": {
                "title": "Finding the Rate (%)",
                "content": "📖 Kahulugan\nPara malaman kung ilang % ang isang numero sa isa pa, i-divide ang part sa whole, tapos i-multiply sa 100.\n\n💡 Simpleng Paliwanag\nFormula: (Part ÷ Whole) × 100 = Rate.\n\n⚠️ Dapat Tandaan\nAng \"part\" ay ang maliit na bahagi; ang \"whole\" ay ang buong halaga.",
                "prompt": "Explain how to find what percentage one number is of another."
              }
            },
            {
              "id": "p4",
              "label": "Example:",
              "indent": 1,
              "text": "A student gets 40 correct answers out of 50 questions. What is the percentage? 40/50 × 100 = 80%",
              "ai": {
                "title": "Halimbawa: 40 out of 50",
                "content": "Tanong: Paano naging 80% ang 40/50?\nSagot: (40 ÷ 50) × 100 = 0.80 × 100 = 80%.",
                "prompt": "Explain step by step how to compute the percentage for 40 out of 50."
              }
            },
            {
              "id": "p5",
              "label": "3. Percentage Discount:",
              "text": "Multiply the original price by the discount rate to find the discount amount. Subtract it from the original price to get the sale price.",
              "ai": {
                "title": "Percentage Discount",
                "content": "📖 Kahulugan\nPara makuha ang sale price, i-multiply ang original price sa discount rate para makuha ang discount, tapos i-subtract sa original price.\n\n💡 Simpleng Paliwanag\nOriginal Price − Discount = Sale Price. Ang discount = Original × Rate.\n\n⚠️ Dapat Tandaan\nHuwag kalimutang i-subtract ang discount sa original price para makuha ang final na babayaran.",
                "prompt": "Explain how to calculate a percentage discount step by step."
              }
            },
            {
              "id": "p6",
              "label": "Example:",
              "indent": 1,
              "text": "A shirt costs ₱800 with a 25% discount. 800 × 0.25 = ₱200; 800 − 200 = ₱600. Final Sale Price: ₱600",
              "ai": {
                "title": "Halimbawa: 25% Discount",
                "content": "Tanong: Magkano ang babayaran sa ₱800 shirt na may 25% discount?\nSagot: Discount = 800 × 0.25 = ₱200. Sale price = 800 − 200 = ₱600.",
                "prompt": "Explain step by step how to compute a 25% discount on an ₱800 shirt."
              }
            },
            {
              "id": "p7",
              "label": "4. Percentage Increase:",
              "text": "Subtract the original value from the new value, divide by the original value, and multiply by 100.",
              "ai": {
                "title": "Percentage Increase",
                "content": "📖 Kahulugan\nPara malaman ang % increase: (New − Original) ÷ Original × 100.\n\n💡 Simpleng Paliwanag\nI-subtract ang original sa new, i-divide sa original, tapos i-multiply sa 100.\n\n⚠️ Dapat Tandaan\nAng denominator ay laging ang ORIGINAL value, hindi ang new value.",
                "prompt": "Explain how to calculate percentage increase step by step."
              }
            },
            {
              "id": "p8",
              "label": "Example:",
              "indent": 1,
              "text": "A product increases in price from ₱500 to ₱600. (600 − 500)/500 × 100 = 20%",
              "ai": {
                "title": "Halimbawa: 20% Increase",
                "content": "Tanong: Ilang % ang increase mula ₱500 to ₱600?\nSagot: (600 − 500) ÷ 500 × 100 = 100/500 × 100 = 0.20 × 100 = 20%.",
                "prompt": "Explain step by step how to compute the percentage increase from ₱500 to ₱600."
              }
            }
          ]
        }
      ]
    },
    {
      "subject": "Numerical Ability",
      "subject_icon": "🔢",
      "topic": "Ratios and Proportions",
      "topic_order": 3,
      "keywords": [
        "ratios",
        "proportions",
        "tumbasan",
        "proporsyon",
        "GCF",
        "cross multiplication",
        "partitive proportion"
      ],
      "ai": {
        "title": "Gabay sa Ratios and Proportions",
        "content": "📖 Kahulugan\nAng ratio ay paghahambing ng dalawa o higit pang dami. Ang proportion ay equation na nagpapakita ng pagkakapantay ng dalawang ratio.\n\n🔍 Breakdown\n• Writing ratios (12:16)\n• Simplifying ratios (GCF)\n• Proportions (2:4 = 3:6)\n• Cross multiplication\n• Partitive proportion\n\n💡 Simpleng Paliwanag\nAng ratio ay parang \"3 lalaki sa 4 na babae.\" Ang proportion ay \"kung 2:4, dapat 3:6 din.\" Ang partitive proportion ay paghahati ng total base sa ratio.\n\n📦 Halimbawa\n• 12 boys : 16 girls = 3:4\n• 2/3 = x/12 → x = 8\n• ₱1,000 in 2:3 → ₱400 at ₱600\n\n⭐ Bakit Mahalaga Ito?\nMaraming CSE problems ang tungkol sa ratios at proportions — mixtures, recipes, sharing money, at scaled drawings.\n\n⚠️ Dapat Tandaan\n• GCF ang gamit sa pag-simplify.\n• Cross multiplication para sa missing value.\n• Mahalaga ang order: 2:3 ≠ 3:2.\n\n🎯 Exam Tip\nSa partitive proportion, i-add muna ang ratio terms, divide ang total, tapos i-multiply sa bawat term.",
        "prompt": "Explain ratios and proportions in simple Tagalog, including simplifying, cross multiplication, and partitive proportion."
      },
      "sections": [
        {
          "id": "s1",
          "heading": "English Definition",
          "ai": {
            "title": "Ano ang Ratio at Proportion?",
            "content": "📖 Kahulugan\nAng ratio ay paghahambing ng dalawang dami. Ang proportion ay equation na nagpapakita ng pagkakapantay ng dalawang ratio.\n\n💡 Simpleng Paliwanag\nRatio: 12:16. Proportion: 2:4 = 3:6 (pareho silang 1:2).\n\n⚠️ Dapat Tandaan\nAng ratio ay pwedeng isulat sa colon (:) o fraction. Ang proportion ay may equal sign.",
            "prompt": "Explain the difference between ratio and proportion with examples."
          },
          "paragraphs": [
            {
              "id": "p1",
              "text": "A ratio is a mathematical comparison between two or more quantities of the same kind. It shows the relationship between quantities and can be written using a colon (:), as a fraction, or using the word \"to.\" A proportion is an equation that states that two ratios are equal.",
              "ai": {
                "title": "Kahulugan ng Ratio at Proportion",
                "content": "📖 Kahulugan\nAng ratio ay paghahambing ng dalawang dami (12:16). Ang proportion ay equation na nagpapakita ng pagkakapantay ng dalawang ratio (2:4 = 3:6).\n\n💡 Simpleng Paliwanag\nAng ratio ay naghahambing; ang proportion ay nagpapatunay na pareho sila ng value.\n\n⚠️ Dapat Tandaan\nAng ratio ay pwedeng isulat sa colon, fraction, o word form (\"to\").",
                "prompt": "Explain this definition of ratio and proportion with examples."
              }
            }
          ]
        },
        {
          "id": "s2",
          "heading": "Important Concepts",
          "ai": {
            "title": "Mga Konsepto sa Ratio at Proportion",
            "content": "📖 Kahulugan\nLimang konsepto: writing, simplifying, identifying proportions, solving, at partitive.\n\n💡 Simpleng Paliwanag\nBawat isa ay may tamang paraan. Ang simplifying ay GCF; ang solving ay cross multiplication; ang partitive ay total ÷ sum of ratios.\n\n⚠️ Dapat Tandaan\nAng cross multiplication ay (a/b = c/d) → ad = bc.",
            "prompt": "Explain the five key concepts in ratios and proportions."
          },
          "paragraphs": [
            {
              "id": "p1",
              "label": "1. Writing Ratios:",
              "text": "A classroom has 12 boys and 16 girls. Ratio of boys to girls: 12:16. The ratio in simplest form: 12:16 = 3:4.",
              "ai": {
                "title": "Writing Ratios",
                "content": "📖 Kahulugan\nAng ratio ay sinusulat sa colon form (12:16) o fraction form (12/16).\n\n💡 Simpleng Paliwanag\nAng 12:16 ay nagiging 3:4 kapag pinasimple (divide both by 4).\n\n⚠️ Dapat Tandaan\nAng order ay mahalaga: boys:girls = 12:16, hindi 16:12.",
                "prompt": "Explain how to write and simplify ratios with examples."
              }
            },
            {
              "id": "p2",
              "label": "2. Simplifying Ratios:",
              "text": "Divide all terms of the ratio by their Greatest Common Factor (GCF). 18:24 — GCF is 6 — 18÷6 : 24÷6 = 3:4.",
              "ai": {
                "title": "Simplifying Ratios",
                "content": "📖 Kahulugan\nPara i-simplify ang ratio, i-divide ang lahat ng terms sa GCF.\n\n💡 Simpleng Paliwanag\nGCF ng 18 at 24 ay 6. Kaya 18:24 → 3:4.\n\n⚠️ Dapat Tandaan\nHanapin ang GCF ng lahat ng terms bago mag-divide.",
                "prompt": "Explain how to simplify ratios using GCF with examples."
              }
            },
            {
              "id": "p3",
              "label": "3. Proportion:",
              "text": "Two ratios are proportional when they have the same value. 2:4 = 3:6 — both ratios are equivalent to 1:2.",
              "ai": {
                "title": "Proportion",
                "content": "📖 Kahulugan\nAng proportion ay equation na nagsasabi na pareho ang value ng dalawang ratio.\n\n💡 Simpleng Paliwanag\n2:4 = 3:6 dahil pareho silang 1:2 kapag pinasimple.\n\n⚠️ Dapat Tandaan\nAng proportion ay may equal sign; ang ratio ay wala.",
                "prompt": "Explain how to identify proportional ratios with examples."
              }
            },
            {
              "id": "p4",
              "label": "4. Solving Proportions:",
              "text": "Use cross multiplication to find the missing value. 2/3 = x/12 — cross multiply: 3x = 24 — x = 8.",
              "ai": {
                "title": "Solving Proportions",
                "content": "📖 Kahulugan\nPara hanapin ang missing value, gamitin ang cross multiplication.\n\n💡 Simpleng Paliwanag\n2/3 = x/12 → 3 × x = 2 × 12 → 3x = 24 → x = 8.\n\n⚠️ Dapat Tandaan\nI-multiply ang numerator ng isang side sa denominator ng kabilang side.",
                "prompt": "Explain how to solve proportions using cross multiplication with step-by-step examples."
              }
            },
            {
              "id": "p5",
              "label": "5. Partitive Proportion:",
              "text": "This involves dividing a total amount into shares based on a given ratio. Example: Divide ₱1,000 in the ratio 2:3. Step 1: Add the ratio terms (2+3=5). Step 2: Divide the total amount by 5 (₱1,000÷5=₱200). Step 3: Multiply each ratio term by ₱200. First share: 2×200=₱400. Second share: 3×200=₱600. Final Answer: ₱400 and ₱600.",
              "ai": {
                "title": "Partitive Proportion",
                "content": "📖 Kahulugan\nAng partitive proportion ay paghahati ng total base sa isang ratio.\n\n💡 Simpleng Paliwanag\nHakbang: (1) Add ratio terms (2+3=5). (2) Total ÷ sum (1000÷5=200). (3) Multiply each term (2×200=400; 3×200=600).\n\n⚠️ Dapat Tandaan\nLaging i-add muna ang ratio terms bago mag-divide ng total.",
                "prompt": "Explain how to solve partitive proportion problems step by step with examples."
              }
            }
          ]
        }
      ]
    },
    {
      "subject": "Numerical Ability",
      "subject_icon": "🔢",
      "topic": "Word Problems",
      "topic_order": 4,
      "keywords": [
        "word problems",
        "suliraning pang-matematika",
        "age problem",
        "distance",
        "rate",
        "time",
        "average"
      ],
      "ai": {
        "title": "Gabay sa Word Problems",
        "content": "📖 Kahulugan\nAng word problems ay math exercises na nakasulat sa sentences o story form.\n\n🔍 Breakdown\n• Steps: Read, Identify Given, Identify Asked, Choose Operation, Solve, Check\n• Keywords table\n• Examples: Age, Distance, Average\n\n💡 Simpleng Paliwanag\nHindi sapat na makita ang numero — kailangan intindihin ang buong sitwasyon. Basahin muna bago mag-compute.\n\n📦 Halimbawa\n• Age: Maria is 5 years older than Juan, sum = 25 → Juan = 10, Maria = 15\n• Distance: D = R × T = 60 × 3.5 = 210 km\n• Average: (80+90+100)/3 = 90\n\n⭐ Bakit Mahalaga Ito?\nAng word problems ang pinaka-praktikal na application ng math sa totoong buhay at sa CSE.\n\n⚠️ Dapat Tandaan\nAng keywords ay clues, hindi absolute rules. Basahin ang buong sentence — may \"less than\" na nagbabago ng order ng subtraction.\n\n🎯 Exam Tip\nBago mag-compute, isulat kung ano ang given at ano ang hinahanap. Mas malinaw, mas mabilis.",
        "prompt": "Explain word problems in simple Tagalog, including steps, keywords, and examples of age, distance, and average problems."
      },
      "sections": [
        {
          "id": "s1",
          "heading": "English Definition",
          "ai": {
            "title": "Ano ang Word Problems?",
            "content": "📖 Kahulugan\nAng word problems ay math exercises sa sentence/story form na nangangailangan ng analysis bago mag-compute.\n\n💡 Simpleng Paliwanag\nKailangang intindihin ang sitwasyon, tukuyin ang given at hinahanap, pumili ng operation, at mag-solve.\n\n⚠️ Dapat Tandaan\nHuwag agad mag-compute pag nakita ang numero. Intindihin muna ang buong problema.",
            "prompt": "Explain what word problems are and why they require careful reading."
          },
          "paragraphs": [
            {
              "id": "p1",
              "text": "Word problems are mathematical exercises presented in sentences or story form. They require the ability to understand written information, identify given quantities, determine what is being asked, select the correct mathematical operation, create an equation when necessary, and solve the problem logically.",
              "ai": {
                "title": "Kahulugan ng Word Problems",
                "content": "📖 Kahulugan\nAng word problems ay math exercises sa story form. Kailangan mong intindihin, i-identify ang given, at mag-solve.\n\n💡 Simpleng Paliwanag\nHindi lang numero ang titingnan mo — kailangan mong maintindihan ang buong kuwento para pumili ng tamang operation.\n\n⚠️ Dapat Tandaan\nAng tamang sagot ay nagsisimula sa tamang pag-intindi, hindi sa tamang pag-compute.",
                "prompt": "Explain this definition of word problems with examples of what makes them challenging."
              }
            }
          ]
        },
        {
          "id": "s2",
          "heading": "Important Steps in Solving Word Problems",
          "ai": {
            "title": "Mga Hakbang sa Pagsagot",
            "content": "📖 Kahulugan\nAnim na hakbang: Read, Identify Given, Identify Asked, Choose Operation, Solve, Check.\n\n💡 Simpleng Paliwanag\nSunod-sunurin ang mga hakbang para hindi magulo. Ang pag-skip ng hakbang ay nagdudulot ng maling sagot.\n\n⚠️ Dapat Tandaan\nAng huling hakbang (Check) ay madalas nakakalimutan — pero ito ang nagpapatunay na tama ang sagot.",
            "prompt": "Explain the six steps in solving word problems with examples."
          },
          "paragraphs": [
            {
              "id": "p1",
              "label": "Read and Understand:",
              "text": "Read the problem carefully.",
              "ai": {
                "title": "Hakbang 1: Read",
                "content": "Tanong: Bakit kailangang basahin nang mabuti ang problema?\nSagot: Para maintindihan ang buong sitwasyon at hindi magkamali sa operation.",
                "prompt": "Explain why careful reading is the first step in solving word problems."
              }
            },
            {
              "id": "p2",
              "label": "Identify the Given:",
              "text": "Determine the numbers and information provided.",
              "ai": {
                "title": "Hakbang 2: Identify Given",
                "content": "Tanong: Ano ang \"given\" sa word problem?\nSagot: Ito ang mga numerong ibinigay sa problema — halimbawa, ₱500 at 5 araw.",
                "prompt": "Explain how to identify the given information in a word problem."
              }
            },
            {
              "id": "p3",
              "label": "Identify What Is Asked:",
              "text": "Find out what value needs to be calculated.",
              "ai": {
                "title": "Hakbang 3: Identify Asked",
                "content": "Tanong: Ano ang \"asked\" sa word problem?\nSagot: Ito ang hinahanap na value — halimbawa, \"magkano ang kabuuang kinita?\"",
                "prompt": "Explain how to identify what is being asked in a word problem."
              }
            },
            {
              "id": "p4",
              "label": "Choose the Operation:",
              "text": "Determine whether to add, subtract, multiply, or divide.",
              "ai": {
                "title": "Hakbang 4: Choose Operation",
                "content": "Tanong: Paano pipiliin ang tamang operation?\nSagot: Tingnan ang keywords (sum = add, difference = subtract, product = multiply, quotient = divide) at intindihin ang sitwasyon.",
                "prompt": "Explain how to choose the correct mathematical operation in word problems."
              }
            },
            {
              "id": "p5",
              "label": "Solve:",
              "text": "Perform the necessary mathematical calculations.",
              "ai": {
                "title": "Hakbang 5: Solve",
                "content": "Tanong: Paano mag-solve nang tama?\nSagot: Isulat ang equation, tapos i-compute nang maingat. I-double check ang arithmetic.",
                "prompt": "Explain how to perform the calculations accurately in word problems."
              }
            },
            {
              "id": "p6",
              "label": "Check the Answer:",
              "text": "Make sure the answer is reasonable and includes the correct unit.",
              "ai": {
                "title": "Hakbang 6: Check",
                "content": "Tanong: Bakit kailangang i-check ang sagot?\nSagot: Para masigurong reasonable ito at may tamang unit (₱, km, etc.). Kung mali ang unit, malamang mali ang sagot.",
                "prompt": "Explain why checking the answer is important and what to look for."
              }
            }
          ]
        },
        {
          "id": "s3",
          "heading": "Common Mathematical Keywords",
          "ai": {
            "title": "Mga Keyword sa Word Problems",
            "content": "📖 Kahulugan\nAng keywords ay nagbibigay ng clue kung anong operation ang gagamitin.\n\n💡 Simpleng Paliwanag\nSum = addition, difference = subtraction, product = multiplication, quotient = division, is = equals.\n\n⚠️ Dapat Tandaan\nKeywords ay clues, hindi absolute rules. Basahin ang buong sentence — may \"less than\" na nagbabago ng order.",
            "prompt": "Explain common mathematical keywords and how they map to operations."
          },
          "paragraphs": [
            {
              "id": "p1",
              "label": "Sum, total, altogether:",
              "text": "Addition (+)",
              "ai": {
                "title": "Keywords for Addition",
                "content": "Tanong: Anong operation ang sum, total, altogether?\nSagot: Addition (+). Halimbawa: \"total sales\" = i-add lahat ng sales.",
                "prompt": "Explain keywords that signal addition in word problems."
              }
            },
            {
              "id": "p2",
              "label": "Difference, less, decreased by:",
              "text": "Subtraction (−)",
              "ai": {
                "title": "Keywords for Subtraction",
                "content": "Tanong: Anong operation ang difference, less, decreased by?\nSagot: Subtraction (−). Pero mag-ingat sa \"less than\" — nagbabago ito ng order.",
                "prompt": "Explain keywords that signal subtraction and the 'less than' trap."
              }
            },
            {
              "id": "p3",
              "label": "Product, times, multiplied by:",
              "text": "Multiplication (×)",
              "ai": {
                "title": "Keywords for Multiplication",
                "content": "Tanong: Anong operation ang product, times, multiplied by?\nSagot: Multiplication (×). Halimbawa: \"5 times a number\" = 5 × n.",
                "prompt": "Explain keywords that signal multiplication."
              }
            },
            {
              "id": "p4",
              "label": "Quotient, divided by, per:",
              "text": "Division (÷)",
              "ai": {
                "title": "Keywords for Division",
                "content": "Tanong: Anong operation ang quotient, divided by, per?\nSagot: Division (÷). Halimbawa: \"per day\" = i-divide sa bilang ng araw.",
                "prompt": "Explain keywords that signal division."
              }
            },
            {
              "id": "p5",
              "label": "Is, equals, results in:",
              "text": "Equal sign (=)",
              "ai": {
                "title": "Keywords for Equals",
                "content": "Tanong: Anong ibig sabihin ng is, equals, results in?\nSagot: Equal sign (=). Ito ang naghihiwalay sa equation.",
                "prompt": "Explain keywords that signal an equal sign in equations."
              }
            }
          ]
        },
        {
          "id": "s4",
          "heading": "English Examples",
          "ai": {
            "title": "Mga Halimbawa ng Word Problems",
            "content": "📖 Kahulugan\nTatlong uri: Age, Distance, at Average problems.\n\n💡 Simpleng Paliwanag\nAng age problem ay may variable na edad; ang distance ay D = R × T; ang average ay sum ÷ count.\n\n⚠️ Dapat Tandaan\nI-check ang unit ng sagot (taon, km, score) para masigurong tama.",
            "prompt": "Explain age, distance, and average word problems with solutions."
          },
          "paragraphs": [
            {
              "id": "p1",
              "label": "1. Age Problem:",
              "text": "Maria is 5 years older than Juan. The sum of their ages is 25. How old is Juan? Let x = Juan's age. Maria's age = x + 5. Equation: x + (x + 5) = 25 → 2x + 5 = 25 → 2x = 20 → x = 10. Final Answer: Juan is 10 years old, and Maria is 15 years old.",
              "ai": {
                "title": "Age Problem",
                "content": "📖 Kahulugan\nAng age problem ay may variable na edad (x) at relasyon (5 years older).\n\n💡 Simpleng Paliwanag\nx = Juan's age; x + 5 = Maria's age. Sum = 25, kaya x + (x + 5) = 25. Solve: 2x + 5 = 25 → 2x = 20 → x = 10.\n\n⚠️ Dapat Tandaan\nI-check: Juan = 10, Maria = 15. 10 + 15 = 25 ✓",
                "prompt": "Explain how to solve this age problem step by step with variable setup."
              }
            },
            {
              "id": "p2",
              "label": "2. Distance, Rate, and Time Problem:",
              "text": "A car travels at a constant speed of 60 km/h for 3.5 hours. How far does it travel? Formula: D = R × T. Solution: D = 60 × 3.5 = 210 km. Final Answer: The car travels 210 kilometers.",
              "ai": {
                "title": "Distance Problem",
                "content": "📖 Kahulugan\nFormula: D = R × T (Distance = Rate × Time).\n\n💡 Simpleng Paliwanag\nRate = 60 km/h, Time = 3.5 h. D = 60 × 3.5 = 210 km.\n\n⚠️ Dapat Tandaan\nTiyakin na pareho ang unit ng rate at time (km/h at hours).",
                "prompt": "Explain how to solve this distance-rate-time problem step by step."
              }
            },
            {
              "id": "p3",
              "label": "3. Average Problem:",
              "text": "A student gets scores of 80, 90, and 100 in three examinations. What is the average? Formula: Average = Sum of Values / Number of Values. Solution: (80 + 90 + 100) / 3 = 270 / 3 = 90. Final Answer: The average score is 90.",
              "ai": {
                "title": "Average Problem",
                "content": "📖 Kahulugan\nFormula: Average = Sum ÷ Count.\n\n💡 Simpleng Paliwanag\nSum = 80 + 90 + 100 = 270. Count = 3. Average = 270 ÷ 3 = 90.\n\n⚠️ Dapat Tandaan\nHuwag kalimutang i-divide sa tamang count — 3 exam scores, hindi 2.",
                "prompt": "Explain how to solve this average problem step by step."
              }
            }
          ]
        }
      ]
    },
    {
      "subject": "Numerical Ability",
      "subject_icon": "🔢",
      "topic": "Tables and Graphs",
      "topic_order": 5,
      "keywords": [
        "tables",
        "graphs",
        "bar graph",
        "line graph",
        "pie chart",
        "histogram",
        "data interpretation"
      ],
      "ai": {
        "title": "Gabay sa Tables and Graphs",
        "content": "📖 Kahulugan\nAng tables at graphs ay paraan ng pag-organize at pag-interpret ng numerical data.\n\n🔍 Breakdown\n• Table — rows at columns\n• Bar Graph — rectangular bars\n• Line Graph — connected points\n• Pie Chart — circular sections\n• Histogram — adjoining bars (frequency)\n\n💡 Simpleng Paliwanag\nAng table ay listahan; ang graph ay biswal na presentasyon. Ang bawat uri ay may tamang gamit — bar para sa comparison, line para sa trend, pie para sa parts of whole.\n\n📦 Halimbawa\n• Table: Jan ₱15,000; Feb ₱20,000; Mar ₱25,000 → Average = ₱20,000\n• Bar: Section C (50) ang highest\n• Line: Wednesday (32°C) ang highest\n• Pie: 40% of ₱30,000 = ₱12,000\n\n⭐ Bakit Mahalaga Ito?\nMaraming CSE questions ang nagtatanong ng interpretasyon ng tables at graphs.\n\n⚠️ Dapat Tandaan\n• Basahin ang title at labels.\n• Tiyakin ang unit (₱, °C, students).\n• Hanapin ang highest at lowest values.\n\n🎯 Exam Tip\nSa pie chart, i-multiply ang percentage sa total para makuha ang halaga. Sa bar/line graph, i-compare ang heights para malaman ang highest/lowest.",
        "prompt": "Explain tables and graphs in simple Tagalog, covering bar, line, pie, and histogram, with interpretation tips for CSE."
      },
      "sections": [
        {
          "id": "s1",
          "heading": "English Definition",
          "ai": {
            "title": "Ano ang Tables at Graphs?",
            "content": "📖 Kahulugan\nAng tables at graphs ay paraan ng pag-organize at pag-present ng data.\n\n💡 Simpleng Paliwanag\nAng table ay rows at columns; ang graph ay biswal na representasyon.\n\n⚠️ Dapat Tandaan\nNakakatulong ang mga ito upang mabilis na makita ang comparison, pattern, at trend.",
            "prompt": "Explain what tables and graphs are and why they are used."
          },
          "paragraphs": [
            {
              "id": "p1",
              "text": "Tables and graphs are methods of organizing, presenting, and interpreting numerical information or data. They help readers understand comparisons, patterns, changes, and relationships between different sets of information. Tables display information in rows and columns, while graphs present data visually to make comparisons and trends easier to understand.",
              "ai": {
                "title": "Kahulugan ng Tables at Graphs",
                "content": "📖 Kahulugan\nAng tables at graphs ay nag-o-organize at nag-present ng numerical data.\n\n💡 Simpleng Paliwanag\nNakakatulong sila upang mabilis na makita ang comparison, pattern, at trend — hindi mo na kailangang basahin lahat ng numero.\n\n⚠️ Dapat Tandaan\nAng table ay text-based; ang graph ay visual. Pareho silang nagpapakita ng data sa madaling maintindihang paraan.",
                "prompt": "Explain this definition of tables and graphs with examples of when to use each."
              }
            }
          ]
        },
        {
          "id": "s2",
          "heading": "Important Types of Tables and Graphs",
          "ai": {
            "title": "Mga Uri ng Graphs",
            "content": "📖 Kahulugan\nLimang uri: table, bar graph, line graph, pie chart, histogram.\n\n💡 Simpleng Paliwanag\nAng bawat uri ay may tamang gamit: table para sa raw data, bar para sa comparison, line para sa trend, pie para sa parts, histogram para sa frequency.\n\n⚠️ Dapat Tandaan\nHuwag pagkamalain ang bar graph (categories) at histogram (intervals).",
            "prompt": "Explain the five types of tables and graphs with examples."
          },
          "paragraphs": [
            {
              "id": "p1",
              "label": "1. Table:",
              "text": "Organizes information using rows and columns. Example: A table showing the monthly sales of a store.",
              "ai": {
                "title": "Table",
                "content": "📖 Kahulugan\nAng table ay nag-o-organize ng info sa rows at columns.\n\n💡 Simpleng Paliwanag\nParang listahan na may header — madaling tingnan ang data.\n\n⚠️ Dapat Tandaan\nHanapin ang title at labels para malaman kung ano ang data.",
                "prompt": "Explain how tables organize information with examples."
              }
            },
            {
              "id": "p2",
              "label": "2. Bar Graph:",
              "text": "Uses rectangular bars to compare quantities between different categories. Example: Comparing the number of students in different sections.",
              "ai": {
                "title": "Bar Graph",
                "content": "📖 Kahulugan\nAng bar graph ay gumagamit ng rectangular bars para i-compare ang quantities.\n\n💡 Simpleng Paliwanag\nMas mataas ang bar, mas malaki ang value.\n\n⚠️ Dapat Tandaan\nTingnan ang y-axis para sa scale at units.",
                "prompt": "Explain how bar graphs work and how to read them."
              }
            },
            {
              "id": "p3",
              "label": "3. Line Graph:",
              "text": "Uses connected points or lines to show changes or trends over time. Example: Tracking temperature changes throughout the week.",
              "ai": {
                "title": "Line Graph",
                "content": "📖 Kahulugan\nAng line graph ay nagpapakita ng changes/trends over time gamit ang connected points.\n\n💡 Simpleng Paliwanag\nAng pataas na linya = pagtaas; pababa = pagbaba.\n\n⚠️ Dapat Tandaan\nAng x-axis ay kadalasang time (araw, buwan, taon).",
                "prompt": "Explain how line graphs show trends over time."
              }
            },
            {
              "id": "p4",
              "label": "4. Pie Chart:",
              "text": "Uses a circular graph divided into sections to represent parts of a whole, usually expressed in percentages. Example: Showing how a family divides its monthly budget.",
              "ai": {
                "title": "Pie Chart",
                "content": "📖 Kahulugan\nAng pie chart ay circular graph na hinati sa sections para ipakita ang parts of a whole.\n\n💡 Simpleng Paliwanag\nAng buong pie ay 100%. Ang bawat slice ay isang percentage ng total.\n\n⚠️ Dapat Tandaan\nI-multiply ang % sa total para makuha ang exact value.",
                "prompt": "Explain how pie charts represent parts of a whole."
              }
            },
            {
              "id": "p5",
              "label": "5. Histogram:",
              "text": "Uses adjoining bars to show the frequency distribution of numerical data grouped into intervals. Example: Showing how many students belong to different examination score ranges.",
              "ai": {
                "title": "Histogram",
                "content": "📖 Kahulugan\nAng histogram ay adjoining bars na nagpapakita ng frequency distribution sa intervals.\n\n💡 Simpleng Paliwanag\nParang bar graph pero continuous ang data (intervals tulad ng 70-79, 80-89).\n\n⚠️ Dapat Tandaan\nWalang space between bars — continuous ang data.",
                "prompt": "Explain histograms and how they differ from bar graphs."
              }
            }
          ]
        },
        {
          "id": "s3",
          "heading": "English Examples",
          "ai": {
            "title": "Mga Halimbawa ng Data Interpretation",
            "content": "📖 Kahulugan\nApat na halimbawa: table, bar graph, line graph, pie chart.\n\n💡 Simpleng Paliwanag\nBawat isa ay may tamang formula: table = average; pie = % × total.\n\n⚠️ Dapat Tandaan\nBasahin muna ang title at labels bago mag-compute.",
            "prompt": "Explain these four data interpretation examples with solutions."
          },
          "paragraphs": [
            {
              "id": "p1",
              "label": "1. Table Interpretation:",
              "text": "A store records: January ₱15,000; February ₱20,000; March ₱25,000. What is the average monthly sale? Solution: (15,000 + 20,000 + 25,000) / 3 = 60,000 / 3 = ₱20,000. Final Answer: ₱20,000.",
              "ai": {
                "title": "Table Interpretation",
                "content": "Tanong: Paano nakuha ang average na ₱20,000?\nSagot: Sum = 15,000 + 20,000 + 25,000 = 60,000. Divide by 3 months = ₱20,000.",
                "prompt": "Explain how to compute the average monthly sale from this table."
              }
            },
            {
              "id": "p2",
              "label": "2. Bar Graph Interpretation:",
              "text": "Section A: 30 students; Section B: 40 students; Section C: 50 students. Which section has the highest number of students? Answer: Section C, with 50 students.",
              "ai": {
                "title": "Bar Graph Interpretation",
                "content": "Tanong: Aling section ang may pinakamaraming estudyante?\nSagot: Section C (50), kasi pinakamataas ang bar nito.",
                "prompt": "Explain how to identify the highest value from this bar graph data."
              }
            },
            {
              "id": "p3",
              "label": "3. Line Graph Interpretation:",
              "text": "Temperatures: Monday 28°C; Tuesday 30°C; Wednesday 32°C; Thursday 29°C. What is the highest temperature recorded? Answer: 32°C on Wednesday.",
              "ai": {
                "title": "Line Graph Interpretation",
                "content": "Tanong: Anong araw ang pinakamainit?\nSagot: Miyerkules (32°C) — pinakamataas na point sa line graph.",
                "prompt": "Explain how to find the highest temperature from this line graph data."
              }
            },
            {
              "id": "p4",
              "label": "4. Pie Chart Interpretation:",
              "text": "A family's monthly budget is ₱30,000, and 40% is allocated for food. How much is spent on food? Solution: ₱30,000 × 0.40 = ₱12,000. Final Answer: ₱12,000.",
              "ai": {
                "title": "Pie Chart Interpretation",
                "content": "Tanong: Magkano ang para sa food kung 40% ng ₱30,000?\nSagot: 30,000 × 0.40 = ₱12,000.",
                "prompt": "Explain how to compute the exact amount from a pie chart percentage."
              }
            }
          ]
        }
      ]
    },
    {
      "subject": "Analytical Ability",
      "subject_icon": "🧠",
      "topic": "Number Series",
      "topic_order": 1,
      "keywords": [
        "number series",
        "arithmetic",
        "geometric",
        "alternating",
        "square numbers",
        "cube numbers",
        "pattern",
        "serye"
      ],
      "ai": {
        "title": "Gabay sa Number Series",
        "content": "📖 Kahulugan\nAng number series ay sunod-sunod na hanay ng mga numero na sumusunod sa isang partikular na pattern o rule. Ang gawain ay tukuyin kung paano nagbabago ang bawat numero para mahanap ang nawawala o susunod na numero.\n\n🔍 Breakdown\nMga karaniwang pattern:\n• Arithmetic Progression — constant addition/subtraction\n• Geometric Progression — constant multiplication/division\n• Alternating Series — dalawang pattern na salitan\n• Square Numbers — 1, 4, 9, 16, 25...\n• Cube Numbers — 1, 8, 27, 64...\n• Increasing Difference — +1, +2, +3, +4...\n\n💡 Simpleng Paliwanag\nIsipin mong detective ka — kailangan mong hanapin ang \"pattern\" ng mga numero. Tingnan ang pagitan ng bawat isa. Kung pare-pareho ang dagdag, arithmetic ito. Kung dumarami, geometric. Kung may special (squares, cubes), i-check mo yun.\n\n📦 Halimbawa\n• Arithmetic: 2, 5, 8, 11 → next = 14 (+3)\n• Geometric: 3, 6, 12, 24 → next = 48 (×2)\n• Alternating: 2, 5, 4, 10, 6, 15 → next = 8\n• Squares: 1, 4, 9, 16, 25 → next = 36 (6²)\n• Cubes: 1, 8, 27, 64 → next = 125 (5³)\n\n⭐ Bakit Mahalaga Ito?\nIsa ito sa pinakamadalas na uri ng tanong sa CSE Analytical Ability. Madaling makakuha ng puntos dito kung kabisado mo ang patterns.\n\n⚠️ Dapat Tandaan\nHuwag agad mag-assume na addition lang. I-check din: may alternating pattern ba? Perfect squares/cubes ba? Increasing ba ang differences?\n\n🎯 Exam Tip\nSa number series, unahin ang differences between consecutive numbers. Kung may pattern agad, arithmetic. Kung wala, i-check ang ratios. Kung wala pa rin, hanapin ang squares, cubes, o double patterns.",
        "prompt": "Explain number series patterns in simple Tagalog — arithmetic, geometric, alternating, square, cube, and increasing difference — with examples and CSE exam tips."
      },
      "sections": [
        {
          "id": "s1",
          "heading": "English Definition",
          "ai": {
            "title": "Kahulugan ng Number Series",
            "content": "📖 Kahulugan\nAng number series ay ordered sequence ng mga numero na may specific pattern.\n\n💡 Simpleng Paliwanag\nLayunin mo: identify the relationship between consecutive numbers para malaman ang nawawala o susunod.\n\n⚠️ Dapat Tandaan\nCommon patterns: addition, subtraction, multiplication, division, alternating, squares, at cubes.",
            "prompt": "Explain what a number series is with examples of different patterns."
          },
          "paragraphs": [
            {
              "id": "p1",
              "text": "A number series is an ordered sequence of numbers that follows a specific mathematical rule or pattern. The objective is to identify the relationship between consecutive numbers and determine the missing or next number in the sequence. Common patterns include addition, subtraction, multiplication, division, alternating operations, and square or cube numbers.",
              "ai": {
                "title": "Ano ang Number Series?",
                "content": "📖 Kahulugan\nAng number series ay ordered sequence ng mga numero na sumusunod sa isang rule o pattern.\n\n💡 Simpleng Paliwanag\nAng gawain mo ay tukuyin ang pattern sa pagitan ng consecutive numbers para mahanap ang susunod.\n\n⚠️ Dapat Tandaan\nKaraniwang patterns: addition, subtraction, multiplication, division, alternating, squares, at cubes.",
                "prompt": "Explain this definition of number series with examples of each pattern type."
              }
            }
          ]
        },
        {
          "id": "s2",
          "heading": "Important Types of Number Series",
          "ai": {
            "title": "Mga Uri ng Number Series",
            "content": "📖 Kahulugan\nAnim na karaniwang uri ng number series na lumalabas sa CSE.\n\n💡 Simpleng Paliwanag\nBawat isa ay may unique na pattern — arithmetic (constant add), geometric (constant multiply), alternating (dalawa-salitan), squares, cubes, at increasing difference.\n\n⚠️ Dapat Tandaan\nPag hindi mo makita ang pattern sa first pass, i-check ang differences muna, tapos ratios, tapos squares/cubes.",
            "prompt": "Explain the six main types of number series with examples."
          },
          "paragraphs": [
            {
              "id": "p1",
              "label": "1. Arithmetic Progression:",
              "text": "A sequence in which the same number is repeatedly added or subtracted.",
              "ai": {
                "title": "Arithmetic Progression",
                "content": "📖 Kahulugan\nAng arithmetic progression ay sequence kung saan constant ang dinadagdag (o binabawas) sa bawat step.\n\n💡 Simpleng Paliwanag\nKung pareho ang pagitan ng lahat ng number, arithmetic ito.\n\n⚠️ Dapat Tandaan\nHanapin ang common difference: (term2 − term1) = (term3 − term2) = ...",
                "prompt": "Explain arithmetic progression with examples."
              }
            },
            {
              "id": "p2",
              "label": "Example:",
              "indent": 1,
              "text": "Find the next number: 2, 5, 8, 11, ? Solution: 2+3=5, 5+3=8, 8+3=11, 11+3=14. Answer: 14",
              "ai": {
                "title": "Halimbawa ng Arithmetic",
                "content": "Tanong: Paano naging 14 ang susunod?\nSagot: Pare-pareho ang dagdag na +3 sa bawat term. Kaya 11 + 3 = 14.",
                "prompt": "Explain step by step how to find the next number in the series 2, 5, 8, 11."
              }
            },
            {
              "id": "p3",
              "label": "2. Geometric Progression:",
              "text": "A sequence in which each number is multiplied or divided by the same value.",
              "ai": {
                "title": "Geometric Progression",
                "content": "📖 Kahulugan\nAng geometric progression ay sequence kung saan constant ang multiplier (o divisor) sa bawat step.\n\n💡 Simpleng Paliwanag\nKung doble o triple ang bawat term, geometric ito.\n\n⚠️ Dapat Tandaan\nHanapin ang common ratio: term2 ÷ term1 = term3 ÷ term2 = ...",
                "prompt": "Explain geometric progression with examples."
              }
            },
            {
              "id": "p4",
              "label": "Example:",
              "indent": 1,
              "text": "Find the next number: 3, 6, 12, 24, ? Solution: Each number is multiplied by 2. 24×2 = 48. Answer: 48",
              "ai": {
                "title": "Halimbawa ng Geometric",
                "content": "Tanong: Paano naging 48 ang susunod?\nSagot: Bawat term ay dinodoble (×2). Kaya 24 × 2 = 48.",
                "prompt": "Explain step by step how to find the next number in the series 3, 6, 12, 24."
              }
            },
            {
              "id": "p5",
              "label": "3. Alternating Number Series:",
              "text": "A sequence that follows two or more different patterns alternately.",
              "ai": {
                "title": "Alternating Series",
                "content": "📖 Kahulugan\nAng alternating series ay may dalawa o higit pang pattern na salitan.\n\n💡 Simpleng Paliwanag\nIhiwalay ang odd positions at even positions, tapos tingnan ang pattern ng bawat isa.\n\n⚠️ Dapat Tandaan\nHindi ito regular sequence — kailangang i-split ang series para makita ang dalawang pattern.",
                "prompt": "Explain alternating number series with examples."
              }
            },
            {
              "id": "p6",
              "label": "Example:",
              "indent": 1,
              "text": "2, 5, 4, 10, 6, 15, ? Solution: Odd positions: 2, 4, 6, 8. Even positions: 5, 10, 15. Answer: 8",
              "ai": {
                "title": "Halimbawa ng Alternating",
                "content": "Tanong: Paano naging 8 ang susunod?\nSagot: Odd positions (1st, 3rd, 5th, 7th): 2, 4, 6, 8 (+2). Even positions (2nd, 4th, 6th): 5, 10, 15 (+5). Kaya ang 7th term ay 8.",
                "prompt": "Explain step by step how to solve this alternating series."
              }
            },
            {
              "id": "p7",
              "label": "4. Square Number Series:",
              "text": "A sequence that follows the pattern of perfect squares.",
              "ai": {
                "title": "Square Number Series",
                "content": "📖 Kahulugan\nAng square number series ay galing sa perfect squares: 1², 2², 3², 4², 5²...\n\n💡 Simpleng Paliwanag\nAng sequence ay 1, 4, 9, 16, 25, 36, 49, 64, 81, 100...\n\n⚠️ Dapat Tandaan\nDifference pattern ng squares: +3, +5, +7, +9, +11 (odd numbers na increasing).",
                "prompt": "Explain square number series with examples."
              }
            },
            {
              "id": "p8",
              "label": "Example:",
              "indent": 1,
              "text": "1, 4, 9, 16, 25, ? Solution: 1², 2², 3², 4², 5², 6². 6² = 36. Answer: 36",
              "ai": {
                "title": "Halimbawa ng Square Series",
                "content": "Tanong: Paano naging 36 ang susunod?\nSagot: Ang sequence ay squares ng 1, 2, 3, 4, 5, 6. Kaya 6² = 36.",
                "prompt": "Explain step by step how to find the next square number."
              }
            },
            {
              "id": "p9",
              "label": "5. Cube Number Series:",
              "text": "A sequence that follows the pattern of perfect cubes.",
              "ai": {
                "title": "Cube Number Series",
                "content": "📖 Kahulugan\nAng cube number series ay galing sa perfect cubes: 1³, 2³, 3³, 4³, 5³...\n\n💡 Simpleng Paliwanag\nAng sequence ay 1, 8, 27, 64, 125, 216...\n\n⚠️ Dapat Tandaan\nAng difference ng cubes: +7, +19, +37, +61 — hindi regular, kaya siguraduhing cube talaga ang pattern.",
                "prompt": "Explain cube number series with examples."
              }
            },
            {
              "id": "p10",
              "label": "Example:",
              "indent": 1,
              "text": "1, 8, 27, 64, ? Solution: 1³, 2³, 3³, 4³, 5³. 5³ = 125. Answer: 125",
              "ai": {
                "title": "Halimbawa ng Cube Series",
                "content": "Tanong: Paano naging 125 ang susunod?\nSagot: Ang sequence ay cubes ng 1, 2, 3, 4, 5. Kaya 5³ = 125.",
                "prompt": "Explain step by step how to find the next cube number."
              }
            },
            {
              "id": "p11",
              "label": "6. Increasing Difference Series:",
              "text": "A sequence in which the differences between consecutive numbers follow an increasing pattern.",
              "ai": {
                "title": "Increasing Difference Series",
                "content": "📖 Kahulugan\nAng increasing difference series ay may pattern sa differences — bawat difference ay tumataas.\n\n💡 Simpleng Paliwanag\nAng differences ay nag-iincrease: +1, +2, +3, +4, +5...\n\n⚠️ Dapat Tandaan\nHindi constant ang difference — kaya kailangan mong hanapin ang pattern ng differences mismo.",
                "prompt": "Explain increasing difference series with examples."
              }
            },
            {
              "id": "p12",
              "label": "Example:",
              "indent": 1,
              "text": "2, 3, 5, 8, 12, ? Solution: Differences: +1, +2, +3, +4. Next difference is +5. 12+5 = 17. Answer: 17",
              "ai": {
                "title": "Halimbawa ng Increasing Difference",
                "content": "Tanong: Paano naging 17 ang susunod?\nSagot: Ang differences ay +1, +2, +3, +4 — tumataas ng 1 bawat step. Kaya next difference ay +5: 12 + 5 = 17.",
                "prompt": "Explain step by step how to solve this increasing difference series."
              }
            }
          ]
        }
      ]
    },
    {
      "subject": "Analytical Ability",
      "subject_icon": "🧠",
      "topic": "Logic",
      "topic_order": 2,
      "keywords": [
        "logic",
        "syllogism",
        "blood relations",
        "direction sense",
        "seating arrangement",
        "coding decoding",
        "deductive",
        "inductive",
        "lohika"
      ],
      "ai": {
        "title": "Gabay sa Logic (Lohika)",
        "content": "📖 Kahulugan\nAng logic ay ang kakayahang mag-isip nang malinaw, magsuri ng impormasyon, at makabuo ng tamang konklusyon gamit ang mga ibinigay na pahayag.\n\n🔍 Breakdown\nAnim na uri ng logical reasoning:\n• Syllogism — conclusion mula sa statements\n• Blood Relations — family relationships\n• Direction Sense — directions at movements\n• Seating Arrangement — positioning\n• Coding and Decoding — letter/number patterns\n• Deductive at Inductive Reasoning — general to specific at vice versa\n\n💡 Simpleng Paliwanag\nHindi ito hula — kailangan mong gamitin ang mga detalye at relasyon para makuha ang lohikal na sagot. Kung may given information, yun lang ang gamitin. Huwag mag-imbento ng sariling assumptions.\n\n📦 Halimbawa\n• Syllogism: All cats are animals. All animals need water. → All cats need water.\n• Blood Relations: John is son of Mary's brother → John is Mary's nephew.\n• Coding: CAT → DBU (bawat letter +1) → DOG → EPH\n\n⭐ Bakit Mahalaga Ito?\nMalaking bahagi ng CSE Analytical Ability. Sinusukat nito ang iyong critical thinking at attention to detail.\n\n⚠️ Dapat Tandaan\nGamitin lamang ang impormasyong nasa problem. Huwag magdagdag ng sariling palagay na wala sa given.\n\n🎯 Exam Tip\nSa logic problems, isulat ang mga given sa bullet form at i-drawing (kung kailangan) para mas malinaw ang relationships.",
        "prompt": "Explain logical reasoning types in simple Tagalog — syllogism, blood relations, direction sense, seating, coding, deductive/inductive — with examples and CSE traps."
      },
      "sections": [
        {
          "id": "s1",
          "heading": "English Definition",
          "ai": {
            "title": "Kahulugan ng Logic",
            "content": "📖 Kahulugan\nAng logic ay kakayahang mag-isip nang malinaw at gumawa ng tamang konklusyon base sa given information.\n\n💡 Simpleng Paliwanag\nSinusukat nito ang deductive reasoning (general → specific) at inductive reasoning (specific observations → general pattern).\n\n⚠️ Dapat Tandaan\nAng logic ay hindi hula — may basehan sa given statements.",
            "prompt": "Explain what logic is and why it matters in exams."
          },
          "paragraphs": [
            {
              "id": "p1",
              "text": "Logic refers to the ability to think clearly, analyze information, recognize relationships, and draw reasonable conclusions based on given facts or statements. Logical reasoning questions measure a person's ability to solve problems using deductive reasoning (applying general rules to specific situations), inductive reasoning (identifying general patterns from observations), and other forms of analytical thinking.",
              "ai": {
                "title": "Ano ang Logic?",
                "content": "📖 Kahulugan\nAng logic ay kakayahang mag-isip nang malinaw at magbigay ng tamang konklusyon base sa facts.\n\n💡 Simpleng Paliwanag\nDalawang main approach: deductive (general → specific) at inductive (observations → general pattern).\n\n⚠️ Dapat Tandaan\nAng logic ay structured thinking — hindi basta hula o intuition.",
                "prompt": "Explain this definition of logic with deductive and inductive examples."
              }
            }
          ]
        },
        {
          "id": "s2",
          "heading": "Important Types of Logical Reasoning",
          "ai": {
            "title": "Mga Uri ng Logical Reasoning",
            "content": "📖 Kahulugan\nAnim na uri: syllogism, blood relations, direction sense, seating arrangement, coding/decoding, deductive/inductive.\n\n💡 Simpleng Paliwanag\nBawat isa ay may unique approach. Ang syllogism ay tungkol sa validity ng conclusion; ang blood relations ay tungkol sa family tree; ang coding ay tungkol sa letter shifts.\n\n⚠️ Dapat Tandaan\nSa bawat uri, may tamang method — hindi basta hula.",
            "prompt": "Explain the six types of logical reasoning with examples."
          },
          "paragraphs": [
            {
              "id": "p1",
              "label": "1. Syllogism:",
              "text": "A reasoning method that uses two or more statements to determine whether a conclusion logically follows.",
              "ai": {
                "title": "Syllogism",
                "content": "📖 Kahulugan\nAng syllogism ay gumagamit ng dalawa o higit pang statements para tukuyin kung lohikal ang conclusion.\n\n💡 Simpleng Paliwanag\nRule of thumb: kung general statement → specific case, dapat mag-follow ang conclusion.\n\n⚠️ Dapat Tandaan\nHindi porke may valid form, true ang conclusion — kailangang true din ang premises.",
                "prompt": "Explain syllogism with clear examples of valid and invalid reasoning."
              }
            },
            {
              "id": "p2",
              "label": "Example:",
              "indent": 1,
              "text": "Statement 1: All cats are animals. Statement 2: All animals need water. Conclusion: Therefore, all cats need water. Answer: The conclusion is logically valid.",
              "ai": {
                "title": "Halimbawa ng Syllogism",
                "content": "Tanong: Bakit valid ang conclusion?\nSagot: Kung lahat ng cats ay animals, at lahat ng animals ay nangangailangan ng water — kung gayon, lahat ng cats ay nangangailangan ng water. Transitive property ito.",
                "prompt": "Explain step by step why this syllogism is valid."
              }
            },
            {
              "id": "p3",
              "label": "2. Blood Relations:",
              "text": "Questions that test your ability to identify family relationships based on given information.",
              "ai": {
                "title": "Blood Relations",
                "content": "📖 Kahulugan\nAng blood relations ay tungkol sa family ties — mother, father, sibling, uncle, aunt, nephew, niece, etc.\n\n💡 Simpleng Paliwanag\nI-drawing ang family tree para malinaw ang relationships. I-identify ang gender at generation ng bawat tao.\n\n⚠️ Dapat Tandaan\nMag-ingat sa gender pronouns (he/she) — malaking clue ito sa relasyon.",
                "prompt": "Explain how to solve blood relation problems with a family tree."
              }
            },
            {
              "id": "p4",
              "label": "Example:",
              "indent": 1,
              "text": "John is the son of Mary's brother. How is John related to Mary? Solution: Mary's brother is John's father. John is the son of Mary's brother. Therefore, John is Mary's nephew. Answer: Nephew",
              "ai": {
                "title": "Halimbawa ng Blood Relation",
                "content": "Tanong: Paano naging nephew si John ni Mary?\nSagot: Ang brother ni Mary ay ama ni John. Kaya si John ay anak ng kapatid ni Mary = pamangkin (nephew).",
                "prompt": "Explain step by step how to solve this blood relation problem."
              }
            },
            {
              "id": "p5",
              "label": "3. Direction Sense:",
              "text": "Questions that test your ability to determine directions and movements.",
              "ai": {
                "title": "Direction Sense",
                "content": "📖 Kahulugan\nAng direction sense ay tungkol sa pag-navigate — North, South, East, West, Northeast, Northwest, Southeast, Southwest.\n\n💡 Simpleng Paliwanag\nI-drawing ang path sa papel. I-set ang North sa taas, South sa baba, East sa kanan, West sa kaliwa.\n\n⚠️ Dapat Tandaan\nI-check ang \"from\" — mula sa starting point ba o mula sa current position ang hinihingi?",
                "prompt": "Explain direction sense problems with a clear method."
              }
            },
            {
              "id": "p6",
              "label": "Example:",
              "indent": 1,
              "text": "A person walks 5 meters north, then 3 meters east. In which direction is the person from the starting point? Solution: The person is now northeast of the starting point. Answer: Northeast",
              "ai": {
                "title": "Halimbawa ng Direction",
                "content": "Tanong: Bakit Northeast ang sagot?\nSagot: Pahilaga 5m, tapos pasilangan 3m. From starting point, nasa northeast direction siya — combination ng North at East.",
                "prompt": "Explain step by step how to determine the direction in this problem."
              }
            },
            {
              "id": "p7",
              "label": "4. Seating Arrangement:",
              "text": "Questions that require arranging people or objects according to specific conditions.",
              "ai": {
                "title": "Seating Arrangement",
                "content": "📖 Kahulugan\nAng seating arrangement ay tungkol sa positioning ng mga tao o bagay base sa given conditions.\n\n💡 Simpleng Paliwanag\nI-drawing ang row (o circle) at i-place ang bawat tao base sa clues. Start sa pinaka-specific clue.\n\n⚠️ Dapat Tandaan\nI-check ang left/right pag nakaharap sa iba — nag-iiba ito depende sa perspective.",
                "prompt": "Explain seating arrangement problems with a clear method."
              }
            },
            {
              "id": "p8",
              "label": "Example:",
              "indent": 1,
              "text": "Ana, Ben, and Carlo are sitting in a row. Ana is on the left of Ben, and Carlo is on the right of Ben. Who is in the middle? Solution: Ana — Ben — Carlo. Answer: Ben",
              "ai": {
                "title": "Halimbawa ng Seating",
                "content": "Tanong: Paano naging Ben ang nasa gitna?\nSagot: Si Ana ay nasa kaliwa ni Ben, si Carlo ay nasa kanan ni Ben. Kaya ang order: Ana-Ben-Carlo. Nasa gitna si Ben.",
                "prompt": "Explain step by step how to solve this seating arrangement."
              }
            },
            {
              "id": "p9",
              "label": "5. Coding and Decoding:",
              "text": "Questions that involve changing letters, numbers, or words according to a specific rule.",
              "ai": {
                "title": "Coding and Decoding",
                "content": "📖 Kahulugan\nAng coding at decoding ay tungkol sa patterns ng letters o numbers — shifts, reversals, substitutions.\n\n💡 Simpleng Paliwanag\nHanapin ang shift sa unang letter: A→B (+1), A→C (+2), A→Z (-1).\n\n⚠️ Dapat Tandaan\nKaraniwang patterns: +1, +2, -1, -2, reverse order, alternating shifts.",
                "prompt": "Explain coding and decoding with letter shift examples."
              }
            },
            {
              "id": "p10",
              "label": "Example:",
              "indent": 1,
              "text": "If CAT is coded as DBU, how is DOG coded using the same pattern? Solution: Each letter moves one position forward in the alphabet. D→E, O→P, G→H. Answer: EPH",
              "ai": {
                "title": "Halimbawa ng Coding",
                "content": "Tanong: Paano naging EPH ang DOG?\nSagot: Ang pattern ay +1 sa bawat letter: C→D, A→B, T→U (CAT→DBU). Kaya D→E, O→P, G→H (DOG→EPH).",
                "prompt": "Explain step by step how to decode DOG using the same pattern as CAT→DBU."
              }
            },
            {
              "id": "p11",
              "label": "6. Deductive and Inductive Reasoning:",
              "text": "Deductive Reasoning: Uses general information or rules to reach a specific conclusion. Inductive Reasoning: Uses repeated observations to identify a possible general pattern.",
              "ai": {
                "title": "Deductive vs Inductive",
                "content": "📖 Kahulugan\nDeductive: general rule → specific conclusion. Inductive: specific observations → general conclusion.\n\n💡 Simpleng Paliwanag\nDeductive ay \"top-down\" (rule muna). Inductive ay \"bottom-up\" (observations muna).\n\n⚠️ Dapat Tandaan\nAng deductive ay certain (kung valid); ang inductive ay probable lang (hindi 100% sure).",
                "prompt": "Explain deductive and inductive reasoning with examples."
              }
            },
            {
              "id": "p12",
              "label": "Example (Deductive):",
              "indent": 1,
              "text": "All humans need oxygen. Mark is human. Therefore, Mark needs oxygen.",
              "ai": {
                "title": "Halimbawa ng Deductive",
                "content": "Tanong: Bakit deductive ito?\nSagot: General rule (all humans need oxygen) → specific case (Mark is human → Mark needs oxygen).",
                "prompt": "Explain why this is deductive reasoning."
              }
            },
            {
              "id": "p13",
              "label": "Example (Inductive):",
              "indent": 1,
              "text": "The sun has risen every morning observed so far. Therefore, it is reasonable to expect the sun to rise tomorrow.",
              "ai": {
                "title": "Halimbawa ng Inductive",
                "content": "Tanong: Bakit inductive ito?\nSagot: Repeated observations (araw-araw sumisikat ang araw) → general conclusion (aasahan nating sisikat ulit bukas). Pero probable lang, hindi 100% certain.",
                "prompt": "Explain why this is inductive reasoning."
              }
            }
          ]
        }
      ]
    },
    {
      "subject": "Analytical Ability",
      "subject_icon": "🧠",
      "topic": "Figures and Pattern Questions",
      "topic_order": 3,
      "keywords": [
        "figures",
        "patterns",
        "rotation",
        "reflection",
        "mirror image",
        "size progression",
        "element counting",
        "shape alternation",
        "missing figure"
      ],
      "ai": {
        "title": "Gabay sa Figures and Patterns",
        "content": "📖 Kahulugan\nAng figures and pattern questions ay non-verbal reasoning — gumagamit ng hugis, simbolo, at visual arrangements.\n\n🔍 Breakdown\nPitong uri:\n• Rotation — umiikot sa angle\n• Reflection — mirror image\n• Size Progression — lumalaki/lumiliit\n• Element Counting — dumarami ang elements\n• Shape Alternation — paulit-ulit na shapes\n• Position Movement — gumagalaw sa grid\n• Missing Figure — tukuyin ang kulang\n\n💡 Simpleng Paliwanag\nObserbahan kung paano nagbabago ang figure sa bawat step. I-check: direksyon, size, bilang ng elements, position, at repetition.\n\n📦 Halimbawa\n• Rotation: UP → RIGHT → DOWN → LEFT (90° clockwise)\n• Mirror: → ← (horizontal reflection)\n• Counting: 1, 3, 5, 7 dots (+2)\n• Alternation: Circle → Square → Triangle → Circle → Square → Triangle\n\n⭐ Bakit Mahalaga Ito?\nTest ng visual-spatial intelligence at pattern recognition. Madalas sa CSE Analytical Ability.\n\n⚠️ Dapat Tandaan\nTingnan ang direksyon, laki, bilang ng elements, at posisyon. I-count ang lines, dots, at shapes.\n\n🎯 Exam Tip\nSa rotation, i-check kung clockwise o counterclockwise at gaano kalaki ang angle. Sa mirror, i-check kung horizontal o vertical ang flip.",
        "prompt": "Explain figures and pattern questions in simple Tagalog — rotation, reflection, size, counting, alternation, position, and missing figure — with CSE exam tips."
      },
      "sections": [
        {
          "id": "s1",
          "heading": "English Definition",
          "ai": {
            "title": "Kahulugan ng Figures and Patterns",
            "content": "📖 Kahulugan\nNon-verbal reasoning na gumagamit ng hugis at visuals sa halip na words o numbers.\n\n💡 Simpleng Paliwanag\nSinusukat nito ang pattern recognition at spatial reasoning — kakayahang makita ang changes sa figures.\n\n⚠️ Dapat Tandaan\nHindi kailangan ng math — observation lang.",
            "prompt": "Explain what figures and pattern questions are and why they are used."
          },
          "paragraphs": [
            {
              "id": "p1",
              "text": "Figures and pattern questions are forms of non-verbal reasoning that involve analyzing shapes, symbols, diagrams, and visual arrangements instead of relying mainly on words or numerical calculations. These questions test your ability to recognize visual patterns, identify changes in shapes, understand spatial relationships, and predict the next figure based on a specific rule.",
              "ai": {
                "title": "Ano ang Figures and Patterns?",
                "content": "📖 Kahulugan\nAng figures and pattern questions ay non-verbal reasoning gamit ang shapes, symbols, at visual arrangements.\n\n💡 Simpleng Paliwanag\nSinusukat nito: pattern recognition, spatial relationships, at prediction ng susunod na figure.\n\n⚠️ Dapat Tandaan\nHindi kailangan ng computation — observation lang.",
                "prompt": "Explain this definition with examples of visual pattern recognition."
              }
            }
          ]
        },
        {
          "id": "s2",
          "heading": "Important Types of Figure Patterns",
          "ai": {
            "title": "Mga Uri ng Figure Patterns",
            "content": "📖 Kahulugan\nPitong karaniwang pattern: rotation, reflection, size, counting, alternation, position, at missing figure.\n\n💡 Simpleng Paliwanag\nBawat isa ay may unique clue: rotation (angle), reflection (flip), size (grow/shrink), counting (add/remove), alternation (repeat), position (move), at missing (complete).\n\n⚠️ Dapat Tandaan\nI-check isa-isa ang bawat possibility — direksyon, laki, bilang, posisyon.",
            "prompt": "Explain the seven types of figure patterns with examples."
          },
          "paragraphs": [
            {
              "id": "p1",
              "label": "1. Rotation Pattern:",
              "text": "A figure changes its direction or orientation by rotating at a consistent angle.",
              "ai": {
                "title": "Rotation Pattern",
                "content": "📖 Kahulugan\nAng figure ay umiikot sa consistent angle (90°, 180°, 45°, etc.).\n\n💡 Simpleng Paliwanag\nI-check kung clockwise o counterclockwise ang ikot.\n\n⚠️ Dapat Tandaan\nAng 90° clockwise ay: UP → RIGHT → DOWN → LEFT.",
                "prompt": "Explain rotation patterns with examples."
              }
            },
            {
              "id": "p2",
              "label": "Example:",
              "indent": 1,
              "text": "A triangle points UP, then RIGHT, then DOWN. Which direction comes next? Solution: The triangle rotates 90° clockwise each time. UP → RIGHT → DOWN → LEFT. Answer: LEFT",
              "ai": {
                "title": "Halimbawa ng Rotation",
                "content": "Tanong: Paano naging LEFT ang susunod?\nSagot: 90° clockwise rotation: UP → RIGHT → DOWN → LEFT. Sunod ng DOWN ay LEFT.",
                "prompt": "Explain step by step how to solve this rotation pattern."
              }
            },
            {
              "id": "p3",
              "label": "2. Reflection or Mirror Image:",
              "text": "A figure is flipped horizontally or vertically, creating its mirror image.",
              "ai": {
                "title": "Reflection / Mirror Image",
                "content": "📖 Kahulugan\nAng figure ay binaliktad (flip) — either horizontally (left-right) o vertically (up-down).\n\n💡 Simpleng Paliwanag\nHorizontal flip: kanan → kaliwa. Vertical flip: taas → baba.\n\n⚠️ Dapat Tandaan\nTingnan kung anong axis ang flip — horizontal ba o vertical?",
                "prompt": "Explain reflection patterns with examples."
              }
            },
            {
              "id": "p4",
              "label": "Example:",
              "indent": 1,
              "text": "If an arrow points to the right and is reflected horizontally, which direction will it point? Solution: The arrow will point to the left. Answer: LEFT",
              "ai": {
                "title": "Halimbawa ng Reflection",
                "content": "Tanong: Bakit LEFT ang sagot?\nSagot: Horizontal flip (mirror sa gitna): ang arrow na pakanan ay magiging pakaliwa.",
                "prompt": "Explain step by step how horizontal reflection works."
              }
            },
            {
              "id": "p5",
              "label": "3. Size Progression:",
              "text": "Shapes gradually increase or decrease in size according to a pattern.",
              "ai": {
                "title": "Size Progression",
                "content": "📖 Kahulugan\nAng shapes ay lumalaki o lumiliit sa bawat step.\n\n💡 Simpleng Paliwanag\nObserbahan kung dumarami ba ang laki (growing) o bumababa (shrinking).\n\n⚠️ Dapat Tandaan\nI-check ang ratio ng sizes — palaging doble ba, o pare-pareho ang dagdag?",
                "prompt": "Explain size progression patterns."
              }
            },
            {
              "id": "p6",
              "label": "Example:",
              "indent": 1,
              "text": "Small circle → Medium circle → Large circle → ? Answer: A larger circle, following the same increasing pattern.",
              "ai": {
                "title": "Halimbawa ng Size Progression",
                "content": "Tanong: Bakit larger circle ang sagot?\nSagot: Patuloy na lumalaki ang size bawat step. Kaya sa susunod, mas malaking circle pa.",
                "prompt": "Explain how to continue this size progression pattern."
              }
            },
            {
              "id": "p7",
              "label": "4. Element Counting Pattern:",
              "text": "The number of objects or elements increases or decreases in each figure.",
              "ai": {
                "title": "Element Counting",
                "content": "📖 Kahulugan\nAng bilang ng objects/elements ay dumarami o bumababa sa bawat figure.\n\n💡 Simpleng Paliwanag\nI-count ang dots, lines, o shapes — may pattern (+2, +3, ×2, etc.).\n\n⚠️ Dapat Tandaan\nI-check kung constant ba ang dagdag o pattern (1, 3, 5, 7 = +2).",
                "prompt": "Explain element counting patterns."
              }
            },
            {
              "id": "p8",
              "label": "Example:",
              "indent": 1,
              "text": "Figure 1: 1 dot. Figure 2: 3 dots. Figure 3: 5 dots. Figure 4: ? Solution: The number of dots increases by 2 each time. 1, 3, 5, 7. Answer: 7 dots",
              "ai": {
                "title": "Halimbawa ng Element Counting",
                "content": "Tanong: Paano naging 7 dots ang susunod?\nSagot: Constant +2 dots bawat figure: 1, 3, 5, 7. Kaya 7 dots.",
                "prompt": "Explain step by step how to solve this element counting pattern."
              }
            },
            {
              "id": "p9",
              "label": "5. Shape and Symbol Alternation:",
              "text": "Different shapes or symbols appear in a repeating sequence.",
              "ai": {
                "title": "Shape Alternation",
                "content": "📖 Kahulugan\nAng shapes ay paulit-ulit sa pattern (cycle).\n\n💡 Simpleng Paliwanag\nI-identify ang cycle: Circle → Square → Triangle → (repeat).\n\n⚠️ Dapat Tandaan\nHanapin ang cycle length — 2 shapes ba, 3 shapes, o 4?",
                "prompt": "Explain shape alternation patterns."
              }
            },
            {
              "id": "p10",
              "label": "Example:",
              "indent": 1,
              "text": "Circle → Square → Triangle → Circle → Square → ? Answer: Triangle",
              "ai": {
                "title": "Halimbawa ng Alternation",
                "content": "Tanong: Bakit Triangle ang sagot?\nSagot: Cycle ng 3 shapes: Circle, Square, Triangle. Kaya pagkatapos ng Circle → Square, susunod ay Triangle.",
                "prompt": "Explain how to find the next shape in this alternation pattern."
              }
            },
            {
              "id": "p11",
              "label": "6. Position and Movement Pattern:",
              "text": "An object changes its position within a box, grid, or diagram according to a specific direction or sequence.",
              "ai": {
                "title": "Position and Movement",
                "content": "📖 Kahulugan\nAng object ay gumagalaw sa loob ng grid/box base sa direction at sequence.\n\n💡 Simpleng Paliwanag\nI-track ang path: gumagalaw ba clockwise? Counterclockwise? Diagonal?\n\n⚠️ Dapat Tandaan\nI-check kung may step pattern ang movement (1 position ba, 2 positions, etc.).",
                "prompt": "Explain position and movement patterns."
              }
            },
            {
              "id": "p12",
              "label": "Example:",
              "indent": 1,
              "text": "A dot moves from the upper-left corner to the upper-right corner, then to the lower-right corner. Where will it move next if it follows a clockwise pattern? Answer: Lower-left corner.",
              "ai": {
                "title": "Halimbawa ng Position Movement",
                "content": "Tanong: Bakit lower-left ang sagot?\nSagot: Clockwise movement: upper-left → upper-right → lower-right → lower-left. Cycle ito ng 4 positions.",
                "prompt": "Explain step by step how to solve this position movement pattern."
              }
            },
            {
              "id": "p13",
              "label": "7. Missing Figure:",
              "text": "A figure contains an incomplete section, and you must identify which shape or symbol correctly completes it.",
              "ai": {
                "title": "Missing Figure",
                "content": "📖 Kahulugan\nMay kulang na bahagi sa figure, at kailangan mong tukuyin kung anong shape/symbol ang kumukumpleto.\n\n💡 Simpleng Paliwanag\nTingnan ang pattern ng iba pang sections — dapat mag-follow ng rule.\n\n⚠️ Dapat Tandaan\nI-check ang symmetry at repetition — madalas ito ang key.",
                "prompt": "Explain missing figure problems with a clear method."
              }
            },
            {
              "id": "p14",
              "label": "Example:",
              "indent": 1,
              "text": "A square is divided into four equal sections. Three sections contain circles, while one is empty. The task is to identify which missing arrangement follows the pattern of the other sections. Answer: Depends on the given diagram and its visual rule.",
              "ai": {
                "title": "Halimbawa ng Missing Figure",
                "content": "Tanong: Paano sasagutin ang missing figure problem?\nSagot: Tukuyin kung anong symmetry o pattern ang nire-follow ng 3 sections. Pagkatapos, yung tamang shape/symbol ang ilalagay sa empty section.",
                "prompt": "Explain how to solve missing figure problems step by step."
              }
            }
          ]
        }
      ]
    },
    {
      "subject": "General Information",
      "subject_icon": "🏛️",
      "topic": "The Philippine Constitution",
      "topic_order": 1,
      "keywords": [
        "1987 Constitution",
        "Bill of Rights",
        "Executive",
        "Legislative",
        "Judicial",
        "Citizenship",
        "Saligang Batas"
      ],
      "ai": {
        "title": "Gabay sa Philippine Constitution",
        "content": "📖 Kahulugan\nAng 1987 Philippine Constitution ay ang pinakamataas na batas sa Pilipinas. Dito nakasaad ang mga pangunahing prinsipyo ng ating pamahalaan, ang kapangyarihan at tungkulin ng bawat sangay nito, at ang mga karapatan at kalayaan ng mga mamamayan.\n\n🔍 Breakdown\n• Supremacy of the Constitution — pinakamataas na batas, walang nakahihigit\n• Three Branches — Executive (nagpapatupad), Legislative (gumagawa ng batas), Judicial (nagbibigay-kahulugan)\n• Separation of Powers at Checks and Balances\n• Bill of Rights (Article III)\n• Citizenship (Article IV)\n\n💡 Simpleng Paliwanag\nAng Constitution ay parang \"rules ng bahay\" ng buong bansa — lahat, kahit ang Pangulo, ay kailangang sumunod dito. Hinahati nito ang kapangyarihan sa tatlong sangay para walang sinuman ang magkaroon ng walang limitasyong kapangyarihan.\n\n📦 Halimbawa\n• Supremacy: Kahit ang Pangulo ay kailangang sumunod sa Konstitusyon.\n• Legislative: Ang Kongreso ang gumagawa at nagpapasa ng mga batas.\n• Executive: Ang Pangulo at mga ahensya ang nagpapatupad.\n• Judicial: Ang mga hukuman ang nagbibigay-kahulugan sa batas.\n• Bill of Rights: Karapatan ng isang tao na magpahayag ng opinyon, basta sumusunod sa batas.\n\n⭐ Bakit Mahalaga Ito?\nPundasyon ito ng lahat ng batas sa Pilipinas. Madalas itong lumabas sa CSE — constitutional articles, branches of government, at Bill of Rights.\n\n⚠️ Dapat Tandaan\nMga articles na madalas lumabas:\n• Article II — Declaration of Principles and State Policies\n• Article III — Bill of Rights\n• Article IV — Citizenship\n• Article VI — Legislative Department\n• Article VII — Executive Department\n• Article VIII — Judicial Department\n\n🎯 Exam Tip\nI-memorize ang article numbers at ang kanilang subject. Madalas ang tanong: \"Anong article ang Bill of Rights?\" (Article III) o \"Anong article ang Citizenship?\" (Article IV).",
        "prompt": "Explain the 1987 Philippine Constitution in simple Tagalog — supremacy, three branches, separation of powers, checks and balances, Bill of Rights, and Citizenship — with examples and CSE exam tips."
      },
      "sections": [
        {
          "id": "s1",
          "heading": "English Definition",
          "ai": {
            "title": "Kahulugan ng Constitution",
            "content": "📖 Kahulugan\nAng 1987 Philippine Constitution ay ang supreme law ng Pilipinas — pinakamataas na batas, walang nakahihigit dito.\n\n💡 Simpleng Paliwanag\nNakasaad dito ang structure ng gobyerno, powers nito, at karapatan ng mamamayan. Tatlong branches: Executive, Legislative, Judicial.\n\n⚠️ Dapat Tandaan\nLahat ng batas at government policies ay dapat sumunod sa Constitution.",
            "prompt": "Explain what the Philippine Constitution is and why it is supreme."
          },
          "paragraphs": [
            {
              "id": "p1",
              "text": "The 1987 Philippine Constitution is the supreme law of the Republic of the Philippines. It establishes the fundamental principles, structure, and powers of the government, defines the relationship between the government and its people, and protects the fundamental rights and freedoms of individuals. It also establishes the three branches of government: the Executive, Legislative, and Judicial branches, which operate under the principle of separation of powers and checks and balances.",
              "ai": {
                "title": "Ano ang Constitution?",
                "content": "📖 Kahulugan\nAng 1987 Philippine Constitution ay pinakamataas na batas ng Pilipinas. Nakasaad dito ang prinsipyo ng gobyerno, kapangyarihan nito, at karapatan ng mamamayan.\n\n💡 Simpleng Paliwanag\nTatlong branches: Executive (nagpapatupad ng batas), Legislative (gumagawa ng batas), at Judicial (nagbibigay-kahulugan). Gumagana sila sa principle ng separation of powers at checks and balances.\n\n⚠️ Dapat Tandaan\nWalang sinuman — kahit ang Pangulo — ang nakahihigit sa Constitution.",
                "prompt": "Explain this definition of the Philippine Constitution with its three branches."
              }
            }
          ]
        },
        {
          "id": "s2",
          "heading": "Important Concepts and Provisions",
          "ai": {
            "title": "Mahahalagang Konsepto",
            "content": "📖 Kahulugan\nLimang pangunahing konsepto: supremacy, three branches, separation of powers, Bill of Rights, at citizenship.\n\n💡 Simpleng Paliwanag\nAng bawat isa ay may specific na role at pinoprotektahan ang balance ng power sa gobyerno.\n\n⚠️ Dapat Tandaan\nAng Bill of Rights (Article III) ang pinakamadaling lumabas sa exam — alamin ang mga specific rights.",
            "prompt": "Explain the five key concepts of the Philippine Constitution with examples."
          },
          "paragraphs": [
            {
              "id": "p1",
              "label": "1. Supremacy of the Constitution:",
              "text": "The Constitution is the highest law of the country. All other laws, government policies, and official actions must be consistent with its provisions.",
              "ai": {
                "title": "Supremacy of the Constitution",
                "content": "📖 Kahulugan\nAng Constitution ang pinakamataas na batas — lahat ng ibang batas, policies, at official actions ay dapat sumunod dito.\n\n💡 Simpleng Paliwanag\nKapag may conflict sa pagitan ng Constitution at ordinary law, ang Constitution ang masusunod.\n\n⚠️ Dapat Tandaan\nWalang batas na pwedeng lumabag sa Constitution — pag lumabag, unconstitutional ito.",
                "prompt": "Explain supremacy of the Constitution with examples."
              }
            },
            {
              "id": "p2",
              "label": "Example:",
              "indent": 1,
              "text": "A law that violates a constitutional right may be declared unconstitutional by the Supreme Court.",
              "ai": {
                "title": "Halimbawa ng Supremacy",
                "content": "Tanong: Paano ipinapatupad ang supremacy?\nSagot: Ang Supreme Court ay may kapangyarihang i-declare na unconstitutional ang isang batas kung lumalabag ito sa Constitution.",
                "prompt": "Explain how the Supreme Court enforces constitutional supremacy."
              }
            },
            {
              "id": "p3",
              "label": "2. Three Branches of Government:",
              "text": "The Philippine government is divided into three branches, each with distinct responsibilities.",
              "ai": {
                "title": "Tatlong Sangay ng Gobyerno",
                "content": "📖 Kahulugan\nAng gobyerno ay nahahati sa tatlong branches: Executive, Legislative, Judicial.\n\n💡 Simpleng Paliwanag\nBawat branch ay may kanya-kanyang responsibilidad para hindi maipon ang kapangyarihan sa isang tao o grupo.\n\n⚠️ Dapat Tandaan\nExecutive = nagpapatupad; Legislative = gumagawa ng batas; Judicial = nagbibigay-kahulugan.",
                "prompt": "Explain the three branches of the Philippine government."
              }
            },
            {
              "id": "p4",
              "label": "Executive Branch:",
              "indent": 1,
              "text": "Implements and enforces laws. Headed by the President of the Philippines.",
              "ai": {
                "title": "Executive Branch",
                "content": "📖 Kahulugan\nAng Executive Branch ay nagpapatupad at nag-eenforce ng mga batas. Pinamumunuan ng Pangulo.\n\n💡 Simpleng Paliwanag\nKapag may bagong batas, ang Pangulo at mga ahensya (DOH, DepEd, DPWH, etc.) ang nagpapatupad nito.\n\n⚠️ Dapat Tandaan\nAng Pangulo ay may veto power sa mga bill na ipinasa ng Congress.",
                "prompt": "Explain the Executive Branch and its responsibilities."
              }
            },
            {
              "id": "p5",
              "label": "Example:",
              "indent": 2,
              "text": "The President directs government agencies in implementing national policies.",
              "ai": {
                "title": "Halimbawa ng Executive",
                "content": "Tanong: Paano nagpapatupad ang Pangulo?\nSagot: Sa pamamagitan ng mga ahensya ng gobyerno — halimbawa, pag-utos sa DepEd na magpatupad ng bagong curriculum.",
                "prompt": "Explain how the President implements policies through agencies."
              }
            },
            {
              "id": "p6",
              "label": "Legislative Branch:",
              "indent": 1,
              "text": "Creates, amends, and repeals laws. Composed of the Senate and the House of Representatives, collectively known as Congress.",
              "ai": {
                "title": "Legislative Branch",
                "content": "📖 Kahulugan\nAng Legislative Branch (Congress) ang gumagawa, nag-aamend, at nag-repeal ng mga batas.\n\n💡 Simpleng Paliwanag\nBinubuo ng Senate (24 senators) at House of Representatives (mga congressman). Sila ang gumagawa ng batas.\n\n⚠️ Dapat Tandaan\nAng isang bill ay kailangang pumasa sa parehong Senate at House bago pumunta sa Pangulo para pirmahan.",
                "prompt": "Explain the Legislative Branch and its law-making role."
              }
            },
            {
              "id": "p7",
              "label": "Example:",
              "indent": 2,
              "text": "Congress passes a proposed law concerning taxation.",
              "ai": {
                "title": "Halimbawa ng Legislative",
                "content": "Tanong: Paano gumagawa ng batas ang Congress?\nSagot: Isang proposed law (bill) ang pinag-debatehan at binoboto sa Senate at House. Kapag pasado sa dalawa, pupunta sa Pangulo para sa approval.",
                "prompt": "Explain how Congress passes a law."
              }
            },
            {
              "id": "p8",
              "label": "Judicial Branch:",
              "indent": 1,
              "text": "Interprets laws and settles legal disputes. Headed by the Supreme Court.",
              "ai": {
                "title": "Judicial Branch",
                "content": "📖 Kahulugan\nAng Judicial Branch ay nagbibigay-kahulugan sa batas at lumulutas ng legal disputes. Pinamumunuan ng Supreme Court.\n\n💡 Simpleng Paliwanag\nSila ang nagde-determine kung ano ang ibig sabihin ng isang batas sa isang specific na sitwasyon.\n\n⚠️ Dapat Tandaan\nAng Supreme Court ang may final say — kung unconstitutional, invalid ang batas.",
                "prompt": "Explain the Judicial Branch and its role."
              }
            },
            {
              "id": "p9",
              "label": "Example:",
              "indent": 2,
              "text": "The Supreme Court determines whether a government action violates the Constitution.",
              "ai": {
                "title": "Halimbawa ng Judicial",
                "content": "Tanong: Paano nagbibigay-kahulugan ang Supreme Court?\nSagot: Kapag may question sa constitutionality ng isang batas o aksyon, ang Supreme Court ang nagde-decide kung valid ito o hindi.",
                "prompt": "Explain how the Supreme Court reviews constitutionality."
              }
            },
            {
              "id": "p10",
              "label": "3. Separation of Powers and Checks and Balances:",
              "text": "These principles prevent any single branch of government from having unlimited authority.",
              "ai": {
                "title": "Separation of Powers at Checks and Balances",
                "content": "📖 Kahulugan\nAng separation of powers ay naghahati ng kapangyarihan sa 3 branches. Ang checks and balances ay nagbibigay ng kapangyarihan sa bawat branch na i-check ang iba.\n\n💡 Simpleng Paliwanag\nWalang branch ang pwedeng gumawa ng lahat — bawat isa ay may limitasyon.\n\n⚠️ Dapat Tandaan\nHindi ito pareho: separation = hiwalay na roles; checks = bawat branch may power over ibang branches.",
                "prompt": "Explain separation of powers and checks and balances."
              }
            },
            {
              "id": "p11",
              "label": "Separation of Powers:",
              "indent": 1,
              "text": "Each branch has its own constitutional responsibilities.",
              "ai": {
                "title": "Separation of Powers",
                "content": "Tanong: Ano ang separation of powers?\nSagot: Bawat branch ay may kanya-kanyang responsibilidad na hindi ginagawa ng ibang branch. Legislative = gumawa ng batas; Executive = magpatupad; Judicial = magbigay-kahulugan.",
                "prompt": "Explain separation of powers in detail."
              }
            },
            {
              "id": "p12",
              "label": "Checks and Balances:",
              "indent": 1,
              "text": "Each branch has certain powers to limit or review the actions of the other branches.",
              "ai": {
                "title": "Checks and Balances",
                "content": "Tanong: Ano ang checks and balances?\nSagot: Bawat branch ay may power na i-review o limitahan ang iba. Halimbawa, ang Pangulo ay may veto, ang Congress ay may override, at ang Supreme Court ay may judicial review.",
                "prompt": "Explain checks and balances with examples."
              }
            },
            {
              "id": "p13",
              "label": "Example:",
              "indent": 1,
              "text": "The President may veto a bill passed by Congress, while Congress may override the veto under the constitutional requirements.",
              "ai": {
                "title": "Halimbawa ng Checks and Balances",
                "content": "Tanong: Paano nag-i-check ang branches sa isa't isa?\nSagot: Pangulo → may veto sa bill ng Congress. Congress → may override ng veto (2/3 vote ng both houses). Supreme Court → may judicial review (ide-declare na unconstitutional).",
                "prompt": "Explain the veto and override process as an example of checks and balances."
              }
            },
            {
              "id": "p14",
              "label": "4. Bill of Rights (Article III):",
              "text": "The Bill of Rights protects individuals against abuses of government power and guarantees fundamental freedoms.",
              "ai": {
                "title": "Bill of Rights (Article III)",
                "content": "📖 Kahulugan\nAng Bill of Rights ay nagpoprotekta sa mga indibidwal laban sa abuse ng gobyerno. Nasa Article III ito ng Constitution.\n\n💡 Simpleng Paliwanag\nKarapatan mo ito — hindi pwedeng bawiin ng gobyerno nang walang due process.\n\n⚠️ Dapat Tandaan\nArticle III = Bill of Rights. Madalas itong lumabas sa CSE.",
                "prompt": "Explain the Bill of Rights and why it's in Article III."
              }
            },
            {
              "id": "p15",
              "indent": 1,
              "text": "Important rights include: freedom of speech and expression, freedom of religion, right to due process of law, equal protection of the laws, right against unreasonable searches and seizures, right to privacy of communication, right to a speedy and public trial.",
              "ai": {
                "title": "Mahahalagang Karapatan sa Bill of Rights",
                "content": "📖 Kahulugan\nPitong mahalagang karapatan sa Bill of Rights:\n\n1. Freedom of speech and expression\n2. Freedom of religion\n3. Right to due process\n4. Equal protection of the laws\n5. Right against unreasonable searches and seizures\n6. Right to privacy of communication\n7. Right to speedy and public trial\n\n💡 Simpleng Paliwanag\nAng lahat ng ito ay nagpoprotekta sa iyo laban sa abuse ng gobyerno.\n\n⚠️ Dapat Tandaan\nAng \"due process\" ay ang karapatang magkaroon ng tamang legal procedure bago ka parusahan o bawiin ng karapatan.",
                "prompt": "Explain the key rights in the Bill of Rights with examples."
              }
            },
            {
              "id": "p16",
              "label": "5. Citizenship (Article IV):",
              "text": "The Constitution identifies who are considered citizens of the Philippines.",
              "ai": {
                "title": "Citizenship (Article IV)",
                "content": "📖 Kahulugan\nAng Article IV ay nagsasaad kung sino ang itinuturing na citizen ng Pilipinas.\n\n💡 Simpleng Paliwanag\nMay tatlong paraan: (1) natural-born (Filipino parent), (2) naturalization, (3) reacquisition.\n\n⚠️ Dapat Tandaan\nArticle IV = Citizenship. Madalas itong tanong sa exam.",
                "prompt": "Explain Philippine citizenship under Article IV with examples."
              }
            },
            {
              "id": "p17",
              "label": "Example:",
              "indent": 1,
              "text": "A person whose father or mother is a Filipino citizen is generally considered a natural-born Filipino citizen, subject to the constitutional provisions.",
              "ai": {
                "title": "Halimbawa ng Citizenship",
                "content": "Tanong: Paano maging natural-born citizen?\nSagot: Kung ang ama o ina ay Filipino citizen, natural-born citizen ang anak. Hindi kailangang mag-naturalize.",
                "prompt": "Explain natural-born citizenship through Filipino parents."
              }
            }
          ]
        }
      ]
    },
    {
      "subject": "General Information",
      "subject_icon": "🏛️",
      "topic": "RA 6713 (Code of Conduct)",
      "topic_order": 2,
      "keywords": [
        "RA 6713",
        "Code of Conduct",
        "SALN",
        "public officials",
        "ethics",
        "norms of conduct",
        "prohibited acts"
      ],
      "ai": {
        "title": "Gabay sa RA 6713",
        "content": "📖 Kahulugan\nAng RA 6713 (Code of Conduct and Ethical Standards for Public Officials and Employees) ay batas na nagtatakda ng tamang asal, etika, at responsibilidad ng mga opisyal at empleyado ng pamahalaan.\n\n🔍 Breakdown\n• 8 Norms of Conduct (Section 4)\n• Prohibited Acts and Transactions (Section 7)\n• SALN (Statement of Assets, Liabilities, and Net Worth)\n\n💡 Simpleng Paliwanag\nLayunin ng batas na ito na matiyak na ang mga lingkod-bayan ay nagtatrabaho nang tapat, patas, responsable, at may malasakit sa mga mamamayan. Ang pagiging empleyado ng gobyerno ay isang responsibilidad na dapat gamitin para sa kapakanan ng publiko — hindi para sa pansariling interes.\n\n📦 Halimbawa\n• Commitment to Public Interest: Dapat unahin ng empleyado ang kapakanan ng mamamayan kaysa sa sarili.\n• Professionalism: Maayos at mahusay na gampanan ang trabaho.\n• Political Neutrality: Hindi magkaiba ang serbisyo dahil sa partido.\n• Simple Living: Mamuhay nang simple at naaayon sa lehitimong kinikita.\n• Prohibited Gifts: Hindi tumanggap ng suhol.\n• SALN: Ideklara ang mga ari-arian, utang, at net worth.\n\n⭐ Bakit Mahalaga Ito?\nIto ang batayan ng integridad ng serbisyo publiko. Madalas itong lumabas sa CSE — lalo na ang 8 norms at SALN.\n\n⚠️ Dapat Tandaan\nMemorize ang 8 Norms of Conduct (Section 4):\n1. Commitment to Public Interest\n2. Professionalism\n3. Justness and Sincerity\n4. Political Neutrality\n5. Responsiveness to the Public\n6. Nationalism and Patriotism\n7. Commitment to Democracy\n8. Simple Living\n\n🎯 Exam Tip\nMnemonic para sa 8 norms: CP-JP-RN-CS (Commitment, Professionalism, Justness, Political, Responsiveness, Nationalism, Commitment to Democracy, Simple Living).",
        "prompt": "Explain RA 6713 in simple Tagalog — 8 norms of conduct, prohibited acts, and SALN — with CSE exam tips."
      },
      "sections": [
        {
          "id": "s1",
          "heading": "English Definition",
          "ai": {
            "title": "Kahulugan ng RA 6713",
            "content": "📖 Kahulugan\nAng RA 6713 ay Code of Conduct and Ethical Standards for Public Officials and Employees, enacted noong February 20, 1989.\n\n💡 Simpleng Paliwanag\nLayunin nito: honesty, integrity, accountability, professionalism, at responsibility sa serbisyo publiko.\n\n⚠️ Dapat Tandaan\nPublic interest > personal gain — ito ang core principle.",
            "prompt": "Explain what RA 6713 is and its purpose."
          },
          "paragraphs": [
            {
              "id": "p1",
              "text": "Republic Act No. 6713, also known as the Code of Conduct and Ethical Standards for Public Officials and Employees, is a Philippine law enacted on February 20, 1989. It establishes ethical standards and promotes honesty, integrity, accountability, professionalism, and responsibility among government officials and employees. Its main purpose is to ensure that public officials and employees serve the people honestly and prioritize public interest over personal gain.",
              "ai": {
                "title": "Ano ang RA 6713?",
                "content": "📖 Kahulugan\nAng RA 6713 ay batas na nagtatakda ng ethical standards sa mga public officials at employees. Naipasa noong February 20, 1989.\n\n💡 Simpleng Paliwanag\nLayunin: tiyakin na ang mga lingkod-bayan ay tapat at inuuna ang public interest kaysa personal gain.\n\n⚠️ Dapat Tandaan\nPublic interest > personal gain — ito ang puso ng batas.",
                "prompt": "Explain this definition of RA 6713 with examples."
              }
            }
          ]
        },
        {
          "id": "s2",
          "heading": "The 8 Norms of Conduct (Section 4)",
          "ai": {
            "title": "8 Norms of Conduct",
            "content": "📖 Kahulugan\nWalong norms ng conduct ang dapat sundin ng bawat public official at employee.\n\n💡 Simpleng Paliwanag\nBawat norm ay may specific na meaning at application sa totoong buhay. Ito ang daily guide ng isang lingkod-bayan.\n\n⚠️ Dapat Tandaan\nMemorize ang 8 norms: Commitment to Public Interest, Professionalism, Justness and Sincerity, Political Neutrality, Responsiveness to the Public, Nationalism and Patriotism, Commitment to Democracy, Simple Living.",
            "prompt": "Explain the eight norms of conduct under RA 6713 with examples."
          },
          "paragraphs": [
            {
              "id": "p1",
              "label": "1. Commitment to Public Interest:",
              "text": "Public officials must prioritize the welfare and interests of the public rather than their personal benefits.",
              "ai": {
                "title": "Commitment to Public Interest",
                "content": "📖 Kahulugan\nDapat unahin ng public official ang welfare ng publiko kaysa personal benefit.\n\n💡 Simpleng Paliwanag\nAng trabaho sa gobyerno ay para sa tao, hindi para sa sarili.\n\n⚠️ Dapat Tandaan\nHalimbawa: Dapat patas ang pagproseso ng aplikasyon — hindi priority ang kaibigan o kamag-anak.",
                "prompt": "Explain commitment to public interest with examples."
              }
            },
            {
              "id": "p2",
              "label": "2. Professionalism:",
              "text": "Government employees must perform their duties with competence, dedication, and excellence.",
              "ai": {
                "title": "Professionalism",
                "content": "📖 Kahulugan\nDapat gampanan ang tungkulin nang may competence, dedication, at excellence.\n\n💡 Simpleng Paliwanag\nMaayos at mahusay ang trabaho — hindi basta \"pwede na.\"\n\n⚠️ Dapat Tandaan\nHalimbawa: Magbigay ng accurate information at tapusin ang tasks nang responsable.",
                "prompt": "Explain professionalism in public service."
              }
            },
            {
              "id": "p3",
              "label": "3. Justness and Sincerity:",
              "text": "Public officials must treat everyone fairly, honestly, and without discrimination.",
              "ai": {
                "title": "Justness and Sincerity",
                "content": "📖 Kahulugan\nPatas, tapat, at walang diskriminasyon ang pagtrato sa lahat.\n\n💡 Simpleng Paliwanag\nPareho ang serbisyo sa mayaman at mahirap — walang favoritism.\n\n⚠️ Dapat Tandaan\nHalimbawa: Equal service sa lahat ng mamamayan.",
                "prompt": "Explain justness and sincerity with examples."
              }
            },
            {
              "id": "p4",
              "label": "4. Political Neutrality:",
              "text": "Government employees must provide services without unfairly favoring or discriminating against anyone because of political beliefs or affiliations.",
              "ai": {
                "title": "Political Neutrality",
                "content": "📖 Kahulugan\nWalang favoritism o discrimination base sa political beliefs o party affiliation.\n\n💡 Simpleng Paliwanag\nSerbisyo para sa lahat — anuman ang partido o paniniwala.\n\n⚠️ Dapat Tandaan\nHalimbawa: Tulungan ang lahat ng mamamayan, hindi lang ang kakampi sa pulitika.",
                "prompt": "Explain political neutrality in public service."
              }
            },
            {
              "id": "p5",
              "label": "5. Responsiveness to the Public:",
              "text": "Public officials must provide prompt, adequate, and efficient service to the people.",
              "ai": {
                "title": "Responsiveness to the Public",
                "content": "📖 Kahulugan\nMabilis, sapat, at efficient na serbisyo sa publiko.\n\n💡 Simpleng Paliwanag\nHuwag pabayaan ang mga tanong o request ng mamamayan — aksyunan agad.\n\n⚠️ Dapat Tandaan\nHalimbawa: Proseso ng dokumento sa loob ng required period.",
                "prompt": "Explain responsiveness to the public with examples."
              }
            },
            {
              "id": "p6",
              "label": "6. Nationalism and Patriotism:",
              "text": "Public officials must remain loyal to the country and promote the welfare of the Filipino people.",
              "ai": {
                "title": "Nationalism and Patriotism",
                "content": "📖 Kahulugan\nLoyalty sa bansa at pag-promote ng welfare ng Filipino people.\n\n💡 Simpleng Paliwanag\nProtektahan ang public resources at suportahan ang programs para sa bansa.\n\n⚠️ Dapat Tandaan\nHalimbawa: Huwag magnakaw ng pondo — gamitin ito para sa bayan.",
                "prompt": "Explain nationalism and patriotism in public service."
              }
            },
            {
              "id": "p7",
              "label": "7. Commitment to Democracy:",
              "text": "Public officials must respect democratic principles, constitutional rights, and the authority of the people.",
              "ai": {
                "title": "Commitment to Democracy",
                "content": "📖 Kahulugan\nIgalang ang democratic principles, constitutional rights, at authority ng taong-bayan.\n\n💡 Simpleng Paliwanag\nAng mamamayan ang boss — respetuhin ang kanilang karapatan.\n\n⚠️ Dapat Tandaan\nHalimbawa: Respetuhin ang karapatang magpahayag ng opinyon nang mapayapa.",
                "prompt": "Explain commitment to democracy with examples."
              }
            },
            {
              "id": "p8",
              "label": "8. Simple Living:",
              "text": "Public officials and employees must lead modest lives appropriate to their positions and income.",
              "ai": {
                "title": "Simple Living",
                "content": "📖 Kahulugan\nMamuhay nang simple at naaayon sa lawful income.\n\n💡 Simpleng Paliwanag\nHuwag magpakita ng extravagant na yaman na hindi tugma sa sahod.\n\n⚠️ Dapat Tandaan\nHalimbawa: Iwasan ang mamahaling sasakyan o alahas kung hindi kaya ng suweldo.",
                "prompt": "Explain simple living under RA 6713."
              }
            }
          ]
        },
        {
          "id": "s3",
          "heading": "Prohibited Acts and Transactions (Section 7)",
          "ai": {
            "title": "Mga Prohibited Acts",
            "content": "📖 Kahulugan\nSection 7 ng RA 6713 ay naglilista ng mga bawal na gawain para sa public officials at employees.\n\n💡 Simpleng Paliwanag\nLayunin ng prohibitions na maiwasan ang conflict of interest at corruption.\n\n⚠️ Dapat Tandaan\nAng tatanggap ng regalo, misusing confidential info, at conflict of interest ay mga seryosong violations.",
            "prompt": "Explain the prohibited acts under Section 7 of RA 6713."
          },
          "paragraphs": [
            {
              "id": "p1",
              "text": "Under Section 7 of RA 6713, public officials and employees are prohibited from certain activities, including: having financial or material interests in transactions requiring the approval of their office; misusing confidential government information for personal benefit; soliciting or accepting gifts, favors, loans, or anything of monetary value connected with their official duties or transactions affected by their office, subject to the law's specific exceptions; and engaging in certain outside employment or private activities that conflict with their official responsibilities.",
              "ai": {
                "title": "Prohibited Acts (Section 7)",
                "content": "📖 Kahulugan\nApat na pangunahing prohibited acts:\n\n1. Financial/material interest sa transactions na kailangan ng approval ng office nila\n2. Misusing confidential government info para sa personal benefit\n3. Soliciting/accepting gifts, favors, loans na may kinalaman sa official duties\n4. Outside employment na may conflict sa official responsibilities\n\n💡 Simpleng Paliwanag\nHuwag kumita o makinabang nang personal gamit ang posisyon sa gobyerno.\n\n⚠️ Dapat Tandaan\nMay exceptions ang batas sa gifts — pero general rule: bawal tumanggap kapag may kinalaman sa trabaho.",
                "prompt": "Explain the prohibited acts under Section 7 of RA 6713 with examples."
              }
            }
          ]
        },
        {
          "id": "s4",
          "heading": "SALN (Statement of Assets, Liabilities, and Net Worth)",
          "ai": {
            "title": "SALN",
            "content": "📖 Kahulugan\nAng SALN ay Statement of Assets, Liabilities, and Net Worth — deklarasyon ng mga ari-arian, utang, net worth, at financial interests.\n\n💡 Simpleng Paliwanag\nIto ang \"transparency report\" ng bawat public official — para makita kung tugma ang yaman sa sahod.\n\n⚠️ Dapat Tandaan\nKasama sa SALN ang mga ari-arian at utang ng asawa at mga anak na wala pang 18 taong gulang.",
            "prompt": "Explain what SALN is and its purpose under RA 6713."
          },
          "paragraphs": [
            {
              "id": "p1",
              "text": "SALN means Statement of Assets, Liabilities, and Net Worth. It is a declaration that public officials and employees are generally required to submit under oath to disclose their assets, liabilities, net worth, and certain financial or business interests, including those of their spouses and unmarried children under 18, as provided by law.",
              "ai": {
                "title": "Ano ang SALN?",
                "content": "📖 Kahulugan\nAng SALN ay Statement of Assets, Liabilities, and Net Worth — isang sworn declaration ng lahat ng ari-arian, utang, at financial interests.\n\n💡 Simpleng Paliwanag\nKasama sa SALN ang mga ari-arian at utang ng asawa at mga unmarried children under 18 years old.\n\n⚠️ Dapat Tandaan\nSinasubmit ito under oath — meaning, may legal consequence kapag nag-falsify.",
                "prompt": "Explain SALN in detail with the requirement for spouse and minor children."
              }
            },
            {
              "id": "p2",
              "label": "Example:",
              "indent": 1,
              "text": "A government employee must declare their properties, financial liabilities, and other reportable interests in their SALN.",
              "ai": {
                "title": "Halimbawa ng SALN",
                "content": "Tanong: Paano ginagawa ang SALN?\nSagot: Inililista ng empleyado ang lahat ng properties (bahay, lupa, sasakyan), liabilities (utang sa bangko, credit card), at net worth (assets minus liabilities).",
                "prompt": "Explain what goes into a SALN with examples."
              }
            }
          ]
        }
      ]
    },
    {
      "subject": "General Information",
      "subject_icon": "🏛️",
      "topic": "Peace and Human Rights",
      "topic_order": 3,
      "keywords": [
        "human rights",
        "UDHR",
        "peace",
        "equality",
        "dignity",
        "peacebuilding",
        "karapatang pantao"
      ],
      "ai": {
        "title": "Gabay sa Peace and Human Rights",
        "content": "📖 Kahulugan\nAng peace and human rights ay tumutukoy sa pagpapanatili ng kapayapaan at pagprotekta sa mga pangunahing karapatan at dignidad ng bawat tao.\n\n🔍 Breakdown\n• UDHR — Universal Declaration of Human Rights\n• Civil at Political Rights\n• Economic, Social, Cultural Rights\n• Equality at Non-Discrimination\n• Peacebuilding\n• Human Dignity\n\n💡 Simpleng Paliwanag\nLahat ng tao ay nararapat tratuhin nang patas at may respeto, anuman ang kasarian, relihiyon, lahi, paniniwala, o estado sa buhay. Hindi lang ito tungkol sa kawalan ng gulo — kasama rin ang katarungan, pagkakapantay-pantay, kalayaan, at paggalang.\n\n📦 Halimbawa\n• Right to Life: Karapatang mabuhay at maprotektahan laban sa ilegal na pagkitil.\n• Freedom of Expression: Malayang pagpapahayag ng opinyon.\n• Equality: Pantay na pagtrato sa lahat.\n• Peacebuilding: Pag-usapan ang hindi pagkakaunawaan, hindi karahasan.\n• Human Dignity: Walang dapat maliitin o ipahiya.\n\n⭐ Bakit Mahalaga Ito?\nCore values ito ng isang demokratikong lipunan. Madalas itong lumabas sa CSE — lalo na ang UDHR at human rights principles.\n\n⚠️ Dapat Tandaan\n• UDHR — Adopted on December 10, 1948 ng UN General Assembly\n• Human Rights — Basic rights ng bawat tao\n• Peacebuilding — Preventing at resolving conflicts through peaceful means\n• Equality — Equal dignity without unfair discrimination\n\n🎯 Exam Tip\nMemorize ang petsa ng UDHR (December 10, 1948) at ang UN General Assembly bilang nag-adopt nito — madalas itong tanong.",
        "prompt": "Explain peace and human rights in simple Tagalog — UDHR, civil/political rights, economic/social rights, equality, peacebuilding, and human dignity — with CSE exam tips."
      },
      "sections": [
        {
          "id": "s1",
          "heading": "English Definition",
          "ai": {
            "title": "Kahulugan ng Peace and Human Rights",
            "content": "📖 Kahulugan\nAng peace ay pagpapanatili ng peaceful relationships at pag-iwas sa violence. Ang human rights ay basic rights at freedoms ng lahat ng tao.\n\n💡 Simpleng Paliwanag\nHindi lang ito kawalan ng gulo — kasama ang justice, equality, at paggalang sa dignidad ng bawat isa.\n\n⚠️ Dapat Tandaan\nUniversal ang human rights — para sa lahat, walang exception.",
            "prompt": "Explain what peace and human rights mean."
          },
          "paragraphs": [
            {
              "id": "p1",
              "text": "Peace and human rights refer to the promotion of peaceful relationships, justice, equality, respect, and protection of the inherent dignity and fundamental rights of every human being. Human rights are basic rights and freedoms that belong to all individuals regardless of nationality, race, sex, religion, language, social status, or other personal circumstances. Peace involves preventing violence, resolving conflicts through peaceful means, respecting differences, and promoting cooperation within communities and nations.",
              "ai": {
                "title": "Ano ang Peace and Human Rights?",
                "content": "📖 Kahulugan\nAng peace ay pag-iwas sa violence at peaceful resolution ng conflict. Ang human rights ay basic rights ng lahat ng tao, anuman ang lahi, kasarian, relihiyon, o estado.\n\n💡 Simpleng Paliwanag\nUniversal ito — hindi pwedeng bawiin ng kahit sino, kahit gobyerno.\n\n⚠️ Dapat Tandaan\nAng peace ay hindi lang absence of war — kasama ang justice at equality.",
                "prompt": "Explain this definition of peace and human rights with examples."
              }
            }
          ]
        },
        {
          "id": "s2",
          "heading": "Important Concepts",
          "ai": {
            "title": "Mahahalagang Konsepto",
            "content": "📖 Kahulugan\nAnim na mahalagang konsepto sa peace and human rights: UDHR, civil/political rights, economic/social/cultural rights, equality, peacebuilding, human dignity.\n\n💡 Simpleng Paliwanag\nBawat isa ay nagpoprotekta sa iba't ibang aspeto ng buhay ng tao — mula sa basic rights hanggang sa dignity.\n\n⚠️ Dapat Tandaan\nAng UDHR (1948) ang pinaka-fundamental na international document sa human rights.",
            "prompt": "Explain the six key concepts in peace and human rights."
          },
          "paragraphs": [
            {
              "id": "p1",
              "label": "1. Universal Declaration of Human Rights (UDHR):",
              "text": "The UDHR is an international declaration adopted by the United Nations General Assembly on December 10, 1948. It establishes a common standard of fundamental human rights and freedoms for all people.",
              "ai": {
                "title": "UDHR",
                "content": "📖 Kahulugan\nAng UDHR ay international declaration na in-adopt ng UN General Assembly noong December 10, 1948. Ito ang common standard ng human rights para sa lahat ng tao.\n\n💡 Simpleng Paliwanag\nIto ang pinaka-fundamental na dokumento ng human rights sa buong mundo — sinusunod ng maraming bansa.\n\n⚠️ Dapat Tandaan\nDecember 10, 1948 — madalas lumabas sa exam.",
                "prompt": "Explain the UDHR and its significance."
              }
            },
            {
              "id": "p2",
              "indent": 1,
              "text": "Important rights recognized include: right to life, liberty, and security; right to equality before the law; freedom of thought, religion, and expression; right to education; right to work; right to participate in government; right against torture and slavery.",
              "ai": {
                "title": "Mga Karapatan sa UDHR",
                "content": "📖 Kahulugan\nPitong mahalagang karapatan sa UDHR:\n\n1. Right to life, liberty, and security\n2. Equality before the law\n3. Freedom of thought, religion, expression\n4. Right to education\n5. Right to work\n6. Right to participate in government\n7. Right against torture and slavery\n\n💡 Simpleng Paliwanag\nLahat ng ito ay basic rights — walang dapat mabawasan kahit kanino.\n\n⚠️ Dapat Tandaan\nRight against torture at slavery — pinaka-basic na karapatan ng tao.",
                "prompt": "Explain the rights enumerated in the UDHR."
              }
            },
            {
              "id": "p3",
              "label": "2. Civil and Political Rights:",
              "text": "These protect an individual's freedom and participation in society and government. Example: The right to vote, freedom of speech, and freedom of religion.",
              "ai": {
                "title": "Civil at Political Rights",
                "content": "📖 Kahulugan\nAng civil at political rights ay nagpoprotekta sa freedom at participation sa society at government.\n\n💡 Simpleng Paliwanag\nRight to vote, freedom of speech, freedom of religion — mga karapatang pampulitika at personal.\n\n⚠️ Dapat Tandaan\nCivil = personal freedoms; Political = participation sa government.",
                "prompt": "Explain civil and political rights with examples."
              }
            },
            {
              "id": "p4",
              "label": "3. Economic, Social, and Cultural Rights:",
              "text": "These protect the conditions necessary for people to live with dignity and participate in society. Example: The right to education, healthcare, decent working conditions, and participation in cultural activities.",
              "ai": {
                "title": "Economic, Social, Cultural Rights",
                "content": "📖 Kahulugan\nAng mga ito ay nagpoprotekta sa kondisyon para mabuhay nang may dignidad: education, healthcare, decent work, cultural participation.\n\n💡 Simpleng Paliwanag\nBasic needs ito — hindi lang freedom, kundi quality of life.\n\n⚠️ Dapat Tandaan\nEducation at healthcare — madalas lumabas sa exam.",
                "prompt": "Explain economic, social, and cultural rights with examples."
              }
            },
            {
              "id": "p5",
              "label": "4. Equality and Non-Discrimination:",
              "text": "All individuals should receive equal protection and respect regardless of their personal backgrounds or circumstances. Example: A school or workplace should not unfairly discriminate against someone because of their religion or gender.",
              "ai": {
                "title": "Equality and Non-Discrimination",
                "content": "📖 Kahulugan\nPantay na proteksyon at respeto sa lahat — walang diskriminasyon base sa religion, gender, race, etc.\n\n💡 Simpleng Paliwanag\nWalang special treatment, walang unfair treatment — pantay lang.\n\n⚠️ Dapat Tandaan\nAnti-discrimination — core principle ito ng human rights.",
                "prompt": "Explain equality and non-discrimination with examples."
              }
            },
            {
              "id": "p6",
              "label": "5. Peacebuilding and Conflict Resolution:",
              "text": "Peacebuilding involves preventing conflicts and developing peaceful solutions through communication, cooperation, negotiation, and mediation. Example: Two communities experiencing a disagreement should seek dialogue and peaceful settlement rather than violence.",
              "ai": {
                "title": "Peacebuilding",
                "content": "📖 Kahulugan\nAng peacebuilding ay pag-iwas sa conflict at paghahanap ng peaceful solutions through dialogue, cooperation, negotiation, at mediation.\n\n💡 Simpleng Paliwanag\nKung may hindi pagkakaunawaan, pag-usapan — hindi karahasan.\n\n⚠️ Dapat Tandaan\nPeace ≠ absence of war — active resolution ito ng conflicts.",
                "prompt": "Explain peacebuilding and conflict resolution with examples."
              }
            },
            {
              "id": "p7",
              "label": "6. Human Dignity:",
              "text": "Every person deserves respect and fair treatment simply because they are human. Example: No individual should be subjected to humiliation, torture, or degrading treatment.",
              "ai": {
                "title": "Human Dignity",
                "content": "📖 Kahulugan\nBawat tao ay karapat-dapat sa respeto at fair treatment dahil tao siya.\n\n💡 Simpleng Paliwanag\nWalang dapat ipahiya, saktan, o abusuhin — kahit sino pa siya.\n\n⚠️ Dapat Tandaan\nWalang torture, walang degrading treatment — basic ito.",
                "prompt": "Explain human dignity with examples."
              }
            }
          ]
        }
      ]
    },
    {
      "subject": "General Information",
      "subject_icon": "🏛️",
      "topic": "Environmental Management",
      "topic_order": 4,
      "keywords": [
        "environmental management",
        "RA 9003",
        "RA 8749",
        "RA 9275",
        "RA 6969",
        "RA 9729",
        "RA 9512",
        "waste management",
        "climate change"
      ],
      "ai": {
        "title": "Gabay sa Environmental Management",
        "content": "📖 Kahulugan\nAng environmental management ay responsible planning, protection, conservation, at sustainable use ng natural resources.\n\n🔍 Breakdown\nAnim na mahalagang batas:\n• RA 9003 — Ecological Solid Waste Management\n• RA 8749 — Clean Air Act\n• RA 9275 — Clean Water Act\n• RA 6969 — Toxic Substances at Hazardous Wastes\n• RA 9729 — Climate Change Act\n• RA 9512 — Environmental Awareness and Education\n\n💡 Simpleng Paliwanag\nLayunin nitong maiwasan ang polusyon, pagkasira ng kalikasan, at pagkaubos ng resources — para mapakinabangan pa ito ng susunod na henerasyon.\n\n📦 Halimbawa\n• RA 9003: Paghihiwalay ng biodegradable, recyclable, residual, special waste.\n• RA 8749: Kontrol sa usok ng sasakyan at pabrika.\n• RA 9275: Huwag magtapon ng wastewater sa ilog.\n• RA 9729: Paghahanda sa bagyo at baha.\n• Reforestation: Pagtatanim ng puno sa kalbong lugar.\n\n⭐ Bakit Mahalaga Ito?\nNapakalaking bahagi ito ng CSE General Information — lalo na ang identification ng RA numbers.\n\n⚠️ Dapat Tandaan\nMemorize ang table:\n• RA 9003 → Ecological Solid Waste Management\n• RA 8749 → Clean Air Act\n• RA 9275 → Clean Water Act\n• RA 6969 → Toxic Substances and Hazardous Wastes\n• RA 9729 → Climate Change Act\n• RA 9512 → Environmental Awareness and Education Act\n\n🎯 Exam Tip\nMadalas mag-match ang tanong ng RA number at description. Mnemonic: 9-9-5-9-9-2 → RA 9003, 8749, 9275, 6969, 9729, 9512. Focus sa pinaka-common: 9003 (waste), 8749 (air), 9275 (water).",
        "prompt": "Explain environmental management in simple Tagalog — RA 9003, 8749, 9275, 6969, 9729, 9512 — with mnemonic and CSE exam tips."
      },
      "sections": [
        {
          "id": "s1",
          "heading": "English Definition",
          "ai": {
            "title": "Kahulugan ng Environmental Management",
            "content": "📖 Kahulugan\nResponsible planning, protection, conservation, at sustainable use ng natural resources.\n\n💡 Simpleng Paliwanag\nPangangalaga sa hangin, tubig, lupa, kagubatan, at hayop — para sa susunod na henerasyon.\n\n⚠️ Dapat Tandaan\nSustainability ang core principle — gamitin pero huwag ubusin.",
            "prompt": "Explain what environmental management is."
          },
          "paragraphs": [
            {
              "id": "p1",
              "text": "Environmental management refers to the responsible planning, protection, conservation, and sustainable use of natural resources to maintain ecological balance, prevent pollution, and protect the environment for present and future generations. It involves implementing environmental policies, managing waste, conserving biodiversity, reducing pollution, and promoting sustainable practices.",
              "ai": {
                "title": "Ano ang Environmental Management?",
                "content": "📖 Kahulugan\nResponsible planning, protection, conservation, at sustainable use ng natural resources.\n\n💡 Simpleng Paliwanag\nKasama rito ang pagsunod sa batas, tamang waste disposal, conservation, at pangangalaga sa halaman at hayop.\n\n⚠️ Dapat Tandaan\nPara sa present at future generations — hindi lang para sa ngayon.",
                "prompt": "Explain this definition of environmental management."
              }
            }
          ]
        },
        {
          "id": "s2",
          "heading": "Philippine Environmental Laws",
          "ai": {
            "title": "Philippine Environmental Laws",
            "content": "📖 Kahulugan\nAnim na pangunahing environmental laws sa Pilipinas.\n\n💡 Simpleng Paliwanag\nBawat batas ay may specific na focus: waste, air, water, toxic, climate, education.\n\n⚠️ Dapat Tandaan\nAng RA numbers ay madalas i-match sa description — memorized dapat.",
            "prompt": "Explain the six main Philippine environmental laws."
          },
          "paragraphs": [
            {
              "id": "p1",
              "label": "1. RA 9003 – Ecological Solid Waste Management Act of 2000:",
              "text": "This law establishes a systematic program for managing solid waste through waste reduction, segregation, recycling, composting, and proper disposal. Example: Households should separate biodegradable, recyclable, residual, and special waste to support proper waste management.",
              "ai": {
                "title": "RA 9003 (Solid Waste)",
                "content": "📖 Kahulugan\nAng RA 9003 ay batas tungkol sa waste reduction, segregation, recycling, composting, at proper disposal.\n\n💡 Simpleng Paliwanag\nPaghihiwalay ng biodegradable, recyclable, residual, at special waste — ito ang core.\n\n⚠️ Dapat Tandaan\nRA 9003 = Solid Waste Management.",
                "prompt": "Explain RA 9003 Ecological Solid Waste Management Act."
              }
            },
            {
              "id": "p2",
              "label": "2. RA 8749 – Philippine Clean Air Act of 1999:",
              "text": "This law aims to protect and maintain clean air by preventing and controlling air pollution. Example: Factories and vehicles must comply with applicable emission standards to reduce harmful air pollutants.",
              "ai": {
                "title": "RA 8749 (Clean Air)",
                "content": "📖 Kahulugan\nAng RA 8749 ay batas para sa clean air — prevention at control ng air pollution.\n\n💡 Simpleng Paliwanag\nFactories at vehicles dapat sumunod sa emission standards.\n\n⚠️ Dapat Tandaan\nRA 8749 = Clean Air Act.",
                "prompt": "Explain RA 8749 Clean Air Act."
              }
            },
            {
              "id": "p3",
              "label": "3. RA 9275 – Philippine Clean Water Act of 2004:",
              "text": "This law aims to protect the country's water resources by preventing and controlling water pollution. Example: Factories must properly manage wastewater instead of releasing untreated industrial waste into rivers.",
              "ai": {
                "title": "RA 9275 (Clean Water)",
                "content": "📖 Kahulugan\nAng RA 9275 ay batas para sa water resources — prevention at control ng water pollution.\n\n💡 Simpleng Paliwanag\nFactories dapat i-manage ang wastewater — hindi ito itinatapon sa ilog.\n\n⚠️ Dapat Tandaan\nRA 9275 = Clean Water Act.",
                "prompt": "Explain RA 9275 Clean Water Act."
              }
            },
            {
              "id": "p4",
              "label": "4. RA 6969 – Toxic Substances and Hazardous and Nuclear Wastes Control Act of 1990:",
              "text": "This law regulates the importation, manufacture, processing, distribution, use, and disposal of chemical substances and hazardous and nuclear wastes. Example: Hazardous chemical waste must be handled and disposed of according to applicable safety and environmental regulations.",
              "ai": {
                "title": "RA 6969 (Toxic Substances)",
                "content": "📖 Kahulugan\nAng RA 6969 ay nagre-regulate ng chemical substances at hazardous/nuclear wastes.\n\n💡 Simpleng Paliwanag\nToxic at nuclear wastes ay may special handling rules — hindi pwedeng basta itapon.\n\n⚠️ Dapat Tandaan\nRA 6969 = Toxic Substances and Hazardous Wastes.",
                "prompt": "Explain RA 6969 Toxic Substances Control Act."
              }
            },
            {
              "id": "p5",
              "label": "5. RA 9729 – Climate Change Act of 2009:",
              "text": "This law integrates climate change considerations into government policies and establishes the Climate Change Commission. Example: Government agencies develop programs to prepare communities for climate-related risks such as floods, droughts, and stronger typhoons.",
              "ai": {
                "title": "RA 9729 (Climate Change)",
                "content": "📖 Kahulugan\nAng RA 9729 ay nag-iintegrate ng climate change sa government policies at nagtatag ng Climate Change Commission.\n\n💡 Simpleng Paliwanag\nPaghahanda sa floods, droughts, stronger typhoons — climate adaptation.\n\n⚠️ Dapat Tandaan\nRA 9729 = Climate Change Act. Nagtatag ito ng Climate Change Commission.",
                "prompt": "Explain RA 9729 Climate Change Act."
              }
            },
            {
              "id": "p6",
              "label": "6. RA 9512 – National Environmental Awareness and Education Act of 2008:",
              "text": "This law promotes environmental awareness through environmental education in schools and other learning institutions. Example: Schools conduct environmental activities and lessons about pollution prevention, conservation, and waste management.",
              "ai": {
                "title": "RA 9512 (Environmental Education)",
                "content": "📖 Kahulugan\nAng RA 9512 ay nagpo-promote ng environmental awareness through education sa schools.\n\n💡 Simpleng Paliwanag\nEnvironmental education sa curriculum — para maging aware ang mga estudyante.\n\n⚠️ Dapat Tandaan\nRA 9512 = Environmental Awareness and Education Act.",
                "prompt": "Explain RA 9512 Environmental Awareness and Education Act."
              }
            }
          ]
        },
        {
          "id": "s3",
          "heading": "Important Environmental Practices",
          "ai": {
            "title": "Mga Environmental Practices",
            "content": "📖 Kahulugan\nPitong karaniwang environmental practices na dapat gawin ng bawat isa.\n\n💡 Simpleng Paliwanag\nSimpleng aksyon ito sa araw-araw — waste segregation, recycling, composting, at iba pa.\n\n⚠️ Dapat Tandaan\nLahat ay nagsisimula sa maliit na gawi — daily habits ang susi.",
            "prompt": "Explain the seven important environmental practices."
          },
          "paragraphs": [
            {
              "id": "p1",
              "text": "Important environmental management practices include: Waste Segregation (separating waste according to type), Recycling (processing used materials into new products), Composting (turning biodegradable waste into organic fertilizer), Reforestation (planting trees to restore forests), Water Conservation (avoiding unnecessary water consumption), Energy Conservation (reducing unnecessary electricity use), and Biodiversity Conservation (protecting different species of plants, animals, and their natural habitats).",
              "ai": {
                "title": "Pitong Environmental Practices",
                "content": "📖 Kahulugan\nPitong practices:\n\n1. Waste Segregation — paghihiwalay ng basura by type\n2. Recycling — processing used materials into new products\n3. Composting — biodegradable waste → organic fertilizer\n4. Reforestation — tree planting para restore forests\n5. Water Conservation — tipirin ang tubig\n6. Energy Conservation — tipirin ang kuryente\n7. Biodiversity Conservation — protektahan ang species at habitats\n\n💡 Simpleng Paliwanag\nLahat ito ay kaya mong gawin sa araw-araw — maliit man, malaking tulong.\n\n⚠️ Dapat Tandaan\nSegregation at recycling — pinaka-basic at madalas lumabas sa exam.",
                "prompt": "Explain the seven environmental practices with examples."
              }
            }
          ]
        }
      ]
    }
  ]
}```

## File: ./frontend/src/data/library/cse-library-imported-2026-11-13.json
```
{
  "format": "cse-library",
  "version": 1,
  "exportedAt": "2026-11-13T12:44:40.044Z",
  "topics": [
    {
      "subject": "Verbal Ability",
      "subject_icon": "📖",
      "topic": "1. Vocabulary (Talasalitaan)",
      "topic_order": 1,
      "keywords": [
        "vocabulary",
        "synonyms",
        "antonyms",
        "homonyms",
        "context clues"
      ],
      "ai": {
        "title": "Gabay sa Vocabulary",
        "content": "📖 Kahulugan\nAng Vocabulary ay ang kabuuang koleksyon ng mga salitang alam, naiintindihan, at ginagamit ng isang tao sa pagsasalita, pagbabasa, at pagsusulat.\n\n🔍 Breakdown\nKasama rito ang pag-unawa sa word meanings, synonyms (magkasingkahulugan), antonyms (magkasalungat), homonyms (parehong baybay o bigkas pero magkaiba ang kahulugan), at context clues (mga pahiwatig sa pangungusap).\n\n💡 Simpleng Paliwanag\nIto ang baul mo ng mga salita. Kapag malawak ang vocabulary mo, madali mong maiintindihan ang malalalim na salita kahit hindi mo pa ito nakita noon.\n\n📦 Halimbawa\nSa salitang 'abundant', ang synonym nito ay 'plentiful'. Sa 'generous', ang antonym ay 'selfish'.\n\n⭐ Bakit Mahalaga Ito?\nMahalaga ito dahil pundasyon ito ng pag-intindi sa kahit anong binabasa o pinapakinggan.\n\n⚠️ Dapat Tandaan\nHuwag lang magkabisado ng salita; tingnan palagi kung paano ito ginamit sa loob ng pangungusap.\n\n🎯 Exam Tip\nSa CSE, gamitin ang context clues sa pangungusap para hulaan ang kahulugan ng mahirap na salita bago tumingin sa choices.",
        "prompt": "Explain the topic of Vocabulary for the Philippine Civil Service Exam in simple Tagalog, including synonyms, antonyms, homonyms, and context clues, with clear examples and common exam traps."
      },
      "sections": [
        {
          "id": "s1",
          "heading": "English Definition:",
          "ai": {
            "title": "Kahulugan ng Vocabulary",
            "content": "📖 Kahulugan\nIpinapaliwanag ng seksyong ito kung ano ang Vocabulary at ang mga pangunahing bahagi nito.\n\n💡 Simpleng Paliwanag\nDito mo malalaman na hindi lang basta kahulugan ng salita ang sakop nito, kundi pati relasyon ng mga salita sa isa't isa.\n\n⚠️ Dapat Tandaan\nTandaan ang apat na susi: synonyms, antonyms, homonyms, at context clues.",
            "prompt": "Explain the definition of Vocabulary and its key components simply in Tagalog for a CSE reviewee, including common traps."
          },
          "paragraphs": [
            {
              "id": "p1",
              "text": "Vocabulary refers to the collection of words a person knows, understands, and uses when speaking, reading, and writing. It includes understanding word meanings, synonyms (words with similar meanings), antonyms (words with opposite meanings), homonyms (words with the same spelling or pronunciation but different meanings), and context clues (hints that help determine the meaning of unfamiliar words).",
              "ai": {
                "title": "Ano ang Vocabulary?",
                "content": "📖 Kahulugan\nAng Vocabulary ay ang mga salitang alam, naiintindihan, at nagagamit mo sa pagsasalita, pagbabasa, at pagsusulat.\n\n💡 Simpleng Paliwanag\nHindi sapat na alam mo lang ang isang salita; dapat alam mo rin ang kasingkahulugan (synonyms), kasalungat (antonyms), mga salitang magkapareho ang tunog o baybay pero iba ang ibig sabihin (homonyms), at paano kunin ang kahulugan base sa gamit sa pangungusap (context clues).\n\n⚠️ Dapat Tandaan\nMagkaiba ang synonym (pareho) at antonym (kabaliktaran)—madalas itong nakakalito kapag nagmamadali sa pagsagot.",
                "prompt": "Explain this definition of Vocabulary in simple Tagalog with everyday examples and highlight common CSE traps between synonyms, antonyms, and homonyms."
              }
            }
          ]
        },
        {
          "id": "s2",
          "heading": "English Examples:",
          "ai": {
            "title": "Mga Halimbawa sa Vocabulary",
            "content": "📖 Kahulugan\nNagbibigay ang seksyong ito ng konkretong halimbawa para sa bawat uri ng vocabulary concept.\n\n💡 Simpleng Paliwanag\nMakikita rito kung paano aktuwal na ginagamit ang synonyms, antonyms, homonyms, at context clues sa pangungusap.\n\n⚠️ Dapat Tandaan\nPansinin ang mga palatandaan sa loob ng pangungusap para makuha ang tamang kahulugan.",
            "prompt": "Explain these Vocabulary examples in simple Tagalog and show how to spot similar patterns in the Civil Service Exam."
          },
          "paragraphs": [
            {
              "id": "p2",
              "label": "-",
              "text": "Synonym: The word abundant means plentiful or available in large quantities.",
              "ai": {
                "title": "Halimbawa ng Synonym",
                "content": "📖 Kahulugan\nAng synonym ay mga salitang magkapareho o magkalapit ang kahulugan.\n\n💡 Simpleng Paliwanag\nAng 'abundant' at 'plentiful' ay parehong nangangahulugang sagana o marami.\n\n⚠️ Dapat Tandaan\nSa exam, piliin ang salitang pinakamalapit ang diwa sa naka-highlight na salita.",
                "prompt": "Explain what a synonym is using the word abundant in simple Tagalog, with extra examples and CSE traps."
              }
            },
            {
              "id": "p3",
              "label": "-",
              "indent": 1,
              "text": "Example: The school has an abundant supply of books.",
              "ai": {
                "title": "Gamit ng Abundant sa Pangungusap",
                "content": "Tanong: Ano ang ibig sabihin ng 'abundant' sa pangungusap na ito?\nSagot: Ibig sabihin nito ay marami o sagana ang suplay ng libro ng paaralan.",
                "prompt": "Explain this example sentence for the word abundant in simple Tagalog and show how context helps confirm its meaning."
              }
            },
            {
              "id": "p4",
              "label": "-",
              "text": "Antonym: The opposite of generous is selfish.",
              "ai": {
                "title": "Halimbawa ng Antonym",
                "content": "📖 Kahulugan\nAng antonym ay mga salitang magkasalungat o magkabaliktaran ang ibig sabihin.\n\n💡 Simpleng Paliwanag\nKung ang 'generous' ay mapagbigay, ang kabaliktaran naman nito ay 'selfish' o makasarili.\n\n⚠️ Dapat Tandaan\nBasahing mabuti ang panuto kung 'opposite' o 'similar' ang hinahanap dahil ito ang pinakamadaling pagkamalian sa CSE.",
                "prompt": "Explain antonyms using generous and selfish in simple Tagalog, and warn about common Civil Service Exam traps."
              }
            },
            {
              "id": "p5",
              "label": "-",
              "text": "Homonym: The word bat can refer to an animal or a piece of sports equipment.",
              "ai": {
                "title": "Halimbawa ng Homonym",
                "content": "📖 Kahulugan\nAng homonym ay salitang magkapareho ang baybay o bigkas ngunit magkaiba ang kahulugan.\n\n💡 Simpleng Paliwanag\nAng salitang 'bat' ay pwedeng tumukoy sa hayop na paniki o kaya sa pamalo sa larong baseball.\n\n⚠️ Dapat Tandaan\nNakadepende sa buong pangungusap kung aling kahulugan ng homonym ang tinutukoy.",
                "prompt": "Explain homonyms using the word bat in simple Tagalog, give more examples, and note how CSE tests words with multiple meanings."
              }
            },
            {
              "id": "p6",
              "label": "-",
              "text": "Context Clues: Maria was exhausted after running for five kilometers. The word exhausted means extremely tired.",
              "ai": {
                "title": "Halimbawa ng Context Clues",
                "content": "📖 Kahulugan\nAng context clues ay mga salita o ideya sa loob ng pangungusap na tumutulong hulaan ang kahulugan ng isang mahirap na salita.\n\n💡 Simpleng Paliwanag\nDahil tumakbo si Maria ng limang kilometro, malinaw na ang 'exhausted' ay nangangahulugang sobrang pagod.\n\n⚠️ Dapat Tandaan\nHanapin ang sanhi, bunga, o paliwanag sa paligid ng hindi pamilyar na salita.",
                "prompt": "Explain context clues using this sentence about Maria in simple Tagalog, and give tips on solving CSE vocabulary items without a dictionary."
              }
            }
          ]
        }
      ]
    },
    {
      "subject": "Verbal Ability",
      "subject_icon": "📖",
      "topic": "2. Grammar and Correct Usage (Balarila at Tamang Paggamit)",
      "topic_order": 2,
      "keywords": [
        "grammar",
        "parts of speech",
        "noun",
        "verb tense",
        "subject-verb agreement"
      ],
      "ai": {
        "title": "Gabay sa Grammar and Correct Usage",
        "content": "📖 Kahulugan\nAng Grammar ay ang set ng mga panuntunan kung paano binubuo, inaayos, at tamang ginagamit ang mga salita sa loob ng pangungusap.\n\n🔍 Breakdown\nSakop nito ang parts of speech (nouns, pronouns, verbs, adjectives, adverbs, prepositions, conjunctions, interjections), subject-verb agreement, verb tenses, sentence structure, at proper punctuation.\n\n💡 Simpleng Paliwanag\nIto ang 'batas' ng English language. Kapag sinunod mo ang rules na ito, malinaw at tama ang pagkakabuo ng iyong pangungusap.\n\n📦 Halimbawa\nSa Subject-Verb Agreement: 'She runs every morning' (tama dahil singular ang 'She' at may -s ang 'runs').\n\n⭐ Bakit Mahalaga Ito?\nMahalaga ito para maiwasan ang malabong kahulugan at maling pagkakabuo ng mga pangungusap sa pagsusulat at pagsasalita.\n\n⚠️ Dapat Tandaan\nSa English verbs, baliktad ang -s rule: ang singular subject ay kadalasang gumagamit ng verb na may -s (hal. runs), habang ang plural subject ay walang -s (hal. run).\n\n🎯 Exam Tip\nSa Identifying Errors o Correct Usage sa CSE, hanapin muna ang pangunahing subject at verb para makita agad kung nagtutugma sila.",
        "prompt": "Explain Grammar and Correct Usage for the Philippine Civil Service Exam in simple Tagalog, covering parts of speech, tenses, and subject-verb agreement with examples and traps."
      },
      "sections": [
        {
          "id": "s3",
          "heading": "English Definition:",
          "ai": {
            "title": "Kahulugan ng Grammar",
            "content": "📖 Kahulugan\nIpinapaliwanag ng seksyong ito kung ano ang Grammar at ang mga saklaw nitong tuntunin.\n\n💡 Simpleng Paliwanag\nIto ang gabay kung paano pinagsasama-sama nang tama ang mga salita para makabuo ng maayos na pangungusap.\n\n⚠️ Dapat Tandaan\nKabisaduhin ang walong parts of speech dahil dito umiikot ang karamihan sa mga tanong sa grammar.",
            "prompt": "Explain the definition of Grammar and its main areas in simple Tagalog for a CSE reviewee."
          },
          "paragraphs": [
            {
              "id": "p7",
              "text": "Grammar refers to the set of rules that govern how words are formed, arranged, and used correctly in sentences. It includes parts of speech (nouns, pronouns, verbs, adjectives, adverbs, prepositions, conjunctions, and interjections), subject-verb agreement, verb tenses, sentence structure, and proper punctuation.",
              "ai": {
                "title": "Ano ang Grammar?",
                "content": "📖 Kahulugan\nAng Grammar ay ang mga patakaran kung paano binubuo, inaayos, at ginagamit nang wasto ang mga salita sa pangungusap.\n\n💡 Simpleng Paliwanag\nKasama rito ang walong parts of speech, ang pagtutugma ng simuno at pandiwa (subject-verb agreement), panahunan ng pandiwa (verb tenses), ayos ng pangungusap, at tamang bantas (punctuation).\n\n⚠️ Dapat Tandaan\nKapag may isang rule na nalabag sa pangungusap, nagiging mali na ang grammar nito.",
                "prompt": "Explain this definition of Grammar in simple Tagalog, breaking down each component with simple examples and CSE traps."
              }
            }
          ]
        },
        {
          "id": "s4",
          "heading": "English Examples:",
          "ai": {
            "title": "Mga Halimbawa sa Grammar",
            "content": "📖 Kahulugan\nNagpapakita ito ng mga tiyak na halimbawa ng nouns, verb tenses, at subject-verb agreement.\n\n💡 Simpleng Paliwanag\nMakikita rito ang pagkakaiba ng tama at maling gamit ng salita sa totoong pangungusap.\n\n⚠️ Dapat Tandaan\nBigyang-pansin ang capitalization sa proper nouns at ang -s sa singular verbs.",
            "prompt": "Explain these Grammar examples in simple Tagalog and highlight the exact rules tested in the Civil Service Exam."
          },
          "paragraphs": [
            {
              "id": "p8",
              "label": "-",
              "text": "Noun: Names a person, place, thing, or idea.",
              "ai": {
                "title": "Kahulugan ng Noun",
                "content": "📖 Kahulugan\nAng Noun (pangngalan) ay salitang nagbibigay ngalan sa tao, lugar, bagay, o ideya.\n\n💡 Simpleng Paliwanag\nLahat ng bagay na may pangalan—nakikita man o hindi—ay tinatawag na noun.\n\n⚠️ Dapat Tandaan\nHindi lang tao o bagay ang noun; kasama rin dito ang mga ideya gaya ng love o freedom.",
                "prompt": "Explain what a Noun is in simple Tagalog with examples of person, place, thing, and idea, plus CSE traps."
              }
            },
            {
              "id": "p9",
              "label": "-",
              "indent": 1,
              "text": "Example: The student reads a book.",
              "ai": {
                "title": "Halimbawa ng Noun sa Pangungusap",
                "content": "Tanong: Alin ang mga noun sa pangungusap na ito?\nSagot: Ang 'student' (tao) at 'book' (bagay) ang mga noun dito.",
                "prompt": "Identify and explain the nouns in this example sentence in simple Tagalog."
              }
            },
            {
              "id": "p10",
              "label": "-",
              "text": "Proper Noun: Refers to a specific name and always begins with a capital letter.",
              "ai": {
                "title": "Kahulugan ng Proper Noun",
                "content": "📖 Kahulugan\nAng Proper Noun ay tumutukoy sa tiyak o partikular na pangalan at laging nagsisimula sa malaking titik (capital letter).\n\n💡 Simpleng Paliwanag\nIto ang mismong pangalan ng isang tao, lugar, o bagay kaya laging naka-capitalize.\n\n⚠️ Dapat Tandaan\nKahit nasa gitna ng pangungusap ang proper noun, dapat ay capital letter pa rin ang unang letra nito.",
                "prompt": "Explain Proper Nouns in simple Tagalog with examples and capitalization rules tested in the CSE."
              }
            },
            {
              "id": "p11",
              "label": "-",
              "indent": 1,
              "text": "Example: Philippines, Manila, Harry Potter.",
              "ai": {
                "title": "Mga Halimbawa ng Proper Noun",
                "content": "Tanong: Bakit nagsisimula sa malaking titik ang Philippines, Manila, at Harry Potter?\nSagot: Dahil tiyak na pangalan sila ng bansa, lungsod, at karakter kaya proper nouns sila.",
                "prompt": "Explain why these specific examples are Proper Nouns in simple Tagalog."
              }
            },
            {
              "id": "p12",
              "label": "-",
              "text": "Common Noun: Refers to a general person, place, or thing.",
              "ai": {
                "title": "Kahulugan ng Common Noun",
                "content": "📖 Kahulugan\nAng Common Noun ay tumutukoy sa pangkalahatang ngalan ng tao, lugar, o bagay.\n\n💡 Simpleng Paliwanag\nHindi ito tiyak na pangalan, kaya hindi ito naka-capitalize maliban na lang kung nasa simula ng pangungusap.\n\n⚠️ Dapat Tandaan\nHuwag i-capitalize ang common nouns sa gitna ng pangungusap.",
                "prompt": "Explain Common Nouns in simple Tagalog and contrast them with Proper Nouns, including CSE traps."
              }
            },
            {
              "id": "p13",
              "label": "-",
              "indent": 1,
              "text": "Example: city, teacher, book.",
              "ai": {
                "title": "Mga Halimbawa ng Common Noun",
                "content": "Tanong: Bakit maliit ang unang titik ng city, teacher, at book?\nSagot: Dahil pangkalahatang tawag lang sila sa lugar, tao, at bagay—walang tiyak na pangalan.",
                "prompt": "Explain these Common Noun examples in simple Tagalog."
              }
            },
            {
              "id": "p14",
              "label": "-",
              "text": "Verb Tense: Shows when an action happens.",
              "ai": {
                "title": "Kahulugan ng Verb Tense",
                "content": "📖 Kahulugan\nAng Verb Tense ay nagpapakita kung kailan nangyari, nangyayari, o mangyayari ang isang kilos.\n\n💡 Simpleng Paliwanag\nNagbabago ang anyo ng pandiwa (verb) depende sa panahon ng kilos—nakaraan, kasalukuyan, o hinaharap.\n\n⚠️ Dapat Tandaan\nTingnan ang time markers sa pangungusap (gaya ng yesterday, every day, tomorrow) para malaman ang tamang tense.",
                "prompt": "Explain Verb Tenses in simple Tagalog and show how time markers help identify the right tense in the CSE."
              }
            },
            {
              "id": "p15",
              "label": "-",
              "indent": 1,
              "text": "Present: She studies every day.",
              "ai": {
                "title": "Present Tense Example",
                "content": "Tanong: Bakit 'studies' ang ginamit sa pangungusap na ito?\nSagot: Dahil ang 'every day' ay nagpapakita ng kilos na ginagawa nang paulit-ulit sa kasalukuyan (Present Tense).",
                "prompt": "Explain the present tense in this example sentence in simple Tagalog, including spelling and agreement rules."
              }
            },
            {
              "id": "p16",
              "label": "-",
              "indent": 1,
              "text": "Past: She studied yesterday.",
              "ai": {
                "title": "Past Tense Example",
                "content": "Tanong: Paano natin nalaman na Past Tense ang dapat gamitin dito?\nSagot: Dahil sa salitang 'yesterday', na nagpapakitang tapos na ang pag-aaral niya kahapon.",
                "prompt": "Explain the past tense in this example sentence in simple Tagalog, including regular vs irregular verb traps."
              }
            },
            {
              "id": "p17",
              "label": "-",
              "indent": 1,
              "text": "Future: She will study tomorrow.",
              "ai": {
                "title": "Future Tense Example",
                "content": "Tanong: Paano ipinakita ang Future Tense sa pangungusap?\nSagot: Gumamit ng 'will' bago ang base form na 'study' dahil bukas ('tomorrow') pa ito gagawin.",
                "prompt": "Explain the future tense in this example sentence in simple Tagalog and warn against adding -s or -ed after 'will'."
              }
            },
            {
              "id": "p18",
              "label": "-",
              "text": "Subject-Verb Agreement: The subject and verb must agree in number.",
              "ai": {
                "title": "Kahulugan ng Subject-Verb Agreement",
                "content": "📖 Kahulugan\nSa Subject-Verb Agreement, dapat magkatugma sa bilang (singular o plural) ang paksa (subject) at ang pandiwa (verb).\n\n💡 Simpleng Paliwanag\nKung iisa ang gumagawa ng kilos (singular), dapat singular din ang verb. Kung marami sila (plural), plural din ang verb.\n\n⚠️ Dapat Tandaan\nSa simple present tense, ang singular verb ay nagtatapos sa -s, samantalang ang plural verb ay walang -s.",
                "prompt": "Explain Subject-Verb Agreement in simple Tagalog with clear rules and common CSE traps like intervening phrases."
              }
            },
            {
              "id": "p19",
              "label": "-",
              "indent": 1,
              "text": "Correct: She runs every morning.",
              "ai": {
                "title": "Tamang Subject-Verb Agreement",
                "content": "Tanong: Bakit tama ang 'She runs every morning'?\nSagot: Dahil iisa lang si 'She' (singular), kaya dapat may -s ang verb na 'runs'.",
                "prompt": "Explain why this sentence has correct subject-verb agreement in simple Tagalog."
              }
            },
            {
              "id": "p20",
              "label": "-",
              "indent": 1,
              "text": "Incorrect: She run every morning.",
              "ai": {
                "title": "Maling Subject-Verb Agreement",
                "content": "Tanong: Bakit mali ang 'She run every morning'?\nSagot: Mali ito dahil singular ang 'She' pero walang -s ang verb na 'run' sa present tense.",
                "prompt": "Explain why this sentence is grammatically incorrect in simple Tagalog and how to fix it."
              }
            }
          ]
        }
      ]
    },
    {
      "subject": "Verbal Ability",
      "subject_icon": "📖",
      "topic": "3. Paragraph Organization (Pag-aayos ng mga Talata)",
      "topic_order": 3,
      "keywords": [
        "paragraph organization",
        "topic sentence",
        "supporting details",
        "transition words",
        "concluding sentence"
      ],
      "ai": {
        "title": "Gabay sa Paragraph Organization",
        "content": "📖 Kahulugan\nAng Paragraph Organization ay ang lohikal at maayos na pagkakasunod-sunod ng mga pangungusap at ideya upang makabuo ng malinaw at magkakaugnay na talata.\n\n🔍 Breakdown\nBinubuo ito ng apat na bahagi: Topic Sentence (pangunahing ideya), Supporting Details (mga paliwanag o halimbawa), Transition Words (pang-ugnay na salita), at Concluding Sentence (pangwakas na buod).\n\n💡 Simpleng Paliwanag\nPara itong pagkukwento na may simula, gitna, at wakas. Hindi pwedeng magulo o talon-talon ang mga ideya para madaling maintindihan ng nagbabasa.\n\n📦 Halimbawa\nSimulan sa pangkalahatang ideya tungkol sa edukasyon, sundan ng mga benepisyo nito, gumamit ng 'Furthermore', at tapusin gamit ang 'Therefore'.\n\n⭐ Bakit Mahalaga Ito?\nMahalaga ito dahil nagiging malinaw, kapani-paniwala, at madaling sundan ang daloy ng iyong isinusulat o binabasa.\n\n⚠️ Dapat Tandaan\nAng topic sentence ang pinakapangkalahatang ideya, habang ang mga detalye at halimbawa ay laging sumusunod lang dito.\n\n🎯 Exam Tip\nSa CSE Paragraph Organization, hanapin muna ang pinaka-general sentence para sa simula at ang pangungusap na may 'Therefore' o 'In conclusion' para sa dulo.",
        "prompt": "Explain Paragraph Organization for the Philippine Civil Service Exam in simple Tagalog, covering topic sentences, supporting details, transitions, and conclusions with strategies and traps."
      },
      "sections": [
        {
          "id": "s5",
          "heading": "English Definition:",
          "ai": {
            "title": "Kahulugan ng Paragraph Organization",
            "content": "📖 Kahulugan\nIpinapaliwanag ng seksyong ito kung ano ang Paragraph Organization at ang mga bahaging bumubuo rito.\n\n💡 Simpleng Paliwanag\nIto ang tamang pagkakasunod-sunod ng mga ideya para hindi magulo ang isang talata.\n\n⚠️ Dapat Tandaan\nTandaan ang apat na sangkap: topic sentence, supporting sentences, transitional words, at concluding sentence.",
            "prompt": "Explain the definition of Paragraph Organization in simple Tagalog for a CSE reviewee."
          },
          "paragraphs": [
            {
              "id": "p21",
              "text": "Paragraph organization refers to the logical arrangement of sentences and ideas to create a clear, meaningful, and well-connected paragraph. A well-organized paragraph usually contains a topic sentence, supporting sentences, transitional words, and a concluding sentence.",
              "ai": {
                "title": "Ano ang Paragraph Organization?",
                "content": "📖 Kahulugan\nAng Paragraph Organization ay ang lohikal na pagsasaayos ng mga pangungusap at ideya upang makabuo ng malinaw, makabuluhan, at magkakaugnay na talata.\n\n💡 Simpleng Paliwanag\nAng isang maayos na talata ay may malinaw na simula (topic sentence), gitna (supporting sentences at transitional words), at katapusan (concluding sentence).\n\n⚠️ Dapat Tandaan\nKailangan ay magkakaugnay ang bawat pangungusap at hindi lumilihis sa pangunahing paksa.",
                "prompt": "Explain this definition of Paragraph Organization in simple Tagalog and show how each part connects to the next."
              }
            }
          ]
        },
        {
          "id": "s6",
          "heading": "English Example — A paragraph about the importance of education:",
          "ai": {
            "title": "Halimbawa ng Maayos na Talata",
            "content": "📖 Kahulugan\nNagpapakita ang seksyong ito ng kumpletong modelo kung paano binubuo ang isang talata tungkol sa edukasyon.\n\n💡 Simpleng Paliwanag\nMakikita rito ang sunod-sunod na pwesto ng bawat bahagi mula simula hanggang dulo.\n\n⚠️ Dapat Tandaan\nPansinin kung paano ginamit ang 'Furthermore' at 'Therefore' bilang palatandaan ng ayos.",
            "prompt": "Walk through this example paragraph about education in simple Tagalog, pointing out the flow of ideas and CSE sequencing clues."
          },
          "paragraphs": [
            {
              "id": "p22",
              "label": "-",
              "text": "Topic Sentence: Education plays an important role in a person's future.",
              "ai": {
                "title": "Halimbawa ng Topic Sentence",
                "content": "📖 Kahulugan\nIto ang pangungusap na nagpapakilala sa pangunahing ideya ng buong talata.\n\n💡 Simpleng Paliwanag\nSinasabi agad nito na tungkol sa mahalagang papel ng edukasyon sa kinabukasan ang pag-uusapan.\n\n⚠️ Dapat Tandaan\nPangkalahatan ang pahayag na ito at wala pang masyadong detalye kaya ito ang nasa unahan.",
                "prompt": "Explain why this serves as the Topic Sentence in simple Tagalog and how to spot opening sentences in CSE tests."
              }
            },
            {
              "id": "p23",
              "label": "-",
              "text": "Supporting Details: It provides knowledge, develops skills, and helps individuals find better career opportunities.",
              "ai": {
                "title": "Halimbawa ng Supporting Details",
                "content": "📖 Kahulugan\nIto ang mga pangungusap na nagpapaliwanag at nagpapatunay sa topic sentence.\n\n💡 Simpleng Paliwanag\nIbinibigay nito ang mga tiyak na paraan kung paano nakakatulong ang edukasyon: kaalaman, kasanayan, at magandang trabaho.\n\n⚠️ Dapat Tandaan\nNotice the pronoun 'It'—tumutukoy ito sa 'Education' sa unang pangungusap, kaya siguradong kasunod ito.",
                "prompt": "Explain these Supporting Details in simple Tagalog and point out pronoun clues like 'It' that help order sentences."
              }
            },
            {
              "id": "p24",
              "label": "-",
              "text": "Transition: Furthermore, education teaches discipline and responsibility.",
              "ai": {
                "title": "Halimbawa ng Transition",
                "content": "📖 Kahulugan\nGumagamit ito ng transition word upang magdagdag ng kaugnay na ideya nang maayos.\n\n💡 Simpleng Paliwanag\nAng salitang 'Furthermore' ay nangangahulugang 'bukod pa rito', kaya nagdadagdag ito ng isa pang magandang dulot ng edukasyon.\n\n⚠️ Dapat Tandaan\nAng mga salitang gaya ng 'Furthermore' o 'In addition' ay hindi kailanman pwedeng maging unang pangungusap ng talata.",
                "prompt": "Explain the role of transitions using 'Furthermore' in simple Tagalog, with common CSE sequence traps."
              }
            },
            {
              "id": "p25",
              "label": "-",
              "text": "Concluding Sentence: Therefore, education is essential for personal growth and success.",
              "ai": {
                "title": "Halimbawa ng Concluding Sentence",
                "content": "📖 Kahulugan\nIto ang pangwakas na pangungusap na nagbubuod sa pangunahing mensahe ng talata.\n\n💡 Simpleng Paliwanag\nGamit ang salitang 'Therefore' (samakatuwid), isinasara nito ang talata sa pamamagitan ng pag-uulit na mahalaga ang edukasyon para sa pag-unlad at tagumpay.\n\n⚠️ Dapat Tandaan\nAng mga salitang gaya ng 'Therefore', 'Thus', at 'Finally' ay malakas na palatandaan na ito ang huling pangungusap.",
                "prompt": "Explain this Concluding Sentence in simple Tagalog and list common conclusion signal words used in the CSE."
              }
            }
          ]
        },
        {
          "id": "s7",
          "heading": "Important Elements:",
          "ai": {
            "title": "Mahahalagang Elemento ng Talata",
            "content": "📖 Kahulugan\nInililista at binibigyang-kahulugan ng seksyong ito ang apat na mahahalagang bahagi ng isang talata.\n\n💡 Simpleng Paliwanag\nIto ang mabilisang gabay sa tungkulin ng bawat bahagi ng paragraph organization.\n\n⚠️ Dapat Tandaan\nKabisaduhin ang papel ng bawat isa para madaling matukoy ang tamang pagkakasunod-sunod.",
            "prompt": "Summarize these four important elements of a paragraph in simple Tagalog for quick CSE review."
          },
          "paragraphs": [
            {
              "id": "p26",
              "label": "-",
              "text": "Topic Sentence: Introduces the main idea of the paragraph.",
              "ai": {
                "title": "Tungkulin ng Topic Sentence",
                "content": "📖 Kahulugan\nIpinapakilala nito ang pangunahing ideya o paksa ng buong talata.\n\n💡 Simpleng Paliwanag\nIto ang pinaka-ulo ng talata na nagsasabi kung tungkol saan ang lahat ng susunod na pangungusap.\n\n⚠️ Dapat Tandaan\nKadalasan itong matatagpuan sa pinakaunang bahagi ng talata.",
                "prompt": "Explain the function of a Topic Sentence in simple Tagalog and how to distinguish it from supporting details."
              }
            },
            {
              "id": "p27",
              "label": "-",
              "text": "Supporting Details: Provide explanations, facts, or examples that support the main idea.",
              "ai": {
                "title": "Tungkulin ng Supporting Details",
                "content": "📖 Kahulugan\nNagbibigay ang mga ito ng paliwanag, katotohanan (facts), o halimbawa na sumusuporta sa pangunahing ideya.\n\n💡 Simpleng Paliwanag\nIto ang laman o katawan ng talata na nagpapatibay sa sinabi ng topic sentence.\n\n⚠️ Dapat Tandaan\nHindi dapat magpasok ng ibang paksa sa supporting details.",
                "prompt": "Explain Supporting Details in simple Tagalog with examples of facts and explanations."
              }
            },
            {
              "id": "p28",
              "label": "-",
              "text": "Transition Words: Connect ideas smoothly (first, furthermore, however, therefore).",
              "ai": {
                "title": "Tungkulin ng Transition Words",
                "content": "📖 Kahulugan\nAng transition words ay mga salitang nagdurugtong sa mga ideya nang maayos at madulas.\n\n💡 Simpleng Paliwanag\nGaya ng 'first', 'furthermore', 'however', at 'therefore', nagsisilbi itong tulay para hindi biglaan ang lipat mula sa isang pangungusap patungo sa susunod.\n\n⚠️ Dapat Tandaan\nAlamin ang gamit ng bawat transition: 'furthermore' (dagdag), 'however' (salungat), at 'therefore' (resulta/konklusyon).",
                "prompt": "Explain Transition Words in simple Tagalog, categorizing words like first, furthermore, however, and therefore for CSE items."
              }
            },
            {
              "id": "p29",
              "label": "-",
              "text": "Concluding Sentence: Summarizes the main idea and provides a proper ending.",
              "ai": {
                "title": "Tungkulin ng Concluding Sentence",
                "content": "📖 Kahulugan\nBinubuod nito ang pangunahing ideya at nagbibigay ng maayos na pagtatapos sa talata.\n\n💡 Simpleng Paliwanag\nIto ang panghuling pangungusap na nagsasara sa diskusyon nang hindi na nagdadagdag ng bagong ideya.\n\n⚠️ Dapat Tandaan\nHindi dapat naglalaman ng panibagong paksa ang concluding sentence.",
                "prompt": "Explain the role of a Concluding Sentence in simple Tagalog and common traps when choosing the final sentence in CSE."
              }
            }
          ]
        }
      ]
    },
    {
      "subject": "Verbal Ability",
      "subject_icon": "📖",
      "topic": "4. Reading Comprehension (Pag-unawa sa Binasa)",
      "topic_order": 4,
      "keywords": [
        "reading comprehension",
        "main idea",
        "supporting details",
        "inference",
        "author's purpose",
        "moral lesson"
      ],
      "ai": {
        "title": "Gabay sa Reading Comprehension",
        "content": "📖 Kahulugan\nAng Reading Comprehension ay ang kakayahang magbasa, umunawa, magbigay-kahulugan, at magsuri ng mga nakasulat na teksto.\n\n🔍 Breakdown\nKasama rito ang pagtukoy sa main idea (pangunahing ideya), pagkilala sa supporting details (mga sumusuportang detalye), paggawa ng inferences (matalinong hinuha), pag-unawa sa author's purpose (layunin ng may-akda), at pagkuha ng message o moral lesson.\n\n💡 Simpleng Paliwanag\nHindi sapat na nababasa mo lang ang mga salita; kailangan naiintindihan mo ang kabuuang mensahe ng kwento, pati ang mga bagay na hindi direktang sinabi.\n\n📦 Halimbawa\nSa kwento ng batang tumulong sa matanda sa pagtawid: ang main idea ay pagtulong sa matanda, at ang inference ay mabait at maalalahanin ang bata.\n\n⭐ Bakit Mahalaga Ito?\nMahalaga ito dahil halos lahat ng impormasyon sa pag-aaral at trabaho ay nakukuha sa pamamagitan ng pagbabasa at tamang pag-unawa.\n\n⚠️ Dapat Tandaan\nIbase lang ang sagot sa kung ano ang sinasabi o ipinapahiwatig ng teksto—huwag magdagdag ng sariling opinyon na wala sa binasa.\n\n🎯 Exam Tip\nSa CSE Reading Comprehension, basahin muna ang mga tanong bago ang mahabang talata para alam mo agad kung anong detalye ang hahanapin.",
        "prompt": "Explain Reading Comprehension for the Philippine Civil Service Exam in simple Tagalog, covering main idea, supporting details, inference, author's purpose, and moral lesson with tips and traps."
      },
      "sections": [
        {
          "id": "s8",
          "heading": "English Definition:",
          "ai": {
            "title": "Kahulugan ng Reading Comprehension",
            "content": "📖 Kahulugan\nIpinapaliwanag ng seksyong ito kung ano ang Reading Comprehension at ang limang kasanayang sakop nito.\n\n💡 Simpleng Paliwanag\nDito makikita na ang pag-unawa sa binasa ay may iba't ibang antas—mula sa direktang detalye hanggang sa malalim na pagsusuri.\n\n⚠️ Dapat Tandaan\nAlamin ang pagkakaiba ng direktang detalye (supporting details) at ng hinuha (inference).",
            "prompt": "Explain the definition of Reading Comprehension and its five core skills in simple Tagalog for a CSE reviewee."
          },
          "paragraphs": [
            {
              "id": "p30",
              "text": "Reading comprehension is the ability to read, understand, interpret, and analyze written texts. It involves identifying the main idea, recognizing supporting details, making inferences, understanding the author's purpose, and identifying the message or lesson presented in a passage.",
              "ai": {
                "title": "Ano ang Reading Comprehension?",
                "content": "📖 Kahulugan\nAng Reading Comprehension ay ang kakayahang magbasa, umunawa, mag-interpret, at mag-analisa ng mga nakasulat na teksto.\n\n💡 Simpleng Paliwanag\nKapag nagbabasa ka, tinutukoy mo ang main idea, supporting details, inferences, author's purpose, at ang aral o mensahe ng talata.\n\n⚠️ Dapat Tandaan\nLaging nakabatay sa mismong binasang teksto ang lahat ng tamang sagot.",
                "prompt": "Explain this definition of Reading Comprehension in simple Tagalog and clarify what each skill means during an exam."
              }
            }
          ]
        },
        {
          "id": "s9",
          "heading": "English Example — After reading a short story about a boy who helps an elderly woman cross the street:",
          "ai": {
            "title": "Halimbawa ng Pagsusuri sa Kwento",
            "content": "📖 Kahulugan\nIpinapakita rito kung paano sinasagot ang iba't ibang uri ng tanong sa Reading Comprehension gamit ang isang maikling kwento.\n\n💡 Simpleng Paliwanag\nMula sa simpleng kwento ng batang tumulong sa matanda, makikita kung paano hinahango ang main idea, detalye, inference, layunin, at aral.\n\n⚠️ Dapat Tandaan\nTingnan kung paano nagkakaiba ang sagot sa bawat uri ng tanong kahit iisang kwento lang ang pinagbatayan.",
            "prompt": "Explain how each reading comprehension question in this story example works in simple Tagalog, including common CSE traps."
          },
          "paragraphs": [
            {
              "id": "p31",
              "label": "-",
              "text": "Main Idea: What is the story mainly about?",
              "ai": {
                "title": "Tanong sa Main Idea",
                "content": "📖 Kahulugan\nTinatanong ng Main Idea kung tungkol saan ang kabuuan ng kwento o talata.\n\n💡 Simpleng Paliwanag\nIto ang pinakabuod o pangunahing paksa na umiikot sa buong binasa.\n\n⚠️ Dapat Tandaan\nHuwag piliin ang masyadong maliit na detalye o ang masyadong malawak na ideya na wala sa kwento.",
                "prompt": "Explain how to find the Main Idea in simple Tagalog and common distractor traps in the CSE."
              }
            },
            {
              "id": "p32",
              "label": "-",
              "indent": 1,
              "text": "Answer: A boy helping an elderly woman.",
              "ai": {
                "title": "Sagot sa Main Idea",
                "content": "Tanong: Bakit ito ang Main Idea ng kwento?\nSagot: Dahil ang buong kwento ay umiikot sa pagtulong ng bata sa matandang babae.",
                "prompt": "Explain why this answer accurately captures the Main Idea in simple Tagalog."
              }
            },
            {
              "id": "p33",
              "label": "-",
              "text": "Supporting Details: What did the boy do?",
              "ai": {
                "title": "Tanong sa Supporting Details",
                "content": "📖 Kahulugan\nAng Supporting Details ay mga tiyak na impormasyon o pangyayari na direktang nakasulat sa teksto.\n\n💡 Simpleng Paliwanag\nSinasagot nito ang mga tanong na ano, sino, saan, kailan, at paano base mismo sa nabasa.\n\n⚠️ Dapat Tandaan\nDirekta mo itong mahahanap sa mismong mga pangungusap ng talata.",
                "prompt": "Explain Supporting Details in Reading Comprehension in simple Tagalog and how to locate them quickly."
              }
            },
            {
              "id": "p34",
              "label": "-",
              "indent": 1,
              "text": "Answer: He helped the woman cross the street.",
              "ai": {
                "title": "Sagot sa Supporting Details",
                "content": "Tanong: Paano nakuha ang sagot na ito?\nSagot: Direktang binanggit sa kwento ang ginawa ng bata—tinulungan niyang tumawid sa kalsada ang matanda.",
                "prompt": "Explain why this is a Supporting Detail in simple Tagalog."
              }
            },
            {
              "id": "p35",
              "label": "-",
              "text": "Inference: What can you conclude about the boy?",
              "ai": {
                "title": "Tanong sa Inference",
                "content": "📖 Kahulugan\nAng Inference ay matalinong hinuha o konklusyon base sa mga pahiwatig sa kwento kahit hindi ito direktang sinabi.\n\n💡 Simpleng Paliwanag\nIto ang 'reading between the lines'—ginagamit mo ang ebidensya sa kwento para makabuo ng tamang palagay.\n\n⚠️ Dapat Tandaan\nDapat may matibay na basehan sa teksto ang iyong hinuha at hindi basta hula lang.",
                "prompt": "Explain how to make an Inference in simple Tagalog and how to avoid over-assuming on CSE questions."
              }
            },
            {
              "id": "p36",
              "label": "-",
              "indent": 1,
              "text": "Answer: He is helpful and considerate.",
              "ai": {
                "title": "Sagot sa Inference",
                "content": "Tanong: Bakit masasabing matulungin at maalalahanin ang bata?\nSagot: Kahit hindi direktang sinabi sa kwento ang mga salitang iyon, ipinakita ito ng kilos niyang pagtulong sa matanda.",
                "prompt": "Explain how this inference is supported by the boy's actions in simple Tagalog."
              }
            },
            {
              "id": "p37",
              "label": "-",
              "text": "Author's Purpose: Why did the author write the story?",
              "ai": {
                "title": "Tanong sa Author's Purpose",
                "content": "📖 Kahulugan\nAng Author's Purpose ay ang dahilan o layunin ng may-akda kung bakit niya isinulat ang teksto.\n\n💡 Simpleng Paliwanag\nTinatanong nito kung gusto ba ng writer na magbigay-impormasyon, manghikayat, magbigay-aliw, o magpakita ng isang mahalagang punto.\n\n⚠️ Dapat Tandaan\nPag-isipan ang kabuuang tono at mensahe ng sulatin para matukoy ang layunin ng may-akda.",
                "prompt": "Explain Author's Purpose in simple Tagalog (to inform, persuade, entertain, or illustrate a value) with CSE tips."
              }
            },
            {
              "id": "p38",
              "label": "-",
              "indent": 1,
              "text": "Answer: To show the importance of kindness.",
              "ai": {
                "title": "Sagot sa Author's Purpose",
                "content": "Tanong: Ano ang layunin ng may-akda sa kwentong ito?\nSagot: Isinulat niya ito upang ipakita ang kahalagahan ng kabaitan o pagiging matulungin sa kapwa.",
                "prompt": "Explain why showing the importance of kindness is the author's purpose here in simple Tagalog."
              }
            },
            {
              "id": "p39",
              "label": "-",
              "text": "Moral Lesson: What lesson can you learn?",
              "ai": {
                "title": "Tanong sa Moral Lesson",
                "content": "📖 Kahulugan\nAng Moral Lesson ay ang magandang asal o aral sa buhay na mapupulot mula sa binasang kwento.\n\n💡 Simpleng Paliwanag\nIto ang praktikal na paalala na pwede mong isabuhay pagkatapos mong mabasa ang teksto.\n\n⚠️ Dapat Tandaan\nAng moral lesson ay karaniwang positibo at pangkalahatang gabay sa tamang pag-uugali.",
                "prompt": "Explain how to identify the Moral Lesson of a passage in simple Tagalog and distinguish it from the Main Idea."
              }
            },
            {
              "id": "p40",
              "label": "-",
              "indent": 1,
              "text": "Answer: We should help others whenever we can.",
              "ai": {
                "title": "Sagot sa Moral Lesson",
                "content": "Tanong: Anong aral ang mapupulot natin sa kwento?\nSagot: Dapat tayong tumulong sa ating kapwa sa tuwing may pagkakataon tayo.",
                "prompt": "Explain this Moral Lesson in simple Tagalog and show how it applies the story's theme to real life."
              }
            }
          ]
        }
      ]
    }
  ]
}```

## File: ./frontend/src/data/quiz/cse-quiz-abstract-reasoning.json
```
{
 "subject": "Logical Reasoning",
 "subject_icon": "🧩",
 "topic": "Abstract Reasoning",
 "topic_order": 1,
 "questions": {
  "1": {
   "question": "Which circle (A–D) fits logically into the blank top circle? The diagram is built up starting from the bottom row.",
   "figure": {
    "src": "abstract/q01-fig.jpg",
    "w": 318,
    "h": 358
   },
   "choiceImages": {
    "A": {
     "src": "abstract/q01-choices.jpg",
     "w": 587,
     "h": 112,
     "x0": 0.0,
     "x1": 0.25
    },
    "B": {
     "src": "abstract/q01-choices.jpg",
     "w": 587,
     "h": 112,
     "x0": 0.25,
     "x1": 0.5
    },
    "C": {
     "src": "abstract/q01-choices.jpg",
     "w": 587,
     "h": 112,
     "x0": 0.5,
     "x1": 0.75
    },
    "D": {
     "src": "abstract/q01-choices.jpg",
     "w": 587,
     "h": 112,
     "x0": 0.75,
     "x1": 1.0
    }
   },
   "choices": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "D",
   "reason": "Sagot: D (ayon sa answer key ng reviewer). Tip: Tingnan ang dalawang figure sa ibabang row at alamin kung paano sila pinagsasama (alin ang nananatili, nawawala, o nadadagdag) para mabuo ang nasa itaas. I-apply ang parehong rule sa pyramid na may tanong."
  },
  "2": {
   "question": "Which circle (A–D) fits logically into the blank top circle? The diagram is built up starting from the bottom row.",
   "figure": {
    "src": "abstract/q02-fig.jpg",
    "w": 299,
    "h": 359
   },
   "choiceImages": {
    "A": {
     "src": "abstract/q02-choices.png",
     "w": 781,
     "h": 145,
     "x0": 0.0,
     "x1": 0.25
    },
    "B": {
     "src": "abstract/q02-choices.png",
     "w": 781,
     "h": 145,
     "x0": 0.25,
     "x1": 0.5
    },
    "C": {
     "src": "abstract/q02-choices.png",
     "w": 781,
     "h": 145,
     "x0": 0.5,
     "x1": 0.75
    },
    "D": {
     "src": "abstract/q02-choices.png",
     "w": 781,
     "h": 145,
     "x0": 0.75,
     "x1": 1.0
    }
   },
   "choices": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "B",
   "reason": "Sagot: B (ayon sa answer key ng reviewer). Tip: Tingnan ang dalawang figure sa ibabang row at alamin kung paano sila pinagsasama (alin ang nananatili, nawawala, o nadadagdag) para mabuo ang nasa itaas. I-apply ang parehong rule sa pyramid na may tanong."
  },
  "3": {
   "question": "Which circle (A–D) fits logically into the blank top circle? The diagram is built up starting from the bottom row.",
   "figure": {
    "src": "abstract/q03-fig.jpg",
    "w": 299,
    "h": 356
   },
   "choiceImages": {
    "A": {
     "src": "abstract/q03-choices.jpg",
     "w": 568,
     "h": 104,
     "x0": 0.0,
     "x1": 0.25
    },
    "B": {
     "src": "abstract/q03-choices.jpg",
     "w": 568,
     "h": 104,
     "x0": 0.25,
     "x1": 0.5
    },
    "C": {
     "src": "abstract/q03-choices.jpg",
     "w": 568,
     "h": 104,
     "x0": 0.5,
     "x1": 0.75
    },
    "D": {
     "src": "abstract/q03-choices.jpg",
     "w": 568,
     "h": 104,
     "x0": 0.75,
     "x1": 1.0
    }
   },
   "choices": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "B",
   "reason": "Sagot: B (ayon sa answer key ng reviewer). Tip: Tingnan ang dalawang figure sa ibabang row at alamin kung paano sila pinagsasama (alin ang nananatili, nawawala, o nadadagdag) para mabuo ang nasa itaas. I-apply ang parehong rule sa pyramid na may tanong."
  },
  "4": {
   "question": "Which circle (A–D) fits logically into the blank top circle? The diagram is built up starting from the bottom row.",
   "figure": {
    "src": "abstract/q04-fig.jpg",
    "w": 309,
    "h": 389
   },
   "choiceImages": {
    "A": {
     "src": "abstract/q04-choices.jpg",
     "w": 635,
     "h": 114,
     "x0": 0.0,
     "x1": 0.25
    },
    "B": {
     "src": "abstract/q04-choices.jpg",
     "w": 635,
     "h": 114,
     "x0": 0.25,
     "x1": 0.5
    },
    "C": {
     "src": "abstract/q04-choices.jpg",
     "w": 635,
     "h": 114,
     "x0": 0.5,
     "x1": 0.75
    },
    "D": {
     "src": "abstract/q04-choices.jpg",
     "w": 635,
     "h": 114,
     "x0": 0.75,
     "x1": 1.0
    }
   },
   "choices": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "C",
   "reason": "Sagot: C (ayon sa answer key ng reviewer). Tip: Tingnan ang dalawang figure sa ibabang row at alamin kung paano sila pinagsasama (alin ang nananatili, nawawala, o nadadagdag) para mabuo ang nasa itaas. I-apply ang parehong rule sa pyramid na may tanong."
  },
  "5": {
   "question": "Which circle (A–D) fits logically into the blank top circle? The diagram is built up starting from the bottom row.",
   "figure": {
    "src": "abstract/q05-fig.jpg",
    "w": 318,
    "h": 390
   },
   "choiceImages": {
    "A": {
     "src": "abstract/q05-choices.jpg",
     "w": 631,
     "h": 165,
     "x0": 0.0,
     "x1": 0.25
    },
    "B": {
     "src": "abstract/q05-choices.jpg",
     "w": 631,
     "h": 165,
     "x0": 0.25,
     "x1": 0.5
    },
    "C": {
     "src": "abstract/q05-choices.jpg",
     "w": 631,
     "h": 165,
     "x0": 0.5,
     "x1": 0.75
    },
    "D": {
     "src": "abstract/q05-choices.jpg",
     "w": 631,
     "h": 165,
     "x0": 0.75,
     "x1": 1.0
    }
   },
   "choices": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "D",
   "reason": "Sagot: D (ayon sa answer key ng reviewer). Tip: Tingnan ang dalawang figure sa ibabang row at alamin kung paano sila pinagsasama (alin ang nananatili, nawawala, o nadadagdag) para mabuo ang nasa itaas. I-apply ang parehong rule sa pyramid na may tanong."
  },
  "6": {
   "question": "Study the hexagon pyramid. The lines in each hexagon follow a set rule based on the two hexagons directly below it. Which of A–D replaces the hexagon with the question mark?",
   "figure": {
    "src": "abstract/q06-fig.jpg",
    "w": 324,
    "h": 317
   },
   "choiceImages": {
    "A": {
     "src": "abstract/q06-choices.jpg",
     "w": 844,
     "h": 111,
     "x0": 0.0,
     "x1": 0.25
    },
    "B": {
     "src": "abstract/q06-choices.jpg",
     "w": 844,
     "h": 111,
     "x0": 0.25,
     "x1": 0.5
    },
    "C": {
     "src": "abstract/q06-choices.jpg",
     "w": 844,
     "h": 111,
     "x0": 0.5,
     "x1": 0.75
    },
    "D": {
     "src": "abstract/q06-choices.jpg",
     "w": 844,
     "h": 111,
     "x0": 0.75,
     "x1": 1.0
    }
   },
   "choices": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "A",
   "reason": "Sagot: A (ayon sa answer key ng reviewer). Tip: Tingnan ang dalawang figure sa ibabang row at alamin kung paano sila pinagsasama (alin ang nananatili, nawawala, o nadadagdag) para mabuo ang nasa itaas. I-apply ang parehong rule sa pyramid na may tanong."
  },
  "7": {
   "question": "Which of the squares (A–D) fits in at the square with the question mark?",
   "figure": {
    "src": "abstract/q07-fig.jpg",
    "w": 284,
    "h": 281
   },
   "choiceImages": {
    "A": {
     "src": "abstract/q07-choices.jpg",
     "w": 769,
     "h": 147,
     "x0": 0.0,
     "x1": 0.25
    },
    "B": {
     "src": "abstract/q07-choices.jpg",
     "w": 769,
     "h": 147,
     "x0": 0.25,
     "x1": 0.5
    },
    "C": {
     "src": "abstract/q07-choices.jpg",
     "w": 769,
     "h": 147,
     "x0": 0.5,
     "x1": 0.75
    },
    "D": {
     "src": "abstract/q07-choices.jpg",
     "w": 769,
     "h": 147,
     "x0": 0.75,
     "x1": 1.0
    }
   },
   "choices": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "D",
   "reason": "Sagot: D (ayon sa answer key ng reviewer). Tip: Hanapin ang pattern sa bawat row at column (pagbabago ng hugis, shading, posisyon, o bilang ng linya), tapos piliin ang choice na kumukumpleto sa pattern."
  },
  "8": {
   "question": "Which of the squares (A–D) fits in at the square with the question mark?",
   "figure": {
    "src": "abstract/q08-fig.jpg",
    "w": 271,
    "h": 282
   },
   "choiceImages": {
    "A": {
     "src": "abstract/q08-choices.jpg",
     "w": 854,
     "h": 121,
     "x0": 0.0,
     "x1": 0.25
    },
    "B": {
     "src": "abstract/q08-choices.jpg",
     "w": 854,
     "h": 121,
     "x0": 0.25,
     "x1": 0.5
    },
    "C": {
     "src": "abstract/q08-choices.jpg",
     "w": 854,
     "h": 121,
     "x0": 0.5,
     "x1": 0.75
    },
    "D": {
     "src": "abstract/q08-choices.jpg",
     "w": 854,
     "h": 121,
     "x0": 0.75,
     "x1": 1.0
    }
   },
   "choices": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "D",
   "reason": "Sagot: D (ayon sa answer key ng reviewer). Tip: Hanapin ang pattern sa bawat row at column (pagbabago ng hugis, shading, posisyon, o bilang ng linya), tapos piliin ang choice na kumukumpleto sa pattern."
  },
  "9": {
   "question": "Which of the squares (A–D) fits in at the square with the question mark?",
   "figure": {
    "src": "abstract/q09-fig.jpg",
    "w": 275,
    "h": 283
   },
   "choiceImages": {
    "A": {
     "src": "abstract/q09-choices.jpg",
     "w": 585,
     "h": 83,
     "x0": 0.0,
     "x1": 0.25
    },
    "B": {
     "src": "abstract/q09-choices.jpg",
     "w": 585,
     "h": 83,
     "x0": 0.25,
     "x1": 0.5
    },
    "C": {
     "src": "abstract/q09-choices.jpg",
     "w": 585,
     "h": 83,
     "x0": 0.5,
     "x1": 0.75
    },
    "D": {
     "src": "abstract/q09-choices.jpg",
     "w": 585,
     "h": 83,
     "x0": 0.75,
     "x1": 1.0
    }
   },
   "choices": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "C",
   "reason": "Sagot: C (ayon sa answer key ng reviewer). Tip: Hanapin ang pattern sa bawat row at column (pagbabago ng hugis, shading, posisyon, o bilang ng linya), tapos piliin ang choice na kumukumpleto sa pattern."
  },
  "10": {
   "question": "Which of the squares (A–D) fits in at the square with the question mark?",
   "figure": {
    "src": "abstract/q10-fig.jpg",
    "w": 268,
    "h": 277
   },
   "choiceImages": {
    "A": {
     "src": "abstract/q10-choices.jpg",
     "w": 605,
     "h": 148,
     "x0": 0.0,
     "x1": 0.25
    },
    "B": {
     "src": "abstract/q10-choices.jpg",
     "w": 605,
     "h": 148,
     "x0": 0.25,
     "x1": 0.5
    },
    "C": {
     "src": "abstract/q10-choices.jpg",
     "w": 605,
     "h": 148,
     "x0": 0.5,
     "x1": 0.75
    },
    "D": {
     "src": "abstract/q10-choices.jpg",
     "w": 605,
     "h": 148,
     "x0": 0.75,
     "x1": 1.0
    }
   },
   "choices": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "B",
   "reason": "Sagot: B (ayon sa answer key ng reviewer). Tip: Hanapin ang pattern sa bawat row at column (pagbabago ng hugis, shading, posisyon, o bilang ng linya), tapos piliin ang choice na kumukumpleto sa pattern."
  },
  "11": {
   "question": "Which of the squares (A–D) fits in at the square with the question mark?",
   "figure": {
    "src": "abstract/q11-fig.jpg",
    "w": 291,
    "h": 300
   },
   "choiceImages": {
    "A": {
     "src": "abstract/q11-choices.jpg",
     "w": 828,
     "h": 165,
     "x0": 0.0,
     "x1": 0.25
    },
    "B": {
     "src": "abstract/q11-choices.jpg",
     "w": 828,
     "h": 165,
     "x0": 0.25,
     "x1": 0.5
    },
    "C": {
     "src": "abstract/q11-choices.jpg",
     "w": 828,
     "h": 165,
     "x0": 0.5,
     "x1": 0.75
    },
    "D": {
     "src": "abstract/q11-choices.jpg",
     "w": 828,
     "h": 165,
     "x0": 0.75,
     "x1": 1.0
    }
   },
   "choices": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "C",
   "reason": "Sagot: C (ayon sa answer key ng reviewer). Tip: Hanapin ang pattern sa bawat row at column (pagbabago ng hugis, shading, posisyon, o bilang ng linya), tapos piliin ang choice na kumukumpleto sa pattern."
  },
  "12": {
   "question": "Which of the squares (A–D) fits in at the square with the question mark?",
   "figure": {
    "src": "abstract/q12-fig.jpg",
    "w": 289,
    "h": 300
   },
   "choiceImages": {
    "A": {
     "src": "abstract/q12-choices.jpg",
     "w": 823,
     "h": 133,
     "x0": 0.0,
     "x1": 0.25
    },
    "B": {
     "src": "abstract/q12-choices.jpg",
     "w": 823,
     "h": 133,
     "x0": 0.25,
     "x1": 0.5
    },
    "C": {
     "src": "abstract/q12-choices.jpg",
     "w": 823,
     "h": 133,
     "x0": 0.5,
     "x1": 0.75
    },
    "D": {
     "src": "abstract/q12-choices.jpg",
     "w": 823,
     "h": 133,
     "x0": 0.75,
     "x1": 1.0
    }
   },
   "choices": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "B",
   "reason": "Sagot: B (ayon sa answer key ng reviewer). Tip: Hanapin ang pattern sa bawat row at column (pagbabago ng hugis, shading, posisyon, o bilang ng linya), tapos piliin ang choice na kumukumpleto sa pattern."
  },
  "13": {
   "question": "Which of the squares (A–D) fits in at the square with the question mark?",
   "figure": {
    "src": "abstract/q13-fig.jpg",
    "w": 296,
    "h": 289
   },
   "choiceImages": {
    "A": {
     "src": "abstract/q13-choices.jpg",
     "w": 581,
     "h": 105,
     "x0": 0.0,
     "x1": 0.25
    },
    "B": {
     "src": "abstract/q13-choices.jpg",
     "w": 581,
     "h": 105,
     "x0": 0.25,
     "x1": 0.5
    },
    "C": {
     "src": "abstract/q13-choices.jpg",
     "w": 581,
     "h": 105,
     "x0": 0.5,
     "x1": 0.75
    },
    "D": {
     "src": "abstract/q13-choices.jpg",
     "w": 581,
     "h": 105,
     "x0": 0.75,
     "x1": 1.0
    }
   },
   "choices": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "A",
   "reason": "Sagot: A (ayon sa answer key ng reviewer). Tip: Hanapin ang pattern sa bawat row at column (pagbabago ng hugis, shading, posisyon, o bilang ng linya), tapos piliin ang choice na kumukumpleto sa pattern."
  },
  "14": {
   "question": "Which of the squares (A–D) fits in at the square with the question mark?",
   "figure": {
    "src": "abstract/q14-fig.jpg",
    "w": 275,
    "h": 289
   },
   "choiceImages": {
    "A": {
     "src": "abstract/q14-choices.jpg",
     "w": 811,
     "h": 113,
     "x0": 0.0,
     "x1": 0.25
    },
    "B": {
     "src": "abstract/q14-choices.jpg",
     "w": 811,
     "h": 113,
     "x0": 0.25,
     "x1": 0.5
    },
    "C": {
     "src": "abstract/q14-choices.jpg",
     "w": 811,
     "h": 113,
     "x0": 0.5,
     "x1": 0.75
    },
    "D": {
     "src": "abstract/q14-choices.jpg",
     "w": 811,
     "h": 113,
     "x0": 0.75,
     "x1": 1.0
    }
   },
   "choices": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "D",
   "reason": "Sagot: D (ayon sa answer key ng reviewer). Tip: Hanapin ang pattern sa bawat row at column (pagbabago ng hugis, shading, posisyon, o bilang ng linya), tapos piliin ang choice na kumukumpleto sa pattern."
  },
  "15": {
   "question": "Which of the squares (A–D) fits in at the square with the question mark?",
   "figure": {
    "src": "abstract/q15-fig.jpg",
    "w": 290,
    "h": 299
   },
   "choiceImages": {
    "A": {
     "src": "abstract/q15-choices.jpg",
     "w": 808,
     "h": 109,
     "x0": 0.0,
     "x1": 0.25
    },
    "B": {
     "src": "abstract/q15-choices.jpg",
     "w": 808,
     "h": 109,
     "x0": 0.25,
     "x1": 0.5
    },
    "C": {
     "src": "abstract/q15-choices.jpg",
     "w": 808,
     "h": 109,
     "x0": 0.5,
     "x1": 0.75
    },
    "D": {
     "src": "abstract/q15-choices.jpg",
     "w": 808,
     "h": 109,
     "x0": 0.75,
     "x1": 1.0
    }
   },
   "choices": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "D",
   "reason": "Sagot: D (ayon sa answer key ng reviewer). Tip: Hanapin ang pattern sa bawat row at column (pagbabago ng hugis, shading, posisyon, o bilang ng linya), tapos piliin ang choice na kumukumpleto sa pattern."
  },
  "16": {
   "question": "Which of the squares (A–D) fits in at the square with the question mark?",
   "figure": {
    "src": "abstract/q16-fig.jpg",
    "w": 289,
    "h": 295
   },
   "choiceImages": {
    "A": {
     "src": "abstract/q16-choices.jpg",
     "w": 815,
     "h": 152,
     "x0": 0.0,
     "x1": 0.25
    },
    "B": {
     "src": "abstract/q16-choices.jpg",
     "w": 815,
     "h": 152,
     "x0": 0.25,
     "x1": 0.5
    },
    "C": {
     "src": "abstract/q16-choices.jpg",
     "w": 815,
     "h": 152,
     "x0": 0.5,
     "x1": 0.75
    },
    "D": {
     "src": "abstract/q16-choices.jpg",
     "w": 815,
     "h": 152,
     "x0": 0.75,
     "x1": 1.0
    }
   },
   "choices": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "B",
   "reason": "Sagot: B (ayon sa answer key ng reviewer). Tip: Hanapin ang pattern sa bawat row at column (pagbabago ng hugis, shading, posisyon, o bilang ng linya), tapos piliin ang choice na kumukumpleto sa pattern."
  },
  "17": {
   "question": "Which of the squares (A–D) fits in at the square with the question mark?",
   "figure": {
    "src": "abstract/q17-fig.jpg",
    "w": 288,
    "h": 295
   },
   "choiceImages": {
    "A": {
     "src": "abstract/q17-choices.jpg",
     "w": 780,
     "h": 118,
     "x0": 0.0,
     "x1": 0.25
    },
    "B": {
     "src": "abstract/q17-choices.jpg",
     "w": 780,
     "h": 118,
     "x0": 0.25,
     "x1": 0.5
    },
    "C": {
     "src": "abstract/q17-choices.jpg",
     "w": 780,
     "h": 118,
     "x0": 0.5,
     "x1": 0.75
    },
    "D": {
     "src": "abstract/q17-choices.jpg",
     "w": 780,
     "h": 118,
     "x0": 0.75,
     "x1": 1.0
    }
   },
   "choices": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "B",
   "reason": "Sagot: B (ayon sa answer key ng reviewer). Tip: Hanapin ang pattern sa bawat row at column (pagbabago ng hugis, shading, posisyon, o bilang ng linya), tapos piliin ang choice na kumukumpleto sa pattern."
  },
  "18": {
   "question": "Select the missing piece (A–D) so that the whole square will contain an even, symmetrical pattern.",
   "figure": {
    "src": "abstract/q18-fig.jpg",
    "w": 291,
    "h": 291
   },
   "choiceImages": {
    "A": {
     "src": "abstract/q18-a.jpg",
     "w": 137,
     "h": 132
    },
    "B": {
     "src": "abstract/q18-b.jpg",
     "w": 147,
     "h": 137
    },
    "C": {
     "src": "abstract/q18-c.jpg",
     "w": 140,
     "h": 135
    },
    "D": {
     "src": "abstract/q18-d.jpg",
     "w": 138,
     "h": 139
    }
   },
   "choices": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "B",
   "reason": "Sagot: B (ayon sa answer key ng reviewer). Tip: Isipin ang buong parisukat at hanapin ang axis of symmetry. Piliin ang piraso na gagawa sa buong pattern na pantay at simetriko."
  },
  "19": {
   "question": "Select the figure (A–D) from the choices at the right which contains the figure on the left.",
   "figure": {
    "src": "abstract/q19.jpg",
    "w": 1155,
    "h": 204,
    "x0": 0,
    "x1": 0.1329
   },
   "choiceImages": {
    "A": {
     "src": "abstract/q19.jpg",
     "w": 1155,
     "h": 204,
     "x0": 0.1329,
     "x1": 0.3762
    },
    "B": {
     "src": "abstract/q19.jpg",
     "w": 1155,
     "h": 204,
     "x0": 0.3762,
     "x1": 0.5905
    },
    "C": {
     "src": "abstract/q19.jpg",
     "w": 1155,
     "h": 204,
     "x0": 0.5905,
     "x1": 0.8043
    },
    "D": {
     "src": "abstract/q19.jpg",
     "w": 1155,
     "h": 204,
     "x0": 0.8043,
     "x1": 1.0
    }
   },
   "choices": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "B",
   "reason": "Sagot: B (ayon sa answer key ng reviewer). Tip: Hanapin ang figure sa kaliwa sa loob ng bawat choice. Ang tamang sagot ay yung may eksaktong hugis at sukat nito, hindi lang kahawig."
  },
  "20": {
   "question": "Select the figure (A–D) from the choices at the right which contains the figure on the left.",
   "figure": {
    "src": "abstract/q20.jpg",
    "w": 1178,
    "h": 201,
    "x0": 0,
    "x1": 0.1783
   },
   "choiceImages": {
    "A": {
     "src": "abstract/q20.jpg",
     "w": 1178,
     "h": 201,
     "x0": 0.1783,
     "x1": 0.3973
    },
    "B": {
     "src": "abstract/q20.jpg",
     "w": 1178,
     "h": 201,
     "x0": 0.3973,
     "x1": 0.6044
    },
    "C": {
     "src": "abstract/q20.jpg",
     "w": 1178,
     "h": 201,
     "x0": 0.6044,
     "x1": 0.812
    },
    "D": {
     "src": "abstract/q20.jpg",
     "w": 1178,
     "h": 201,
     "x0": 0.812,
     "x1": 1.0
    }
   },
   "choices": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "D",
   "reason": "Sagot: D (ayon sa answer key ng reviewer). Tip: Hanapin ang figure sa kaliwa sa loob ng bawat choice. Ang tamang sagot ay yung may eksaktong hugis at sukat nito, hindi lang kahawig."
  },
  "21": {
   "question": "Select the figure (A–D) from the choices at the right which contains the figure on the left.",
   "figure": {
    "src": "abstract/q21.jpg",
    "w": 1116,
    "h": 198,
    "x0": 0,
    "x1": 0.1595
   },
   "choiceImages": {
    "A": {
     "src": "abstract/q21.jpg",
     "w": 1116,
     "h": 198,
     "x0": 0.1595,
     "x1": 0.3692
    },
    "B": {
     "src": "abstract/q21.jpg",
     "w": 1116,
     "h": 198,
     "x0": 0.3692,
     "x1": 0.5874
    },
    "C": {
     "src": "abstract/q21.jpg",
     "w": 1116,
     "h": 198,
     "x0": 0.5874,
     "x1": 0.8065
    },
    "D": {
     "src": "abstract/q21.jpg",
     "w": 1116,
     "h": 198,
     "x0": 0.8065,
     "x1": 1.0
    }
   },
   "choices": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "B",
   "reason": "Sagot: B (ayon sa answer key ng reviewer). Tip: Hanapin ang figure sa kaliwa sa loob ng bawat choice. Ang tamang sagot ay yung may eksaktong hugis at sukat nito, hindi lang kahawig."
  },
  "22": {
   "question": "Select the figure (A–D) from the choices at the right which contains the figure on the left.",
   "figure": {
    "src": "abstract/q22.jpg",
    "w": 1163,
    "h": 207,
    "x0": 0,
    "x1": 0.1389
   },
   "choiceImages": {
    "A": {
     "src": "abstract/q22.jpg",
     "w": 1163,
     "h": 207,
     "x0": 0.1389,
     "x1": 0.3917
    },
    "B": {
     "src": "abstract/q22.jpg",
     "w": 1163,
     "h": 207,
     "x0": 0.3917,
     "x1": 0.6002
    },
    "C": {
     "src": "abstract/q22.jpg",
     "w": 1163,
     "h": 207,
     "x0": 0.6002,
     "x1": 0.8117
    },
    "D": {
     "src": "abstract/q22.jpg",
     "w": 1163,
     "h": 207,
     "x0": 0.8117,
     "x1": 1.0
    }
   },
   "choices": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "D",
   "reason": "Sagot: D (ayon sa answer key ng reviewer). Tip: Hanapin ang figure sa kaliwa sa loob ng bawat choice. Ang tamang sagot ay yung may eksaktong hugis at sukat nito, hindi lang kahawig."
  },
  "23": {
   "question": "Select the figure (A–D) from the choices at the right which contains the figure on the left.",
   "figure": {
    "src": "abstract/q23.jpg",
    "w": 1182,
    "h": 214,
    "x0": 0,
    "x1": 0.1455
   },
   "choiceImages": {
    "A": {
     "src": "abstract/q23.jpg",
     "w": 1182,
     "h": 214,
     "x0": 0.1455,
     "x1": 0.4023
    },
    "B": {
     "src": "abstract/q23.jpg",
     "w": 1182,
     "h": 214,
     "x0": 0.4023,
     "x1": 0.6062
    },
    "C": {
     "src": "abstract/q23.jpg",
     "w": 1182,
     "h": 214,
     "x0": 0.6062,
     "x1": 0.808
    },
    "D": {
     "src": "abstract/q23.jpg",
     "w": 1182,
     "h": 214,
     "x0": 0.808,
     "x1": 1.0
    }
   },
   "choices": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "D",
   "reason": "Sagot: D (ayon sa answer key ng reviewer). Tip: Hanapin ang figure sa kaliwa sa loob ng bawat choice. Ang tamang sagot ay yung may eksaktong hugis at sukat nito, hindi lang kahawig."
  },
  "24": {
   "question": "Select the figure (A–D) from the choices at the right which contains the figure on the left.",
   "figure": {
    "src": "abstract/q24.jpg",
    "w": 1162,
    "h": 211,
    "x0": 0,
    "x1": 0.173
   },
   "choiceImages": {
    "A": {
     "src": "abstract/q24.jpg",
     "w": 1162,
     "h": 211,
     "x0": 0.173,
     "x1": 0.3916
    },
    "B": {
     "src": "abstract/q24.jpg",
     "w": 1162,
     "h": 211,
     "x0": 0.3916,
     "x1": 0.6015
    },
    "C": {
     "src": "abstract/q24.jpg",
     "w": 1162,
     "h": 211,
     "x0": 0.6015,
     "x1": 0.8111
    },
    "D": {
     "src": "abstract/q24.jpg",
     "w": 1162,
     "h": 211,
     "x0": 0.8111,
     "x1": 1.0
    }
   },
   "choices": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "A",
   "reason": "Sagot: A (ayon sa answer key ng reviewer). Tip: Hanapin ang figure sa kaliwa sa loob ng bawat choice. Ang tamang sagot ay yung may eksaktong hugis at sukat nito, hindi lang kahawig."
  },
  "25": {
   "question": "Select the figure (A–D) from the choices at the right which contains the figure on the left.",
   "figure": {
    "src": "abstract/q25.jpg",
    "w": 1173,
    "h": 213,
    "x0": 0,
    "x1": 0.1505
   },
   "choiceImages": {
    "A": {
     "src": "abstract/q25.jpg",
     "w": 1173,
     "h": 213,
     "x0": 0.1505,
     "x1": 0.3964
    },
    "B": {
     "src": "abstract/q25.jpg",
     "w": 1173,
     "h": 213,
     "x0": 0.3964,
     "x1": 0.6044
    },
    "C": {
     "src": "abstract/q25.jpg",
     "w": 1173,
     "h": 213,
     "x0": 0.6044,
     "x1": 0.8133
    },
    "D": {
     "src": "abstract/q25.jpg",
     "w": 1173,
     "h": 213,
     "x0": 0.8133,
     "x1": 1.0
    }
   },
   "choices": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "B",
   "reason": "Sagot: B (ayon sa answer key ng reviewer). Tip: Hanapin ang figure sa kaliwa sa loob ng bawat choice. Ang tamang sagot ay yung may eksaktong hugis at sukat nito, hindi lang kahawig."
  },
  "26": {
   "question": "Select the figure (A–D) from the choices at the right which contains the figure on the left.",
   "figure": {
    "src": "abstract/q26.jpg",
    "w": 1171,
    "h": 212,
    "x0": 0,
    "x1": 0.205
   },
   "choiceImages": {
    "A": {
     "src": "abstract/q26.jpg",
     "w": 1171,
     "h": 212,
     "x0": 0.205,
     "x1": 0.4325
    },
    "B": {
     "src": "abstract/q26.jpg",
     "w": 1171,
     "h": 212,
     "x0": 0.4325,
     "x1": 0.6281
    },
    "C": {
     "src": "abstract/q26.jpg",
     "w": 1171,
     "h": 212,
     "x0": 0.6281,
     "x1": 0.8224
    },
    "D": {
     "src": "abstract/q26.jpg",
     "w": 1171,
     "h": 212,
     "x0": 0.8224,
     "x1": 1.0
    }
   },
   "choices": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "C",
   "reason": "Sagot: C (ayon sa answer key ng reviewer). Tip: Hanapin ang figure sa kaliwa sa loob ng bawat choice. Ang tamang sagot ay yung may eksaktong hugis at sukat nito, hindi lang kahawig."
  },
  "27": {
   "question": "Select the figure (A–D) from the choices at the right which contains the figure on the left.",
   "figure": {
    "src": "abstract/q27.jpg",
    "w": 1164,
    "h": 198,
    "x0": 0,
    "x1": 0.1508
   },
   "choiceImages": {
    "A": {
     "src": "abstract/q27.jpg",
     "w": 1164,
     "h": 198,
     "x0": 0.1508,
     "x1": 0.393
    },
    "B": {
     "src": "abstract/q27.jpg",
     "w": 1164,
     "h": 198,
     "x0": 0.393,
     "x1": 0.6044
    },
    "C": {
     "src": "abstract/q27.jpg",
     "w": 1164,
     "h": 198,
     "x0": 0.6044,
     "x1": 0.8153
    },
    "D": {
     "src": "abstract/q27.jpg",
     "w": 1164,
     "h": 198,
     "x0": 0.8153,
     "x1": 1.0
    }
   },
   "choices": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "C",
   "reason": "Sagot: C (ayon sa answer key ng reviewer). Tip: Hanapin ang figure sa kaliwa sa loob ng bawat choice. Ang tamang sagot ay yung may eksaktong hugis at sukat nito, hindi lang kahawig."
  },
  "28": {
   "question": "Select the figure (A–D) from the choices at the right which contains the figure on the left.",
   "figure": {
    "src": "abstract/q28.jpg",
    "w": 1141,
    "h": 185,
    "x0": 0,
    "x1": 0.149
   },
   "choiceImages": {
    "A": {
     "src": "abstract/q28.jpg",
     "w": 1141,
     "h": 185,
     "x0": 0.149,
     "x1": 0.3966
    },
    "B": {
     "src": "abstract/q28.jpg",
     "w": 1141,
     "h": 185,
     "x0": 0.3966,
     "x1": 0.6109
    },
    "C": {
     "src": "abstract/q28.jpg",
     "w": 1141,
     "h": 185,
     "x0": 0.6109,
     "x1": 0.8247
    },
    "D": {
     "src": "abstract/q28.jpg",
     "w": 1141,
     "h": 185,
     "x0": 0.8247,
     "x1": 1.0
    }
   },
   "choices": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "C",
   "reason": "Sagot: C (ayon sa answer key ng reviewer). Tip: Hanapin ang figure sa kaliwa sa loob ng bawat choice. Ang tamang sagot ay yung may eksaktong hugis at sukat nito, hindi lang kahawig."
  },
  "29": {
   "question": "Select the figure (A–D) from the choices at the right which contains the figure on the left.",
   "figure": {
    "src": "abstract/q29.jpg",
    "w": 1150,
    "h": 187,
    "x0": 0,
    "x1": 0.1439
   },
   "choiceImages": {
    "A": {
     "src": "abstract/q29.jpg",
     "w": 1150,
     "h": 187,
     "x0": 0.1439,
     "x1": 0.4022
    },
    "B": {
     "src": "abstract/q29.jpg",
     "w": 1150,
     "h": 187,
     "x0": 0.4022,
     "x1": 0.6148
    },
    "C": {
     "src": "abstract/q29.jpg",
     "w": 1150,
     "h": 187,
     "x0": 0.6148,
     "x1": 0.8274
    },
    "D": {
     "src": "abstract/q29.jpg",
     "w": 1150,
     "h": 187,
     "x0": 0.8274,
     "x1": 1.0
    }
   },
   "choices": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "B",
   "reason": "Sagot: B (ayon sa answer key ng reviewer). Tip: Hanapin ang figure sa kaliwa sa loob ng bawat choice. Ang tamang sagot ay yung may eksaktong hugis at sukat nito, hindi lang kahawig."
  },
  "30": {
   "question": "Select the figure (A–D) from the choices at the right which contains the figure on the left.",
   "figure": {
    "src": "abstract/q30.jpg",
    "w": 1168,
    "h": 226,
    "x0": 0,
    "x1": 0.1789
   },
   "choiceImages": {
    "A": {
     "src": "abstract/q30.jpg",
     "w": 1168,
     "h": 226,
     "x0": 0.1789,
     "x1": 0.4174
    },
    "B": {
     "src": "abstract/q30.jpg",
     "w": 1168,
     "h": 226,
     "x0": 0.4174,
     "x1": 0.6134
    },
    "C": {
     "src": "abstract/q30.jpg",
     "w": 1168,
     "h": 226,
     "x0": 0.6134,
     "x1": 0.8095
    },
    "D": {
     "src": "abstract/q30.jpg",
     "w": 1168,
     "h": 226,
     "x0": 0.8095,
     "x1": 1.0
    }
   },
   "choices": {
    "A": "A",
    "B": "B",
    "C": "C",
    "D": "D"
   },
   "correct": "D",
   "reason": "Sagot: D (ayon sa answer key ng reviewer). Tip: Hanapin ang figure sa kaliwa sa loob ng bawat choice. Ang tamang sagot ay yung may eksaktong hugis at sukat nito, hindi lang kahawig."
  }
 }
}```

## File: ./frontend/src/data/quiz/cse-quiz-imported-2026-11-13 (2).json
```
{
  "format": "cse-quiz",
  "version": 1,
  "exportedAt": "2026-11-13T22:14:56.124Z",
  "topics": [
    {
      "subject": "Numerical Ability",
      "subject_icon": "🔢",
      "topic": "Fractions",
      "topic_order": 1,
      "questions": {
        "1": {
          "question": "What is 3/4 + 2/5?",
          "choices": {
            "A": "5/9",
            "B": "23/20",
            "C": "6/20",
            "D": "15/8"
          },
          "correct": "B",
          "reason": "Hanapin ang LCD ng 4 at 5, which is 20. 15/20 + 8/20 = 23/20."
        },
        "2": {
          "question": "Subtract: 7/8 − 1/3",
          "choices": {
            "A": "6/5",
            "B": "13/24",
            "C": "7/24",
            "D": "17/24"
          },
          "correct": "B",
          "reason": "LCD ng 8 at 3 ay 24. 21/24 − 8/24 = 13/24."
        },
        "3": {
          "question": "Multiply: 4/9 × 3/8",
          "choices": {
            "A": "1/6",
            "B": "12/72",
            "C": "7/17",
            "D": "1/3"
          },
          "correct": "A",
          "reason": "Cancel common factors: 4 at 8 magiging 1 at 2; 3 at 9 magiging 1 at 3. Multiply: (1×1)/(3×2) = 1/6."
        },
        "4": {
          "question": "Divide: 5/6 ÷ 2/3",
          "choices": {
            "A": "10/18",
            "B": "5/4",
            "C": "4/5",
            "D": "7/9"
          },
          "correct": "B",
          "reason": "Keep, Change, Flip: 5/6 × 3/2 = 15/12, simplify by dividing by 3 = 5/4."
        },
        "5": {
          "question": "Simplify 48/64 to lowest terms.",
          "choices": {
            "A": "2/3",
            "B": "3/4",
            "C": "4/5",
            "D": "6/8"
          },
          "correct": "B",
          "reason": "I-divide pareho sa GCF na 16: 48÷16=3, at 64÷16=4."
        },
        "6": {
          "question": "Convert 3 4/7 into an improper fraction.",
          "choices": {
            "A": "19/7",
            "B": "25/7",
            "C": "12/7",
            "D": "21/7"
          },
          "correct": "B",
          "reason": "Multiply denominator sa whole number tapos add numerator: (7×3)+4=25, kopyahin ang denominator na 7."
        },
        "7": {
          "question": "Convert 37/5 into a mixed number.",
          "choices": {
            "A": "7 2/5",
            "B": "6 7/5",
            "C": "7 1/5",
            "D": "8 2/5"
          },
          "correct": "A",
          "reason": "37 ÷ 5 = 7 remainder 2. Kaya 7 2/5."
        },
        "8": {
          "question": "Add: 2 1/3 + 1 3/4",
          "choices": {
            "A": "3 4/7",
            "B": "4 1/12",
            "C": "3 11/12",
            "D": "4 5/12"
          },
          "correct": "B",
          "reason": "Add whole numbers: 2+1=3. Add fractions (LCD 12): 4/12+9/12=13/12=1 1/12. Total: 3+1 1/12=4 1/12."
        },
        "9": {
          "question": "Subtract: 5 − 2 3/8",
          "choices": {
            "A": "3 3/8",
            "B": "2 5/8",
            "C": "3 5/8",
            "D": "2 3/8"
          },
          "correct": "B",
          "reason": "Gawing 4 8/8 ang 5. Subtract: 4−2=2, at 8/8−3/8=5/8."
        },
        "10": {
          "question": "Which fraction is the largest?",
          "choices": {
            "A": "2/3",
            "B": "5/8",
            "C": "7/12",
            "D": "3/4"
          },
          "correct": "D",
          "reason": "Gawing LCD 24 lahat: 16/24, 15/24, 14/24, 18/24. Pinakamalaki ang 18/24 (3/4)."
        },
        "11": {
          "question": "What is 3/5 of 120?",
          "choices": {
            "A": "60",
            "B": "72",
            "C": "80",
            "D": "90"
          },
          "correct": "B",
          "reason": "3/5 × 120 = 3 × 24 = 72."
        },
        "12": {
          "question": "Multiply: 1 1/2 × 2 2/3",
          "choices": {
            "A": "2 2/6",
            "B": "4",
            "C": "3 1/3",
            "D": "4 1/2"
          },
          "correct": "B",
          "reason": "Convert sa improper: 3/2 × 8/3 = 24/6 = 4."
        },
        "13": {
          "question": "Divide: 4 1/2 ÷ 1 1/2",
          "choices": {
            "A": "2",
            "B": "3",
            "C": "3 1/2",
            "D": "6"
          },
          "correct": "B",
          "reason": "Improper fractions: 9/2 ÷ 3/2 = 9/2 × 2/3 = 9/3 = 3."
        },
        "14": {
          "question": "What is the reciprocal of 2 3/5?",
          "choices": {
            "A": "5/13",
            "B": "13/5",
            "C": "2 5/3",
            "D": "5/6"
          },
          "correct": "A",
          "reason": "Gawing improper muna: 2 3/5 = 13/5, tapos baliktarin = 5/13."
        },
        "15": {
          "question": "Convert 0.375 into a fraction in lowest terms.",
          "choices": {
            "A": "3/8",
            "B": "3/4",
            "C": "5/8",
            "D": "37/100"
          },
          "correct": "A",
          "reason": "375/1000, i-divide pareho sa 125 = 3/8."
        },
        "16": {
          "question": "Convert 7/20 into a decimal.",
          "choices": {
            "A": "0.035",
            "B": "0.35",
            "C": "0.72",
            "D": "3.5"
          },
          "correct": "B",
          "reason": "Multiply numerator at denominator sa 5 para maging hundredths: 35/100 = 0.35."
        },
        "17": {
          "question": "Evaluate: 1/2 + 1/3 + 1/6",
          "choices": {
            "A": "3/11",
            "B": "1",
            "C": "5/6",
            "D": "2/3"
          },
          "correct": "B",
          "reason": "LCD ay 6: 3/6+2/6+1/6 = 6/6 = 1."
        },
        "18": {
          "question": "Subtract: 4 1/6 − 1 5/6",
          "choices": {
            "A": "3 4/6",
            "B": "2 1/3",
            "C": "2 2/3",
            "D": "3 1/3"
          },
          "correct": "B",
          "reason": "Manghiram sa 4: 3 7/6 − 1 5/6 = 2 2/6, simplify = 2 1/3."
        },
        "19": {
          "question": "What is half of 3/7?",
          "choices": {
            "A": "3/14",
            "B": "6/7",
            "C": "1.5/3.5",
            "D": "3/3.5"
          },
          "correct": "A",
          "reason": "1/2 × 3/7 = 3/14."
        },
        "20": {
          "question": "If 2/3 of a number is 24, what is the number?",
          "choices": {
            "A": "16",
            "B": "36",
            "C": "48",
            "D": "72"
          },
          "correct": "B",
          "reason": "2/3 x = 24 → x = 24 × 3/2 = 36."
        },
        "21": {
          "question": "Simplify: (2/3) / (4/9)",
          "choices": {
            "A": "8/27",
            "B": "3/2",
            "C": "2/3",
            "D": "6/12"
          },
          "correct": "B",
          "reason": "2/3 ÷ 4/9 = 2/3 × 9/4 = 18/12 = 3/2."
        },
        "22": {
          "question": "Arrange from smallest to largest: 1/2, 2/5, 3/4",
          "choices": {
            "A": "1/2, 2/5, 3/4",
            "B": "2/5, 1/2, 3/4",
            "C": "3/4, 1/2, 2/5",
            "D": "2/5, 3/4, 1/2"
          },
          "correct": "B",
          "reason": "Decimals: 0.40, 0.50, 0.75. Kaya 2/5 ang pinakamaliit at 3/4 ang pinakamalaki."
        },
        "23": {
          "question": "A pizza is cut into 12 slices. If Maria ate 1/4 of it and John ate 1/3 of it, how many slices are left?",
          "choices": {
            "A": "5",
            "B": "6",
            "C": "7",
            "D": "4"
          },
          "correct": "A",
          "reason": "Maria: 1/4 × 12 = 3. John: 1/3 × 12 = 4. Total eaten = 7. Left: 12 − 7 = 5."
        },
        "24": {
          "question": "What fraction of an hour is 45 minutes?",
          "choices": {
            "A": "2/3",
            "B": "3/4",
            "C": "4/5",
            "D": "5/6"
          },
          "correct": "B",
          "reason": "May 60 minutes sa 1 hour: 45/60, divide both by 15 = 3/4."
        },
        "25": {
          "question": "Evaluate: (2/3)²",
          "choices": {
            "A": "4/3",
            "B": "2/9",
            "C": "4/9",
            "D": "6/9"
          },
          "correct": "C",
          "reason": "I-square pareho ang numerator at denominator: 2²/3² = 4/9."
        },
        "26": {
          "question": "Which fraction is equivalent to 5/7?",
          "choices": {
            "A": "15/28",
            "B": "25/35",
            "C": "10/21",
            "D": "20/30"
          },
          "correct": "B",
          "reason": "Multiply numerator at denominator sa 5: (5×5)/(7×5) = 25/35."
        },
        "27": {
          "question": "Solve for x: x/15 = 4/5",
          "choices": {
            "A": "10",
            "B": "12",
            "C": "8",
            "D": "14"
          },
          "correct": "B",
          "reason": "Cross-multiply: 5x = 60 → x = 12."
        },
        "28": {
          "question": "Find the average of 1/2 and 3/4.",
          "choices": {
            "A": "5/4",
            "B": "5/8",
            "C": "2/3",
            "D": "4/6"
          },
          "correct": "B",
          "reason": "Add muna: 2/4+3/4=5/4, tapos divide by 2 (×1/2) = 5/8."
        },
        "29": {
          "question": "A tank is 3/5 full. After adding 20 liters, it becomes 4/5 full. What is the full capacity of the tank?",
          "choices": {
            "A": "80 liters",
            "B": "100 liters",
            "C": "120 liters",
            "D": "60 liters"
          },
          "correct": "B",
          "reason": "Ang nadagdag na 4/5 − 3/5 = 1/5 ay katumbas ng 20 liters. Kaya ang buong tank (5/5) ay 20×5 = 100 liters."
        },
        "30": {
          "question": "Evaluate: 3 ÷ 1/4 + 2",
          "choices": {
            "A": "14",
            "B": "2 3/4",
            "C": "10",
            "D": "8"
          },
          "correct": "A",
          "reason": "Unahin ang division (PEMDAS): 3×4=12, tapos +2 = 14."
        }
      }
    },
    {
      "subject": "Numerical Ability",
      "subject_icon": "🔢",
      "topic": "Percentages",
      "topic_order": 2,
      "questions": {
        "1": {
          "question": "What is 25% of 360?",
          "choices": {
            "A": "72",
            "B": "80",
            "C": "90",
            "D": "120"
          },
          "correct": "C",
          "reason": "Ang 25% ay 1/4. Kaya 360 ÷ 4 = 90."
        },
        "2": {
          "question": "45 is what percent of 150?",
          "choices": {
            "A": "25%",
            "B": "30%",
            "C": "35%",
            "D": "40%"
          },
          "correct": "B",
          "reason": "45/150 = 3/10 = 0.30 = 30%."
        },
        "3": {
          "question": "18 is 15% of what number?",
          "choices": {
            "A": "100",
            "B": "120",
            "C": "150",
            "D": "270"
          },
          "correct": "B",
          "reason": "18 ÷ 0.15 = 120."
        },
        "4": {
          "question": "Convert 0.085 to a percentage.",
          "choices": {
            "A": "85%",
            "B": "8.5%",
            "C": "0.85%",
            "D": "850%"
          },
          "correct": "B",
          "reason": "I-move ang decimal point ng dalawang beses pakanan (multiply by 100) = 8.5%."
        },
        "5": {
          "question": "Convert 5/8 to a percentage.",
          "choices": {
            "A": "58%",
            "B": "62.5%",
            "C": "65%",
            "D": "60.5%"
          },
          "correct": "B",
          "reason": "5 ÷ 8 = 0.625 × 100 = 62.5%."
        },
        "6": {
          "question": "A shirt originally costs ₱800 and is on sale at 20% off. What is the sale price?",
          "choices": {
            "A": "₱160",
            "B": "₱600",
            "C": "₱640",
            "D": "₱780"
          },
          "correct": "C",
          "reason": "Discount: 800×0.20 = 160. Sale price: 800 − 160 = ₱640."
        },
        "7": {
          "question": "The price of rice increased from ₱40 per kilo to ₱50 per kilo. What is the percentage increase?",
          "choices": {
            "A": "10%",
            "B": "20%",
            "C": "25%",
            "D": "30%"
          },
          "correct": "C",
          "reason": "(New − Old)/Old = (50 − 40)/40 = 10/40 = 0.25 = 25%."
        },
        "8": {
          "question": "A population decreased from 5,000 to 4,200. What is the percentage decrease?",
          "choices": {
            "A": "16%",
            "B": "19%",
            "C": "20%",
            "D": "8%"
          },
          "correct": "A",
          "reason": "(5000 − 4200)/5000 = 800/5000 = 8/50 = 16/100 = 16%."
        },
        "9": {
          "question": "What is 150% of 60?",
          "choices": {
            "A": "30",
            "B": "90",
            "C": "120",
            "D": "150"
          },
          "correct": "B",
          "reason": "1.50 × 60 = 90."
        },
        "10": {
          "question": "What is 0.5% of 400?",
          "choices": {
            "A": "200",
            "B": "20",
            "C": "2",
            "D": "0.2"
          },
          "correct": "C",
          "reason": "Ang 1% ng 400 ay 4, kaya ang kalahati nito (0.5%) ay 2."
        },
        "11": {
          "question": "In a class of 40 students, 85% passed the exam. How many students failed?",
          "choices": {
            "A": "6",
            "B": "8",
            "C": "34",
            "D": "15"
          },
          "correct": "A",
          "reason": "Kung 85% ang pumasa, 15% ang bumagsak. 0.15 × 40 = 6 students."
        },
        "12": {
          "question": "A salesman earns a 6% commission on all sales. If he sold ₱150,000 worth of appliances, how much is his commission?",
          "choices": {
            "A": "₱900",
            "B": "₱6,000",
            "C": "₱9,000",
            "D": "₱15,000"
          },
          "correct": "C",
          "reason": "150,000 × 0.06 = ₱9,000."
        },
        "13": {
          "question": "If an item costs ₱1,120 inclusive of 12% VAT, what was its original price before VAT?",
          "choices": {
            "A": "₱985.60",
            "B": "₱1,000",
            "C": "₱1,008",
            "D": "₱950"
          },
          "correct": "B",
          "reason": "1,120 ÷ 1.12 = ₱1,000."
        },
        "14": {
          "question": "Successive discounts of 20% and 10% are equivalent to what single discount?",
          "choices": {
            "A": "30%",
            "B": "28%",
            "C": "25%",
            "D": "22%"
          },
          "correct": "B",
          "reason": "Ipagpalagay na ₱100 ang presyo: bawas 20% = ₱80. Bawas 10% sa 80 (₱8) = ₱72. Total discount: 100 − 72 = 28%."
        },
        "15": {
          "question": "Maria's monthly salary of ₱25,000 was increased by 8%. What is her new salary?",
          "choices": {
            "A": "₱25,800",
            "B": "₱26,500",
            "C": "₱27,000",
            "D": "₱28,000"
          },
          "correct": "C",
          "reason": "Increase: 25,000 × 0.08 = 2,000. New salary: 25,000 + 2,000 = ₱27,000."
        },
        "16": {
          "question": "After a 30% discount, a bag was sold for ₱1,400. What was its original price?",
          "choices": {
            "A": "₱1,820",
            "B": "₱2,000",
            "C": "₱2,100",
            "D": "₱1,700"
          },
          "correct": "B",
          "reason": "Ang ₱1,400 ay 70% ng original price. 1,400 ÷ 0.70 = ₱2,000."
        },
        "17": {
          "question": "Simple interest: How much interest will ₱10,000 earn in 3 years at 5% annual simple interest?",
          "choices": {
            "A": "₱500",
            "B": "₱1,500",
            "C": "₱11,500",
            "D": "₱1,050"
          },
          "correct": "B",
          "reason": "I = P × r × t = 10,000 × 0.05 × 3 = ₱1,500."
        },
        "18": {
          "question": "Out of 250 applicants, 40 are hired. What percentage of applicants were hired?",
          "choices": {
            "A": "12%",
            "B": "16%",
            "C": "20%",
            "D": "25%"
          },
          "correct": "B",
          "reason": "40/250 = 4/25 = 16/100 = 16%."
        },
        "19": {
          "question": "What percent of 80 is 100?",
          "choices": {
            "A": "80%",
            "B": "120%",
            "C": "125%",
            "D": "150%"
          },
          "correct": "C",
          "reason": "100/80 = 5/4 = 1.25 = 125%."
        },
        "20": {
          "question": "A solution contains 30 mL of alcohol and 120 mL of water. What percentage of the solution is alcohol?",
          "choices": {
            "A": "25%",
            "B": "20%",
            "C": "30%",
            "D": "15%"
          },
          "correct": "B",
          "reason": "Total solution = 30 + 120 = 150 mL. Alcohol % = 30/150 = 1/5 = 20%."
        },
        "21": {
          "question": "If A is 25% more than B, then B is what percent less than A?",
          "choices": {
            "A": "25%",
            "B": "20%",
            "C": "15%",
            "D": "30%"
          },
          "correct": "B",
          "reason": "Kung B = 100, A = 125. Ang diperensya ay 25. 25/125 = 1/5 = 20%."
        },
        "22": {
          "question": "Express 3 1/4% as a decimal.",
          "choices": {
            "A": "3.25",
            "B": "0.325",
            "C": "0.0325",
            "D": "0.00325"
          },
          "correct": "C",
          "reason": "3.25% ÷ 100 = 0.0325."
        },
        "23": {
          "question": "A store buys a watch for ₱500 and sells it for ₱650. What is the markup percentage based on cost?",
          "choices": {
            "A": "15%",
            "B": "23%",
            "C": "30%",
            "D": "35%"
          },
          "correct": "C",
          "reason": "Profit = 650 − 500 = 150. Markup % = 150/500 = 30/100 = 30%."
        },
        "24": {
          "question": "What is 40% of 40% of 500?",
          "choices": {
            "A": "40",
            "B": "80",
            "C": "160",
            "D": "200"
          },
          "correct": "B",
          "reason": "40% ng 500 = 200. Tapos 40% ng 200 = 80."
        },
        "25": {
          "question": "John spent 35% of his allowance on food and 25% on books. If he has ₱800 left, how much was his total allowance?",
          "choices": {
            "A": "₱1,600",
            "B": "₱2,000",
            "C": "₱2,400",
            "D": "₱1,200"
          },
          "correct": "B",
          "reason": "Nagastos = 35% + 25% = 60%. Natira = 40%. Kaya 800 ÷ 0.40 = ₱2,000."
        },
        "26": {
          "question": "Which is greater: 30% of 90 or 40% of 70?",
          "choices": {
            "A": "30% of 90",
            "B": "40% of 70",
            "C": "They are equal",
            "D": "Cannot be determined"
          },
          "correct": "B",
          "reason": "0.30 × 90 = 27, habang 0.40 × 70 = 28. Mas malaki ang 28."
        },
        "27": {
          "question": "A student answered 68 questions correctly out of 80. What is his score in percent?",
          "choices": {
            "A": "80%",
            "B": "82%",
            "C": "85%",
            "D": "88%"
          },
          "correct": "C",
          "reason": "68/80 = 17/20 = 85/100 = 85%."
        },
        "28": {
          "question": "What number is 20% less than 150?",
          "choices": {
            "A": "120",
            "B": "130",
            "C": "30",
            "D": "125"
          },
          "correct": "A",
          "reason": "150 − (0.20 × 150) = 150 − 30 = 120."
        },
        "29": {
          "question": "If 60% of a number is 72, what is 25% of that same number?",
          "choices": {
            "A": "24",
            "B": "30",
            "C": "36",
            "D": "40"
          },
          "correct": "B",
          "reason": "Ang buong number ay 72 ÷ 0.60 = 120. Ang 25% ng 120 ay 120 ÷ 4 = 30."
        },
        "30": {
          "question": "A gadget depreciates in value by 10% every year. If it costs ₱20,000 today, how much will it be worth after 2 years?",
          "choices": {
            "A": "₱16,000",
            "B": "₱16,200",
            "C": "₱18,000",
            "D": "₱15,800"
          },
          "correct": "B",
          "reason": "Year 1: 20,000 × 0.90 = 18,000. Year 2: 18,000 × 0.90 = ₱16,200."
        }
      }
    },
    {
      "subject": "Numerical Ability",
      "subject_icon": "🔢",
      "topic": "Ratios and Proportions",
      "topic_order": 3,
      "questions": {
        "1": {
          "question": "Simplify the ratio 24 : 36 to lowest terms.",
          "choices": {
            "A": "4 : 6",
            "B": "2 : 3",
            "C": "3 : 4",
            "D": "6 : 9"
          },
          "correct": "B",
          "reason": "I-divide pareho sa GCF na 12: 24÷12 = 2, 36÷12 = 3."
        },
        "2": {
          "question": "Solve for x: 5 : 8 = x : 32",
          "choices": {
            "A": "16",
            "B": "20",
            "C": "24",
            "D": "25"
          },
          "correct": "B",
          "reason": "Multiply means and extremes: 8x = 5×32 → 8x = 160 → x = 20."
        },
        "3": {
          "question": "In a class of 45 students, the ratio of boys to girls is 4 : 5. How many boys are there?",
          "choices": {
            "A": "15",
            "B": "20",
            "C": "25",
            "D": "30"
          },
          "correct": "B",
          "reason": "Total parts = 4+5 = 9. Bawat part = 45÷9 = 5. Boys: 4×5 = 20."
        },
        "4": {
          "question": "Divide ₱1,200 in the ratio 1 : 2 : 3. What is the largest share?",
          "choices": {
            "A": "₱200",
            "B": "₱400",
            "C": "₱600",
            "D": "₱800"
          },
          "correct": "C",
          "reason": "Total parts = 1+2+3 = 6. Bawat part = 1,200÷6 = 200. Largest share (3 parts) = 3×200 = ₱600."
        },
        "5": {
          "question": "A recipe calls for 3 cups of flour for every 2 cups of sugar. If you use 12 cups of flour, how much sugar is needed?",
          "choices": {
            "A": "6 cups",
            "B": "8 cups",
            "C": "9 cups",
            "D": "10 cups"
          },
          "correct": "B",
          "reason": "3:2 = 12:x → 3x = 24 → x = 8."
        },
        "6": {
          "question": "If 6 workers can finish a job in 10 days, how many days will it take 15 workers to finish the same job at the same rate?",
          "choices": {
            "A": "4 days",
            "B": "5 days",
            "C": "25 days",
            "D": "8 days"
          },
          "correct": "A",
          "reason": "Inverse proportion (mas maraming tao, mas mabilis matapos): 6×10 = 15×x → 60 = 15x → x = 4 days."
        },
        "7": {
          "question": "The ratio of two numbers is 3 : 7, and their sum is 80. What is the smaller number?",
          "choices": {
            "A": "21",
            "B": "24",
            "C": "30",
            "D": "56"
          },
          "correct": "B",
          "reason": "Total parts = 3+7 = 10. 80÷10 = 8 per part. Smaller number = 3×8 = 24."
        },
        "8": {
          "question": "Express the ratio of 45 minutes to 2 hours in simplest form.",
          "choices": {
            "A": "45 : 2",
            "B": "3 : 8",
            "C": "9 : 4",
            "D": "1 : 3"
          },
          "correct": "B",
          "reason": "Gawing parehong minutes: 2 hours = 120 mins. Ratio: 45:120, divide by 15 = 3:8."
        },
        "9": {
          "question": "A car travels 180 km on 15 liters of gasoline. How far can it travel on 25 liters?",
          "choices": {
            "A": "250 km",
            "B": "300 km",
            "C": "320 km",
            "D": "275 km"
          },
          "correct": "B",
          "reason": "180 ÷ 15 = 12 km/L. Kaya sa 25 L: 12×25 = 300 km."
        },
        "10": {
          "question": "The angles of a triangle are in the ratio 2 : 3 : 4. What is the measure of the largest angle?",
          "choices": {
            "A": "40°",
            "B": "60°",
            "C": "80°",
            "D": "90°"
          },
          "correct": "C",
          "reason": "Ang total angles ng triangle ay 180°. Total parts = 2+3+4 = 9. 180÷9 = 20° per part. Largest = 4×20 = 80°."
        },
        "11": {
          "question": "If A : B = 2 : 3 and B : C = 4 : 5, what is A : C?",
          "choices": {
            "A": "2 : 5",
            "B": "8 : 15",
            "C": "6 : 15",
            "D": "3 : 4"
          },
          "correct": "B",
          "reason": "Gawing pareho ang B (LCD ng 3 at 4 ay 12): A:B = 8:12 at B:C = 12:15. Kaya A:C = 8:15."
        },
        "12": {
          "question": "Solve for x: (x + 2)/6 = 5/3",
          "choices": {
            "A": "6",
            "B": "8",
            "C": "10",
            "D": "12"
          },
          "correct": "B",
          "reason": "Cross-multiply: 3(x+2) = 30 → x+2 = 10 → x = 8."
        },
        "13": {
          "question": "On a map, 1 cm represents 25 km. Two cities are 4.5 cm apart on the map. What is their actual distance?",
          "choices": {
            "A": "100 km",
            "B": "112.5 km",
            "C": "125 km",
            "D": "90 km"
          },
          "correct": "B",
          "reason": "4.5 × 25 = 112.5 km."
        },
        "14": {
          "question": "A pet store has 18 dogs and 24 cats. What is the ratio of cats to the total number of pets?",
          "choices": {
            "A": "3 : 4",
            "B": "4 : 3",
            "C": "4 : 7",
            "D": "3 : 7"
          },
          "correct": "C",
          "reason": "Total pets = 18+24 = 42. Ratio ng cats to total = 24:42, divide by 6 = 4:7."
        },
        "15": {
          "question": "If 4 notebooks cost ₱140, how much do 10 notebooks cost?",
          "choices": {
            "A": "₱300",
            "B": "₱350",
            "C": "₱400",
            "D": "₱280"
          },
          "correct": "B",
          "reason": "Bawat notebook ay 140÷4 = ₱35. Kaya 10 notebooks = 35×10 = ₱350."
        },
        "16": {
          "question": "A supply of food lasts 30 days for 20 soldiers. If 10 more soldiers join them, how long will the food last?",
          "choices": {
            "A": "15 days",
            "B": "20 days",
            "C": "25 days",
            "D": "45 days"
          },
          "correct": "B",
          "reason": "Inverse proportion: 20×30 = 30×x → 600 = 30x → x = 20 days."
        },
        "17": {
          "question": "Simplify the ratio: 1/2 : 1/3",
          "choices": {
            "A": "2 : 3",
            "B": "3 : 2",
            "C": "1 : 6",
            "D": "6 : 1"
          },
          "correct": "B",
          "reason": "I-multiply pareho sa LCD na 6: (1/2×6) : (1/3×6) = 3:2."
        },
        "18": {
          "question": "The ratio of wins to losses of a basketball team is 5 : 2. If they won 35 games, how many games did they play in total?",
          "choices": {
            "A": "14",
            "B": "42",
            "C": "49",
            "D": "50"
          },
          "correct": "C",
          "reason": "35÷5 = 7 per part. Losses = 2×7 = 14. Total games = 35+14 = 49."
        },
        "19": {
          "question": "Two numbers are in the ratio 5 : 9. If their difference is 36, what is the larger number?",
          "choices": {
            "A": "45",
            "B": "63",
            "C": "81",
            "D": "90"
          },
          "correct": "C",
          "reason": "Difference in parts = 9−5 = 4. 36÷4 = 9 per part. Larger number = 9×9 = 81."
        },
        "20": {
          "question": "Simplify the ratio 0.4 : 1.2.",
          "choices": {
            "A": "1 : 3",
            "B": "1 : 4",
            "C": "2 : 6",
            "D": "4 : 12"
          },
          "correct": "A",
          "reason": "Multiply by 10 para mawala ang decimal: 4:12, divide by 4 = 1:3."
        },
        "21": {
          "question": "A pole 6 meters high casts a shadow 4 meters long. At the same time, a tree casts a shadow 10 meters long. How tall is the tree?",
          "choices": {
            "A": "12 m",
            "B": "15 m",
            "C": "16 m",
            "D": "18 m"
          },
          "correct": "B",
          "reason": "6/4 = h/10 → 4h = 60 → h = 15 m."
        },
        "22": {
          "question": "The ratio of doctors to nurses in a hospital is 2 : 9. If there are 72 nurses, how many doctors are there?",
          "choices": {
            "A": "14",
            "B": "16",
            "C": "18",
            "D": "20"
          },
          "correct": "B",
          "reason": "72÷9 = 8 per part. Doctors = 2×8 = 16."
        },
        "23": {
          "question": "In a bag of marbles, the ratio of red to blue is 3 : 4, and blue to green is 2 : 5. What is the ratio of red to blue to green?",
          "choices": {
            "A": "3 : 4 : 5",
            "B": "3 : 4 : 10",
            "C": "6 : 8 : 10",
            "D": "3 : 2 : 5"
          },
          "correct": "B",
          "reason": "Gawing 4 ang blue sa pangalawang ratio (2:5 times 2 = 4:10). Kaya 3:4:10."
        },
        "24": {
          "question": "Which of the following forms a true proportion with 4 : 7?",
          "choices": {
            "A": "12 : 28",
            "B": "16 : 28",
            "C": "8 : 21",
            "D": "20 : 42"
          },
          "correct": "B",
          "reason": "Multiply pareho sa 4: 4×4 = 16, 7×4 = 28."
        },
        "25": {
          "question": "A gear with 20 teeth turns a gear with 50 teeth. If the smaller gear makes 15 revolutions, how many revolutions does the larger gear make?",
          "choices": {
            "A": "6",
            "B": "10",
            "C": "37.5",
            "D": "5"
          },
          "correct": "A",
          "reason": "Inverse proportion: 20×15 = 50×x → 300 = 50x → x = 6."
        },
        "26": {
          "question": "Divide 100 into two parts in the ratio 3 : 2.",
          "choices": {
            "A": "70 and 30",
            "B": "60 and 40",
            "C": "75 and 25",
            "D": "80 and 20"
          },
          "correct": "B",
          "reason": "Total parts = 5. 100÷5 = 20. Parts: 3×20 = 60 at 2×20 = 40."
        },
        "27": {
          "question": "If x : 12 = 3 : x, find the positive value of x.",
          "choices": {
            "A": "4",
            "B": "6",
            "C": "9",
            "D": "36"
          },
          "correct": "B",
          "reason": "x² = 12×3 = 36 → x = √36 = 6."
        },
        "28": {
          "question": "A mixture of concrete uses cement, sand, and gravel in the ratio 1 : 2 : 4. How many bags of gravel are needed for 35 total bags of mixture?",
          "choices": {
            "A": "15",
            "B": "20",
            "C": "25",
            "D": "10"
          },
          "correct": "B",
          "reason": "Total parts = 1+2+4 = 7. 35÷7 = 5. Gravel = 4×5 = 20 bags."
        },
        "29": {
          "question": "If 8 apples cost ₱200, how many apples can you buy with ₱450?",
          "choices": {
            "A": "16",
            "B": "18",
            "C": "20",
            "D": "22"
          },
          "correct": "B",
          "reason": "Bawat apple ay 200÷8 = ₱25. Kaya 450÷25 = 18 apples."
        },
        "30": {
          "question": "The ratio of a father's age to his son's age is 7 : 2. In 10 years, the sum of their ages will be 65. How old is the son now?",
          "choices": {
            "A": "10",
            "B": "12",
            "C": "14",
            "D": "20"
          },
          "correct": "A",
          "reason": "Kung sum nila sa 10 years ay 65, ang sum nila ngayon ay 65−20 = 45. Total parts = 7+2 = 9. 45÷9 = 5. Son's age = 2×5 = 10."
        }
      }
    },
    {
      "subject": "Numerical Ability",
      "subject_icon": "🔢",
      "topic": "Word Problems",
      "topic_order": 4,
      "questions": {
        "1": {
          "question": "Age Problem: Ana is 6 years older than Ben. Five years ago, the sum of their ages was 28. How old is Ana now?",
          "choices": {
            "A": "16",
            "B": "22",
            "C": "20",
            "D": "18"
          },
          "correct": "B",
          "reason": "Sum ngayon = 28+10 = 38. Kung B+(B+6) = 38 → 2B = 32 → B = 16. Ana = 16+6 = 22."
        },
        "2": {
          "question": "Work Problem: Pedro can paint a fence in 4 hours, while Juan can paint the same fence in 6 hours. How long will it take them working together?",
          "choices": {
            "A": "2 hours",
            "B": "2.4 hours",
            "C": "5 hours",
            "D": "3 hours"
          },
          "correct": "B",
          "reason": "Formula: (A×B)/(A+B) = (4×6)/(4+6) = 24/10 = 2.4 hours."
        },
        "3": {
          "question": "Distance/Rate: A train travels at 80 km/h for 2.5 hours, then at 60 km/h for 1.5 hours. What is the total distance traveled?",
          "choices": {
            "A": "260 km",
            "B": "290 km",
            "C": "300 km",
            "D": "240 km"
          },
          "correct": "B",
          "reason": "(80×2.5) + (60×1.5) = 200 + 90 = 290 km."
        },
        "4": {
          "question": "Number Problem: The sum of three consecutive even integers is 72. What is the largest integer?",
          "choices": {
            "A": "22",
            "B": "24",
            "C": "26",
            "D": "28"
          },
          "correct": "C",
          "reason": "Middle number = 72÷3 = 24. Ang tatlo ay 22, 24, at 26. Largest = 26."
        },
        "5": {
          "question": "Coin Problem: Carlo has 20 coins consisting of ₱5 and ₱10 coins totaling ₱145. How many ₱10 coins does he have?",
          "choices": {
            "A": "9",
            "B": "11",
            "C": "10",
            "D": "12"
          },
          "correct": "A",
          "reason": "Kung lahat ay ₱5, total ay ₱100. Sobra ng ₱45. Bawat palit ng ₱5 sa ₱10 ay dagdag ₱5: 45÷5 = 9 na ₱10 coins."
        },
        "6": {
          "question": "Geometry (Perimeter): The length of a rectangle is 4 meters more than its width. If the perimeter is 40 meters, what is its area?",
          "choices": {
            "A": "96 sq. m",
            "B": "84 sq. m",
            "C": "100 sq. m",
            "D": "64 sq. m"
          },
          "correct": "A",
          "reason": "L+W = 40÷2 = 20. Kung W+(W+4) = 20 → W = 8, L = 12. Area = 12×8 = 96."
        },
        "7": {
          "question": "Average Problem: The average of 4 tests is 85. What score must the student get on the 5th test to raise the average to 87?",
          "choices": {
            "A": "90",
            "B": "93",
            "C": "95",
            "D": "97"
          },
          "correct": "C",
          "reason": "Target total = 87×5 = 435. Current total = 85×4 = 340. Needed: 435−340 = 95."
        },
        "8": {
          "question": "Distance (Opposite Direction): Two cars leave the same station at the same time in opposite directions at 50 km/h and 70 km/h. After how many hours will they be 420 km apart?",
          "choices": {
            "A": "3 hours",
            "B": "3.5 hours",
            "C": "4 hours",
            "D": "4.5 hours"
          },
          "correct": "B",
          "reason": "Combined speed = 50+70 = 120 km/h. Time = 420÷120 = 3.5 hours."
        },
        "9": {
          "question": "Age Problem: A mother is three times as old as her daughter. In 12 years, she will be twice as old as her daughter. How old is the daughter now?",
          "choices": {
            "A": "10",
            "B": "12",
            "C": "15",
            "D": "18"
          },
          "correct": "B",
          "reason": "3x+12 = 2(x+12) → 3x+12 = 2x+24 → x = 12."
        },
        "10": {
          "question": "Mixture Problem: How many liters of pure water must be added to 20 liters of a 30% salt solution to make it a 20% salt solution?",
          "choices": {
            "A": "5 L",
            "B": "10 L",
            "C": "15 L",
            "D": "20 L"
          },
          "correct": "B",
          "reason": "Salt = 20×0.30 = 6 L. Para maging 20% ang 6 L: 6÷0.20 = 30 L total. Added water = 30−20 = 10 L."
        },
        "11": {
          "question": "Work Problem: Pipe A can fill a tank in 3 hours, while Drain B can empty it in 6 hours. If both are open, how long to fill the tank?",
          "choices": {
            "A": "4 hours",
            "B": "6 hours",
            "C": "9 hours",
            "D": "2 hours"
          },
          "correct": "B",
          "reason": "1/3 − 1/6 = 1/6 per hour, kaya 6 hours bago mapuno."
        },
        "12": {
          "question": "Number Problem: Twice a number decreased by 7 is equal to 29. What is the number?",
          "choices": {
            "A": "11",
            "B": "18",
            "C": "22",
            "D": "36"
          },
          "correct": "B",
          "reason": "2x−7 = 29 → 2x = 36 → x = 18."
        },
        "13": {
          "question": "Business/Profit: A vendor bought 50 mangoes for ₱600. If 5 mangoes spoiled and he sold the rest at ₱15 each, how much was his net profit?",
          "choices": {
            "A": "₱75",
            "B": "₱150",
            "C": "₱675",
            "D": "₱50"
          },
          "correct": "A",
          "reason": "Good mangoes = 50−5 = 45. Revenue = 45×15 = ₱675. Profit = 675−600 = ₱75."
        },
        "14": {
          "question": "Geometry (Circle): What is the area of a circle with a diameter of 14 cm? (Use π ≈ 22/7)",
          "choices": {
            "A": "44 sq. cm",
            "B": "154 sq. cm",
            "C": "616 sq. cm",
            "D": "88 sq. cm"
          },
          "correct": "B",
          "reason": "Radius = 14÷2 = 7 cm. Area = πr² = (22/7)×7×7 = 154."
        },
        "15": {
          "question": "Motion (Upstream/Downstream): A boat travels 15 km/h in still water. If the river current flows at 3 km/h, how long will it take to travel 36 km upstream?",
          "choices": {
            "A": "2 hours",
            "B": "3 hours",
            "C": "2.4 hours",
            "D": "4 hours"
          },
          "correct": "B",
          "reason": "Upstream speed = 15−3 = 12 km/h. Time = 36÷12 = 3 hours."
        },
        "16": {
          "question": "Consecutive Integers: The sum of four consecutive integers is 94. What is the smallest integer?",
          "choices": {
            "A": "21",
            "B": "22",
            "C": "23",
            "D": "24"
          },
          "correct": "B",
          "reason": "x+(x+1)+(x+2)+(x+3) = 94 → 4x+6 = 94 → 4x = 88 → x = 22."
        },
        "17": {
          "question": "Geometry (Triangle): What is the area of a right triangle with legs measuring 9 cm and 12 cm?",
          "choices": {
            "A": "108 sq. cm",
            "B": "54 sq. cm",
            "C": "36 sq. cm",
            "D": "21 sq. cm"
          },
          "correct": "B",
          "reason": "Area = (1/2)×base×height = (1/2)×9×12 = 54."
        },
        "18": {
          "question": "Probability: A standard die is rolled once. What is the probability of rolling a number greater than 4?",
          "choices": {
            "A": "1/6",
            "B": "1/3",
            "C": "1/2",
            "D": "2/3"
          },
          "correct": "B",
          "reason": "Ang mga numerong lampas sa 4 ay 5 at 6 (2 outcomes). 2/6 = 1/3."
        },
        "19": {
          "question": "Combinatorics: How many different 3-digit numbers can be formed using the digits 1, 2, 3, and 4 if repetition is NOT allowed?",
          "choices": {
            "A": "12",
            "B": "24",
            "C": "64",
            "D": "16"
          },
          "correct": "B",
          "reason": "4×3×2 = 24 ways."
        },
        "20": {
          "question": "Venn Diagram: In a survey of 50 people, 30 drink coffee, 25 drink tea, and 10 drink both. How many drink NEITHER?",
          "choices": {
            "A": "5",
            "B": "10",
            "C": "15",
            "D": "0"
          },
          "correct": "A",
          "reason": "Drink at least one = 30+25−10 = 45. Neither = 50−45 = 5."
        },
        "21": {
          "question": "Time Calculation: A flight departs Manila at 10:45 PM and arrives in Tokyo 4 hours and 35 minutes later (ignoring time zone differences). What time is arrival?",
          "choices": {
            "A": "2:20 AM",
            "B": "3:20 AM",
            "C": "3:10 AM",
            "D": "2:80 AM"
          },
          "correct": "B",
          "reason": "10:45 PM + 4 hrs = 2:45 AM. Dagdag 35 mins = 3:20 AM."
        },
        "22": {
          "question": "Algebra: If 3x + 5 = 20, what is the value of 6x − 3?",
          "choices": {
            "A": "27",
            "B": "30",
            "C": "33",
            "D": "15"
          },
          "correct": "A",
          "reason": "3x = 15 → x = 5. Substitute: 6(5)−3 = 27."
        },
        "23": {
          "question": "Number Series: Find the next number: 3, 7, 15, 31, 63, ___",
          "choices": {
            "A": "95",
            "B": "126",
            "C": "127",
            "D": "128"
          },
          "correct": "C",
          "reason": "Pattern ay (×2)+1: 63×2+1 = 127."
        },
        "24": {
          "question": "Number Series: Find the next number: 2, 6, 12, 20, 30, ___",
          "choices": {
            "A": "40",
            "B": "42",
            "C": "44",
            "D": "36"
          },
          "correct": "B",
          "reason": "Ang idinadagdag ay +4, +6, +8, +10, kaya ang susunod ay +12: 30+12 = 42."
        },
        "25": {
          "question": "Pythagorean Theorem: A 13-foot ladder leans against a wall with its base 5 feet away from the wall. How high up the wall does the ladder reach?",
          "choices": {
            "A": "8 ft",
            "B": "10 ft",
            "C": "12 ft",
            "D": "14 ft"
          },
          "correct": "C",
          "reason": "a²+5² = 13² → a² = 169−25 = 144 → a = 12 ft."
        },
        "26": {
          "question": "Salary/Overtime: Liza earns ₱120/hour for regular 40 hours/week and 1.5 times her rate for overtime. If she worked 46 hours, what is her gross pay?",
          "choices": {
            "A": "₱5,520",
            "B": "₱5,880",
            "C": "₱6,000",
            "D": "₱5,760"
          },
          "correct": "B",
          "reason": "Regular: 40×120 = 4,800. OT rate = 120×1.5 = 180. OT pay: 6×180 = 1,080. Total = ₱5,880."
        },
        "27": {
          "question": "Perimeter/Fencing: How many meters of fencing are needed to enclose a square garden with an area of 144 sq. meters?",
          "choices": {
            "A": "36 m",
            "B": "48 m",
            "C": "72 m",
            "D": "12 m"
          },
          "correct": "B",
          "reason": "Side = √144 = 12 m. Perimeter = 4×12 = 48 m."
        },
        "28": {
          "question": "Average Speed: A car travels 60 km at 30 km/h and returns the same 60 km at 60 km/h. What is its average speed for the entire trip?",
          "choices": {
            "A": "45 km/h",
            "B": "40 km/h",
            "C": "50 km/h",
            "D": "42 km/h"
          },
          "correct": "B",
          "reason": "Total distance = 120 km. Total time = (60÷30)+(60÷60) = 2+1 = 3 hrs. Average speed = 120÷3 = 40 km/h."
        },
        "29": {
          "question": "Handshake Problem: There are 8 people in a room. If everyone shakes hands with everyone else once, how many handshakes occur?",
          "choices": {
            "A": "28",
            "B": "56",
            "C": "64",
            "D": "36"
          },
          "correct": "A",
          "reason": "Formula: n(n−1)/2 = (8×7)/2 = 28."
        },
        "30": {
          "question": "Sharing Bill: Five friends agreed to split a ₱1,500 dinner bill equally. One friend forgot his wallet, so the remaining friends split the bill equally among themselves. How much MORE did each of the four friends pay?",
          "choices": {
            "A": "₱375",
            "B": "₱75",
            "C": "₱300",
            "D": "₱100"
          },
          "correct": "B",
          "reason": "Original share: 1500÷5 = ₱300. New share: 1500÷4 = ₱375. Dagdag: 375−300 = ₱75."
        }
      }
    },
    {
      "subject": "Numerical Ability",
      "subject_icon": "🔢",
      "topic": "Tables and Graphs",
      "topic_order": 5,
      "questions": {
        "1": {
          "question": "DATA — Quarterly Sales Report (in ₱ thousands): Manila: Q1=450, Q2=500, Q3=480, Q4=620; Cebu: Q1=320, Q2=350, Q3=400, Q4=430; Davao: Q1=280, Q2=300, Q3=310, Q4=360; Baguio: Q1=150, Q2=200, Q3=170, Q4=230.\n\nWhat were the total annual sales of the Cebu branch?",
          "choices": {
            "A": "₱1,400,000",
            "B": "₱1,500,000",
            "C": "₱1,550,000",
            "D": "₱1,600,000"
          },
          "correct": "B",
          "reason": "320+350+400+430 = 1,500 (in thousands = ₱1,500,000)."
        },
        "2": {
          "question": "DATA — Quarterly Sales Report (in ₱ thousands): Manila: Q1=450, Q2=500, Q3=480, Q4=620; Cebu: Q1=320, Q2=350, Q3=400, Q4=430; Davao: Q1=280, Q2=300, Q3=310, Q4=360; Baguio: Q1=150, Q2=200, Q3=170, Q4=230.\n\nWhich quarter had the highest combined sales across all four branches?",
          "choices": {
            "A": "Q1",
            "B": "Q2",
            "C": "Q3",
            "D": "Q4"
          },
          "correct": "D",
          "reason": "Q4 total = 620+430+360+230 = 1,640, pinakamataas kumpara sa Q1 (1,200), Q2 (1,350), at Q3 (1,360)."
        },
        "3": {
          "question": "DATA — Quarterly Sales Report (in ₱ thousands): Manila: Q1=450, Q2=500, Q3=480, Q4=620; Cebu: Q1=320, Q2=350, Q3=400, Q4=430; Davao: Q1=280, Q2=300, Q3=310, Q4=360; Baguio: Q1=150, Q2=200, Q3=170, Q4=230.\n\nWhat is the average quarterly sales of the Baguio branch?",
          "choices": {
            "A": "₱180,000",
            "B": "₱187,500",
            "C": "₱190,000",
            "D": "₱200,000"
          },
          "correct": "B",
          "reason": "Total Baguio = 150+200+170+230 = 750. Average = 750÷4 = 187.5 thousand = ₱187,500."
        },
        "4": {
          "question": "DATA — Quarterly Sales Report (in ₱ thousands): Manila: Q1=450, Q2=500, Q3=480, Q4=620; Cebu: Q1=320, Q2=350, Q3=400, Q4=430; Davao: Q1=280, Q2=300, Q3=310, Q4=360; Baguio: Q1=150, Q2=200, Q3=170, Q4=230.\n\nBy what percentage did Manila's sales increase from Q1 to Q4?",
          "choices": {
            "A": "35.5%",
            "B": "37.8%",
            "C": "40.2%",
            "D": "27.4%"
          },
          "correct": "B",
          "reason": "(620−450)/450 = 170/450 ≈ 0.3778 = 37.8%."
        },
        "5": {
          "question": "DATA — Quarterly Sales Report (in ₱ thousands): Manila: Q1=450, Q2=500, Q3=480, Q4=620; Cebu: Q1=320, Q2=350, Q3=400, Q4=430; Davao: Q1=280, Q2=300, Q3=310, Q4=360; Baguio: Q1=150, Q2=200, Q3=170, Q4=230.\n\nWhat is the ratio of Davao's Q2 sales to Manila's Q2 sales?",
          "choices": {
            "A": "3 : 5",
            "B": "2 : 3",
            "C": "3 : 4",
            "D": "5 : 8"
          },
          "correct": "A",
          "reason": "300:500 = 3:5."
        },
        "6": {
          "question": "DATA — Quarterly Sales Report (in ₱ thousands): Manila: Q1=450, Q2=500, Q3=480, Q4=620; Cebu: Q1=320, Q2=350, Q3=400, Q4=430; Davao: Q1=280, Q2=300, Q3=310, Q4=360; Baguio: Q1=150, Q2=200, Q3=170, Q4=230.\n\nIn Q3, what percentage of the total company sales came from Cebu?",
          "choices": {
            "A": "25.4%",
            "B": "29.4%",
            "C": "31.2%",
            "D": "28.0%"
          },
          "correct": "B",
          "reason": "Q3 total = 480+400+310+170 = 1,360. Cebu % = 400/1360 ≈ 29.4%."
        },
        "7": {
          "question": "DATA — Household Monthly Budget (Total Monthly Income: ₱40,000): Housing/Rent 30%, Food & Groceries 25%, Utilities & Internet 15%, Transportation 10%, Savings 12%, Miscellaneous 8%.\n\nHow much money is allocated for Food & Groceries each month?",
          "choices": {
            "A": "₱8,000",
            "B": "₱10,000",
            "C": "₱12,000",
            "D": "₱6,000"
          },
          "correct": "B",
          "reason": "40,000×0.25 = ₱10,000."
        },
        "8": {
          "question": "DATA — Household Monthly Budget (Total Monthly Income: ₱40,000): Housing/Rent 30%, Food & Groceries 25%, Utilities & Internet 15%, Transportation 10%, Savings 12%, Miscellaneous 8%.\n\nHow much more is spent on Housing/Rent than on Utilities & Internet?",
          "choices": {
            "A": "₱4,000",
            "B": "₱6,000",
            "C": "₱8,000",
            "D": "₱12,000"
          },
          "correct": "B",
          "reason": "Difference in % = 30%−15% = 15%. 40,000×0.15 = ₱6,000."
        },
        "9": {
          "question": "DATA — Household Monthly Budget (Total Monthly Income: ₱40,000): Housing/Rent 30%, Food & Groceries 25%, Utilities & Internet 15%, Transportation 10%, Savings 12%, Miscellaneous 8%.\n\nHow much will the household save in one full year (12 months) if they stick to this budget?",
          "choices": {
            "A": "₱48,000",
            "B": "₱57,600",
            "C": "₱60,000",
            "D": "₱52,400"
          },
          "correct": "B",
          "reason": "Monthly savings = 40,000×0.12 = ₱4,800. Annual = 4,800×12 = ₱57,600."
        },
        "10": {
          "question": "DATA — Household Monthly Budget (Total Monthly Income: ₱40,000): Housing/Rent 30%, Food & Groceries 25%, Utilities & Internet 15%, Transportation 10%, Savings 12%, Miscellaneous 8%.\n\nWhat central angle in a pie chart represents Transportation (10%)?",
          "choices": {
            "A": "10°",
            "B": "36°",
            "C": "45°",
            "D": "30°"
          },
          "correct": "B",
          "reason": "Ang buong bilog ay 360°. 360°×0.10 = 36°."
        },
        "11": {
          "question": "DATA — Household Monthly Budget (Total Monthly Income: ₱40,000): Housing/Rent 30%, Food & Groceries 25%, Utilities & Internet 15%, Transportation 10%, Savings 12%, Miscellaneous 8%.\n\nIf the monthly income increases to ₱50,000 and percentages remain the same, how much goes to Miscellaneous?",
          "choices": {
            "A": "₱3,200",
            "B": "₱4,000",
            "C": "₱4,500",
            "D": "₱5,000"
          },
          "correct": "B",
          "reason": "50,000×0.08 = ₱4,000."
        },
        "12": {
          "question": "DATA — Household Monthly Budget (Total Monthly Income: ₱40,000): Housing/Rent 30%, Food & Groceries 25%, Utilities & Internet 15%, Transportation 10%, Savings 12%, Miscellaneous 8%.\n\nWhat is the combined amount spent on Food, Transportation, and Utilities?",
          "choices": {
            "A": "₱18,000",
            "B": "₱20,000",
            "C": "₱22,000",
            "D": "₱24,000"
          },
          "correct": "B",
          "reason": "Combined % = 25%+10%+15% = 50%. Kalahati ng ₱40,000 ay ₱20,000."
        },
        "13": {
          "question": "DATA — Enrollment by College (Male/Female): Engineering 420/180, Business 250/350, Education 120/380, IT/Computer Science 310/190.\n\nWhich college has the highest total student enrollment?",
          "choices": {
            "A": "Engineering only",
            "B": "Business only",
            "C": "Both Engineering and Business",
            "D": "IT / Computer Science"
          },
          "correct": "C",
          "reason": "Engineering = 420+180 = 600; Business = 250+350 = 600. Pareho silang pinakamataas."
        },
        "14": {
          "question": "DATA — Enrollment by College (Male/Female): Engineering 420/180, Business 250/350, Education 120/380, IT/Computer Science 310/190.\n\nWhat is the total number of female students across all four colleges?",
          "choices": {
            "A": "1,000",
            "B": "1,100",
            "C": "1,200",
            "D": "900"
          },
          "correct": "B",
          "reason": "180+350+380+190 = 1,100."
        },
        "15": {
          "question": "DATA — Enrollment by College (Male/Female): Engineering 420/180, Business 250/350, Education 120/380, IT/Computer Science 310/190.\n\nIn the College of Education, what percentage of the students are male?",
          "choices": {
            "A": "20%",
            "B": "24%",
            "C": "30%",
            "D": "31.6%"
          },
          "correct": "B",
          "reason": "Total Education = 120+380 = 500. Male % = 120/500 = 24/100 = 24%."
        },
        "16": {
          "question": "DATA — Enrollment by College (Male/Female): Engineering 420/180, Business 250/350, Education 120/380, IT/Computer Science 310/190.\n\nWhat is the overall ratio of Male to Female students in the entire university?",
          "choices": {
            "A": "1 : 1",
            "B": "11 : 10",
            "C": "10 : 11",
            "D": "6 : 5"
          },
          "correct": "A",
          "reason": "Total Male = 420+250+120+310 = 1,100. Total Female = 1,100. Ratio = 1,100:1,100 = 1:1."
        },
        "17": {
          "question": "DATA — Enrollment by College (Male/Female): Engineering 420/180, Business 250/350, Education 120/380, IT/Computer Science 310/190.\n\nHow many more male students are in IT than in Education?",
          "choices": {
            "A": "170",
            "B": "190",
            "C": "210",
            "D": "150"
          },
          "correct": "B",
          "reason": "310−120 = 190."
        },
        "18": {
          "question": "DATA — Enrollment by College (Male/Female): Engineering 420/180, Business 250/350, Education 120/380, IT/Computer Science 310/190.\n\nWhat percentage of the university's total population is enrolled in IT / Computer Science?",
          "choices": {
            "A": "20.5%",
            "B": "22.7%",
            "C": "25.0%",
            "D": "18.2%"
          },
          "correct": "B",
          "reason": "Total university = 1,100+1,100 = 2,200. IT total = 310+190 = 500. 500/2200 = 5/22 ≈ 22.7%."
        },
        "19": {
          "question": "DATA — Monthly Temperature & Rainfall: Jan: 25°C, 20mm; Mar: 28°C, 15mm; May: 32°C, 110mm; Jul: 27°C, 340mm; Sep: 27°C, 290mm; Nov: 26°C, 125mm.\n\nWhich month recorded the highest average temperature?",
          "choices": {
            "A": "March",
            "B": "May",
            "C": "July",
            "D": "September"
          },
          "correct": "B",
          "reason": "Sa table, May ang may pinakamataas na temperatura na 32°C."
        },
        "20": {
          "question": "DATA — Monthly Temperature & Rainfall: Jan: 25°C, 20mm; Mar: 28°C, 15mm; May: 32°C, 110mm; Jul: 27°C, 340mm; Sep: 27°C, 290mm; Nov: 26°C, 125mm.\n\nWhat is the range (difference between highest and lowest) of rainfall recorded in the table?",
          "choices": {
            "A": "320 mm",
            "B": "325 mm",
            "C": "340 mm",
            "D": "290 mm"
          },
          "correct": "B",
          "reason": "Highest (July = 340) minus Lowest (March = 15) = 325 mm."
        },
        "21": {
          "question": "DATA — Monthly Temperature & Rainfall: Jan: 25°C, 20mm; Mar: 28°C, 15mm; May: 32°C, 110mm; Jul: 27°C, 340mm; Sep: 27°C, 290mm; Nov: 26°C, 125mm.\n\nWhat is the average rainfall for the six listed months?",
          "choices": {
            "A": "140 mm",
            "B": "150 mm",
            "C": "160 mm",
            "D": "175 mm"
          },
          "correct": "B",
          "reason": "Sum = 20+15+110+340+290+125 = 900 mm. Average = 900÷6 = 150 mm."
        },
        "22": {
          "question": "DATA — Monthly Temperature & Rainfall: Jan: 25°C, 20mm; Mar: 28°C, 15mm; May: 32°C, 110mm; Jul: 27°C, 340mm; Sep: 27°C, 290mm; Nov: 26°C, 125mm.\n\nBetween which two listed months did rainfall experience the steepest increase?",
          "choices": {
            "A": "January to March",
            "B": "March to May",
            "C": "May to July",
            "D": "July to September"
          },
          "correct": "C",
          "reason": "Mula 110 mm naging 340 mm (tumaas ng +230 mm)."
        },
        "23": {
          "question": "DATA — Monthly Temperature & Rainfall: Jan: 25°C, 20mm; Mar: 28°C, 15mm; May: 32°C, 110mm; Jul: 27°C, 340mm; Sep: 27°C, 290mm; Nov: 26°C, 125mm.\n\nWhat is the median average temperature among the six listed months?",
          "choices": {
            "A": "26.5°C",
            "B": "27°C",
            "C": "27.5°C",
            "D": "28°C"
          },
          "correct": "B",
          "reason": "Ayusin mula pinakamababa: 25, 26, 27, 27, 28, 32. Ang dalawang gitna ay parehong 27, kaya 27°C."
        },
        "24": {
          "question": "DATA — Monthly Temperature & Rainfall: Jan: 25°C, 20mm; Mar: 28°C, 15mm; May: 32°C, 110mm; Jul: 27°C, 340mm; Sep: 27°C, 290mm; Nov: 26°C, 125mm.\n\nWhat percent of the total 6-month rainfall occurred in July and September combined?",
          "choices": {
            "A": "60%",
            "B": "65%",
            "C": "70%",
            "D": "75%"
          },
          "correct": "C",
          "reason": "July+Sept = 340+290 = 630 mm. Total = 900 mm. 630/900 = 7/10 = 70%."
        },
        "25": {
          "question": "DATA — CSE Passers by Region (2024 / 2025 / 2026): NCR 12,000 / 13,500 / 15,000; Region IV-A 8,000 / 8,800 / 9,600; Region VI 5,000 / 5,500 / 6,200; Region VII 6,000 / 6,300 / 6,800.\n\nHow many total passers did NCR produce from 2024 to 2026?",
          "choices": {
            "A": "39,500",
            "B": "40,500",
            "C": "41,500",
            "D": "42,000"
          },
          "correct": "B",
          "reason": "12,000+13,500+15,000 = 40,500."
        },
        "26": {
          "question": "DATA — CSE Passers by Region (2024 / 2025 / 2026): NCR 12,000 / 13,500 / 15,000; Region IV-A 8,000 / 8,800 / 9,600; Region VI 5,000 / 5,500 / 6,200; Region VII 6,000 / 6,300 / 6,800.\n\nWhich region had a consistent annual increase of exactly 800 passers per year?",
          "choices": {
            "A": "NCR",
            "B": "Region IV-A",
            "C": "Region VI",
            "D": "Region VII"
          },
          "correct": "B",
          "reason": "8,000 → 8,800 (+800) at 8,800 → 9,600 (+800)."
        },
        "27": {
          "question": "DATA — CSE Passers by Region (2024 / 2025 / 2026): NCR 12,000 / 13,500 / 15,000; Region IV-A 8,000 / 8,800 / 9,600; Region VI 5,000 / 5,500 / 6,200; Region VII 6,000 / 6,300 / 6,800.\n\nWhat was the percentage growth of passers in Region VI from 2024 to 2026?",
          "choices": {
            "A": "20%",
            "B": "22%",
            "C": "24%",
            "D": "25%"
          },
          "correct": "C",
          "reason": "(6,200−5,000)/5,000 = 1,200/5,000 = 24/100 = 24%."
        },
        "28": {
          "question": "DATA — CSE Passers by Region (2024 / 2025 / 2026): NCR 12,000 / 13,500 / 15,000; Region IV-A 8,000 / 8,800 / 9,600; Region VI 5,000 / 5,500 / 6,200; Region VII 6,000 / 6,300 / 6,800.\n\nIn 2025, how many more passers were there in NCR than in Region VI and Region VII combined?",
          "choices": {
            "A": "1,500",
            "B": "1,700",
            "C": "2,000",
            "D": "1,200"
          },
          "correct": "B",
          "reason": "Region VI + VII (2025) = 5,500+6,300 = 11,800. NCR (2025) = 13,500−11,800 = 1,700."
        },
        "29": {
          "question": "DATA — CSE Passers by Region (2024 / 2025 / 2026): NCR 12,000 / 13,500 / 15,000; Region IV-A 8,000 / 8,800 / 9,600; Region VI 5,000 / 5,500 / 6,200; Region VII 6,000 / 6,300 / 6,800.\n\nWhat was the total number of passers across all four listed regions in 2024?",
          "choices": {
            "A": "30,000",
            "B": "31,000",
            "C": "32,000",
            "D": "33,000"
          },
          "correct": "B",
          "reason": "12,000+8,000+5,000+6,000 = 31,000."
        },
        "30": {
          "question": "DATA — CSE Passers by Region (2024 / 2025 / 2026): NCR 12,000 / 13,500 / 15,000; Region IV-A 8,000 / 8,800 / 9,600; Region VI 5,000 / 5,500 / 6,200; Region VII 6,000 / 6,300 / 6,800.\n\nIn 2026, what is the ratio of Region IV-A passers to Region VII passers?",
          "choices": {
            "A": "24 : 17",
            "B": "12 : 9",
            "C": "16 : 11",
            "D": "4 : 3"
          },
          "correct": "A",
          "reason": "9,600:6,800, i-divide pareho sa 400: 96÷4 = 24 at 68÷4 = 17 → 24:17."
        }
      }
    },
    {
      "subject": "Analytical Ability",
      "subject_icon": "🧠",
      "topic": "Number Series",
      "topic_order": 1,
      "questions": {
        "1": {
          "question": "Find the next number: 5, 11, 17, 23, 29, ___",
          "choices": {
            "A": "33",
            "B": "35",
            "C": "36",
            "D": "37"
          },
          "correct": "B",
          "reason": "Ang pattern ay +6 bawat step (29 + 6 = 35)."
        },
        "2": {
          "question": "Find the next number: 100, 91, 82, 73, 64, ___",
          "choices": {
            "A": "53",
            "B": "54",
            "C": "55",
            "D": "56"
          },
          "correct": "C",
          "reason": "Binabawasan ng 9 (−9) bawat step (64 − 9 = 55)."
        },
        "3": {
          "question": "Find the next number: 3, 6, 12, 24, 48, ___",
          "choices": {
            "A": "72",
            "B": "84",
            "C": "96",
            "D": "108"
          },
          "correct": "C",
          "reason": "Dina-double o ×2 ang bawat numero (48 × 2 = 96)."
        },
        "4": {
          "question": "Find the next number: 243, 81, 27, 9, 3, ___",
          "choices": {
            "A": "0",
            "B": "1",
            "C": "2",
            "D": "1.5"
          },
          "correct": "B",
          "reason": "Dina-divide sa 3 (÷3) bawat step (3 ÷ 3 = 1)."
        },
        "5": {
          "question": "Find the next number: 2, 5, 10, 17, 26, ___",
          "choices": {
            "A": "35",
            "B": "36",
            "C": "37",
            "D": "38"
          },
          "correct": "C",
          "reason": "Ang idinadagdag ay sunod-sunod na odd numbers: +3, +5, +7, +9, kaya ang susunod ay +11 (26 + 11 = 37)."
        },
        "6": {
          "question": "Find the next number: 1, 4, 9, 16, 25, 36, ___",
          "choices": {
            "A": "42",
            "B": "48",
            "C": "49",
            "D": "64"
          },
          "correct": "C",
          "reason": "Ito ay listahan ng perfect squares (1², 2², 3², 4², 5², 6²), kaya ang kasunod ay 7² = 49."
        },
        "7": {
          "question": "Find the next number: 1, 8, 27, 64, 125, ___",
          "choices": {
            "A": "196",
            "B": "216",
            "C": "256",
            "D": "343"
          },
          "correct": "B",
          "reason": "Ito ay perfect cubes (1³, 2³, 3³, 4³, 5³), kaya ang susunod ay 6³ = 216."
        },
        "8": {
          "question": "Find the next number: 2, 3, 5, 8, 13, 21, ___",
          "choices": {
            "A": "29",
            "B": "32",
            "C": "34",
            "D": "35"
          },
          "correct": "C",
          "reason": "Fibonacci sequence: i-add ang dalawang naunang numero para makuha ang kasunod (13 + 21 = 34)."
        },
        "9": {
          "question": "Find the next number: 4, 9, 19, 39, 79, ___",
          "choices": {
            "A": "149",
            "B": "158",
            "C": "159",
            "D": "169"
          },
          "correct": "C",
          "reason": "Ang pattern ay (×2) + 1: 79 × 2 + 1 = 159."
        },
        "10": {
          "question": "Find the next number: 10, 20, 15, 30, 25, 50, ___",
          "choices": {
            "A": "40",
            "B": "45",
            "C": "75",
            "D": "100"
          },
          "correct": "B",
          "reason": "Alternating pattern na ×2, tapos −5: 50 − 5 = 45."
        },
        "11": {
          "question": "Find the next number: 2, 6, 18, 54, ___",
          "choices": {
            "A": "108",
            "B": "144",
            "C": "162",
            "D": "216"
          },
          "correct": "C",
          "reason": "Minu-multiply sa 3 (×3) bawat step (54 × 3 = 162)."
        },
        "12": {
          "question": "Find the next number: 7, 10, 8, 11, 9, 12, ___",
          "choices": {
            "A": "10",
            "B": "13",
            "C": "14",
            "D": "15"
          },
          "correct": "A",
          "reason": "Alternating na +3, tapos −2: 12 − 2 = 10."
        },
        "13": {
          "question": "Find the next number: 1, 2, 6, 24, 120, ___",
          "choices": {
            "A": "240",
            "B": "480",
            "C": "600",
            "D": "720"
          },
          "correct": "D",
          "reason": "Factorials (1!, 2!, 3!, 4!, 5!), o multiply by 2, 3, 4, 5, kaya ang susunod ay ×6: 120 × 6 = 720."
        },
        "14": {
          "question": "Find the next number: 50, 49, 46, 41, 34, ___",
          "choices": {
            "A": "25",
            "B": "26",
            "C": "27",
            "D": "29"
          },
          "correct": "A",
          "reason": "Ang binabawas ay −1, −3, −5, −7, kaya ang susunod ay −9: 34 − 9 = 25."
        },
        "15": {
          "question": "Find the next number: 15, 18, 24, 33, 45, ___",
          "choices": {
            "A": "57",
            "B": "58",
            "C": "60",
            "D": "63"
          },
          "correct": "C",
          "reason": "Ang idinadagdag ay multiples of 3: +3, +6, +9, +12, kaya ang susunod ay +15: 45 + 15 = 60."
        },
        "16": {
          "question": "Find the next number: 2, 3, 5, 7, 11, 13, 17, ___",
          "choices": {
            "A": "18",
            "B": "19",
            "C": "21",
            "D": "23"
          },
          "correct": "B",
          "reason": "Ito ay listahan ng sunod-sunod na prime numbers. Ang prime number pagkatapos ng 17 ay 19."
        },
        "17": {
          "question": "Find the next number: 64, 32, 48, 24, 36, 18, ___",
          "choices": {
            "A": "9",
            "B": "24",
            "C": "27",
            "D": "36"
          },
          "correct": "C",
          "reason": "Alternating na ÷2 at ×1.5 (kalahati ng number ang idadagdag): 18 + 9 = 27."
        },
        "18": {
          "question": "Find the next number: 0, 3, 8, 15, 24, ___",
          "choices": {
            "A": "33",
            "B": "35",
            "C": "36",
            "D": "37"
          },
          "correct": "B",
          "reason": "Pattern ay n² − 1 (1²−1, 2²−1, 3²−1, 4²−1, 5²−1), kaya ang pang-anim ay 6² − 1 = 35."
        },
        "19": {
          "question": "Find the next number: 120, 60, 20, 5, ___",
          "choices": {
            "A": "0",
            "B": "1",
            "C": "2",
            "D": "2.5"
          },
          "correct": "B",
          "reason": "Dina-divide sa sunod-sunod na numero: ÷2, ÷3, ÷4, kaya ang susunod ay ÷5: 5 ÷ 5 = 1."
        },
        "20": {
          "question": "Find the next number: 3, 4, 7, 11, 18, 29, ___",
          "choices": {
            "A": "45",
            "B": "47",
            "C": "49",
            "D": "51"
          },
          "correct": "B",
          "reason": "Lucas sequence (pareho ng Fibonacci): i-add ang dalawang naunang numero (18 + 29 = 47)."
        },
        "21": {
          "question": "Find the next number: 1/2, 2/3, 3/4, 4/5, ___",
          "choices": {
            "A": "5/6",
            "B": "4/6",
            "C": "5/7",
            "D": "6/7"
          },
          "correct": "A",
          "reason": "Nadadagdagan ng +1 pareho ang numerator at denominator."
        },
        "22": {
          "question": "Find the next number: 10, 11, 13, 16, 20, 25, ___",
          "choices": {
            "A": "30",
            "B": "31",
            "C": "32",
            "D": "33"
          },
          "correct": "B",
          "reason": "Ang idinadagdag ay +1, +2, +3, +4, +5, kaya +6 ang kasunod (25 + 6 = 31)."
        },
        "23": {
          "question": "Find the next number: 4, 16, 36, 64, 100, ___",
          "choices": {
            "A": "121",
            "B": "144",
            "C": "169",
            "D": "196"
          },
          "correct": "B",
          "reason": "Squares ng even numbers (2², 4², 6², 8², 10²), kaya ang kasunod ay 12² = 144."
        },
        "24": {
          "question": "Find the missing number: 81, 72, 63, 54, ___, 36",
          "choices": {
            "A": "42",
            "B": "45",
            "C": "48",
            "D": "49"
          },
          "correct": "B",
          "reason": "Multiples of 9 pababa (−9 bawat step): 54 − 9 = 45."
        },
        "25": {
          "question": "Find the next number: 2, 5, 11, 23, 47, ___",
          "choices": {
            "A": "93",
            "B": "94",
            "C": "95",
            "D": "96"
          },
          "correct": "C",
          "reason": "Pattern ay (×2) + 1: 47 × 2 + 1 = 95."
        },
        "26": {
          "question": "Find the next number: 1, 4, 2, 8, 3, 12, 4, ___",
          "choices": {
            "A": "5",
            "B": "14",
            "C": "16",
            "D": "20"
          },
          "correct": "C",
          "reason": "Dalawang magkahiwalay na series: Odd positions (1, 2, 3, 4) at Even positions (4, 8, 12, 16)."
        },
        "27": {
          "question": "Find the next number: 3, 10, 21, 36, 55, ___",
          "choices": {
            "A": "74",
            "B": "76",
            "C": "78",
            "D": "80"
          },
          "correct": "C",
          "reason": "Ang idinadagdag ay +7, +11, +15, +19 (nadadagdagan ng 4 ang pagitan), kaya +23 ang susunod (55 + 23 = 78)."
        },
        "28": {
          "question": "Find the next number: 0.5, 1.5, 4.5, 13.5, ___",
          "choices": {
            "A": "27",
            "B": "30.5",
            "C": "40.5",
            "D": "45"
          },
          "correct": "C",
          "reason": "Minu-multiply sa 3 (×3) bawat step (13.5 × 3 = 40.5)."
        },
        "29": {
          "question": "Find the next number: 90, 88, 84, 78, 70, ___",
          "choices": {
            "A": "58",
            "B": "60",
            "C": "62",
            "D": "64"
          },
          "correct": "B",
          "reason": "Ang binabawas ay −2, −4, −6, −8, kaya −10 ang kasunod (70 − 10 = 60)."
        },
        "30": {
          "question": "Find the next number: 5, 15, 45, 135, ___",
          "choices": {
            "A": "270",
            "B": "305",
            "C": "405",
            "D": "450"
          },
          "correct": "C",
          "reason": "Minu-multiply sa 3 (×3) bawat step (135 × 3 = 405)."
        }
      }
    },
    {
      "subject": "Analytical Ability",
      "subject_icon": "🧠",
      "topic": "Logic",
      "topic_order": 2,
      "questions": {
        "1": {
          "question": "All civil servants are public servants. Maria is a civil servant. Therefore:",
          "choices": {
            "A": "Maria is a politician.",
            "B": "Maria is a public servant.",
            "C": "All public servants are Maria.",
            "D": "Maria is not a public servant."
          },
          "correct": "B",
          "reason": "Dahil lahat ng civil servants ay public servants at si Maria ay civil servant, tiyak na siya ay public servant din."
        },
        "2": {
          "question": "No reptiles have fur. All snakes are reptiles. Therefore:",
          "choices": {
            "A": "Some snakes have fur.",
            "B": "No snakes have fur.",
            "C": "All animals without fur are snakes.",
            "D": "Snakes are mammals."
          },
          "correct": "B",
          "reason": "Walang reptile ang may balahibo (fur), at ang ahas ay reptile, kaya walang ahas ang may balahibo."
        },
        "3": {
          "question": "Some doctors are teachers. All teachers are patient. Which conclusion logically follows?",
          "choices": {
            "A": "All doctors are patient.",
            "B": "Some doctors are patient.",
            "C": "No doctors are patient.",
            "D": "All patient people are doctors."
          },
          "correct": "B",
          "reason": "Yung ilang doktor na teacher din ay siguradong patient dahil lahat ng teacher ay patient."
        },
        "4": {
          "question": "Ana is taller than Bea. Bea is taller than Carla. Dina is shorter than Carla. Who is the shortest?",
          "choices": {
            "A": "Ana",
            "B": "Bea",
            "C": "Carla",
            "D": "Dina"
          },
          "correct": "D",
          "reason": "Ayos mula pinakamatangkad: Ana > Bea > Carla > Dina. Pinakamaliit si Dina."
        },
        "5": {
          "question": "If it rains, the ground gets wet. The ground is NOT wet. What can you conclude?",
          "choices": {
            "A": "It rained lightly.",
            "B": "It did not rain.",
            "C": "The sun is shining.",
            "D": "Someone mopped the floor."
          },
          "correct": "B",
          "reason": "Modus Tollens rule: Kung nangyari ang P, mangyayari ang Q. Dahil HINDI nangyari ang Q (hindi basa ang lupa), siguradong HINDI rin nangyari ang P (hindi umulan)."
        },
        "6": {
          "question": "All roses are flowers. Some flowers fade quickly. Therefore:",
          "choices": {
            "A": "All roses fade quickly.",
            "B": "No roses fade quickly.",
            "C": "Some roses fade quickly.",
            "D": "None of the above conclusions strictly follows."
          },
          "correct": "D",
          "reason": "Walang tiyak na ugnayan kung yung \"some flowers\" na mabilis malanta ay kasama sa grupo ng \"roses\"."
        },
        "7": {
          "question": "Five runners finished a race. Mark finished ahead of Leo. Nathan finished behind Leo. Oscar finished ahead of Mark. Paul finished between Mark and Leo. Who finished second?",
          "choices": {
            "A": "Oscar",
            "B": "Mark",
            "C": "Paul",
            "D": "Leo"
          },
          "correct": "B",
          "reason": "Ranking (1st to 5th): Oscar (1st) > Mark (2nd) > Paul (3rd) > Leo (4th) > Nathan (5th)."
        },
        "8": {
          "question": "All laptops are computers. Some computers are expensive. Which statement MUST be true?",
          "choices": {
            "A": "All laptops are expensive.",
            "B": "All computers are laptops.",
            "C": "All laptops are machines, and they belong to the category of computers.",
            "D": "No laptops are expensive."
          },
          "correct": "C",
          "reason": "Tanging ang premise na \"All laptops are computers\" lang ang 100% sigurado."
        },
        "9": {
          "question": "Statement: \"If you pass the Civil Service Exam, you will become eligible for government service.\" Marco became eligible for government service. Can we conclude he passed the CSE?",
          "choices": {
            "A": "Yes, definitely.",
            "B": "No, because there are other ways to gain eligibility (e.g., Honor Graduate Eligibility).",
            "C": "Yes, because the exam is the only requirement.",
            "D": "No, Marco failed the exam."
          },
          "correct": "B",
          "reason": "Iwasan ang Fallacy of Affirming the Consequent. Ang pagpasa sa exam ay nagbibigay ng eligibility, pero hindi ibig sabihin na iyon lang ang tanging paraan para maging eligible."
        },
        "10": {
          "question": "A is the father of B. B is the sister of C. C is the son of D. How is D related to A?",
          "choices": {
            "A": "Sister",
            "B": "Wife",
            "C": "Mother",
            "D": "Daughter"
          },
          "correct": "B",
          "reason": "Si A ang tatay nina B at C, at si D ang nanay/magulang ni C. Kaya mag-asawa sina A at D (si D ang asawa ni A)."
        },
        "11": {
          "question": "No lazy person succeeds. Juan succeeded. Therefore:",
          "choices": {
            "A": "Juan is lazy.",
            "B": "Juan is not lazy.",
            "C": "All hardworking people are named Juan.",
            "D": "Success is easy."
          },
          "correct": "B",
          "reason": "Dahil walang tamad ang nagtatagumpay at nagtagumpay si Juan, tiyak na hindi tamad si Juan."
        },
        "12": {
          "question": "Four friends—Alex, Ben, Cris, and Dan—sit in a row. Ben is to the immediate right of Alex. Dan is at the far right end. Cris is not next to Dan. Who sits at the far left end?",
          "choices": {
            "A": "Alex",
            "B": "Ben",
            "C": "Cris",
            "D": "Dan"
          },
          "correct": "C",
          "reason": "Kung nasa dulo sa kanan si Dan (4th) at wala sa tabi niya si Cris, dapat nasa 1st (far left) si Cris. Ayos: Cris - Alex - Ben - Dan."
        },
        "13": {
          "question": "Every library has books. The Municipal Building has a library. Therefore:",
          "choices": {
            "A": "The Municipal Building sells books.",
            "B": "The Municipal Building has books.",
            "C": "All books are in the Municipal Building.",
            "D": "The library is closed on weekends."
          },
          "correct": "B",
          "reason": "Transitive property: Municipal Building → may library → may libro."
        },
        "14": {
          "question": "If all squares are rectangles, and all rectangles have four right angles, then:",
          "choices": {
            "A": "All rectangles are squares.",
            "B": "All squares have four right angles.",
            "C": "Some squares have three angles.",
            "D": "No squares are rectangles."
          },
          "correct": "B",
          "reason": "Ang square ay nasa loob ng kategorya ng rectangle, kaya namamana nito ang katangian ng rectangle."
        },
        "15": {
          "question": "Pointing to a photograph, Liza said, \"He is the only son of my mother's father.\" Who is the man in the photograph?",
          "choices": {
            "A": "Liza's brother",
            "B": "Liza's father",
            "C": "Liza's uncle",
            "D": "Liza's cousin"
          },
          "correct": "C",
          "reason": "Ang tatay ng nanay ni Liza ay ang lolo niya. Ang nag-iisang anak na lalaki ng lolo niya ay kapatid na lalaki ng nanay niya—kaya tiyuhin (uncle) niya ito."
        },
        "16": {
          "question": "Some birds cannot fly. Penguins are birds. Therefore:",
          "choices": {
            "A": "Penguins can fly.",
            "B": "Penguins cannot fly.",
            "C": "From these two statements alone, we cannot conclude whether penguins fly or not.",
            "D": "All birds are penguins."
          },
          "correct": "C",
          "reason": "Sa formal logic, huwag gagamit ng outside knowledge; ang premise ay nagsasabi lang na some birds cannot fly, hindi sinabi kung kasama ang penguins."
        },
        "17": {
          "question": "Box A is heavier than Box B. Box C is lighter than Box B. Box D is heavier than Box A. Which box is the second heaviest?",
          "choices": {
            "A": "Box A",
            "B": "Box B",
            "C": "Box C",
            "D": "Box D"
          },
          "correct": "A",
          "reason": "Ayos mula pinakamabigat: Box D > Box A > Box B > Box C. Pangalawa si Box A."
        },
        "18": {
          "question": "All honest politicians are respected. No corrupt official is honest. Therefore:",
          "choices": {
            "A": "No corrupt official is respected.",
            "B": "Some corrupt officials are honest.",
            "C": "No corrupt official is an honest politician.",
            "D": "All respected people are politicians."
          },
          "correct": "C",
          "reason": "Dahil walang corrupt official ang honest, imposible silang mapabilang sa grupo ng mga honest politicians."
        },
        "19": {
          "question": "If today is Wednesday, what day of the week will it be 100 days from now?",
          "choices": {
            "A": "Thursday",
            "B": "Friday",
            "C": "Saturday",
            "D": "Sunday"
          },
          "correct": "B",
          "reason": "I-divide ang 100 sa 7 (araw sa isang linggo): 100 ÷ 7 = 14 weeks remainder 2 days. Wednesday + 2 days = Friday."
        },
        "20": {
          "question": "Either the server is down or the internet cable is unplugged. The internet cable is plugged in. Therefore:",
          "choices": {
            "A": "Both are working fine.",
            "B": "The server is down.",
            "C": "The computer is broken.",
            "D": "The server is working fine."
          },
          "correct": "B",
          "reason": "Disjunctive Syllogism: Dalawa lang ang pagpipilian; dahil mali ang pangalawa, siguradong totoo ang una."
        },
        "21": {
          "question": "All mangoes in the basket are sweet. Some fruits in the basket are mangoes. Therefore:",
          "choices": {
            "A": "All fruits in the basket are sweet.",
            "B": "Some fruits in the basket are sweet.",
            "C": "No fruits in the basket are sour.",
            "D": "All sweet fruits are mangoes."
          },
          "correct": "B",
          "reason": "Ang ilang prutas na mangga ay siguradong matamis dahil lahat ng mangga sa basket ay matamis."
        },
        "22": {
          "question": "In a certain code, EXAM is written as FYBN. How is PASS written in that code?",
          "choices": {
            "A": "QBTT",
            "B": "QBRR",
            "C": "OZRR",
            "D": "QCTT"
          },
          "correct": "A",
          "reason": "Bawat letra ay inuusog ng +1 sa alpabeto (E→F, X→Y, A→B, M→N). Kaya P→Q, A→B, S→T, S→T."
        },
        "23": {
          "question": "In a certain code, BOOK is coded as 2-15-15-11. How is PEN coded?",
          "choices": {
            "A": "16-5-14",
            "B": "15-5-13",
            "C": "16-4-14",
            "D": "17-5-15"
          },
          "correct": "A",
          "reason": "Posisyon ng letra sa alpabeto (A=1, B=2 ...): P = 16, E = 5, N = 14."
        },
        "24": {
          "question": "All musicians are creative. Some engineers are musicians. Therefore:",
          "choices": {
            "A": "All engineers are creative.",
            "B": "Some engineers are creative.",
            "C": "No engineers are creative.",
            "D": "All creative people are engineers."
          },
          "correct": "B",
          "reason": "Yung ilang engineer na musician din ay tiyak na creative."
        },
        "25": {
          "question": "Statement: \"Only citizens who are at least 18 years old can vote.\" Rico voted in the national election. What MUST be true?",
          "choices": {
            "A": "Rico is 25 years old.",
            "B": "Rico is a citizen who is at least 18 years old.",
            "C": "Rico is a government employee.",
            "D": "Rico is a college graduate."
          },
          "correct": "B",
          "reason": "Dahil nakaboto si Rico, tiyak na natugunan niya ang kondisyon na maging citizen at hindi bababa sa 18 taong gulang."
        },
        "26": {
          "question": "Four houses are in a row: Red, Blue, Green, and Yellow. The Red house is between the Blue and Green houses. The Yellow house is not next to the Green house. Which house is next to the Blue house on the other side?",
          "choices": {
            "A": "Green",
            "B": "Red",
            "C": "Yellow",
            "D": "None"
          },
          "correct": "C",
          "reason": "Kung nasa gitna ng Blue at Green ang Red, ang sequence ay Blue-Red-Green o Green-Red-Blue. Dahil hindi katabi ng Yellow ang Green, dapat katabi ng Blue ang Yellow: Yellow - Blue - Red - Green."
        },
        "27": {
          "question": "No reptile is warm-blooded. All mammals are warm-blooded. Therefore:",
          "choices": {
            "A": "Some mammals are reptiles.",
            "B": "No mammal is a reptile.",
            "C": "All warm-blooded animals are mammals.",
            "D": "Reptiles are cold-blooded mammals."
          },
          "correct": "B",
          "reason": "Magkahiwalay ang dalawang grupo dahil lahat ng mammal ay warm-blooded habang walang reptile ang warm-blooded."
        },
        "28": {
          "question": "Analogy: Doctor : Hospital :: Teacher : ___",
          "choices": {
            "A": "Student",
            "B": "Chalk",
            "C": "School",
            "D": "Lesson"
          },
          "correct": "C",
          "reason": "Worker-to-Workplace relationship: Ang doktor ay nagtatrabaho sa ospital; ang guro ay nagtatrabaho sa paaralan."
        },
        "29": {
          "question": "Analogy: Thermometer : Temperature :: Barometer : ___",
          "choices": {
            "A": "Wind speed",
            "B": "Atmospheric pressure",
            "C": "Humidity",
            "D": "Rainfall"
          },
          "correct": "B",
          "reason": "Instrument-to-Measurement: Thermometer para sa temperatura; Barometer para sa atmospheric pressure."
        },
        "30": {
          "question": "Analogy: Author : Novel :: Sculptor : ___",
          "choices": {
            "A": "Chisel",
            "B": "Marble",
            "C": "Statue",
            "D": "Museum"
          },
          "correct": "C",
          "reason": "Creator-to-Creation: Ang author ay gumagawa ng novel; ang sculptor ay gumagawa ng statue."
        }
      }
    },
    {
      "subject": "Analytical Ability",
      "subject_icon": "🧠",
      "topic": "Figures and Pattern Questions",
      "topic_order": 3,
      "questions": {
        "1": {
          "question": "Rotation Pattern: A clock hand points at 12:00 in Figure 1, 3:00 in Figure 2, and 6:00 in Figure 3. Where does it point in Figure 4?",
          "choices": {
            "A": "7:00",
            "B": "8:00",
            "C": "9:00",
            "D": "10:00"
          },
          "correct": "C",
          "reason": "Umiikot ito ng 90° clockwise bawat step (12 → 3 → 6 → 9)."
        },
        "2": {
          "question": "Polygon Sides: Figure 1 is a Triangle (3 sides), Figure 2 is a Square (4 sides), Figure 3 is a Pentagon (5 sides). What is Figure 4?",
          "choices": {
            "A": "Octagon",
            "B": "Hexagon",
            "C": "Heptagon",
            "D": "Circle"
          },
          "correct": "B",
          "reason": "Nadadagdagan ng 1 gilid (side) bawat hakbang (3, 4, 5 → 6 sides = Hexagon)."
        },
        "3": {
          "question": "Shading Alternation: A circle divided into 4 quadrants has the top-left shaded in Fig. 1, top-right in Fig. 2, bottom-right in Fig. 3. Which quadrant is shaded in Fig. 4?",
          "choices": {
            "A": "Top-left",
            "B": "Bottom-left",
            "C": "Top-right",
            "D": "All quadrants"
          },
          "correct": "B",
          "reason": "Ang shade ay lumilipat nang clockwise sa bawat quadrant: Top-Left → Top-Right → Bottom-Right → Bottom-Left."
        },
        "4": {
          "question": "Letter Series: A, C, F, J, O, ___",
          "choices": {
            "A": "S",
            "B": "T",
            "C": "U",
            "D": "V"
          },
          "correct": "C",
          "reason": "Ang pagitan sa alpabeto ay +2, +3, +4, +5, kaya ang susunod ay +6 mula sa O (15th letter): 15 + 6 = 21st letter = U."
        },
        "5": {
          "question": "Letter Series: Z, X, U, Q, L, ___",
          "choices": {
            "A": "E",
            "B": "F",
            "C": "G",
            "D": "H"
          },
          "correct": "B",
          "reason": "Paatras ang bilang: −2, −3, −4, −5, kaya ang susunod ay −6 mula sa L (12th letter): 12 − 6 = 6th letter = F."
        },
        "6": {
          "question": "Alphanumeric Pattern: A1, C3, E5, G7, ___",
          "choices": {
            "A": "H8",
            "B": "I9",
            "C": "J10",
            "D": "I8"
          },
          "correct": "B",
          "reason": "Odd-numbered letters at ang kanilang katumbas na numero sa alpabeto (A=1, C=3, E=5, G=7 → I=9)."
        },
        "7": {
          "question": "Shape Inside Shape: Fig. 1: Small circle inside a large square. Fig. 2: Small square inside a large triangle. Fig. 3: Small triangle inside a large pentagon. What is the rule for the outer shape becoming the next inner shape?",
          "choices": {
            "A": "It disappears completely.",
            "B": "The outer shape of the current figure becomes the inner shape of the next figure.",
            "C": "Both shapes stay the same.",
            "D": "The inner shape grows larger."
          },
          "correct": "B",
          "reason": "Sa Fig. 1, outer ay Square → sa Fig. 2, inner ay Square. Sa Fig. 2, outer ay Triangle → sa Fig. 3, inner ay Triangle."
        },
        "8": {
          "question": "Dot Counting: A domino-style box shows 1 dot on top / 6 on bottom in Fig. 1; 2 on top / 5 on bottom in Fig. 2; 3 on top / 4 on bottom in Fig. 3. What is Fig. 4?",
          "choices": {
            "A": "4 on top / 4 on bottom",
            "B": "4 on top / 3 on bottom",
            "C": "5 on top / 2 on bottom",
            "D": "3 on top / 3 on bottom"
          },
          "correct": "B",
          "reason": "Ang top ay +1 (1, 2, 3 → 4), at ang bottom ay −1 (6, 5, 4 → 3). Laging 7 ang sum ng bawat domino."
        },
        "9": {
          "question": "Arrow Rotation (Counter-Clockwise): An arrow points North in Fig. 1, West in Fig. 2, South in Fig. 3. Where does it point in Fig. 4?",
          "choices": {
            "A": "North",
            "B": "East",
            "C": "North-East",
            "D": "South-West"
          },
          "correct": "B",
          "reason": "Umiikot ito ng 90° counter-clockwise (pakaliwa): North → West → South → East."
        },
        "10": {
          "question": "45-Degree Rotation: An arrow points North in Fig. 1, North-East in Fig. 2, East in Fig. 3. Where does it point in Fig. 4?",
          "choices": {
            "A": "South",
            "B": "South-East",
            "C": "South-West",
            "D": "West"
          },
          "correct": "B",
          "reason": "Umiikot ng 45° clockwise bawat step: N → NE → E → SE."
        },
        "11": {
          "question": "Mirror Reflection: What does the capital letter R look like when reflected horizontally across a vertical mirror?",
          "choices": {
            "A": "Upside-down R",
            "B": "Backward-facing Я",
            "C": "Normal R",
            "D": "Letter B"
          },
          "correct": "B",
          "reason": "Sa vertical mirror reflection, ang kaliwa ay nagiging kanan (lateral inversion)."
        },
        "12": {
          "question": "Symmetry: Which of the following capital letters has BOTH vertical and horizontal lines of symmetry?",
          "choices": {
            "A": "A",
            "B": "E",
            "C": "H",
            "D": "T"
          },
          "correct": "C",
          "reason": "Ang letrang H ay pareho pa rin kahit hatiin nang patayo (vertical) o pahiga (horizontal)."
        },
        "13": {
          "question": "Line Addition: Fig. 1 has 1 vertical line (|). Fig. 2 forms an L (|_). Fig. 3 forms a U (|_|). What is Fig. 4?",
          "choices": {
            "A": "A triangle",
            "B": "A closed square ([])",
            "C": "A circle",
            "D": "Two parallel lines"
          },
          "correct": "B",
          "reason": "Nagdadagdag ng isang linya bawat step para makabuo ng sarado at kumpletong parisukat (square)."
        },
        "14": {
          "question": "Alternating Colors: Fig. 1: Black Circle. Fig. 2: White Square. Fig. 3: Black Triangle. Fig. 4: White Circle. What is Fig. 5?",
          "choices": {
            "A": "White Square",
            "B": "Black Square",
            "C": "Black Circle",
            "D": "White Triangle"
          },
          "correct": "B",
          "reason": "Dalawang pattern ang sabay na umiikot: Kulay (Black, White, Black, White → Black) at Hugis (Circle, Square, Triangle, Circle → Square)."
        },
        "15": {
          "question": "3x3 Grid Matrix Logic:\nRow 1: [1 Circle] [2 Circles] [3 Circles]\nRow 2: [1 Square] [2 Squares] [3 Squares]\nRow 3: [1 Triangle] [2 Triangles] [?]",
          "choices": {
            "A": "1 Triangle",
            "B": "3 Squares",
            "C": "3 Triangles",
            "D": "4 Triangles"
          },
          "correct": "C",
          "reason": "Bawat row ay may parehong hugis at nadadagdagan ang bilang mula 1, 2, hanggang 3."
        },
        "16": {
          "question": "Grid Subtraction Logic:\nColumn 1 has a circle with 5 dots.\nColumn 2 has a circle with 3 dots.\nColumn 3 has a circle with 2 dots.\nWhat is the rule across each row?",
          "choices": {
            "A": "Col 1 + Col 2 = Col 3",
            "B": "Col 1 - Col 2 = Col 3",
            "C": "Col 1 × Col 2 = Col 3",
            "D": "All columns are equal"
          },
          "correct": "B",
          "reason": "5 dots − 3 dots = 2 dots."
        },
        "17": {
          "question": "Odd One Out (Visual Properties): Which figure does NOT belong to the group?",
          "choices": {
            "A": "Square",
            "B": "Rectangle",
            "C": "Rhombus",
            "D": "Pentagon"
          },
          "correct": "D",
          "reason": "Ang Square, Rectangle, at Rhombus ay pare-parehong quadrilaterals (4 sides), samantalang ang Pentagon ay may 5 sides."
        },
        "18": {
          "question": "Odd One Out (Lines vs. Curves): Which capital letter does NOT belong to the group?",
          "choices": {
            "A": "E",
            "B": "F",
            "C": "H",
            "D": "S"
          },
          "correct": "D",
          "reason": "Ang E, F, at H ay binubuo lamang ng mga tuwid na linya (straight lines), habang ang S ay kurba (curved line)."
        },
        "19": {
          "question": "Cube Folding (Net of a Cube): On a standard die where opposite faces always add up to 7, if the top face shows 2 and the front face shows 3, what number is on the bottom face?",
          "choices": {
            "A": "4",
            "B": "5",
            "C": "6",
            "D": "1"
          },
          "correct": "B",
          "reason": "Opposite ng top ay bottom. Dahil 2 + 5 = 7, ang nasa ilalim ay 5."
        },
        "20": {
          "question": "Letter Matrix:\nRow 1: A B C\nRow 2: D E F\nRow 3: G H ?",
          "choices": {
            "A": "J",
            "B": "I",
            "C": "K",
            "D": "L"
          },
          "correct": "B",
          "reason": "Sunod-sunod na letra sa alpabeto mula kaliwa pakanan: G, H → I."
        },
        "21": {
          "question": "Double Letter Series: AZ, BY, CX, DW, ___",
          "choices": {
            "A": "EV",
            "B": "EU",
            "C": "FV",
            "D": "EW"
          },
          "correct": "A",
          "reason": "Ang unang letra ay paabante (A, B, C, D → E) at ang ikalawang letra ay paatras (Z, Y, X, W → V)."
        },
        "22": {
          "question": "Size & Shading Pattern:\nFig. 1: Large Shaded Circle\nFig. 2: Medium Unshaded Circle\nFig. 3: Small Shaded Circle\nFig. 4: Large Unshaded Square\nFig. 5: Medium Shaded Square\nWhat is Fig. 6?",
          "choices": {
            "A": "Small Shaded Square",
            "B": "Small Unshaded Square",
            "C": "Large Shaded Square",
            "D": "Small Unshaded Circle"
          },
          "correct": "B",
          "reason": "Size: Large → Medium → Small. Shading: Shaded → Unshaded → Shaded → Unshaded → Shaded → Unshaded. Hugis: Square."
        },
        "23": {
          "question": "Intersection Counting: Fig. 1 shows two parallel lines (0 intersections). Fig. 2 shows two lines crossing each other like an X (1 intersection). Fig. 3 shows a triangle formed by 3 intersecting lines (3 intersections). How many intersections are formed by 4 mutually intersecting lines (where no three meet at one point)?",
          "choices": {
            "A": "4",
            "B": "5",
            "C": "6",
            "D": "8"
          },
          "correct": "C",
          "reason": "Formula para sa maximum intersections ng n lines: n(n−1)/2 = (4 × 3)/2 = 6."
        },
        "24": {
          "question": "Diagonal Movement: In a 3×3 grid, a star starts at the Top-Left corner (Row 1, Col 1) in Fig. 1, moves to the Center (Row 2, Col 2) in Fig. 2. Where is it in Fig. 3?",
          "choices": {
            "A": "Top-Right",
            "B": "Bottom-Left",
            "C": "Bottom-Right",
            "D": "Middle-Right"
          },
          "correct": "C",
          "reason": "Gumagalaw ito nang pahilis (diagonally) pababa sa kanan: (1,1) → (2,2) → (3,3) (Bottom-Right)."
        },
        "25": {
          "question": "Letter Series: B, E, H, K, N, ___",
          "choices": {
            "A": "P",
            "B": "Q",
            "C": "R",
            "D": "S"
          },
          "correct": "B",
          "reason": "Bawat hakbang ay +3 sa alpabeto: B → E → H → K → N → Q."
        },
        "26": {
          "question": "Pattern in Triangles (Numbers at Vertices):\nTriangle 1: Top = 2, Left = 3, Right = 4 → Center = 9\nTriangle 2: Top = 5, Left = 1, Right = 6 → Center = 12\nTriangle 3: Top = 4, Left = 7, Right = 3 → Center = ?",
          "choices": {
            "A": "12",
            "B": "14",
            "C": "15",
            "D": "84"
          },
          "correct": "B",
          "reason": "Ang numero sa gitna ay ang sum ng tatlong sulok: 4 + 7 + 3 = 14."
        },
        "27": {
          "question": "Pattern in Triangles (Multiplication & Subtraction):\nTriangle 1: Top = 4, Left = 5, Bottom = 2 → Center = 18\nTriangle 2: Top = 6, Left = 3, Bottom = 4 → Center = 14\nTriangle 3: Top = 7, Left = 4, Bottom = 5 → Center = ?",
          "choices": {
            "A": "23",
            "B": "28",
            "C": "33",
            "D": "16"
          },
          "correct": "A",
          "reason": "Rule: (Top × Left) − Bottom = Center. Check: (4×5)−2=18; (6×3)−4=14. Kaya (7×4)−5 = 28−5 = 23."
        },
        "28": {
          "question": "Alphanumeric Series: Z1A, Y2B, X3C, W4D, ___",
          "choices": {
            "A": "V5E",
            "B": "U5E",
            "C": "V6E",
            "D": "V5F"
          },
          "correct": "A",
          "reason": "Unang letra paatras (Z, Y, X, W → V), gitnang numero +1 (1, 2, 3, 4 → 5), huling letra paabante (A, B, C, D → E)."
        },
        "29": {
          "question": "Rotation + Reflection: A letter b is reflected vertically (left-to-right) to become d. Next, d is flipped upside-down (horizontally) to become p. If p is reflected vertically (left-to-right), what letter does it become?",
          "choices": {
            "A": "b",
            "B": "d",
            "C": "q",
            "D": "g"
          },
          "correct": "C",
          "reason": "Kapag binaligtad nang pakaliwa-pakanan ang p, ang bilog ay lilipat sa kaliwa habang nasa ibaba pa rin ang buntot, na nagiging q."
        },
        "30": {
          "question": "Number-Shape Correspondence: Circle = 1, Triangle = 3, Square = 4. What is the value of Square + Triangle − Circle?",
          "choices": {
            "A": "5",
            "B": "6",
            "C": "7",
            "D": "8"
          },
          "correct": "B",
          "reason": "Ang bawat hugis ay katumbas ng bilang ng gilid/kurba nito: 4 + 3 − 1 = 6."
        }
      }
    },
    {
      "subject": "General Information",
      "subject_icon": "🏛️",
      "topic": "Philippine Constitution",
      "topic_order": 1,
      "questions": {
        "1": {
          "question": "When was the 1987 Philippine Constitution ratified?",
          "choices": {
            "A": "February 2, 1987",
            "B": "February 11, 1987",
            "C": "June 12, 1987",
            "D": "January 1, 1987"
          },
          "correct": "A",
          "reason": "Na-ratify ang 1987 Constitution through a plebiscite noong February 2, 1987. It was proclaimed in force on February 11, 1987."
        },
        "2": {
          "question": "Where does sovereignty reside under the 1987 Constitution?",
          "choices": {
            "A": "Congress",
            "B": "The President",
            "C": "The people",
            "D": "The Supreme Court"
          },
          "correct": "C",
          "reason": "The Constitution states that sovereignty resides in the people, and all government authority emanates from them. Ibig sabihin, ang kapangyarihan ng gobyerno ay nagmumula sa mamamayan."
        },
        "3": {
          "question": "What is the supreme law of the Philippines?",
          "choices": {
            "A": "Civil Code",
            "B": "1987 Constitution",
            "C": "Revised Penal Code",
            "D": "Local Government Code"
          },
          "correct": "B",
          "reason": "The Constitution is the highest law of the land. Other laws and government actions must not conflict with it."
        },
        "4": {
          "question": "Which branch of government makes laws?",
          "choices": {
            "A": "Executive",
            "B": "Legislative",
            "C": "Judiciary",
            "D": "Constitutional commissions"
          },
          "correct": "B",
          "reason": "Congress, composed of the Senate and House of Representatives, is responsible for making laws."
        },
        "5": {
          "question": "Which branch implements and enforces laws?",
          "choices": {
            "A": "Executive",
            "B": "Legislative",
            "C": "Judiciary",
            "D": "Commission on Audit"
          },
          "correct": "A",
          "reason": "The Executive Branch, headed by the President, implements and enforces laws."
        },
        "6": {
          "question": "Which branch interprets laws and settles legal disputes?",
          "choices": {
            "A": "Legislative",
            "B": "Executive",
            "C": "Judiciary",
            "D": "Local government"
          },
          "correct": "C",
          "reason": "The Judiciary, led by the Supreme Court, interprets laws and decides cases."
        },
        "7": {
          "question": "How many senators are there in the Philippine Senate?",
          "choices": {
            "A": "12",
            "B": "18",
            "C": "24",
            "D": "30"
          },
          "correct": "C",
          "reason": "The Senate is composed of 24 senators elected at large by qualified voters."
        },
        "8": {
          "question": "What is the term of office of a senator?",
          "choices": {
            "A": "Three years",
            "B": "Four years",
            "C": "Five years",
            "D": "Six years"
          },
          "correct": "D",
          "reason": "Senators serve six-year terms and may not serve more than two consecutive terms."
        },
        "9": {
          "question": "What is the term of office of members of the House of Representatives?",
          "choices": {
            "A": "Three years",
            "B": "Four years",
            "C": "Five years",
            "D": "Six years"
          },
          "correct": "A",
          "reason": "Members of the House generally serve three-year terms and may not serve more than three consecutive terms."
        },
        "10": {
          "question": "What is the minimum age requirement for a Philippine President?",
          "choices": {
            "A": "35 years old",
            "B": "40 years old",
            "C": "45 years old",
            "D": "50 years old"
          },
          "correct": "B",
          "reason": "A presidential candidate must be at least 40 years old on election day."
        },
        "11": {
          "question": "What is the term of office of the President of the Philippines?",
          "choices": {
            "A": "Three years",
            "B": "Four years",
            "C": "Six years",
            "D": "Eight years"
          },
          "correct": "C",
          "reason": "The President serves a six-year term and is not eligible for reelection."
        },
        "12": {
          "question": "Who succeeds the President if the President dies, becomes permanently disabled, is removed, or resigns?",
          "choices": {
            "A": "Senate President",
            "B": "Chief Justice",
            "C": "Vice President",
            "D": "Speaker of the House"
          },
          "correct": "C",
          "reason": "The Vice President succeeds to the presidency under the circumstances specified in the Constitution."
        },
        "13": {
          "question": "What is the minimum voting age in the Philippines?",
          "choices": {
            "A": "16",
            "B": "18",
            "C": "21",
            "D": "25"
          },
          "correct": "B",
          "reason": "A Filipino citizen who is at least 18 years old and meets the other legal requirements may vote."
        },
        "14": {
          "question": "Which article of the Constitution contains the Bill of Rights?",
          "choices": {
            "A": "Article II",
            "B": "Article III",
            "C": "Article IV",
            "D": "Article V"
          },
          "correct": "B",
          "reason": "Article III protects fundamental rights and freedoms, including due process, equal protection, and freedom of expression."
        },
        "15": {
          "question": "What does due process mean?",
          "choices": {
            "A": "Government may punish anyone without explanation.",
            "B": "A person must be treated fairly under established legal procedures.",
            "C": "Only wealthy people can receive legal protection.",
            "D": "Police may arrest anyone without legal grounds."
          },
          "correct": "B",
          "reason": "Due process protects people from arbitrary government action. Hindi basta-basta puwedeng parusahan ang isang tao without following the law."
        },
        "16": {
          "question": "What does equal protection of the laws mean?",
          "choices": {
            "A": "Everyone must receive identical salaries.",
            "B": "Everyone is entitled to equal protection under the law.",
            "C": "Government officials have more legal rights.",
            "D": "Only citizens with jobs are protected."
          },
          "correct": "B",
          "reason": "The government must treat people fairly and may not arbitrarily discriminate against similarly situated persons."
        },
        "17": {
          "question": "Which right protects people from unreasonable searches and seizures?",
          "choices": {
            "A": "Freedom of religion",
            "B": "Right to privacy of communication",
            "C": "Right against unreasonable searches and seizures",
            "D": "Right to education"
          },
          "correct": "C",
          "reason": "Article III, Section 2 protects people against unreasonable searches and seizures. Warrants generally require probable cause determined personally by a judge."
        },
        "18": {
          "question": "What is the purpose of a writ of habeas corpus?",
          "choices": {
            "A": "To determine ownership of land",
            "B": "To question the legality of a person's detention",
            "C": "To register a business",
            "D": "To cancel an election"
          },
          "correct": "B",
          "reason": "The writ allows a court to examine whether a person's detention is lawful. It is not simply a guarantee that someone will immediately be released."
        },
        "19": {
          "question": "Which freedom allows people to express their opinions peacefully?",
          "choices": {
            "A": "Freedom of speech and expression",
            "B": "Freedom from taxation",
            "C": "Freedom from all laws",
            "D": "Freedom to ignore court orders"
          },
          "correct": "A",
          "reason": "People have the right to express opinions, subject to lawful limitations and applicable rules."
        },
        "20": {
          "question": "What does the principle of separation of powers prevent?",
          "choices": {
            "A": "People from voting",
            "B": "One branch from exercising all government powers",
            "C": "Courts from interpreting laws",
            "D": "Congress from creating laws"
          },
          "correct": "B",
          "reason": "Government powers are divided among the three branches to prevent abuse and concentration of authority."
        },
        "21": {
          "question": "What is the main purpose of checks and balances?",
          "choices": {
            "A": "To remove all government officials",
            "B": "To allow branches to limit and check one another",
            "C": "To make the President more powerful",
            "D": "To eliminate the courts"
          },
          "correct": "B",
          "reason": "Each branch has certain powers to prevent another branch from abusing its authority."
        },
        "22": {
          "question": "Which constitutional body audits government funds and expenditures?",
          "choices": {
            "A": "COMELEC",
            "B": "Civil Service Commission",
            "C": "Commission on Audit",
            "D": "Commission on Human Rights"
          },
          "correct": "C",
          "reason": "The COA examines, audits, and settles government accounts involving public funds and property."
        },
        "23": {
          "question": "Which constitutional commission administers and enforces election laws?",
          "choices": {
            "A": "COA",
            "B": "COMELEC",
            "C": "CSC",
            "D": "CHR"
          },
          "correct": "B",
          "reason": "The Commission on Elections is responsible for administering elections and enforcing election laws."
        },
        "24": {
          "question": "Which constitutional commission promotes an efficient and professional civil service?",
          "choices": {
            "A": "CSC",
            "B": "COA",
            "C": "COMELEC",
            "D": "CHR"
          },
          "correct": "A",
          "reason": "The Civil Service Commission oversees the government personnel system and promotes merit and fitness in public service."
        },
        "25": {
          "question": "Is the Commission on Human Rights one of the three Constitutional Commissions under Article IX?",
          "choices": {
            "A": "Yes",
            "B": "No",
            "C": "Only during elections",
            "D": "Only during martial law"
          },
          "correct": "B",
          "reason": "The three Constitutional Commissions are the CSC, COMELEC, and COA. The CHR is a separate independent office established under Article XIII."
        },
        "26": {
          "question": "Who has the power to declare martial law under the Constitution?",
          "choices": {
            "A": "Chief Justice",
            "B": "Senate President",
            "C": "President",
            "D": "Speaker of the House"
          },
          "correct": "C",
          "reason": "The President may declare martial law or suspend the privilege of the writ of habeas corpus in cases of invasion or rebellion when public safety requires it."
        },
        "27": {
          "question": "What is the maximum initial period of a martial law declaration under the Constitution?",
          "choices": {
            "A": "15 days",
            "B": "30 days",
            "C": "60 days",
            "D": "90 days"
          },
          "correct": "C",
          "reason": "The initial declaration cannot exceed 60 days. Congress may revoke or extend it under the conditions and procedures provided by the Constitution."
        },
        "28": {
          "question": "What is the main purpose of the constitutional provision on national territory?",
          "choices": {
            "A": "To establish private ownership of all islands",
            "B": "To define the territory under Philippine sovereignty or jurisdiction",
            "C": "To remove maritime boundaries",
            "D": "To give other countries control over Philippine waters"
          },
          "correct": "B",
          "reason": "Article I describes the Philippine archipelago and other territories over which the Philippines has sovereignty or jurisdiction."
        },
        "29": {
          "question": "Which institution has the power of judicial review?",
          "choices": {
            "A": "Supreme Court",
            "B": "Department of Education",
            "C": "Department of Agriculture",
            "D": "Bureau of Internal Revenue"
          },
          "correct": "A",
          "reason": "The Supreme Court may review cases involving the constitutionality or validity of government acts, subject to the requirements of judicial review."
        },
        "30": {
          "question": "What is the primary purpose of the Constitution's Preamble?",
          "choices": {
            "A": "To list all criminal offenses",
            "B": "To state the ideals and purposes of the Filipino people",
            "C": "To establish the national budget",
            "D": "To appoint government officials"
          },
          "correct": "B",
          "reason": "The Preamble introduces the Constitution's goals and guiding principles, such as justice, freedom, equality, peace, and the common good."
        }
      }
    },
    {
      "subject": "General Information",
      "subject_icon": "🏛️",
      "topic": "RA 6713 (Code of Conduct)",
      "topic_order": 2,
      "questions": {
        "1": {
          "question": "What is the full title commonly associated with RA 6713?",
          "choices": {
            "A": "Anti-Graft and Corrupt Practices Act",
            "B": "Code of Conduct and Ethical Standards for Public Officials and Employees",
            "C": "Local Government Code",
            "D": "Government Procurement Reform Act"
          },
          "correct": "B",
          "reason": "RA 6713 establishes ethical standards and responsibilities for public officials and employees."
        },
        "2": {
          "question": "What principle does RA 6713 uphold?",
          "choices": {
            "A": "Public office is a private business.",
            "B": "Public office is a public trust.",
            "C": "Public office is a family inheritance.",
            "D": "Public office is a personal privilege."
          },
          "correct": "B",
          "reason": "Public officials are entrusted with authority and must serve the people responsibly."
        },
        "3": {
          "question": "Who are generally covered by RA 6713?",
          "choices": {
            "A": "Only elected officials",
            "B": "Only government department heads",
            "C": "Public officials and employees, whether permanent or temporary",
            "D": "Only private company employees"
          },
          "correct": "C",
          "reason": "The law broadly covers public officials and employees in government, including government-owned or controlled corporations."
        },
        "4": {
          "question": "Which of the following is a norm of conduct under RA 6713?",
          "choices": {
            "A": "Political favoritism",
            "B": "Commitment to public interest",
            "C": "Personal enrichment through office",
            "D": "Discrimination against citizens"
          },
          "correct": "B",
          "reason": "Public officials must prioritize public interest over personal interest."
        },
        "5": {
          "question": "What does professionalism mean in public service?",
          "choices": {
            "A": "Doing work only when supervised",
            "B": "Performing duties with competence and proper conduct",
            "C": "Favoring friends and relatives",
            "D": "Avoiding responsibility"
          },
          "correct": "B",
          "reason": "Public employees should perform their duties professionally, competently, and with dedication."
        },
        "6": {
          "question": "What does political neutrality require?",
          "choices": {
            "A": "Favoring supporters of the administration",
            "B": "Providing service without unfair political discrimination",
            "C": "Refusing service to political opponents",
            "D": "Campaigning while performing official duties"
          },
          "correct": "B",
          "reason": "Government services must be provided fairly regardless of a person's political beliefs or affiliations."
        },
        "7": {
          "question": "What does responsiveness to the public mean?",
          "choices": {
            "A": "Ignoring complaints",
            "B": "Providing prompt, courteous, and adequate service",
            "C": "Serving only wealthy citizens",
            "D": "Delaying documents intentionally"
          },
          "correct": "B",
          "reason": "Government employees should respond to public needs efficiently and respectfully."
        },
        "8": {
          "question": "What does simple living mean under RA 6713?",
          "choices": {
            "A": "Public employees cannot own property.",
            "B": "Public employees should live within their lawful means and avoid extravagant lifestyles.",
            "C": "Public employees must live in rural areas.",
            "D": "Public employees cannot travel."
          },
          "correct": "B",
          "reason": "Officials should avoid extravagant or ostentatious displays of wealth inconsistent with their income and position."
        },
        "9": {
          "question": "What does commitment to democracy require from public officials?",
          "choices": {
            "A": "Respecting democratic principles and institutions",
            "B": "Ignoring election results",
            "C": "Preventing citizens from participating",
            "D": "Rejecting constitutional rights"
          },
          "correct": "A",
          "reason": "Public servants must uphold democracy and respect the Constitution and democratic processes."
        },
        "10": {
          "question": "What is the meaning of justness and sincerity?",
          "choices": {
            "A": "Being fair, honest, and truthful",
            "B": "Favoring personal friends",
            "C": "Hiding government transactions",
            "D": "Avoiding public accountability"
          },
          "correct": "A",
          "reason": "Public officials should act fairly and honestly in their dealings with the public."
        },
        "11": {
          "question": "What is a SALN?",
          "choices": {
            "A": "Statement of Annual Legal Notice",
            "B": "Statement of Assets, Liabilities and Net Worth",
            "C": "Summary of Administrative Legal Numbers",
            "D": "System of Approved Local Needs"
          },
          "correct": "B",
          "reason": "SALN is a declaration of an official's assets, liabilities, and net worth, together with required disclosures."
        },
        "12": {
          "question": "When must a covered public official generally file a SALN after assuming office?",
          "choices": {
            "A": "Within 10 days",
            "B": "Within 30 days",
            "C": "Within 60 days",
            "D": "Within one year"
          },
          "correct": "B",
          "reason": "RA 6713 requires filing within 30 days after assumption of office."
        },
        "13": {
          "question": "When is the annual SALN generally due?",
          "choices": {
            "A": "January 1",
            "B": "February 14",
            "C": "April 30",
            "D": "December 31"
          },
          "correct": "C",
          "reason": "The annual SALN must generally be filed on or before April 30 of every year."
        },
        "14": {
          "question": "When must a covered official file a SALN after separation from service?",
          "choices": {
            "A": "Within 15 days",
            "B": "Within 30 days",
            "C": "Within 90 days",
            "D": "Within one year"
          },
          "correct": "B",
          "reason": "The law requires filing within 30 days after separation from the service."
        },
        "15": {
          "question": "Which of the following should be disclosed in a SALN?",
          "choices": {
            "A": "Assets and liabilities",
            "B": "Favorite food",
            "C": "Personal hobbies only",
            "D": "Favorite television shows"
          },
          "correct": "A",
          "reason": "SALN includes real and personal property, other assets, liabilities, and business interests and financial connections."
        },
        "16": {
          "question": "What is a conflict of interest?",
          "choices": {
            "A": "A situation where personal interests may improperly influence official duties",
            "B": "A disagreement between two private citizens",
            "C": "A public meeting",
            "D": "A government employee taking a vacation"
          },
          "correct": "A",
          "reason": "A conflict arises when private interests could affect or appear to affect impartial performance of official responsibilities."
        },
        "17": {
          "question": "What should a public official do when a conflict of interest exists under the applicable rules?",
          "choices": {
            "A": "Hide the conflict",
            "B": "Disclose and address it as required by law",
            "C": "Use it for personal benefit",
            "D": "Ignore the matter"
          },
          "correct": "B",
          "reason": "The official must comply with the disclosure and divestment requirements that apply to the particular situation."
        },
        "18": {
          "question": "Which act is prohibited under RA 6713?",
          "choices": {
            "A": "Providing equal service",
            "B": "Disclosing a required conflict",
            "C": "Having a financial or material interest in a transaction requiring approval by one's office, subject to the law",
            "D": "Filing a SALN"
          },
          "correct": "C",
          "reason": "RA 6713 prohibits certain financial and material interests in transactions requiring approval by the official's office."
        },
        "19": {
          "question": "Can a public official use confidential information obtained through office for personal benefit?",
          "choices": {
            "A": "Yes, anytime",
            "B": "Yes, if the amount is small",
            "C": "No",
            "D": "Only during weekends"
          },
          "correct": "C",
          "reason": "Public officials must not misuse confidential or classified information acquired through their official functions."
        },
        "20": {
          "question": "What does RA 6713 say about accepting gifts?",
          "choices": {
            "A": "All gifts are automatically allowed.",
            "B": "Public officials may accept any gift from anyone.",
            "C": "Accepting gifts in connection with official duties may be prohibited, subject to specific legal exceptions.",
            "D": "Gifts are allowed if not reported."
          },
          "correct": "C",
          "reason": "The law prohibits soliciting or accepting gifts connected with official duties or transactions, while recognizing limited exceptions under its provisions."
        },
        "21": {
          "question": "What should a government employee do if offered money to speed up a government transaction unlawfully?",
          "choices": {
            "A": "Accept it",
            "B": "Refuse and report the improper offer through proper channels",
            "C": "Share it with coworkers",
            "D": "Accept it if no one sees"
          },
          "correct": "B",
          "reason": "Bribery and improper benefits violate ethical and legal standards."
        },
        "22": {
          "question": "Which behavior demonstrates accountability?",
          "choices": {
            "A": "Blaming others for every mistake",
            "B": "Taking responsibility for official actions and decisions",
            "C": "Hiding errors",
            "D": "Refusing to explain public transactions"
          },
          "correct": "B",
          "reason": "Public officials are accountable to the people for their conduct and performance."
        },
        "23": {
          "question": "What is the purpose of public disclosure of SALN?",
          "choices": {
            "A": "To promote transparency and accountability",
            "B": "To advertise personal wealth",
            "C": "To eliminate taxes",
            "D": "To give officials business advantages"
          },
          "correct": "A",
          "reason": "SALN requirements help promote honesty and accountability in public service. Access is governed by applicable laws and rules."
        },
        "24": {
          "question": "Which of the following is an example of political neutrality?",
          "choices": {
            "A": "Refusing to process an application because the applicant supports the opposition",
            "B": "Processing applications fairly regardless of political affiliation",
            "C": "Giving priority to campaign supporters",
            "D": "Using government vehicles for political campaigns"
          },
          "correct": "B",
          "reason": "Government employees must not discriminate based on political affiliation."
        },
        "25": {
          "question": "What is the main purpose of the government's Citizen's Charter under the related anti-red-tape framework?",
          "choices": {
            "A": "To hide government procedures",
            "B": "To inform the public about government services, requirements, fees, and processing times",
            "C": "To increase personal favors",
            "D": "To prevent citizens from filing applications"
          },
          "correct": "B",
          "reason": "The Citizen's Charter helps people understand how to access government services. This is associated with anti-red-tape laws, particularly RA 11032."
        },
        "26": {
          "question": "Which action shows commitment to public interest?",
          "choices": {
            "A": "Giving government contracts to friends without lawful process",
            "B": "Prioritizing public welfare over personal gain",
            "C": "Using government property for private business",
            "D": "Delaying public service for personal reasons"
          },
          "correct": "B",
          "reason": "Public interest must come before private or personal interests."
        },
        "27": {
          "question": "What is the general penalty under RA 6713 for violations of the Act?",
          "choices": {
            "A": "Only a verbal warning in all cases",
            "B": "Fine, imprisonment, or both, as provided by the law",
            "C": "Automatic life imprisonment",
            "D": "No penalty"
          },
          "correct": "B",
          "reason": "Section 11 provides penalties that may include a fine, imprisonment, or both. Administrative liability may also arise under applicable rules."
        },
        "28": {
          "question": "What is the main purpose of recognizing exemplary public service?",
          "choices": {
            "A": "To encourage excellent and ethical government service",
            "B": "To reward political loyalty",
            "C": "To exempt officials from laws",
            "D": "To allow officials to avoid accountability"
          },
          "correct": "A",
          "reason": "RA 6713 provides incentives and rewards to encourage exemplary conduct and service."
        },
        "29": {
          "question": "Which statement about government employees is correct?",
          "choices": {
            "A": "They may use their positions to gain personal favors.",
            "B": "They must serve the public with responsibility and integrity.",
            "C": "They are not accountable for their actions.",
            "D": "They may ignore lawful instructions."
          },
          "correct": "B",
          "reason": "Public officials and employees must perform their duties with responsibility, integrity, competence, and loyalty."
        },
        "30": {
          "question": "A government employee gives faster service to a friend while deliberately delaying other applicants. What principle is violated?",
          "choices": {
            "A": "Political neutrality and responsiveness to the public",
            "B": "Freedom of religion",
            "C": "Right to travel",
            "D": "Separation of powers"
          },
          "correct": "A",
          "reason": "Public service should be fair and impartial. Personal relationships should not determine who receives better service."
        }
      }
    },
    {
      "subject": "General Information",
      "subject_icon": "🏛️",
      "topic": "Peace and Human Rights",
      "topic_order": 3,
      "questions": {
        "1": {
          "question": "What are human rights?",
          "choices": {
            "A": "Privileges given only to government officials",
            "B": "Basic rights and freedoms belonging to every person",
            "C": "Benefits available only to wealthy people",
            "D": "Rights given only during elections"
          },
          "correct": "B",
          "reason": "Human rights belong to all people because they are human beings, regardless of nationality, gender, status, or background."
        },
        "2": {
          "question": "Which document is internationally recognized as a foundational statement of human rights?",
          "choices": {
            "A": "Universal Declaration of Human Rights",
            "B": "Local Government Code",
            "C": "Revised Penal Code",
            "D": "National Building Code"
          },
          "correct": "A",
          "reason": "The UDHR was adopted by the United Nations General Assembly on December 10, 1948."
        },
        "3": {
          "question": "When is International Human Rights Day celebrated?",
          "choices": {
            "A": "June 12",
            "B": "August 21",
            "C": "December 10",
            "D": "December 30"
          },
          "correct": "C",
          "reason": "December 10 commemorates the adoption of the Universal Declaration of Human Rights in 1948."
        },
        "4": {
          "question": "Which organization adopted the Universal Declaration of Human Rights?",
          "choices": {
            "A": "ASEAN",
            "B": "United Nations",
            "C": "European Union",
            "D": "World Trade Organization"
          },
          "correct": "B",
          "reason": "The UN General Assembly adopted the UDHR in 1948."
        },
        "5": {
          "question": "What does equality before the law mean?",
          "choices": {
            "A": "Only officials have legal protection.",
            "B": "Everyone is entitled to equal protection under the law.",
            "C": "Wealthy people receive special treatment.",
            "D": "Laws apply only to citizens with jobs."
          },
          "correct": "B",
          "reason": "Every person is entitled to legal protection without arbitrary discrimination."
        },
        "6": {
          "question": "What is discrimination?",
          "choices": {
            "A": "Treating people fairly",
            "B": "Unjust or unequal treatment based on certain characteristics or circumstances",
            "C": "Respecting differences",
            "D": "Protecting people's rights"
          },
          "correct": "B",
          "reason": "Discrimination happens when people are unfairly treated because of characteristics such as sex, race, religion, disability, or other protected grounds."
        },
        "7": {
          "question": "What is freedom of religion?",
          "choices": {
            "A": "The right to practice or not practice a religion, subject to law",
            "B": "The right to force others to follow a religion",
            "C": "The right to ignore all laws",
            "D": "The right to prevent others from worshipping"
          },
          "correct": "A",
          "reason": "People have the freedom to choose, practice, or change their religion or belief, within lawful limits."
        },
        "8": {
          "question": "What is the right to education intended to promote?",
          "choices": {
            "A": "Ignorance",
            "B": "Learning and personal development",
            "C": "Discrimination",
            "D": "Unemployment"
          },
          "correct": "B",
          "reason": "Education helps individuals develop knowledge, skills, and opportunities."
        },
        "9": {
          "question": "What is the meaning of peace?",
          "choices": {
            "A": "Absence of war only",
            "B": "A condition involving security, justice, respect, and cooperation",
            "C": "Complete absence of disagreement",
            "D": "Control by one powerful person"
          },
          "correct": "B",
          "reason": "Peace is more than the absence of war. It also involves fairness, respect for rights, and peaceful ways of resolving conflicts."
        },
        "10": {
          "question": "What is conflict resolution?",
          "choices": {
            "A": "Making disagreements worse",
            "B": "Finding peaceful ways to address disagreements",
            "C": "Avoiding all communication",
            "D": "Using violence to settle disputes"
          },
          "correct": "B",
          "reason": "Conflict resolution involves communication, negotiation, mediation, and other peaceful methods."
        },
        "11": {
          "question": "What is mediation?",
          "choices": {
            "A": "A neutral third party helps disputing parties reach an agreement.",
            "B": "One party forces the other to surrender.",
            "C": "A judge automatically sends someone to prison.",
            "D": "A person ignores the disagreement."
          },
          "correct": "A",
          "reason": "A mediator helps both sides communicate and find a possible solution but generally does not impose the decision."
        },
        "12": {
          "question": "What does tolerance mean?",
          "choices": {
            "A": "Accepting violence",
            "B": "Respecting differences in beliefs, culture, and opinions",
            "C": "Forcing everyone to think alike",
            "D": "Ignoring human rights violations"
          },
          "correct": "B",
          "reason": "Tolerance means respecting diversity, even when other people's beliefs or practices differ from yours."
        },
        "13": {
          "question": "What is gender equality?",
          "choices": {
            "A": "Giving opportunities only to men",
            "B": "Giving equal rights, responsibilities, and opportunities regardless of gender",
            "C": "Giving women fewer opportunities",
            "D": "Preventing women from working"
          },
          "correct": "B",
          "reason": "Gender equality means people should have fair opportunities and rights regardless of gender."
        },
        "14": {
          "question": "What is child labor?",
          "choices": {
            "A": "Any household chore performed by a child",
            "B": "Work that harms a child's development or interferes with education, as defined by law",
            "C": "Every form of learning",
            "D": "Playing after school"
          },
          "correct": "B",
          "reason": "Not all work by children is automatically illegal. Child labor laws prohibit harmful or exploitative work and set age and working-condition restrictions."
        },
        "15": {
          "question": "What is human trafficking?",
          "choices": {
            "A": "Legal tourism",
            "B": "Recruiting, transporting, transferring, harboring, or receiving persons for exploitation through prohibited means or circumstances under the law",
            "C": "Ordinary employment",
            "D": "Voluntary travel"
          },
          "correct": "B",
          "reason": "Human trafficking involves exploitation, such as forced labor or sexual exploitation. It is a serious violation of human rights."
        },
        "16": {
          "question": "Which Philippine law addresses human trafficking?",
          "choices": {
            "A": "RA 9165",
            "B": "RA 9208, as amended",
            "C": "RA 9003",
            "D": "RA 6713"
          },
          "correct": "B",
          "reason": "RA 9208 is the Anti-Trafficking in Persons Act of 2003. It was strengthened by later amendments, including RA 10364 and RA 11862."
        },
        "17": {
          "question": "What is the Commission on Human Rights (CHR)?",
          "choices": {
            "A": "A private company",
            "B": "An independent constitutional office that promotes and protects human rights",
            "C": "A police department",
            "D": "A political party"
          },
          "correct": "B",
          "reason": "The CHR is established under Article XIII of the 1987 Constitution."
        },
        "18": {
          "question": "Which of the following is a function of the CHR?",
          "choices": {
            "A": "Conducting regular national elections",
            "B": "Investigating human rights violations involving civil and political rights",
            "C": "Approving the national budget",
            "D": "Making all criminal laws"
          },
          "correct": "B",
          "reason": "The Constitution gives the CHR authority to investigate these violations, among other functions."
        },
        "19": {
          "question": "What is an extrajudicial killing?",
          "choices": {
            "A": "A killing lawfully carried out after a fair trial",
            "B": "An unlawful killing by, at the instigation of, or with the involvement or acquiescence of state actors, outside lawful judicial process",
            "C": "A natural death",
            "D": "An accidental death in every case"
          },
          "correct": "B",
          "reason": "Extrajudicial killing refers to unlawful deprivation of life outside lawful judicial procedures."
        },
        "20": {
          "question": "What is enforced disappearance?",
          "choices": {
            "A": "A person voluntarily changing residence",
            "B": "Arrest, detention, or abduction by state agents or with state authorization or support, followed by refusal to acknowledge it or concealment of the person's fate or whereabouts",
            "C": "A person losing a personal belonging",
            "D": "A person traveling abroad"
          },
          "correct": "B",
          "reason": "Enforced disappearance involves taking someone into custody and concealing or denying the person's fate or whereabouts."
        },
        "21": {
          "question": "What is the purpose of the writ of amparo in the Philippines?",
          "choices": {
            "A": "To protect the right to education",
            "B": "To protect the rights to life, liberty, and security against certain unlawful acts or omissions",
            "C": "To settle land ownership disputes",
            "D": "To cancel government taxes"
          },
          "correct": "B",
          "reason": "The writ of amparo is a legal remedy that may be used in cases involving extralegal killings, enforced disappearances, and threats to life, liberty, or security."
        },
        "22": {
          "question": "What is the purpose of the writ of habeas data?",
          "choices": {
            "A": "To protect a person's privacy concerning life, liberty, or security against unlawful gathering or storage of information",
            "B": "To collect taxes",
            "C": "To transfer property ownership",
            "D": "To register voters"
          },
          "correct": "A",
          "reason": "Habeas data is a remedy involving unlawful or inaccurate information affecting a person's privacy, life, liberty, or security."
        },
        "23": {
          "question": "What does International Humanitarian Law (IHL) primarily regulate?",
          "choices": {
            "A": "International trade",
            "B": "Conduct during armed conflict and protection of persons affected by it",
            "C": "Local elections",
            "D": "Tax collection"
          },
          "correct": "B",
          "reason": "IHL limits the effects of armed conflict and protects people who are not, or are no longer, participating in hostilities."
        },
        "24": {
          "question": "Which people are protected under the Geneva Conventions and their applicable rules?",
          "choices": {
            "A": "Only military commanders",
            "B": "Wounded and sick persons, prisoners of war, and civilians, among others",
            "C": "Only government officials",
            "D": "Only foreign tourists"
          },
          "correct": "B",
          "reason": "IHL provides protections to people affected by armed conflict, including those who are not actively fighting."
        },
        "25": {
          "question": "What is the principle of distinction in International Humanitarian Law?",
          "choices": {
            "A": "Attacks must distinguish between civilians and combatants.",
            "B": "All people may be attacked during war.",
            "C": "Civilians may always be targeted.",
            "D": "Military forces may ignore humanitarian rules."
          },
          "correct": "A",
          "reason": "Parties to a conflict must distinguish between civilian persons and combatants, and between civilian objects and military objectives."
        },
        "26": {
          "question": "What is the principle of proportionality in IHL?",
          "choices": {
            "A": "Any amount of civilian harm is acceptable.",
            "B": "An attack is prohibited if expected incidental civilian harm would be excessive in relation to the concrete and direct military advantage anticipated.",
            "C": "Civilians have no protection.",
            "D": "Every military attack is automatically lawful."
          },
          "correct": "B",
          "reason": "The principle prohibits attacks expected to cause excessive incidental civilian harm compared with the anticipated military advantage."
        },
        "27": {
          "question": "What does the principle of humanity emphasize?",
          "choices": {
            "A": "Unnecessary suffering should be prevented.",
            "B": "Civilians should be punished.",
            "C": "Prisoners should be mistreated.",
            "D": "All forms of violence are acceptable."
          },
          "correct": "A",
          "reason": "Humanity is a basic humanitarian principle that seeks to reduce suffering and protect human dignity during armed conflict."
        },
        "28": {
          "question": "What is the International Criminal Court (ICC)?",
          "choices": {
            "A": "A Philippine local court",
            "B": "An international court that prosecutes individuals for certain serious international crimes",
            "C": "A United Nations police department",
            "D": "A national election commission"
          },
          "correct": "B",
          "reason": "The ICC deals with individual criminal responsibility for genocide, crimes against humanity, war crimes, and the crime of aggression, subject to its jurisdictional rules."
        },
        "29": {
          "question": "What are the four crimes under the Rome Statute of the ICC?",
          "choices": {
            "A": "Theft, robbery, fraud, and arson",
            "B": "Genocide, crimes against humanity, war crimes, and aggression",
            "C": "Tax evasion, smuggling, bribery, and murder",
            "D": "Trespassing, assault, libel, and cybercrime"
          },
          "correct": "B",
          "reason": "These are the four core crimes under the Rome Statute. The ICC's jurisdiction over aggression has additional conditions."
        },
        "30": {
          "question": "Which action best promotes peace in a community?",
          "choices": {
            "A": "Spreading false information",
            "B": "Respecting others and resolving disagreements peacefully",
            "C": "Encouraging discrimination",
            "D": "Using violence to settle arguments"
          },
          "correct": "B",
          "reason": "Peace begins with respect, cooperation, dialogue, and peaceful conflict resolution."
        }
      }
    },
    {
      "subject": "General Information",
      "subject_icon": "🏛️",
      "topic": "Environmental Management",
      "topic_order": 4,
      "questions": {
        "1": {
          "question": "What is the environment?",
          "choices": {
            "A": "Only forests and mountains",
            "B": "The natural and human-made surroundings in which living things exist",
            "C": "Only buildings and roads",
            "D": "Only animals"
          },
          "correct": "B",
          "reason": "The environment includes air, water, land, plants, animals, people, and their surroundings."
        },
        "2": {
          "question": "What is environmental protection?",
          "choices": {
            "A": "Destroying natural resources",
            "B": "Preventing environmental damage and conserving natural resources",
            "C": "Increasing pollution",
            "D": "Cutting down all forests"
          },
          "correct": "B",
          "reason": "Environmental protection means taking action to preserve nature and reduce harmful human activities."
        },
        "3": {
          "question": "What is biodiversity?",
          "choices": {
            "A": "The number of buildings in a city",
            "B": "The variety of life within species, between species, and among ecosystems",
            "C": "The amount of rainfall in one area",
            "D": "The number of people in a country"
          },
          "correct": "B",
          "reason": "Biodiversity includes genetic diversity, species diversity, and ecosystem diversity."
        },
        "4": {
          "question": "What is deforestation?",
          "choices": {
            "A": "Planting trees",
            "B": "The clearing or removal of forests",
            "C": "Protecting wildlife",
            "D": "Cleaning rivers"
          },
          "correct": "B",
          "reason": "Deforestation is the loss or removal of forest cover, often caused by logging, agriculture, and land development."
        },
        "5": {
          "question": "What is one major effect of deforestation?",
          "choices": {
            "A": "Increased wildlife habitat",
            "B": "Soil erosion and loss of biodiversity",
            "C": "Cleaner air in every case",
            "D": "Increased forest cover"
          },
          "correct": "B",
          "reason": "Removing trees can expose soil to erosion and destroy habitats for many species."
        },
        "6": {
          "question": "What is climate change?",
          "choices": {
            "A": "A temporary change in daily weather",
            "B": "Long-term changes in temperature and weather patterns",
            "C": "A change in the time of sunrise",
            "D": "A single rainstorm"
          },
          "correct": "B",
          "reason": "Climate change refers to long-term shifts in climate patterns. Human activities, especially greenhouse gas emissions, are a major cause of recent global warming."
        },
        "7": {
          "question": "Which gas is a major contributor to human-caused global warming?",
          "choices": {
            "A": "Oxygen",
            "B": "Carbon dioxide",
            "C": "Helium",
            "D": "Neon"
          },
          "correct": "B",
          "reason": "Carbon dioxide is a major greenhouse gas released through activities such as burning fossil fuels and deforestation."
        },
        "8": {
          "question": "What is the greenhouse effect?",
          "choices": {
            "A": "The process by which certain gases trap heat in Earth's atmosphere",
            "B": "The process of creating artificial forests",
            "C": "The movement of ocean waves",
            "D": "The formation of earthquakes"
          },
          "correct": "A",
          "reason": "Greenhouse gases absorb and re-emit heat, helping warm the planet. Human activities have intensified this natural process."
        },
        "9": {
          "question": "What is global warming?",
          "choices": {
            "A": "A long-term increase in Earth's average surface temperature",
            "B": "A decrease in all ocean temperatures",
            "C": "A daily weather forecast",
            "D": "The cooling of every country"
          },
          "correct": "A",
          "reason": "Global warming is the long-term rise in Earth's average temperature, largely driven by increased greenhouse gases."
        },
        "10": {
          "question": "What is El Niño?",
          "choices": {
            "A": "Unusually warm sea-surface temperatures in the central and eastern equatorial Pacific",
            "B": "A volcanic eruption",
            "C": "A type of earthquake",
            "D": "A permanent change in ocean level"
          },
          "correct": "A",
          "reason": "El Niño is part of a natural climate pattern. It can contribute to below-normal rainfall and drought conditions in parts of the Philippines."
        },
        "11": {
          "question": "What is La Niña?",
          "choices": {
            "A": "Unusually cool sea-surface temperatures in the central and eastern equatorial Pacific",
            "B": "A tropical forest",
            "C": "A type of pollution",
            "D": "A volcanic storm"
          },
          "correct": "A",
          "reason": "La Niña is the opposite phase of El Niño. It can contribute to above-normal rainfall in parts of the Philippines."
        },
        "12": {
          "question": "Which Philippine law is known as the Ecological Solid Waste Management Act of 2000?",
          "choices": {
            "A": "RA 8749",
            "B": "RA 9003",
            "C": "RA 9275",
            "D": "RA 9729"
          },
          "correct": "B",
          "reason": "RA 9003 establishes the country's ecological solid waste management framework, including segregation, recycling, composting, and proper disposal."
        },
        "13": {
          "question": "What does waste segregation mean?",
          "choices": {
            "A": "Mixing all waste together",
            "B": "Separating waste according to its type",
            "C": "Burning all garbage",
            "D": "Throwing waste into rivers"
          },
          "correct": "B",
          "reason": "Waste segregation separates materials so that recyclables, compostables, residuals, and special wastes can be handled properly."
        },
        "14": {
          "question": "Under RA 9003, which is an example of biodegradable waste?",
          "choices": {
            "A": "Plastic bottle",
            "B": "Vegetable peelings",
            "C": "Glass bottle",
            "D": "Metal can"
          },
          "correct": "B",
          "reason": "Vegetable peelings can naturally decompose and may be composted."
        },
        "15": {
          "question": "Which of the following is recyclable?",
          "choices": {
            "A": "Used glass bottle",
            "B": "Rotten food",
            "C": "Leftover soup",
            "D": "Garden leaves"
          },
          "correct": "A",
          "reason": "Glass bottles can be collected and processed for recycling when properly sorted."
        },
        "16": {
          "question": "What is composting?",
          "choices": {
            "A": "Burning plastic",
            "B": "Turning biodegradable waste into a soil-improving material",
            "C": "Throwing garbage into the ocean",
            "D": "Mixing hazardous waste with food waste"
          },
          "correct": "B",
          "reason": "Composting allows organic materials, such as food scraps and leaves, to decompose into compost."
        },
        "17": {
          "question": "Which law is known as the Philippine Clean Air Act of 1999?",
          "choices": {
            "A": "RA 9003",
            "B": "RA 8749",
            "C": "RA 9275",
            "D": "RA 7586"
          },
          "correct": "B",
          "reason": "RA 8749 provides a comprehensive air pollution control policy to protect air quality."
        },
        "18": {
          "question": "Which activity contributes to air pollution?",
          "choices": {
            "A": "Planting trees",
            "B": "Uncontrolled emissions from vehicles and factories",
            "C": "Proper waste segregation",
            "D": "Using clean energy"
          },
          "correct": "B",
          "reason": "Vehicle exhaust and industrial emissions can release pollutants into the air."
        },
        "19": {
          "question": "Which law is known as the Philippine Clean Water Act of 2004?",
          "choices": {
            "A": "RA 9275",
            "B": "RA 9003",
            "C": "RA 8749",
            "D": "RA 6713"
          },
          "correct": "A",
          "reason": "RA 9275 establishes a comprehensive water quality management policy to protect the country's water bodies."
        },
        "20": {
          "question": "Which action helps prevent water pollution?",
          "choices": {
            "A": "Dumping chemicals into rivers",
            "B": "Properly treating wastewater before discharge",
            "C": "Throwing plastics into the sea",
            "D": "Washing oil into drainage systems"
          },
          "correct": "B",
          "reason": "Treating wastewater helps remove harmful pollutants before water is released into the environment."
        },
        "21": {
          "question": "What is an Environmental Impact Assessment (EIA)?",
          "choices": {
            "A": "An assessment of the possible environmental effects of a proposed project",
            "B": "A tax collection process",
            "C": "A national election procedure",
            "D": "A method of measuring population"
          },
          "correct": "A",
          "reason": "EIA helps identify and evaluate potential environmental impacts and possible mitigation measures before a project proceeds. Applicable requirements depend on the project and environmental rules."
        },
        "22": {
          "question": "What is the purpose of an Environmental Compliance Certificate (ECC)?",
          "choices": {
            "A": "To automatically approve every business activity",
            "B": "To document the environmental compliance decision for a project covered by the Philippine EIS System",
            "C": "To replace all business permits",
            "D": "To exempt a project from environmental laws"
          },
          "correct": "B",
          "reason": "An ECC is issued by the DENR-Environmental Management Bureau for covered projects after the required environmental review. It does not replace every other permit."
        },
        "23": {
          "question": "Which government department is primarily responsible for environmental protection and natural resource management?",
          "choices": {
            "A": "Department of Finance",
            "B": "Department of Environment and Natural Resources",
            "C": "Department of Tourism",
            "D": "Department of Labor and Employment"
          },
          "correct": "B",
          "reason": "The DENR is the principal government agency responsible for the conservation, management, development, and proper use of the country's environment and natural resources."
        },
        "24": {
          "question": "What is reforestation?",
          "choices": {
            "A": "Removing all trees from a forest",
            "B": "Replanting trees in areas where forest cover has been lost",
            "C": "Converting forests into parking lots",
            "D": "Burning forests to clear land"
          },
          "correct": "B",
          "reason": "Reforestation helps restore forest cover, improve habitats, and reduce soil erosion."
        },
        "25": {
          "question": "What is the importance of mangrove forests?",
          "choices": {
            "A": "They increase coastal erosion.",
            "B": "They provide habitats and help reduce wave energy along coastlines.",
            "C": "They prevent all natural disasters.",
            "D": "They remove the need for coastal protection."
          },
          "correct": "B",
          "reason": "Mangroves support marine life, protect coastal ecosystems, and can reduce the impact of waves and storm surges. They do not guarantee protection against tsunamis or all disasters."
        },
        "26": {
          "question": "Which law established the National Integrated Protected Areas System (NIPAS), later expanded and strengthened?",
          "choices": {
            "A": "RA 7586",
            "B": "RA 6713",
            "C": "RA 9003",
            "D": "RA 9165"
          },
          "correct": "A",
          "reason": "RA 7586 established the NIPAS. It was strengthened and expanded by RA 11038, the Expanded NIPAS Act of 2018."
        },
        "27": {
          "question": "What is the main purpose of protected areas?",
          "choices": {
            "A": "To encourage illegal logging",
            "B": "To conserve important ecosystems, habitats, and biodiversity",
            "C": "To allow unlimited mining",
            "D": "To remove wildlife habitats"
          },
          "correct": "B",
          "reason": "Protected areas are managed to conserve natural resources, biodiversity, and ecological processes."
        },
        "28": {
          "question": "Which law is known as the Climate Change Act of 2009?",
          "choices": {
            "A": "RA 9729",
            "B": "RA 9003",
            "C": "RA 8749",
            "D": "RA 9275"
          },
          "correct": "A",
          "reason": "RA 9729 mainstreams climate change into government policy and established the Climate Change Commission."
        },
        "29": {
          "question": "What is renewable energy?",
          "choices": {
            "A": "Energy from sources that naturally replenish",
            "B": "Energy produced only by burning coal",
            "C": "Energy from non-replenishable minerals only",
            "D": "Energy produced by plastic waste alone"
          },
          "correct": "A",
          "reason": "Examples include solar, wind, hydropower, geothermal, and certain forms of biomass energy."
        },
        "30": {
          "question": "Which action best demonstrates environmental responsibility?",
          "choices": {
            "A": "Throwing trash into waterways",
            "B": "Burning plastic waste in open areas",
            "C": "Conserving water, segregating waste, and reducing pollution",
            "D": "Cutting down trees without permission"
          },
          "correct": "C",
          "reason": "Environmental responsibility means making daily choices that protect natural resources and reduce pollution."
        }
      }
    }
  ]
}```

## File: ./frontend/src/data/quiz/cse-quiz-imported-2026-11-14 (1).json
```
{
  "format": "cse-quiz",
  "version": 1,
  "exportedAt": "2026-11-14T17:06:18.445Z",
  "topics": [
    {
      "subject": "Filipino",
      "subject_icon": "🇵🇭",
      "topic": "Pag-unawa sa Binasa",
      "topic_order": 5,
      "questions": {
        "1": {
          "question": "[TULA - 'Sa Langit Kong Gusto' ni Czarmaine Feliciano]\nBuod: Tatlong saknong na nagsasalaysay ng pagnanais ng persona na makapunta sa langit na gusto niya, kung saan may mga anghel na nanonood. Kinaiinggitan niya ang mga ibong lumilipad at gusto rin niyang lumipad nang mataas, at aakyat siya agad kung may hagdan patungo roon.\n\n[QUESTION] Ano ang nais mapuntahan ng manunula?",
          "choices": {
            "A": "ibon",
            "B": "langit",
            "C": "anghel",
            "D": "hagdan"
          },
          "correct": "B",
          "reason": "Ang paulit-ulit na linya ng tula ay tungkol sa 'langit na gusto' ng persona, kaya langit ang nais mapuntahan. Hindi ibon, anghel, o hagdan ang destinasyon; ang mga iyon ay bahagi lang ng imahe."
        },
        "2": {
          "question": "[TULA - 'Sa Langit Kong Gusto']\nBuod: Sa ikalawang saknong, inilarawan ng persona ang mga ibon at ginamit ang salitang 'katulad nila' upang ihambing ang kanyang sarili sa kanila.\n\n[QUESTION] Ano ang tayutay na ginamit sa unang dalawang linya ng ikalawang saknong?",
          "choices": {
            "A": "pagtutulad",
            "B": "pagwawangis",
            "C": "pagmamalabis",
            "D": "pagbibigay katauhan"
          },
          "correct": "A",
          "reason": "Sa ikalawang saknong, ginamit ang salitang pagtutulad ('katulad nila'), kaya pagtutulad (simile). Ang pagwawangis ay direktang paghahambing nang walang 'tulad/parang'; ang pagmamalabis ay eksaherasyon; ang pagbibigay-katauhan ay pagbibigay ng katangian ng tao sa bagay."
        },
        "3": {
          "question": "[TULA - 'Sa Langit Kong Gusto']\nBuod: Tatlong saknong: (1) pagnanais makarating sa langit, (2) pagkainggit sa mga ibon, (3) pag-akyat kung may hagdan.\n\n[QUESTION] Sa anong saknong ipinahihiwatig ng manunula ang pangunahing kaisipan ng kanyang tula?",
          "choices": {
            "A": "unang saknong",
            "B": "ikalawang saknong",
            "C": "ikatlong saknong",
            "D": "walang pangunahing kaisipan"
          },
          "correct": "A",
          "reason": "Ang unang saknong ang malinaw na nagsasabi ng pangunahing kaisipan: ang hangarin ng persona na makarating sa kanyang minimithing langit. Ang ikalawa at ikatlong saknong ay nagpapalawak at nagbibigay ng detalye."
        },
        "4": {
          "question": "[PASSAGE - 'Kabataan: Pag-asa ng Bayan'] \"Ang kabataan ang pag-asa ng bayan.\" Ito ang sinabi ni Dr. Jose Rizal, ang ating pambansang bayani. Malaki ang pagtitiwala niya sa angking talino at kakayahan ng mga kabataan. Naniniwala siya na mahahango ang bansang Pilipinas sa tiyak na kasawian kung sila, ang mga kabataan, ang magkakaroon ng tunay na pag-ibig sa bayan. Maraming maitutulong ang mga kabataan sa pagpapaunlad ng bansa. Maaaring simulan nila ang pagmamalasakit sa kani-kanilang mga pamayanan. Sa mga proyektong inilulunsad ng pamahalaan, may mga gawaing pangkabataan katulad ng pagpapaganda ng kapaligiran at paglilinis ng mga sari-sariling bakuran. Makatutulong din ang mga kabataan sa pagpapanatili ng katahimikan at kapayapaan sa mga pamayanan. Ngunit, bakit tila yata ang mga kabataang ito ang bibigo sa dakilang pangarap ng yumaong bayani? Bakit tila nais nilang sikilin ang damdaming makabayang siyang sandata sa pagtatanggol sa Inang Bayan?\n\n[QUESTION] Alin sa mga sumusunod ang HINDI nagpapakita ng pagmamalasakit sa pamayanan?",
          "choices": {
            "A": "Pakikiisa sa mga proyekto ng pamayanan.",
            "B": "Pagpapanatili ng kapayapaan at katahimikan.",
            "C": "Pagliinis ng mga sari-sariling bakuran.",
            "D": "Pakikiisa sa kapuwa kabataang may masamang bisyo."
          },
          "correct": "D",
          "reason": "Ang HINDI pagmamalasakit sa pamayanan ay ang pakikiisa sa kapwa kabataang may masamang bisyo (D), dahil hindi ito nakatutulong sa kaayusan o kaunlaran. Ang A, B, at C ay nabanggit sa teksto bilang mga paraan ng pagtulong."
        },
        "5": {
          "question": "[PASSAGE - 'Kabataan: Pag-asa ng Bayan'] Naniniwala si Rizal na mahahango ang bansang Pilipinas sa tiyak na kasawian kung ang mga kabataan ay magkakaroon ng tunay na pag-ibig sa bayan. Maraming maitutulong ang kabataan: pagmamalasakit sa pamayanan, pakikiisa sa mga proyekto, paglilinis ng bakuran, at pagpapanatili ng kapayapaan.\n\n[QUESTION] Paano maiaahon ng kabataan ang bansang Pilipinas sa tiyak na kasawian?",
          "choices": {
            "A": "Sa pamamagitan ng pagkakaroon ng tunay na pag-ibig sa bayan.",
            "B": "Sa pamamagitan ng pagtugon sa kani-kaniyang kagustuhan lamang.",
            "C": "Parehong tama ang a at b.",
            "D": "Walang tamang sagot."
          },
          "correct": "A",
          "reason": "Ayon sa talata, mahahango ang bansa sa kasawian kung ang mga kabataan ang magkakaroon ng tunay na pag-ibig sa bayan. Kaya A. Ang B ('kani-kaniyang kagustuhan lamang') ay salungat sa diwa ng pagmamalasakit."
        },
        "6": {
          "question": "[PASSAGE - 'Kabataan: Pag-asa ng Bayan'] ...Ngunit, bakit tila yata ang mga kabataang ito ang bibigo sa dakilang pangarap ng yumaong bayani? Bakit tila nais nilang sikilin ang damdaming makabayang siyang sandata sa pagtatanggol sa Inang Bayan?\n\n[QUESTION] Ano ang nadarama ng may-akda sa kabataan na kanyang ipinahiwatig sa dalawang huling pangungusap ng talata?",
          "choices": {
            "A": "Tuwa sapagkat tunay na pag-asa ng bayan ang kabataan.",
            "B": "Lungkot dahil tila bibiguin ng mga kabataan ang paniniwala ni Rizal.",
            "C": "Galak dahil patuloy ang kabataan sa pagpapaunlad ng bayan.",
            "D": "Dalamhati sapagkat naaalala niya ang kabataan ni Rizal."
          },
          "correct": "B",
          "reason": "Sa dalawang huling pangungusap, nagtatanong ang may-akda kung bakit tila nais pang sikilin ng mga kabataan ang makabayang damdamin. Ipinapakita nito ang lungkot dahil tila bibiguin ng kabataan ang paniniwala ni Rizal. Hindi tuwa o galak (A, C)."
        },
        "7": {
          "question": "[PASSAGE - 'Kabataan: Pag-asa ng Bayan'] Ang buong talata ay nagsisimula sa siping: \"Ang kabataan ang pag-asa ng bayan.\"\n\n[QUESTION] 'Ang kabataan ay pag-asa ng bayan.' Ano ang implikasyon ng pangungusap na ito?",
          "choices": {
            "A": "Masagana ang bayan",
            "B": "Mapayapa ang bayan",
            "C": "May suliranin ang bayan",
            "D": "May bayani ang bayan"
          },
          "correct": "C",
          "reason": "Ang 'implikasyon' ay ang ibig sabihin nang hindi tahasang sinasabi. Kung kailangan ng bayan ang kabataan bilang pag-asa, ipinahihiwatig nito na may suliranin ang bayan na kailangang lutasin. Halimbawa: 'Ikaw ang pag-asa ng pamilya' ay nagpapahiwatig na may hirap ang pamilya."
        },
        "8": {
          "question": "[PASSAGE - Ang Santan] Ang pang-agham na pangalan ay Ixora coccinea L. at karaniwang tinatawag na halamang Santan sa ating bayan. Ito ay isa sa mga kaaya-ayang halaman na pampalamuti. Maraming klase ang Santan – may puti, pula, dilaw at malaginto. Iba-iba rin ang laki – may mahaba pero makitid ang mga dahon, samantalang ang iba ay mas malapad at maikli. May mabangong Santan at mayroon ding walang amoy. Ang Ixora coccinea L. ay galing sa India. Mahalaga ito dahil sa maaaring ipanggamot. Ang solusyon mula sa pinakulong ugat ay maaaring purga. Maaaring ipainom sa nagduduwal at sa sinisinok. Nakatutulong ito sa pagkakaroon ng gana sa pagkain. Mabuti rin ito sa di dinadatnan at nagtatae. Para sa makating lalamunan, maaaring ipangmumog ito. Iyong binayong sariwang sanga nito ay mainam na gamot at pantapal sa pilay, mga maysakit na bahagi ng katawan, eksema at sa mga galis. Mabisang gamot ang Santan.\n\n[QUESTION] Ano ang Ixora coccinea L.?",
          "choices": {
            "A": "Pangalan ng punungkahoy.",
            "B": "Pang-agham na pangalan ng Santan.",
            "C": "Pang-agham na pangalan ng prutas.",
            "D": "Pang-agham na pangalan ng mga halamang namumulaklak."
          },
          "correct": "B",
          "reason": "Ayon sa talata, ang Ixora coccinea L. ay ang pang-agham na pangalan ng halamang Santan. Hindi ito pangalan ng punungkahoy o prutas, at hindi ito para sa lahat ng halamang namumulaklak."
        },
        "9": {
          "question": "[PASSAGE - Ang Santan] Maraming klase ang Santan – may puti, pula, dilaw at malaginto. May mabangong Santan at mayroon ding walang amoy. Ang Ixora coccinea L. ay galing sa India. Mahalaga ito dahil sa maaaring ipanggamot.\n\n[QUESTION] Alin sa mga sumusunod na pangungusap ang wasto?",
          "choices": {
            "A": "Ang lahat ng Santan ay mabango.",
            "B": "Ang Santang pula ay galing sa Tsina.",
            "C": "Maraming klase ang Santan ngunit walang malaginto ang kulay.",
            "D": "Maaaring ipanggamot ang Santan."
          },
          "correct": "D",
          "reason": "Ang wasto ay 'Maaaring ipanggamot ang Santan' (D). Mali ang A (may walang amoy), mali ang B (galing sa India, hindi Tsina), at mali ang C (may malaginto)."
        },
        "10": {
          "question": "[PASSAGE - Ang Santan] Ang solusyon mula sa pinakulong ugat ay maaaring purga. Maaaring ipainom sa nagduduwal at sa sinisinok. Nakatutulong ito sa pagkakaroon ng gana sa pagkain. Mabuti rin ito sa di dinadatnan at nagtatae. Para sa makating lalamunan, maaaring ipangmumog ito. Iyong binayong sariwang sanga nito ay mainam na gamot at pantapal sa pilay.\n\n[QUESTION] Anong bahagi ng Santan ang may pinakamaraming gamit bilang gamot?",
          "choices": {
            "A": "dahon",
            "B": "bulaklak",
            "C": "ugat",
            "D": "sanga"
          },
          "correct": "C",
          "reason": "Ang ugat ang may pinakamaraming gamit ayon sa talata: purga, para sa nagduduwal at sinisinok, para sa gana sa pagkain, at para sa nagtatae. Ang sanga ay pantapal; ang bulaklak ay hindi binanggit na gamot."
        },
        "11": {
          "question": "[PASSAGE - Ang Santan] Ang talata ay naglalarawan ng Santan: pangalan, uri, pinagmulan, at gamit.\n\n[QUESTION] Ano ang pinakamabuting pamagat para sa talatang nabasa?",
          "choices": {
            "A": "Ang Ugat ng Santan",
            "B": "Ang Santan",
            "C": "Ang Santan Bilang Gamot",
            "D": "Mga Uri ng Santan"
          },
          "correct": "B",
          "reason": "Ang buong talata ay naglalarawan ng Santan (pangalan, uri, pinagmulan, at gamit), kaya 'Ang Santan' ang pinakasaklaw. Ang Ugat ng Santan, Santan Bilang Gamot, at Mga Uri ng Santan ay bahagi lang ng talata."
        },
        "12": {
          "question": "[PASSAGE - Ang Santan] Ang solusyon mula sa pinakulong ugat ay maaaring purga. Nakatutulong ito sa pagkakaroon ng gana sa pagkain. Mabuti rin ito sa di dinadatnan at nagtatae. Iyong binayong sariwang sanga nito ay mainam na gamot at pantapal sa pilay.\n\n[QUESTION] Alin sa mga sumusunod ang wastong gamit ng solusyon mula sa pinakulong ugat ng Santan?",
          "choices": {
            "A": "Maaaring pampagana ng pagkain",
            "B": "Maaaring pantapal sa pilay",
            "C": "Maaaring gawing palamuti",
            "D": "Maaaring pang-alis ng eksema at galis"
          },
          "correct": "A",
          "reason": "Ayon sa teksto, ang solusyon mula sa pinakulong ugat ay nakatutulong sa pagkakaroon ng gana sa pagkain, kaya A. Ang pantapal sa pilay ay galing sa binayong sariwang sanga (B), hindi sa ugat."
        },
        "13": {
          "question": "[PASSAGE - Kahalagahan ng Pagbabasa] Bakit mahalaga ang pagbabasa sa ating buhay? Sapagkat naging malawak at masalimuot ang buhay ng tao sa daigdig, kasama na ang mga kaugalian ng mga tao. Sa pagbabasa, naririto ang kasanayan sa pagkilala ng mga salita, pag-unawa, paggamit ng sanggunian, mga kasanayan sa pag-iisip, panlasa, saloobin, at kawilihan. Dagdag pa rito ang pagpasok ng mga bagong kaalaman, mga bagong tuklas sa larangan ng siyensiya, teknolohiya, sining. Ang mga balitang pandaigdig at babasahing inilalathala taun-taon, ang mga mahuhusay na aklat sa aklatan na di pa man nalalaman o nababasa ng isang tao sa buong buhay niya ay ilan sa mga bagay-bagay na maaaring bigyang pansin sa pagbabasa.\n\n[QUESTION] Ano ang pangunahing diwa ng seleksiyon?",
          "choices": {
            "A": "Ang bilang ng nababasa",
            "B": "Ang kahalagahan ng aklat",
            "C": "Ang kahalagahan ng pagbabasa",
            "D": "Ang hirap ng pagbabasa"
          },
          "correct": "C",
          "reason": "Ang buong talata ay tungkol sa kung bakit mahalaga ang pagbabasa (kasanayan, bagong kaalaman, atbp.). Kaya C. Ang aklat (B) ay isa lang bahagi ng pagbabasa."
        },
        "14": {
          "question": "[PASSAGE - Kahalagahan ng Pagbabasa] Sa pagbabasa, naririto ang kasanayan sa pagkilala ng mga salita, pag-unawa, paggamit ng sanggunian, mga kasanayan sa pag-iisip, panlasa, saloobin, at kawilihan. Dagdag pa rito ang pagpasok ng mga bagong kaalaman, mga bagong tuklas sa siyensiya, teknolohiya, sining.\n\n[QUESTION] Bakit mahalaga ang pagbabasa?",
          "choices": {
            "A": "Sapagkat sa halos lahat ng gawain, kasangkot ang pagbabasa.",
            "B": "Sapagkat mararating ang daigdig ng pangarap sa pagbabasa.",
            "C": "Lahat ng nabanggit ay tama.",
            "D": "Walang tamang sagot."
          },
          "correct": "C",
          "reason": "Ayon sa key, C ('Lahat ng nabanggit ay tama'). Binanggit sa talata ang kasangkot na kasanayan at bagong kaalaman, at maiuugnay rin dito ang pagpasok sa mundo ng pangarap."
        },
        "15": {
          "question": "[PASSAGE - Kahalagahan ng Pagbabasa] Ang talata ay naglalahad kung bakit mahalaga ang pagbabasa sa buhay ng tao.\n\n[QUESTION] Ano ang pinakamainam na pamagat ng nabasa?",
          "choices": {
            "A": "Ang Kahalagahan ng Pagbabasa",
            "B": "Pagbabasa at Kaunlaran",
            "C": "Pagbabasa ng mga Pilipino",
            "D": "Sa Makulay na Mundo ng Pagbabasa"
          },
          "correct": "A",
          "reason": "Ang 'Ang Kahalagahan ng Pagbabasa' ang pinakadirektang titulo na tumutugma sa pangunahing diwa ng talata. Ang B, C, at D ay masyadong makitid o hindi tinalakay."
        },
        "16": {
          "question": "[PASSAGE - Ang Mata] Nakikita sa mata ang iba't ibang emosyon. Tuwa, lungkot, pighati, pangamba, pag-asam, pakiusap. Ito ang salamin ng kaluluwa ng tao. Sa pamamagitan nito, nakapagpapahayag siya ng pag-ibig, nakakakuha ng pansin, nanunukso, at maaaring magbadya ng galit. Noon, ang mata ay isa lang bahagi ng mukha. Ngayon, ito'y pinalalamutian sa kasayahan, at ginagamit sa kasamaan. Ngunit maaari rin itong puhunan sa pagandahan. Tunay ngang maraming gamit ang matang minumuta, kinakapitan ng sakit, lumalabo at ginagamit sa pagtingin.\n\n[QUESTION] Ano ang paksang pangungusap sa talata?",
          "choices": {
            "A": "Nakikita sa mata ang iba't ibang emosyon.",
            "B": "Ito ang salamin sa kaluluwa ng tao.",
            "C": "Sa pamamagitan nito, nakapagpapahayag siya ng damdamin.",
            "D": "Tunay ngang maraming gamit ang matang minumuta, kinakapitan ng sakit, lumalabo at ginagamit sa pagtingin."
          },
          "correct": "D",
          "reason": "Ayon sa key, ang paksang pangungusap ay ang huli (D): 'Tunay ngang maraming gamit ang matang...' Ito ang sumasaklaw sa buong talata (gamit ng mata). Ang A, B, at C ay mga detalyeng sumusuporta. Paalala: kung minsan, nasa dulo ang paksang pangungusap (inductive structure)."
        },
        "17": {
          "question": "[PASSAGE - Ang Mata] Ang talata ay naglalahad ng emosyon sa mata, gamit sa palamuti, gamit sa kasamaan, at iba pang gamit.\n\n[QUESTION] Ano ang pinakamainam na pamagat sa talata?",
          "choices": {
            "A": "Ang Mga Emosyon sa Mata",
            "B": "Mata: Bahagi ng Mukha",
            "C": "Ang Iba't Ibang Gamit ng Mata",
            "D": "Mga Sakit sa Mata"
          },
          "correct": "C",
          "reason": "Ang talata ay naglalahad ng iba't ibang gamit ng mata (emosyon, palamuti, kasamaan, atbp.), kaya 'Ang Iba't Ibang Gamit ng Mata' ang pinakaangkop. Ang A at D ay isang aspekto lang."
        },
        "18": {
          "question": "[PASSAGE - Ang Mata] Nakikita sa mata ang iba't ibang emosyon. Sa pamamagitan nito, nakapagpapahayag siya ng pag-ibig, nakakakuha ng pansin, nanunukso, at maaaring magbadya ng galit. Tunay ngang maraming gamit ang matang minumuta, kinakapitan ng sakit, lumalabo at ginagamit sa pagtingin.\n\n[QUESTION] Alin sa mga sumusunod ang hindi nabanggit na nagagawa ng mata?",
          "choices": {
            "A": "nagpapahiwatig ng emosyon",
            "B": "nagpapakita ng matinding karamdaman",
            "C": "nagbabadya ng galit",
            "D": "nanunukso"
          },
          "correct": "B",
          "reason": "Ang hindi nabanggit ay ang 'nagpapakita ng matinding karamdaman.' Nabanggit lang na kinakapitan ng sakit ang mata, pero hindi na nagpapakita ito ng matinding karamdaman. Ang A, C, at D ay nabanggit (emosyon, galit, nanunukso)."
        },
        "19": {
          "question": "[PASSAGE - Ang Mata] Noon, ang mata ay isa lang bahagi ng mukha. Ngayon, ito'y pinalalamutian sa kasayahan, at ginagamit sa kasamaan. Ngunit maaari rin itong puhunan sa pagandahan. Sa pamamagitan nito, nakapagpapahayag siya ng pag-ibig, nakakakuha ng pansin, nanunukso, at maaaring magbadya ng galit.\n\n[QUESTION] Paano nagbago ang pananaw ng tao hinggil sa mga mata?",
          "choices": {
            "A": "Natutuhan na nilang gamitin ang mata upang magpahiwatig ng iba't ibang emosyon.",
            "B": "Natuklasan nila na ang mata ay nakikitaan ng sakit.",
            "C": "Natuklasan nila na ang mata ay maaaring mabulag.",
            "D": "Natutuhan nila na may palamuti para sa mga mata."
          },
          "correct": "A",
          "reason": "Ayon sa key, A (natutuhan nilang gamitin ang mata para magpahiwatig ng emosyon). May mga bahagi ng talata na sumusuporta rin sa D (palamuti), pero ang A ang pinaka-komprehensibong pagbabago."
        },
        "20": {
          "question": "[PASSAGE - Ang Mata] ...ginagamit sa kasamaan. Sa pamamagitan nito, nakapagpapahayag siya ng pag-ibig, nakakakuha ng pansin, nanunukso, at maaaring magbadya ng galit.\n\n[QUESTION] Anong parirala ang nagpapahiwatig ng paggamit ng mata sa kasamaan?",
          "choices": {
            "A": "mapungay na mata",
            "B": "matang nagsusumamo",
            "C": "nanlilisik na mata",
            "D": "matambaka"
          },
          "correct": "C",
          "reason": "Ang 'nanlilisik na mata' ay nagpapahiwatig ng galit o masamang intensyon. Ang mapungay at nagsusumamo ay malambot o nagmamakaawa."
        },
        "21": {
          "question": "[GRAPO - Minimum Wage in Metro Manila (Source: Regional Tripartite Wages & Productivity Board – NCR)]\nDatos: Nov 1990 = ₱106.00 | Jan 1991 = ₱118.00 | Dec 1993 = ₱135.00 | Apr 1994 = ₱145.00 | May 1996 = ₱165.00 | May 1997 = ₱185.00 | Feb 1998 = ₱198.00 | Oct 1999 = ₱223.50\n\n[QUESTION] Tungkol saan ang grapong nabasa?",
          "choices": {
            "A": "Pinakamataas na pasahod sa Maynila sa iba't ibang taon.",
            "B": "Pinakamababang pasahod sa Maynila sa iba't ibang taon.",
            "C": "Regional Tripartite Wages and Productivity Board",
            "D": "Bilang ng mga manggagawang napasahod sa iba't ibang taon."
          },
          "correct": "B",
          "reason": "Ang grapo ay pamagat na 'Minimum Wage in Metro Manila,' kaya tungkol ito sa pinakamababang pasahod sa Maynila sa iba't ibang taon. Ang 'pinakamataas' at 'bilang ng manggagawa' ay hindi ipinapakita."
        },
        "22": {
          "question": "[GRAPO - Minimum Wage] Datos: Nov 1990 = ₱106 | Jan 1991 = ₱118 | Dec 1993 = ₱135 | Apr 1994 = ₱145 | May 1996 = ₱165 | May 1997 = ₱185 | Feb 1998 = ₱198 | Oct 1999 = ₱223.50\n\n[QUESTION] Gaano kalaki ang pagkakaiba ng pasahod noong Oktubre 1999 at noong Mayo 1996?",
          "choices": {
            "A": "₱78.50",
            "B": "₱38.50",
            "C": "₱388.50",
            "D": "₱58.50"
          },
          "correct": "D",
          "reason": "Basahin ang grapo: Oct 1999 = ₱223.50 at May 1996 = ₱165.00. Pagkakaiba = 223.50 − 165.00 = ₱58.50."
        },
        "23": {
          "question": "[GRAPO - Minimum Wage] Datos: Nov 1990 = ₱106 | Jan 1991 = ₱118 | Dec 1993 = ₱135 | Apr 1994 = ₱145 | May 1996 = ₱165 | May 1997 = ₱185 | Feb 1998 = ₱198 | Oct 1999 = ₱223.50\n\n[QUESTION] Kailan nagkaroon ng pinakamababang pagtaas ng pasahod ayon sa grapo?",
          "choices": {
            "A": "Nobyembre 1990",
            "B": "Enero 1991",
            "C": "Disyembre 1993",
            "D": "Abril 1994"
          },
          "correct": "D",
          "reason": "Hanapin ang pinakamaliit na pagtaas sa pagitan ng magkakasunod na punto: Dec 1993 (₱135) → Apr 1994 (₱145) = ₱10 lang, ang pinakamababa sa lahat. Kaya Abril 1994."
        },
        "24": {
          "question": "[GRAPO - Minimum Wage] Datos: Apr 1994 = ₱145 | May 1996 = ₱165\n\n[QUESTION] Gaano katagal naging pinakamababang pasahod ng mga empleyado ang halagang ₱145?",
          "choices": {
            "A": "dalawang buwan",
            "B": "dalawampu't apat na buwan",
            "C": "limang buwan",
            "D": "dalawampu't limang buwan"
          },
          "correct": "D",
          "reason": "Ang ₱145 ay nagsimula noong Apr 1994 hanggang bago tumaas sa ₱165 noong May 1996. Mula Apr 1994 hanggang Apr 1996 ay 24 na buwan; kasama ang Mayo, 25 buwan."
        },
        "25": {
          "question": "[GRAPO - Minimum Wage] Datos: Nov 1990 = ₱106 | Jan 1991 = ₱118 | Dec 1993 = ₱135 | Apr 1994 = ₱145 | May 1996 = ₱165 | May 1997 = ₱185 | Feb 1998 = ₱198 | Oct 1999 = ₱223.50\n\n[QUESTION] Ilang beses nagkaroon ng dalawampung piso (₱20) pagtaas sa minimum wage?",
          "choices": {
            "A": "isa",
            "B": "dalawa",
            "C": "tatlo",
            "D": "wala"
          },
          "correct": "B",
          "reason": "Hanapin ang pagtaas na eksaktong ₱20: Apr 1994 (₱145) → May 1996 (₱165) at May 1996 (₱165) → May 1997 (₱185). Dalawang beses."
        },
        "26": {
          "question": "[TSART - Badyet at Katayuang Pangmilitar ng mga Piling Bansa (Asiaweek, June 9, 2000)]\nDatos (Brunei | RP | Japan | China | Malaysia | Thailand | S. Korea | India):\nBadyet Militar: $357M | $1B | $41.1B | $11B | $3.3B | $2B | $13.2B | $10B\n% ng Badyet Militar sa GDP: 6.5% | 1.5% | 1.1% | 1.6% | 3.75% | 1.5% | 3.1% | 2.1%\nBilang ng Tropang Militar: 5,000 | 110,000 | 236,300 | 2,480,000 | 105,000 | 306,000 | 672,000 | 1,173,000\nSasakyang Pandagat: 6 | 88 | 179 | 1,149 | 56 | 149 | 198 | 140\nPangdigmaang Sasakyang Panghimpapawid: 6 | 141 | 517 | 4,086 | 104 | 234 | 568 | 975\n\n[QUESTION] Anong pamagat ang angkop sa tsart sa itaas?",
          "choices": {
            "A": "Badyet para sa Militar ng Iba't Ibang Bansa",
            "B": "Kalagayang Pang-Ekonomiya",
            "C": "Badyet at Katayuang Pangmilitar ng mga Piling Bansa",
            "D": "Bilang ng mga Militar sa Iba't Ibang Bansa"
          },
          "correct": "C",
          "reason": "Ang tsart ay nagpapakita ng badyet na pang-militar, porsiyento ng GDP, bilang ng tropa, at mga sasakyang pandagat at panghimpapawid, kaya 'Badyet at Katayuang Pangmilitar ng mga Piling Bansa.'"
        },
        "27": {
          "question": "[TSART - Katayuang Pangmilitar] Bilang ng Tropang Militar: Brunei 5,000 | RP 110,000 | Japan 236,300 | China 2,480,000 | Malaysia 105,000 | Thailand 306,000 | S. Korea 672,000 | India 1,173,000\n\n[QUESTION] Anong bansa ang may pinakamataas na bilang ng tropa?",
          "choices": {
            "A": "Japan",
            "B": "South Korea",
            "C": "Brunei",
            "D": "Malaysia"
          },
          "correct": "B",
          "reason": "Sa tsart, ang bilang ng tropa ay: South Korea 672,000, Japan 236,300, Malaysia 105,000, Brunei 5,000. Sa mga choices, ang pinakamataas ay South Korea (B). Ang Malaysia ay 105,000 lang."
        },
        "28": {
          "question": "[TSART - Katayuang Pangmilitar] % ng Badyet Militar sa GDP: Brunei 6.5% | RP 1.5% | Japan 1.1% | China 1.6% | Malaysia 3.75% | Thailand 1.5% | S. Korea 3.1% | India 2.1%\n\n[QUESTION] Anong bansa ang may inilalaang pinakamalaking porsiyento ng GDP para sa badyet militar?",
          "choices": {
            "A": "Japan",
            "B": "South Korea",
            "C": "Brunei",
            "D": "Malaysia"
          },
          "correct": "C",
          "reason": "Sa hanay ng '% ng Badyet Militar sa GDP,' ang Brunei ay 6.5%, ang pinakamataas sa mga choices (Japan 1.1%, S. Korea 3.1%, Malaysia 3.75%)."
        },
        "29": {
          "question": "[TSART - Katayuang Pangmilitar] Badyet Militar: Japan $41.1B, S. Korea $13.2B, Malaysia $3.3B, Brunei $357M. % ng GDP: Japan 1.1%, S. Korea 3.1%, Malaysia 3.75%, Brunei 6.5%\n\n[QUESTION] Anong bansa ang may pinakamalaking GDP?",
          "choices": {
            "A": "Japan",
            "B": "Brunei",
            "C": "Malaysia",
            "D": "South Korea"
          },
          "correct": "A",
          "reason": "Ang GDP ay makukuha sa pamamagitan ng badyet ÷ porsiyento ng GDP. Japan: $41.1B ÷ 1.1% ≈ $3.7 trilyon; S. Korea ≈ $426B; Malaysia ≈ $88B; Brunei ≈ $5.5B. Kaya Japan ang pinakamalaki."
        },
        "30": {
          "question": "[TSART - Katayuang Pangmilitar] Brunei: Badyet $357M (6.5% ng GDP), Tropa 5,000, Sasakyang Pandagat 6, Panghimpapawid 6.\n\n[QUESTION] Ano ang maaaring dahilan kung bakit mababa lamang ang bilang ng katayuang pangmilitar ng Brunei?",
          "choices": {
            "A": "Kulang sila sa pananalapi",
            "B": "Maliit na bansa lamang ang Brunei",
            "C": "Hindi nila kailangan ang militar",
            "D": "Walang nais magsundalo sa kanilang mga tao."
          },
          "correct": "B",
          "reason": "Maliit na bansa lamang ang Brunei, kaya natural na maliit din ang bilang ng sundalo (5,000) at mga sasakyang pandigma. Ang A at C ay hindi sinusuportahan ng tsart (malaki ang 6.5% ng GDP na inilalaan nila)."
        }
      }
    },
    {
      "subject": "Filipino",
      "subject_icon": "🇵🇭",
      "topic": "Pagtatalata",
      "topic_order": 6,
      "questions": {
        "1": {
          "question": "[TALATA I]\nA. Ayon sa batas na ito, pagbabayarin ang mga may-ari ng kumpanya at sasakyan na nakapipinsala sa kalidad ng hangin dahil sa mga usok na binubuga nito.\nB. Ang 'Clean Air Act' ay isang batas na naglalayong mapanatiling malinis ang ating hangin.\nC. Sa ibang banda naman, ang mga kumpanyang magkakabit o maglalagay ng mga gamit laban sa polusyon sa kanilang lugar ay bibigyan ng 'tax break'.\nD. Ano nga ba ang 'Clean Air Act'?\n\n[QUESTION] Ano ang wastong ayos ng mga pangungusap na makabubuo ng isang makabuluhang talata?",
          "choices": {
            "A": "A-D-B-C",
            "B": "B-D-A-C",
            "C": "D-A-B-C",
            "D": "D-B-A-C"
          },
          "correct": "D",
          "reason": "Ang unang pangungusap ay ang tanong na D ('Ano nga ba ang Clean Air Act?') na naghahanda ng paksa. Sumusunod ang B (kahulugan ng batas), tapos A ('Ayon sa batas na ito...' — ang 'batas na ito' ay tinutukoy ang Clean Air Act mula sa B), at huli ang C na nagsisimula sa 'Sa ibang banda' (kabilang panig). Kaya D-B-A-C."
        },
        "2": {
          "question": "[TALATA I — wastong ayos: D-B-A-C]\nD. Ano nga ba ang 'Clean Air Act'?\nB. Ang 'Clean Air Act' ay isang batas na naglalayong mapanatiling malinis ang ating hangin.\nA. Ayon sa batas na ito, pagbabayarin ang mga may-ari ng kumpanya at sasakyan na nakapipinsala sa kalidad ng hangin dahil sa mga usok na binubuga nito.\nC. Sa ibang banda naman, ang mga kumpanyang magkakabit o maglalagay ng mga gamit laban sa polusyon sa kanilang lugar ay bibigyan ng 'tax break'.\n\n[QUESTION] Kung daragdagan ng isang pangwakas na pangungusap ang mga nasa itaas, alin sa mga sumusunod ang pinaka-angkop?",
          "choices": {
            "A": "Ang 'Clean Air Act' ang tamang solusyon sa lahat ng polusyon.",
            "B": "Alamin ang tungkol sa 'Clean Air Act'.",
            "C": "Kung ikaw ang may-ari ng kumpanya, sang-ayon ka ba sa 'Clean Air Act'?",
            "D": "Tumulong mapanatiling malinis ang hangin."
          },
          "correct": "C",
          "reason": "Ang pinakamainam na pangwakas ay tanong na nag-iiwan ng pagninilay (C), dahil sinusundan nito ang istilo ng talata na nagsimula sa tanong. Ang A ay sobrang pagpapahayag ('tamang solusyon sa lahat'), ang B ay panimula sa halip na wakas, at ang D ay panawagan na wala sa talata."
        },
        "3": {
          "question": "[TALATA I — wastong ayos: D-B-A-C]\nD. Ano nga ba ang 'Clean Air Act'?\nB. Ang 'Clean Air Act' ay isang batas na naglalayong mapanatiling malinis ang ating hangin.\nA. Ayon sa batas na ito, pagbabayarin ang mga may-ari ng kumpanya at sasakyan na nakapipinsala sa kalidad ng hangin dahil sa mga usok na binubuga nito.\nC. Sa ibang banda naman, ang mga kumpanyang magkakabit o maglalagay ng mga gamit laban sa polusyon sa kanilang lugar ay bibigyan ng 'tax break'.\n\n[QUESTION] Ano ang pinaka-angkop na pamagat sa nabuong talata?",
          "choices": {
            "A": "Ang Kalinisan",
            "B": "Ang Clean Air Act",
            "C": "Ang Hangin",
            "D": "Ang Kumpanya"
          },
          "correct": "B",
          "reason": "Ang buong talata ay tungkol sa batas na Clean Air Act, kaya 'Ang Clean Air Act' ang pinakaangkop. Ang Kalinisan, Ang Hangin, at Ang Kumpanya ay masyadong malawak o makitid."
        },
        "4": {
          "question": "[TALATA II]\nA. Ayon sa saligang batas, maraming mga katangiang dapat taglayin ang sino mang nagnanais na maging Presidente ng bansa.\nB. Ikalawa, nararapat din na siya ay rehistradong botante at marunong bumasa at sumulat.\nC. Isa pang mahalagang katangian ay kinakailangang 40 taon man lamang siya sa araw ng halalan.\nD. Isa sa mga katangiang ito ay nararapat na isa siyang katutubong ipinanganak na mamamayan ng Pilipinas.\nE. At ang huli ay nararapat na siya ay residente ng Pilipinas sa loob ng sampung taon bago dumating ang halalan.\n\n[QUESTION] Ano ang wastong pagkakasunod-sunod ng mga pangungusap na makabubuo ng makabuluhang talata?",
          "choices": {
            "A": "A-B-C-D-E",
            "B": "A-B-D-C-E",
            "C": "A-D-B-C-E",
            "D": "A-D-C-B-E"
          },
          "correct": "C",
          "reason": "Ang A ang paksang pangungusap ('maraming katangian'). Sumusunod ang D ('Isa sa mga katangiang ito'), tapos B ('Ikalawa'), C ('Isa pang mahalagang katangian'), at huli ang E ('At ang huli'). Mga hudyat ang 'Isa sa,' 'Ikalawa,' 'Isa pang,' 'At ang huli.' Kaya A-D-B-C-E."
        },
        "5": {
          "question": "[TALATA II — wastong ayos: A-D-B-C-E]\nA. Ayon sa saligang batas, maraming mga katangiang dapat taglayin ang sino mang nagnanais na maging Presidente ng bansa.\nD. Isa sa mga katangiang ito ay nararapat na isa siyang katutubong ipinanganak na mamamayan ng Pilipinas.\nB. Ikalawa, nararapat din na siya ay rehistradong botante at marunong bumasa at sumulat.\nC. Isa pang mahalagang katangian ay kinakailangang 40 taon man lamang siya sa araw ng halalan.\nE. At ang huli ay nararapat na siya ay residente ng Pilipinas sa loob ng sampung taon bago dumating ang halalan.\n\n[QUESTION] Ano ang pamamaraang ginamit upang mabuo ang talata?",
          "choices": {
            "A": "pagbibigay ng sanhi at bunga",
            "B": "paglalarawan",
            "C": "paghahambing",
            "D": "pag-iisa-isa o enumerasyon"
          },
          "correct": "D",
          "reason": "Ginamitan ng enumerasyon (pag-iisa-isa) ang talata: inilista ang mga katangian ng Presidente isa-isa (katutubo, botante, 40 taong gulang, residente). Hindi ito sanhi-bunga o paglalarawan."
        },
        "6": {
          "question": "[TALATA II — wastong ayos: A-D-B-C-E]\nA. Ayon sa saligang batas, maraming mga katangiang dapat taglayin ang sino mang nagnanais na maging Presidente ng bansa.\nD. Isa sa mga katangiang ito ay nararapat na isa siyang katutubong ipinanganak na mamamayan ng Pilipinas.\nB. Ikalawa, nararapat din na siya ay rehistradong botante at marunong bumasa at sumulat.\nC. Isa pang mahalagang katangian ay kinakailangang 40 taon man lamang siya sa araw ng halalan.\nE. At ang huli ay nararapat na siya ay residente ng Pilipinas sa loob ng sampung taon bago dumating ang halalan.\n\n[QUESTION] Anong pangungusap ang nagsasabing hindi maaaring maging Presidente ng bansa ang isang dayuhan?",
          "choices": {
            "A": "pangungusap B",
            "B": "pangungusap C",
            "C": "pangungusap D",
            "D": "pangungusap E"
          },
          "correct": "C",
          "reason": "Ang D ang nagsasabing 'katutubong ipinanganak na mamamayan ng Pilipinas,' kaya hindi puwedeng maging Presidente ang dayuhan. Ang B (botante), C (edad), at E (residente) ay iba pang katangian."
        },
        "7": {
          "question": "[TALATA III]\nA. Ang mga ito ay nagmula sa Gitnang Asya at naglakad sa mga tulay na lupang nagkakabit ng iba't ibang bahagi ng Asya sa Pilipinas.\nB. Sila ay sinundan ng Indones na galing sa Timog Silangang Asya.\nC. Ang pinakaunang pangkat ng mga tao sa Pilipinas ay ang mga Ita o Negrito.\nD. Ang huling pangkat naman na dumating upang manirahan dito sa ating bansa ay ang mga Malay na nagmula rin sa Timog Silangang Asya.\n\n[QUESTION] Ano ang wastong pagkakasunud-sunod ng mga pangungusap na makabubuo ng isang makabuluhang talata?",
          "choices": {
            "A": "A-B-C-D",
            "B": "C-A-B-D",
            "C": "C-B-D-A",
            "D": "C-B-A-D"
          },
          "correct": "B",
          "reason": "Ang C ang nauna ('pinakaunang pangkat... Ita'), kasunod ang A ('Ang mga ito...' ay tumutukoy sa Ita at kanilang pinagmulan), tapos B ('Sila ay sinundan ng Indones'), at huli ang D ('ang huling pangkat... Malay'). Kaya C-A-B-D."
        },
        "8": {
          "question": "[TALATA III — wastong ayos: C-A-B-D]\nC. Ang pinakaunang pangkat ng mga tao sa Pilipinas ay ang mga Ita o Negrito.\nA. Ang mga ito ay nagmula sa Gitnang Asya at naglakad sa mga tulay na lupang nagkakabit ng iba't ibang bahagi ng Asya sa Pilipinas.\nB. Sila ay sinundan ng Indones na galing sa Timog Silangang Asya.\nD. Ang huling pangkat naman na dumating upang manirahan dito sa ating bansa ay ang mga Malay na nagmula rin sa Timog Silangang Asya.\n\n[QUESTION] Ano ang pambungad na paksang pangungusap ang angkop para sa talatang nabuo?",
          "choices": {
            "A": "May tatlong pangkat ng tao ang dumating rito sa Pilipinas noong unang panahon.",
            "B": "Tatlong tao lamang ang pangkat ng mga sinaunang Pilipino.",
            "C": "Tatlong pangkat ang mga Pilipino ngayon.",
            "D": "May tatlong sinaunang Pilipino."
          },
          "correct": "A",
          "reason": "Ang talata ay naglalahad ng tatlong pangkat (Ita, Indones, Malay) na dumating sa Pilipinas noong unang panahon, kaya A. Ang B, C, at D ay mali dahil hindi tama ang bilang ng 'mga tao' o 'mga Pilipino ngayon.'"
        },
        "9": {
          "question": "[TALATA III — wastong ayos: C-A-B-D]\nC. Ang pinakaunang pangkat ng mga tao sa Pilipinas ay ang mga Ita o Negrito.\nA. Ang mga ito ay nagmula sa Gitnang Asya at naglakad sa mga tulay na lupang nagkakabit ng iba't ibang bahagi ng Asya sa Pilipinas.\nB. Sila ay sinundan ng Indones na galing sa Timog Silangang Asya.\nD. Ang huling pangkat naman na dumating upang manirahan dito sa ating bansa ay ang mga Malay na nagmula rin sa Timog Silangang Asya.\n\n[QUESTION] Ano ang angkop na pamagat para sa talata?",
          "choices": {
            "A": "Ita, Indones at Malay",
            "B": "Mga Pangkat ng Tao mula sa Asya",
            "C": "Sino Ako?",
            "D": "Ang mga Unang Pangkat ng mga Pilipino"
          },
          "correct": "D",
          "reason": "Ang 'Ang mga Unang Pangkat ng mga Pilipino' ang sumasaklaw sa buong talata. Ang Ita, Indones at Malay ay listahan lang, ang Mga Pangkat ng Tao mula sa Asya ay malabo, at ang 'Sino Ako?' ay hindi angkop."
        },
        "10": {
          "question": "[TALATA III — orihinal na ayos: C-A-B-D]\nC. Ang pinakaunang pangkat ng mga tao sa Pilipinas ay ang mga Ita o Negrito.\nA. Ang mga ito ay nagmula sa Gitnang Asya at naglakad sa mga tulay na lupang nagkakabit ng iba't ibang bahagi ng Asya sa Pilipinas.\nB. Sila ay sinundan ng Indones na galing sa Timog Silangang Asya.\nD. Ang huling pangkat naman na dumating upang manirahan dito sa ating bansa ay ang mga Malay na nagmula rin sa Timog Silangang Asya.\n\nBagong pangungusap E: 'Ang mga Indones ay dumating nang dalawang bugso may limang libong taon na ang nakaraan.'\n\n[QUESTION] Kung idaragdag bilang pangungusap E ang nasa itaas, ano ang magiging panibagong pagkakasunud-sunod ng mga pangungusap upang makabuo ng makabuluhang talata?",
          "choices": {
            "A": "A-B-E-C-D",
            "B": "C-A-B-E-D",
            "C": "C-B-E-D-A",
            "D": "C-B-E-A-D"
          },
          "correct": "B",
          "reason": "Ang bagong pangungusap E ay tungkol sa Indones, kaya ilalagay ito pagkatapos ng B (na unang nagbanggit sa Indones) at bago ang D (Malay). Kaya C-A-B-E-D."
        }
      }
    },
    {
      "subject": "General Information",
      "subject_icon": "🏛️",
      "topic": "Philippine Constitution (Extended)",
      "topic_order": 5,
      "questions": {
        "1": {
          "question": "What do you call the introductory part of the Constitution?",
          "choices": {
            "A": "Preface",
            "B": "Amendments",
            "C": "Preamble",
            "D": "Bill of Rights"
          },
          "correct": "C",
          "reason": "Ang Preamble ang panimulang bahagi ng Saligang Batas (nagsisimula sa 'We, the sovereign Filipino people...'). Ang Bill of Rights ay Article III, at ang amendments ay mga pagbabago sa Konstitusyon. Halimbawa: parang 'pambungad na talata' ng buong batas."
        },
        "2": {
          "question": "What form of government does the Philippines adopt?",
          "choices": {
            "A": "Republican",
            "B": "Democratic",
            "C": "neither a nor b",
            "D": "both a and b"
          },
          "correct": "D",
          "reason": "Ayon sa Art. II, Sec. 1, 'The Philippines is a democratic and republican State.' Kaya parehong tama ang A at B. Republican = may kinatawan ang mamamayan; democratic = nasa mamamayan ang kapangyarihan."
        },
        "3": {
          "question": "What is the power of the State to take private property for public use upon payment of a just compensation?",
          "choices": {
            "A": "right of confiscation",
            "B": "right of limiting resources",
            "C": "right of sequestration",
            "D": "right of eminent domain"
          },
          "correct": "D",
          "reason": "Ang 'eminent domain' ay kapangyarihan ng Estado na kunin ang pribadong ari-arian para sa pampublikong gamit kapalit ng makatarungang bayad (just compensation). Halimbawa: pagkuha ng lupa para sa bagong kalsada, at binabayaran ang may-ari."
        },
        "4": {
          "question": "Who among the following may issue a warrant of arrest or a search warrant?",
          "choices": {
            "A": "a senator",
            "B": "a judge",
            "C": "a congressman",
            "D": "the President"
          },
          "correct": "B",
          "reason": "Ayon sa Art. III, Sec. 2, ang warrant of arrest o search warrant ay ipinapalabas lang ng hukom (judge) pagkatapos ng pagtukoy ng probable cause. Hindi ito kapangyarihan ng senador, kongresista, o Pangulo."
        },
        "5": {
          "question": "A foreigner may acquire Filipino citizenship through",
          "choices": {
            "A": "naturalization",
            "B": "extradition",
            "C": "rebirth",
            "D": "Visa application"
          },
          "correct": "A",
          "reason": "Ang naturalization ay ang legal na proseso para maging mamamayan ang dayuhan. Ang extradition ay pagpapabalik ng tao sa ibang bansa para litisin, at ang visa ay pahintulot lang na pumasok o manatili, hindi pagkamamamayan."
        },
        "6": {
          "question": "The right to vote is also known as ____________.",
          "choices": {
            "A": "suffrage",
            "B": "naturalization",
            "C": "democracy",
            "D": "plebiscite"
          },
          "correct": "A",
          "reason": "Ang suffrage ay karapatang bumoto. Ang plebisito ay pagboto para sa pagtanggap o pagtanggi sa isang panukala, at ang democracy ay uri ng pamahalaan."
        },
        "7": {
          "question": "How many Senators are there in the Senate?",
          "choices": {
            "A": "twenty-five",
            "B": "twenty-four",
            "C": "twelve",
            "D": "thirty"
          },
          "correct": "B",
          "reason": "Ang Senado ay binubuo ng 24 na senador (Art. VI, Sec. 2), na inihalal ng buong bansa at may anim na taong termino. Hindi ito 12 (kalahati lang ang inihahalal tuwing eleksyon)."
        },
        "8": {
          "question": "What is the minimum age requirement of a Senator?",
          "choices": {
            "A": "thirty",
            "B": "twenty-five",
            "C": "twenty",
            "D": "thirty-five"
          },
          "correct": "D",
          "reason": "Ang senador ay dapat natural-born na Pilipino, hindi bababa sa 35 taong gulang sa araw ng halalan, marunong bumasa at sumulat, at rehistradong botante. Ang 25 ay para sa mga miyembro ng House of Representatives."
        },
        "9": {
          "question": "Which of the following bills do not originate from the House of Representatives?",
          "choices": {
            "A": "Appropriation bills",
            "B": "Revenue or tariff bills",
            "C": "Amnesty",
            "D": "Private bills"
          },
          "correct": "C",
          "reason": "Ayon sa Art. VI, Sec. 24, sa House nagmumula ang appropriation, revenue/tariff, public debt, local, at private bills. Ang amnesty ay hindi bill na nagmumula sa House; ito ay ipinagkakaloob ng Pangulo na may pagsang-ayon ng mayorya ng Kongreso. Kaya C."
        },
        "10": {
          "question": "The Members of the Lower House are",
          "choices": {
            "A": "elected by region and by party list",
            "B": "elected by region and appointed by the President",
            "C": "elected by district and party list",
            "D": "elected by district and appointed by the Senators"
          },
          "correct": "C",
          "reason": "Ang Mababang Kapulungan (House of Representatives) ay binubuo ng mga kinatawan na inihalal ayon sa distrito at party-list (Art. VI, Sec. 5). Walang appointed na miyembro."
        },
        "11": {
          "question": "The legislative power of the government shall be vested in the",
          "choices": {
            "A": "President",
            "B": "Congress",
            "C": "Supreme Court",
            "D": "all of the above"
          },
          "correct": "B",
          "reason": "Ayon sa Art. VI, Sec. 1, ang kapangyarihang lehislatibo ay nasa Kongreso (Senado at House). Ang Pangulo ay ehekutibo at ang Korte Suprema ay hudisyal. Halimbawa: paggawa ng batas ay trabaho ng Kongreso."
        },
        "12": {
          "question": "Which of the following may disqualify a person from running for Presidency?",
          "choices": {
            "A": "He is sixty years old on the day of the election.",
            "B": "He lived abroad five years preceding the election.",
            "C": "He has Filipino parents but was born in the United States.",
            "D": "He is a registered voter."
          },
          "correct": "B",
          "reason": "Ang kandidato sa pagka-Pangulo ay dapat natural-born, rehistradong botante, nakababasa at nakasusulat, hindi bababa sa 40 taong gulang, at residente ng Pilipinas nang hindi bababa sa 10 taon bago ang halalan. Ang pagtira sa ibang bansa nang limang taon bago ang halalan ay sisira sa 10-taong residency, kaya ito ang magdidiskuwalipika."
        },
        "13": {
          "question": "Which of the following shows the transfer of power should the President be incapable of discharging his duties?",
          "choices": {
            "A": "President → Vice-President → Senate President → House Speaker",
            "B": "President → Vice-President → Chief Justice → Senate President",
            "C": "President → Vice-President → Chief Justice → House Speaker",
            "D": "President → Vice-President → House Speaker → Senate President"
          },
          "correct": "A",
          "reason": "Ayon sa Art. VII, Secs. 7–8, kapag hindi kayang gampanan ng Pangulo ang tungkulin, ang pagkakasunod ay Pangulo → Bise-Presidente → Senate President → Speaker ng House. Hindi kabilang ang Chief Justice."
        },
        "14": {
          "question": "A member of the Supreme Court",
          "choices": {
            "A": "must have been for fifteen years or more, a judge of a lower court.",
            "B": "must have been for ten years, a judge of the Court of Appeals",
            "C": "may not be a member of the Philippine Bar",
            "D": "may be a naturalized citizen"
          },
          "correct": "A",
          "reason": "Ayon sa Art. VIII, Sec. 7, ang miyembro ng Korte Suprema ay natural-born na Pilipino, 40 taong gulang pataas, at nakapaglingkod nang hindi bababa sa 15 taon bilang hukom ng mababang hukuman (o naging abogado). Kailangan ding miyembro ng Philippine Bar. Hindi puwede ang naturalized citizen."
        },
        "15": {
          "question": "The Supreme Court is composed of",
          "choices": {
            "A": "a Chief Justice and fourteen Associate Justices",
            "B": "two Chief Justices and fourteen Associate Justices",
            "C": "a Chief Justice and twelve Associate Justices",
            "D": "a Chief Justice and an indefinite number of Associate Justices"
          },
          "correct": "A",
          "reason": "Ang Korte Suprema ay binubuo ng isang Chief Justice at 14 na Associate Justices, kabuuang 15 (Art. VIII, Sec. 4)."
        },
        "16": {
          "question": "Which of the following is a Constitutional Commission?",
          "choices": {
            "A": "Commission on Human Rights",
            "B": "Philippine Commission on Good Government",
            "C": "Civil Service Commission",
            "D": "Commission on Natural Resources"
          },
          "correct": "C",
          "reason": "Ang tatlong Constitutional Commissions sa Art. IX ay ang Civil Service Commission, Commission on Elections, at Commission on Audit. Ang Commission on Human Rights ay may batayan sa Konstitusyon (Art. XIII) pero hindi kabilang sa tatlo; ang PCGG ay itinatag ng executive order."
        },
        "17": {
          "question": "What branch of government has the sole right to initiate all cases of impeachment?",
          "choices": {
            "A": "Senate",
            "B": "Commission on Elections",
            "C": "House of Representatives",
            "D": "Judiciary"
          },
          "correct": "C",
          "reason": "Ang House of Representatives ang may eksklusibong kapangyarihang magsimula ng lahat ng kaso ng impeachment (Art. XI, Sec. 3). Ang Senado ang nagsisilbing hukuman na dumidinig dito."
        },
        "18": {
          "question": "Which of the following is not removable from office by impeachment?",
          "choices": {
            "A": "Member of the Supreme Court",
            "B": "Member of the Constitutional Commissions",
            "C": "The Ombudsman",
            "D": "Senators"
          },
          "correct": "D",
          "reason": "Ang mga impeachable officers ay ang Pangulo, Bise-Presidente, miyembro ng Korte Suprema, mga Constitutional Commission, at Ombudsman. Hindi kabilang ang mga senador; sila ay maaaring patalsikin sa pamamagitan ng expulsion ng kanilang kapulungan."
        },
        "19": {
          "question": "The national language of the Philippines is",
          "choices": {
            "A": "Pilipino",
            "B": "English and Filipino",
            "C": "Tagalog",
            "D": "Filipino"
          },
          "correct": "D",
          "reason": "Ang pambansang wika ay Filipino (Art. XIV, Sec. 6). Ang English at Filipino ang mga opisyal na wika, pero ang 'pambansang wika' ay Filipino lang."
        },
        "20": {
          "question": "Who may propose any amendment to, or revision of the Constitution?",
          "choices": {
            "A": "Congress or a Constitutional Convention",
            "B": "Congress and a Constitutional Convention",
            "C": "Judiciary and Congress",
            "D": "Judiciary and Constitutional Convention"
          },
          "correct": "A",
          "reason": "Ayon sa Art. XVII, ang Kongreso (bilang constituent assembly sa pamamagitan ng boto ng ¾ ng lahat ng miyembro) o ang Constitutional Convention ang maaaring magpanukala ng pagbabago. Pagkatapos, kailangan ng ratipikasyon ng taumbayan sa plebisito. Hindi puwede ang Judiciary."
        },
        "21": {
          "question": "What tax is paid by individuals who derive compensation income?",
          "choices": {
            "A": "Value added tax",
            "B": "Excise tax",
            "C": "Income tax",
            "D": "Real estate tax"
          },
          "correct": "C",
          "reason": "Ang income tax ay buwis sa kinikita (kasama ang sahod o compensation income). Ang VAT ay sa pagbebenta ng produkto o serbisyo, at ang real estate tax ay sa ari-arian."
        },
        "22": {
          "question": "When is the deadline for filing income tax returns for every taxable year?",
          "choices": {
            "A": "April 15",
            "B": "April 30",
            "C": "March 15",
            "D": "March 30"
          },
          "correct": "A",
          "reason": "Ang karaniwang deadline ng annual income tax return ng indibidwal ay Abril 15 (NIRC)."
        },
        "23": {
          "question": "Which of the following statements is true about taxes?",
          "choices": {
            "A": "It is a voluntary payment",
            "B": "It is payable both in cash and in kind",
            "C": "It is an enforced contribution",
            "D": "It is based on one's desire to pay."
          },
          "correct": "C",
          "reason": "Ang buwis ay 'enforced contribution' (sapilitang kontribusyon) na ipinapataw ng Estado at hindi boluntaryo. Karaniwan itong binabayaran sa pera, hindi sa gusto ng nagbabayad."
        },
        "24": {
          "question": "What tax is imposed on one's right to transmit property at death, and is measured by the value of the property?",
          "choices": {
            "A": "Excise tax",
            "B": "Withholding tax",
            "C": "Donor's tax",
            "D": "Estate tax"
          },
          "correct": "D",
          "reason": "Ang estate tax ay buwis sa karapatang ipamana ang ari-arian pagkamatay ng may-ari, batay sa halaga ng ari-arian. Ang donor's tax ay para sa ari-ariang ibinigay habang buhay pa ang may-ari."
        },
        "25": {
          "question": "Which of the following is classified as being a 'Head of the Family' for income tax purposes?",
          "choices": {
            "A": "a married individual with dependents",
            "B": "an unmarried individual with dependents",
            "C": "a married individual without dependents",
            "D": "an unmarried individual without dependents"
          },
          "correct": "B",
          "reason": "Sa lumang probisyon ng NIRC, ang 'head of the family' ay isang walang-asawa (o hiwalay sa batas) na may mga dependent (hal. anak o magulang na sinusuportahan). Mula nang ipatupad ang TRAIN law, wala nang personal exemption, pero sa historical context ng exam, ito ang sagot."
        },
        "26": {
          "question": "What Act implements the mandate for the 'State to make essential goods, health and other social services available to all the people at affordable cost'?",
          "choices": {
            "A": "Land Reform Program",
            "B": "Generics Act",
            "C": "Resettlement Act",
            "D": "Freedom Act"
          },
          "correct": "B",
          "reason": "Ang Generics Act (RA 6675) ang nagpapatupad ng mandato na gawing abot-kaya ang mga gamot at pangkalusugang serbisyo (sa pamamagitan ng generic na gamot). Ang Land Reform ay para sa lupa, ang Resettlement ay para sa paglilipat ng tirahan."
        },
        "27": {
          "question": "Which of the following is true about elective local officials?",
          "choices": {
            "A": "The term of office is three years",
            "B": "Barangay officials' term of office is indefinite",
            "C": "An official may be reelected indefinitely",
            "D": "An official may not serve for less than three terms"
          },
          "correct": "A",
          "reason": "Ang mga halal na lokal na opisyal (gobernador, alkalde, atbp.) ay may termino na tatlong taon at hanggang tatlong magkakasunod na termino lamang (Art. X, Sec. 8)."
        },
        "28": {
          "question": "What may be classified as alienable lands of the public domain?",
          "choices": {
            "A": "forest",
            "B": "mineral lands",
            "C": "national park",
            "D": "agricultural lands"
          },
          "correct": "D",
          "reason": "Ang agricultural lands ang tanging nabanggit na puwedeng ipamahagi bilang alienable lands of the public domain (Art. XII, Sec. 3). Ang forest, mineral, at national parks ay hindi maaaring ipamigay o ipagbili."
        },
        "29": {
          "question": "What is the maximum equity for aliens in a corporation or association in the exploration, development, and utilization of natural resources?",
          "choices": {
            "A": "60%",
            "B": "40%",
            "C": "50%",
            "D": "30%"
          },
          "correct": "B",
          "reason": "Ayon sa Art. XII, Sec. 2, ang paggalugad at paggamit ng likas-yaman ay para sa mga Pilipino o mga korporasyong may hindi bababa sa 60% Pilipino ang puhunan. Kaya ang pinakamataas na bahagi ng dayuhan ay 40%."
        },
        "30": {
          "question": "What is recognized by the State as the foundation of the nation?",
          "choices": {
            "A": "barangay",
            "B": "community",
            "C": "family",
            "D": "municipality"
          },
          "correct": "C",
          "reason": "Ayon sa Art. XV, Sec. 1, kinikilala ng Estado ang pamilya bilang pundasyon ng bansa. Halimbawa: ang edukasyon at pagpapalaki ng anak ay nagsisimula sa pamilya."
        }
      }
    }
  ]
}```

## File: ./frontend/src/data/quiz/cse-quiz-imported-2026-11-14.json
```
{
  "format": "cse-quiz",
  "version": 1,
  "exportedAt": "2026-11-14T11:29:13.565Z",
  "topics": [
    {
      "subject": "Mathematics",
      "subject_icon": "📐",
      "topic": "Word Problems and Operations",
      "topic_order": 1,
      "questions": {
        "1": {
          "question": "If 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55, then 11 + 12 + 13 + 14 + 15 + 16 + 17 + 18 + 19 + 20 = ?",
          "choices": {
            "A": "65",
            "B": "155",
            "C": "125",
            "D": "550"
          },
          "correct": "B",
          "reason": "Bawat numero mula 11–20 ay +10 kaysa 1–10. Sampung numero ang nadagdagan ng tig-10, kaya +100 sa 55. Halimbawa: 11 = 1+10, 12 = 2+10 ... → 55 + (10×10) = 155."
        },
        "2": {
          "question": "Evaluate: {16 − (24 − 8) + 22 × 8 − 8}",
          "choices": {
            "A": "40",
            "B": "48",
            "C": "64",
            "D": "168"
          },
          "correct": "D",
          "reason": "Sundin ang PEMDAS (parentheses muna, tapos multiplication, saka add/subtract). 16 − (24−8) + 22×8 − 8 = 16 − 16 + 176 − 8 = 168. Bitag: kapag pinauna mo ang subtraction bago ang multiplication, mali agad ang sagot."
        },
        "3": {
          "question": "Find the product: 800 × 125",
          "choices": {
            "A": "925",
            "B": "1,000",
            "C": "10,000",
            "D": "100,000"
          },
          "correct": "D",
          "reason": "800 × 125: i-multiply ang 8 × 125 = 1,000, tapos dagdagan ng dalawang zero → 100,000. Shortcut: ang 125 ay 1000÷8, kaya 800 × 125 = 800,000÷8 = 100,000."
        },
        "4": {
          "question": "Find the quotient: 8,000 ÷ 125",
          "choices": {
            "A": "48",
            "B": "64",
            "C": "80",
            "D": "88"
          },
          "correct": "B",
          "reason": "8,000 ÷ 125 = 64. Shortcut: ang 125 × 8 = 1,000, kaya sa 8,000 ay 8 × 8 = 64 ang magkasya."
        },
        "5": {
          "question": "Find the sum: 299 + 943 + 398 + 101",
          "choices": {
            "A": "1,531",
            "B": "1,641",
            "C": "1,741",
            "D": "122,222"
          },
          "correct": "C",
          "reason": "Pagsamahin sa pamamagitan ng pares na madaling bilugan: 299+101 = 400 at 943+398 = 1,341 → 400 + 1,341 = 1,741."
        },
        "6": {
          "question": "If 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55, then 101 + 102 + 103 + 104 + 105 + 106 + 107 + 108 + 109 + 110 = ?",
          "choices": {
            "A": "1,055",
            "B": "1,065",
            "C": "1,075",
            "D": "5,500"
          },
          "correct": "A",
          "reason": "Bawat numero 101–110 ay 100 + (1 hanggang 10). Kaya 10×100 = 1,000 plus 55 = 1,055. Halimbawa: 101 = 100+1, 110 = 100+10."
        },
        "7": {
          "question": "What is the remainder when 192,888 is divided by 8?",
          "choices": {
            "A": "0",
            "B": "4",
            "C": "8",
            "D": "24,111"
          },
          "correct": "A",
          "reason": "192,888 ÷ 8 = 24,111 eksaktong, kaya walang natira (remainder 0). Tip: ang huling 3 digits (888) ay divisible ng 8 (888÷8 = 111) kaya divisible ang buong numero."
        },
        "8": {
          "question": "Rounding 299,943 to the nearest thousands, the result is",
          "choices": {
            "A": "299,940",
            "B": "299,000",
            "C": "299,900",
            "D": "300,000"
          },
          "correct": "D",
          "reason": "Sa nearest thousands, tingnan ang hundreds digit. 299,943 → hundreds digit ay 9 (5 pataas) kaya round up → 300,000. Halimbawa: 4,600 → 5,000, pero 4,400 → 4,000."
        },
        "9": {
          "question": "If 23 + 28 + 37 + x + 53 = 168 and 23 + 28 + 40 + y + 50 = 120, find the value of x − y.",
          "choices": {
            "A": "36",
            "B": "48",
            "C": "56",
            "D": "64"
          },
          "correct": "B",
          "reason": "23+28+37+53 = 141, kaya x = 168−141 = 27. 23+28+40+50 = 141, kaya y = 120−141 = −21. x − y = 27 − (−21) = 48. Mag-ingat: minus ng negative = plus."
        },
        "10": {
          "question": "398.101 is read as",
          "choices": {
            "A": "three hundred ninety eight, one hundred one",
            "B": "three hundred ninety eight and one hundred one",
            "C": "three hundred ninety eight and one hundred one hundredths",
            "D": "three hundred ninety eight and one hundred one thousandths"
          },
          "correct": "D",
          "reason": "Ang tatlong digits pagkatapos ng decimal point ay thousandths. Kaya 398.101 = \"three hundred ninety-eight and one hundred one thousandths.\""
        },
        "11": {
          "question": "A number is divisible by 8 if its last three digits is divisible by 8. Which of the following numbers is divisible by 8?",
          "choices": {
            "A": "9,208",
            "B": "6,236",
            "C": "88,254",
            "D": "8,886"
          },
          "correct": "A",
          "reason": "Gamitin ang rule: last three digits ÷ 8. 208 ÷ 8 = 26 (divisible) kaya 9,208 ang sagot. Halimbawa ng mali: 236 ÷ 8 = 29.5 (hindi divisible)."
        },
        "12": {
          "question": "Which of the following statements is true?",
          "choices": {
            "A": "If a number is divisible by 5, then it is divisible by 10.",
            "B": "If a number is divisible by 10, then it is divisible by 5.",
            "C": "If a number is divisible by 3, then it is divisible by 6.",
            "D": "If a number is divisible by 4, then it is divisible by 8."
          },
          "correct": "B",
          "reason": "Kung divisible ng 10, laging divisible ng 5 (kasi 10 = 2×5). Halimbawa: 30 ay divisible ng 10 at ng 5. Pero ang 15 ay divisible ng 5 pero hindi ng 10 (mali ang A); ang 9 ay divisible ng 3 pero hindi ng 6 (mali ang C); ang 4 ay divisible ng 4 pero hindi ng 8 (mali ang D)."
        },
        "13": {
          "question": "Simplify: ½ (128 − 84) + ½ (128 − 84)",
          "choices": {
            "A": "0",
            "B": "20",
            "C": "44",
            "D": "64"
          },
          "correct": "C",
          "reason": "½(128−84) = ½(44) = 22. Kaya 22 + 22 = 44."
        },
        "14": {
          "question": "Simplify: 33⅓% of 48 + 12½% of 96 − 44 4/9% of 27",
          "choices": {
            "A": "12",
            "B": "16",
            "C": "24",
            "D": "48"
          },
          "correct": "B",
          "reason": "Kunin ang bawat percent: 33⅓% ng 48 = 16; 12½% ng 96 = 12; 44 4/9% ng 27 = 12. Kaya 16 + 12 − 12 = 16. Tip: 33⅓% = ⅓, 12½% = ⅛, 44 4/9% = 4/9."
        },
        "15": {
          "question": "Reduce 231/1001 to its lowest terms",
          "choices": {
            "A": "7/11",
            "B": "3/31",
            "C": "3/13",
            "D": "7/13"
          },
          "correct": "C",
          "reason": "Hatiin ang numerator at denominator sa parehong common factor. 231 = 3×7×11 at 1001 = 7×11×13. Alisin ang 7×11 → 3/13. Halimbawa: 6/10 → ÷2 → 3/5."
        },
        "16": {
          "question": "Which of the following is true?",
          "choices": {
            "A": "−16 > 8",
            "B": "8/64 = ¼",
            "C": "54 − 8 ≥ 8 − 54",
            "D": "9/117 = 1/17"
          },
          "correct": "C",
          "reason": "54−8 = 46 at 8−54 = −46. Mas malaki ang 46 kaysa −46, kaya totoo ang C. Mali ang iba: −16 ay hindi mas malaki sa 8; 8/64 = ⅛, hindi ¼; 9/117 = 1/13, hindi 1/17."
        },
        "17": {
          "question": "Find the value of x: (3/8)(72) + (5/7)(35)",
          "choices": {
            "A": "27",
            "B": "36",
            "C": "45",
            "D": "52"
          },
          "correct": "D",
          "reason": "(3/8)(72) = 27 at (5/7)(35) = 25. 27 + 25 = 52. Halimbawa: 72 ÷ 8 = 9, tapos ×3 = 27."
        },
        "18": {
          "question": "What is 25% of 228?",
          "choices": {
            "A": "52",
            "B": "57",
            "C": "54",
            "D": "912"
          },
          "correct": "B",
          "reason": "25% = ¼. 228 ÷ 4 = 57."
        },
        "19": {
          "question": "228 is 25% of what number?",
          "choices": {
            "A": "52",
            "B": "57",
            "C": "54",
            "D": "912"
          },
          "correct": "D",
          "reason": "Kung 25% (¼) ng isang numero ay 228, ang buong numero ay 228 × 4 = 912. Halimbawa: ¼ ng 912 = 228."
        },
        "20": {
          "question": "168 is what percent of 672?",
          "choices": {
            "A": "25%",
            "B": "50%",
            "C": "400%",
            "D": "80%"
          },
          "correct": "A",
          "reason": "Percent = bahagi ÷ kabuuan × 100. 168 ÷ 672 = 0.25 = 25%."
        },
        "21": {
          "question": "Evaluate: 123 × 0.1 + 123 × 0.01 + 123 × 0.001",
          "choices": {
            "A": "13.653",
            "B": "135.53",
            "C": "1,356.3",
            "D": "13,563"
          },
          "correct": "A",
          "reason": "Pagsamahin ang 123 × (0.1 + 0.01 + 0.001) = 123 × 0.111 = 13.653. Halimbawa: 123 × 0.1 = 12.3, 123 × 0.01 = 1.23, 123 × 0.001 = 0.123."
        },
        "22": {
          "question": "Find 3¼ of 16.",
          "choices": {
            "A": "7",
            "B": "16",
            "C": "39",
            "D": "52"
          },
          "correct": "D",
          "reason": "Ang \"of\" ay multiply. 3¼ = 13/4, kaya 13/4 × 16 = 13 × 4 = 52."
        },
        "23": {
          "question": "Evaluate: 1 + ½ + ¼ + ⅛ = ?",
          "choices": {
            "A": "1 3/16",
            "B": "1 3/8",
            "C": "1 5/8",
            "D": "1 7/8"
          },
          "correct": "D",
          "reason": "Gawing eighths: 8/8 + 4/8 + 2/8 + 1/8 = 15/8 = 1 7/8. Halimbawa: parang hati ng pizza na 8 slices: 1 buo + ½ + ¼ + ⅛."
        },
        "24": {
          "question": "Find the value of x in the equation: 3x + 7 = 28",
          "choices": {
            "A": "7",
            "B": "−7",
            "C": "±7",
            "D": "4"
          },
          "correct": "A",
          "reason": "3x + 7 = 28 → 3x = 21 → x = 7. Isolate ang x: ibawas muna ang 7, saka hatiin sa 3."
        },
        "25": {
          "question": "Which of the following has the greatest value?",
          "choices": {
            "A": "(2/3)²",
            "B": "(3/4)²",
            "C": "(1/2)³",
            "D": "(2/5)²"
          },
          "correct": "B",
          "reason": "I-compute sa decimal: A = 4/9 ≈ 0.444; B = 9/16 = 0.5625; C = 1/8 = 0.125; D = 4/25 = 0.16. Pinakamalaki ang B (3/4)² = 9/16."
        },
        "26": {
          "question": "Which of the following cannot yield an odd integer when divided by 10?",
          "choices": {
            "A": "The sum of two odd integers",
            "B": "The product of a prime number and an odd integer",
            "C": "The product of two odd integers",
            "D": "The sum of three consecutive integers"
          },
          "correct": "C",
          "reason": "Ang product ng dalawang odd ay laging odd, at ang odd ÷ 10 ay hindi kailanman integer. Kaya hindi ito makakabuo ng odd integer. Halimbawa ng ibang options na pwede: 3+7 = 10 → 10÷10 = 1 (odd); 2×5 = 10 → 1; 9+10+11 = 30 → 3."
        },
        "27": {
          "question": "If 8x + 12 = 24, what is the value of 24x + 36?",
          "choices": {
            "A": "4",
            "B": "6",
            "C": "8",
            "D": "72"
          },
          "correct": "D",
          "reason": "Huwag nang hanapin ang x. Pansinin na ang 24x + 36 = 3 × (8x + 12). Kaya 3 × 24 = 72."
        },
        "28": {
          "question": "If a positive integer m is divisible by both 3 and 8, then m must also be divisible by",
          "choices": {
            "A": "10",
            "B": "18",
            "C": "24",
            "D": "60"
          },
          "correct": "C",
          "reason": "Kapag divisible sa 3 at 8 (na walang common factor), divisible din ito sa 3×8 = 24. Halimbawa: 48 at 72 ay divisible ng 3 at 8, at divisible din ng 24."
        },
        "29": {
          "question": "If positive integers m and n are not both odd, which of the following is always true?",
          "choices": {
            "A": "m + n is even",
            "B": "mn is even",
            "C": "m − n cannot be odd",
            "D": "m + n − 1 is odd"
          },
          "correct": "B",
          "reason": "Kung hindi pareho odd, kahit isa ay even. Kapag may even na factor, even ang product. Halimbawa: m=2, n=3 → mn = 6 (even). Mali ang A: 2+3 = 5 (odd)."
        },
        "30": {
          "question": "Find the average temperature change for the 12-day period. Temperature changes in °C: 2.6, 3.8, 7.0, 4.5, 4.6, 7.9, 5.0, 8.1, 4.4, 5.3, 6.4, 5.2",
          "choices": {
            "A": "4.8",
            "B": "4.9",
            "C": "5.2",
            "D": "5.4"
          },
          "correct": "D",
          "reason": "Average = sum ÷ bilang. Sum ng 12 numbers = 64.8, kaya 64.8 ÷ 12 = 5.4."
        },
        "31": {
          "question": "Find the set of all odd numbers x satisfying 5x − 4 ≤ 0 and 3x − 7 ≥ 0.",
          "choices": {
            "A": "{x | x ≠ 1}",
            "B": "{x | x < 0}",
            "C": "{x | x > 0}",
            "D": "∅ (empty set)"
          },
          "correct": "D",
          "reason": "5x − 4 ≤ 0 → x ≤ 4/5 (0.8). 3x − 7 ≥ 0 → x ≥ 7/3 (≈2.33). Walang numerong sabay na ≤ 0.8 at ≥ 2.33, kaya empty set (∅) ang sagot."
        },
        "32": {
          "question": "State the property illustrated: If 8(6) + 4 = 48 + 4 = 52, then 8(6) + 4 = 52.",
          "choices": {
            "A": "Distributive property of multiplication over addition",
            "B": "Commutative property of addition",
            "C": "Associative property",
            "D": "Transitive property of equality"
          },
          "correct": "D",
          "reason": "Transitive property: kapag a = b at b = c, ang a = c. Dito, 8(6)+4 = 48+4 at 48+4 = 52, kaya 8(6)+4 = 52. Halimbawa: kung si Ana = Ben ang edad, at si Ben = Carl, si Ana = Carl."
        },
        "33": {
          "question": "If 8 less than the product of a number and −3 is greater than 7, which of the following could be that number?",
          "choices": {
            "A": "−6",
            "B": "−5",
            "C": "5",
            "D": "6"
          },
          "correct": "A",
          "reason": "Isulat: −3n − 8 > 7 → −3n > 15 → n < −5 (baliktad ang sign kapag hinati sa negative). Ang −6 lang ang mas maliit sa −5. Subukan: −3(−6) − 8 = 18 − 8 = 10 > 7 ✓"
        },
        "34": {
          "question": "The difference between 8 times a number and 17 is 231. Find the number.",
          "choices": {
            "A": "31",
            "B": "37",
            "C": "48",
            "D": "1,984"
          },
          "correct": "A",
          "reason": "8n − 17 = 231 → 8n = 248 → n = 31."
        },
        "35": {
          "question": "Four times the perimeter of a parking lot is 16 less than 2,000 meters. What is the perimeter of the lot?",
          "choices": {
            "A": "496 m",
            "B": "504 m",
            "C": "992 m",
            "D": "1,008 m"
          },
          "correct": "A",
          "reason": "4P = 2,000 − 16 = 1,984 → P = 496 m."
        },
        "36": {
          "question": "The amount of last month's telephone bill, decreased by the product of 3 and Php30.00, equals Php1,319.50.",
          "choices": {
            "A": "Php 1,229.50",
            "B": "Php 1,289.50",
            "C": "Php 1,310.50",
            "D": "Php 1,409.50"
          },
          "correct": "D",
          "reason": "Bill − (3 × 30) = 1,319.50 → Bill = 1,319.50 + 90 = Php 1,409.50."
        },
        "37": {
          "question": "Eighteen less than seven times the number of sandwiches is 269. How many sandwiches are there?",
          "choices": {
            "A": "32",
            "B": "41",
            "C": "44",
            "D": "45"
          },
          "correct": "B",
          "reason": "7n − 18 = 269 → 7n = 287 → n = 41."
        },
        "38": {
          "question": "A house and lot are sold for Php 14M. The house costs 1.5 times as much as the lot. How much does the lot cost?",
          "choices": {
            "A": "Php 5.6M",
            "B": "Php 8.4M",
            "C": "Php 10.5M",
            "D": "Php 21M"
          },
          "correct": "A",
          "reason": "Lot = L, house = 1.5L, kaya 2.5L = 14M → L = 5.6M. Check: house = 8.4M, 8.4 + 5.6 = 14 ✓"
        },
        "39": {
          "question": "The sale price of a television set is Php 7,200. The discount rate is 40%. Find its regular price.",
          "choices": {
            "A": "Php 4,320",
            "B": "Php 12,000",
            "C": "Php 6,800",
            "D": "Php 10,000"
          },
          "correct": "B",
          "reason": "May 40% discount, ibig sabihin 60% na lang ang binabayaran. 60% ng regular price = 7,200 → 7,200 ÷ 0.60 = Php 12,000."
        },
        "40": {
          "question": "The lengths of the sides of a triangle can be represented by three consecutive integers. The perimeter of the triangle is 96 cm. Find the length of the longest side.",
          "choices": {
            "A": "28",
            "B": "32",
            "C": "33",
            "D": "36"
          },
          "correct": "C",
          "reason": "Tatlong magkakasunod na integer: n, n+1, n+2. Sum = 3n + 3 = 96 → 3n = 93 → n = 31. Kaya 31, 32, 33 at 33 ang pinakamahaba."
        },
        "41": {
          "question": "The length of a rectangle is 8 meters more than twice its width. The perimeter is 112 meters. Find its area.",
          "choices": {
            "A": "16 m",
            "B": "24 m",
            "C": "28 m²",
            "D": "640 m²"
          },
          "correct": "D",
          "reason": "L = 2W + 8. Perimeter = 2(L+W) = 112 → L + W = 56 → 3W + 8 = 56 → W = 16, L = 40. Area = 16 × 40 = 640 m²."
        },
        "42": {
          "question": "Paula is twice as old as Queenie. Seven years ago the sum of their ages was 16. How old is Queenie now?",
          "choices": {
            "A": "8",
            "B": "10",
            "C": "16",
            "D": "20"
          },
          "correct": "B",
          "reason": "Q = Queenie, P = 2Q. Noong 7 taon na ang nakalipas: (2Q−7) + (Q−7) = 16 → 3Q − 14 = 16 → 3Q = 30 → Q = 10. Check: Paula = 20; (20−7)+(10−7) = 13+3 = 16 ✓"
        },
        "43": {
          "question": "For what value of x will x be the average of 2, 4x, 6, 8, 10?",
          "choices": {
            "A": "4",
            "B": "12",
            "C": "26",
            "D": "39"
          },
          "correct": "C",
          "reason": "Average = sum ÷ 5, at dapat ay x. Sum = 26 + 4x, kaya (26+4x)/5 = x → 26 + 4x = 5x → 26 = x → x = 26."
        },
        "44": {
          "question": "How many integers between 197 and 303 are divisible by 4 or 10?",
          "choices": {
            "A": "25",
            "B": "26",
            "C": "31",
            "D": "37"
          },
          "correct": "C",
          "reason": "Gamitin ang inclusion–exclusion. Multiples ng 4 (200–300): 26. Multiples ng 10: 11. Overlap (multiples ng 20): 6. Total: 26 + 11 − 6 = 31."
        },
        "45": {
          "question": "A patient must take his medication every 7 hours starting at 7:00 AM, Sunday. On what day will the patient first receive his medication at 8 AM?",
          "choices": {
            "A": "Sunday",
            "B": "Wednesday",
            "C": "Thursday",
            "D": "Tuesday"
          },
          "correct": "D",
          "reason": "7 doses = 7×7 = 49 oras, at 49 oras pagkatapos ng Sunday 7 AM ay Tuesday 8 AM. Sequence: 7 AM Sun → 2 PM → 9 PM → 4 AM Mon → 11 AM → 6 PM → 1 AM Tue → 8 AM Tue."
        },
        "46": {
          "question": "Of the 300 grocery shoppers surveyed, 96 did not have a regular day of the week on which they shop. What percentage of the shoppers did not have a regular day of shopping?",
          "choices": {
            "A": "32%",
            "B": "48%",
            "C": "64%",
            "D": "96%"
          },
          "correct": "A",
          "reason": "96 ÷ 300 = 0.32 = 32%."
        },
        "47": {
          "question": "A water container has 100 mL of water in it and is 20% full. How many mL of water can this container hold if it is full?",
          "choices": {
            "A": "200 mL",
            "B": "400 mL",
            "C": "500 mL",
            "D": "800 mL"
          },
          "correct": "C",
          "reason": "100 mL ay 20% (⅕) ng laman, kaya buong container = 100 × 5 = 500 mL."
        },
        "48": {
          "question": "How many containers each occupying an area of 2⅛ square meters can be stored in a 952 square meter warehouse?",
          "choices": {
            "A": "358",
            "B": "448",
            "C": "530",
            "D": "630"
          },
          "correct": "B",
          "reason": "952 ÷ 2⅛ = 952 ÷ 17/8 = 952 × 8/17 = 56 × 8 = 448."
        },
        "49": {
          "question": "A starting salary of a secretary at ABC Computer Specialists is Php15,000 a month. Next year the starting salary will be raised to Php18,000. What is the rate of increase in the starting salary?",
          "choices": {
            "A": "3%",
            "B": "20%",
            "C": "25%",
            "D": "30%"
          },
          "correct": "B",
          "reason": "Rate of increase = dagdag ÷ orihinal = 3,000 ÷ 15,000 = 20%."
        },
        "50": {
          "question": "The cost of a square meter commercial lot in a certain municipality five years ago was Php12,500. There was a 420% increase in the price in the last five years. What is the price per square meter of that lot today?",
          "choices": {
            "A": "Php 17,500",
            "B": "Php 52,500",
            "C": "Php 19,000",
            "D": "Php 65,000"
          },
          "correct": "D",
          "reason": "420% increase ay 4.2 × 12,500 = 52,500 na dagdag. Bagong presyo = 12,500 + 52,500 = Php 65,000. Huwag ihinto sa 52,500 (increase lang iyon)."
        },
        "51": {
          "question": "Last month, a store manager decided to decrease the prices of all items by 10%. This month, he increased the prices by 10%. What would be the price for a pair of pants that had cost Php750 before prices were decreased last month?",
          "choices": {
            "A": "Php 742.50",
            "B": "Php 750.00",
            "C": "Php 675.00",
            "D": "Php 825.00"
          },
          "correct": "A",
          "reason": "Bawas 10%: 750 × 0.9 = 675. Dagdag 10% sa 675: 675 × 1.1 = 742.50. Hindi bumabalik sa 750 kasi magkaiba ang basehan."
        },
        "52": {
          "question": "When the original price of an item is increased by a certain rate, the increased price is Php 3,100. When the original price is decreased by the same rate, the decreased price is Php 1,900. What is the original price of this item?",
          "choices": {
            "A": "Php 1,200",
            "B": "Php 200",
            "C": "Php 2,500",
            "D": "Php 2,800"
          },
          "correct": "C",
          "reason": "(1+r)x = 3,100 at (1−r)x = 1,900. Idagdag: 2x = 5,000 → x = 2,500. Check: r = 600/2,500 = 24%; 2,500 ± 600 = 3,100/1,900 ✓"
        },
        "53": {
          "question": "How much must one invest in corporate bonds paying 9.6% in order to earn an income of Php 12,000 per annum?",
          "choices": {
            "A": "Php 11,520",
            "B": "Php 23,040",
            "C": "Php 125,000",
            "D": "Php 250,000"
          },
          "correct": "C",
          "reason": "Income = rate × investment → 12,000 = 0.096 × I → I = 12,000 ÷ 0.096 = Php 125,000."
        },
        "54": {
          "question": "How much must be cut from the edge of a piece of glass 16⅛ cm wide, in order for it to fit into an opening 14¾ cm wide?",
          "choices": {
            "A": "2 3/8 cm",
            "B": "1 7/8 cm",
            "C": "1 3/8 cm",
            "D": "2 5/8 cm"
          },
          "correct": "C",
          "reason": "16 1/8 − 14 3/4 = 16 1/8 − 14 6/8 = 1 3/8 cm."
        },
        "55": {
          "question": "A race car traveled for 2½ hours with an average speed of 132 5/8 km per hour. Find the total distance it covered.",
          "choices": {
            "A": "264 5/16 km",
            "B": "331 9/16 km",
            "C": "330 5/16 km",
            "D": "135 1/8 km"
          },
          "correct": "B",
          "reason": "Distance = oras × bilis = 2½ × 132 5/8 = 5/2 × 1061/8 = 5305/16 = 331 9/16 km."
        },
        "56": {
          "question": "If the weight of a 241-kg freight car increases 3⅛ times when fully loaded, what will be its weight with a full load?",
          "choices": {
            "A": "750 3/8 kg",
            "B": "824 3/8 kg",
            "C": "720 5/8 kg",
            "D": "753 1/8 kg"
          },
          "correct": "D",
          "reason": "241 × 3 1/8 = 241 × 25/8 = 6025/8 = 753 1/8 kg."
        },
        "57": {
          "question": "How many liters will remain in a 1,000-liter storage tank if 8.2% of the liquid has evaporated due to excessive heat?",
          "choices": {
            "A": "918",
            "B": "991.8",
            "C": "999.18",
            "D": "998"
          },
          "correct": "A",
          "reason": "8.2% ang na-evaporate, kaya 91.8% ang natira: 1,000 × 0.918 = 918 L."
        },
        "58": {
          "question": "Dante recently sold some stocks for which he originally bought for Php 358. If it has increased in value by 116%, how much did he receive for the stock?",
          "choices": {
            "A": "Php 678.27",
            "B": "Php 772",
            "C": "Php 773.28",
            "D": "Php 778"
          },
          "correct": "C",
          "reason": "116% increase = bagong halaga = 100% + 116% = 216% ng orihinal. 358 × 2.16 = Php 773.28."
        },
        "59": {
          "question": "Mr. Manny Vargas, a real estate broker, sold a building for Php 175M. How much did he receive if his commission is 5.5% of the sale price of the property?",
          "choices": {
            "A": "Php 9.5M",
            "B": "Php 9.7M",
            "C": "Php 9.625M",
            "D": "Php 180.5M"
          },
          "correct": "C",
          "reason": "Commission = 5.5% × 175M = 0.055 × 175M = Php 9.625M."
        },
        "60": {
          "question": "If 560 out of 700 examinees passed in the recent Career Service exam for Sub-Professional level, what percent of the examinees passed?",
          "choices": {
            "A": "65%",
            "B": "72%",
            "C": "80%",
            "D": "140%"
          },
          "correct": "C",
          "reason": "560 ÷ 700 = 0.80 = 80%."
        },
        "61": {
          "question": "Mr. Cruz borrows Php 750,000 from Asian Bank and is charged Php 90,000 interest. What rate of interest did Asian Bank charge for the loan?",
          "choices": {
            "A": "8%",
            "B": "9%",
            "C": "10%",
            "D": "12%"
          },
          "correct": "D",
          "reason": "Rate = interest ÷ principal = 90,000 ÷ 750,000 = 0.12 = 12%."
        },
        "62": {
          "question": "A store sells shirts for Php 1,078 each or 3 for Php 2,997. How much would one save by buying 3 shirts at a time instead of 3 shirts, one at a time?",
          "choices": {
            "A": "Php 237",
            "B": "Php 921",
            "C": "Php 1,237",
            "D": "Php 1,921"
          },
          "correct": "A",
          "reason": "Isa-isa: 3 × 1,078 = 3,234. Pakete: 2,997. Matitipid = 3,234 − 2,997 = Php 237."
        },
        "63": {
          "question": "A computer can be rented for Php 1,745 a week or Php 347.50 a day. You need the computer only for 6 days. At which rate (daily or weekly) would it be cheaper to rent and by how much cheaper?",
          "choices": {
            "A": "Weekly: Php 340 cheaper",
            "B": "Daily: Php 240 cheaper",
            "C": "Daily: Php 340 cheaper",
            "D": "Weekly: Php 240 cheaper"
          },
          "correct": "A",
          "reason": "Daily para sa 6 araw: 6 × 347.50 = 2,085. Weekly: 1,745. Mas mura ang weekly ng 2,085 − 1,745 = Php 340. (Kahit 6 araw lang gagamitin, mas mura pa rin ang weekly.)"
        },
        "64": {
          "question": "A 1.25 kg box of Brand A detergent sells for Php 87.50. A 1.5 kg box of Brand B detergent sells for Php 103.20. What is the difference in the price per kg?",
          "choices": {
            "A": "Php 1.20",
            "B": "Php 1.50",
            "C": "Php 1.80",
            "D": "Php 2.00"
          },
          "correct": "A",
          "reason": "Brand A: 87.50 ÷ 1.25 = Php 70/kg. Brand B: 103.20 ÷ 1.5 = Php 68.80/kg. Diperensya = Php 1.20."
        },
        "65": {
          "question": "A 30-cm long plastic pipe costs Php 249. At this rate, what is the price of the pipe per meter?",
          "choices": {
            "A": "Php 830",
            "B": "Php 840",
            "C": "Php 747",
            "D": "Php 749"
          },
          "correct": "A",
          "reason": "Php 249 bawat 30 cm; 1 m = 100 cm kaya (100 ÷ 30) × 249 = Php 830 bawat metro. Gamitin ang proportion: 249 × 100 ÷ 30."
        },
        "66": {
          "question": "A homeowner can rent a chain saw from a rental agency at Php 2,700 a day. The brand new saw can be bought for Php 18,900. For how many days could the homeowner rent the saw before renting would cost more than buying?",
          "choices": {
            "A": "5",
            "B": "6",
            "C": "7",
            "D": "8"
          },
          "correct": "C",
          "reason": "Break-even: 18,900 ÷ 2,700 = 7 araw. Sa 7 araw, magkapareho ang gastos; mas magiging mahal ang renting pagkatapos nito, kaya 7 ang sagot sa kontekstong ito."
        },
        "67": {
          "question": "Paula uses ten 100-watt bulbs in her house. She uses these bulbs at an average of 5 hours each day. How many kWh do these bulbs use each day?",
          "choices": {
            "A": "5",
            "B": "10",
            "C": "50",
            "D": "5,000"
          },
          "correct": "A",
          "reason": "Kilowatt-hour = (watts × oras) ÷ 1,000. 10 bulbs × 100 W = 1,000 W = 1 kW. 1 kW × 5 oras = 5 kWh."
        },
        "68": {
          "question": "An electric range uses 12,200 watts per hour and is run an average of 60 hours a year. How many kilowatt-hours is this?",
          "choices": {
            "A": "73.2",
            "B": "732",
            "C": "7,320",
            "D": "7.32"
          },
          "correct": "B",
          "reason": "12,200 W = 12.2 kW. 12.2 × 60 oras = 732 kWh."
        },
        "69": {
          "question": "A DVD movie, purchased for Php 440, was marked up 25% on the selling price. Later, as retail prices fell, this movie was marked down 20% on the current sale price. Find its new sale price.",
          "choices": {
            "A": "Php 352",
            "B": "Php 440",
            "C": "Php 500",
            "D": "Php 550"
          },
          "correct": "B",
          "reason": "Markup 25%: 440 × 1.25 = 550. Markdown 20% sa 550: 550 × 0.80 = 440. Bumalik sa orihinal dahil 1.25 × 0.80 = 1."
        },
        "70": {
          "question": "VNS Inc. bought these office supplies last week: 1,320 pens @ Php 0.125; 1,480 packs paper clips @ Php 0.625; 1,240 boxes of tape @ Php 0.875; 1,720 boxes of cards @ Php 0.80. A 5% sales tax is added. What was the company's total bill?",
          "choices": {
            "A": "Php 173.25",
            "B": "Php 3,551",
            "C": "Php 971.25",
            "D": "Php 3,728.55"
          },
          "correct": "D",
          "reason": "Pens: 1,320 × 0.125 = 165; clips: 1,480 × 0.625 = 925; tape: 1,240 × 0.875 = 1,085; cards: 1,720 × 0.80 = 1,376. Subtotal = 3,551. Dagdag 5% tax: 3,551 × 1.05 = Php 3,728.55."
        },
        "71": {
          "question": "The question \"How many flowers are needed to border a rectangular garden?\" involves:",
          "choices": {
            "A": "weight",
            "B": "perimeter",
            "C": "volume",
            "D": "area"
          },
          "correct": "B",
          "reason": "\"Border\" ay paligid, kaya perimeter ang kailangan. Halimbawa: bakod ng hardin = perimeter, lupa sa loob = area, laman ng tubig = volume."
        },
        "72": {
          "question": "How many meters of fencing are needed to enclose an 84-meter by 48-meter rectangular garden?",
          "choices": {
            "A": "132 m",
            "B": "244 m",
            "C": "264 m",
            "D": "4,032 m²"
          },
          "correct": "C",
          "reason": "Perimeter = 2(84 + 48) = 2(132) = 264 m. Mali ang D dahil 4,032 m² ay area, hindi haba ng bakod."
        },
        "73": {
          "question": "How many 1-cm square stickers are needed to cover a photo box 4 cm long, 3 cm wide, and 5 cm high?",
          "choices": {
            "A": "47",
            "B": "60",
            "C": "88",
            "D": "94"
          },
          "correct": "D",
          "reason": "Kailangang takpan ang buong ibabaw: surface area = 2(lw + lh + wh) = 2(12 + 20 + 15) = 2(47) = 94 cm². Kaya 94 stickers."
        },
        "74": {
          "question": "One side of a triangle is 3 cm longer than the shortest side, and the other side is 4 cm longer than the shortest side. How long is the shortest side if the perimeter is 67 cm?",
          "choices": {
            "A": "20 cm",
            "B": "23 cm",
            "C": "24 cm",
            "D": "27 cm"
          },
          "correct": "A",
          "reason": "Shortest = s. Ang iba ay s+3 at s+4. s + s+3 + s+4 = 67 → 3s + 7 = 67 → 3s = 60 → s = 20 cm."
        },
        "75": {
          "question": "The length of a rectangle is 2 cm less than twice its width. What is its width in cm if its perimeter is 50 cm?",
          "choices": {
            "A": "8",
            "B": "9",
            "C": "16",
            "D": "25"
          },
          "correct": "B",
          "reason": "L = 2W − 2. 2(L+W) = 50 → L + W = 25 → 2W − 2 + W = 25 → 3W = 27 → W = 9. Check: L = 16; 2(16+9) = 50 ✓"
        }
      }
    },
    {
      "subject": "Mathematics",
      "subject_icon": "📐",
      "topic": "Data Sufficiency",
      "topic_order": 2,
      "questions": {
        "1": {
          "question": "By what percent was the price per kilo of chicken increased? (1) The price per kilo of chicken was increased by Php 20. (2) The price per kilo of chicken became Php 120 after the increase.",
          "choices": {
            "A": "Statement (1) ALONE ang sapat, hindi ang (2).",
            "B": "Statement (2) ALONE ang sapat, hindi ang (1).",
            "C": "BOTH statements TOGETHER ang sapat, pero hindi ang isa lang.",
            "D": "Each statement ALONE ay sapat.",
            "E": "Hindi sapat kahit pagsamahin ang (1) at (2)."
          },
          "correct": "C",
          "reason": "Para makuha ang % increase, kailangan ang (increase ÷ original). Statement (1) lang: ₱20 increase lang, walang original — insufficient. Statement (2) lang: bagong presyo ₱120, walang original — insufficient. Pinagsama: original = 120 − 20 = ₱100, % increase = 20 ÷ 100 = 20% — sufficient. Kaya C."
        },
        "2": {
          "question": "A real estate broker received a commission of 8% of the selling price of a certain property. What was the selling price of the property? (1) The selling price minus the real estate agent's commission was Php 9,200,000. (2) The selling price was 250% of the original purchase price of Php 4,000,000.",
          "choices": {
            "A": "Statement (1) ALONE ang sapat, hindi ang (2).",
            "B": "Statement (2) ALONE ang sapat, hindi ang (1).",
            "C": "BOTH statements TOGETHER ang sapat, pero hindi ang isa lang.",
            "D": "Each statement ALONE ay sapat.",
            "E": "Hindi sapat kahit pagsamahin ang (1) at (2)."
          },
          "correct": "D",
          "reason": "Statement (1): SP − 8% SP = 0.92 SP = ₱9.2M → SP = ₱10M — sufficient. Statement (2): SP = 250% × ₱4M = ₱10M — sufficient din. Kaya D (bawat isa ay sapat)."
        },
        "3": {
          "question": "Cherry and Keanna were among those who sold raffle tickets to raise money for the club. If Cherry and Keanna sold a total of 168 tickets, how many tickets did Cherry sell? (1) Keanna sold 60% as many raffle tickets as Cherry. (2) Keanna sold 8% of all the raffle tickets sold.",
          "choices": {
            "A": "Statement (1) ALONE ang sapat, hindi ang (2).",
            "B": "Statement (2) ALONE ang sapat, hindi ang (1).",
            "C": "BOTH statements TOGETHER ang sapat, pero hindi ang isa lang.",
            "D": "Each statement ALONE ay sapat.",
            "E": "Hindi sapat kahit pagsamahin ang (1) at (2)."
          },
          "correct": "A",
          "reason": "Statement (1): K = 0.6C, C + K = 168 → 1.6C = 168 → C = 105 — sufficient. Statement (2): K = 8% ng lahat ng raffle tickets, pero wala ang total tickets — insufficient. Kaya A."
        },
        "4": {
          "question": "What is the ratio of m : s : a? (1) a = 2 and ms = 64. (2) m/s = 2 and a/s = 1/4.",
          "choices": {
            "A": "Statement (1) ALONE ang sapat, hindi ang (2).",
            "B": "Statement (2) ALONE ang sapat, hindi ang (1).",
            "C": "BOTH statements TOGETHER ang sapat, pero hindi ang isa lang.",
            "D": "Each statement ALONE ay sapat.",
            "E": "Hindi sapat kahit pagsamahin ang (1) at (2)."
          },
          "correct": "B",
          "reason": "Statement (1): a = 2 at ms = 64 — maraming pares (m, s) na may product na 64 (hal. 8×8, 16×4), hindi matukoy ang ratio — insufficient. Statement (2): m/s = 2 at a/s = 1/4. Kung s = 4, m = 8, a = 1 → ratio 8 : 4 : 1 — sufficient. Kaya B."
        },
        "5": {
          "question": "If x and y are integers, is x divisible by 17? (1) The product xy is divisible by 17. (2) y is not divisible by 17.",
          "choices": {
            "A": "Statement (1) ALONE ang sapat, hindi ang (2).",
            "B": "Statement (2) ALONE ang sapat, hindi ang (1).",
            "C": "BOTH statements TOGETHER ang sapat, pero hindi ang isa lang.",
            "D": "Each statement ALONE ay sapat.",
            "E": "Hindi sapat kahit pagsamahin ang (1) at (2)."
          },
          "correct": "C",
          "reason": "Ang 17 ay prime. Statement (1) lang: xy divisible ng 17 → x O y divisible (hindi sigurado kung alin) — insufficient. Statement (2) lang: y not divisible ng 17 — insufficient. Pinagsama: xy divisible ng 17 pero y hindi → x ang divisible ng 17 — sufficient. Kaya C."
        },
        "6": {
          "question": "On Saturday morning the printing machine of Gerpress Printing ran continuously at uniform rate to fill a production order. At what time did it completely fill the order that morning? (1) The supervisor began the plan for production 8:08 AM. (2) The machine had filled 50% of the order at 9:48 AM and 5/6 of the order by 10:18 AM.",
          "choices": {
            "A": "Statement (1) ALONE ang sapat, hindi ang (2).",
            "B": "Statement (2) ALONE ang sapat, hindi ang (1).",
            "C": "BOTH statements TOGETHER ang sapat, pero hindi ang isa lang.",
            "D": "Each statement ALONE ay sapat.",
            "E": "Hindi sapat kahit pagsamahin ang (1) at (2)."
          },
          "correct": "B",
          "reason": "Statement (1): 8:08 AM na simula ng plano — walang bilis ng makina, insufficient. Statement (2): 50% at 9:48, 5/6 at 10:18. Sa 30 min (9:48→10:18) natapos ang 1/3 (5/6 − 1/2 = 1/3). Buong order = 30 × 3 = 90 min. Natitirang 1/6 mula 10:18 = 15 min → 10:33 AM — sufficient. Kaya B."
        },
        "7": {
          "question": "How many books does Gerard have? (1) If Gerard had 18 fewer books, he would have only half as many as he actually has. (2) Gerard has three times as many fiction as non-fiction books.",
          "choices": {
            "A": "Statement (1) ALONE ang sapat, hindi ang (2).",
            "B": "Statement (2) ALONE ang sapat, hindi ang (1).",
            "C": "BOTH statements TOGETHER ang sapat, pero hindi ang isa lang.",
            "D": "Each statement ALONE ay sapat.",
            "E": "Hindi sapat kahit pagsamahin ang (1) at (2)."
          },
          "correct": "A",
          "reason": "Statement (1): x − 18 = x/2 → x/2 = 18 → x = 36 — sufficient. Statement (2): fiction = 3 × non-fiction (ratio lang 3:1) — puwedeng 4, 8, 40... insufficient. Kaya A."
        },
        "8": {
          "question": "What number is 24% of x? (1) 16 is 8% of x. (2) 1/8 of x is 25.",
          "choices": {
            "A": "Statement (1) ALONE ang sapat, hindi ang (2).",
            "B": "Statement (2) ALONE ang sapat, hindi ang (1).",
            "C": "BOTH statements TOGETHER ang sapat, pero hindi ang isa lang.",
            "D": "Each statement ALONE ay sapat.",
            "E": "Hindi sapat kahit pagsamahin ang (1) at (2)."
          },
          "correct": "D",
          "reason": "Statement (1): 8% × x = 16 → x = 200 → 24% × 200 = 48 — sufficient. Statement (2): (1/8) × x = 25 → x = 200 → 24% × 200 = 48 — sufficient din. Kaya D."
        },
        "9": {
          "question": "What was the total amount raised for the Payatas Tragedy from private corporations and personal donations? (1) Of the amount donated, 48% came from private corporations. (2) Of the amount donated, Php 15M came from personal donations.",
          "choices": {
            "A": "Statement (1) ALONE ang sapat, hindi ang (2).",
            "B": "Statement (2) ALONE ang sapat, hindi ang (1).",
            "C": "BOTH statements TOGETHER ang sapat, pero hindi ang isa lang.",
            "D": "Each statement ALONE ay sapat.",
            "E": "Hindi sapat kahit pagsamahin ang (1) at (2)."
          },
          "correct": "C",
          "reason": "Statement (1): 48% corporations → 52% personal, pero walang halaga — insufficient. Statement (2): ₱15M personal, pero walang percent ng total — insufficient. Pinagsama: 52% ng total = ₱15M → total = 15M ÷ 0.52 ≈ ₱28.85M — sufficient. Kaya C."
        },
        "10": {
          "question": "Mary's total score in the three bowling games was 530. What were her scores? (1) Mary's highest score was 198. (2) The sum of Mary's two highest scores was 368.",
          "choices": {
            "A": "Statement (1) ALONE ang sapat, hindi ang (2).",
            "B": "Statement (2) ALONE ang sapat, hindi ang (1).",
            "C": "BOTH statements TOGETHER ang sapat, pero hindi ang isa lang.",
            "D": "Each statement ALONE ay sapat.",
            "E": "Hindi sapat kahit pagsamahin ang (1) at (2)."
          },
          "correct": "C",
          "reason": "Statement (1): highest = 198 lang — insufficient. Statement (2): sum ng dalawang highest = 368, kaya lowest = 530 − 368 = 162 — pero hindi alam alin sa dalawa ang highest — insufficient. Pinagsama: highest = 198, second = 368 − 198 = 170, lowest = 162 — sufficient. Kaya C."
        },
        "11": {
          "question": "Is the value of n closer to 48 than to 78? (1) 78 − n > n − 48. (2) n > 60.",
          "choices": {
            "A": "Statement (1) ALONE ang sapat, hindi ang (2).",
            "B": "Statement (2) ALONE ang sapat, hindi ang (1).",
            "C": "BOTH statements TOGETHER ang sapat, pero hindi ang isa lang.",
            "D": "Each statement ALONE ay sapat.",
            "E": "Hindi sapat kahit pagsamahin ang (1) at (2)."
          },
          "correct": "A",
          "reason": "Ang midpoint ng 48 at 78 ay 63. Mas malapit sa 48 kung n < 63. Statement (1): 78 − n > n − 48 → 126 > 2n → n < 63 — sufficient. Statement (2): n > 60 — puwedeng 61 (closer to 48) o 70 (closer to 78) — insufficient. Kaya A."
        },
        "12": {
          "question": "In last Saturday's Midnight Sale at Gaisano Mall, a certain shop sold 75% of the shirts in its inventory. Each shirt was sold for Php 358. What was the total revenue from the sale of these shirts on that day? (1) When the shop opened last Saturday, there were 448 shirts in its inventory. (2) All but 112 of the shop's inventory were sold last Saturday.",
          "choices": {
            "A": "Statement (1) ALONE ang sapat, hindi ang (2).",
            "B": "Statement (2) ALONE ang sapat, hindi ang (1).",
            "C": "BOTH statements TOGETHER ang sapat, pero hindi ang isa lang.",
            "D": "Each statement ALONE ay sapat.",
            "E": "Hindi sapat kahit pagsamahin ang (1) at (2)."
          },
          "correct": "D",
          "reason": "Statement (1): 448 × 75% = 336 shirts → 336 × ₱358 = ₱120,288 — sufficient. Statement (2): 112 = 25% ng inventory → inventory = 448 → 75% = 336 shirts × ₱358 — sufficient din. Kaya D."
        },
        "13": {
          "question": "How many more boys than girls are there in the room? (1) There is a total of 56 girls and boys in the room. (2) The number of boys in the room equals the square of the number of girls in the room.",
          "choices": {
            "A": "Statement (1) ALONE ang sapat, hindi ang (2).",
            "B": "Statement (2) ALONE ang sapat, hindi ang (1).",
            "C": "BOTH statements TOGETHER ang sapat, pero hindi ang isa lang.",
            "D": "Each statement ALONE ay sapat.",
            "E": "Hindi sapat kahit pagsamahin ang (1) at (2)."
          },
          "correct": "C",
          "reason": "Statement (1): B + G = 56 — insufficient. Statement (2): B = G² — insufficient. Pinagsama: G² + G = 56 → G² + G − 56 = 0 → (G+8)(G−7) = 0 → G = 7 (positive), B = 49 → B − G = 42 — sufficient. Kaya C."
        },
        "14": {
          "question": "In what year was David born? (1) David's friend Michelle, who is ½ year younger than him, was born in 1979. (2) In 1998, David turned 20 years old.",
          "choices": {
            "A": "Statement (1) ALONE ang sapat, hindi ang (2).",
            "B": "Statement (2) ALONE ang sapat, hindi ang (1).",
            "C": "BOTH statements TOGETHER ang sapat, pero hindi ang isa lang.",
            "D": "Each statement ALONE ay sapat.",
            "E": "Hindi sapat kahit pagsamahin ang (1) at (2)."
          },
          "correct": "B",
          "reason": "Statement (1): Michelle ½ year younger, born 1979 → David could be born late 1978 o early 1979 (depende sa buwan) — insufficient. Statement (2): 1998 age 20 → born 1978 — sufficient. Kaya B."
        },
        "15": {
          "question": "A box contains 48 balls, of which 30 are red and 18 are blue. If 16 of the balls are removed, how many of the balls left in the box are blue? (1) Of the balls removed, the ratio of the number of red ones to the number of blue ones is 5:3. (2) Of the first 8 balls removed, 5 are red.",
          "choices": {
            "A": "Statement (1) ALONE ang sapat, hindi ang (2).",
            "B": "Statement (2) ALONE ang sapat, hindi ang (1).",
            "C": "BOTH statements TOGETHER ang sapat, pero hindi ang isa lang.",
            "D": "Each statement ALONE ay sapat.",
            "E": "Hindi sapat kahit pagsamahin ang (1) at (2)."
          },
          "correct": "A",
          "reason": "Statement (1): 16 removed sa ratio 5:3 → 10 red, 6 blue → blue left = 18 − 6 = 12 — sufficient. Statement (2): unang 8 lang ang nalalaman (5 red, 3 blue); walang info sa natitirang 8 — insufficient. Kaya A."
        },
        "16": {
          "question": "How long did it take Mrs. Lim to drive non-stop on a trip from her home to Ayala Alabang? (1) If Mrs. Lim's average speed for the trip had been 1.5 times as fast, the trip would have taken 2 hours. (2) Mrs. Lim's average speed for the trip was 80 km per hour.",
          "choices": {
            "A": "Statement (1) ALONE ang sapat, hindi ang (2).",
            "B": "Statement (2) ALONE ang sapat, hindi ang (1).",
            "C": "BOTH statements TOGETHER ang sapat, pero hindi ang isa lang.",
            "D": "Each statement ALONE ay sapat.",
            "E": "Hindi sapat kahit pagsamahin ang (1) at (2)."
          },
          "correct": "A",
          "reason": "Statement (1): kung 1.5× bilis, trip = 2 oras. Time ay inversely proportional sa speed, kaya original time = 2 × 1.5 = 3 oras — sufficient. Statement (2): speed 80 km/h lang, walang distance — insufficient. Kaya A."
        },
        "17": {
          "question": "If Lorna had a dentist's appointment on a certain day, was the appointment on a Friday? (1) Exactly 64 hours before the appointment, it was Wednesday. (2) The appointment is between 8:00 PM and 11:00 PM.",
          "choices": {
            "A": "Statement (1) ALONE ang sapat, hindi ang (2).",
            "B": "Statement (2) ALONE ang sapat, hindi ang (1).",
            "C": "BOTH statements TOGETHER ang sapat, pero hindi ang isa lang.",
            "D": "Each statement ALONE ay sapat.",
            "E": "Hindi sapat kahit pagsamahin ang (1) at (2)."
          },
          "correct": "C",
          "reason": "64 hours = 2 araw + 16 oras. Statement (1) lang: 64h before = Wednesday → puwedeng Friday PM (4 PM pataas, −2 araw = Wed) o Saturday bago mag-4 PM (−3 araw = Wed) — insufficient. Statement (2) lang: oras lang — insufficient. Pinagsama: sa 8–11 PM window, ang Saturday 8–11 PM ay −64h = Thursday (hindi Wednesday). Friday 8–11 PM lang ang tumutugma — sufficient. Kaya C."
        },
        "18": {
          "question": "What was the average number of kilometers per liter of gasoline a car can consume during a certain trip? (1) The total cost of the gasoline used by the car for the 640-km trip was Php 1,152. (2) The cost for the gasoline used by the car for the trip was Php 18.00 per liter.",
          "choices": {
            "A": "Statement (1) ALONE ang sapat, hindi ang (2).",
            "B": "Statement (2) ALONE ang sapat, hindi ang (1).",
            "C": "BOTH statements TOGETHER ang sapat, pero hindi ang isa lang.",
            "D": "Each statement ALONE ay sapat.",
            "E": "Hindi sapat kahit pagsamahin ang (1) at (2)."
          },
          "correct": "C",
          "reason": "Statement (1): ₱1,152 na gastos sa 640 km, pero walang presyo/litro — insufficient. Statement (2): ₱18/litro, pero walang total cost — insufficient. Pinagsama: 1,152 ÷ 18 = 64 litro → 640 km ÷ 64 L = 10 km/L — sufficient. Kaya C."
        },
        "19": {
          "question": "What is the ratio of a to b? (1) a is 8 more than twice b. (2) The ratio of a to 4b is 3 : 7.",
          "choices": {
            "A": "Statement (1) ALONE ang sapat, hindi ang (2).",
            "B": "Statement (2) ALONE ang sapat, hindi ang (1).",
            "C": "BOTH statements TOGETHER ang sapat, pero hindi ang isa lang.",
            "D": "Each statement ALONE ay sapat.",
            "E": "Hindi sapat kahit pagsamahin ang (1) at (2)."
          },
          "correct": "B",
          "reason": "Statement (1): a = 2b + 8 — equation na may 2 unknowns, hindi nagbibigay ng ratio — insufficient. Statement (2): a/(4b) = 3/7 → a/b = 12/7 — sufficient. Kaya B."
        },
        "20": {
          "question": "At Avanti Review Center, 400 students are enrolled for the Review Program or Academic Advancement Program or both. If 100 of these students are not enrolled in the Review Program, how many of them are enrolled in both Avanti Review Program and Avanti Academic Advancement Program? (1) Of the 400 students, 160 are not enrolled in the Academic Advancement Program. (2) A total of 240 of the students are enrolled in the Academic Advancement Program.",
          "choices": {
            "A": "Statement (1) ALONE ang sapat, hindi ang (2).",
            "B": "Statement (2) ALONE ang sapat, hindi ang (1).",
            "C": "BOTH statements TOGETHER ang sapat, pero hindi ang isa lang.",
            "D": "Each statement ALONE ay sapat.",
            "E": "Hindi sapat kahit pagsamahin ang (1) at (2)."
          },
          "correct": "D",
          "reason": "Given: 400 total, 100 not in Review → 100 = Academic only, Review = 300. Statement (1): 160 not in Academic (Review only) → Both = 300 − 160 = 140 — sufficient. Statement (2): Academic = 240 → Both = Academic − Academic only = 240 − 100 = 140 — sufficient din. Kaya D."
        }
      }
    },
    {
      "subject": "English",
      "subject_icon": "📚",
      "topic": "Alphabetizing",
      "topic_order": 1,
      "questions": {
        "1": {
          "question": "Arrange in alphabetical order:\nA. Commission on the Filipino Language\nB. Commission on Human Rights\nC. Commission on Higher Education\nD. Commission on Population",
          "choices": {
            "A": "ABCD",
            "B": "CBDA",
            "C": "BCDA",
            "D": "ACBD"
          },
          "correct": "B",
          "reason": "Pareho ang simula ('Commission on...'), kaya tingnan ang susunod na salita: Higher (C), Human (B), Population (D), at 'the Filipino' (A). Ang 'the' ay nagsisimula sa T, kaya nasa dulo ang A (T ay mas huli kaysa H at P). Order: C → B → D → A (CBDA)."
        },
        "2": {
          "question": "Arrange in alphabetical order:\nA. Cooperative Development Authority\nB. Cottage Industry Development Enterprise\nC. Cottage Industry Technology Center\nD. Council for the Welfare of Children",
          "choices": {
            "A": "ABCD",
            "B": "ACBD",
            "C": "BCAD",
            "D": "CBAD"
          },
          "correct": "A",
          "reason": "Ihambing letter by letter: Coo (A) < Cot (B, C) < Cou (D). Sa B at C, parehong 'Cottage Industry,' kaya Development (B) bago Technology (C) dahil D ay bago T. Order: A → B → C → D (ABCD)."
        },
        "3": {
          "question": "Arrange in alphabetical order:\nA. Food and Nutrition Research Institute\nB. Fiber Industry Development Authority\nC. Foreign Service Institute\nD. Family Planning Organization of the Philippines",
          "choices": {
            "A": "ABCD",
            "B": "BACD",
            "C": "DBCA",
            "D": "DBAC"
          },
          "correct": "D",
          "reason": "Lahat ay nagsisimula sa F, kaya tingnan ang pangalawang letra: Fa (D) < Fi (B) < Fo (A, C). Sa A at C: 'Food' vs 'Foreign' → Foo bago For dahil o ay bago r. Order: D → B → A → C (DBAC)."
        },
        "4": {
          "question": "Arrange in alphabetical order:\nA. Insurance Commission\nB. Industrial Technology Development Institute\nC. Institute of Labor and Manpower Studies\nD. Instructional Materials Corporation",
          "choices": {
            "A": "BDCA",
            "B": "BACD",
            "C": "BCDA",
            "D": "BADC"
          },
          "correct": "C",
          "reason": "Lahat ay 'In...': Ind (B) < Ins. Sa tatlong 'Ins': Inst-i (C), Inst-r (D), Insu (A). Ang 'Inst' ay bago 'Insu' dahil t ay bago u; sa C at D, 'Insti' bago 'Instr' dahil i ay bago r. Order: B → C → D → A (BCDA)."
        },
        "5": {
          "question": "Arrange in alphabetical order:\nA. Presidential Commission on Good Governance\nB. Presidential Commission to Fight Poverty\nC. Presidential Commission for the Urban Poor\nD. Presidential Commission on Human Rights",
          "choices": {
            "A": "CBAD",
            "B": "CBDA",
            "C": "CABD",
            "D": "CADB"
          },
          "correct": "D",
          "reason": "Pareho ang 'Presidential Commission' kaya tingnan ang susunod na salita: for (C), on Good (A), on Human (D), to (B). For < On < To. Sa dalawang 'on,' Good (G) bago Human (H). Order: C → A → D → B (CADB)."
        },
        "6": {
          "question": "Arrange in alphabetical order:\nA. AA Industrial Chemical Supply\nB. AB Capital and Investment Corporation\nC. A Soriano Aviation Incorporated\nD. A-1 Driving Company Incorporated",
          "choices": {
            "A": "DCAB",
            "B": "DCBA",
            "C": "ABCD",
            "D": "CABD"
          },
          "correct": "A",
          "reason": "Word-by-word ang ginagamit dito: ang numero o simbolo ay nauuna sa letra, at ang single-letter na salita ay nauuna sa mas mahabang salita. A-1 (D) → A Soriano (C) → AA (A) → AB (B). Order: D → C → A → B (DCAB)."
        },
        "7": {
          "question": "Arrange in alphabetical order:\nA. Ayala Plans Inc.\nB. Ayala Health Care, Inc.\nC. Ayala Land Inc.\nD. Ayala Life Assurance Inc.",
          "choices": {
            "A": "BCDA",
            "B": "ABCD",
            "C": "DCBA",
            "D": "BACD"
          },
          "correct": "A",
          "reason": "Pareho ang 'Ayala,' kaya sunod na salita ang titingnan: Health (B), Land (C), Life (D), Plans (A). Sa Land at Life, 'La' bago 'Li' kasi a ay bago i. Order: B → C → D → A (BCDA)."
        },
        "8": {
          "question": "Arrange in alphabetical order:\nA. Filspin Incorporated\nB. Filway Marketing Inc.\nC. Filsov Shipping Company\nD. Fina Products Inc.",
          "choices": {
            "A": "ACDB",
            "B": "CABD",
            "C": "BCAD",
            "D": "BACD"
          },
          "correct": "B",
          "reason": "Fil- ang simula ng A, B, at C, at Fina (D) ay Fin-, kaya huli ang D (l ay bago n). Sa Fil: Filsov (C), Filspin (A), Filway (B). Ihambing ang ika-5 letra: o (C) bago p (A), at 'Fils' bago 'Filw'. Order: C → A → B → D (CABD)."
        },
        "9": {
          "question": "Arrange in alphabetical order:\nA. John Shannon Montessori\nB. John Paul Hospital\nC. John Robert Powers\nD. John Nelson and Associates",
          "choices": {
            "A": "DACB",
            "B": "DBCA",
            "C": "DCBA",
            "D": "DABC"
          },
          "correct": "B",
          "reason": "Lahat ay 'John,' kaya gitnang pangalan ang susunod na ihahambing: Nelson (D), Paul (B), Robert (C), Shannon (A). N < P < R < S. Order: D → B → C → A (DBCA)."
        },
        "10": {
          "question": "Arrange in alphabetical order:\nA. Sports Zone Restaurant\nB. Sports Resources Inc.\nC. Sports Values Inc.\nD. Sports House and General Merchandise",
          "choices": {
            "A": "ABCD",
            "B": "BCDA",
            "C": "CBDA",
            "D": "DBCA"
          },
          "correct": "D",
          "reason": "Lahat ay 'Sports,' kaya ang susunod na salita: House (D), Resources (B), Values (C), Zone (A). H < R < V < Z. Order: D → B → C → A (DBCA)."
        },
        "11": {
          "question": "Arrange in alphabetical order:\nA. Abad, Josephine\nB. Abad, Jason\nC. Abad, Joseph\nD. Abad, June",
          "choices": {
            "A": "BCAD",
            "B": "BDCA",
            "C": "CBAD",
            "D": "DBCA"
          },
          "correct": "A",
          "reason": "Apelyido ay pare-pareho, kaya first name ang ihahambing: Jason (B), Joseph (C), Josephine (A), June (D). Ang 'Joseph' ay mas maikli kaysa 'Josephine' kaya nauuna; ang 'June' ay huli dahil u ay pagkatapos ng o. Order: B → C → A → D (BCAD)."
        },
        "12": {
          "question": "Arrange in alphabetical order:\nA. St. Stephen's School\nB. St. Stephen's University\nC. St. Scholastica's Academy\nD. St. Scholastica's College",
          "choices": {
            "A": "ABCD",
            "B": "CDBA",
            "C": "CDAB",
            "D": "DCAB"
          },
          "correct": "C",
          "reason": "Ihambing ang pangalawang salita: Scholastica's (C, D) bago Stephen's (A, B) dahil Sc < St. Sa Scholastica's: Academy (C) bago College (D). Sa Stephen's: School (A) bago University (B). Order: C → D → A → B (CDAB)."
        },
        "13": {
          "question": "Arrange in alphabetical order:\nA. Santos, Anita\nB. Santos, Ana\nC. Santos, Antonio\nD. Santos, Anthony",
          "choices": {
            "A": "CDBA",
            "B": "DCBA",
            "C": "BADC",
            "D": "BACD"
          },
          "correct": "C",
          "reason": "Apelyido ay Santos lahat, kaya first name: Ana (B), Anita (A), Anthony (D), Antonio (C). 'Ana' ay mas maikli kaya nauuna; 'Ani' bago 'Ant'; at sa Anthony vs Antonio, 'Anth' bago 'Anto' dahil h ay bago o. Order: B → A → D → C (BADC)."
        },
        "14": {
          "question": "Arrange in alphabetical order:\nA. Philippine Daily Inquirer\nB. Philippine Star\nC. Philippine Herald\nD. Philippine Tribune",
          "choices": {
            "A": "ABCD",
            "B": "ACBD",
            "C": "ADCB",
            "D": "ACDB"
          },
          "correct": "B",
          "reason": "Pareho ang 'Philippine,' kaya sunod na salita: Daily (A), Herald (C), Star (B), Tribune (D). D < H < S < T. Order: A → C → B → D (ACBD)."
        },
        "15": {
          "question": "Arrange in alphabetical order:\nA. Luna, Antonio\nB. Luna, Juan\nC. Luna, Olive\nD. Luna, Oliver",
          "choices": {
            "A": "ABCD",
            "B": "ABDC",
            "C": "ACBD",
            "D": "ADCB"
          },
          "correct": "A",
          "reason": "Apelyido ay Luna lahat. First name: Antonio (A), Juan (B), Olive (C), Oliver (D). Ang 'Olive' ay mas maikli kaysa 'Oliver,' kaya nauuna ito. Order: A → B → C → D (ABCD)."
        },
        "16": {
          "question": "Arrange in alphabetical order:\nA. Felimon, Jason\nB. Felipe, Julian\nC. Felimon, Jamie\nD. Felipe, Julia",
          "choices": {
            "A": "CADB",
            "B": "ACBD",
            "C": "CABD",
            "D": "ACDB"
          },
          "correct": "A",
          "reason": "Ihambing muna ang apelyido: Felimon (A, C) bago Felipe (B, D) dahil m ay bago p. Sa Felimon: Jamie (C) bago Jason (A) dahil 'Jam' < 'Jas'. Sa Felipe: Julia (D) bago Julian (B) dahil mas maikli. Order: C → A → D → B (CADB)."
        },
        "17": {
          "question": "Arrange in alphabetical order:\nA. UP Institute for Small Scale Industries\nB. UP Institute for Science and Math Education\nC. UP Institute of Biology\nD. UP Institute of Chemistry",
          "choices": {
            "A": "ABCD",
            "B": "BACD",
            "C": "CDAB",
            "D": "CDBA"
          },
          "correct": "B",
          "reason": "Pareho ang 'UP Institute,' kaya sunod na salita: 'for' (A, B) bago 'of' (C, D) dahil f ay bago o. Sa 'for': Science (B) bago Small (A) dahil 'Sc' < 'Sm'. Sa 'of': Biology (C) bago Chemistry (D). Order: B → A → C → D (BACD)."
        },
        "18": {
          "question": "Arrange in alphabetical order:\nA. Bureau of Post\nB. Bureau of Internal Revenue\nC. Bureau of Mines\nD. Bureau of Fisheries and Aquatic Resources",
          "choices": {
            "A": "DBCA",
            "B": "DABC",
            "C": "DCBA",
            "D": "DBAC"
          },
          "correct": "A",
          "reason": "Lahat ay 'Bureau of,' kaya sunod na salita: Fisheries (D), Internal (B), Mines (C), Post (A). F < I < M < P. Order: D → B → C → A (DBCA)."
        },
        "19": {
          "question": "Arrange in alphabetical order:\nA. Rancho, Elian\nB. Rallon, Michel\nC. Ramirez, Sean\nD. Rancho, Elaine",
          "choices": {
            "A": "BCAD",
            "B": "BDAC",
            "C": "BCDA",
            "D": "BACD"
          },
          "correct": "C",
          "reason": "Ihambing ang apelyido: Rallon (B), Ramirez (C), Rancho (A, D). 'Ral' < 'Ram' < 'Ran.' Sa dalawang Rancho, ihambing ang first name: Elaine (D) bago Elian (A) dahil sa ikatlong letra, a ay bago i. Order: B → C → D → A (BCDA)."
        }
      }
    },
    {
      "subject": "English",
      "subject_icon": "📚",
      "topic": "Synonyms",
      "topic_order": 2,
      "questions": {
        "1": {
          "question": "We should never be apathetic towards other people for we have a social responsibility to fulfill. (Closest meaning of 'apathetic')",
          "choices": {
            "A": "indifferent",
            "B": "concerned",
            "C": "generous",
            "D": "worried"
          },
          "correct": "A",
          "reason": "Ang apathetic ay walang pakialam o walang interes, kaya synonym ang indifferent. Halimbawa: 'Apathetic siya sa eleksyon' = hindi siya nagbo-boto at hindi nakikialam. Ang concerned ay kabaligtaran."
        },
        "2": {
          "question": "A good leader should be cognizant of the numerous issues that affect his constituents. (Closest meaning of 'cognizant')",
          "choices": {
            "A": "aware",
            "B": "uninformed",
            "C": "confused",
            "D": "idealistic"
          },
          "correct": "A",
          "reason": "Cognizant = alam o may kamalayan sa isang bagay, kaya aware. Halimbawa: 'Cognizant ako sa bagong batas' = alam ko na may bagong batas. Ang uninformed ay antonym."
        },
        "3": {
          "question": "Always be careful not to issue any disparaging remarks against other people. (Closest meaning of 'disparaging')",
          "choices": {
            "A": "praising",
            "B": "confusing",
            "C": "damaging",
            "D": "discouraging"
          },
          "correct": "C",
          "reason": "Disparaging = pagmamaliit o paninira na nakakasira ng reputasyon, kaya damaging (nakakasira) ang pinakamalapit. Halimbawa: 'Pinagsabihan siya dahil sa mga disparaging comments tungkol sa kapitbahay.' Ang praising ay kabaligtaran."
        },
        "4": {
          "question": "Flowers are ephemeral; they bloom yet wither in a week or so later. (Closest meaning of 'ephemeral')",
          "choices": {
            "A": "shrivel",
            "B": "long lasting",
            "C": "beautiful",
            "D": "short lived"
          },
          "correct": "D",
          "reason": "Ephemeral = panandalian lang. Context clue: 'bloom yet wither in a week.' Halimbawa: ang bahaghari at bula ay ephemeral. Antonym: long lasting."
        },
        "5": {
          "question": "A fastidious person will never find true happiness. (Closest meaning of 'fastidious')",
          "choices": {
            "A": "simple",
            "B": "choosy",
            "C": "greedy",
            "D": "contented"
          },
          "correct": "B",
          "reason": "Fastidious = mapili at mahirap bigyan-kasiyahan, kaya choosy. Halimbawa: 'Fastidious siya sa pagkain; kailangan laging malinis ang plato.' Ang contented ay kabaligtaran."
        },
        "6": {
          "question": "The Ortigas Center is filled with gargantuan buildings, some having up to 50 floors. (Closest meaning of 'gargantuan')",
          "choices": {
            "A": "crowded",
            "B": "old and weak",
            "C": "first class",
            "D": "gigantic"
          },
          "correct": "D",
          "reason": "Gargantuan = napakalaki, kaya gigantic. Context clue: 'buildings up to 50 floors.' Halimbawa: gargantuan na bundok o gusali."
        },
        "7": {
          "question": "Nobody likes haughty Monty who kept bragging about his riches. (Closest meaning of 'haughty')",
          "choices": {
            "A": "arrogant",
            "B": "foolish",
            "C": "respectable",
            "D": "dependable"
          },
          "correct": "A",
          "reason": "Haughty = mayabang at mapagmataas, kaya arrogant. Context clue: 'bragging about his riches.' Halimbawa: haughty na boss na ayaw makinig sa empleyado."
        },
        "8": {
          "question": "The corrupt policeman was discharged from service due to his ignominious act of accepting bribes. (Closest meaning of 'ignominious')",
          "choices": {
            "A": "honorable",
            "B": "disrespectable",
            "C": "unwanted",
            "D": "remarkable"
          },
          "correct": "B",
          "reason": "Ignominious = nakakahiya o kahiya-hiya (may kasamang kahihiyan sa publiko). Ang disrespectable ang pinakamalapit sa mga choices. Halimbawa: ignominious na pagkatalo o pagkakasuspinde dahil sa suhol."
        },
        "9": {
          "question": "The impudent child was scolded for answering back to older people. (Closest meaning of 'impudent')",
          "choices": {
            "A": "respectful",
            "B": "honorable",
            "C": "clever",
            "D": "rude"
          },
          "correct": "D",
          "reason": "Impudent = bastos at walang galang, kaya rude. Context clue: 'answering back to older people.' Halimbawa: impudent na sagot sa guro."
        },
        "10": {
          "question": "Spores are infinitesimal reproductive units of fungi and lower plants. (Closest meaning of 'infinitesimal')",
          "choices": {
            "A": "invisible",
            "B": "interesting",
            "C": "microscopic",
            "D": "large"
          },
          "correct": "C",
          "reason": "Infinitesimal = napakaliit, halos hindi na makita. Pinakamalapit ang microscopic. Halimbawa: infinitesimal na butil ng alikabok. Ang large ay antonym."
        },
        "11": {
          "question": "Never trust an insidious person because you'll never know what goes in his mind. (Closest meaning of 'insidious')",
          "choices": {
            "A": "honest",
            "B": "treacherous",
            "C": "loyal",
            "D": "trustworthy"
          },
          "correct": "B",
          "reason": "Insidious = mapanlinlang at palihim na mapanganib, kaya treacherous. Halimbawa: insidious na kaibigan na nakangiti pero nagsasabi ng lihim mo sa iba."
        },
        "12": {
          "question": "Jessa is an irascible girl who frequently has tantrums. (Closest meaning of 'irascible')",
          "choices": {
            "A": "impatient",
            "B": "cheerful",
            "C": "hot-tempered",
            "D": "jolly"
          },
          "correct": "C",
          "reason": "Irascible = madaling magalit, kaya hot-tempered. Context clue: 'frequently has tantrums.' Halimbawa: irascible na tatay na sumisigaw sa maliit na bagay."
        },
        "13": {
          "question": "Surgeons should be meticulous especially when performing operations. (Closest meaning of 'meticulous')",
          "choices": {
            "A": "careful",
            "B": "careless",
            "C": "strict",
            "D": "lenient"
          },
          "correct": "A",
          "reason": "Meticulous = maingat at maselan sa detalye, kaya careful. Halimbawa: meticulous na accountant na tinitingnan ang bawat numero. Ang careless ay antonym."
        },
        "14": {
          "question": "Christ teaches us to be concerned about putting up riches in heaven and not to be obsessed with mundane things. (Closest meaning of 'mundane')",
          "choices": {
            "A": "temporary",
            "B": "worldly",
            "C": "insignificant",
            "D": "important"
          },
          "correct": "B",
          "reason": "Mundane = tungkol sa mundo o pang-araw-araw na bagay, kaya worldly. Context clue: 'riches in heaven vs. mundane things.' Halimbawa: mundane na gawain tulad ng paglalaba."
        },
        "15": {
          "question": "Rochelle has difficulty seeing things from afar because she is myopic. (Closest meaning of 'myopic')",
          "choices": {
            "A": "cross-eyed",
            "B": "eagle-eyed",
            "C": "farsighted",
            "D": "nearsighted"
          },
          "correct": "D",
          "reason": "Myopic = malabo ang mata sa malayo, kaya nearsighted. Context clue: 'difficulty seeing from afar.' Ang farsighted ang kabaligtaran (malabo sa malapit)."
        },
        "16": {
          "question": "Regina, being a child of three, is oblivious to the world around her. (Closest meaning of 'oblivious')",
          "choices": {
            "A": "careful",
            "B": "carefree",
            "C": "aware",
            "D": "unmindful"
          },
          "correct": "D",
          "reason": "Oblivious = walang kamalayan o hindi alam, kaya unmindful. Halimbawa: oblivious siya sa ingay habang natutulog. Ang aware ay antonym."
        },
        "17": {
          "question": "Man can never be omniscient like God. (Closest meaning of 'omniscient')",
          "choices": {
            "A": "all-knowing",
            "B": "logical",
            "C": "immortal",
            "D": "miraculous"
          },
          "correct": "A",
          "reason": "Omni- = lahat, scient- = alam. Kaya omniscient = all-knowing. Halimbawa: 'Ang Diyos ay omniscient.' Ang omnipotent naman ay all-powerful."
        },
        "18": {
          "question": "The astute mouse was able to find its way out of the maze in a short while. (Closest meaning of 'astute')",
          "choices": {
            "A": "dumb",
            "B": "clever",
            "C": "small",
            "D": "unusual"
          },
          "correct": "B",
          "reason": "Astute = matalino at mabilis mag-isip, kaya clever. Context clue: 'found its way out of the maze.' Halimbawa: astute na negosyante na nakakaamoy agad ng oportunidad."
        },
        "19": {
          "question": "It is now plausible to say that someday, interplanetary travel will no longer be impossible. (Closest meaning of 'plausible')",
          "choices": {
            "A": "reasonable",
            "B": "unusual",
            "C": "illogical",
            "D": "extraordinary"
          },
          "correct": "A",
          "reason": "Plausible = kapani-paniwala at may katwiran, kaya reasonable. Halimbawa: plausible na paliwanag sa pagkahuli. Ang illogical ay antonym."
        },
        "20": {
          "question": "A prudent person is not easily deceived. (Closest meaning of 'prudent')",
          "choices": {
            "A": "loyal",
            "B": "careless",
            "C": "wise",
            "D": "foolish"
          },
          "correct": "C",
          "reason": "Prudent = maingat at matalino sa pagpapasya, kaya wise. Halimbawa: prudent na tao na nag-iipon bago bumili ng luho."
        },
        "21": {
          "question": "\"Spare the rod and spoil the child\" is a common aphorism. (Closest meaning of 'aphorism')",
          "choices": {
            "A": "slogan",
            "B": "battle cry",
            "C": "proverb",
            "D": "motto"
          },
          "correct": "C",
          "reason": "Aphorism = maikling kasabihan na may aral, kaya proverb. Halimbawa: 'Haste makes waste.' Ang motto ay kasabihan ng grupo, ang slogan ay pang-advertising."
        },
        "22": {
          "question": "Charlie's deportment is highly commendable. (Closest meaning of 'deportment')",
          "choices": {
            "A": "belief",
            "B": "behavior",
            "C": "intelligence",
            "D": "competence"
          },
          "correct": "B",
          "reason": "Deportment = asal o kilos, kaya behavior. Halimbawa: 'Maganda ang deportment ng estudyante sa harap ng guro.'"
        },
        "23": {
          "question": "For enmity and hate are contrary to friendship and concord. (Closest meaning of 'enmity')",
          "choices": {
            "A": "agreement",
            "B": "mutual hatred",
            "C": "confusion",
            "D": "division"
          },
          "correct": "B",
          "reason": "Enmity = galit o pagkapoot sa isa't isa, kaya mutual hatred. Halimbawa: enmity ng dalawang pamilyang matagal nang magkaaway. Ang concord (agreement) ay kabaligtaran."
        },
        "24": {
          "question": "The Filipino's fortitude is the reason why he seldom complains. (Closest meaning of 'fortitude')",
          "choices": {
            "A": "endurance",
            "B": "peace-loving",
            "C": "discontent",
            "D": "satisfaction"
          },
          "correct": "A",
          "reason": "Fortitude = tibay ng loob at pagtitiis, kaya endurance. Halimbawa: fortitude ng mga Pilipino tuwing may bagyo."
        },
        "25": {
          "question": "Poverty should never be viewed as an impediment towards attaining good education. (Closest meaning of 'impediment')",
          "choices": {
            "A": "reason",
            "B": "way",
            "C": "link",
            "D": "obstruction"
          },
          "correct": "D",
          "reason": "Impediment = hadlang, kaya obstruction. Halimbawa: ang pagkabulol ay hindi impediment para maging mahusay na speaker."
        },
        "26": {
          "question": "The students were upbraided for misbehaving during the assembly. (Closest meaning of 'upbraided')",
          "choices": {
            "A": "praised",
            "B": "honored",
            "C": "scolded",
            "D": "stopped"
          },
          "correct": "C",
          "reason": "Upbraid = pagalitan o pagsabihan nang matindi, kaya scolded. Halimbawa: 'Upbraided siya ng teacher dahil late.' Ang praised ay antonym."
        },
        "27": {
          "question": "Urbane people are appalled by rude behavior. (Closest meaning of 'urbane')",
          "choices": {
            "A": "well-mannered",
            "B": "ill-mannered",
            "C": "modern",
            "D": "rich"
          },
          "correct": "A",
          "reason": "Urbane = magalang, makisig, at maayos ang asal, kaya well-mannered. Halimbawa: urbane na ginoo na marunong makisalamuha. Ang ill-mannered ay antonym."
        },
        "28": {
          "question": "Clowns are never vapid but the sick usually are. (Closest meaning of 'vapid')",
          "choices": {
            "A": "lively and energetic",
            "B": "lacking spirit and liveliness",
            "C": "clumsy",
            "D": "funny"
          },
          "correct": "B",
          "reason": "Vapid = walang sigla o walang buhay, kaya lacking spirit and liveliness. Halimbawa: vapid na party kung walang masayang tao. Ang lively ay antonym."
        },
        "29": {
          "question": "The client was asked to verify the veracity of the statement of accounts issued. (Closest meaning of 'veracity')",
          "choices": {
            "A": "accuracy",
            "B": "discrepancy",
            "C": "redundancy",
            "D": "mistake"
          },
          "correct": "A",
          "reason": "Veracity = katotohanan o katumpakan, kaya accuracy. Halimbawa: 'I-verify ang veracity ng ulat' = tiyakin kung totoo/tama."
        },
        "30": {
          "question": "Dentists believe that babies should be weaned from feeding bottles as soon as possible to prevent malformation of the infant's erupting teeth. (Closest meaning of 'weaned')",
          "choices": {
            "A": "get used to",
            "B": "develop hatred for",
            "C": "free from dependence",
            "D": "make more dependent"
          },
          "correct": "C",
          "reason": "Wean = unti-unting pagtigil ng pag-depende sa isang bagay, kaya 'free from dependence'. Halimbawa: pagpapahinto ng sanggol sa gatas ng ina o bote."
        },
        "31": {
          "question": "Some people believe that Balete Drive is haunted because a wraith of a woman appears there. (Closest meaning of 'wraith')",
          "choices": {
            "A": "shadow",
            "B": "statue",
            "C": "reflection",
            "D": "ghost"
          },
          "correct": "D",
          "reason": "Wraith = multo, kaya ghost. Halimbawa: wraith na lumilitaw sa lumang bahay."
        },
        "32": {
          "question": "She looks unkempt with her wavy coarse hair falling freely behind her back. (Closest meaning of 'unkempt')",
          "choices": {
            "A": "pretty",
            "B": "neat",
            "C": "prim and proper",
            "D": "untidy"
          },
          "correct": "D",
          "reason": "Unkempt = magulo o hindi nakaayos, kaya untidy. Halimbawa: unkempt na buhok na hindi nasuklay. Ang neat ay antonym."
        },
        "33": {
          "question": "The room is topsy-turvy, as if a hurricane just passed through. (Closest meaning of 'topsy-turvy')",
          "choices": {
            "A": "disorderly",
            "B": "destroyed",
            "C": "orderly",
            "D": "clean"
          },
          "correct": "A",
          "reason": "Topsy-turvy = pabaligtad at magulo, kaya disorderly. Context clue: 'as if a hurricane passed.' Ang orderly ay antonym."
        },
        "34": {
          "question": "Sherlock Holmes is a famous sleuth. (Closest meaning of 'sleuth')",
          "choices": {
            "A": "adventurer",
            "B": "scientist",
            "C": "detective",
            "D": "criminal"
          },
          "correct": "C",
          "reason": "Sleuth = tiktik o imbestigador, kaya detective. Halimbawa: si Sherlock Holmes ay sleuth."
        },
        "35": {
          "question": "Mindy rummaged through the chest of old clothes for something usable to donate. (Closest meaning of 'rummaged')",
          "choices": {
            "A": "searched through",
            "B": "wandered through",
            "C": "passed through",
            "D": "scattered"
          },
          "correct": "A",
          "reason": "Rummage = maghalungkat o maghanap nang masinsinan, kaya searched through. Halimbawa: 'Rummaged siya sa drawer para sa susi.'"
        },
        "36": {
          "question": "Only a ruffian could do such a heinous act of killing a helpless child. (Closest meaning of 'ruffian')",
          "choices": {
            "A": "an insane person",
            "B": "a brutal person",
            "C": "a lovable person",
            "D": "a confused person"
          },
          "correct": "B",
          "reason": "Ruffian = marahas at bastos na tao, kaya a brutal person. Context clue: 'heinous act of killing a child.'"
        },
        "37": {
          "question": "To augment the policemen's income, the government allowed them to take part-time jobs. (Closest meaning of 'augment')",
          "choices": {
            "A": "increase",
            "B": "contribute",
            "C": "limit",
            "D": "remove"
          },
          "correct": "A",
          "reason": "Augment = dagdagan, kaya increase. Halimbawa: augment ang kita sa pamamagitan ng part-time job. Ang limit at remove ay kabaligtaran."
        },
        "38": {
          "question": "A person's reputation is very important so be very careful not to calumniate anybody. (Closest meaning of 'calumniate')",
          "choices": {
            "A": "embarrass",
            "B": "abuse",
            "C": "tease",
            "D": "slander"
          },
          "correct": "D",
          "reason": "Calumniate = siraan sa pamamagitan ng kasinungalingan, kaya slander. Halimbawa: pagpapakalat ng maling chismis para sirain ang pangalan ng iba."
        },
        "39": {
          "question": "The footprints were effaced when the floor was mopped. (Closest meaning of 'effaced')",
          "choices": {
            "A": "printed",
            "B": "erased",
            "C": "deformed",
            "D": "developed"
          },
          "correct": "B",
          "reason": "Efface = burahin o pawiin, kaya erased. Halimbawa: efface ang sulat sa pisara gamit ang eraser."
        },
        "40": {
          "question": "The plane overshot the runway and landed on a ditch. (Closest meaning of 'overshot')",
          "choices": {
            "A": "passed through",
            "B": "passed by",
            "C": "went beyond",
            "D": "did not reach"
          },
          "correct": "C",
          "reason": "Overshoot = lumampas, kaya went beyond. Halimbawa: overshot ang kotse sa tamang liko at lumampas pa."
        }
      }
    },
    {
      "subject": "English",
      "subject_icon": "📚",
      "topic": "Antonyms",
      "topic_order": 3,
      "questions": {
        "1": {
          "question": "Hanna accompanied her sister to the drugstore. (Opposite of 'accompanied')",
          "choices": {
            "A": "followed",
            "B": "let go on one's own",
            "C": "left behind",
            "D": "stopped"
          },
          "correct": "B",
          "reason": "Accompany = sumama o samahan. Ang kabaligtaran ay pabayaan siyang pumunta nang mag-isa ('let go on one's own'). Halimbawa: sinamahan mo si Ana sa botika vs. hinayaan mo siyang pumunta mag-isa. Ang followed at left behind ay hindi eksaktong kabaligtaran."
        },
        "2": {
          "question": "Beside the boulevard are gigantic buildings. (Opposite of 'boulevard')",
          "choices": {
            "A": "alley",
            "B": "street",
            "C": "avenue",
            "D": "road"
          },
          "correct": "A",
          "reason": "Ang boulevard ay malawak na kalsada na may mga puno. Ang kabaligtaran nito ay alley, ang makitid na eskinita. Ang street, avenue, at road ay pawang kasingkahulugan o uri ng kalsada."
        },
        "3": {
          "question": "He often got into trouble because he was brusque. (Opposite of 'brusque')",
          "choices": {
            "A": "blunt",
            "B": "rude",
            "C": "refined",
            "D": "curt"
          },
          "correct": "C",
          "reason": "Brusque = bastos at padabog magsalita. Antonym ay refined (magalang at pino ang kilos). Ang blunt, rude, at curt ay synonyms. Halimbawa: brusque na sagot ('Ayoko!') vs. refined na sagot ('Pasensya na po, hindi po ako puwede.')."
        },
        "4": {
          "question": "The reporter's candid remarks caught the mayoralty candidate off-guard. (Opposite of 'candid')",
          "choices": {
            "A": "secret",
            "B": "frank",
            "C": "well-thought",
            "D": "reserved"
          },
          "correct": "D",
          "reason": "Candid = prangka at tapat magsalita. Antonym ay reserved (nagtitimping magsalita, hindi prangka). Ang frank ay synonym. Halimbawa: candid na opinyon (tuwiran) vs. reserved na sagot (nag-iingat sa salita)."
        },
        "5": {
          "question": "The mean boys derided the sickly boy. (Opposite of 'derided')",
          "choices": {
            "A": "made fun of",
            "B": "ridiculed",
            "C": "praised",
            "D": "abandoned"
          },
          "correct": "C",
          "reason": "Deride = tuyain o libakin. Antonym: praised (purihin). Ang made fun of at ridiculed ay synonyms. Halimbawa: tinukso ng mga bata ang may sakit vs. pinuri siya sa tapang."
        },
        "6": {
          "question": "Charm was ecstatic when she won first prize in the short story writing contest. (Opposite of 'ecstatic')",
          "choices": {
            "A": "melancholic",
            "B": "overjoyed",
            "C": "worried",
            "D": "energetic"
          },
          "correct": "A",
          "reason": "Ecstatic = sobrang saya. Antonym: melancholic (malungkot o nagdadalamhati). Ang overjoyed ay synonym. Halimbawa: ecstatic na nanalo sa lotto vs. melancholic na namatayan."
        },
        "7": {
          "question": "Migraine headaches are excruciating. (Opposite of 'excruciating')",
          "choices": {
            "A": "extremely painful",
            "B": "mild pain",
            "C": "painless",
            "D": "healing"
          },
          "correct": "C",
          "reason": "Excruciating = sobrang sakit. Antonym: painless (walang sakit). Ang extremely painful ay synonym. Halimbawa: excruciating na sakit ng ngipin vs. painless na bakuna."
        },
        "8": {
          "question": "The quiz proved to be facile so the students got high scores. (Opposite of 'facile')",
          "choices": {
            "A": "difficult",
            "B": "easy",
            "C": "average",
            "D": "answerable"
          },
          "correct": "A",
          "reason": "Facile = madali. Antonym: difficult. Context clue: 'students got high scores,' kaya madali ang quiz. Ang easy at answerable ay synonyms."
        },
        "9": {
          "question": "The garrulous girls were distanced from each other. (Opposite of 'garrulous')",
          "choices": {
            "A": "mute",
            "B": "talkative",
            "C": "behaved",
            "D": "quiet"
          },
          "correct": "D",
          "reason": "Garrulous = madaldal. Antonym: quiet (tahimik). Ang talkative ay synonym. Halimbawa: madaldal na kapitbahay vs. tahimik na bagong lipat."
        },
        "10": {
          "question": "The heathens used to practice cannibalism. (Opposite of 'heathens')",
          "choices": {
            "A": "uncivilized people",
            "B": "barbaric people",
            "C": "old people",
            "D": "cultured people"
          },
          "correct": "D",
          "reason": "Heathen = taong hindi sibilisado o hindi relihiyoso sa tingin ng iba. Antonym sa mga choices: cultured people (mga taong may kultura at pinag-aralan). Ang uncivilized at barbaric ay synonyms."
        },
        "11": {
          "question": "Keep on believing that physical disability is not a hindrance to success. (Opposite of 'hindrance')",
          "choices": {
            "A": "block",
            "B": "stepping stone",
            "C": "opportunity",
            "D": "difficulty"
          },
          "correct": "B",
          "reason": "Hindrance = hadlang. Ang kabaligtaran ay stepping stone, isang bagay na tumutulong para umasenso. Ang block at difficulty ay synonyms. Halimbawa: kahirapan bilang hadlang vs. kahirapan bilang stepping stone para magsikap."
        },
        "12": {
          "question": "Never operate a machine once you are inebriated. (Opposite of 'inebriated')",
          "choices": {
            "A": "sober",
            "B": "drunk",
            "C": "sleepy",
            "D": "active"
          },
          "correct": "A",
          "reason": "Inebriated = lasing. Antonym: sober (hindi lasing at malinaw ang isip). Ang drunk ay synonym."
        },
        "13": {
          "question": "The people inveighed against the sharp increase in oil prices. (Opposite of 'inveighed')",
          "choices": {
            "A": "admitted",
            "B": "amended",
            "C": "accepted",
            "D": "deliberated"
          },
          "correct": "C",
          "reason": "Inveigh against = mariing tumutol o magprotesta. Antonym: accepted (tinanggap). Halimbawa: nag-rally ang mga tao laban sa taas-presyo vs. tinanggap na lang nila ito."
        },
        "14": {
          "question": "Some people believe that breaking a mirror is a jinx. (Opposite of 'jinx')",
          "choices": {
            "A": "bad luck",
            "B": "evil",
            "C": "expensive",
            "D": "good luck"
          },
          "correct": "D",
          "reason": "Jinx = malas o sumpa. Antonym: good luck. Ang bad luck at evil ay synonyms. Halimbawa: pamahiin na malas ang basag na salamin vs. swerte ang paglabas ng bahaghari."
        },
        "15": {
          "question": "The players were confused when the kibitzers suddenly butted-in during the team's huddle. (Opposite of 'kibitzers')",
          "choices": {
            "A": "advisers",
            "B": "spectators",
            "C": "onlookers",
            "D": "crowd"
          },
          "correct": "A",
          "reason": "Kibitzer = taong nakikialam at nagbibigay ng hindi hinihinging payo habang nanonood. Ang spectators, onlookers, at crowd ay lahat mga nanonood, kaya synonyms. Ang advisers ang pinakamalapit sa 'nagbibigay ng payo' — bilang 'legitimate' adviser kumpara sa pakialamero."
        },
        "16": {
          "question": "The lanky lad stood out among the average-sized students. (Opposite of 'lanky')",
          "choices": {
            "A": "fierce-looking",
            "B": "gigantic",
            "C": "short and stout",
            "D": "tall and thin"
          },
          "correct": "C",
          "reason": "Lanky = matangkad at payat. Antonym: short and stout (pandak at mataba). Ang tall and thin ay synonym. Halimbawa: si Ben na matangkad at payat vs. si Tony na pandak at malaki ang katawan."
        },
        "17": {
          "question": "The sickly dog was given a lethal dose of morphine tablets. (Opposite of 'lethal')",
          "choices": {
            "A": "fatal",
            "B": "safe",
            "C": "deadly",
            "D": "nasty"
          },
          "correct": "B",
          "reason": "Lethal = nakamamatay. Antonym: safe. Ang fatal at deadly ay synonyms. Halimbawa: lethal na lason vs. safe na gamot."
        },
        "18": {
          "question": "Heinous criminals are truly loathsome. (Opposite of 'loathsome')",
          "choices": {
            "A": "repugnant",
            "B": "foul",
            "C": "adorable",
            "D": "nasty"
          },
          "correct": "C",
          "reason": "Loathsome = kasuklam-suklam. Antonym: adorable (kaibig-ibig). Ang repugnant, foul, at nasty ay synonyms. Halimbawa: loathsome na krimen vs. adorable na tuta."
        },
        "19": {
          "question": "We listened attentively to the mellifluous sound produced by the Philippine Philharmonic Orchestra. (Opposite of 'mellifluous')",
          "choices": {
            "A": "harsh",
            "B": "resonant",
            "C": "melodious",
            "D": "mellow"
          },
          "correct": "A",
          "reason": "Mellifluous = napakatamis pakinggan (parang pulot). Antonym: harsh (magaspang o masakit sa tenga). Ang melodious, resonant, at mellow ay synonyms. Halimbawa: mellifluous na boses ng mang-aawit vs. harsh na ingay ng busina."
        },
        "20": {
          "question": "The free medical and dental checkup conducted by the AFP Group is just a proof of their munificence. (Opposite of 'munificence')",
          "choices": {
            "A": "commitment",
            "B": "generosity",
            "C": "extravagance",
            "D": "stinginess"
          },
          "correct": "D",
          "reason": "Munificence = pagiging bukas-palad at mapagbigay. Antonym: stinginess (kuripot). Ang generosity ay synonym. Halimbawa: pagbibigay ng libreng check-up vs. kuripot na ayaw magbigay ng barya."
        },
        "21": {
          "question": "Justice calls for penalizing nefarious acts. (Opposite of 'nefarious')",
          "choices": {
            "A": "honorable",
            "B": "detestable",
            "C": "infamous",
            "D": "vile"
          },
          "correct": "A",
          "reason": "Nefarious = napakasama at kasuklam-suklam. Antonym: honorable (marangal). Ang detestable, infamous, at vile ay synonyms. Halimbawa: nefarious na plano vs. honorable na gawain."
        },
        "22": {
          "question": "The Avanti Reviewer Books are noteworthy materials. (Opposite of 'noteworthy')",
          "choices": {
            "A": "remarkable",
            "B": "substantial",
            "C": "trivial",
            "D": "significant"
          },
          "correct": "C",
          "reason": "Noteworthy = karapat-dapat pansinin. Antonym: trivial (walang halaga). Ang remarkable, substantial, at significant ay synonyms. Halimbawa: noteworthy na tagumpay vs. trivial na detalye."
        },
        "23": {
          "question": "You will never get sufficient nourishment if you are obdurate in refusing to eat vegetables. (Opposite of 'obdurate')",
          "choices": {
            "A": "yielding",
            "B": "stubborn",
            "C": "rigid",
            "D": "inflexible"
          },
          "correct": "A",
          "reason": "Obdurate = matigas ang ulo o ayaw magbago ang isip. Antonym: yielding (umaayon, flexible). Ang stubborn, rigid, at inflexible ay synonyms. Halimbawa: obdurate na bata (ayaw kumain ng gulay) vs. yielding na batang sumusunod sa magulang."
        },
        "24": {
          "question": "Don't be so obtrusive but instead, mind your own business. (Opposite of 'obtrusive')",
          "choices": {
            "A": "reserved",
            "B": "snoopy",
            "C": "nosey",
            "D": "interfering"
          },
          "correct": "A",
          "reason": "Obtrusive = pakialamero o nagpupumilit na mapansin. Antonym: reserved (mahiyain at hindi nakikialam). Ang snoopy, nosey, at interfering ay synonyms. Context clue: 'mind your own business.'"
        },
        "25": {
          "question": "I admire people who are modest despite their opulence. (Opposite of 'opulence')",
          "choices": {
            "A": "great wealth",
            "B": "poverty",
            "C": "affluence",
            "D": "lavishness"
          },
          "correct": "B",
          "reason": "Opulence = labis na kayamanan. Antonym: poverty (kahirapan). Ang great wealth, affluence, at lavishness ay synonyms. Halimbawa: mansyon at ginto vs. maliit na barung-barong."
        },
        "26": {
          "question": "Do you always try to be a paragon of virtue? (Opposite of 'paragon')",
          "choices": {
            "A": "model",
            "B": "example",
            "C": "yardstick",
            "D": "anomaly"
          },
          "correct": "D",
          "reason": "Paragon = perpektong halimbawa o huwaran. Antonym: anomaly (kakaiba o hindi pangkaraniwan). Ang model, example, at yardstick ay synonyms. Sa choices, anomaly ang 'salungat' sa pagiging huwaran."
        },
        "27": {
          "question": "Tragic stories had so much pathos that it left me feeling down. (Opposite of 'pathos')",
          "choices": {
            "A": "anguish",
            "B": "woe",
            "C": "intrigue",
            "D": "humor"
          },
          "correct": "D",
          "reason": "Pathos = pakiramdam ng awa o lungkot. Antonym: humor (katatawanan). Ang anguish at woe ay synonyms. Halimbawa: drama na nakakaiyak vs. comedy na nakakatawa."
        },
        "28": {
          "question": "Myrna is such a precocious girl who can already read at age three. (Opposite of 'precocious')",
          "choices": {
            "A": "slow learner",
            "B": "bright",
            "C": "inquisitive",
            "D": "advanced"
          },
          "correct": "A",
          "reason": "Precocious = mas maaga ang pag-unlad kaysa sa edad. Antonym: slow learner. Ang bright at advanced ay synonyms. Halimbawa: batang marunong nang magbasa sa edad 3 vs. batang nahihirapan pa ring magbasa sa edad 7."
        },
        "29": {
          "question": "She had the quixotic idea that she was a reincarnation of a British princess. (Opposite of 'quixotic')",
          "choices": {
            "A": "wild",
            "B": "fantastic",
            "C": "realistic",
            "D": "dreamy"
          },
          "correct": "C",
          "reason": "Quixotic = idealistiko at hindi praktikal, tulad ni Don Quixote. Antonym: realistic. Ang fantastic at dreamy ay synonyms. Halimbawa: akala mo reincarnation ka ng prinsesa vs. alam mong ordinaryong tao ka."
        },
        "30": {
          "question": "The ramshackle building collapsed easily. (Opposite of 'ramshackle')",
          "choices": {
            "A": "new",
            "B": "old",
            "C": "outdated",
            "D": "shabby"
          },
          "correct": "A",
          "reason": "Ramshackle = sira-sira at halos gumuho. Antonym: new. Ang old, outdated, at shabby ay synonyms. Halimbawa: lumang kubo na halos bumagsak vs. bagong gawang gusali."
        },
        "31": {
          "question": "An A-rating represents the ultimate honor a film will ever have. (Opposite of 'ultimate')",
          "choices": {
            "A": "greatest",
            "B": "pinnacle",
            "C": "least",
            "D": "supreme"
          },
          "correct": "C",
          "reason": "Ultimate = pinakamataas o pinaka-dulo. Antonym: least. Ang greatest, pinnacle, at supreme ay synonyms. Halimbawa: ultimate prize (pinakamalaking premyo) vs. least prize (pinakamaliit)."
        },
        "32": {
          "question": "Juan Luna's painting abilities are uncanny. (Opposite of 'uncanny')",
          "choices": {
            "A": "remarkable",
            "B": "ordinary",
            "C": "astonishing",
            "D": "unbelievable"
          },
          "correct": "B",
          "reason": "Uncanny = kakaiba o kahanga-hanga. Antonym: ordinary. Ang remarkable, astonishing, at unbelievable ay synonyms. Halimbawa: uncanny na galing sa pagpinta vs. ordinaryong guhit."
        },
        "33": {
          "question": "Lea Salonga's performance was utterly delightful. (Opposite of 'utterly')",
          "choices": {
            "A": "somewhat",
            "B": "entirely",
            "C": "thoroughly",
            "D": "absolutely"
          },
          "correct": "A",
          "reason": "Utterly = lubos o ganap. Antonym: somewhat (medyo o bahagya). Ang entirely, thoroughly, at absolutely ay synonyms. Halimbawa: utterly delightful (talagang masaya) vs. somewhat delightful (medyo masaya)."
        },
        "34": {
          "question": "The strong current of the floodwaters caused the wooden bridge to vacillate. (Opposite of 'vacillate')",
          "choices": {
            "A": "collapse",
            "B": "sway",
            "C": "vibrate",
            "D": "be firm"
          },
          "correct": "D",
          "reason": "Vacillate = mag-alinlangan o umuga-uga. Antonym: be firm (maging matatag). Ang sway at vibrate ay synonyms. Halimbawa: umuugoy ang tulay sa agos vs. matatag na tulay."
        },
        "35": {
          "question": "The vindictive politician spread rumors about his opponent. (Opposite of 'vindictive')",
          "choices": {
            "A": "revengeful",
            "B": "forgiving",
            "C": "spiteful",
            "D": "malicious"
          },
          "correct": "B",
          "reason": "Vindictive = mapaghiganti. Antonym: forgiving (mapagpatawad). Ang revengeful, spiteful, at malicious ay synonyms. Halimbawa: gumaganti sa kalaban vs. nagpapatawad sa kasalanan."
        },
        "36": {
          "question": "If words were swords, then her vitriolic remarks could really kill. (Opposite of 'vitriolic')",
          "choices": {
            "A": "scathing",
            "B": "sarcastic",
            "C": "satirical",
            "D": "kind"
          },
          "correct": "D",
          "reason": "Vitriolic = napakasakit magsalita, mapanira. Antonym: kind. Ang scathing, sarcastic, at satirical ay synonyms. Context clue: 'words were swords.'"
        },
        "37": {
          "question": "Many students vouch for the effectiveness of the Avanti Review classes. (Opposite of 'vouch')",
          "choices": {
            "A": "guarantee",
            "B": "endorse",
            "C": "affirm",
            "D": "refute"
          },
          "correct": "D",
          "reason": "Vouch = patunayan o magbigay-garantiya. Antonym: refute (pabulaanan). Ang guarantee, endorse, at affirm ay synonyms. Halimbawa: sinasabi ng estudyante na epektibo ang review vs. sinasabi nilang hindi."
        },
        "38": {
          "question": "That yonder youth is more studious than the nearer one. (Opposite of 'yonder')",
          "choices": {
            "A": "lonesome",
            "B": "farther",
            "C": "closer",
            "D": "thither"
          },
          "correct": "C",
          "reason": "Yonder = nasa malayo (doon sa malayo). Antonym: closer (mas malapit). Ang farther at thither ay may kinalaman sa layo, pero hindi kabaligtaran. Halimbawa: yonder hill (burol sa malayo) vs. nearby hill (burol na malapit)."
        },
        "39": {
          "question": "Avanti Tutors are all zealous tutors who nourish eager minds. (Opposite of 'zealous')",
          "choices": {
            "A": "vigorous",
            "B": "earnest",
            "C": "indifferent",
            "D": "enthusiastic"
          },
          "correct": "C",
          "reason": "Zealous = masigasig at sabik. Antonym: indifferent (walang pakialam). Ang vigorous, earnest, at enthusiastic ay synonyms. Halimbawa: zealous na guro na laging handa vs. indifferent na guro na walang gana."
        },
        "40": {
          "question": "Don't let trivial things upset you. (Opposite of 'trivial')",
          "choices": {
            "A": "important",
            "B": "trifling",
            "C": "ordinary",
            "D": "inconsequential"
          },
          "correct": "A",
          "reason": "Trivial = walang halaga. Antonym: important. Ang trifling, ordinary, at inconsequential ay synonyms. Halimbawa: trivial na away (maliit na bagay) vs. important na desisyon."
        }
      }
    },
    {
      "subject": "English",
      "subject_icon": "📚",
      "topic": "Single-Word Analogy",
      "topic_order": 4,
      "questions": {
        "1": {
          "question": "Moby Dick : Herman Melville :: The Old Man and the Sea : ___",
          "choices": {
            "A": "Charles Dickens",
            "B": "Ernest Hemingway",
            "C": "Charles Perrault",
            "D": "Robert Frost"
          },
          "correct": "B",
          "reason": "Relasyon: libro → may-akda. Ang Moby Dick ay isinulat ni Herman Melville, at ang The Old Man and the Sea ay isinulat ni Ernest Hemingway. Halimbawa: Noli Me Tangere : Jose Rizal."
        },
        "2": {
          "question": "Confucius : China :: Mahatma Gandhi : ___",
          "choices": {
            "A": "India",
            "B": "Japan",
            "C": "Africa",
            "D": "Philippines"
          },
          "correct": "A",
          "reason": "Relasyon: kilalang tao → bansang pinanggalingan. Si Confucius ay Chinese; si Mahatma Gandhi ay mula sa India. Halimbawa: Jose Rizal : Philippines."
        },
        "3": {
          "question": "BIR : Taxes :: DPWH : ___",
          "choices": {
            "A": "Public Roads",
            "B": "Houses",
            "C": "Traffic",
            "D": "Churches"
          },
          "correct": "A",
          "reason": "Relasyon: ahensya → ang pangunahing ginagawa. Ang BIR ay nangongolekta ng buwis; ang DPWH (Department of Public Works and Highways) ay gumagawa ng pampublikong kalsada at imprastraktura. Halimbawa: DepEd : Edukasyon."
        },
        "4": {
          "question": "Barangay : Captain :: Provincial Government : ___",
          "choices": {
            "A": "Congressmen",
            "B": "Mayor",
            "C": "Senator",
            "D": "Governor"
          },
          "correct": "D",
          "reason": "Relasyon: antas ng pamahalaan → pinuno. Ang barangay ay pinamumunuan ng Captain; ang probinsya ay pinamumunuan ng Governor. Halimbawa: Bayan : Mayor."
        },
        "5": {
          "question": "USA : Washington D.C. :: Philippines : ___",
          "choices": {
            "A": "Prime Minister",
            "B": "King",
            "C": "Manila",
            "D": "Cebu"
          },
          "correct": "C",
          "reason": "Relasyon: bansa → kabisera (capital). Washington D.C. ang capital ng USA; Manila ang capital ng Pilipinas. Halimbawa: Japan : Tokyo."
        },
        "6": {
          "question": "Presidential : President :: Parliamentary : ___",
          "choices": {
            "A": "Prime Minister",
            "B": "King",
            "C": "House Speaker",
            "D": "Cardinal"
          },
          "correct": "A",
          "reason": "Relasyon: uri ng pamahalaan → pinuno. Presidential ay pinamumunuan ng President; Parliamentary ay pinamumunuan ng Prime Minister. Halimbawa: Monarchy : King/Queen."
        },
        "7": {
          "question": "Tagbanua : Palawan :: Kankanaey : ___",
          "choices": {
            "A": "Ilocos",
            "B": "Cavite",
            "C": "Benguet",
            "D": "Cebu"
          },
          "correct": "C",
          "reason": "Relasyon: pangkat etniko → lugar na tinitirhan. Ang Tagbanua ay nasa Palawan; ang Kankanaey ay nasa Benguet (Cordillera). Halimbawa: Ifugao : Ifugao Province."
        },
        "8": {
          "question": "Pyramid : Egypt :: Taj Mahal : ___",
          "choices": {
            "A": "China",
            "B": "Japan",
            "C": "India",
            "D": "Malaysia"
          },
          "correct": "C",
          "reason": "Relasyon: sikat na istruktura → bansa. Ang Pyramid ay sa Egypt; ang Taj Mahal ay sa India. Halimbawa: Eiffel Tower : France."
        },
        "9": {
          "question": "Tigris-Euphrates : Mesopotamia :: Nile River : ___",
          "choices": {
            "A": "Egypt",
            "B": "Greece",
            "C": "Italy",
            "D": "Spain"
          },
          "correct": "A",
          "reason": "Relasyon: ilog → sibilisasyong nabuo sa paligid nito. Ang Tigris-Euphrates ay Mesopotamia; ang Nile River ay Egypt. Halimbawa: Indus River : India (Indus Valley)."
        },
        "10": {
          "question": "Mahabharata : India :: Gilgamesh : ___",
          "choices": {
            "A": "Assyria",
            "B": "Sumer",
            "C": "Chaldea",
            "D": "Babylon"
          },
          "correct": "D",
          "reason": "Relasyon: epikong akda → kabihasnang pinagmulan. Ang Mahabharata ay mula sa India. Ang Gilgamesh ay sinaunang epiko mula sa Mesopotamia, na pinakakilala sa Babylonian (Standard Babylonian) na bersyon. Kaya Babylon."
        },
        "11": {
          "question": "Italy : Latin :: Greece : ___",
          "choices": {
            "A": "Grecian",
            "B": "French",
            "C": "Greek",
            "D": "Greece"
          },
          "correct": "C",
          "reason": "Relasyon: bansa → wika. Ang wika ng Italy ay Latin (sa konteksto ng sinaunang Roma); ang wika ng Greece ay Greek. Mali ang Grecian (pang-uri) at Greece (pangalan ng bansa). Halimbawa: France : French."
        },
        "12": {
          "question": "Sistine Madonna : Raphael :: Last Supper : ___",
          "choices": {
            "A": "Michelangelo",
            "B": "Leonardo da Vinci",
            "C": "Rembrandt",
            "D": "Van Gogh"
          },
          "correct": "B",
          "reason": "Relasyon: obra → pintor. Ang Sistine Madonna ay ipininta ni Raphael; ang Last Supper ay ipininta ni Leonardo da Vinci. Halimbawa: Mona Lisa : Leonardo da Vinci."
        },
        "13": {
          "question": "Stalagmite : Floor :: Stalactite : ___",
          "choices": {
            "A": "Wall",
            "B": "Ceiling",
            "C": "Mouth",
            "D": "Window"
          },
          "correct": "B",
          "reason": "Relasyon: ang stalagmite ay tumutubo mula sa sahig (floor) at pataas; ang stalactite ay nakasabit mula sa kisame (ceiling) sa kuweba. Tip: stalaCtite = Ceiling, stalaGmite = Ground."
        },
        "14": {
          "question": "Catholic : Priest :: Moslem : ___",
          "choices": {
            "A": "Rajah",
            "B": "Hajji",
            "C": "Koran",
            "D": "Imam"
          },
          "correct": "D",
          "reason": "Relasyon: relihiyon → pinuno ng pananampalataya. Katoliko : Priest; Islam : Imam. Halimbawa: Buddhist : Monk."
        },
        "15": {
          "question": "Giovanni Boccaccio : Decameron :: Niccolo Machiavelli : ___",
          "choices": {
            "A": "The Little Prince",
            "B": "Utopia",
            "C": "The Prince",
            "D": "Wealth of Nations"
          },
          "correct": "C",
          "reason": "Relasyon: awtor → pinakakilalang akda. Si Boccaccio ay sumulat ng Decameron; si Machiavelli ay sumulat ng The Prince. Ang Utopia ay kay Thomas More; ang Wealth of Nations ay kay Adam Smith."
        },
        "16": {
          "question": "Samuel Morse : Telegraph :: Alexander Graham Bell : ___",
          "choices": {
            "A": "telescope",
            "B": "telephone",
            "C": "teleportation",
            "D": "door bell"
          },
          "correct": "B",
          "reason": "Relasyon: imbentor → imbensyon. Si Samuel Morse ay nag-imbento ng telegraph; si Alexander Graham Bell ay nag-imbento ng telephone. Halimbawa: Thomas Edison : light bulb."
        },
        "17": {
          "question": "Parachute : Andre Jacques Garnerin :: Television : ___",
          "choices": {
            "A": "John Logie Baird",
            "B": "William Sony",
            "C": "John Vincent Crowe",
            "D": "Howard Aiken"
          },
          "correct": "A",
          "reason": "Relasyon: imbensyon → imbentor. Ang parachute ay kay Andre Jacques Garnerin; ang television ay kay John Logie Baird. Pansinin na baligtad ang order dito (imbensyon muna, imbentor pangalawa)."
        },
        "18": {
          "question": "Earth is the center : Ptolemy :: Sun is the center : ___",
          "choices": {
            "A": "Albert Einstein",
            "B": "Aristotle",
            "C": "Galileo",
            "D": "Copernicus"
          },
          "correct": "D",
          "reason": "Relasyon: teorya → siyentipiko. Ptolemy : geocentric (Earth ang sentro). Copernicus : heliocentric (Sun ang sentro). Ang Galileo ay sumuporta rito, pero si Copernicus ang nagpasimula."
        },
        "19": {
          "question": "Pythagorean Theorem : Pythagoras :: Cubic Equation : ___",
          "choices": {
            "A": "Alfred Noble",
            "B": "Isaac Newton",
            "C": "Tartaglia",
            "D": "Rene Descartes"
          },
          "correct": "C",
          "reason": "Relasyon: matematikal na tuklas → matematiko. Ang Pythagorean Theorem ay kay Pythagoras; ang cubic equation solution ay iniuugnay kay Tartaglia (Niccolo Tartaglia)."
        },
        "20": {
          "question": "Henry Cavendish : Hydrogen :: Joseph Priestley : ___",
          "choices": {
            "A": "carbonic acid",
            "B": "oxygen",
            "C": "radium",
            "D": "potassium"
          },
          "correct": "B",
          "reason": "Relasyon: siyentipiko → elementong natuklasan. Cavendish : hydrogen. Priestley : oxygen."
        },
        "21": {
          "question": "Allied Powers : Russia :: Central Powers : ___",
          "choices": {
            "A": "France",
            "B": "Britain",
            "C": "Italy",
            "D": "Austria"
          },
          "correct": "D",
          "reason": "Relasyon: alyansa sa WWI → miyembrong bansa. Ang Russia ay Allied Power; ang Austria (Austria-Hungary) ay Central Power. Ang France, Britain, at Italy ay Allied Powers din, kaya mali."
        },
        "22": {
          "question": "Entourage : Attendants :: Cortege : ___",
          "choices": {
            "A": "Procession for a Saint",
            "B": "Procession in court",
            "C": "Funeral Procession",
            "D": "Floral Procession"
          },
          "correct": "C",
          "reason": "Relasyon: entourage = pangkat ng mga kasama; cortege = prusisyon, lalo na sa libing. Kaya funeral procession. Halimbawa: kotse ng patay na sinusundan ng mga sasakyan."
        },
        "23": {
          "question": "Islet : Small Island :: Rivulet : ___",
          "choices": {
            "A": "Small River",
            "B": "Small Land",
            "C": "Small Review",
            "D": "Small Rebel"
          },
          "correct": "A",
          "reason": "Relasyon: -let ay nagpapahiwatig ng maliit. Islet = maliit na isla; rivulet = maliit na ilog (sapa). Halimbawa: booklet = maliit na libro."
        },
        "24": {
          "question": "Conspicuous : Obvious :: Hideous : ___",
          "choices": {
            "A": "hidden",
            "B": "ugly",
            "C": "expert in hiding",
            "D": "very bad"
          },
          "correct": "B",
          "reason": "Relasyon: kasingkahulugan. Conspicuous = obvious; hideous = ugly (kasuklam-suklam). Ang 'hidden' ay trap dahil parang 'hide.'"
        },
        "25": {
          "question": "nose : nasal :: abdomen : ___",
          "choices": {
            "A": "abnormal",
            "B": "abdominal",
            "C": "abominate",
            "D": "adenoma"
          },
          "correct": "B",
          "reason": "Relasyon: bahagi ng katawan → pang-uri (adjective). Nose → nasal; abdomen → abdominal. Halimbawa: heart → cardiac."
        },
        "26": {
          "question": "agnostic : doubts God's existence :: atheist : ___",
          "choices": {
            "A": "denies God's existence",
            "B": "denies God as creator",
            "C": "affirms God's existence",
            "D": "affirms God as creator"
          },
          "correct": "A",
          "reason": "Relasyon: agnostic = nagdududa kung may Diyos; atheist = itinatanggi ang Diyos. Halimbawa: doubt vs. denial."
        },
        "27": {
          "question": "infanticide : killing of infants :: genocide : ___",
          "choices": {
            "A": "killing of genies",
            "B": "killing of geniuses",
            "C": "killing of a race or social group",
            "D": "killing of Geno"
          },
          "correct": "C",
          "reason": "Relasyon: -cide = pagpatay. Infanticide = pagpatay sa sanggol; genocide = pagpatay ng buong lahi o pangkat. Halimbawa: homicide = pagpatay sa tao."
        },
        "28": {
          "question": "latrine : toilet :: lavatory : ___",
          "choices": {
            "A": "basin",
            "B": "tub",
            "C": "sink",
            "D": "bathroom"
          },
          "correct": "D",
          "reason": "Relasyon: kasingkahulugan. Latrine = toilet; lavatory = bathroom (banyo). Halimbawa: restroom/comfort room."
        },
        "29": {
          "question": "masticate : chew :: eradicate : ___",
          "choices": {
            "A": "collect",
            "B": "count",
            "C": "complete",
            "D": "throw"
          },
          "correct": "D",
          "reason": "Relasyon: kasingkahulugan sa kahulugan ng pandiwa. Masticate = chew (ngumuya). Eradicate = lubusang alisin o burahin (throw out). Sa mga choices, throw (itapon/alisin) ang pinakamalapit sa diwa ng 'throw out/discard.'"
        },
        "30": {
          "question": "sadism : delight in cruelty to others :: masochism : ___",
          "choices": {
            "A": "delight in building houses",
            "B": "delight in hurting masons",
            "C": "delight in being abused",
            "D": "delight in going to Masses"
          },
          "correct": "C",
          "reason": "Relasyon: sadism = tuwa sa pananakit ng iba; masochism = tuwa sa sariling pagkakasakit o pagkaaping. Kaya delight in being abused."
        },
        "31": {
          "question": "Mazurka : Polish :: Fandango : ___",
          "choices": {
            "A": "Russian",
            "B": "Spanish",
            "C": "German",
            "D": "Polish"
          },
          "correct": "B",
          "reason": "Relasyon: sayaw → pinagmulang bansa. Ang mazurka ay mula sa Poland (Polish); ang fandango ay mula sa Spain (Spanish)."
        },
        "32": {
          "question": "nearsighted : myopia :: farsighted : ___",
          "choices": {
            "A": "hyperopia",
            "B": "squint",
            "C": "double-vision",
            "D": "blink"
          },
          "correct": "A",
          "reason": "Relasyon: kondisyon ng mata. Nearsighted (malabo sa malayo) ay myopia; farsighted (malabo sa malapit) ay hyperopia."
        },
        "33": {
          "question": "dyslexia : reading :: aphasia : ___",
          "choices": {
            "A": "muscle coordination",
            "B": "speech",
            "C": "eye movement",
            "D": "memory"
          },
          "correct": "B",
          "reason": "Relasyon: karamdaman → apektadong bahagi. Dyslexia ay problema sa pagbasa; aphasia ay problema sa pagsasalita o paggamit ng wika."
        },
        "34": {
          "question": "maitre d' : head of a restaurant :: busboy : ___",
          "choices": {
            "A": "bus conductor",
            "B": "bus cleaner",
            "C": "waiter's help",
            "D": "head waiter"
          },
          "correct": "C",
          "reason": "Relasyon: posisyon → trabaho. Ang maitre d' ang namumuno sa dining area; ang busboy ay katulong ng waiter (naglilinis ng mesa, nagdadala ng plato)."
        },
        "35": {
          "question": "figurine : small figure :: heroine : ___",
          "choices": {
            "A": "small hero",
            "B": "female hero",
            "C": "small drug",
            "D": "female drug"
          },
          "correct": "B",
          "reason": "Relasyon: ang -ine (figurine) = maliit na bersyon; ang heroine = babaeng hero (heroin ay ibang salita para sa droga). Kaya female hero. Pansinin na ang '-ine' sa heroine ay babae ang kahulugan, hindi maliit."
        },
        "36": {
          "question": "xerox : photocopier :: Adidas : ___",
          "choices": {
            "A": "athlete's shoes",
            "B": "dress shoes",
            "C": "formal wear",
            "D": "handsome"
          },
          "correct": "A",
          "reason": "Relasyon: brand → produkto. Xerox = photocopier; Adidas = athlete's shoes (sapatos pang-sports). Halimbawa: Colgate : toothpaste."
        },
        "37": {
          "question": "Sayonara : Goodbye :: Bonjour : ___",
          "choices": {
            "A": "Good luck",
            "B": "Good day",
            "C": "Good night",
            "D": "Good evening"
          },
          "correct": "B",
          "reason": "Relasyon: pagbati sa ibang wika → kahulugan sa English. Sayonara (Japanese) = Goodbye; Bonjour (French) = Good day (o Hello). Halimbawa: Salamat : Thank you."
        },
        "38": {
          "question": "superfluous : excessive :: supersede : ___",
          "choices": {
            "A": "watch over",
            "B": "full of seeds",
            "C": "great seed",
            "D": "take the place of"
          },
          "correct": "D",
          "reason": "Relasyon: kasingkahulugan. Superfluous = sobra; supersede = palitan o pumalit (take the place of). Halimbawa: ang bagong batas ay nag-supersede sa luma."
        },
        "39": {
          "question": "nativity : Christmas :: senakulo : ___",
          "choices": {
            "A": "advent",
            "B": "lent",
            "C": "pentecost",
            "D": "passover"
          },
          "correct": "B",
          "reason": "Relasyon: kaganapan → panahon ng relihiyon. Ang Nativity ay Pasko; ang senakulo ay dula tungkol sa pagpapakasakit ni Kristo na ginaganap tuwing Lent (Kuwaresma)."
        },
        "40": {
          "question": "theme : main idea :: moral : ___",
          "choices": {
            "A": "a value",
            "B": "a desire",
            "C": "a piece of advice",
            "D": "a standard"
          },
          "correct": "C",
          "reason": "Relasyon: elemento ng kuwento → kahulugan. Theme = pangunahing ideya; moral = aral (piece of advice). Halimbawa: sa 'Ang Aso at ang Buto,' ang moral ay huwag maging sakim."
        }
      }
    },
    {
      "subject": "English",
      "subject_icon": "📚",
      "topic": "Double-Word Analogy",
      "topic_order": 5,
      "questions": {
        "1": {
          "question": "Choose the pair related the same way as: blend : mix",
          "choices": {
            "A": "blare : whisper",
            "B": "bleach : whiten",
            "C": "blink : blink",
            "D": "bloom : flower"
          },
          "correct": "B",
          "reason": "Relasyon: kasingkahulugan (synonyms). Blend = mix. Ang bleach at whiten ay magkasingkahulugan din. Mali ang blare:whisper (magkasalungat) at blink:blink (pareho ang salita)."
        },
        "2": {
          "question": "Choose the pair related the same way as: abattoir : slaughterhouse",
          "choices": {
            "A": "quay : wharf",
            "B": "quack : duck",
            "C": "snail : slow",
            "D": "clown : fun"
          },
          "correct": "A",
          "reason": "Relasyon: synonyms. Abattoir = slaughterhouse (katayan). Ang quay = wharf (daungan o pantalan). Halimbawa: cobbler : shoemaker."
        },
        "3": {
          "question": "Choose the pair related the same way as: marriageable : nubile",
          "choices": {
            "A": "single : group",
            "B": "music : mobile",
            "C": "puzzle : answer",
            "D": "decipherable : comprehensible"
          },
          "correct": "D",
          "reason": "Relasyon: synonyms. Marriageable = nubile (puwede nang mag-asawa). Ang decipherable = comprehensible (nababasa o naiintindihan)."
        },
        "4": {
          "question": "Choose the pair related the same way as: numismatist : money",
          "choices": {
            "A": "aesthetics : beauty",
            "B": "fetish : obsession",
            "C": "linguist : language",
            "D": "scientist : sense"
          },
          "correct": "C",
          "reason": "Relasyon: tao → pinag-aaralan o kinokolekta. Ang numismatist ay nag-aaral o nangongolekta ng barya at pera; ang linguist ay nag-aaral ng wika. Ang aesthetics:beauty ay larangan, hindi tao."
        },
        "5": {
          "question": "Choose the pair related the same way as: anxious : uneasy",
          "choices": {
            "A": "egocentric : self-centered",
            "B": "wary : placid",
            "C": "feeble : strong",
            "D": "scornful : admirable"
          },
          "correct": "A",
          "reason": "Relasyon: synonyms. Anxious = uneasy. Egocentric = self-centered. Mali ang B, C, at D dahil mga antonyms ang mga iyon (wary:placid, feeble:strong, scornful:admirable)."
        },
        "6": {
          "question": "Choose the pair related the same way as: goat : kid",
          "choices": {
            "A": "bear : cub",
            "B": "chicken : hen",
            "C": "dog : Dalmatian",
            "D": "tiger : tigress"
          },
          "correct": "A",
          "reason": "Relasyon: adult → anak (young). Goat → kid; bear → cub. Ang chicken:hen ay magulang na babae, hindi anak. Halimbawa: cow : calf."
        },
        "7": {
          "question": "Choose the pair related the same way as: key : lock",
          "choices": {
            "A": "litter : trash",
            "B": "pestle : pound",
            "C": "table : desk",
            "D": "sword : scabbard"
          },
          "correct": "D",
          "reason": "Relasyon: bagay at pinagpapasukan nito. Ang key ay pumapasok sa lock; ang sword ay isinisilid sa scabbard (lagayan ng espada). Halimbawa: hand : glove."
        },
        "8": {
          "question": "Choose the pair related the same way as: dog : kennel",
          "choices": {
            "A": "whale : pond",
            "B": "socks : feet",
            "C": "pig : sty",
            "D": "eagle : barn"
          },
          "correct": "C",
          "reason": "Relasyon: hayop → tirahan. Dog → kennel; pig → sty (kural ng baboy). Halimbawa: bird : nest."
        },
        "9": {
          "question": "Choose the pair related the same way as: book : leaves",
          "choices": {
            "A": "house : kitchen",
            "B": "chimney : roof",
            "C": "fan : electricity",
            "D": "chair : sitting"
          },
          "correct": "A",
          "reason": "Relasyon: kabuuan → bahagi. Ang book ay may leaves (pahina); ang house ay may kitchen. Halimbawa: car : wheel."
        },
        "10": {
          "question": "Choose the pair related the same way as: panda : China",
          "choices": {
            "A": "grizzly : Africa",
            "B": "polar bear : America",
            "C": "Pooh : Disneyland",
            "D": "koala : Australia"
          },
          "correct": "D",
          "reason": "Relasyon: hayop → katutubong lugar. Ang panda ay mula sa China; ang koala ay mula sa Australia."
        },
        "11": {
          "question": "Choose the pair related the same way as: jubilant : morose",
          "choices": {
            "A": "humble : modest",
            "B": "joyous : happy",
            "C": "simple : lavish",
            "D": "pompous : pretentious"
          },
          "correct": "C",
          "reason": "Relasyon: antonyms (magkasalungat). Jubilant (masaya) vs. morose (malungkot); simple vs. lavish (marangya). Ang humble:modest, joyous:happy, at pompous:pretentious ay pawang synonyms."
        },
        "12": {
          "question": "Choose the pair related the same way as: tiny : microscopic",
          "choices": {
            "A": "uproar : laughter",
            "B": "large : mammoth",
            "C": "argument : meeting",
            "D": "storm : weather"
          },
          "correct": "B",
          "reason": "Relasyon: degree (antas). Ang microscopic ay mas matinding 'maliit' kaysa tiny; ang mammoth ay mas matinding 'malaki' kaysa large."
        },
        "13": {
          "question": "Choose the pair related the same way as: to smile : to guffaw",
          "choices": {
            "A": "to walk : to stroll",
            "B": "to frown : to weep",
            "C": "to munch : to eat",
            "D": "to lift : to carry"
          },
          "correct": "B",
          "reason": "Relasyon: degree ng emosyon. Smile → guffaw (mas matinding tawa). Frown (pagkunot) → weep (iyak). Ang walk:stroll at lift:carry ay hindi pagtindi ng damdamin."
        },
        "14": {
          "question": "Choose the pair related the same way as: hand : arm",
          "choices": {
            "A": "foot : leg",
            "B": "hips : sway",
            "C": "waist : belt",
            "D": "shoulder : neck"
          },
          "correct": "A",
          "reason": "Relasyon: bahagi → mas malaking bahagi na kinakabitan. Ang hand ay nasa dulo ng arm; ang foot ay nasa dulo ng leg."
        },
        "15": {
          "question": "Choose the pair related the same way as: pre : post",
          "choices": {
            "A": "anti : pro",
            "B": "semi : equi",
            "C": "able : can",
            "D": "demi : half"
          },
          "correct": "A",
          "reason": "Relasyon: magkasalungat na prefix. Pre- (bago) vs. post- (pagkatapos). Anti- (laban) vs. pro- (pabor). Halimbawa: pre-war vs. post-war."
        },
        "16": {
          "question": "Choose the pair related the same way as: auditorium : audience",
          "choices": {
            "A": "hall : pictures",
            "B": "movie house : cinema",
            "C": "coliseum : spectators",
            "D": "commuters : transportation"
          },
          "correct": "C",
          "reason": "Relasyon: lugar → mga taong naroroon. Ang auditorium ay may audience; ang coliseum ay may spectators. Halimbawa: stadium : fans."
        },
        "17": {
          "question": "Choose the pair related the same way as: Edgar Allan Poe : Annabel Lee",
          "choices": {
            "A": "Robert Frost : Medea",
            "B": "Pygmalion : Galatea",
            "C": "Chaucer : Antigone",
            "D": "Shakespeare : Romeo and Juliet"
          },
          "correct": "D",
          "reason": "Relasyon: may-akda → akda. Si Poe ay sumulat ng 'Annabel Lee'; si Shakespeare ay sumulat ng 'Romeo and Juliet.' Ang Medea ay kay Euripides at ang Antigone ay kay Sophocles, kaya mali ang A at C."
        },
        "18": {
          "question": "Choose the pair related the same way as: advise : counsel",
          "choices": {
            "A": "lead : direct",
            "B": "loss : lost",
            "C": "peace : piece",
            "D": "want : quality"
          },
          "correct": "A",
          "reason": "Relasyon: synonyms. Advise = counsel. Lead = direct. Mali ang loss:lost (iba ang anyo ng salita) at peace:piece (homophones)."
        },
        "19": {
          "question": "Choose the pair related the same way as: perspire : sweat",
          "choices": {
            "A": "clouds : rain",
            "B": "cry : tears",
            "C": "fan : wind",
            "D": "sad : lonely"
          },
          "correct": "B",
          "reason": "Relasyon: kilos → bunga nito. Ang perspire ay naglalabas ng sweat; ang cry ay naglalabas ng tears. Halimbawa: bleed : blood."
        },
        "20": {
          "question": "Choose the pair related the same way as: extricate : set free",
          "choices": {
            "A": "journey : far",
            "B": "liquidate : liquefy",
            "C": "implicate : involve",
            "D": "migrate : stay"
          },
          "correct": "C",
          "reason": "Relasyon: synonyms. Extricate = set free; implicate = involve (isali o idawit). Ang liquidate:liquefy ay hindi eksaktong magkasingkahulugan."
        },
        "21": {
          "question": "Choose the pair related the same way as: maggot : fly",
          "choices": {
            "A": "caterpillar : leaves",
            "B": "bees : wasp",
            "C": "butterfly : moth",
            "D": "tadpole : frog"
          },
          "correct": "D",
          "reason": "Relasyon: immature stage → adult. Ang maggot ay nagiging fly; ang tadpole ay nagiging frog. Halimbawa: caterpillar : butterfly."
        },
        "22": {
          "question": "Choose the pair related the same way as: he : him",
          "choices": {
            "A": "me : I",
            "B": "they : them",
            "C": "you : yours",
            "D": "her : she"
          },
          "correct": "B",
          "reason": "Relasyon: subject pronoun → object pronoun. He → him; they → them. Halimbawa: she : her. Mali ang A at D dahil baligtad ang order."
        },
        "23": {
          "question": "Choose the pair related the same way as: lie : to recline",
          "choices": {
            "A": "lay : put down",
            "B": "macabre : beauty",
            "C": "nab : release",
            "D": "quench : to thirst"
          },
          "correct": "A",
          "reason": "Relasyon: pandiwa → kahulugan. Ang lie (sa kontekstong ito) = to recline (humiga). Ang lay = put down (ilapag). Tip: lie ay hindi nangangailangan ng object, lay ay mayroon."
        },
        "24": {
          "question": "Choose the pair related the same way as: igloo : Eskimo",
          "choices": {
            "A": "cavemen : cave",
            "B": "palace : kings",
            "C": "destitute : shanty",
            "D": "bees : beehive"
          },
          "correct": "B",
          "reason": "Relasyon: tirahan → gumagamit o nakatira. Ang igloo ay bahay ng Eskimo; ang palace ay bahay ng kings."
        },
        "25": {
          "question": "Choose the pair related the same way as: dictionary : word meanings",
          "choices": {
            "A": "almanac : synonyms",
            "B": "encyclopedia : word origin",
            "C": "atlas : maps",
            "D": "thesaurus : dinosaurs"
          },
          "correct": "C",
          "reason": "Relasyon: reference book → laman nito. Ang dictionary ay para sa word meanings; ang atlas ay para sa maps. Ang thesaurus ay para sa synonyms, hindi dinosaurs."
        },
        "26": {
          "question": "Choose the pair related the same way as: extemporaneous : rehearsed",
          "choices": {
            "A": "live : taped",
            "B": "momentous : important",
            "C": "nefarious : wicked",
            "D": "salubrious : healthful"
          },
          "correct": "A",
          "reason": "Relasyon: antonyms. Extemporaneous (walang paghahanda) vs. rehearsed (pinaghandaan). Ang live ay hindi pa pinag-edit; ang taped ay naitala na."
        },
        "27": {
          "question": "Choose the pair related the same way as: tavern : bar",
          "choices": {
            "A": "inn : hotel",
            "B": "apartment : loft",
            "C": "condominium : office",
            "D": "attic : chimney"
          },
          "correct": "A",
          "reason": "Relasyon: synonyms. Tavern = bar (inuman). Inn = hotel (tuluyan)."
        },
        "28": {
          "question": "Choose the pair related the same way as: duchess : duke",
          "choices": {
            "A": "count : countess",
            "B": "ewe : ram",
            "C": "gentleman : lady",
            "D": "wizard : witch"
          },
          "correct": "B",
          "reason": "Relasyon: babae → lalaki (female : male). Ang duchess ay asawa ng duke; ang ewe (babaeng tupa) ay katapat ng ram (lalaking tupa). Mali ang A, C, at D dahil baligtad ang order (lalaki muna)."
        },
        "29": {
          "question": "Choose the pair related the same way as: dwindle : decrease",
          "choices": {
            "A": "defer : act promptly",
            "B": "deny : grant",
            "C": "forge : stop",
            "D": "multiply : increase"
          },
          "correct": "D",
          "reason": "Relasyon: synonyms. Dwindle = bumaba. Decrease = bumaba. Multiply (dumami) = increase."
        },
        "30": {
          "question": "Choose the pair related the same way as: prowess : cowardice",
          "choices": {
            "A": "adept : skilled",
            "B": "adroit : uncoordinated",
            "C": "garrulous : talkative",
            "D": "hubris : pride"
          },
          "correct": "B",
          "reason": "Relasyon: antonyms. Prowess (husay o tapang) vs. cowardice (duwag). Adroit (bihasa, mahusay) vs. uncoordinated. Ang adept:skilled at garrulous:talkative ay synonyms."
        },
        "31": {
          "question": "Choose the pair related the same way as: charisma : charismata",
          "choices": {
            "A": "deer : deers",
            "B": "bacterium : bacteriums",
            "C": "basis : bases",
            "D": "eight : eighty's"
          },
          "correct": "C",
          "reason": "Relasyon: singular → irregular plural. Charisma → charismata. Ang tamang irregular plural ay basis → bases. Mali ang 'bacteriums' (plural ng bacterium ay bacteria), 'deers' (deer ang plural), at 'eighty's.'"
        },
        "32": {
          "question": "Choose the pair related the same way as: quintuplet : five",
          "choices": {
            "A": "triplet : three",
            "B": "quadruplet : four",
            "C": "doublet : two",
            "D": "sexton : six"
          },
          "correct": "A",
          "reason": "Relasyon: salita → bilang. Quintuplet = lima (five); triplet = tatlo (three). Ang quadruplet ay tamang salita ngunit hindi katulad ng quintuplet sa diwa ng ipinapahiwatig na bilang (quadruplet = 4). Ang 'sexton' ay hindi 'six.'"
        },
        "33": {
          "question": "Choose the pair related the same way as: attention : attn",
          "choices": {
            "A": "approximate : appro",
            "B": "bal : balance",
            "C": "building : bldng",
            "D": "manager : mgr"
          },
          "correct": "D",
          "reason": "Relasyon: buong salita → abbreviation: attention → attn. Ang manager → mgr ay tamang pares (d). Ang bal:balance ay baligtad (abbreviation muna). Ang bldng ay hindi karaniwang abbreviation."
        },
        "34": {
          "question": "Choose the pair related the same way as: arachnophobia : fear of spiders",
          "choices": {
            "A": "hydrophobia : fear of wet objects",
            "B": "claustrophobia : fear of clauses",
            "C": "photophobia : fear of light",
            "D": "xenophobia : fear of sin"
          },
          "correct": "C",
          "reason": "Relasyon: phobia → kinatatakutan. Arachnophobia = takot sa gagamba; photophobia = takot sa liwanag. Mali ang iba (hydrophobia ay takot sa tubig, claustrophobia ay takot sa masikip na lugar, xenophobia ay takot sa dayuhan)."
        },
        "35": {
          "question": "Choose the pair related the same way as: unscrew : tighten",
          "choices": {
            "A": "remove : restore",
            "B": "relinquish : give up",
            "C": "sensitive : make sensitive",
            "D": "stupefy : make insensible"
          },
          "correct": "A",
          "reason": "Relasyon: antonyms. Unscrew (luwagan) vs. tighten (higpitan); remove (alisin) vs. restore (ibalik). Ang relinquish:give up ay synonyms."
        },
        "36": {
          "question": "Choose the pair related the same way as: verbose : speechless",
          "choices": {
            "A": "voracious : greedy",
            "B": "vicious : kind",
            "C": "wanton : lewd",
            "D": "waspish : irritable"
          },
          "correct": "B",
          "reason": "Relasyon: antonyms. Verbose (maligoy o madaldal) vs. speechless; vicious (masama) vs. kind (mabait). Ang voracious:greedy at wanton:lewd ay synonyms."
        },
        "37": {
          "question": "Choose the pair related the same way as: COD : cash on delivery",
          "choices": {
            "A": "DST : daylight saving time",
            "B": "PO : public office",
            "C": "NA : not appointed",
            "D": "RSVP : please approve"
          },
          "correct": "A",
          "reason": "Relasyon: abbreviation → buong kahulugan. COD = cash on delivery; DST = daylight saving time. Mali ang RSVP (ibig sabihin ay 'please reply,' hindi approve)."
        },
        "38": {
          "question": "Choose the pair related the same way as: adjacent : near",
          "choices": {
            "A": "congruent : dissimilar",
            "B": "converge : separate",
            "C": "deliberate : intentional",
            "D": "delude : guide"
          },
          "correct": "C",
          "reason": "Relasyon: synonyms. Adjacent = near (magkatabi). Deliberate = intentional (sinadya)."
        },
        "39": {
          "question": "Choose the pair related the same way as: firmament : sky",
          "choices": {
            "A": "clouds : air",
            "B": "moon : planet",
            "C": "star : gas",
            "D": "soil : ground"
          },
          "correct": "D",
          "reason": "Relasyon: synonyms. Firmament = sky (kalawakan); soil = ground (lupa)."
        },
        "40": {
          "question": "Choose the pair related the same way as: languid : strong",
          "choices": {
            "A": "feeble : active",
            "B": "innocuous : harmless",
            "C": "opportune : timely",
            "D": "truculent : restless"
          },
          "correct": "A",
          "reason": "Relasyon: antonyms. Languid (mahina, matamlay) vs. strong; feeble (mahina) vs. active (masigla). Ang innocuous:harmless at opportune:timely ay synonyms."
        }
      }
    },
    {
      "subject": "English",
      "subject_icon": "📚",
      "topic": "Identifying Errors",
      "topic_order": 6,
      "questions": {
        "1": {
          "question": "No one were happy about the Mindanao crisis.",
          "choices": {
            "A": "No one",
            "B": "were happy",
            "C": "about",
            "D": "crisis",
            "E": "No error"
          },
          "correct": "B",
          "reason": "\"No one\" ay singular, kaya dapat \"was,\" hindi \"were.\" Tamang: \"No one was happy about the Mindanao crisis.\" Halimbawa: \"Nobody is here\" (hindi \"are\")."
        },
        "2": {
          "question": "The House of Representative's decision to decrease the budget for the Department of Education was met with protests.",
          "choices": {
            "A": "House of Representative",
            "B": "to decrease",
            "C": "for",
            "D": "met",
            "E": "No error"
          },
          "correct": "A",
          "reason": "Ang opisyal na pangalan ay \"House of Representatives\" (plural). Kaya dapat \"House of Representatives' decision\" — hindi \"House of Representative's.\""
        },
        "3": {
          "question": "The Cabinet regularly meet once a week.",
          "choices": {
            "A": "Cabinet",
            "B": "regularly",
            "C": "meet",
            "D": "once a week",
            "E": "No error"
          },
          "correct": "C",
          "reason": "Ang \"Cabinet\" ay iisang grupo na ginagawa bilang singular, kaya \"meets,\" hindi \"meet.\" Halimbawa: \"The committee meets every Monday.\""
        },
        "4": {
          "question": "Both the Senators and the Congressmen legislates laws.",
          "choices": {
            "A": "Both",
            "B": "Senators",
            "C": "Congressmen",
            "D": "legislates",
            "E": "No error"
          },
          "correct": "D",
          "reason": "Ang subject ay \"Senators and Congressmen\" (plural), kaya \"legislate,\" hindi \"legislates.\" Tamang: \"Both the Senators and the Congressmen legislate laws.\""
        },
        "5": {
          "question": "The Philippine government have three branches of powers: the executive, the legislative and the judicial.",
          "choices": {
            "A": "government",
            "B": "have",
            "C": "branches",
            "D": "powers",
            "E": "No error"
          },
          "correct": "B",
          "reason": "Ang \"government\" ay singular, kaya \"has,\" hindi \"have.\" Tamang: \"The Philippine government has three branches of powers.\" Halimbawa: \"The company has ten employees.\""
        },
        "6": {
          "question": "The Supreme Court upholds the highest principles and standards of morality as embodied in the Constitution.",
          "choices": {
            "A": "upholds",
            "B": "principles",
            "C": "standards",
            "D": "embodied",
            "E": "No error"
          },
          "correct": "E",
          "reason": "Walang mali (E). Tama ang \"upholds\" sa singular na \"Supreme Court,\" at tama ang \"embodied in the Constitution.\" Hindi kailangang laging may mali; may mga item na (E) talaga."
        },
        "7": {
          "question": "Some historians contests the origin of the Filipino flag.",
          "choices": {
            "A": "Some",
            "B": "historians",
            "C": "contests",
            "D": "origin",
            "E": "No error"
          },
          "correct": "C",
          "reason": "Ang \"historians\" ay plural, kaya \"contest,\" hindi \"contests.\" Tamang: \"Some historians contest the origin of the Filipino flag.\" Tip: kapag ang subject ay \"some + plural noun,\" plural ang verb."
        },
        "8": {
          "question": "Some believe that the flag we use now is not the same as the one made by Marcela Agoncillo.",
          "choices": {
            "A": "believe",
            "B": "use",
            "C": "is",
            "D": "made",
            "E": "No error"
          },
          "correct": "E",
          "reason": "Walang mali (E). Tama ang \"believe\" kasama ng \"Some,\" tama ang \"use\" kasama ng \"we,\" at tama ang \"is not the same as.\""
        },
        "9": {
          "question": "Either Prof. Teodoro Agoncillo or Dr. Gregorio F. Zaide affirm the history of our flag.",
          "choices": {
            "A": "Either",
            "B": "affirm",
            "C": "history",
            "D": "of",
            "E": "No error"
          },
          "correct": "B",
          "reason": "Sa \"either ... or,\" ang verb ay tumutugma sa subject na pinakamalapit (Dr. Zaide, singular), kaya \"affirms,\" hindi \"affirm.\" Halimbawa: \"Either he or I am wrong.\""
        },
        "10": {
          "question": "The news are written immediately to meet the previous deadline.",
          "choices": {
            "A": "news",
            "B": "are",
            "C": "written",
            "D": "meet",
            "E": "No error"
          },
          "correct": "B",
          "reason": "Ang \"news\" ay singular kahit may \"s,\" kaya \"is written,\" hindi \"are written.\" Halimbawa: \"The news is good.\" Katulad na salita: physics, mathematics."
        },
        "11": {
          "question": "Attempts is made to locate and restore the last original Filipino flag.",
          "choices": {
            "A": "Attempts",
            "B": "is",
            "C": "made",
            "D": "restore",
            "E": "No error"
          },
          "correct": "B",
          "reason": "Ang subject ay \"Attempts\" (plural), kaya \"are made,\" hindi \"is made.\" Tamang: \"Attempts are made to locate and restore...\""
        },
        "12": {
          "question": "Both Chelle and Charm enjoys reading.",
          "choices": {
            "A": "Both",
            "B": "and",
            "C": "enjoys",
            "D": "reading",
            "E": "No error"
          },
          "correct": "C",
          "reason": "Ang \"Chelle and Charm\" ay dalawang tao (plural), kaya \"enjoy,\" hindi \"enjoys.\" Halimbawa: \"Ana and Ben like pizza.\""
        },
        "13": {
          "question": "Reading books widens one's horizons.",
          "choices": {
            "A": "Reading",
            "B": "books",
            "C": "widens",
            "D": "one's",
            "E": "No error"
          },
          "correct": "E",
          "reason": "Walang mali (E). Ang \"Reading books\" ay gerund phrase na singular, kaya \"widens\" ay tama, at tama rin ang \"one's horizons.\""
        },
        "14": {
          "question": "If everybody know how to read, then books will never cease to be useful.",
          "choices": {
            "A": "everybody",
            "B": "know",
            "C": "then",
            "D": "cease",
            "E": "No error"
          },
          "correct": "B",
          "reason": "Ang \"everybody\" ay singular, kaya \"knows,\" hindi \"know.\" Tamang: \"If everybody knows how to read...\" Katulad: everyone, somebody, nobody."
        },
        "15": {
          "question": "No one dares to question how invaluable books are.",
          "choices": {
            "A": "No one",
            "B": "dares",
            "C": "question",
            "D": "are",
            "E": "No error"
          },
          "correct": "E",
          "reason": "Walang mali (E). Singular ang \"No one,\" kaya tama ang \"dares,\" at tama ang \"how invaluable books are.\""
        },
        "16": {
          "question": "Great literary works enriches the vocabulary of their readers.",
          "choices": {
            "A": "Great",
            "B": "works",
            "C": "enriches",
            "D": "their",
            "E": "No error"
          },
          "correct": "C",
          "reason": "Ang subject ay \"Great literary works\" (plural), kaya \"enrich,\" hindi \"enriches.\" Tamang: \"Great literary works enrich the vocabulary of their readers.\""
        },
        "17": {
          "question": "Have either of the books been returned?",
          "choices": {
            "A": "Have",
            "B": "books",
            "C": "been",
            "D": "returned",
            "E": "No error"
          },
          "correct": "A",
          "reason": "Ang \"either of the books\" ay singular, kaya \"Has,\" hindi \"Have.\" Tamang: \"Has either of the books been returned?\" Halimbawa: \"Either of them is fine.\""
        },
        "18": {
          "question": "One hundred fifty pesos are the average selling price of one textbook.",
          "choices": {
            "A": "One hundred fifty pesos",
            "B": "are",
            "C": "price",
            "D": "textbook",
            "E": "No error"
          },
          "correct": "B",
          "reason": "Ang halaga ng pera bilang iisang halaga ay singular, kaya \"is,\" hindi \"are.\" Tamang: \"One hundred fifty pesos is the average selling price...\" Halimbawa: \"Ten dollars is enough.\""
        },
        "19": {
          "question": "One of the machines in the printing press weren't functioning properly.",
          "choices": {
            "A": "machines",
            "B": "press",
            "C": "weren't",
            "D": "functioning",
            "E": "No error"
          },
          "correct": "C",
          "reason": "Ang tunay na subject ay \"One\" (singular), hindi \"machines.\" Kaya \"wasn't,\" hindi \"weren't.\" Tamang: \"One of the machines ... wasn't functioning properly.\""
        },
        "20": {
          "question": "Either the teachers or the librarian, take care of the books.",
          "choices": {
            "A": "Either",
            "B": "teachers",
            "C": "librarian",
            "D": "take care",
            "E": "No error"
          },
          "correct": "D",
          "reason": "Sa \"either ... or,\" ang verb ay tumutugma sa pinakamalapit na subject (librarian, singular), kaya \"takes care,\" hindi \"take care.\" Tamang: \"Either the teachers or the librarian takes care of the books.\""
        },
        "21": {
          "question": "A number of books is regularly donated to public schools.",
          "choices": {
            "A": "number",
            "B": "books",
            "C": "is",
            "D": "donated",
            "E": "No error"
          },
          "correct": "C",
          "reason": "Sa \"A number of,\" plural ang kahulugan, kaya \"are regularly donated,\" hindi \"is.\" Paalala: \"The number of\" ay singular, pero \"A number of\" ay plural."
        },
        "22": {
          "question": "The number of readers continually rise each year.",
          "choices": {
            "A": "number",
            "B": "readers",
            "C": "continually",
            "D": "rise",
            "E": "No error"
          },
          "correct": "D",
          "reason": "Ang subject ay \"The number\" (singular), kaya \"rises,\" hindi \"rise.\" Tamang: \"The number of readers continually rises each year.\""
        },
        "23": {
          "question": "For I, Reader's Digest is informative as well as entertaining.",
          "choices": {
            "A": "I",
            "B": "is",
            "C": "informative",
            "D": "entertaining",
            "E": "No error"
          },
          "correct": "A",
          "reason": "Pagkatapos ng pang-ukol (preposition) na \"For,\" dapat object pronoun, kaya \"For me,\" hindi \"For I.\" Halimbawa: \"Between you and me,\" hindi \"between you and I.\""
        },
        "24": {
          "question": "The Manila Bulletin has been published the Panorama magazine for over a hundred years.",
          "choices": {
            "A": "has",
            "B": "published",
            "C": "for",
            "D": "years",
            "E": "No error"
          },
          "correct": "B",
          "reason": "Dapat \"has been publishing\" (present perfect continuous) — ang Manila Bulletin ang nagpa-publish ng Panorama. Ang \"has been published\" ay passive at hindi tugma sa object na \"the Panorama magazine.\""
        },
        "25": {
          "question": "All children has inherent rights that must be protected.",
          "choices": {
            "A": "All",
            "B": "has",
            "C": "must",
            "D": "protected",
            "E": "No error"
          },
          "correct": "B",
          "reason": "Ang \"children\" ay plural, kaya \"have,\" hindi \"has.\" Tamang: \"All children have inherent rights that must be protected.\""
        },
        "26": {
          "question": "The editor-in-chief, together with the writers, confers about the contents of their newspapers.",
          "choices": {
            "A": "editor-in-chief",
            "B": "writers",
            "C": "confers",
            "D": "newspapers",
            "E": "No error"
          },
          "correct": "E",
          "reason": "Walang mali (E). Singular ang \"The editor-in-chief\" at ang \"together with the writers\" ay hindi nagpapa-plural sa subject, kaya tama ang \"confers.\""
        },
        "27": {
          "question": "Gorio and Tekla, in addition to Captain Barbel, was a popular comic books during the '70s.",
          "choices": {
            "A": "in addition",
            "B": "was a",
            "C": "comic books",
            "D": "during",
            "E": "No error"
          },
          "correct": "C",
          "reason": "Ang \"comic books\" ay plural, pero \"a popular comic\" ay singular. Tamang: \"was a popular comic book.\" Ang \"Gorio and Tekla\" ay turing na isang komiks dito, kaya tama ang \"was.\""
        },
        "28": {
          "question": "Pol Medina has drew the very famous Pugad Baboy characters.",
          "choices": {
            "A": "Pol Medina",
            "B": "drew",
            "C": "very famous",
            "D": "characters",
            "E": "No error"
          },
          "correct": "B",
          "reason": "Pagkatapos ng \"has,\" dapat past participle na \"drawn,\" hindi \"drew.\" Tamang: \"Pol Medina has drawn the very famous Pugad Baboy characters.\" Halimbawa: \"has eaten,\" hindi \"has ate.\""
        },
        "29": {
          "question": "Pugad Baboy first appear in the Philippine Daily Inquirer during the late '80s.",
          "choices": {
            "A": "Pugad Baboy",
            "B": "first appear",
            "C": "in",
            "D": "during",
            "E": "No error"
          },
          "correct": "B",
          "reason": "Ang \"first appear\" ay present tense, pero may \"during the late '80s,\" kaya past: \"first appeared.\" Halimbawa: \"The film first aired in 1990.\""
        },
        "30": {
          "question": "Neither Pol Medina nor his friends thinks he will become successful.",
          "choices": {
            "A": "nor",
            "B": "friends",
            "C": "thinks",
            "D": "successful",
            "E": "No error"
          },
          "correct": "C",
          "reason": "Sa \"neither ... nor,\" ang verb ay tumutugma sa pinakamalapit na subject (\"his friends,\" plural), kaya \"think,\" hindi \"thinks.\" Tamang: \"Neither Pol Medina nor his friends think he will become successful.\""
        },
        "31": {
          "question": "Some believes that Mr. Medina's works satirize the socio-economic condition of the people in our country.",
          "choices": {
            "A": "believes",
            "B": "works",
            "C": "satirize",
            "D": "in",
            "E": "No error"
          },
          "correct": "A",
          "reason": "Ang \"Some\" ay plural, kaya \"believe,\" hindi \"believes.\" Tamang: \"Some believe that Mr. Medina's works satirize...\""
        },
        "32": {
          "question": "The youth delegates have been sang the National Anthem.",
          "choices": {
            "A": "delegates",
            "B": "have been",
            "C": "sang",
            "D": "National Anthem",
            "E": "No error"
          },
          "correct": "C",
          "reason": "Pagkatapos ng \"have been,\" dapat past participle na \"sung\" (o \"singing\" para sa continuous), hindi \"sang.\" Tamang: \"have been singing\" o \"have sung\" the National Anthem. Halimbawa: \"has sung,\" hindi \"has sang.\""
        },
        "33": {
          "question": "That house and lot in the corner are government-owned.",
          "choices": {
            "A": "That",
            "B": "in",
            "C": "are",
            "D": "government-owned",
            "E": "No error"
          },
          "correct": "C",
          "reason": "Ang subject ay \"That house and lot,\" na iisang ari-arian, kaya \"is,\" hindi \"are.\" Tamang: \"That house and lot in the corner is government-owned.\""
        },
        "34": {
          "question": "The number of socialized housing units sponsored by the government increases each year.",
          "choices": {
            "A": "number",
            "B": "socialized",
            "C": "sponsored",
            "D": "increases",
            "E": "No error"
          },
          "correct": "E",
          "reason": "Walang mali (E). Singular ang \"The number,\" kaya tama ang \"increases.\""
        },
        "35": {
          "question": "A quarter of the government tax collections goes to infrastructure projects.",
          "choices": {
            "A": "A",
            "B": "quarter",
            "C": "collections",
            "D": "goes",
            "E": "No error"
          },
          "correct": "D",
          "reason": "Sa \"A quarter of the ... collections,\" ang verb ay tumutugma sa pangngalan sa \"of\" phrase (collections, plural), kaya \"go,\" hindi \"goes.\" Halimbawa: \"Half of the apples are rotten.\""
        },
        "36": {
          "question": "The beneficiaries of the study grant given by the government will be them.",
          "choices": {
            "A": "beneficiaries",
            "B": "given",
            "C": "will be",
            "D": "them",
            "E": "No error"
          },
          "correct": "D",
          "reason": "Pagkatapos ng linking verb na \"will be,\" dapat subject pronoun na \"they,\" hindi \"them.\" Tamang: \"The beneficiaries ... will be they.\" Halimbawa: \"It is I,\" hindi \"It is me\" (sa pormal na pagsulat)."
        },
        "37": {
          "question": "Studies suggests that exposure to too much violence on television makes one equally violent.",
          "choices": {
            "A": "suggests",
            "B": "exposure",
            "C": "makes",
            "D": "violent",
            "E": "No error"
          },
          "correct": "A",
          "reason": "Ang \"Studies\" ay plural, kaya \"suggest,\" hindi \"suggests.\" Tamang: \"Studies suggest that exposure to too much violence...\""
        },
        "38": {
          "question": "The possible effects of television viewing needs to be explored further.",
          "choices": {
            "A": "effects",
            "B": "viewing",
            "C": "needs",
            "D": "explored",
            "E": "No error"
          },
          "correct": "C",
          "reason": "Ang subject ay \"effects\" (plural), kaya \"need,\" hindi \"needs.\" Tamang: \"The possible effects of television viewing need to be explored further.\""
        },
        "39": {
          "question": "Every weekday, Chel and Charm goes to school together.",
          "choices": {
            "A": "Every",
            "B": "weekday",
            "C": "goes",
            "D": "together",
            "E": "No error"
          },
          "correct": "C",
          "reason": "Ang \"Chel and Charm\" ay dalawang tao (plural), kaya \"go,\" hindi \"goes.\" Tamang: \"Every weekday, Chel and Charm go to school together.\""
        },
        "40": {
          "question": "The Scent of Apples, a story about a Filipino who immigrated to the United States are written by Bienvenido Santos.",
          "choices": {
            "A": "about",
            "B": "immigrated",
            "C": "are",
            "D": "written",
            "E": "No error"
          },
          "correct": "C",
          "reason": "Ang subject ay \"The Scent of Apples,\" isang kuwento (singular), kaya \"is written,\" hindi \"are written.\" Halimbawa: \"Gone with the Wind is a classic.\""
        },
        "41": {
          "question": "Nick Joaquin, one of the exceptional Filipino writers, is also known for Quijano de Manila.",
          "choices": {
            "A": "writers",
            "B": "is",
            "C": "known",
            "D": "for",
            "E": "No error"
          },
          "correct": "D",
          "reason": "Ang \"Quijano de Manila\" ay sagisag-panulat (pen name) ni Joaquin, kaya \"known as,\" hindi \"known for.\" Halimbawa: \"Nick Joaquin is also known as Quijano de Manila.\""
        },
        "42": {
          "question": "Some people believes that one could see his future mate by looking into a mirror on May day eve.",
          "choices": {
            "A": "Some people",
            "B": "believes",
            "C": "see",
            "D": "looking into",
            "E": "No error"
          },
          "correct": "B",
          "reason": "Ang \"Some people\" ay plural, kaya \"believe,\" hindi \"believes.\" Tamang: \"Some people believe that one could see his future mate...\""
        },
        "43": {
          "question": "Jose Garcia Villa was a recipient of numerous awards, between them, the \"National Artist Award for Literature\".",
          "choices": {
            "A": "was",
            "B": "recipient",
            "C": "awards",
            "D": "between",
            "E": "No error"
          },
          "correct": "D",
          "reason": "Sa tatlo o higit pang bagay, gamitin ang \"among,\" hindi \"between.\" Tamang: \"...numerous awards, among them, the National Artist Award.\" Halimbawa: \"Between two, among many.\""
        },
        "44": {
          "question": "The Far Eastern University (FEU) also gave he a Doctor of Literature honoris causa in 1959, aside from asking him to be a visiting professor.",
          "choices": {
            "A": "gave",
            "B": "he",
            "C": "in",
            "D": "asking",
            "E": "No error"
          },
          "correct": "B",
          "reason": "Si \"he\" ay subject pronoun; dito ito ay object ng \"gave,\" kaya \"him.\" Tamang: \"also gave him a Doctor of Literature...\""
        },
        "45": {
          "question": "Between the numerous prose writers, I think Nick Joaquin is the best.",
          "choices": {
            "A": "Between",
            "B": "writers",
            "C": "think",
            "D": "best",
            "E": "No error"
          },
          "correct": "A",
          "reason": "Sa tatlo o higit pang bagay, \"Among,\" hindi \"Between.\" Tamang: \"Among the numerous prose writers, I think Nick Joaquin is the best.\""
        },
        "46": {
          "question": "Those are work of famous authors.",
          "choices": {
            "A": "Those",
            "B": "are",
            "C": "work",
            "D": "famous",
            "E": "No error"
          },
          "correct": "C",
          "reason": "Dapat plural ang \"work\" dahil \"Those are works,\" kaya \"works.\" Tamang: \"Those are works of famous authors.\""
        },
        "47": {
          "question": "The professor asked her a question about they.",
          "choices": {
            "A": "professor",
            "B": "asked",
            "C": "her",
            "D": "they",
            "E": "No error"
          },
          "correct": "D",
          "reason": "Pagkatapos ng pang-ukol na \"about,\" dapat object pronoun, kaya \"them,\" hindi \"they.\" Tamang: \"...a question about them.\""
        },
        "48": {
          "question": "Literature seem elusive to people who profess indifference to it.",
          "choices": {
            "A": "seem",
            "B": "to",
            "C": "who",
            "D": "it",
            "E": "No error"
          },
          "correct": "A",
          "reason": "Ang \"Literature\" ay singular, kaya \"seems,\" hindi \"seem.\" Tamang: \"Literature seems elusive to people who profess indifference to it.\""
        },
        "49": {
          "question": "It appeals both to the readers intellect and passion.",
          "choices": {
            "A": "It",
            "B": "appeals",
            "C": "readers",
            "D": "and",
            "E": "No error"
          },
          "correct": "C",
          "reason": "Kailangan ng possessive: \"reader's.\" Tamang: \"It appeals both to the reader's intellect and passion.\" Halimbawa: \"the student's book\" (aklat ng estudyante)."
        },
        "50": {
          "question": "Robert Frost, an American poet, defines literature as \"performance in words.\"",
          "choices": {
            "A": "American",
            "B": "defines",
            "C": "as",
            "D": "in",
            "E": "No error"
          },
          "correct": "E",
          "reason": "Walang mali (E). Tama ang \"defines literature as 'performance in words.'\""
        },
        "51": {
          "question": "Either of the authors have received citations for their remarkable works.",
          "choices": {
            "A": "Either",
            "B": "authors",
            "C": "have received",
            "D": "for",
            "E": "No error"
          },
          "correct": "C",
          "reason": "Ang \"Either of the authors\" ay singular, kaya \"has received,\" hindi \"have received.\" Tamang: \"Either of the authors has received citations for ...\" (ang \"their\" ay tinatanggap sa modernong gamit)."
        },
        "52": {
          "question": "Just like Edgar Allan Poe, it is believed that Nick Joaquin starts getting ideas after he has drank alcoholic beverages.",
          "choices": {
            "A": "it",
            "B": "is believed",
            "C": "starts",
            "D": "drank",
            "E": "No error"
          },
          "correct": "D",
          "reason": "Pagkatapos ng \"has,\" dapat past participle na \"drunk,\" hindi \"drank.\" Tamang: \"after he has drunk alcoholic beverages.\" Halimbawa: \"has eaten,\" \"has driven.\""
        },
        "53": {
          "question": "Computers are widely use nowadays even in preschools.",
          "choices": {
            "A": "Computers",
            "B": "are",
            "C": "use",
            "D": "preschools",
            "E": "No error"
          },
          "correct": "C",
          "reason": "Pagkatapos ng \"are,\" dapat \"used\" (passive), hindi \"use.\" Tamang: \"Computers are widely used nowadays even in preschools.\""
        },
        "54": {
          "question": "The number of Computer Science students steadily increases.",
          "choices": {
            "A": "number",
            "B": "students",
            "C": "steadily",
            "D": "increases",
            "E": "No error"
          },
          "correct": "E",
          "reason": "Walang mali (E). Singular ang \"The number,\" kaya tama ang \"increases.\""
        },
        "55": {
          "question": "AMA, in addition to STI, train students to be proficient in computer use.",
          "choices": {
            "A": "train",
            "B": "students",
            "C": "proficient",
            "D": "use",
            "E": "No error"
          },
          "correct": "A",
          "reason": "Ang subject ay \"AMA\" (singular) dahil ang \"in addition to STI\" ay hindi nagdadagdag sa subject, kaya \"trains,\" hindi \"train.\" Tamang: \"AMA, in addition to STI, trains students...\""
        },
        "56": {
          "question": "Knowledge should always be put to good use.",
          "choices": {
            "A": "Knowledge",
            "B": "should",
            "C": "be put",
            "D": "use",
            "E": "No error"
          },
          "correct": "E",
          "reason": "Walang mali (E). Tama ang \"Knowledge should always be put to good use.\""
        },
        "57": {
          "question": "One of the viruses has infect my brother's brand new laptop computer.",
          "choices": {
            "A": "viruses",
            "B": "has infect",
            "C": "brother's",
            "D": "laptop",
            "E": "No error"
          },
          "correct": "B",
          "reason": "Pagkatapos ng \"has,\" dapat past participle na \"infected,\" hindi \"infect.\" Tamang: \"One of the viruses has infected my brother's brand new laptop.\""
        },
        "58": {
          "question": "Internet access allow us to communicate with other people anywhere in the world.",
          "choices": {
            "A": "access",
            "B": "allow",
            "C": "to communicate",
            "D": "anywhere",
            "E": "No error"
          },
          "correct": "B",
          "reason": "Ang \"access\" ay singular, kaya \"allows,\" hindi \"allow.\" Tamang: \"Internet access allows us to communicate with other people anywhere in the world.\""
        },
        "59": {
          "question": "All of the pens are not used yesterday.",
          "choices": {
            "A": "All",
            "B": "pens",
            "C": "are",
            "D": "used",
            "E": "No error"
          },
          "correct": "C",
          "reason": "Dahil may \"yesterday,\" dapat past tense: \"were,\" hindi \"are.\" Tamang: \"All of the pens were not used yesterday.\""
        },
        "60": {
          "question": "Each computer come with either a compact disk player or a DVD player.",
          "choices": {
            "A": "Each",
            "B": "come",
            "C": "either",
            "D": "player",
            "E": "No error"
          },
          "correct": "B",
          "reason": "Ang \"Each computer\" ay singular, kaya \"comes,\" hindi \"come.\" Tamang: \"Each computer comes with either a compact disk player or a DVD player.\""
        }
      }
    },
    {
      "subject": "English",
      "subject_icon": "📚",
      "topic": "Paragraph Development",
      "topic_order": 7,
      "questions": {
        "1": {
          "question": "PARAGRAPH I:\nA. The first procedure is that the bill passes through three readings on separate days.\nB. Otherwise, the bill will go back to the House from where it originated, and it will be deliberated upon again.\nC. If the President approves the bill, then it shall be deemed a law.\nD. A bill, before becoming a law, undergoes several procedures.\nE. On the third reading, the votes of the lawmakers shall be recorded and if the bill is approved, it goes to the President for approval or veto.\n\nWhat should be the first sentence?",
          "choices": {
            "A": "A",
            "B": "B",
            "C": "C",
            "D": "D",
            "E": "E"
          },
          "correct": "D",
          "reason": "Ang unang pangungusap ay ang pangkalahatang pahayag (topic sentence). Ang D ('A bill, before becoming a law, undergoes several procedures') ang nag-uumpisa ng paksa. Tamang order: D → A → E → C → B. Halimbawa: sa talata, unang sinasabi ang 'may ilang hakbang' bago ilista ang mga hakbang."
        },
        "2": {
          "question": "PARAGRAPH I (order: D-A-E-C-B):\nA. The first procedure is that the bill passes through three readings on separate days.\nB. Otherwise, the bill will go back to the House from where it originated, and it will be deliberated upon again.\nC. If the President approves the bill, then it shall be deemed a law.\nD. A bill, before becoming a law, undergoes several procedures.\nE. On the third reading, the votes of the lawmakers shall be recorded and if the bill is approved, it goes to the President for approval or veto.\n\nWhat should be the fourth sentence?",
          "choices": {
            "A": "A",
            "B": "B",
            "C": "C",
            "D": "D",
            "E": "E"
          },
          "correct": "C",
          "reason": "Sa order na D-A-E-C-B, ang ika-apat na pangungusap ay C ('If the President approves the bill, then it shall be deemed a law'). Sumusunod ito pagkatapos ng E (napunta sa Presidente) at bago ang B ('Otherwise...') na ang kabaligtaran kapag hindi inaprubahan. Ang 'Otherwise' ay laging sumusunod sa 'If' na pangungusap."
        },
        "3": {
          "question": "PARAGRAPH I (order: D-A-E-C-B):\nA. The first procedure is that the bill passes through three readings on separate days.\nB. Otherwise, the bill will go back to the House from where it originated, and it will be deliberated upon again.\nC. If the President approves the bill, then it shall be deemed a law.\nD. A bill, before becoming a law, undergoes several procedures.\nE. On the third reading, the votes of the lawmakers shall be recorded and if the bill is approved, it goes to the President for approval or veto.\n\nIf the following sentence is added as sentence F: 'It should be noted, however, that the President must communicate his veto within thirty days from receipt of the bill, otherwise, the bill is considered to have been approved by him.' What would the new order of the sentences be?",
          "choices": {
            "A": "B-C-D-E-A-F",
            "B": "D-B-A-F-C-E",
            "C": "D-A-E-C-B-F",
            "D": "A-B-C-D-E-F",
            "E": "C-B-D-A-E-F"
          },
          "correct": "C",
          "reason": "Ang F ay nagdadagdag ng detalye tungkol sa veto at 30 araw, kaya ito ay dapat sumunod sa pagtalakay ng veto (B), sa dulo. Bagong order: D-A-E-C-B-F. Tip: ang mga pangungusap na nagsisimula sa 'It should be noted, however' ay karaniwang pandagdag na tala sa huli."
        },
        "4": {
          "question": "PARAGRAPH II (correct order: A-E-D-B-C):\nA. Learning to listen is one way of keeping friends.\nB. Although listening can really be very tiring on the listener, it may, on the other hand, be comforting to the speaker.\nC. So learn how to listen, and gain more friends.\nD. We also show that we care about what goes on in their lives.\nE. By listening, we show our friends that they are important to us.\n\nWhat should be the third sentence?",
          "choices": {
            "A": "A",
            "B": "B",
            "C": "C",
            "D": "D",
            "E": "E"
          },
          "correct": "D",
          "reason": "Sa order na A-E-D-B-C, ang ikatlong pangungusap ay D ('We also show that we care...'). Ang D ay sumusunod sa E dahil ang 'also' ay nagdadagdag sa sinabi ng E. Ang C ('So learn how to listen...') ang konklusyon, kaya nasa dulo."
        },
        "5": {
          "question": "PARAGRAPH II (correct order: A-E-D-B-C):\nA. Learning to listen is one way of keeping friends.\nB. Although listening can really be very tiring on the listener, it may, on the other hand, be comforting to the speaker.\nC. So learn how to listen, and gain more friends.\nD. We also show that we care about what goes on in their lives.\nE. By listening, we show our friends that they are important to us.\n\nWhat should be the fourth sentence?",
          "choices": {
            "A": "A",
            "B": "B",
            "C": "C",
            "D": "D",
            "E": "E"
          },
          "correct": "B",
          "reason": "Sa order na A-E-D-B-C, ang ika-apat na pangungusap ay B ('Although listening can really be tiring...'). Ang 'Although... on the other hand' ay nagbibigay ng kontra-punto bago ang konklusyon na C ('So learn how to listen'). Ang 'So' ay hudyat ng wakas."
        },
        "6": {
          "question": "PARAGRAPH III (correct order: E-B-C-D-A):\nA. Hence, it can be said that the President really has a lot of duties and responsibilities.\nB. He has control over department secretaries and can overrule their decisions.\nC. Furthermore, the President exercises veto power over bills passed by the Congress.\nD. Lastly, he is the Chief Executive, executing the laws and rules of the country.\nE. The president in a presidential system is the Head of the State and the Head of Government.\n\nWhat should be the second sentence?",
          "choices": {
            "A": "A",
            "B": "B",
            "C": "C",
            "D": "D",
            "E": "E"
          },
          "correct": "B",
          "reason": "Order: E → B → C → D → A. Una ang E (sino ang Presidente), tapos B (kontrol sa mga secretary), pangatlo ang C ('Furthermore'), D ('Lastly'), at A ('Hence' — konklusyon). Kaya ang pangalawa ay B."
        },
        "7": {
          "question": "PARAGRAPH III (correct order: E-B-C-D-A):\nA. Hence, it can be said that the President really has a lot of duties and responsibilities.\nB. He has control over department secretaries and can overrule their decisions.\nC. Furthermore, the President exercises veto power over bills passed by the Congress.\nD. Lastly, he is the Chief Executive, executing the laws and rules of the country.\nE. The president in a presidential system is the Head of the State and the Head of Government.\n\nWhat should be the last sentence?",
          "choices": {
            "A": "A",
            "B": "B",
            "C": "C",
            "D": "D",
            "E": "E"
          },
          "correct": "A",
          "reason": "Sa order na E-B-C-D-A, ang huling pangungusap ay A. Ang A ay nagsisimula sa 'Hence,' na hudyat ng konklusyon. Halimbawa ng ibang hudyat ng wakas: 'So,' 'Therefore,' 'In conclusion.'"
        },
        "8": {
          "question": "PARAGRAPH IV (correct order: B-C-D-A-E):\nA. Not only that, paying taxes also means the government will no longer need to acquire loans to fill the budget deficit.\nB. Every citizen should lend a hand in pursuing economic progress.\nC. One way to do it is to pay one's taxes correctly.\nD. Paying correct taxes results in increased revenues that the government uses for infrastructure and other projects.\nE. So be a good citizen and pay your taxes correctly.\n\nWhat should be the second sentence?",
          "choices": {
            "A": "A",
            "B": "B",
            "C": "C",
            "D": "D",
            "E": "E"
          },
          "correct": "C",
          "reason": "Ang order ng talata IV: B → C → D → A → E. Ang B ang paksa ('Every citizen should lend a hand...'), at ang C ('One way to do it...') ay sumusunod dahil ang 'it' ay tumutukoy sa 'pursuing economic progress.' Kaya ang pangalawa ay C."
        },
        "9": {
          "question": "PARAGRAPH IV (correct order: B-C-D-A-E):\nA. Not only that, paying taxes also means the government will no longer need to acquire loans to fill the budget deficit.\nB. Every citizen should lend a hand in pursuing economic progress.\nC. One way to do it is to pay one's taxes correctly.\nD. Paying correct taxes results in increased revenues that the government uses for infrastructure and other projects.\nE. So be a good citizen and pay your taxes correctly.\n\nWhat should be the fourth sentence?",
          "choices": {
            "A": "A",
            "B": "B",
            "C": "C",
            "D": "D",
            "E": "E"
          },
          "correct": "A",
          "reason": "Sa order na B-C-D-A-E, ang ika-apat ay A ('Not only that, paying taxes also means...'). Ang 'Not only that' ay nagdadagdag sa nauna (D), kaya sumusunod ito pagkatapos ng D at bago ang E ('So be a good citizen')."
        },
        "10": {
          "question": "PARAGRAPH IV (correct order: B-C-D-A-E):\nA. Not only that, paying taxes also means the government will no longer need to acquire loans to fill the budget deficit.\nB. Every citizen should lend a hand in pursuing economic progress.\nC. One way to do it is to pay one's taxes correctly.\nD. Paying correct taxes results in increased revenues that the government uses for infrastructure and other projects.\nE. So be a good citizen and pay your taxes correctly.\n\nWhat is the appropriate title for the above paragraph?",
          "choices": {
            "A": "Economic Progress",
            "B": "A Citizen's Duty",
            "C": "Taxing the Economy",
            "D": "Taxes and Economic Progress",
            "E": "Lend a Hand for Progress"
          },
          "correct": "D",
          "reason": "Ang buong talata ay tungkol sa pagbabayad ng buwis (taxes) at ang kontribusyon nito sa pag-unlad ng ekonomiya. Kaya 'Taxes and Economic Progress' ang pinakaangkop. Ang 'Taxing the Economy' ay iba ang kahulugan, at ang 'A Citizen's Duty' ay masyadong malawak."
        }
      }
    },
    {
      "subject": "English",
      "subject_icon": "📚",
      "topic": "Correct Usage",
      "topic_order": 8,
      "questions": {
        "1": {
          "question": "Lily ___ remarkable poems even at her young age.",
          "choices": {
            "A": "rites",
            "B": "rights",
            "C": "writes",
            "D": "write"
          },
          "correct": "C",
          "reason": "Ang \"writes\" ay pandiwa (nagsusulat) at singular, tugma sa \"Lily.\" Ang rites ay seremonya, ang rights ay karapatan, at ang \"write\" ay hindi tugma sa singular na subject. Halimbawa: \"She writes a diary every night.\""
        },
        "2": {
          "question": "Being too ___ will undoubtedly make other men hate you.",
          "choices": {
            "A": "vane",
            "B": "vain",
            "C": "vein",
            "D": "vanity"
          },
          "correct": "B",
          "reason": "Ang \"vain\" ay mayabang o puno ng sariling papuri. Ang vane ay panukat ng direksyon ng hangin, at ang vein ay ugat. Ang vanity ay pangngalan, hindi pang-uri, kaya hindi tama. Halimbawa: \"Vain na tao ang laging nagsasalamin.\""
        },
        "3": {
          "question": "Due to bad weather, the airline company decided ___ postpone the flight.",
          "choices": {
            "A": "two",
            "B": "to",
            "C": "too",
            "D": "then"
          },
          "correct": "B",
          "reason": "Ang \"to\" ay ginagamit bago ang pandiwa (decided to postpone). Ang two ay bilang 2, ang too ay \"masyado\" o \"din.\" Halimbawa: \"I want to go\" (hindi \"too go\")."
        },
        "4": {
          "question": "Drunk driving was the reason for ___ accident.",
          "choices": {
            "A": "their",
            "B": "they're",
            "C": "there",
            "D": "there are"
          },
          "correct": "A",
          "reason": "Ang \"their\" ay possessive (kanila). Ang they're = they are, at ang there ay lugar. Tamang: \"...the reason for their accident.\" Halimbawa: \"Their house is big.\""
        },
        "5": {
          "question": "May I ___ your Titanic compact disk?",
          "choices": {
            "A": "borrow",
            "B": "lend",
            "C": "loan",
            "D": "credit"
          },
          "correct": "A",
          "reason": "Ang \"borrow\" ay manghiram (ikaw ang kukuha). Ang lend at loan ay magpahiram (ikaw ang magbibigay). Halimbawa: \"May I borrow your pen?\" vs. \"Can you lend me your pen?\""
        },
        "6": {
          "question": "___ the three girls, the eldest is the most diligent.",
          "choices": {
            "A": "Between",
            "B": "Among",
            "C": "In",
            "D": "By"
          },
          "correct": "B",
          "reason": "Sa tatlo o higit pa, gamitin ang \"among\"; sa dalawa lang, \"between.\" Tamang: \"Among the three girls...\" Halimbawa: \"Between you and me\" (dalawa)."
        },
        "7": {
          "question": "Exposure to air pollution will ___ your asthma.",
          "choices": {
            "A": "cure",
            "B": "deteriorate",
            "C": "aggravate",
            "D": "annoy"
          },
          "correct": "C",
          "reason": "Ang \"aggravate\" ay palalain. Ang cure ay gamutin (kabaligtaran), ang deteriorate ay \"lumala\" pero intransitive (walang object), at ang annoy ay mang-inis. Halimbawa: \"Alikabok aggravates ang allergy.\""
        },
        "8": {
          "question": "His ___ to Mount Apo was carefully documented.",
          "choices": {
            "A": "assent",
            "B": "ascent",
            "C": "descent",
            "D": "decrease"
          },
          "correct": "B",
          "reason": "Ang \"ascent\" ay pag-akyat. Ang assent ay pagsang-ayon, at ang descent ay pagbaba. Halimbawa: \"ascent to the summit\" (pag-akyat sa tuktok). Ang decrease ay pagbaba ng bilang."
        },
        "9": {
          "question": "The children ___ the ill effects of war.",
          "choices": {
            "A": "have borne",
            "B": "have born",
            "C": "has borne",
            "D": "had born"
          },
          "correct": "A",
          "reason": "Ang \"borne\" ay past participle ng \"bear\" (magdusa o tiisin). Ang \"born\" ay para sa pagsilang. Tamang: \"The children have borne the ill effects of war.\" Plural ang \"children,\" kaya \"have,\" hindi \"has.\""
        },
        "10": {
          "question": "The teachers distributed different ___ outlines for the students to follow.",
          "choices": {
            "A": "coarse",
            "B": "corps",
            "C": "course",
            "D": "corpse"
          },
          "correct": "C",
          "reason": "Ang \"course outlines\" ay balangkas ng kurso o aralin. Ang coarse ay magaspang, ang corps ay pangkat (hal. Peace Corps), at ang corpse ay bangkay. Halimbawa: \"course outline para sa semester.\""
        },
        "11": {
          "question": "Carl juggles oranges, ___ you?",
          "choices": {
            "A": "why",
            "B": "may",
            "C": "should",
            "D": "can"
          },
          "correct": "D",
          "reason": "Ang \"can you?\" ay hamon na parang \"Kaya mo rin bang gawin?\" Ang why, may, at should ay hindi akma sa tanong na ito. Halimbawa: \"I can swim, can you?\""
        },
        "12": {
          "question": "The refugees decided to ___ their homes because of the war.",
          "choices": {
            "A": "desert",
            "B": "dessert",
            "C": "deserve",
            "D": "reserve"
          },
          "correct": "A",
          "reason": "Ang \"desert\" ay iwanan. Ang dessert ay panghimagas, ang deserve ay karapat-dapat, at ang reserve ay itabi. Halimbawa: \"Iniwan (deserted) ng mga sundalo ang kampo.\""
        },
        "13": {
          "question": "My sister ___ to Zamboanga seven years ago.",
          "choices": {
            "A": "migrated",
            "B": "migrating",
            "C": "immigrated",
            "D": "immigrating"
          },
          "correct": "A",
          "reason": "Ang \"migrated\" ay paglipat sa loob ng bansa (Zamboanga ay sa Pilipinas). Ang \"immigrated\" ay paglipat sa ibang bansa para tumira. Halimbawa: \"Migrated to Zamboanga\" vs. \"immigrated to Canada.\""
        },
        "14": {
          "question": "We used ___ sauce for the spaghetti last Sunday.",
          "choices": {
            "A": "less",
            "B": "few",
            "C": "a number of",
            "D": "pieces of"
          },
          "correct": "A",
          "reason": "Ang \"sauce\" ay uncountable (hindi mabibilang), kaya \"less,\" hindi \"few.\" Ang few ay para sa mabibilang (few apples). Halimbawa: \"less sugar\" pero \"fewer cookies.\""
        },
        "15": {
          "question": "If we work together, we could finish this ___ in a short time.",
          "choices": {
            "A": "piece",
            "B": "peace",
            "C": "please",
            "D": "peas"
          },
          "correct": "A",
          "reason": "Ang \"piece\" ay bahagi o gawain (a piece of work). Ang peace ay kapayapaan, ang please ay pakiusap, at ang peas ay gisantes. Halimbawa: \"a piece of cake.\""
        },
        "16": {
          "question": "When the Apartheid Policy was still in effect, the Blacks were ___ by the Whites.",
          "choices": {
            "A": "praised",
            "B": "hailed",
            "C": "persecuted",
            "D": "prosecuted"
          },
          "correct": "C",
          "reason": "Ang \"persecuted\" ay inapi o inusig dahil sa lahi o paniniwala. Ang prosecuted ay idinemanda sa korte. Halimbawa: Persecuted ang mga Hudyo noong WWII."
        },
        "17": {
          "question": "When we ___ the flag, we should all stand up.",
          "choices": {
            "A": "rice",
            "B": "rise",
            "C": "risen",
            "D": "raise"
          },
          "correct": "D",
          "reason": "Ang \"raise\" ay itaas (may object: raise the flag). Ang rise ay tumaas (walang object: \"The sun rises\"). Ang rice ay bigas. Halimbawa: \"raise your hand.\""
        },
        "18": {
          "question": "The DPWH crew worked ___ the night to repair the damaged bridge.",
          "choices": {
            "A": "three",
            "B": "through",
            "C": "trough",
            "D": "true"
          },
          "correct": "B",
          "reason": "Ang \"through the night\" ay buong gabi. Ang trough ay labangan at ang true ay totoo. Halimbawa: \"They worked through the holiday.\""
        },
        "19": {
          "question": "___ the leader of your group?",
          "choices": {
            "A": "Who's",
            "B": "Whose",
            "C": "Which",
            "D": "Whom's"
          },
          "correct": "A",
          "reason": "Ang \"Who's\" = Who is. Ang whose ay \"kanino.\" Tamang: \"Who's the leader of your group?\" Halimbawa: \"Whose bag is this?\" (kanino)."
        },
        "20": {
          "question": "The village elder told many interesting ___",
          "choices": {
            "A": "tale",
            "B": "tail",
            "C": "tails",
            "D": "tales"
          },
          "correct": "D",
          "reason": "Ang \"tales\" ay mga kuwento (plural), kaya sumusunod sa \"many.\" Ang tail ay buntot. Halimbawa: \"fairy tales.\""
        },
        "21": {
          "question": "Marty ___ Evelyn ___ to dinner.",
          "choices": {
            "A": "asked out",
            "B": "asked after",
            "C": "called out",
            "D": "called up"
          },
          "correct": "A",
          "reason": "Ang \"ask out\" ay yayain mag-date o lumabas. Halimbawa: \"He asked her out to the movies.\" Ang ask after ay kumustahin."
        },
        "22": {
          "question": "The celebrant ___ candles after we sang.",
          "choices": {
            "A": "blew off",
            "B": "blew up",
            "C": "blew out",
            "D": "blew over"
          },
          "correct": "C",
          "reason": "Ang \"blow out\" ay patayin sa pamamagitan ng hangin (kandila). Ang blow up ay sumabog, ang blow off ay balewalain, at ang blow over ay lumipas (hal. bagyo). Halimbawa: blow out the birthday candles."
        },
        "23": {
          "question": "The secretary ___ due to stress.",
          "choices": {
            "A": "broke even",
            "B": "broke out",
            "C": "broke in",
            "D": "broke down"
          },
          "correct": "D",
          "reason": "Ang \"break down\" ay masira o bumigay ang katawan o damdamin. Ang break even ay walang pakinabang o lugi, ang break out ay sumiklab, at ang break in ay pumasok nang sapilitan. Halimbawa: \"Broke down siya sa iyak.\""
        },
        "24": {
          "question": "The Edsa People's Revolution ___ the Marcos regime.",
          "choices": {
            "A": "brought in",
            "B": "brought on",
            "C": "brought forth",
            "D": "brought down"
          },
          "correct": "D",
          "reason": "Ang \"bring down\" ay pabagsakin. Ang EDSA Revolution ay nagpabagsak sa rehimeng Marcos. Halimbawa: \"The scandal brought down the senator.\""
        },
        "25": {
          "question": "The unexpected ___ of vehicles along Marcos Highway caused heavy traffic.",
          "choices": {
            "A": "build-up",
            "B": "build on",
            "C": "build in",
            "D": "build over"
          },
          "correct": "A",
          "reason": "Ang \"build-up\" ay pag-ipon o pagdami. Halimbawa: \"build-up of traffic.\" Ang build on, in, at over ay iba ang kahulugan."
        },
        "26": {
          "question": "After cleaning the entire house, I felt ___.",
          "choices": {
            "A": "burned in",
            "B": "burned out",
            "C": "burned up",
            "D": "burned over"
          },
          "correct": "B",
          "reason": "Ang \"burned out\" ay pagod na pagod o ubos ang lakas. Ang burn up ay masunog nang tuluyan. Halimbawa: \"Burned out na ako sa trabaho.\""
        },
        "27": {
          "question": "The drug pushers tried to ___ the arresting cops.",
          "choices": {
            "A": "buy in",
            "B": "buy off",
            "C": "buy out",
            "D": "buy up"
          },
          "correct": "B",
          "reason": "Ang \"buy off\" ay suhulan. Ang buy in ay sumali sa puhunan, ang buy out ay bilhin ang bahagi ng iba, at ang buy up ay bilhin lahat. Halimbawa: \"They tried to buy off the witness.\""
        },
        "28": {
          "question": "The Cabinet meeting was ___ on account of the President's ill health.",
          "choices": {
            "A": "called in",
            "B": "called up",
            "C": "called out",
            "D": "called off"
          },
          "correct": "D",
          "reason": "Ang \"called off\" ay kinansela. Ang call in ay tumawag sa trabaho, ang call up ay tawagan o i-draft, at ang call out ay tawagin ang pansin. Halimbawa: \"The match was called off due to rain.\""
        },
        "29": {
          "question": "The tele-novela viewers cried helplessly when they got ___ by the tragedy that befell the main character.",
          "choices": {
            "A": "carried out",
            "B": "carried away",
            "C": "carried over",
            "D": "carried on"
          },
          "correct": "B",
          "reason": "Ang \"carried away\" ay nadala ng damdamin. Ang carry out ay isagawa, ang carry over ay ilipat, at ang carry on ay ipagpatuloy. Halimbawa: \"Carried away siya sa pagkapanalo.\""
        },
        "30": {
          "question": "We should ___ on our expenditures and spend only on our needs.",
          "choices": {
            "A": "cut short",
            "B": "cut up",
            "C": "cut back",
            "D": "cut out"
          },
          "correct": "C",
          "reason": "Ang \"cut back\" ay bawasan. Ang cut short ay biglang tapusin, ang cut up ay hatiin, at ang cut out ay alisin. Halimbawa: \"cut back on sweets.\""
        },
        "31": {
          "question": "People of all races should try to ___ with each other.",
          "choices": {
            "A": "get around",
            "B": "get along",
            "C": "get at",
            "D": "get over"
          },
          "correct": "B",
          "reason": "Ang \"get along\" ay magkasundo. Ang get around ay makalusot, ang get at ay abutin, at ang get over ay makabawi. Halimbawa: \"They get along well.\""
        },
        "32": {
          "question": "We should grow wiser as time ___.",
          "choices": {
            "A": "goes along",
            "B": "goes by",
            "C": "goes down",
            "D": "goes through"
          },
          "correct": "B",
          "reason": "Ang \"goes by\" ay lumilipas ang panahon. Halimbawa: \"As the years go by...\" Ang goes along ay sumunod, ang goes down ay bumaba, at ang goes through ay dumaan o pagdaanan."
        },
        "33": {
          "question": "The partying teens were told to ___ the noise.",
          "choices": {
            "A": "hold down",
            "B": "hold forth",
            "C": "hold on",
            "D": "hold with"
          },
          "correct": "A",
          "reason": "Ang \"hold down\" ay pigilan o hinaan. Ang hold on ay maghintay, ang hold forth ay magsalita nang matagal, at ang hold with ay sumang-ayon. Halimbawa: \"Please hold down the noise.\""
        },
        "34": {
          "question": "A gust of strong wind ___ the old wooden swing.",
          "choices": {
            "A": "knocked around",
            "B": "knocked back",
            "C": "knocked down",
            "D": "knocked out"
          },
          "correct": "C",
          "reason": "Ang \"knocked down\" ay ibinagsak. Ang knock out ay patulugin o patumbahin (KO). Halimbawa: \"Bagyo knocked down ang puno.\""
        },
        "35": {
          "question": "A number of factory workers were ___ due to retrenchment.",
          "choices": {
            "A": "laid aside",
            "B": "laid away",
            "C": "laid off",
            "D": "laid out"
          },
          "correct": "C",
          "reason": "Ang \"laid off\" ay tinanggal sa trabaho dahil sa pagbabawas ng tao. Ang lay out ay ilatag, ang lay aside ay itabi, at ang lay away ay tabi o hulugan. Halimbawa: \"Laid off ang mga empleyado dahil nalugi ang kompanya.\""
        },
        "36": {
          "question": "We should never ___ people with disabilities for they also have the right to live.",
          "choices": {
            "A": "look down on",
            "B": "look forward to",
            "C": "look out to",
            "D": "look up to"
          },
          "correct": "A",
          "reason": "Ang \"look down on\" ay hamakin. Ang look up to ay hangaan, ang look forward to ay inaabangan, at ang look out ay mag-ingat. Halimbawa: \"Huwag mong i-look down ang mahihirap.\""
        },
        "37": {
          "question": "Stop ___ your younger brother so he will stop crying.",
          "choices": {
            "A": "picking at",
            "B": "picking on",
            "C": "picking out",
            "D": "picking up"
          },
          "correct": "B",
          "reason": "Ang \"picking on\" ay pagtukso o pang-aapi. Ang pick out ay pumili, ang pick up ay damputin, at ang pick at ay kurutin ang pagkain. Halimbawa: \"Stop picking on me.\""
        },
        "38": {
          "question": "Always ___ your best effort in everything you do.",
          "choices": {
            "A": "put across",
            "B": "put down",
            "C": "put forth",
            "D": "put out"
          },
          "correct": "C",
          "reason": "Ang \"put forth\" ay ilabas o ibuhos (ang pinakamahusay na lakas). Ang put out ay patayin (apoy) at ang put across ay ipaliwanag. Halimbawa: \"put forth effort.\""
        },
        "39": {
          "question": "Did you help in ___ the table?",
          "choices": {
            "A": "setting apart",
            "B": "setting back",
            "C": "setting down",
            "D": "setting up"
          },
          "correct": "D",
          "reason": "Ang \"setting up\" ay paghahanda o pag-aayos. Halimbawa: \"setting up the table\" (pag-aayos ng mesa). Ang setting down ay ibaba, ang setting apart ay ihiwalay, at ang setting back ay ibalik o antalahin."
        },
        "40": {
          "question": "She ___ the details of the program.",
          "choices": {
            "A": "wrote in",
            "B": "wrote off",
            "C": "wrote over",
            "D": "wrote up"
          },
          "correct": "D",
          "reason": "Ang \"wrote up\" ay sumulat ng detalyadong ulat. Ang write off ay ituring na wala nang bawi, ang write in ay isulat sa ballot, at ang write over ay isulat sa ibabaw. Halimbawa: \"She wrote up the report.\""
        }
      }
    },
    {
      "subject": "English",
      "subject_icon": "📚",
      "topic": "Reading Comprehension",
      "topic_order": 9,
      "questions": {
        "1": {
          "question": "[PASSAGE - Voltaire] \"All animals wage perpetual war; every species is born to devour another. Not one, not even sheep or doves, that does not swallow a prodigious number of invisible creatures. Males make war for the females, like Menelaus and Paris. Air, earth, water, are fields of carnage. God having given reason to men, this reason might teach them not to emulate the brutes, particularly when nature has provided them neither with arms to kill their fellows nor with a desire for their blood.\" \"Can there be anything more horrible in all nature?\"\n\n[QUESTION] Which of the following is the reason given why there is war?",
          "choices": {
            "A": "Desire for what others have.",
            "B": "To exact revenge for a wrongdoing.",
            "C": "To fight over women.",
            "D": "To prove that one's race is better than the other."
          },
          "correct": "C",
          "reason": "Sa passage ni Voltaire, binanggit na ang mga lalaki ay nakikipagdigma para sa mga babae, 'tulad nina Menelaus at Paris' (ang Digmaang Trojan dahil kay Helen). Kaya 'To fight over women.' Tip: hanapin ang eksaktong detalye sa teksto."
        },
        "2": {
          "question": "[PASSAGE - Voltaire] \"All animals wage perpetual war... Males make war for the females, like Menelaus and Paris. Air, earth, water, are fields of carnage. God having given reason to men, this reason might teach them not to emulate the brutes...\" \"Can there be anything more horrible in all nature?\"\n\n[QUESTION] What is the author's stand on war?",
          "choices": {
            "A": "It is horrible",
            "B": "It is important",
            "C": "It is a means to control population",
            "D": "It is a natural product of man's reason."
          },
          "correct": "A",
          "reason": "Ang may-akda ay nagtatanong kung may mas nakakakilabot pa sa kalikasan kaysa sa digmaan, kaya ang paninindigan niya ay 'It is horrible.' Ang ibang choices (important, population control) ay hindi sinabi sa teksto."
        },
        "3": {
          "question": "[PASSAGE - Voltaire] \"All animals wage perpetual war... Air, earth, water, are fields of carnage... Can there be anything more horrible in all nature?\"\n\n[QUESTION] What is the best title for the selection?",
          "choices": {
            "A": "War",
            "B": "The Products of War",
            "C": "The Need for War",
            "D": "The Elements of War"
          },
          "correct": "A",
          "reason": "Ang buong talata ay tungkol sa digmaan sa kalikasan at sa mga tao, kaya 'War' ang pinakamaikli at pinakaangkop. Ang ibang titulo (products, need, elements) ay hindi tinalakay."
        },
        "4": {
          "question": "[PASSAGE - Voltaire] \"All animals wage perpetual war; every species is born to devour another...\"\n\n[QUESTION] What does 'All animals wage perpetual war...' mean?",
          "choices": {
            "A": "All war never ends.",
            "B": "There is always some kind of war occurring someplace.",
            "C": "Only animals and not man engage in war.",
            "D": "All animals make war all the time."
          },
          "correct": "B",
          "reason": "Ang 'perpetual war' ay walang-hanggang digmaan, kaya ibig sabihin: palaging may digmaan na nangyayari sa kung saan. Hindi lang mga hayop (C) at hindi 'lahat ng hayop sa lahat ng oras' (D) dahil sobra ang pag-generalize."
        },
        "5": {
          "question": "[POEM SUMMARY - 'A Psalm of Life' by Henry Wadsworth Longfellow] The poem urges the reader not to think of life as meaningless; it is real and has purpose. The true goal is to act and improve day by day, not just to enjoy or grieve.\n\n[QUESTION] What is the poet's view on life?",
          "choices": {
            "A": "Life is empty.",
            "B": "Life is lonely.",
            "C": "Life is an empty dream.",
            "D": "Life is not an empty dream."
          },
          "correct": "D",
          "reason": "Ang mensahe: ang buhay ay totoo at may layunin, hindi walang saysay na panaginip. Kaya ang pananaw ng makata ay 'Life is not an empty dream.' Ang 'Life is empty/lonely/an empty dream' ay ang mismong sinasalungat ng tula."
        },
        "6": {
          "question": "[POEM SUMMARY - 'A Psalm of Life'] The poem asserts that life is real, earnest, and has purpose — the grave is not its goal.\n\n[QUESTION] What is the antecedent of the pronoun 'its' in the line \"And the grave is not its goal\"?",
          "choices": {
            "A": "dream",
            "B": "life",
            "C": "real",
            "D": "earnest"
          },
          "correct": "B",
          "reason": "Ang 'its' ay tumutukoy sa 'Life' (ang buhay at ang libingan nito ay hindi ang layunin nito). Antecedent ang pangngalang pinalitan ng panghalip. Halimbawa: 'Ana lost her bag' — ang antecedent ng 'her' ay Ana."
        },
        "7": {
          "question": "[POEM SUMMARY - 'A Psalm of Life'] The speaker urges: 'Act — act in the living Present!' and to leave footprints on the sands of time so others may follow.\n\n[QUESTION] According to the author, what should be our goal in life?",
          "choices": {
            "A": "To enjoy each moment",
            "B": "To act and continually improve our life day by day",
            "C": "To beat sorrow",
            "D": "To die happily"
          },
          "correct": "B",
          "reason": "Ayon sa tula, ang layunin ay kumilos upang bawat bukas ay mas maunlad kaysa ngayon. Hindi ang pagsasaya lamang, hindi rin ang kalungkutan, kaya 'To act and continually improve our life day by day.'"
        },
        "8": {
          "question": "[POEM SUMMARY - 'Dreams' by Langston Hughes] Two short stanzas instruct the reader to hold fast to dreams, for if dreams die, life is a broken-winged bird that cannot fly, and life is a barren field frozen with snow.\n\n[QUESTION] What figure of speech did the author use in the first stanza?",
          "choices": {
            "A": "simile",
            "B": "hyperbole",
            "C": "metaphor",
            "D": "irony"
          },
          "correct": "C",
          "reason": "Sa unang stanza, direktang ipinaghahambing ang buhay sa ibong may sirang pakpak, nang walang 'parang' o 'tulad ng.' Metaphor ito. Ang simile ay may 'like/as,' ang hyperbole ay pagmamalabis, at ang irony ay kabaligtaran ng sinasabi."
        },
        "9": {
          "question": "[POEM SUMMARY - 'Dreams' by Langston Hughes, written during the Apartheid era] The poem's final two lines speak of a barren field frozen with snow. In context, the author is a South African Negro during Apartheid when most blacks were treated as inferior.\n\n[QUESTION] To what could he be alluding to in the last two lines of the poem?",
          "choices": {
            "A": "white people",
            "B": "slaves",
            "C": "snow",
            "D": "ice"
          },
          "correct": "A",
          "reason": "Sa konteksto ng Apartheid, ang malamig na niyebe at yelo sa huling dalawang linya ay sumisimbolo sa kulay at kalupitan ng mga puti, kaya 'white people.' Ang snow o ice mismo ay literal na bagay, pero tinutukoy ng tanong ang simbolo (allusion)."
        },
        "10": {
          "question": "[POEM SUMMARY - 'Dreams' by Langston Hughes] The poem commands: hold fast to dreams — otherwise life is broken and barren.\n\n[QUESTION] What effect does the poem have upon the Negroes?",
          "choices": {
            "A": "It made them more sad",
            "B": "It made them feel downtrodden",
            "C": "It increased their anger towards Whites",
            "D": "It increased their determination"
          },
          "correct": "D",
          "reason": "Ang tula ay nag-uudyok na panghawakan ang pangarap, kaya ang epekto sa mga Negro ay 'It increased their determination.' Hindi ito nagpapalungkot (A, B) o nagpapagalit (C)."
        },
        "11": {
          "question": "[POEM SUMMARY - 'Dreams' by Langston Hughes, Apartheid context] The poem speaks to black South Africans about holding onto dreams amid oppression.\n\n[QUESTION] Which statement is NOT a correct inference based on the poem?",
          "choices": {
            "A": "Blacks and Whites enjoy equal rights.",
            "B": "Blacks are treated inferior over Whites.",
            "C": "Blacks also have dreams of a better life.",
            "D": "Whites enjoy more rights over Blacks."
          },
          "correct": "A",
          "reason": "Ang 'not a correct inference' ay ang maling konklusyon. Ang 'Blacks and Whites enjoy equal rights' ay mali dahil ang konteksto (Apartheid) ay hindi pantay. Ang B, C, at D ay lehitimong inference."
        },
        "12": {
          "question": "[PASSAGE - Norman Vincent Peale, 'How to Handle Criticism'] \"Only two things in life are certain, Benjamin Franklin once remarked: death and taxes. But there is one other unpleasant uncertainty: criticism. No one escapes it entirely. And often our careers, our emotional stability, our happiness depend on how we react to it...\"\n\n[QUESTION] Why should we all learn how to cope with criticism?",
          "choices": {
            "A": "Because reacting to criticism only warns one's heart.",
            "B": "Because reacting to criticism sometimes leads to further trouble.",
            "C": "Because reacting to criticism makes one fulfilled.",
            "D": "Because criticism are always correct."
          },
          "correct": "B",
          "reason": "Ayon sa passage ni Peale, ang pagre-react sa kritisismo ay maaaring humantong sa mas malaking gulo at nakasalalay doon ang karera at emosyon, kaya kailangang matutong kontrolin ang reaksyon. Sagot: 'Because reacting to criticism sometimes leads to further trouble.'"
        },
        "13": {
          "question": "[PASSAGE - Peale] \"...your best defense is your own day-to-day conduct. It is keeping your moral standards high. It is having a clear conscience.\"\n\n[QUESTION] According to the author, what is the best defense against criticism?",
          "choices": {
            "A": "a person's ability to counter-criticize",
            "B": "one's ability to act with deaf ears",
            "C": "one's day to day conduct",
            "D": "one's anger"
          },
          "correct": "C",
          "reason": "Sinabi ng may-akda na ang pinakamabisang depensa ay 'your own day-to-day conduct' (iyong pang-araw-araw na asal at mataas na moral na pamantayan). Hindi ito ang pag-counter-criticize o pagbibingi-bingihan."
        },
        "14": {
          "question": "[PASSAGE - Peale, quoting Disraeli] \"It is much easier to be critical than correct.\"\n\n[QUESTION] Why is it easier to be critical than correct?",
          "choices": {
            "A": "Because it is easier to find a flaw in someone else.",
            "B": "Because it is easier to control another person's opinion.",
            "C": "Because some people are able to control their opinion.",
            "D": "Because some people find it easier to praise other people."
          },
          "correct": "A",
          "reason": "Sinasabi ng quote ni Disraeli na mas madaling pumuna kaysa maging tama, dahil mas madaling makakita ng mali sa iba kaysa gumawa ng tama mismo. Halimbawa: mas madaling pumuna sa luto ng iba kaysa magluto ng masarap na ulam."
        },
        "15": {
          "question": "[PASSAGE - Peale] \"...criticism... No one escapes it entirely... your best defense is your own day-to-day conduct. It is keeping your moral standards high.\"\n\n[QUESTION] What is the best title for the above selection?",
          "choices": {
            "A": "Criticisms, its Uses and Abuses",
            "B": "How to Cope with Criticisms",
            "C": "The Ups and Downs of Criticisms",
            "D": "Best Criticisms"
          },
          "correct": "B",
          "reason": "Ang buong passage ay nagbibigay ng payo kung paano harapin ang kritisismo (kontrolin ang emosyon, taglayin ang mataas na moral). Kaya 'How to Cope with Criticisms' ang pinakaangkop na titulo."
        },
        "16": {
          "question": "[PASSAGE - Book of Questions and Answers, Octopus Press] \"Hair goes on growing after a person dies because the cells of the body go on working until they have exhausted their fuel supply. The hair follicle is composed of two layers... The soft cells at the base of the follicle need the nourishment brought to them and all the other cells of the body by the bloodstream.\"\n\n[QUESTION] A person's fingernails, just like the hair, keeps on growing even after a person's death. What could account for this occurrence?",
          "choices": {
            "A": "The dead person's body keeps on producing new cells to continue the growth of the fingernails and hair.",
            "B": "The dead person's body preserves all the cells so hair and nail growth continue.",
            "C": "The energy supply of the cells of the hair and the nails have not yet been fully exhausted so growth still continues.",
            "D": "Hair and nails just never stop growing."
          },
          "correct": "C",
          "reason": "Ayon sa passage, patuloy na lumalaki ang buhok pagkatapos ng kamatayan dahil patuloy na gumagana ang mga cells hangga't hindi pa nauubos ang kanilang panggatong (fuel/energy). Ganito rin ang kuko, kaya C. Ang A ay mali dahil hindi nagpo-produce ng bagong cells ang patay na katawan."
        },
        "17": {
          "question": "[PASSAGE - Book of Questions and Answers] \"The soft cells at the base of the follicle need the nourishment brought to them by the bloodstream.\"\n\n[QUESTION] What would happen to the soft cells at the base of the follicle if no nourishment comes in?",
          "choices": {
            "A": "They would stop multiplying",
            "B": "They would produce white hair",
            "C": "They would go on dividing.",
            "D": "They would harden."
          },
          "correct": "A",
          "reason": "Ayon sa passage, ang mga soft cells sa ilalim ng follicle ay nangangailangan ng nutrisyon mula sa dugo. Kapag walang nutrisyon, hihinto silang dumami (stop multiplying). Hindi sila magiging white hair o tumigas."
        },
        "18": {
          "question": "[PASSAGE - Book of Questions and Answers] \"...The hair grows upwards from the bottom of the follicle by multiplication of the soft cells, which becomes elongated and pigmented to form the fiber-like substance of the hair shaft.\"\n\n[QUESTION] What could possibly explain the occurrence of white hair?",
          "choices": {
            "A": "The soft cells produce white pigment which gives the hair its white color.",
            "B": "The soft cells die which gives the hair its white color.",
            "C": "The absence of pigments from the follicle accounts for white hair.",
            "D": "The absence of follicle due to old age causes white hair."
          },
          "correct": "C",
          "reason": "Ang puting buhok ay dahil sa pagkawala ng pigment sa follicle (ang mga cells ay nagiging pigmented para magkaroon ng kulay). Ang A ay mali (hindi gumagawa ng puting pigment ang soft cells), at ang B at D ay hindi tinalakay."
        },
        "19": {
          "question": "[PASSAGE - Book of Questions and Answers] \"...The hair follicle is composed of two layers... The hair grows upwards from the bottom of the follicle by multiplication of the soft cells...\"\n\n[QUESTION] Which of the following statements is NOT true?",
          "choices": {
            "A": "Hair follicle is composed of two layers.",
            "B": "Hair grows from the tip of the follicle.",
            "C": "Hair follicle is composed of soft cells.",
            "D": "The soft cells need the nourishment brought in through the bloodstream."
          },
          "correct": "B",
          "reason": "Ang NOT true ay 'Hair grows from the tip of the follicle.' Ayon sa passage, ang buhok ay tumutubo pataas mula sa ILALIM (bottom) ng follicle. Ang A, C, at D ay tama sa passage."
        },
        "20": {
          "question": "[PASSAGE - Michael Curtis, 'The Great Political Theories'] \"The concepts of Epicureanism are largely known to us through Lucretius, rather than Epicurus. The latter born on Athenian citizen in Samos in 341, founded his school in his garden, a symbol of retirement from the world, in 306 and died in 270 B.C.\"\n\n[QUESTION] Who was born an Athenian citizen in Samos in 341 B.C.?",
          "choices": {
            "A": "Plato",
            "B": "Aristotle",
            "C": "Lucretius",
            "D": "Epicurus"
          },
          "correct": "D",
          "reason": "Si Epicurus ang ipinanganak na Athenian citizen sa Samos noong 341 B.C. at nagtayo ng paaralan sa hardin. Ang Lucretius ang nagpalaganap ng ideya (ayon sa unang pangungusap), kaya hindi siya ang sagot."
        },
        "21": {
          "question": "[PASSAGE - Curtis] \"For the Epicurean, the universe was chaotic and anarchic, composed of atoms and the void...\"\n\n[QUESTION] What do the Epicureans think about the universe?",
          "choices": {
            "A": "It was disorderly with an absence of rule.",
            "B": "It was orderly and without a ruler.",
            "C": "It was atomic and filled with objects and humans.",
            "D": "The universe was full of life moving in an orderly manner."
          },
          "correct": "A",
          "reason": "Ayon sa Epicureans, ang uniberso ay magulo at walang pinuno (chaotic at anarchic), kaya 'disorderly with an absence of rule.' Ang B at D ay kabaligtaran ng sinasabi ng passage."
        },
        "22": {
          "question": "[PASSAGE - Curtis] \"The aim of life therefore was pleasure, the pursuit of which brought about happiness, the final end.\"\n\n[QUESTION] What was the Epicureans' ultimate goal?",
          "choices": {
            "A": "The pursuit of being godlike",
            "B": "To bring order out of the chaos.",
            "C": "The pursuit of happiness",
            "D": "To bring chaos into the world."
          },
          "correct": "C",
          "reason": "Ang pinakahuling layunin ng buhay ay ang kasiyahan at ang paghahanap nito na humahantong sa kaligayahan (happiness). Kaya 'The pursuit of happiness.'"
        },
        "23": {
          "question": "[PASSAGE - Curtis] \"...it implied limitation of social relationships — 'live unknown' — refusal to be involved in family or political affairs, skepticism toward religion, which the Epicureans considered largely superstition.\"\n\n[QUESTION] Epicureans had a different view about religion. What was it?",
          "choices": {
            "A": "Religion controls man.",
            "B": "Religion brings man closer to God.",
            "C": "Religion is merely a superstition.",
            "D": "Religion is man's way of knowing God."
          },
          "correct": "C",
          "reason": "Itinuturing ng mga Epicurean na ang relihiyon ay halos pamahiin (superstition). Ito ang kanilang kakaibang pananaw. Ang A, B, at D ay hindi tugma sa passage."
        },
        "24": {
          "question": "[PASSAGE - Curtis] \"...the aim was absence of pain and the achievement of peace and mind. This would be obtained personally by self-control, the mastery and limitation of desires as far as possible to those that were strictly necessary.\"\n\n[QUESTION] Which of the following is NOT a belief of the Epicureans?",
          "choices": {
            "A": "There should be no limit to man's desires.",
            "B": "Man should exercise restraint and self-control.",
            "C": "Man should live unknown.",
            "D": "Limit desires to those which are strictly necessary."
          },
          "correct": "A",
          "reason": "Ang NOT belief ay 'There should be no limit to man's desires.' Itinuturo ng mga Epicurean ang pagpipigil sa sarili at paglilimita sa mga pagnanais sa mga talagang kailangan. Ang B, C, at D ay kanilang paniniwala."
        },
        "25": {
          "question": "[PASSAGE - Seneca, 'On the Happy Life'] \"What is the happy life? Self-sufficiency and abiding tranquility. This is the gift of greatness of soul, the gift of constancy which preserves in a course judged right.\"\n\n[QUESTION] What constitutes a happy life?",
          "choices": {
            "A": "attainment of everything that one desires",
            "B": "being at peace with everyone",
            "C": "self-sufficiency and tranquility",
            "D": "none of the above"
          },
          "correct": "C",
          "reason": "Ang unang pangungusap ng passage ay sumasagot dito: 'Self-sufficiency and abiding tranquility.' Kaya C. Ang pagkakamit ng lahat ng ninanais (A) at pakikipagkasundo sa lahat (B) ay hindi binanggit."
        },
        "26": {
          "question": "[PASSAGE - Seneca] \"...How can these attitudes be attained? By surveying truth in its entirety, by safeguarding in every action order, measure, decorum, a will that is without malice and benign, focused undeviatingly upon reason...\"\n\n[QUESTION] How can one attain a happy life, according to Seneca?",
          "choices": {
            "A": "by being hypocritical",
            "B": "by getting what one wants no matter what the cost",
            "C": "both a and b",
            "D": "none of the above"
          },
          "correct": "D",
          "reason": "Ayon sa passage, ang mapayapang buhay ay naaabot sa pamamagitan ng pag-unawa sa katotohanan, paggalang sa tamang kaayusan, at pagkakaroon ng malinis na kalooban, hindi sa pagkukunwari (A) o pagkuha ng gusto anuman ang kapalit (B). Kaya 'none of the above' (D)."
        },
        "27": {
          "question": "[PASSAGE - Seneca] \"The wise man's soul should have the quality of a god's... a will that is without malice and benign, focused undeviatingly upon reason, once amiable and admirable.\"\n\n[QUESTION] What is an indication that a man's soul is already like that of a god's?",
          "choices": {
            "A": "He is at peace with others.",
            "B": "He desires everything.",
            "C": "He attains everything he desires without limitation.",
            "D": "He discerns truth, focuses upon reason, has a will that is without malice."
          },
          "correct": "D",
          "reason": "Ang tanda na ang kaluluwa ng tao ay tulad ng sa diyos ay ang pagkilala sa katotohanan, pagtutok sa katwiran, at kalooban na walang masamang hangarin. Ang A, B, at C ay hindi sinabi."
        },
        "28": {
          "question": "[PASSAGE - Seneca, 'On the Happy Life'] \"Self-sufficiency and abiding tranquility... the gift of greatness of soul... The wise man's soul should have the quality of a god's.\"\n\n[QUESTION] Which of the following statements is NOT true based on the selection?",
          "choices": {
            "A": "Self-sufficiency does not bring happiness.",
            "B": "Greatness of soul is attainable.",
            "C": "Man should aim to have a soul like that of a god's.",
            "D": "Man should not desire that which is dishonorable."
          },
          "correct": "A",
          "reason": "Ang NOT true ay 'Self-sufficiency does not bring happiness.' Taliwas ito sa unang pangungusap ng passage, na nagsasabing ang self-sufficiency ang kaligayahan. Ang B, C, at D ay sinasang-ayunan ng teksto."
        },
        "29": {
          "question": "[POEM SUMMARY - 'Love in the Open Hand' by Edna St. Vincent Millay] Three stanzas plus a closing two lines. The speaker (a woman) does not give love hidden in an expensive box or ring; she offers it openly and honestly, like a child carrying flowers or apples, saying everything she has is for the beloved.\n\n[QUESTION] What stanza states the main idea of the poem?",
          "choices": {
            "A": "stanza 1",
            "B": "stanza 2",
            "C": "stanza 3",
            "D": "main idea is implied"
          },
          "correct": "C",
          "reason": "Ang pangunahing ideya (ibibigay ang pag-ibig nang bukas at tapat, hindi nakatago o may kasamang palamuti) ay malinaw na nasasabi sa ikatlong stanza. Kaya C."
        },
        "30": {
          "question": "[POEM SUMMARY - 'Love in the Open Hand' by Millay] The third stanza compares the speaker's offering of love to a child carrying flowers or apples, introduced with 'as.'\n\n[QUESTION] What figure of speech was used in the third stanza?",
          "choices": {
            "A": "simile",
            "B": "metaphor",
            "C": "personification",
            "D": "hyperbole"
          },
          "correct": "A",
          "reason": "Sa ikatlong stanza, ginamit ang 'as' para ihambing ang pagbibigay ng pag-ibig sa pagdadala ng bulaklak o mansanas, kaya simile. Ang metaphor ay walang 'like/as,' at ang personification ay pagbibigay-buhay sa bagay."
        },
        "31": {
          "question": "[POEM SUMMARY - 'Love in the Open Hand' by Millay] The poem's last line reads: \"Look what I have! — and these are all for you.\"\n\n[QUESTION] What does the author refer to in the last line 'Look what I have! — and these are all for you'?",
          "choices": {
            "A": "her gifts",
            "B": "her love",
            "C": "her apples",
            "D": "her skirt"
          },
          "correct": "B",
          "reason": "Sa huling linya, ang 'these are all for you' ay tumutukoy sa pag-ibig na inaalay ng persona (hindi mga regalong pisikal). Ang buong tula ay tungkol sa pag-ibig, kaya 'her love.'"
        },
        "32": {
          "question": "[POEM SUMMARY - 'Love in the Open Hand' by Millay] The speaker rejects hiding love in expensive boxes or rings — she offers it openly like a child with flowers and apples.\n\n[QUESTION] According to the author, how should one manifest his love for someone?",
          "choices": {
            "A": "with reservation",
            "B": "little by little",
            "C": "with fancy trappings",
            "D": "without reservation or restrictions"
          },
          "correct": "D",
          "reason": "Ayon sa tula, dapat ipakita ang pag-ibig nang bukas at tapat, 'without reservation or restrictions,' hindi may pagtatago o pagpapaganda. Ang A, B, at C ay kabaligtaran ng mensahe."
        },
        "33": {
          "question": "[POEM SUMMARY - 'Love in the Open Hand' by Millay] The speaker refers to other women as 'other girls' and describes her own offering.\n\n[QUESTION] What is the gender of the persona in the poem?",
          "choices": {
            "A": "common",
            "B": "masculine",
            "C": "neuter",
            "D": "feminine"
          },
          "correct": "D",
          "reason": "Ang persona ay nagsasabing 'as other girls' ang ibang babae, kaya babae rin siya (feminine). Ang common at neuter ay hindi tumutukoy sa kasarian ng tao."
        },
        "34": {
          "question": "[PASSAGE - 'The Guru and the Scorpion'] One day, the guru and his young disciples were seated on the bank of the river... An uprooted tree came floating down the river and caught in the bank just in front of them. Caught in the branches of the tree was a scorpion... The guru knew that, inevitably, the scorpion would fall from the tree and be drowned in the river. So he reached his hand out to take the scorpion from the tree and to put it safely on land. But as he reached out to rescue the scorpion, it stung his hand, and the guru had to take his hand away in pain.\n\n[QUESTION] Why did the guru attempt to remove the scorpion from the branches?",
          "choices": {
            "A": "Because he did not want the scorpion to die.",
            "B": "Because he hates scorpions.",
            "C": "Because he wants to throw the scorpion into the waters.",
            "D": "Because the scorpion might sting someone else."
          },
          "correct": "A",
          "reason": "Gusto ng guro na iligtas ang alakdan para hindi ito malunod. Hindi dahil sa galit (B) o para ihagis ito (C) o protektahan ang iba (D). Sagot: A."
        },
        "35": {
          "question": "[PASSAGE - 'The Guru and the Scorpion'] The guru kept trying to save the scorpion despite being stung. A disciple asked why. The guru replied: \"Should I be untrue to my nature which is to be compassionate just because this scorpion is being true to its nature to sting?\"\n\n[QUESTION] What does the guru's statement mean?",
          "choices": {
            "A": "One should always be compassionate even if it is not properly reciprocated.",
            "B": "One should stop giving if it hurts.",
            "C": "One should be compassionate only to those who know how to appreciate.",
            "D": "One should always count one's blessings."
          },
          "correct": "A",
          "reason": "Ang tinutukoy ng guru ay ang kanyang kalikasan na maging mahabagin, gaano man ang sakit na natatanggap. Ibig sabihin: maging mabait kahit hindi suklian. Halimbawa: patuloy na pagtulong kahit hindi nagpapasalamat ang tinutulungan."
        },
        "36": {
          "question": "[PASSAGE - 'The Guru and the Scorpion'] The guru repeatedly tried to save a drowning scorpion that repeatedly stung him. He explained that he must stay true to his compassionate nature.\n\n[QUESTION] What is the best title for the selection?",
          "choices": {
            "A": "The Scorpion",
            "B": "The Guru",
            "C": "True Compassion",
            "D": "The Sting"
          },
          "correct": "C",
          "reason": "Ang pangunahing aral ng kuwento ay tunay na malasakit (compassion) at hindi lang ang alakdan o ang guro. Kaya 'True Compassion.'"
        },
        "37": {
          "question": "[PASSAGE - Norstog and Meyerriecks, Biology] \"Although many quarts of blood pass through the heart each day, the heart cannot utilize the blood within itself, but rather is sustained by branches of arteries originating externally. These coronary arteries can become blocked by the deposition of fatty material (including cholesterol), connective tissue fibers, and calcium deposited in the vessel walls. If the blockage is severe, numerous heart muscle cells become oxygen starved and the heart stops.\"\n\n[QUESTION] What statement is NOT true based on the selection?",
          "choices": {
            "A": "Scar tissue replaces dead heart muscles.",
            "B": "The heart is sustained by branches of arteries originating externally.",
            "C": "Oxygen is essential for the heart muscles to function properly.",
            "D": "The heart utilizes the blood within itself."
          },
          "correct": "D",
          "reason": "Ang NOT true ay 'The heart utilizes the blood within itself.' Ayon sa passage, ang puso ay hindi gumagamit ng dugong dumaraan dito; ito ay pinapalakas ng mga sangay ng arteries na nasa labas. Ang A, B, at C ay nasa passage."
        },
        "38": {
          "question": "[PASSAGE - Biology] \"These coronary arteries can become blocked by the deposition of fatty material (including cholesterol), connective tissue fibers, and calcium deposited in the vessel walls.\"\n\n[QUESTION] Coronary arteries can become blocked by",
          "choices": {
            "A": "food deposits.",
            "B": "blood deposits.",
            "C": "too much oxygen in the blood.",
            "D": "deposits of fatty materials, connective tissue fibers and calcium."
          },
          "correct": "D",
          "reason": "Ang coronary arteries ay nababara ng deposito ng taba (kasama ang cholesterol), connective tissue fibers, at calcium. Ito ang sagot na D. Hindi simpleng 'food deposits' o 'blood deposits' ang sinabi."
        },
        "39": {
          "question": "[PASSAGE - Biology] \"If the blockage is severe, numerous heart muscle cells become oxygen starved and the heart stops. In less severe cases, only part of the heart muscle dies as a result of the blockage.\"\n\n[QUESTION] What causes heart stoppage?",
          "choices": {
            "A": "absence of carbon in the heart muscles",
            "B": "presence of cholesterol in the heart muscles",
            "C": "absence of oxygen in the heart muscles",
            "D": "presence of oxygen in the heart muscles"
          },
          "correct": "C",
          "reason": "Ayon sa passage, kapag matindi ang pagbabara, ang mga heart muscle cells ay nauubusan ng oxygen at humihinto ang puso. Kaya ang sanhi ay absence of oxygen."
        },
        "40": {
          "question": "[PASSAGE - Biology] \"Interestingly, although fats in the diet are often blamed for the heart attacks, about 70% of the heart's energy requirement normally is derived from oxidation of fatty acids.\"\n\n[QUESTION] Fats in the diet —",
          "choices": {
            "A": "are always useless.",
            "B": "normally provide the heart's energy requirement.",
            "C": "always cause heart blockage.",
            "D": "normally get wasted."
          },
          "correct": "B",
          "reason": "Ayon sa passage, mga 70% ng energy ng puso ay nanggagaling sa oxidation ng fatty acids, kaya ang taba sa diet ay nagbibigay ng pangangailangan sa enerhiya. Hindi sila 'useless' (A) at hindi laging nagdudulot ng blockage (C)."
        },
        "41": {
          "question": "[PASSAGE - Biology] \"Cancer is a disease in which cells somehow become activated into uncontrolled multiplication and thus produce an overgrowth, or tumor, composed of malformed, malignant cells. Cancerous tumors can occur in almost any tissue of the body...\"\n\n[QUESTION] How does cancer occur?",
          "choices": {
            "A": "Cells reproduce what is normally enough.",
            "B": "The cells replace the dead cells in the body.",
            "C": "The cells uncontrollably multiply producing malignant cells.",
            "D": "The cells naturally reproduce malformed, malignant cells."
          },
          "correct": "C",
          "reason": "Ayon sa passage, ang cancer ay nangyayari kapag ang mga cells ay lumalaking walang kontrol at nagbubunga ng tumor na binubuo ng malformed, malignant cells. Kaya C. Ang B ay mali dahil hindi ito pagpapalit ng patay na cells."
        },
        "42": {
          "question": "[PASSAGE - Biology] \"Cancerous tumors can occur in almost any tissue of the body, although some are more often affected than others.\"\n\n[QUESTION] It is believed that cancer",
          "choices": {
            "A": "can occur in any tissue of the body.",
            "B": "affects certain tissues of the body more than it does to other tissues.",
            "C": "both a and b",
            "D": "neither a nor b"
          },
          "correct": "C",
          "reason": "Ayon sa passage, puwedeng mangyari ang cancer sa halos anumang tissue (A), pero may mga tissue na mas madalas maapektuhan (B). Kaya 'both a and b' (C)."
        },
        "43": {
          "question": "[PASSAGE - Biology] \"Three general kinds of cancer... are recognized: carcinomas... which commonly involve epithelial tissue; sarcomas... which affect mainly connective tissues, including bone; and leukemias, which start in the bone marrow and lymphatic tissues.\"\n\n[QUESTION] What do you call the type of cancer which affects connective tissues?",
          "choices": {
            "A": "carcinoma",
            "B": "sarcoma",
            "C": "leukemia",
            "D": "all of the above"
          },
          "correct": "B",
          "reason": "Ayon sa passage, ang sarcomas ay umaapekto sa connective tissues kasama ang buto. Ang carcinoma ay epithelial, ang leukemia ay sa bone marrow at dugo."
        },
        "44": {
          "question": "[PASSAGE - Biology] \"...carcinomas (from karkinoma, the Greek word for cancer), which commonly involve epithelial tissue (epidermis and lining membranes)...\"\n\n[QUESTION] Cancer found in the skin would most likely be classified as",
          "choices": {
            "A": "carcinoma",
            "B": "sarcoma",
            "C": "leukemia",
            "D": "dermacoma"
          },
          "correct": "A",
          "reason": "Ang balat (epidermis) ay epithelial tissue, kaya ang cancer dito ay carcinoma. Ang 'dermacoma' ay hindi binanggit sa passage."
        },
        "45": {
          "question": "[PASSAGE - Biology] \"Three general kinds of cancer, named after the tissues most often affected, are recognized: carcinomas... sarcomas... and leukemias...\"\n\n[QUESTION] What is the basis for the classification of cancers?",
          "choices": {
            "A": "the cancer's size and weight",
            "B": "the cancer's location and the tissue affected",
            "C": "the cancer's length of existence",
            "D": "the cancer's extent of growth"
          },
          "correct": "B",
          "reason": "Ayon sa passage, ang tatlong uri ng cancer ay pinangalanan ayon sa uri ng tissue na madalas maapektuhan. Kaya ang batayan ay ang lokasyon at ang tissue na apektado."
        },
        "46": {
          "question": "[PASSAGE - Biology, Norstog and Meyerriecks] \"When the tissues of the body are wounded, several events occur that resist the loss of blood from the cut vessels and begin the healing processes. At the wound site, blood platelets swell and burst, releasing chemicals that cause the arteries to constrict and thus slow the loss of blood... The fibrin threads form a fine meshwork in the blood and together with trapped cells and other blood particles make a clot...\"\n\n[QUESTION] What is the best title for the paragraph?",
          "choices": {
            "A": "Blood and its Uses",
            "B": "The Evolution of Blood",
            "C": "The Importance of Blood Clots",
            "D": "How a Blood Clot is Formed"
          },
          "correct": "D",
          "reason": "Ang buong paragraph ay tungkol sa mga hakbang sa pagbuo ng blood clot mula sa platelets hanggang fibrin. Kaya 'How a Blood Clot is Formed.'"
        },
        "47": {
          "question": "[PASSAGE - Biology] \"At the wound site, blood platelets swell and burst, releasing chemicals that cause the arteries to constrict... The platelets also initiate a process that results in activation of prothrombin activator...\"\n\n[QUESTION] What part of the blood plays an essential role in clot formation?",
          "choices": {
            "A": "blood proteins",
            "B": "fibrin",
            "C": "platelets",
            "D": "red blood cells"
          },
          "correct": "C",
          "reason": "Ayon sa passage, ang platelets ang unang bumubulwak at naglalabas ng kemikal, at nagsisimula ng proseso ng clotting. Kaya platelets ang may mahalagang papel."
        },
        "48": {
          "question": "[PASSAGE - Biology] \"In the hereditary disease hemophilia, there is a deficiency in the factors that activate the formation of prothrombin activator; the hemophiliac lacks the ability to form clots at the point of wounding...\"\n\n[QUESTION] What could happen to a hemophiliac should he get wounded?",
          "choices": {
            "A": "bleed to death",
            "B": "blood clots will form immediately",
            "C": "he will have unlimited supply of blood",
            "D": "his blood will become infected"
          },
          "correct": "A",
          "reason": "Ang hemophiliac ay kulang sa mga salik na nagpapagana ng prothrombin activator, kaya hindi nakaka-form ng clot at puwedeng mamatay sa dugo kahit maliit na sugat."
        },
        "49": {
          "question": "[PASSAGE - Biology] \"At the wound site, blood platelets swell and burst, releasing chemicals that cause the arteries to constrict and thus slow the loss of blood.\"\n\n[QUESTION] What is the first step in the formation of a blood clot?",
          "choices": {
            "A": "Blood from cut vessel begins to flow",
            "B": "Blood platelets swell and burst, releasing chemicals",
            "C": "Prothrombin is activated",
            "D": "Formation of fibrin threads"
          },
          "correct": "B",
          "reason": "Ayon sa passage, ang unang hakbang ay kapag lumaki at sumabog ang blood platelets at naglabas ng chemicals. Hindi ang pagdaloy ng dugo (A), at huli ang formation ng fibrin threads (D)."
        },
        "50": {
          "question": "[PASSAGE - Biology] \"In the presence of calcium ions, thrombin catalyzes the conversion of another blood-protein component, fibrinogen, into fibrin threads.\"\n\n[QUESTION] How are fibrin threads formed?",
          "choices": {
            "A": "Fibrinogen is converted into fibrin threads by the platelets.",
            "B": "Thrombin and calcium ions catalyze the conversion of fibrinogen to fibrin threads.",
            "C": "Fibrin threads occur naturally in the blood.",
            "D": "Fibrin threads are the result of the combination of the blood and its platelets."
          },
          "correct": "B",
          "reason": "Ayon sa passage, ang thrombin (na may calcium ions) ang nag-catalyze sa conversion ng fibrinogen tungo sa fibrin threads. Hindi ang platelets mismo (A) ang nagko-convert nito."
        }
      }
    },
    {
      "subject": "Filipino",
      "subject_icon": "🇵🇭",
      "topic": "Kasingkahulugan",
      "topic_order": 1,
      "questions": {
        "1": {
          "question": "Nauulinigan ang pag-uusap ng grupo dahil sa lakas ng tinig nila. (Kasingkahulugan ng 'nauulinigan')",
          "choices": {
            "A": "nahihimigan",
            "B": "napakikinggan",
            "C": "nakikita",
            "D": "nararamdaman"
          },
          "correct": "B",
          "reason": "Ang 'nauulinigan' ay nadirinig o naririnig, lalo na kung malakas ang tinig. Kaya 'napakikinggan' ang pinakamalapit. Ang nahihimigan ay napapansin ang bahagyang tunog o himig, hindi tugma sa 'lakas ng tinig.' Halimbawa: 'Nauulinigan ko ang kanta sa kabilang bahay.'"
        },
        "2": {
          "question": "Karapatan ng bawat batang Pilipino ang magkaroon ng pamilyang mag-aaruga sa kanya. (Kasingkahulugan ng 'mag-aaruga')",
          "choices": {
            "A": "mag-aalaga",
            "B": "magsasaway",
            "C": "gagabay",
            "D": "tutulong"
          },
          "correct": "A",
          "reason": "Ang 'mag-aaruga' ay mag-aalaga nang may pagmamahal. Halimbawa: 'Inaaruga ng nanay ang kanyang sanggol.' Ang magsasaway ay magsasabi ng mali; ang gagabay at tutulong ay iba ang diin."
        },
        "3": {
          "question": "Nagugulumihanan si Rochelle kung anong kurso ang kanyang kukunin sa kolehiyo. (Kasingkahulugan ng 'nagugulumihanan')",
          "choices": {
            "A": "nagtataka",
            "B": "natutuwa",
            "C": "nagpapasalamat",
            "D": "nalilito"
          },
          "correct": "D",
          "reason": "Ang 'nagugulumihanan' ay nalilito. Halimbawa: 'Nagugulumihanan ako sa dami ng pagpipilian.' Ang nagtataka ay nagtatanong, hindi eksaktong nalilito."
        },
        "4": {
          "question": "Tigib na ng pasahero ang dyip nang ito ay umalis. (Kasingkahulugan ng 'tigib')",
          "choices": {
            "A": "punung-puno",
            "B": "kulang-kulang",
            "C": "kaunting-kaunti",
            "D": "maraming-marami"
          },
          "correct": "A",
          "reason": "Ang 'tigib' ay punung-puno. Halimbawa: 'Tigib ng luha ang kanyang mga mata.' Ang kulang-kulang at kaunting-kaunti ay kabaligtaran."
        },
        "5": {
          "question": "Hindi na nakapagpigil ang kaawa-awang katulong kaya isiniwalat ang sama ng loob sa mapang-aping amo. (Kasingkahulugan ng 'isiniwalat')",
          "choices": {
            "A": "isinabi",
            "B": "inilahad",
            "C": "isinigaw",
            "D": "ibinulgar"
          },
          "correct": "D",
          "reason": "Ang 'isiniwalat' ay ibinulgar o inilantad ang lihim o hinanakit. Halimbawa: 'Isiniwalat niya ang katiwalian sa opisina.' Ang isinabi at isinigaw ay hindi ganoong lantad na paglalantad."
        },
        "6": {
          "question": "Iminungkahi ang pagbabawal magtapon ng basura sa di-wastong lugar. (Kasingkahulugan ng 'iminungkahi')",
          "choices": {
            "A": "ipinanukala",
            "B": "inilahad",
            "C": "isiniwalat",
            "D": "kinalat"
          },
          "correct": "A",
          "reason": "Ang 'iminungkahi' ay ipinanukala (inilatag na panukala). Halimbawa: 'Iminungkahi ng konsehal ang bagong ordinansa.' Ang inilahad ay ipinaliwanag lang; ang isiniwalat ay inilantad."
        },
        "7": {
          "question": "Madalas silang mapaaway dahil sa kanilang kapalaluan. (Kasingkahulugan ng 'kapalaluan')",
          "choices": {
            "A": "kalabisan",
            "B": "kayabangan",
            "C": "kagandahan",
            "D": "kasinungalingan"
          },
          "correct": "B",
          "reason": "Ang 'kapalaluan' ay kayabangan o pagmamataas. Halimbawa: 'Dahil sa kanyang kapalaluan, nawalan siya ng kaibigan.'"
        },
        "8": {
          "question": "Pakiramdam niya ay labis-labis ang kanyang suliranin kung kaya siya ay naliligalig. (Kasingkahulugan ng 'naliligalig')",
          "choices": {
            "A": "matalino",
            "B": "masaya",
            "C": "magulo ang isip",
            "D": "malinaw ang isip"
          },
          "correct": "C",
          "reason": "Ang 'naliligalig' ay magulo ang isip o hindi mapakali. Halimbawa: 'Naliligalig siya sa dami ng utang.' Ang 'magulo ang isip' ay tama dahil sa 'labis-labis na suliranin.'"
        },
        "9": {
          "question": "Maalwan lamang ang nararapat na dalahin ng isang bata. (Kasingkahulugan ng 'maalwan')",
          "choices": {
            "A": "magaan",
            "B": "maganda",
            "C": "malaki",
            "D": "maliit"
          },
          "correct": "A",
          "reason": "Ang 'maalwan' ay magaan o maginhawa. Halimbawa: 'Maalwan ang buhay nila ngayon.' Ang kabaligtaran ay mabigat o mahirap."
        },
        "10": {
          "question": "Sa palihan nagagawa ang mga itak, espada at iba pang yari sa bakal. (Kasingkahulugan ng 'palihan')",
          "choices": {
            "A": "palikuran",
            "B": "pamilihang-bayan",
            "C": "palengke",
            "D": "pandayan"
          },
          "correct": "D",
          "reason": "Ang 'palihan' ay pagawaan o pandayan, kung saan ginagawa ang kasangkapang bakal. Halimbawa: 'Nagtatrabaho ang panday sa palihan.' Ang palikuran ay banyo, ang palengke ay pamilihan."
        },
        "11": {
          "question": "Hindi mo dapat gawing katuwaan ang pagkutya sa kapwa. (Kasingkahulugan ng 'pagkutya')",
          "choices": {
            "A": "pagsumbong",
            "B": "paglibak",
            "C": "pagtampo",
            "D": "pagkurot"
          },
          "correct": "B",
          "reason": "Ang 'pagkutya' ay pang-uuyam o pagmamaliit; kasingkahulugan ang paglibak. Halimbawa: 'Huwag mong libakin ang kapansanan ng iba.'"
        },
        "12": {
          "question": "Ang pag-eensayo ng banda ay nakabubulahaw. (Kasingkahulugan ng 'nakabubulahaw')",
          "choices": {
            "A": "nakaiinis",
            "B": "nakagugulo",
            "C": "nakatutuwa",
            "D": "nakababahala"
          },
          "correct": "B",
          "reason": "Ang 'nakabubulahaw' ay nakaiistorbo at nakagugulo (tulad ng malakas na ingay). Halimbawa: 'Nakabubulahaw ang malakas na videoke sa gabi.' Ang nakaiinis ay malapit din, pero nakagugulo ang pinakamalapit sa diwa ng ingay."
        },
        "13": {
          "question": "Dapat kang magkamal ng salapi sa mabuting paraan lamang. (Kasingkahulugan ng 'magkamal')",
          "choices": {
            "A": "magmana",
            "B": "magnakaw",
            "C": "magtamasa",
            "D": "maghanda"
          },
          "correct": "C",
          "reason": "Ang 'magkamal' ay mag-ipon o magtamo ng marami. Sa mga choices, ang 'magtamasa' ang pinakamalapit sa ideya ng pagtatamo o pagtamasa ng salapi. Halimbawa: 'Nagkamal ng yaman ang negosyante.'"
        },
        "14": {
          "question": "Ilan taon ding siniil ng mga dayuhan ang mga Pilipino. (Kasingkahulugan ng 'siniil')",
          "choices": {
            "A": "tinago",
            "B": "inapi",
            "C": "tinimpi",
            "D": "pinalaya"
          },
          "correct": "B",
          "reason": "Ang 'siniil' ay inapi o inabuso. Halimbawa: 'Siniil ng mga mananakop ang mga katutubo.' Ang pinalaya ay kabaligtaran."
        },
        "15": {
          "question": "Ang anumang alitan ay di dapat hayaang magtagal. (Kasingkahulugan ng 'alitan')",
          "choices": {
            "A": "proyekto",
            "B": "pagkakaibigan",
            "C": "hiniram",
            "D": "bangayan"
          },
          "correct": "D",
          "reason": "Ang 'alitan' ay away o hidwaan, kaya bangayan. Halimbawa: 'Matagal ang alitan ng magkapitbahay.' Ang pagkakaibigan ay kabaligtaran."
        },
        "16": {
          "question": "Laganap ang krisis kaya tayo ay dapat magtipid. (Kasingkahulugan ng 'laganap')",
          "choices": {
            "A": "kalat",
            "B": "kapos",
            "C": "limitado",
            "D": "pantay"
          },
          "correct": "A",
          "reason": "Ang 'laganap' ay kalat sa maraming lugar. Halimbawa: 'Laganap ang dengue tuwing tag-ulan.' Ang kapos at limitado ay tungkol sa kakulangan."
        },
        "17": {
          "question": "Madaling nababalino sa lihis na gawain ang mga kabataang laki sa lansangan. (Kasingkahulugan ng 'nababalino')",
          "choices": {
            "A": "natutuwa",
            "B": "namamalik-mata",
            "C": "nagaganyak",
            "D": "nakaiiwas"
          },
          "correct": "C",
          "reason": "Ang 'nababalino' ay nahihikayat o naaakit (madalas sa masama). Kaya 'nagaganyak.' Halimbawa: 'Nababalino siya sa pagsusugal dahil sa barkada.'"
        },
        "18": {
          "question": "Maraming himutok ang mga manggagawa laban sa kanilang kumpanya gaya ng di pagtaas ng kanilang sahod. (Kasingkahulugan ng 'himutok')",
          "choices": {
            "A": "nais",
            "B": "balakid",
            "C": "kilos",
            "D": "reklamo"
          },
          "correct": "D",
          "reason": "Ang 'himutok' ay hinaing o daing; reklamo. Halimbawa: 'Maraming himutok ang mga manggagawa tungkol sa sahod.'"
        },
        "19": {
          "question": "Walang minimithi ang iyong magulang kung di ang mabigyan ka ng magandang kinabukasan. (Kasingkahulugan ng 'minimithi')",
          "choices": {
            "A": "dinadalangin",
            "B": "ninanais",
            "C": "ikinatutuwa",
            "D": "tinitiis"
          },
          "correct": "B",
          "reason": "Ang 'minimithi' ay ninanais o inaasam. Halimbawa: 'Minimithi niya ang mapayapang buhay.' Ang dinadalangin ay mas espesyal sa panalangin."
        },
        "20": {
          "question": "Iwasang sumugba sa alanganin. (Kasingkahulugan ng 'sumugba')",
          "choices": {
            "A": "sumugod",
            "B": "tumigil",
            "C": "lumayo",
            "D": "lumapit"
          },
          "correct": "A",
          "reason": "Ang 'sumugba' ay sumuong o sumugod nang walang sapat na pag-iingat. Kaya 'sumugod.' Halimbawa: 'Sumugod ang mga bumbero sa nasusunog na bahay.'"
        },
        "21": {
          "question": "Huwag mong pukawin ang batang nahihimlay. (Kasingkahulugan ng 'pukawin')",
          "choices": {
            "A": "libangin",
            "B": "palayain",
            "C": "pigilin",
            "D": "gisingin"
          },
          "correct": "D",
          "reason": "Ang 'pukawin' ay gisingin o pasiglahin. Halimbawa: 'Pukawin ang damdamin ng mga mamamayan.' Ang pinigil at pinalaya ay iba."
        },
        "22": {
          "question": "Hindi ka dapat magmaktol kung ika'y napagsasabihan. (Kasingkahulugan ng 'magmaktol')",
          "choices": {
            "A": "umiyak",
            "B": "magtampo",
            "C": "magdabog",
            "D": "lumayas"
          },
          "correct": "B",
          "reason": "Ang 'magmaktol' ay magalit o magtampo nang may pagmamaktol (nakasimangot). Ang pinakamalapit sa mga choices ay 'magtampo.' Halimbawa: 'Nagmamaktol ang bata dahil hindi binilhan ng laruan.'"
        },
        "23": {
          "question": "Tuwing Marso, ang puno ng mangga ay namumutiktik sa bunga. (Kasingkahulugan ng 'namumutiktik')",
          "choices": {
            "A": "maraming-marami",
            "B": "bilang na bilang",
            "C": "kakaunti",
            "D": "malalaki"
          },
          "correct": "A",
          "reason": "Ang 'namumutiktik' ay punung-puno (lalo na sa bunga o bulaklak). Kaya 'maraming-marami.' Halimbawa: 'Namumutiktik ng bituin ang langit.'"
        },
        "24": {
          "question": "Kumipot ang Maynila sa dami ng taong naninirahan dito. (Kasingkahulugan ng 'kumipot')",
          "choices": {
            "A": "lumuwag",
            "B": "lumaki",
            "C": "sumikip",
            "D": "lumiit"
          },
          "correct": "C",
          "reason": "Ang 'kumipot' ay naging makitid; sa konteksto, sumikip dahil sa dami ng tao. Halimbawa: 'Kumipot ang daan dahil sa mga nakaparadang sasakyan.'"
        },
        "25": {
          "question": "Patang-pata siya nang marating ang tuktok ng bundok Apo. (Kasingkahulugan ng 'patang-pata')",
          "choices": {
            "A": "pagod na pagod",
            "B": "masiglang-masigla",
            "C": "masayang-masaya",
            "D": "hinayang na hinayang"
          },
          "correct": "A",
          "reason": "Ang 'patang-pata' ay pagod na pagod. Halimbawa: 'Patang-pata ako pagkatapos ng biyahe.'"
        }
      }
    },
    {
      "subject": "Filipino",
      "subject_icon": "🇵🇭",
      "topic": "Kasalungat",
      "topic_order": 2,
      "questions": {
        "1": {
          "question": "Ang pag-iibigan nina Florante at Laura ay matimyas. (Kasalungat ng 'matimyas')",
          "choices": {
            "A": "di-magmamaliw",
            "B": "di-totoo",
            "C": "dalisay",
            "D": "wagas"
          },
          "correct": "B",
          "reason": "Ang 'matimyas' ay wagas, dalisay, at tapat (parang tamis ng pag-ibig). Ang kabaligtaran ay 'di-totoo.' Ang di-magmamaliw, dalisay, at wagas ay mga kasingkahulugan. Halimbawa: matimyas na pag-ibig vs. pakitang-taong pag-ibig."
        },
        "2": {
          "question": "Nilalagyan ng pataba ang halaman upang ito'y yumabong. (Kasalungat ng 'yumabong')",
          "choices": {
            "A": "lumago",
            "B": "dumami",
            "C": "malanta",
            "D": "lumiit"
          },
          "correct": "C",
          "reason": "Ang 'yumabong' ay lumago o sumigla (halaman). Ang kabaligtaran ay malanta. Ang lumago at dumami ay kasingkahulugan. Halimbawa: yumabong ang halaman dahil sa pataba vs. nalanta dahil walang tubig."
        },
        "3": {
          "question": "Namamasyal siya sa parke upang mapawi ang lumbay. (Kasalungat ng 'lumbay')",
          "choices": {
            "A": "galak",
            "B": "lungkot",
            "C": "sama ng loob",
            "D": "gulat"
          },
          "correct": "A",
          "reason": "Ang 'lumbay' ay lungkot. Ang kasalungat ay galak (tuwa). Ang lungkot at sama ng loob ay kasingkahulugan. Halimbawa: lumbay sa pagkawala ng alaga vs. galak sa pagbalik niya."
        },
        "4": {
          "question": "Hinintay namin ang pagdaong ng 2GO na barko upang salubungin si Ate. (Kasalungat ng 'pagdaong')",
          "choices": {
            "A": "pag-alis",
            "B": "paglapag",
            "C": "paghimpil",
            "D": "pagtigil"
          },
          "correct": "A",
          "reason": "Ang 'pagdaong' ay pagdating o paghimpil ng barko sa pantalan. Ang kabaligtaran ay pag-alis. Ang paglapag, paghimpil, at pagtigil ay halos magkasingkahulugan ng daong."
        },
        "5": {
          "question": "Palasak na ang paggamit ng kompyuter. (Kasalungat ng 'palasak')",
          "choices": {
            "A": "pambihira",
            "B": "pangkaraniwan",
            "C": "laganap",
            "D": "matipid"
          },
          "correct": "A",
          "reason": "Ang 'palasak' ay karaniwan o laganap. Ang kasalungat ay pambihira (bihira). Ang pangkaraniwan at laganap ay kasingkahulugan. Halimbawa: palasak na cellphone vs. pambihirang bato."
        },
        "6": {
          "question": "Nabahala siya nang dumating ang kanyang amang dalawang taong naghanap-buhay sa ibang bansa. (Kasalungat ng 'nabahala')",
          "choices": {
            "A": "nagulat",
            "B": "nagtaka",
            "C": "natuwa",
            "D": "nahimatay"
          },
          "correct": "C",
          "reason": "Ang 'nabahala' ay nag-alala o naasiwa. Ang kasalungat ay natuwa (kabaligtaran ng pag-aalala). Halimbawa: nabahala sa bagyo vs. natuwa sa regalo."
        },
        "7": {
          "question": "Huwag mong ugaliin ang umalipusta ng iyong kapwa. (Kasalungat ng 'umalipusta')",
          "choices": {
            "A": "laitin",
            "B": "purihin",
            "C": "kagalitan",
            "D": "bastusin"
          },
          "correct": "B",
          "reason": "Ang 'umalipusta' ay humamak o lumait. Ang kabaligtaran ay purihin. Ang laitin, kagalitan, at bastusin ay lahat negatibo, kaya mga kasingkahulugan. Halimbawa: alipustahin ang kapwa vs. purihin ang kapwa."
        },
        "8": {
          "question": "Pahapay na ang mga maliliit na kumpanya dahil sa pagbagsak ng ekonomiya. (Kasalungat ng 'pahapay')",
          "choices": {
            "A": "paunlad",
            "B": "tagilid",
            "C": "pabagsak",
            "D": "pasara"
          },
          "correct": "A",
          "reason": "Ang 'pahapay' ay pababa o humihina ang kalagayan. Ang kasalungat ay paunlad (pataas). Ang tagilid, pabagsak, at pasara ay pare-parehong 'pababa.'"
        },
        "9": {
          "question": "Makapal at magalas ang palad ng mga mason at karpintero. (Kasalungat ng 'magalas')",
          "choices": {
            "A": "mabuto",
            "B": "magaspang",
            "C": "maliksi",
            "D": "makinis"
          },
          "correct": "D",
          "reason": "Ang 'magalas' ay magaspang. Ang kasalungat ay makinis. Ang mabuto at magaspang ay kasingkahulugan. Halimbawa: magalas na palad ng karpintero vs. makinis na palad ng modelo."
        },
        "10": {
          "question": "Masalimuot man ang buhay natin, di tayo dapat mawalan ng pag-asa. (Kasalungat ng 'masalimuot')",
          "choices": {
            "A": "mahirap",
            "B": "magulo",
            "C": "maayos",
            "D": "malungkot"
          },
          "correct": "C",
          "reason": "Ang 'masalimuot' ay magulo at kumplikado. Ang kasalungat ay maayos. Ang mahirap at magulo ay kasingkahulugan. Halimbawa: masalimuot na problema vs. maayos na sitwasyon."
        },
        "11": {
          "question": "Sinaplutan man lamang sana nila ang sanggol bago ito ginamit sa paglilimos. (Kasalungat ng 'sinaplutan')",
          "choices": {
            "A": "binalutan",
            "B": "tinakpan",
            "C": "dinamitan",
            "D": "hinubaran"
          },
          "correct": "D",
          "reason": "Ang 'sinaplutan' ay binalutan o tinakpan ng damit o balabal. Ang kabaligtaran ay hinubaran. Ang binalutan, tinakpan, at dinamitan ay kasingkahulugan."
        },
        "12": {
          "question": "Hindi dapat pagkatiwalaan ang mga taong taksil na mabait lamang kung kaharap mo. (Kasalungat ng 'taksil')",
          "choices": {
            "A": "suwail",
            "B": "matapat",
            "C": "hunghang",
            "D": "matalino"
          },
          "correct": "B",
          "reason": "Ang 'taksil' ay traydor o mapagkanulo. Ang kasalungat ay matapat. Ang suwail ay masuwayin (hindi kabaligtaran); ang hunghang ay mangmang. Halimbawa: taksil na kaibigan vs. matapat na kaibigan."
        },
        "13": {
          "question": "Tila walang kapaguran ang mabungalngal na bibig ni Lina. (Kasalungat ng 'mabungalngal')",
          "choices": {
            "A": "tahimik",
            "B": "masalita",
            "C": "madaldal",
            "D": "masakit"
          },
          "correct": "A",
          "reason": "Ang 'mabungalngal' ay madaldal at maingay magsalita. Ang kasalungat ay tahimik. Ang masalita at madaldal ay kasingkahulugan."
        },
        "14": {
          "question": "Napakukupad ng takbo ng karitela kung ikukumpara sa traysikel at dyip. (Kasalungat ng 'napakukupad')",
          "choices": {
            "A": "napakabilis",
            "B": "napakabagal",
            "C": "napakakuyad",
            "D": "napakadali"
          },
          "correct": "A",
          "reason": "Ang 'kukupad' (mabagal) ay kabaligtaran ng napakabilis. Ang napakabagal at napakakuyad ay kasingkahulugan. Halimbawa: kukupad ang kalabaw vs. napakabilis ang motorsiklo."
        },
        "15": {
          "question": "Patuloy na magdarahop ang taong tamad. (Kasalungat ng 'magdarahop')",
          "choices": {
            "A": "aasenso",
            "B": "maghihikahos",
            "C": "magiging salat",
            "D": "maghihirap"
          },
          "correct": "A",
          "reason": "Ang 'magdarahop' ay maghihirap o magkukulang. Ang kasalungat ay aasenso. Ang maghihikahos, magiging salat, at maghihirap ay kasingkahulugan."
        },
        "16": {
          "question": "Mahirap pakinggan ang sinasabi ng taong garil. (Kasalungat ng 'garil')",
          "choices": {
            "A": "utal",
            "B": "bulol",
            "C": "matalino",
            "D": "matatas"
          },
          "correct": "D",
          "reason": "Ang 'garil' ay bulol o utal magsalita. Ang kasalungat ay matatas (malinaw at maayos magsalita). Ang utal at bulol ay kasingkahulugan."
        },
        "17": {
          "question": "Kumain ka ng masustansyang pagkain nang hindi maging hawas. (Kasalungat ng 'hawas')",
          "choices": {
            "A": "payat",
            "B": "matipuno",
            "C": "manipis",
            "D": "sakitin"
          },
          "correct": "B",
          "reason": "Ang 'hawas' ay payat at mahina ang pangangatawan. Ang kasalungat ay matipuno (malakas at malusog ang katawan). Ang payat at manipis ay kasingkahulugan."
        },
        "18": {
          "question": "Ang labis na pagiging hidhid ay nakasasama rin lalo pa't hindi ka marunong magbigay sa nangangailangan. (Kasalungat ng 'hidhid')",
          "choices": {
            "A": "waldas",
            "B": "kuripot",
            "C": "matipid",
            "D": "mapera"
          },
          "correct": "A",
          "reason": "Ang 'hidhid' ay kuripot o sobrang tipid. Ang kasalungat ay waldas (maaksaya). Ang kuripot at matipid ay kasingkahulugan."
        },
        "19": {
          "question": "Hungkag ang bigasan dahil nasira ng bagyo ang mga palay. (Kasalungat ng 'hungkag')",
          "choices": {
            "A": "salat",
            "B": "puno",
            "C": "bulok",
            "D": "bago"
          },
          "correct": "B",
          "reason": "Ang 'hungkag' ay walang laman. Ang kasalungat ay puno. Ang salat ay kulang. Halimbawa: hungkag na bigasan vs. punong bigasan."
        },
        "20": {
          "question": "Ang mga bulaklak ng orkidya ay naluoy sa tindi ng init. (Kasalungat ng 'naluoy')",
          "choices": {
            "A": "nabulok",
            "B": "natuyo",
            "C": "namukadkad",
            "D": "nalaglag"
          },
          "correct": "C",
          "reason": "Ang 'naluoy' ay nalanta. Ang kasalungat ay namukadkad (bumukadkad ang bulaklak). Ang nabulok, natuyo, at nalaglag ay mga tanda ng pagkasira."
        },
        "21": {
          "question": "Totoo bang walang latoy ang pagkain sa ospital? (Kasalungat ng 'walang latoy')",
          "choices": {
            "A": "walang lasa",
            "B": "walang sangkap",
            "C": "malasa",
            "D": "kakaunti"
          },
          "correct": "C",
          "reason": "Ang 'walang latoy' ay walang lasa. Ang kasalungat ay malasa. Ang walang lasa at walang sangkap ay kasingkahulugan."
        },
        "22": {
          "question": "Hindi nilubayan ng mga manunulat ang pagtatanong sa panauhing pandangal. (Kasalungat ng 'nilubayan')",
          "choices": {
            "A": "tinigilan",
            "B": "iniwasan",
            "C": "dinikitan",
            "D": "pinagpatuloy"
          },
          "correct": "A",
          "reason": "Ang 'nilubayan' ay pinagpatuloy o hindi tinigilan. Ang kasalungat ay tinigilan (huminto). Ang pinagpatuloy ay kasingkahulugan ng nilubayan."
        },
        "23": {
          "question": "Ang mga tirahan ng mayayaman ay maagwat sa isa't isa. (Kasalungat ng 'maagwat')",
          "choices": {
            "A": "hiwa-hiwalay",
            "B": "magkakadikit",
            "C": "layo-layo",
            "D": "maliliit"
          },
          "correct": "B",
          "reason": "Ang 'maagwat' ay may agwat o magkakalayo. Ang kasalungat ay magkakadikit. Ang hiwa-hiwalay at layo-layo ay kasingkahulugan."
        },
        "24": {
          "question": "Maantak ang sugat kapag napatakan ng kalamansi. (Kasalungat ng 'maantak')",
          "choices": {
            "A": "malaki",
            "B": "maliit",
            "C": "manhid",
            "D": "mahapdi"
          },
          "correct": "C",
          "reason": "Ang 'maantak' ay mahapdi o masakit. Ang kasalungat ay manhid (walang nararamdaman). Halimbawa: maantak ang sugat na natatakan ng kalamansi vs. manhid ang paa na hindi na nakakaramdam."
        },
        "25": {
          "question": "Tunay na mabalasik ang leon at ang tigre. (Kasalungat ng 'mabalasik')",
          "choices": {
            "A": "maamo",
            "B": "matapang",
            "C": "masungit",
            "D": "maliit"
          },
          "correct": "A",
          "reason": "Ang 'mabalasik' ay mabangis. Ang kasalungat ay maamo. Ang matapang at masungit ay kasingkahulugan o malapit. Halimbawa: mabalasik na leon vs. maamong tupa."
        }
      }
    },
    {
      "subject": "Filipino",
      "subject_icon": "🇵🇭",
      "topic": "Mga Kawikaan / Sawikain",
      "topic_order": 3,
      "questions": {
        "1": {
          "question": "Nag-alsa balutan ang katulong sa bahay dahil sa kalupitan ng kanyang amo. (Ano ang ibig sabihin ng 'nag-alsa balutan'?)",
          "choices": {
            "A": "nagtampo",
            "B": "lumayas",
            "C": "nagtago",
            "D": "nagmaktol"
          },
          "correct": "B",
          "reason": "Ang 'nag-alsa balutan' ay umalis o lumayas dala ang sariling gamit (karaniwan dahil sa sama ng loob o hindi magandang trato). Halimbawa: 'Nag-alsa balutan ang kasambahay dahil sa pang-aabuso.'"
        },
        "2": {
          "question": "Hindi totoo ang kanyang katapangan sapagkat bahag ang buntot niya sa harap ng paghihirap. (Ano ang ibig sabihin ng 'bahag ang buntot'?)",
          "choices": {
            "A": "malakas ang loob",
            "B": "matapang",
            "C": "duwag",
            "D": "matiyaga"
          },
          "correct": "C",
          "reason": "Ang 'bahag ang buntot' ay duwag, parang asong nakabahag ang buntot kapag natatakot. Halimbawa: 'Bahag ang buntot niya nang makita ang kalaban.'"
        },
        "3": {
          "question": "Dahil sa paulit-ulit na pagsisinungaling, basa ang papel niya sa karamihan. (Ano ang ibig sabihin ng 'basa ang papel'?)",
          "choices": {
            "A": "ayaw nang paniwalaan",
            "B": "ayaw nang pagbigyan",
            "C": "ayaw nang pakinggan",
            "D": "ayaw nang makasama"
          },
          "correct": "A",
          "reason": "Ang 'basa ang papel' ay wala nang tiwala sa kanya ang mga tao. Dahil sa pagsisinungaling, ayaw na siyang paniwalaan. Halimbawa: 'Basa na ang papel mo sa guro dahil laging nandaraya.'"
        },
        "4": {
          "question": "Kumukulo ang dugo ng ina ni Robin sa kanya sapagkat hindi siya nag-aral nang mabuti. (Ano ang ibig sabihin ng 'kumukulo ang dugo'?)",
          "choices": {
            "A": "tuwang-tuwa",
            "B": "galit na galit",
            "C": "lungkot na lungkot",
            "D": "nakapapaso"
          },
          "correct": "B",
          "reason": "Ang 'kumukulo ang dugo' ay galit na galit. Halimbawa: 'Kumukulo ang dugo ko sa ginawa niya.' Ang nakapapaso ay literal na init, hindi damdamin."
        },
        "5": {
          "question": "Di-mahapayang gatang ang pagpapalitan ng kuru-kuro ng mga mambabatas. (Ano ang ibig sabihin ng 'di-mahapayang gatang'?)",
          "choices": {
            "A": "hindi maumpisahan",
            "B": "hindi magulo",
            "C": "hindi masaya",
            "D": "hindi maawat"
          },
          "correct": "D",
          "reason": "Ang 'di-mahapayang gatang' ay hindi maawat o hindi mapigil, karaniwan sa matinding pagtatalo o palitan ng salita. Halimbawa: 'Di-mahapayang gatang ang debate sa Senado.'"
        },
        "6": {
          "question": "Noong panahon ng pananakop ng Kastila, ang mga Pilipino ay hawak sa tainga ng mga ito. (Ano ang ibig sabihin ng 'hawak sa tainga'?)",
          "choices": {
            "A": "sunud-sunuran",
            "B": "katuwang",
            "C": "kakampi",
            "D": "alipin"
          },
          "correct": "A",
          "reason": "Ang 'hawak sa tainga' ay sunud-sunuran o kontrolado ng iba. Halimbawa: 'Hawak sa tainga ng amo ang mga empleyado.' Ang alipin ay mas matindi at hindi eksakto ang kahulugan ng idyoma."
        },
        "7": {
          "question": "Mabulaklak ang landas ng taong masikap. (Ano ang ibig sabihin ng 'mabulaklak ang landas'?)",
          "choices": {
            "A": "malabo ang kinabukasan",
            "B": "makulay ang kinabukasan",
            "C": "magulo ang kinabukasan",
            "D": "maganda ang kinabukasan"
          },
          "correct": "D",
          "reason": "Ang 'mabulaklak ang landas' ay maganda o maginhawa ang daang tatahakin; maganda ang kinabukasan. Halimbawa: 'Mabulaklak ang landas ng masipag mag-aral.'"
        },
        "8": {
          "question": "Maliit ang sisidlan ni Mhon kaya iniiwasan siyang biruin. (Ano ang ibig sabihin ng 'maliit ang sisidlan'?)",
          "choices": {
            "A": "walang lakas-loob",
            "B": "walang galang",
            "C": "walang malay",
            "D": "walang pasensiya"
          },
          "correct": "D",
          "reason": "Ang 'maliit ang sisidlan' (ng pasensya) ay mabilis mainis o walang pasensiya. Halimbawa: 'Maliit ang sisidlan ni Mhon kaya iniiwasang biruin.'"
        },
        "9": {
          "question": "Mahilig kasing magbasa kahit sa madilim si Tina kaya siya ay nagmamatang-manok. (Ano ang ibig sabihin ng 'nagmamatang-manok'?)",
          "choices": {
            "A": "lumiliit ang mata",
            "B": "malabo ang mata",
            "C": "lumuluwa ang mata",
            "D": "kumikislap ang mata"
          },
          "correct": "B",
          "reason": "Ang 'matang-manok' ay malabo ang mata sa dilim (parang manok na hindi nakakakita sa gabi). Halimbawa: 'Nagmamatang-manok si Tina sa kakabasa sa madilim na silid.'"
        },
        "10": {
          "question": "Kung minsan, inggit ang nagiging dahilan sa pagsasaulian ng kandila. (Ano ang ibig sabihin ng 'pagsasaulian ng kandila'?)",
          "choices": {
            "A": "pagkasira ng tiwala",
            "B": "pagkasira ng pamilya",
            "C": "pagkasira ng pagkakaibigan",
            "D": "pagkasira ng lipunan"
          },
          "correct": "C",
          "reason": "Ang 'magsaulian ng kandila' ay magkaaway o masira ang samahan (lalo ng magkaibigan o magkakamag-anak). Halimbawa: 'Nagsaulian sila ng kandila dahil sa inggit.'"
        },
        "11": {
          "question": "Pabalat-bunga lang pala ang pagiging bukas-palad niya; may pulitikal pala itong kadahilanan kaya siya mapagbigay. (Ano ang ibig sabihin ng 'pabalat-bunga'?)",
          "choices": {
            "A": "taos-puso",
            "B": "pakunwari",
            "C": "pasikreto",
            "D": "sapilitan"
          },
          "correct": "B",
          "reason": "Ang 'pabalat-bunga' ay pakunwari lang, hindi tapat. Halimbawa: 'Pabalat-bunga ang kanyang pakikiramay.' Ang taos-puso ay kabaligtaran."
        },
        "12": {
          "question": "Tiklop-tuhod ang akusado na siya ay patawarin ng biktima. (Ano ang ibig sabihin ng 'tiklop-tuhod'?)",
          "choices": {
            "A": "nagkukunwari",
            "B": "nananakot",
            "C": "nagmamakaawa",
            "D": "gumagapang"
          },
          "correct": "C",
          "reason": "Ang 'tiklop-tuhod' ay nagmamakaawa (lumuhod para humingi ng awa). Halimbawa: 'Tiklop-tuhod siyang humingi ng tawad.'"
        },
        "13": {
          "question": "Ni ayaw man lamang humarap sa tao ang talo-saling na si Eula. (Ano ang ibig sabihin ng 'talo-saling'?)",
          "choices": {
            "A": "masungit",
            "B": "isnabera",
            "C": "mahiyain",
            "D": "pangit"
          },
          "correct": "C",
          "reason": "Ang 'talo-saling' ay tumutukoy sa taong mahiyain o ayaw humarap sa mga tao. Halimbawa: 'Talo-saling si Eula kaya hindi siya sumasama sa handaan.'"
        },
        "14": {
          "question": "Di dapat tularan ang mga taong walang kusang-palo. (Ano ang ibig sabihin ng 'walang kusang-palo'?)",
          "choices": {
            "A": "walang kusang-loob",
            "B": "walang bait sa sarili",
            "C": "walang nalalaman",
            "D": "walang direksiyon"
          },
          "correct": "A",
          "reason": "Ang 'walang kusang-palo' ay walang kusang-loob; kumikilos lang kapag inutusan o pinilit. Halimbawa: 'Walang kusang-palo ang batang puro utos ang hinihintay.'"
        },
        "15": {
          "question": "Hindi tama ang ika'y walang lingon-likod. Dapat ay suklian ang kabutihan ng iba sa iyo. (Ano ang ibig sabihin ng 'walang lingon-likod'?)",
          "choices": {
            "A": "mayabang",
            "B": "mapagmataas",
            "C": "walang utang na loob",
            "D": "walang pagkakautang"
          },
          "correct": "C",
          "reason": "Ang 'walang lingon-likod' ay walang utang na loob (hindi lumilingon sa pinanggalingan o sa tumulong). Hindi ito yabang (A, B) o utang na pera (D)."
        },
        "16": {
          "question": "Makapigil-hininga ang pelikulang Muro Ami. (Ano ang ibig sabihin ng 'makapigil-hininga'?)",
          "choices": {
            "A": "nakasasabik",
            "B": "nakaaantok",
            "C": "nakaiinis",
            "D": "nakasusuya"
          },
          "correct": "A",
          "reason": "Ang 'makapigil-hininga' ay nakasasabik o nakakakaba kaya natitigilan ang paghinga. Halimbawa: 'Makapigil-hininga ang huling bahagi ng pelikula.' Ang nakaaantok ay kabaligtaran."
        },
        "17": {
          "question": "Halang ang kaluluwa ng taong gumagawa ng karumal-dumal na krimen. (Ano ang ibig sabihin ng 'halang ang kaluluwa'?)",
          "choices": {
            "A": "mabait",
            "B": "bastos",
            "C": "maitim ang budhi",
            "D": "matapang"
          },
          "correct": "C",
          "reason": "Ang 'halang ang kaluluwa' ay masama ang budhi o malupit. Kaya 'maitim ang budhi.' Halimbawa: 'Halang ang kaluluwa ng mamamatay-tao.'"
        },
        "18": {
          "question": "Di-maliparan ng uwak ang lupain ng mga Aquino sa Tarlac. (Ano ang ibig sabihin ng 'di-maliparan ng uwak'?)",
          "choices": {
            "A": "napakaliit",
            "B": "napakalawak",
            "C": "napakarami",
            "D": "napakasikip"
          },
          "correct": "B",
          "reason": "Ang 'di-maliparan ng uwak' ay napakalawak, sobrang laki na hindi malilipad ng uwak ang buong lawak. Halimbawa: 'Di-maliparan ng uwak ang lupain ng haciendero.'"
        },
        "19": {
          "question": "Makunat pa sa patola si Lola Rosa kaya uugud-ugod na. (Ano ang ibig sabihin ng 'makunat pa sa patola'?)",
          "choices": {
            "A": "masayahin pa",
            "B": "masigla pa",
            "C": "mukhang bata",
            "D": "napakatanda na"
          },
          "correct": "D",
          "reason": "Ang 'makunat pa sa patola' ay napakatanda na, matigas o tuyot na parang sobrang hinog na patola. Halimbawa: 'Makunat na sa patola si Lolo, pero malakas pa.'"
        },
        "20": {
          "question": "Nilubugan ng araw ang mga taong nasalanta ng bagyo ang mga tirahan. (Ano ang ibig sabihin ng 'nilubugan ng araw'?)",
          "choices": {
            "A": "nawalan ng pag-asa",
            "B": "dumilim ang paligid",
            "C": "naputulan ng kuryente",
            "D": "naghirap"
          },
          "correct": "A",
          "reason": "Ang 'nilubugan ng araw' ay nawalan ng pag-asa (parang wala nang liwanag sa hinaharap). Halimbawa: 'Nilubugan ng araw ang mga biktima nang matangay ng baha ang bahay nila.'"
        },
        "21": {
          "question": "Hindi mo matatagpuan sa kanilang bahay si Cecile, palibhasa ay may puyo sa talampakan. (Ano ang ibig sabihin ng 'may puyo sa talampakan'?)",
          "choices": {
            "A": "mahilig matulog",
            "B": "mahilig mamasyal",
            "C": "mahilig tumakbo",
            "D": "mahilig mag-aral"
          },
          "correct": "B",
          "reason": "Ang 'may puyo sa talampakan' ay mahilig gumala o mamasyal at hindi mapirmi sa bahay. Halimbawa: 'May puyo sa talampakan si Cecile, laging nasa labas.'"
        },
        "22": {
          "question": "Binata na si JB kaya siya ay naniningalang-pugad na. (Ano ang ibig sabihin ng 'naniningalang-pugad'?)",
          "choices": {
            "A": "ninigarilyo",
            "B": "nababarkada",
            "C": "nanliligaw",
            "D": "naninirahan nang mag-isa"
          },
          "correct": "C",
          "reason": "Ang 'naniningalang-pugad' ay nanliligaw (naghahanap ng mapapangasawa). Halimbawa: 'Naniningalang-pugad na si JB sa kanilang kapitbahay.'"
        },
        "23": {
          "question": "Malimit na may kabanggaan si Malou sa opisina dahil maanghang ang kanyang dila. (Ano ang ibig sabihin ng 'maanghang ang dila'?)",
          "choices": {
            "A": "pikon",
            "B": "walang pakialam",
            "C": "masakit magsalita",
            "D": "masayahin"
          },
          "correct": "C",
          "reason": "Ang 'maanghang ang dila' ay masakit magsalita o matalas ang bibig. Halimbawa: 'Maanghang ang dila ni Malou kaya maraming nakakaaway.'"
        },
        "24": {
          "question": "Di napaunlakan ni Ana ang imbitasyong manood sila ng sine sapagkat butas ang kanyang bulsa. (Ano ang ibig sabihin ng 'butas ang bulsa'?)",
          "choices": {
            "A": "sira ang pantalon",
            "B": "walang pera",
            "C": "nagtitipid",
            "D": "walang panahon"
          },
          "correct": "B",
          "reason": "Ang 'butas ang bulsa' ay walang pera. Halimbawa: 'Butas ang bulsa ko ngayon kaya hindi ako makasama.' Hindi literal na sira ang pantalon."
        },
        "25": {
          "question": "Si Karl ay nagtataingang-kawali. Animo'y wala siyang naririnig kahit tinatawag na. (Ano ang ibig sabihin ng 'nagtataingang-kawali'?)",
          "choices": {
            "A": "matigas ang tainga",
            "B": "mahina ang pandinig",
            "C": "barado ang tainga",
            "D": "nagbibingi-bingihan"
          },
          "correct": "D",
          "reason": "Ang 'nagtataingang-kawali' ay nagbibingi-bingihan, nagkukunwaring hindi naririnig. Halimbawa: 'Nagtataingang-kawali siya kahit paulit-ulit siyang tinatawag.'"
        }
      }
    },
    {
      "subject": "Filipino",
      "subject_icon": "🇵🇭",
      "topic": "Wastong Gamit",
      "topic_order": 4,
      "questions": {
        "1": {
          "question": "Katungkulan ___ sinuman ang tumulong sa kanyang kapwa.",
          "choices": {
            "A": "nang",
            "B": "ng",
            "C": "namin",
            "D": "natin"
          },
          "correct": "B",
          "reason": "Ginagamit ang 'ng' para sa pagmamay-ari o pag-uugnay ng pangngalan (katungkulan ng sinuman). Ang 'nang' ay para sa oras, paraan, o kaya pagkatapos ng pandiwa. Halimbawa: 'Aklat ng guro' (pag-aari)."
        },
        "2": {
          "question": "___ ko kay Inay ang mga kaganapan sa aming paaralan sa isang buong papel.",
          "choices": {
            "A": "Isinulat",
            "B": "Isinabi",
            "C": "Sinulat",
            "D": "Sinabi"
          },
          "correct": "A",
          "reason": "Ang 'Isinulat' (i- + sulat) ay tumutukoy sa bagay na isinulat para kay Inay (focus sa bagay). Mali ang 'Sinulat' (hindi karaniwan) at ang isinabi/sinabi ay pasalita, hindi pasulat."
        },
        "3": {
          "question": "Ang ___ ng mga manlalaro ay dininig ng komite kahapon.",
          "choices": {
            "A": "pakiusapan",
            "B": "pakikipag-usap",
            "C": "ipakiusap",
            "D": "pakiusap"
          },
          "correct": "D",
          "reason": "Ang 'pakiusap' ay pangngalan (request). Ang pakiusapan at ipakiusap ay pandiwa. Halimbawa: 'Ang pakiusap ng mga manlalaro' (hiling nila)."
        },
        "4": {
          "question": "Nagulat ang mga tao ___ mabalitaan ang kaguluhang nagaganap sa Mindanao.",
          "choices": {
            "A": "nang",
            "B": "ng",
            "C": "noon",
            "D": "datapwat"
          },
          "correct": "A",
          "reason": "Ang 'nang' ay ginagamit bilang 'noong' o 'when' (nagulat nang mabalitaan). Ang 'ng' ay hindi ginagamit bilang pang-ugnay ng ganitong uri."
        },
        "5": {
          "question": "___ mo si Chin ng damit sa kabinet.",
          "choices": {
            "A": "Kunin",
            "B": "Utusan",
            "C": "Hanapan",
            "D": "Hanapin"
          },
          "correct": "C",
          "reason": "Ang 'hanapan' ay maghanap para sa isang tao ('Hanapan mo si Chin ng damit'). Ang 'hanapin' ay hanapin ang isang bagay mismo. Kaya may tatanggap (si Chin) at bagay (damit): hanapan."
        },
        "6": {
          "question": "___ suliranin ng pagtaas ng presyo ng gasolina ang pinakapaksa ng pulong sa kasalukuyan.",
          "choices": {
            "A": "Hinggil kay",
            "B": "Ayon kay",
            "C": "Hinggil sa",
            "D": "Ayon sa"
          },
          "correct": "C",
          "reason": "Ang 'hinggil sa' ay para sa bagay, ideya, o paksa (hinggil sa suliranin). Ang 'kay' ay para sa tao. Halimbawa: 'Hinggil kay Rizal' (tao) vs. 'hinggil sa kahirapan' (paksa)."
        },
        "7": {
          "question": "Ang paglalakbay ___ Magellan noong 1521 ang naging dahilan kung bakit nakilala ang Pilipinas sa ibang bansa.",
          "choices": {
            "A": "ni",
            "B": "daw",
            "C": "sa",
            "D": "para kay"
          },
          "correct": "A",
          "reason": "Ang 'ni' ay para sa pangalan ng tao bilang may-ari o gumawa (paglalakbay ni Magellan). Ang 'kay' ay para sa pangalan ng tao na tumatanggap o patutunguhan."
        },
        "8": {
          "question": "Ang pagkakalat o pagtatapon sa kung saan-saan ay ___ batas.",
          "choices": {
            "A": "sang-ayon",
            "B": "hinggil sa",
            "C": "laban sa",
            "D": "labag sa"
          },
          "correct": "D",
          "reason": "Ang 'labag sa batas' ay ilegal. Ang laban sa ay 'against' (hal. laban sa kahirapan). Ang hinggil sa ay 'tungkol sa,' at ang sang-ayon ay 'alinsunod.'"
        },
        "9": {
          "question": "Pinatay ___ mga Hapones si Jose Abad Santos nang tanggihan niyang ibunyag ang lihim ng mga kilusang Pilipino laban sa kanila.",
          "choices": {
            "A": "namin",
            "B": "ng",
            "C": "nang",
            "D": "noong"
          },
          "correct": "B",
          "reason": "Ang 'ng' ay panandang pang-ukol ng gumagawa sa pandiwang pasibo (pinatay ng mga Hapones). Ang 'nang' ay hindi ginagamit dito."
        },
        "10": {
          "question": "___ mo naman sa kanila na magdala ng mapagsasaluhan.",
          "choices": {
            "A": "Usapin",
            "B": "Usap-Usapan",
            "C": "Ipakiusap",
            "D": "Pakiusap"
          },
          "correct": "C",
          "reason": "Ang 'ipakiusap' ay pakiusapan para sa iba (magpaabot ng hiling). Kaya 'Ipakiusap mo naman sa kanila.' Ang pakiusap ay pangngalan at ang usapin ay isyu."
        },
        "11": {
          "question": "___ G. at Gng. Reyes, matagal na nilang pinag-iipunan ang pangtustos sa pag-aaral mo sa kolehiyo.",
          "choices": {
            "A": "Ayon sa",
            "B": "Ayon kay",
            "C": "Ayon kina",
            "D": "Sang-ayon kina"
          },
          "correct": "C",
          "reason": "Ang 'kina' ay para sa maramihang tao (G. at Gng. Reyes), kapalit ng 'kay.' Ang 'ayon sa' ay para sa bagay o institusyon. Halimbawa: 'Ayon kina Ana at Ben.'"
        },
        "12": {
          "question": "___ ni Emilio Jacinto ang Kartilya na naglalaman ng adhikain ng Katipunan.",
          "choices": {
            "A": "Winika",
            "B": "Sinulatan",
            "C": "Isinabi",
            "D": "Nalaman"
          },
          "correct": "A",
          "reason": "Ang 'winika' ay sinabi (pormal, pampanitikan). Ayon sa key, ito ang pinakaangkop. Paalala: mas natural sana ang 'isinulat,' pero hindi ito kasama sa mga choices. Halimbawa: 'Winika ni Rizal ang mga makasaysayang salita.'"
        },
        "13": {
          "question": "Dumating ang Lola ___ kami'y nagdiwang.",
          "choices": {
            "A": "kaya",
            "B": "kung",
            "C": "marahil",
            "D": "siguro"
          },
          "correct": "A",
          "reason": "Ang 'kaya' ay 'therefore' o 'kaya naman' (dahilan-bunga): dumating ang Lola kaya nagdiwang kami. Ang kung, marahil, at siguro ay hindi nagpapakita ng sanhi at bunga."
        },
        "14": {
          "question": "Ang pagbabara ng mga estero ay dulot ___ walang pakundangang pagtatapon ng basura.",
          "choices": {
            "A": "rin",
            "B": "ng",
            "C": "natin",
            "D": "nila"
          },
          "correct": "B",
          "reason": "Ang 'dulot ng' ay 'caused by.' Ang 'ng' ay ginagamit para sa kaugnay na pangngalan. Halimbawa: 'Baha ang dulot ng bagyo.'"
        },
        "15": {
          "question": "___ maaari ay magtipid tayo nang husto.",
          "choices": {
            "A": "Kung",
            "B": "Dahil",
            "C": "Bagamat",
            "D": "Mandin"
          },
          "correct": "A",
          "reason": "Ang 'Kung maaari' ay 'if possible.' Ang dahil at bagamat ay hindi akma sa kondisyon. Halimbawa: 'Kung maaari, mauna ka na.'"
        },
        "16": {
          "question": "Mapadali ang ating gawain ___ tayo ay magtutulung-tulungan.",
          "choices": {
            "A": "upang",
            "B": "kung",
            "C": "kahit",
            "D": "ngunit"
          },
          "correct": "B",
          "reason": "Ang 'kung' ay pang-ugnay ng kondisyon (if). 'Mapadali ang gawain kung magtutulungan.' Ang kahit at ngunit ay pangkontra; ang upang ay layunin."
        },
        "17": {
          "question": "Masaya sila ___ napakaraming pagsubok ang dumarating sa kanilang pamilya.",
          "choices": {
            "A": "sapagkat",
            "B": "marahil",
            "C": "kahit",
            "D": "kung"
          },
          "correct": "C",
          "reason": "Ang 'kahit' ay 'even though' (pangkontra): masaya sila kahit maraming pagsubok. Ang sapagkat ay nagbibigay ng dahilan, kaya hindi akma."
        },
        "18": {
          "question": "___ pagod na pagod na sa biyahe si Rey ay nagawa pa rin niya ang mag-aral.",
          "choices": {
            "A": "Bagaman",
            "B": "Maliban",
            "C": "Samakatwid",
            "D": "Maging"
          },
          "correct": "A",
          "reason": "Ang 'bagaman' ay 'although.' Bagaman pagod si Rey, nag-aral pa rin siya. Ang maliban ay 'except,' at ang samakatwid ay 'therefore.'"
        },
        "19": {
          "question": "Patuloy tayong maghahalinhinan sa pagroronda ___ di pa nahuhuli ang magnanakaw.",
          "choices": {
            "A": "samantala",
            "B": "hanggang",
            "C": "palibhasa",
            "D": "bagaman"
          },
          "correct": "B",
          "reason": "Ang 'hanggang' ay 'until.' Patuloy na magroronda hanggang di pa nahuhuli ang magnanakaw. Ang samantala ay 'while,' at ang palibhasa ay 'because (of course).'"
        },
        "20": {
          "question": "Nagtatalon sa tuwa si Regina ___ mapanalunan ang patimpalak sa pagsusulat ng maikling kuwento.",
          "choices": {
            "A": "subalit",
            "B": "disin sana'y",
            "C": "nang",
            "D": "ng"
          },
          "correct": "C",
          "reason": "Ang 'nang' ay 'when': nagtatalon sa tuwa nang mapanalunan. Ang 'ng' ay hindi pang-ugnay ng pangyayari. Ang subalit ay 'but.'"
        },
        "21": {
          "question": "Hindi maaaring ibilanggo ang sinuman dahil ___ kanyang pagkakautang.",
          "choices": {
            "A": "na",
            "B": "ng",
            "C": "nang",
            "D": "sa"
          },
          "correct": "D",
          "reason": "Ang 'dahil sa' ay 'because of' kapag may pangngalan na kasunod (dahil sa kanyang pagkakautang). Ang dahil ay 'because' na sinusundan ng buong sugnay."
        },
        "22": {
          "question": "Nagpapatugtog sila ___ awiting Pilipino.",
          "choices": {
            "A": "sa",
            "B": "nang",
            "C": "ng",
            "D": "na"
          },
          "correct": "C",
          "reason": "Ang 'ng' ay naghahatid ng layon ng pandiwa (nagpapatugtog ng awiting Pilipino). Ang 'nang' ay para sa paraan o oras (hal. kumain nang mabilis)."
        },
        "23": {
          "question": "Ang ___ ng mga mamamayan na huwag munang magtaas ng presyo ng langis ay pinag-aaralan ng kinauukulan.",
          "choices": {
            "A": "usapin",
            "B": "pakiusapan",
            "C": "ipakiusap",
            "D": "pakiusap"
          },
          "correct": "D",
          "reason": "Ang 'pakiusap' ay pangngalan (request). Ang pakiusap ng mga mamamayan ay pinag-aaralan. Ang usapin ay isyu, at ang pakiusapan at ipakiusap ay pandiwa."
        },
        "24": {
          "question": "Hindi ___ nabibigyang lunas ang sakit na AIDS sa ngayon.",
          "choices": {
            "A": "pa",
            "B": "na",
            "C": "sa",
            "D": "ka"
          },
          "correct": "A",
          "reason": "Ang 'pa' ay nangangahulugang hanggang ngayon ay hindi pa (not yet). Ang 'na' ay 'already.' Kaya 'Hindi pa nabibigyang lunas ang AIDS.'"
        },
        "25": {
          "question": "___ bang suliranin na hindi kayang lutasin?",
          "choices": {
            "A": "May",
            "B": "Mayroon",
            "C": "Sino",
            "D": "Anong"
          },
          "correct": "B",
          "reason": "Ang 'Mayroon' ay ginagamit bago ang 'ba' (enclitic). Halimbawa: 'Mayroon ba?' Ang 'May' ay karaniwang sinusundan ng pangngalan (may aso). Ang sino at anong ay panghalip pananong."
        },
        "26": {
          "question": "___ patimpalak sa Balagtasan na gaganapin sa plasa.",
          "choices": {
            "A": "May",
            "B": "Mayroon",
            "C": "Anong",
            "D": "Bakit"
          },
          "correct": "A",
          "reason": "Ang 'May' ay ginagamit kapag ang kasunod ay pangngalan (may patimpalak). Halimbawa: 'May pagsusulit bukas.' Ang mayroon ay para sa tanong o sagot na mag-isa."
        },
        "27": {
          "question": "___ ba nagkaroon ng isang bulkan?",
          "choices": {
            "A": "Sino",
            "B": "Alin",
            "C": "Ano",
            "D": "Paano"
          },
          "correct": "D",
          "reason": "Ang 'Paano' ay 'how.' Paano nagkaroon ng bulkan? Ang sino ay tao, ang alin ay pagpili, at ang ano ay bagay."
        },
        "28": {
          "question": "___ natin ang ating kapwang nangangailangan ng tulong.",
          "choices": {
            "A": "Abutan",
            "B": "Kunin",
            "C": "Abutin",
            "D": "Kunan"
          },
          "correct": "A",
          "reason": "Ang 'abutan' ay magbigay ng tulong o bagay sa isang tao. Ang 'abutin' ay abutin ang bagay (hal. abutin ang kisame). Halimbawa: 'Abutan natin ng pagkain ang mahihirap.'"
        },
        "29": {
          "question": "Huwag mong ___ ang sinumang nasa kapangyarihan kung nais mo lamang makakuha ng pabor.",
          "choices": {
            "A": "abutin",
            "B": "abutan",
            "C": "kunin",
            "D": "kunan"
          },
          "correct": "B",
          "reason": "Ang 'abutan' ay magbigay (dito, suhulan o bigyan ng regalo para sa pabor). Ang abutin ay abutin ang bagay. Kaya 'Huwag mong abutan ang sinumang nasa kapangyarihan.'"
        },
        "30": {
          "question": "___ mo ang mabibigat na dalahin ng Inay.",
          "choices": {
            "A": "Abutan",
            "B": "Tanawin",
            "C": "Kunin",
            "D": "Kunan"
          },
          "correct": "C",
          "reason": "Ang 'kunin' ay kunin ang bagay mismo (kunin ang dalahin). Ang 'kunan' ay kumuha mula sa isang tao o lugar, at ang abutan ay magbigay."
        }
      }
    }
  ]
}```

