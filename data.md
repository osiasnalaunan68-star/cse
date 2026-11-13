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

## File: ./frontend/src/data/quiz/cse-quiz-imported-2026-11-13 (1).json
```
{
  "format": "cse-quiz",
  "version": 1,
  "exportedAt": "2026-11-13T12:44:45.440Z",
  "topics": [
    {
      "subject": "Verbal Ability",
      "subject_icon": "📖",
      "topic": "Vocabulary",
      "topic_order": 1,
      "questions": {
        "1": {
          "question": "The manager made a lucrative business proposal that benefited all partners. (Choose the closest meaning of 'lucrative')",
          "choices": {
            "A": "risky",
            "B": "profitable",
            "C": "complex",
            "D": "temporary"
          },
          "correct": "B",
          "reason": "Ang \"lucrative\" ay nangangahulugang kumikita o nagbibigay ng malaking tubo (profitable)."
        },
        "2": {
          "question": "Her meticulous attention to detail ensured there were no errors in the final report. (Choose the closest meaning of 'meticulous')",
          "choices": {
            "A": "careless",
            "B": "hasty",
            "C": "thorough",
            "D": "casual"
          },
          "correct": "C",
          "reason": "Ang \"meticulous\" ay ibig sabihin ay sobrang busisi, maingat, at masusi (thorough/detailed)."
        },
        "3": {
          "question": "The politician's ambiguous statement left the reporters confused about his true stance. (Choose the closest meaning of 'ambiguous')",
          "choices": {
            "A": "clear",
            "B": "straightforward",
            "C": "vague",
            "D": "honest"
          },
          "correct": "C",
          "reason": "Ang \"ambiguous\" ay may dalawa o higit pang kahulugan o malabo (vague/unclear)."
        },
        "4": {
          "question": "Despite facing numerous hardships, she remained resilient and achieved her goals. (Choose the closest meaning of 'resilient')",
          "choices": {
            "A": "fragile",
            "B": "flexible",
            "C": "persistent",
            "D": "weak"
          },
          "correct": "C",
          "reason": "Ang \"resilient\" ay ang kakayahang bumangon muli o magpatuloy sa kabila ng pagsubok (persistent/strong)."
        },
        "5": {
          "question": "The CEO decided to mitigate the risks by hiring an external auditor. (Choose the closest meaning of 'mitigate')",
          "choices": {
            "A": "increase",
            "B": "evaluate",
            "C": "lessen",
            "D": "ignore"
          },
          "correct": "C",
          "reason": "Ang \"mitigate\" ay nangangahulugang bawasan ang tindi o epekto ng isang masamang bagay (lessen/reduce)."
        },
        "6": {
          "question": "His audacious plan to climb the mountain without oxygen amazed everyone. (Choose the closest meaning of 'audacious')",
          "choices": {
            "A": "timid",
            "B": "bold",
            "C": "foolish",
            "D": "cautious"
          },
          "correct": "B",
          "reason": "Ang \"audacious\" ay matapang, mapangahas, o daring (bold/fearless)."
        },
        "7": {
          "question": "The committee reached a consensus after hours of intense debate. (Choose the closest meaning of 'consensus')",
          "choices": {
            "A": "disagreement",
            "B": "deadlock",
            "C": "agreement",
            "D": "compromise"
          },
          "correct": "C",
          "reason": "Ang \"consensus\" ay pangkalahatang kasunduan ng grupo (general agreement)."
        },
        "8": {
          "question": "The museum houses a collection of ancient artifacts dating back to the Stone Age. (Choose the closest meaning of 'ancient')",
          "choices": {
            "A": "modern",
            "B": "antique",
            "C": "replica",
            "D": "broken"
          },
          "correct": "B",
          "reason": "Ang \"ancient\" ay napakaluma o sinauna (antique/very old)."
        },
        "9": {
          "question": "She showed great candor when she admitted her mistake during the meeting. (Choose the closest meaning of 'candor')",
          "choices": {
            "A": "dishonesty",
            "B": "shyness",
            "C": "frankness",
            "D": "arrogance"
          },
          "correct": "C",
          "reason": "Ang \"candor\" ay pagiging tapat at prangka sa pagsasalita (frankness/openness)."
        },
        "10": {
          "question": "The teacher gave a concise explanation, making the complex topic easy to understand. (Choose the closest meaning of 'concise')",
          "choices": {
            "A": "lengthy",
            "B": "brief",
            "C": "complicated",
            "D": "boring"
          },
          "correct": "B",
          "reason": "Ang \"concise\" ay maikli ngunit siksik at malinaw (brief and clear)."
        },
        "11": {
          "question": "His frugal lifestyle allowed him to save enough money to buy a house. (Choose the closest meaning of 'frugal')",
          "choices": {
            "A": "extravagant",
            "B": "wasteful",
            "C": "thrifty",
            "D": "greedy"
          },
          "correct": "C",
          "reason": "Ang \"frugal\" ay matipid sa pera o resources (thrifty/wise spender)."
        },
        "12": {
          "question": "The heavy rain hindered the rescue operations in the flooded town. (Choose the closest meaning of 'hindered')",
          "choices": {
            "A": "delayed",
            "B": "helped",
            "C": "accelerated",
            "D": "guided"
          },
          "correct": "A",
          "reason": "Ang \"hinder\" ay nagpapatagal, pumipigil, o humahadlang sa isang gawain (delayed/obstructed)."
        },
        "13": {
          "question": "The detective found tangible evidence linking the suspect to the crime scene. (Choose the closest meaning of 'tangible')",
          "choices": {
            "A": "imaginary",
            "B": "concrete",
            "C": "invisible",
            "D": "weak"
          },
          "correct": "B",
          "reason": "Ang \"tangible\" ay nahahawakan, totoo, o konkretong ebidensya (real/concrete)."
        },
        "14": {
          "question": "Local residents expressed apathy toward the upcoming local elections, showing low voter turnout. (Choose the closest meaning of 'apathy')",
          "choices": {
            "A": "enthusiasm",
            "B": "indifference",
            "C": "anger",
            "D": "support"
          },
          "correct": "B",
          "reason": "Ang \"apathy\" ay kawalan ng interes o pakialam sa mga nangyayari (indifference)."
        },
        "15": {
          "question": "The novice programmer struggled with the advanced coding syntax. (Choose the closest meaning of 'novice')",
          "choices": {
            "A": "expert",
            "B": "beginner",
            "C": "veteran",
            "D": "master"
          },
          "correct": "B",
          "reason": "Ang \"novice\" ay baguhan o wala pang masyadong karanasan (beginner)."
        },
        "16": {
          "question": "The ubiquitous presence of smartphones has changed how people communicate. (Choose the closest meaning of 'ubiquitous')",
          "choices": {
            "A": "rare",
            "B": "limited",
            "C": "omnipresent",
            "D": "hidden"
          },
          "correct": "C",
          "reason": "Ang \"ubiquitous\" ay nangangahulugang laging nakikita o laganap kahit saan (found everywhere/omnipresent)."
        },
        "17": {
          "question": "She made a prudent decision to invest in government bonds rather than high-risk stocks. (Choose the closest meaning of 'prudent')",
          "choices": {
            "A": "foolish",
            "B": "wise",
            "C": "reckless",
            "D": "hasty"
          },
          "correct": "B",
          "reason": "Ang \"prudent\" ay matalino, maingat, at may magandang pagpapasiya (wise/sensible)."
        },
        "18": {
          "question": "The ephemeral beauty of the sunset lasted only a few minutes. (Choose the closest meaning of 'ephemeral')",
          "choices": {
            "A": "eternal",
            "B": "fleeting",
            "C": "bright",
            "D": "dull"
          },
          "correct": "B",
          "reason": "Ang \"ephemeral\" ay panandalian o mabilis mawala (fleeting/short-lived)."
        },
        "19": {
          "question": "His gregarious personality makes him the life of every party. (Choose the closest meaning of 'gregarious')",
          "choices": {
            "A": "antisocial",
            "B": "shy",
            "C": "outgoing",
            "D": "quiet"
          },
          "correct": "C",
          "reason": "Ang \"gregarious\" ay palakaibigan at mahilig makisalamuha (sociable/outgoing)."
        },
        "20": {
          "question": "The company faced a severe financial crisis after the market crash. (Choose the closest meaning of 'severe')",
          "choices": {
            "A": "mild",
            "B": "minor",
            "C": "serious",
            "D": "brief"
          },
          "correct": "C",
          "reason": "Ang \"severe\" ay malubha o matindi (serious/grave)."
        },
        "21": {
          "question": "The paucity of medical supplies caused panic among the patients. (Choose the closest meaning of 'paucity')",
          "choices": {
            "A": "abundance",
            "B": "scarcity",
            "C": "quality",
            "D": "cost"
          },
          "correct": "B",
          "reason": "Ang \"paucity\" ay kakulangan o kakaunti (scarcity/lack)."
        },
        "22": {
          "question": "The artist used vibrant colors to make the painting look lively. (Choose the closest meaning of 'vibrant')",
          "choices": {
            "A": "dull",
            "B": "bright",
            "C": "dark",
            "D": "faded"
          },
          "correct": "B",
          "reason": "Ang \"vibrant\" ay makulay, masigla, at matingkad (bright and full of life)."
        },
        "23": {
          "question": "It is mandatory for all government employees to wear their proper uniform. (Choose the closest meaning of 'mandatory')",
          "choices": {
            "A": "optional",
            "B": "required",
            "C": "prohibited",
            "D": "recommended"
          },
          "correct": "B",
          "reason": "Ang \"mandatory\" ay sapilitan o kailangang sundin (required/compulsory)."
        },
        "24": {
          "question": "The benevolent donor gave millions of pesos to orphanages. (Choose the closest meaning of 'benevolent')",
          "choices": {
            "A": "cruel",
            "B": "selfish",
            "C": "kind",
            "D": "greedy"
          },
          "correct": "C",
          "reason": "Ang \"benevolent\" ay mapagkawanggawa at mabait (kind-hearted/charitable)."
        },
        "25": {
          "question": "The teacher's lucid explanation helped the students grasp the algebra formula. (Choose the closest meaning of 'lucid')",
          "choices": {
            "A": "confusing",
            "B": "clear",
            "C": "vague",
            "D": "lengthy"
          },
          "correct": "B",
          "reason": "Ang \"lucid\" ay malinaw at madaling intindihin (clear and easily understood)."
        },
        "26": {
          "question": "The old bridge is obsolete and needs to be replaced by a modern structure. (Choose the closest meaning of 'obsolete')",
          "choices": {
            "A": "modern",
            "B": "outdated",
            "C": "functional",
            "D": "sturdy"
          },
          "correct": "B",
          "reason": "Ang \"obsolete\" ay lipas na sa panahon o hindi na ginagamit (outdated)."
        },
        "27": {
          "question": "He showed zeal in organizing the community outreach program. (Choose the closest meaning of 'zeal')",
          "choices": {
            "A": "laziness",
            "B": "enthusiasm",
            "C": "hesitation",
            "D": "sadness"
          },
          "correct": "B",
          "reason": "Ang \"zeal\" ay masidhing sigla o determinasyon (enthusiasm/passion)."
        },
        "28": {
          "question": "The twins have distinct personalities despite looking identical. (Choose the closest meaning of 'distinct')",
          "choices": {
            "A": "similar",
            "B": "identical",
            "C": "different",
            "D": "boring"
          },
          "correct": "C",
          "reason": "Ang \"distinct\" ay magkaiba o may malinaw na pagkakaiba (separate or different)."
        },
        "29": {
          "question": "The arduous hike tested the physical endurance of the mountaineers. (Choose the closest meaning of 'arduous')",
          "choices": {
            "A": "easy",
            "B": "short",
            "C": "difficult",
            "D": "fun"
          },
          "correct": "C",
          "reason": "Ang \"arduous\" ay mahirap, nakakapagod, at nangangailangan ng matinding lakas (difficult/strenuous)."
        },
        "30": {
          "question": "The suspect tried to elude the police by hiding in an abandoned building. (Choose the closest meaning of 'elude')",
          "choices": {
            "A": "confront",
            "B": "escape",
            "C": "attack",
            "D": "help"
          },
          "correct": "B",
          "reason": "Ang \"elude\" ay umiwas, tumakas, o magtago sa mga umuusig (escape/evade)."
        }
      }
    },
    {
      "subject": "Verbal Ability",
      "subject_icon": "📖",
      "topic": "Grammar and Correct Usage",
      "topic_order": 2,
      "questions": {
        "1": {
          "question": "Which sentence is grammatically correct?",
          "choices": {
            "A": "Each of the employees have submitted their reports.",
            "B": "Each of the employees has submitted his or her report.",
            "C": "Each of the employees have submitted his or her report.",
            "D": "Each of the employees has submitted their reports."
          },
          "correct": "B",
          "reason": "Ang \"Each\" ay singular subject kaya dapat singular verb (\"has\") at singular pronoun (\"his or her\")."
        },
        "2": {
          "question": "Neither the teacher nor the students _____ present in the classroom.",
          "choices": {
            "A": "was",
            "B": "were",
            "C": "is",
            "D": "am"
          },
          "correct": "B",
          "reason": "Sa \"neither... nor\", ang verb ay umaayon sa malapit na subject (ang \"students\" ay plural, kaya \"were\")."
        },
        "3": {
          "question": "The team of researchers _____ finished conducting the experiment.",
          "choices": {
            "A": "have",
            "B": "has",
            "C": "are",
            "D": "were"
          },
          "correct": "B",
          "reason": "Ang collective noun na \"team\" ay tinuturing na isa o singular dito kasi kumikilos sila bilang isang yunit (takes singular verb \"has\")."
        },
        "4": {
          "question": "Choose the correct sentence:",
          "choices": {
            "A": "She is more smarter than her brother.",
            "B": "She is smarter than her brother.",
            "C": "She is more smart than her brother.",
            "D": "She is the smartest between her brother and her."
          },
          "correct": "B",
          "reason": "Ang comparative form ng \"smart\" ay \"smarter\". Hindi na kailangang lagyan ng \"more\"."
        },
        "5": {
          "question": "Choose the correct sentence:",
          "choices": {
            "A": "I prefer reading books than watching television.",
            "B": "I prefer reading books over watching television.",
            "C": "I prefer to read books than to watch television.",
            "D": "I prefer reading books from watching television."
          },
          "correct": "B",
          "reason": "Ang tamang preposition pagkatapos ng \"prefer\" kapag nagkukumpara ay \"to\" o \"over\", hindi \"than\"."
        },
        "6": {
          "question": "Everyone must bring _____ own calculator to the examination.",
          "choices": {
            "A": "their",
            "B": "his or her",
            "C": "our",
            "D": "your"
          },
          "correct": "B",
          "reason": "Ang \"everyone\" ay singular indefinite pronoun kaya singular pronoun din ang gagamitin (\"his or her\")."
        },
        "7": {
          "question": "Choose the correct sentence:",
          "choices": {
            "A": "The committee presented their findings yesterday.",
            "B": "The committee presented its findings yesterday.",
            "C": "The committee have presented their findings yesterday.",
            "D": "The committee were presenting its findings yesterday."
          },
          "correct": "B",
          "reason": "Dito, ang committee ay kumikilos bilang iisang buong grupo kaya singular pronoun (\"its\") ang ginamit."
        },
        "8": {
          "question": "Physics _____ my hardest subject this semester.",
          "choices": {
            "A": "are",
            "B": "is",
            "C": "were",
            "D": "have been"
          },
          "correct": "B",
          "reason": "Ang mga pangalan ng subject gaya ng Physics, Mathematics, at Economics ay nagtatapos sa \"s\" pero singular ang form kaya singular verb (\"is\") ang kasama."
        },
        "9": {
          "question": "Ten thousand pesos _____ a lot of money for a student.",
          "choices": {
            "A": "are",
            "B": "is",
            "C": "were",
            "D": "have"
          },
          "correct": "B",
          "reason": "Ang mga sumatotal na pera, oras, o distansya ay tinuturing bilang iisang halaga o singular quantity kaya \"is\" ang ginagamit."
        },
        "10": {
          "question": "Choose the correct sentence structure:",
          "choices": {
            "A": "Walking down the street, the rain started to fall.",
            "B": "Walking down the street, an umbrella was opened by me.",
            "C": "Walking down the street, I felt the cold rain start to fall.",
            "D": "While walking down the street, the storm began."
          },
          "correct": "C",
          "reason": "Maiiwasan ang \"misplaced modifier\". Ang gumagawa ng kilos na \"walking\" ay dapat ang kasunod na subject (\"I\")."
        },
        "11": {
          "question": "Choose the correct spelling:",
          "choices": {
            "A": "Accomodation",
            "B": "Accommodation",
            "C": "Acomodation",
            "D": "Acommodation"
          },
          "correct": "B",
          "reason": "Ang tamang baybay ay may dalawang \"c\" at dalawang \"m\" (Accommodation)."
        },
        "12": {
          "question": "Choose the correct spelling:",
          "choices": {
            "A": "Questionnaire",
            "B": "Questionaire",
            "C": "Questionnair",
            "D": "Questionare"
          },
          "correct": "A",
          "reason": "Double \"n\" at may \"re\" sa dula ang tamang spelling ng questionnaire."
        },
        "13": {
          "question": "Choose the correct spelling:",
          "choices": {
            "A": "Millennium",
            "B": "Millenium",
            "C": "Milenium",
            "D": "Milleniumm"
          },
          "correct": "A",
          "reason": "Double \"l\" at double \"n\" ang tamang spelling nito."
        },
        "14": {
          "question": "Choose the sentence with correct punctuation and grammar:",
          "choices": {
            "A": "Its a beautiful day for a picnic.",
            "B": "It's a beautiful day for a picnic.",
            "C": "Its' a beautiful day for a picnic.",
            "D": "It is a beautiful day, for a picnic."
          },
          "correct": "B",
          "reason": "Ang \"It's\" ay contraction ng \"It is\". Ang \"its\" naman ay possessive pronoun (walang apostrophe)."
        },
        "15": {
          "question": "Between you and _____, I think the project will succeed.",
          "choices": {
            "A": "I",
            "B": "me",
            "C": "myself",
            "D": "he"
          },
          "correct": "B",
          "reason": "Pagkatapos ng preposition na \"between\", ang pronoun ay dapat nasa objective case (\"me\", hindi \"I\")."
        },
        "16": {
          "question": "She is the _____ of the two sisters.",
          "choices": {
            "A": "taller",
            "B": "tallest",
            "C": "most tall",
            "D": "more taller"
          },
          "correct": "A",
          "reason": "Kapag nagkukumpara ng dalawang bagay o tao lang, ang gagamitin ay comparative form (\"taller\"), hindi superlative (\"tallest\")."
        },
        "17": {
          "question": "Neither of the suspects _____ admitted to the crime.",
          "choices": {
            "A": "has",
            "B": "have",
            "C": "were",
            "D": "are"
          },
          "correct": "A",
          "reason": "Ang \"Neither\" ay laging singular kaya singular verb (\"has\") ang dapat gamitin."
        },
        "18": {
          "question": "The number of applicants _____ increasing every year.",
          "choices": {
            "A": "are",
            "B": "is",
            "C": "were",
            "D": "have been"
          },
          "correct": "B",
          "reason": "Pag sinabing \"The number of\", singular ito (\"is\"). Pero pag \"A number of\", plural yun."
        },
        "19": {
          "question": "A number of students _____ absent due to the flu.",
          "choices": {
            "A": "is",
            "B": "was",
            "C": "are",
            "D": "has been"
          },
          "correct": "C",
          "reason": "Ang \"A number of\" ay nangangahulugang \"several\" o marami kaya plural verb (\"are\") ang kasunod."
        },
        "20": {
          "question": "Choose the correct sentence:",
          "choices": {
            "A": "He speaks English good.",
            "B": "He speaks English well.",
            "C": "He is speaking English good.",
            "D": "He spoke English goodly."
          },
          "correct": "B",
          "reason": "Ang \"well\" ay adverb na naglalarawan kung paano niya sinasalita ang English. Ang \"good\" ay adjective."
        },
        "21": {
          "question": "The news about the exam results _____ surprising.",
          "choices": {
            "A": "were",
            "B": "are",
            "C": "is",
            "D": "have been"
          },
          "correct": "C",
          "reason": "Ang salitang \"news\" ay laging tinuturing na singular noun kaya singular verb (\"is\") ang gamitin."
        },
        "22": {
          "question": "Choose the correct sentence:",
          "choices": {
            "A": "Whomever wins the contest will receive a cash prize.",
            "B": "Whoever wins the contest will receive a cash prize.",
            "C": "Whomever you choose will be fine.",
            "D": "Whoever you choose will be fired."
          },
          "correct": "B",
          "reason": "Ang \"Whoever\" ay subject ng verb na \"wins\". Kaya subjective case ang kailangan."
        },
        "23": {
          "question": "Give the book to _____ asked for it first.",
          "choices": {
            "A": "whoever",
            "B": "whomever",
            "C": "who",
            "D": "whom"
          },
          "correct": "A",
          "reason": "Ang \"whoever\" ay subject ng clause na \"asked for it first\"."
        },
        "24": {
          "question": "She sings much _____ than her sister.",
          "choices": {
            "A": "good",
            "B": "well",
            "C": "better",
            "D": "best"
          },
          "correct": "C",
          "reason": "Nagkukumpara sa pagitan ng dalawa kaya comparative adverb na \"better\" ang kailangan."
        },
        "25": {
          "question": "Mount Apo is the _____ mountain in the Philippines.",
          "choices": {
            "A": "high",
            "B": "higher",
            "C": "highest",
            "D": "most high"
          },
          "correct": "C",
          "reason": "Nagkukumpara sa higit sa dalawa (lahat ng bundok sa bansa) kaya superlative form (\"highest\") ang gagamitin."
        },
        "26": {
          "question": "I look forward to _____ you at the conference.",
          "choices": {
            "A": "see",
            "B": "seeing",
            "C": "saw",
            "D": "seen"
          },
          "correct": "B",
          "reason": "Ang phrasal verb na \"look forward to\" ay sinusundan ng gerund (-ing form), hindi base verb."
        },
        "27": {
          "question": "If I _____ rich, I would travel around the world.",
          "choices": {
            "A": "am",
            "B": "was",
            "C": "were",
            "D": "will be"
          },
          "correct": "C",
          "reason": "Ito ay Second Conditional (hypothetical/contrary to fact). Ang gagamitin para sa lahat ng subject ay \"were\"."
        },
        "28": {
          "question": "By next year, she _____ graduated from college.",
          "choices": {
            "A": "will",
            "B": "will have",
            "C": "has",
            "D": "had"
          },
          "correct": "B",
          "reason": "Ginagamit ang Future Perfect tense (\"will have + past participle\") para sa aksyon na matatapos bago ang isang tiyak na panahon sa hinaharap."
        },
        "29": {
          "question": "Choose the correct sentence:",
          "choices": {
            "A": "She is one of those women who works hard.",
            "B": "She is one of those women who work hard.",
            "C": "She is one of those woman who works hard.",
            "D": "She is one of those woman who work hard."
          },
          "correct": "B",
          "reason": "Ang antecedent ng \"who\" ay \"women\" (plural), kaya ang verb ay dapat plural din (\"work\")."
        },
        "30": {
          "question": "Hard _____ he tried, he couldn't solve the puzzle.",
          "choices": {
            "A": "as",
            "B": "though",
            "C": "although",
            "D": "when"
          },
          "correct": "A",
          "reason": "Ang pormat na \"Adjective/Adverb + as/though + subject + verb\" ay ginagamit para magpahayag ng contrast (kahit gaano pa niya sinubukan)."
        }
      }
    },
    {
      "subject": "Verbal Ability",
      "subject_icon": "📖",
      "topic": "Paragraph Organization",
      "topic_order": 3,
      "questions": {
        "1": {
          "question": "Arrange the sentences to form a logical paragraph:\n1. The government launched a nationwide tree-planting campaign last month.\n2. Volunteers from different sectors gathered early in the morning to participate.\n3. Within a few hours, thousands of saplings were successfully planted along the riverbanks.\n4. This initiative aims to prevent soil erosion and mitigate flooding during heavy rains.",
          "choices": {
            "A": "1-4-2-3",
            "B": "4-1-2-3",
            "C": "1-2-3-4",
            "D": "2-1-3-4"
          },
          "correct": "A",
          "reason": "Inilalahad muna ang pangunahing ideya o proyekto (1), sinundan ng layunin nito (4), pagkatapos ay ang pagdating ng mga volunteers (2), at ang huli ay ang resulta ng kanilang ginawa (3)."
        },
        "2": {
          "question": "Arrange the sentences to form a logical paragraph:\n1. Proper waste segregation is essential for effective recycling.\n2. When households separate biodegradable from non-biodegradable trash, processing becomes much easier.\n3. Furthermore, it helps reduce the volume of waste sent to landfills.\n4. Therefore, local communities must strictly implement segregation policies.",
          "choices": {
            "A": "1-2-3-4",
            "B": "1-3-2-4",
            "C": "2-1-3-4",
            "D": "4-1-2-3"
          },
          "correct": "A",
          "reason": "Nagsisimula sa topic sentence (1), pinaliwanag kung paano (2), nagdagdag pa ng benepisyo gamit ang \"Furthermore\" (3), at nagtapos sa konklusyon/rekomendasyon gamit ang \"Therefore\" (4)."
        },
        "3": {
          "question": "Arrange the sentences to form a logical paragraph:\n1. Reading books expands our vocabulary and improves critical thinking skills.\n2. In today's digital age, however, many people prefer scrolling through social media feeds.\n3. Despite these distractions, making time for reading remains a valuable habit.\n4. It offers a mental escape and deepens our understanding of different perspectives.",
          "choices": {
            "A": "2-1-4-3",
            "B": "1-4-2-3",
            "C": "1-2-3-4",
            "D": "2-3-1-4"
          },
          "correct": "B",
          "reason": "Inilatag muna ang benepisyo ng pagbabasa (1 at 4), ipinapakita ang counter-trend o problema ngayon (2), at nagtapos sa payo o solusyon sa kabila ng distraction (3)."
        },
        "4": {
          "question": "Arrange the sentences to form a logical paragraph:\n1. First, gather all the necessary ingredients and measuring tools.\n2. Baking a cake requires patience and precision.\n3. Once everything is ready, preheat your oven to the required temperature.\n4. Finally, mix the batter gently and bake it for thirty minutes.",
          "choices": {
            "A": "2-1-3-4",
            "B": "1-2-3-4",
            "C": "2-3-1-4",
            "D": "4-3-2-1"
          },
          "correct": "A",
          "reason": "Ang (2) ang general intro statement, sinundan ng unang hakbang gamit ang \"First\" (1), kasunod ang pag-preheat (3), at nagtapos sa \"Finally\" (4)."
        },
        "5": {
          "question": "Arrange the sentences to form a logical paragraph:\n1. The invention of the internet revolutionized global communication.\n2. People can now connect with friends and colleagues across oceans in mere seconds.\n3. Businesses have also expanded their markets globally through e-commerce platforms.\n4. Truly, technology has transformed our society in unimaginable ways.",
          "choices": {
            "A": "1-2-3-4",
            "B": "1-3-2-4",
            "C": "2-1-3-4",
            "D": "4-1-2-3"
          },
          "correct": "A",
          "reason": "Main topic ang internet (1), epekto sa komunikasyon (2), epekto sa negosyo (3), at pangkalahatang konklusyon (4)."
        },
        "6": {
          "question": "Which sentence does not belong in the paragraph below about sleep?\n(1) Getting adequate sleep is crucial for overall physical and mental health.\n(2) During sleep, the brain repairs tissues and consolidates memories.\n(3) Drinking coffee in the morning helps many people wake up faster.\n(4) Chronic sleep deprivation can lead to weakened immune systems and cognitive decline.",
          "choices": {
            "A": "Sentence 1",
            "B": "Sentence 2",
            "C": "Sentence 3",
            "D": "Sentence 4"
          },
          "correct": "C",
          "reason": "Ang talata ay tungkol sa kahalagahan ng tulog (sleep), habang ang Sentence 3 ay tungkol sa pag-inom ng kape (coffee), kaya ito ay out-of-topic."
        },
        "7": {
          "question": "Choose the best logical order for these sentences:\n1. This leads to reduced crop yields and food shortages.\n2. Climate change brings prolonged droughts and unpredictable weather patterns.\n3. Farmers struggle to irrigate their fields without steady water supplies.\n4. Consequently, global food security is severely threatened.",
          "choices": {
            "A": "2-3-1-4",
            "B": "2-1-3-4",
            "C": "1-2-3-4",
            "D": "4-2-3-1"
          },
          "correct": "A",
          "reason": "Climate change ang ugat (2), epekto sa magsasaka (3), epekto sa ani (1), at ang pangkalahatang epekto sa buong mundo o food security (4)."
        },
        "8": {
          "question": "Which sentence is the best opening sentence for a paragraph about renewable energy?",
          "choices": {
            "A": "Solar panels convert sunlight directly into electricity.",
            "B": "Renewable energy sources are becoming vital in reducing carbon footprints and combating climate change.",
            "C": "Wind turbines generate power by capturing kinetic energy from the wind.",
            "D": "Fossil fuels will eventually run out in the near future."
          },
          "correct": "B",
          "reason": "Ito ang pinaka-general at main topic sentence na sumasaklaw sa buong tema ng renewable energy."
        },
        "9": {
          "question": "Arrange the sentences logically:\n1. Financial literacy equips individuals with the skills to manage money wisely.\n2. Unfortunately, many schools still lack comprehensive financial education programs.\n3. As a result, adults often struggle with debt management and retirement planning.\n4. Integrating this subject into the curriculum is therefore a crucial step forward.",
          "choices": {
            "A": "1-2-3-4",
            "B": "2-1-3-4",
            "C": "1-3-2-4",
            "D": "3-2-1-4"
          },
          "correct": "A",
          "reason": "Kahalagahan ng financial literacy (1), problema sa sistema (2), negatibong epekto ng problema (3), at solusyon/rekomendasyon (4)."
        },
        "10": {
          "question": "Which sentence does not belong in a paragraph about healthy eating habits?\n(1) Eating a balanced diet rich in fruits and vegetables promotes longevity.\n(2) Vitamins and minerals boost our immune system against diseases.\n(3) Regular cardiovascular exercise is important for heart health.\n(4) Incorporating whole grains provides sustained daily energy.",
          "choices": {
            "A": "Sentence 1",
            "B": "Sentence 2",
            "C": "Sentence 3",
            "D": "Sentence 4"
          },
          "correct": "C",
          "reason": "Ang talata ay tungkol sa pagkain (diet/nutrition), samantalang ang Sentence 3 ay tungkol sa ehersisyo (exercise)."
        },
        "11": {
          "question": "Arrange the sentences logically:\n1. Public transportation plays a vital role in reducing urban traffic congestion.\n2. When commuters opt for trains and buses instead of private cars, fewer vehicles crowd the highways.\n3. Additionally, mass transit significantly lowers greenhouse gas emissions per passenger.\n4. Investing in modern, reliable public transport is therefore essential for sustainable cities.",
          "choices": {
            "A": "1-2-3-4",
            "B": "4-1-2-3",
            "C": "1-3-2-4",
            "D": "2-1-3-4"
          },
          "correct": "A",
          "reason": "Nagsisimula sa main topic (1), pinaliwanag ang epekto sa trapiko (2), nagdagdag ng isa pang benepisyo gamit ang \"Additionally\" (3), at nagtapos sa konklusyon gamit ang \"therefore\" (4)."
        },
        "12": {
          "question": "Which sentence does not belong in a paragraph about cyber hygiene?\n(1) Practicing good cyber hygiene protects personal data from online threats.\n(2) Using strong, unique passwords for every account prevents unauthorized access.\n(3) Buying the latest gaming laptop improves video editing speed.\n(4) Enabling two-factor authentication adds an extra layer of security against hackers.",
          "choices": {
            "A": "Sentence 1",
            "B": "Sentence 2",
            "C": "Sentence 3",
            "D": "Sentence 4"
          },
          "correct": "C",
          "reason": "Ang talata ay tungkol sa online security (cyber hygiene), habang ang Sentence 3 ay tungkol sa bilis ng laptop sa video editing."
        },
        "13": {
          "question": "Arrange the sentences logically:\n1. First, soak the dried beans in water overnight to soften them.\n2. Cooking bean soup from scratch requires simple preparation steps.\n3. Next, drain the water and boil the beans with herbs and spices until tender.\n4. Finally, mash a portion of the beans to thicken the broth before serving hot.",
          "choices": {
            "A": "2-1-3-4",
            "B": "1-2-3-4",
            "C": "2-3-1-4",
            "D": "4-1-3-2"
          },
          "correct": "A",
          "reason": "Intro sentence muna (2), tapos sundan ang sequence words: \"First\" (1), \"Next\" (3), at \"Finally\" (4)."
        },
        "14": {
          "question": "Choose the best concluding sentence for a paragraph about volunteering:",
          "choices": {
            "A": "Many non-profit organizations rely on donations to buy office supplies.",
            "B": "Volunteering requires people to wake up early on weekends.",
            "C": "Ultimately, giving time to help others not only uplifts communities but also fosters personal fulfillment.",
            "D": "Some students volunteer just to get extra credit in school."
          },
          "correct": "C",
          "reason": "Gumamit ito ng concluding transition (\"Ultimately\") at binuod ang pangkalahatang benepisyo ng pagbo-volunteer."
        },
        "15": {
          "question": "Arrange the sentences logically:\n1. Urban gardening is gaining popularity among city dwellers with limited yard space.\n2. By using vertical planters and recycled containers, residents can grow fresh herbs and vegetables on balconies.\n3. This practice not only provides organic produce at home but also helps cool down concrete surroundings.\n4. As food prices continue to rise, growing one's own food offers both economic and environmental rewards.",
          "choices": {
            "A": "1-2-3-4",
            "B": "2-1-4-3",
            "C": "4-2-1-3",
            "D": "1-4-2-3"
          },
          "correct": "A",
          "reason": "Ipinakilala ang konsepto ng urban gardening (1), paano ito ginagawa (2), ang mga benepisyo nito (3), at ang pangkalahatang halaga nito ngayon (4)."
        },
        "16": {
          "question": "Which sentence does not belong in a paragraph about time management?\n(1) Effective time management allows professionals to meet deadlines without burning out.\n(2) Creating a daily to-do list helps prioritize urgent and important tasks.\n(3) Eliminating digital distractions during work blocks boosts overall focus.\n(4) Drinking eight glasses of water a day keeps the skin hydrated.",
          "choices": {
            "A": "Sentence 1",
            "B": "Sentence 2",
            "C": "Sentence 3",
            "D": "Sentence 4"
          },
          "correct": "D",
          "reason": "Ang talata ay tungkol sa pamamahala ng oras at trabaho, samantalang ang Sentence 4 ay tungkol sa pag-inom ng tubig."
        },
        "17": {
          "question": "Arrange the sentences logically:\n1. However, excessive screen time before bed can disrupt the body's natural sleep cycle.\n2. Smartphones and tablets have made information accessible at our fingertips.\n3. To prevent insomnia, experts recommend turning off electronic devices at least an hour before sleeping.\n4. The blue light emitted by screens suppresses melatonin, the hormone responsible for sleep.",
          "choices": {
            "A": "2-1-4-3",
            "B": "1-2-3-4",
            "C": "2-4-1-3",
            "D": "4-1-2-3"
          },
          "correct": "A",
          "reason": "Magandang dulot ng gadgets (2), ang problema gamit ang \"However\" (1), siyentipikong paliwanag ng problema (4), at ang rekomendasyon o solusyon (3)."
        },
        "18": {
          "question": "Arrange the sentences logically:\n1. As a result, many coastal towns experienced severe flooding and power outages.\n2. A super typhoon made landfall in the eastern provinces late last night.\n3. Emergency response teams were immediately deployed to rescue stranded residents.\n4. The storm brought torrential rains and destructive winds exceeding 200 kilometers per hour.",
          "choices": {
            "A": "2-4-1-3",
            "B": "2-1-4-3",
            "C": "4-2-1-3",
            "D": "1-2-3-4"
          },
          "correct": "A",
          "reason": "Pangyayari (2), paglalarawan sa lakas ng bagyo (4), ang resulta nito gamit ang \"As a result\" (1), at ang aksyon ng gobyerno/rescuers (3)."
        },
        "19": {
          "question": "Which sentence is the best opening sentence for a paragraph about teamwork in the workplace?",
          "choices": {
            "A": "When employees blame each other for mistakes, projects fail.",
            "B": "Strong teamwork is the cornerstone of any successful and innovative organization.",
            "C": "Regular team-building outings are usually held at beach resorts.",
            "D": "Some employees prefer working alone in quiet cubicles."
          },
          "correct": "B",
          "reason": "Ito ay isang malinaw at general topic sentence na nagpapakilala sa kahalagahan ng teamwork."
        },
        "20": {
          "question": "Arrange the sentences logically:\n1. Tourism brings significant revenue and job opportunities to local communities.\n2. Nevertheless, unregulated tourist arrivals can overwhelm fragile ecosystems and pollute beaches.\n3. Finding a balance between economic growth and environmental conservation is key to sustainable tourism.\n4. Hotels, restaurants, and transport operators thrive when visitors flock to popular destinations.",
          "choices": {
            "A": "1-4-2-3",
            "B": "1-2-3-4",
            "C": "4-1-2-3",
            "D": "2-1-4-3"
          },
          "correct": "A",
          "reason": "Positibong epekto ng turismo (1), konkretong halimbawa nito (4), ang negatibong bahagi gamit ang \"Nevertheless\" (2), at ang balanseng solusyon (3)."
        },
        "21": {
          "question": "Which sentence does not belong in a paragraph about learning a second language?\n(1) Learning a second language enhances cognitive flexibility and memory retention.\n(2) Bilingual individuals often have better career prospects in multinational companies.\n(3) Traveling to different countries requires a valid passport and visa.\n(4) Moreover, speaking another tongue fosters deeper appreciation for diverse cultures.",
          "choices": {
            "A": "Sentence 1",
            "B": "Sentence 2",
            "C": "Sentence 3",
            "D": "Sentence 4"
          },
          "correct": "C",
          "reason": "Tungkol sa benepisyo ng pag-aaral ng ibang lenggwahe ang buong talata, kaya out-of-place ang Sentence 3 na tungkol sa passport at visa."
        },
        "22": {
          "question": "Arrange the sentences logically:\n1. Before signing any lease agreement, tenants should carefully read all terms and conditions.\n2. Pay close attention to clauses regarding security deposits, maintenance responsibilities, and renewal policies.\n3. Doing so prevents unexpected financial disputes with the landlord later on.\n4. If anything seems unclear, ask for written clarification prior to finalizing the contract.",
          "choices": {
            "A": "1-2-4-3",
            "B": "1-4-2-3",
            "C": "2-1-3-4",
            "D": "3-1-2-4"
          },
          "correct": "A",
          "reason": "Main advice (1), ano ang dapat tingnan (2), ano ang gagawin kung may malabo (4), at ang magandang resulta ng pag-iingat na ito gamit ang \"Doing so\" (3)."
        },
        "23": {
          "question": "Arrange the sentences logically:\n1. Honeybees are vital pollinators responsible for fertilizing a third of the crops we eat.\n2. Unfortunately, pesticide use and habitat loss have caused global bee populations to decline rapidly.\n3. Without these tiny insects, global agricultural production would suffer catastrophic losses.\n4. Protecting bee habitats and adopting eco-friendly farming are urgent priorities today.",
          "choices": {
            "A": "1-3-2-4",
            "B": "1-2-3-4",
            "C": "2-1-3-4",
            "D": "3-1-2-4"
          },
          "correct": "A",
          "reason": "Papel ng honeybees (1), ano ang mangyayari kung wala sila (3), ang banta sa kanila ngayon gamit ang \"Unfortunately\" (2), at ang panawagan sa pagkilos (4)."
        },
        "24": {
          "question": "Which sentence is the best concluding sentence for a paragraph about lifelong learning?",
          "choices": {
            "A": "Libraries offer free access to thousands of books and journals.",
            "B": "Many universities now offer online degree programs for working adults.",
            "C": "In a rapidly changing world, committing to lifelong learning ensures both personal growth and career adaptability.",
            "D": "Graduating from college is a proud moment for every family."
          },
          "correct": "C",
          "reason": "Binubuod nito ang pangunahing punto ng talata tungkol sa kahalagahan ng patuloy na pag-aaral."
        },
        "25": {
          "question": "Arrange the sentences logically:\n1. First, assess your monthly income and list all fixed expenses such as rent and utilities.\n2. Creating a realistic personal budget is the foundation of financial stability.\n3. Next, allocate a specific percentage of your remaining funds toward savings and debt repayment.\n4. Finally, track your daily spending to ensure you stay within your set limits.",
          "choices": {
            "A": "2-1-3-4",
            "B": "1-2-3-4",
            "C": "2-3-1-4",
            "D": "4-1-3-2"
          },
          "correct": "A",
          "reason": "Topic sentence (2), tapos sundan ang transition words: \"First\" (1), \"Next\" (3), at \"Finally\" (4)."
        },
        "26": {
          "question": "Which sentence does not belong in a paragraph about coral reefs?\n(1) Coral reefs are often called the rainforests of the sea due to their rich biodiversity.\n(2) They provide shelter and food for thousands of marine organisms.\n(3) Deep-sea oil drilling requires massive offshore platforms and specialized engineers.\n(4) Rising ocean temperatures, however, cause coral bleaching that threatens these ecosystems.",
          "choices": {
            "A": "Sentence 1",
            "B": "Sentence 2",
            "C": "Sentence 3",
            "D": "Sentence 4"
          },
          "correct": "C",
          "reason": "Tungkol sa coral reefs at marine ecosystem ang talata; hindi konektado ang deep-sea oil drilling engineering."
        },
        "27": {
          "question": "Arrange the sentences logically:\n1. Solar energy has become increasingly affordable over the past decade.\n2. Advancements in photovoltaic technology have lowered manufacturing costs while boosting efficiency.\n3. Consequently, more households and businesses are installing rooftop solar panels to cut electricity bills.\n4. This shift toward clean energy also reduces reliance on imported fossil fuels.",
          "choices": {
            "A": "1-2-3-4",
            "B": "2-1-4-3",
            "C": "1-3-2-4",
            "D": "3-1-2-4"
          },
          "correct": "A",
          "reason": "Main statement (1), dahilan kung bakit naging mura (2), ang direktang resulta gamit ang \"Consequently\" (3), at karagdagang benepisyo gamit ang \"This shift... also\" (4)."
        },
        "28": {
          "question": "Arrange the sentences logically:\n1. Effective communication requires both clear speaking and active listening.\n2. Many conflicts arise simply because people focus on formulating their reply rather than understanding the speaker.\n3. By paying full attention and asking clarifying questions, listeners show respect and prevent misunderstandings.\n4. Mastering this two-way skill strengthens both personal relationships and professional teamwork.",
          "choices": {
            "A": "1-2-3-4",
            "B": "2-1-3-4",
            "C": "1-3-2-4",
            "D": "4-1-2-3"
          },
          "correct": "A",
          "reason": "Kahulugan ng effective communication (1), karaniwang pagkakamali (2), paano itama ang pagkakamali (3), at ang magandang resulta nito (4)."
        },
        "29": {
          "question": "Which sentence is the best opening sentence for a paragraph about public libraries?",
          "choices": {
            "A": "Late fees are charged when borrowers fail to return books on time.",
            "B": "Public libraries remain indispensable community hubs that provide equal access to knowledge and digital resources.",
            "C": "Librarians organize books using the Dewey Decimal Classification system.",
            "D": "Quiet zones are strictly enforced on the second floor of the building."
          },
          "correct": "B",
          "reason": "Ipinapakilala nito ang pangkalahatang halaga ng public libraries sa komunidad."
        },
        "30": {
          "question": "Arrange the sentences logically:\n1. Plastic pollution has become one of the most pressing environmental crises worldwide.\n2. Single-use plastics, such as straws and shopping bags, often end up in oceans where marine animals mistake them for food.\n3. To combat this problem, several cities have banned disposable plastics and promoted reusable alternatives.\n4. Individual consumers can also help by carrying eco-bags and refusing unnecessary plastic packaging.",
          "choices": {
            "A": "1-2-3-4",
            "B": "1-3-2-4",
            "C": "2-1-3-4",
            "D": "3-4-1-2"
          },
          "correct": "A",
          "reason": "Pangkalahatang problema (1), partikular na halimbawa at epekto (2), aksyon ng mga lungsod/gobyerno (3), at aksyon ng mga indibidwal gamit ang \"also\" (4)."
        }
      }
    },
    {
      "subject": "Verbal Ability",
      "subject_icon": "📖",
      "topic": "Reading Comprehension",
      "topic_order": 4,
      "questions": {
        "1": {
          "question": "[PASSAGE] Baguio City, known as the Summer Capital of the Philippines, faces mounting environmental challenges due to rapid urbanization. Once celebrated for its cool climate and pine-scented air, the city now grapples with heavy traffic congestion, air pollution, and water scarcity. Unchecked real estate development has led to the cutting down of numerous pine trees, replacing natural landscapes with concrete structures. Local government units and environmental advocates are now pushing for stricter zoning laws and sustainable tourism practices to preserve what remains of the city's natural heritage.\n\n[QUESTION] What is the primary problem discussed in the passage?",
          "choices": {
            "A": "Lack of tourists visiting Baguio City",
            "B": "Environmental degradation caused by rapid urbanization in Baguio",
            "C": "The rising cost of real estate properties in the mountains",
            "D": "The extreme cold climate of the Summer Capital"
          },
          "correct": "B",
          "reason": "Sinasabi sa teksto na ang mabilis na urbanisasyon ay nagdudulot ng mga problema sa kalikasan tulad ng trapiko, polusyon, at kawalan ng tubig."
        },
        "2": {
          "question": "[PASSAGE] Baguio City, known as the Summer Capital of the Philippines, faces mounting environmental challenges due to rapid urbanization. Once celebrated for its cool climate and pine-scented air, the city now grapples with heavy traffic congestion, air pollution, and water scarcity. Unchecked real estate development has led to the cutting down of numerous pine trees, replacing natural landscapes with concrete structures. Local government units and environmental advocates are now pushing for stricter zoning laws and sustainable tourism practices to preserve what remains of the city's natural heritage.\n\n[QUESTION] According to the text, what caused the loss of numerous pine trees?",
          "choices": {
            "A": "Heavy rainfall and typhoons",
            "B": "Unchecked real estate development and concrete construction",
            "C": "Government-mandated tree cutting programs",
            "D": "Air pollution from vehicles"
          },
          "correct": "B",
          "reason": "Nabanggit sa text: \"Unchecked real estate development has led to the cutting down of numerous pine trees, replacing natural landscapes with concrete structures.\""
        },
        "3": {
          "question": "[PASSAGE] Baguio City, known as the Summer Capital of the Philippines, faces mounting environmental challenges due to rapid urbanization. Once celebrated for its cool climate and pine-scented air, the city now grapples with heavy traffic congestion, air pollution, and water scarcity. Unchecked real estate development has led to the cutting down of numerous pine trees, replacing natural landscapes with concrete structures. Local government units and environmental advocates are now pushing for stricter zoning laws and sustainable tourism practices to preserve what remains of the city's natural heritage.\n\n[QUESTION] What solution are local officials and advocates pushing for?",
          "choices": {
            "A": "Total closure of Baguio City to all tourists",
            "B": "Building more concrete high-rise buildings",
            "C": "Stricter zoning laws and sustainable tourism practices",
            "D": "Relocating all residents to lowland areas"
          },
          "correct": "C",
          "reason": "Ayon sa huling pangungusap, nagtutulungan sila para sa \"stricter zoning laws and sustainable tourism practices.\""
        },
        "4": {
          "question": "[PASSAGE] Mangroves play a vital ecological role in coastal areas. They act as natural buffers against storm surges, typhoons, and coastal erosion, protecting vulnerable human settlements. Furthermore, mangrove forests serve as crucial breeding grounds and nurseries for various marine species, including fish and crustaceans, which sustain local fishing communities. Despite these immense benefits, large areas of mangroves are continually cleared for aquaculture ponds and coastal development, threatening both biodiversity and coastal safety.\n\n[QUESTION] What is the main idea of the passage?",
          "choices": {
            "A": "Coastal communities rely entirely on aquaculture for income.",
            "B": "Mangroves are essential for ecological protection and marine life, but they face destruction.",
            "C": "Typhoons are becoming stronger because of global warming.",
            "D": "Fish and crustaceans can only survive in artificial ponds."
          },
          "correct": "B",
          "reason": "Binibigyang-diin ng talata ang kahalagahan ng mangroves at ang banta ng pagkasira nito."
        },
        "5": {
          "question": "[PASSAGE] Mangroves play a vital ecological role in coastal areas. They act as natural buffers against storm surges, typhoons, and coastal erosion, protecting vulnerable human settlements. Furthermore, mangrove forests serve as crucial breeding grounds and nurseries for various marine species, including fish and crustaceans, which sustain local fishing communities. Despite these immense benefits, large areas of mangroves are continually cleared for aquaculture ponds and coastal development, threatening both biodiversity and coastal safety.\n\n[QUESTION] How do mangroves protect coastal human settlements?",
          "choices": {
            "A": "By absorbing harmful air pollutants",
            "B": "By serving as natural buffers against storm surges and erosion",
            "C": "By providing wood for building houses",
            "D": "By filtering drinking water supplies"
          },
          "correct": "B",
          "reason": "Sabi sa teksto: \"They act as natural buffers against storm surges, typhoons, and coastal erosion.\""
        },
        "6": {
          "question": "[PASSAGE] Mangroves play a vital ecological role in coastal areas. They act as natural buffers against storm surges, typhoons, and coastal erosion, protecting vulnerable human settlements. Furthermore, mangrove forests serve as crucial breeding grounds and nurseries for various marine species, including fish and crustaceans, which sustain local fishing communities. Despite these immense benefits, large areas of mangroves are continually cleared for aquaculture ponds and coastal development, threatening both biodiversity and coastal safety.\n\n[QUESTION] Why are mangrove forests being cleared according to the text?",
          "choices": {
            "A": "For highway expansion projects",
            "B": "For aquaculture ponds and coastal development",
            "C": "To plant agricultural crops",
            "D": "To build recreational parks"
          },
          "correct": "B",
          "reason": "Direksyong binanggit sa huling pangungusap: \"...cleared for aquaculture ponds and coastal development.\""
        },
        "7": {
          "question": "[PASSAGE] Financial literacy is an essential life skill that empowers individuals to make informed decisions about money management, budgeting, and investing. Unfortunately, many young adults enter the workforce without basic knowledge of how compound interest works or how to build an emergency fund. Without these foundational skills, they often fall into consumer debt traps. Educational institutions and financial institutions must collaborate to integrate practical financial training into school curricula to secure the economic well-being of future generations.\n\n[QUESTION] What does the author suggest to solve the problem of financial illiteracy?",
          "choices": {
            "A": "Banning credit cards for young adults",
            "B": "Integrating practical financial training into school curricula",
            "C": "Increasing the minimum wage for fresh graduates",
            "D": "Giving government cash subsidies to everyone"
          },
          "correct": "B",
          "reason": "Ayon sa huling pangungusap, kailangang isama ang practical financial training sa kurikulum ng paaralan."
        },
        "8": {
          "question": "[PASSAGE] Financial literacy is an essential life skill that empowers individuals to make informed decisions about money management, budgeting, and investing. Unfortunately, many young adults enter the workforce without basic knowledge of how compound interest works or how to build an emergency fund. Without these foundational skills, they often fall into consumer debt traps. Educational institutions and financial institutions must collaborate to integrate practical financial training into school curricula to secure the economic well-being of future generations.\n\n[QUESTION] What happens to young adults who lack basic financial skills?",
          "choices": {
            "A": "They become successful entrepreneurs automatically.",
            "B": "They easily build large emergency funds.",
            "C": "They often fall into consumer debt traps.",
            "D": "They invest all their money in real estate."
          },
          "correct": "C",
          "reason": "Nakasaad sa teksto: \"...they often fall into consumer debt traps.\""
        },
        "9": {
          "question": "[PASSAGE] Financial literacy is an essential life skill that empowers individuals to make informed decisions about money management, budgeting, and investing. Unfortunately, many young adults enter the workforce without basic knowledge of how compound interest works or how to build an emergency fund. Without these foundational skills, they often fall into consumer debt traps. Educational institutions and financial institutions must collaborate to integrate practical financial training into school curricula to secure the economic well-being of future generations.\n\n[QUESTION] Which of the following is NOT mentioned as a benefit of financial literacy?",
          "choices": {
            "A": "Making informed decisions about money",
            "B": "Understanding how compound interest works",
            "C": "Guaranteeing a promotion at work",
            "D": "Effective budgeting and investing"
          },
          "correct": "C",
          "reason": "Walang nabanggit sa teksto tungkol sa job promotion; ang binanggit lang ay money management, budgeting, investing, at compound interest."
        },
        "10": {
          "question": "[PASSAGE] The rise of artificial intelligence (AI) has sparked intense debate regarding its impact on the modern workforce. While pessimists argue that automation will replace millions of jobs, leading to widespread unemployment, optimists contend that AI will create entirely new industries and increase overall productivity. Experts suggest that rather than fearing technological displacement, workers should focus on upskilling and continuous learning. By mastering skills that require human empathy, creativity, and complex problem-solving, workers can remain valuable in an AI-driven economy.\n\n[QUESTION] What is the central theme of the passage?",
          "choices": {
            "A": "The history of computer science and automation",
            "B": "The impact of artificial intelligence on jobs and workforce adaptation",
            "C": "Why AI will completely destroy human civilization",
            "D": "The technical coding languages used to build AI"
          },
          "correct": "B",
          "reason": "Tinatalakay ng talata kung paano naaapektuhan ng AI ang mga manggagawa at kung paano sila dapat mag-adapt."
        },
        "11": {
          "question": "[PASSAGE] The rise of artificial intelligence (AI) has sparked intense debate regarding its impact on the modern workforce. While pessimists argue that automation will replace millions of jobs, leading to widespread unemployment, optimists contend that AI will create entirely new industries and increase overall productivity. Experts suggest that rather than fearing technological displacement, workers should focus on upskilling and continuous learning. By mastering skills that require human empathy, creativity, and complex problem-solving, workers can remain valuable in an AI-driven economy.\n\n[QUESTION] According to the text, what should workers do to remain valuable?",
          "choices": {
            "A": "Protest against automation in factories",
            "B": "Stop using computers and smartphones",
            "C": "Focus on upskilling and mastering human-centric skills",
            "D": "Work longer hours every single day"
          },
          "correct": "C",
          "reason": "Sabi sa teksto, mag-focus sa upskilling at sa mga skills na may kinalaman sa empathy, creativity, at problem-solving."
        },
        "12": {
          "question": "[PASSAGE] The rise of artificial intelligence (AI) has sparked intense debate regarding its impact on the modern workforce. While pessimists argue that automation will replace millions of jobs, leading to widespread unemployment, optimists contend that AI will create entirely new industries and increase overall productivity. Experts suggest that rather than fearing technological displacement, workers should focus on upskilling and continuous learning. By mastering skills that require human empathy, creativity, and complex problem-solving, workers can remain valuable in an AI-driven economy.\n\n[QUESTION] What is the optimists' view on artificial intelligence?",
          "choices": {
            "A": "It will destroy all existing businesses.",
            "B": "It will create new industries and increase productivity.",
            "C": "It will make human labor completely unnecessary for survival.",
            "D": "It will lower global internet speeds."
          },
          "correct": "B",
          "reason": "Nakasaad na ang mga optimista ay naniniwalang \"AI will create entirely new industries and increase overall productivity.\""
        },
        "13": {
          "question": "[PASSAGE] Regular physical activity is one of the most effective ways to maintain physical and mental well-being. Engaging in exercises such as brisk walking, swimming, or cycling strengthens the cardiovascular system, improves muscle tone, and helps regulate body weight. Beyond physical health, exercise stimulates the release of endorphins—chemicals in the brain that act as natural mood lifters—which help reduce stress, anxiety, and symptoms of depression.\n\n[QUESTION] Which of the following is a mental health benefit of exercise mentioned in the text?",
          "choices": {
            "A": "Lowering blood pressure instantly",
            "B": "Releasing endorphins that reduce stress and anxiety",
            "C": "Increasing body muscle mass",
            "D": "Curing all forms of genetic disorders"
          },
          "correct": "B",
          "reason": "Sabi sa huling pangungusap, ang exercise ay nagre-release ng endorphins na pampababa ng stress at anxiety."
        },
        "14": {
          "question": "[PASSAGE] Regular physical activity is one of the most effective ways to maintain physical and mental well-being. Engaging in exercises such as brisk walking, swimming, or cycling strengthens the cardiovascular system, improves muscle tone, and helps regulate body weight. Beyond physical health, exercise stimulates the release of endorphins—chemicals in the brain that act as natural mood lifters—which help reduce stress, anxiety, and symptoms of depression.\n\n[QUESTION] What kind of exercises are suggested in the passage?",
          "choices": {
            "A": "Extreme weightlifting and boxing",
            "B": "Brisk walking, swimming, or cycling",
            "C": "Marathon running every single day",
            "D": "Yoga and meditation only"
          },
          "correct": "B",
          "reason": "Diretsong binanggit sa teksto ang \"brisk walking, swimming, or cycling.\""
        },
        "15": {
          "question": "[PASSAGE] Regular physical activity is one of the most effective ways to maintain physical and mental well-being. Engaging in exercises such as brisk walking, swimming, or cycling strengthens the cardiovascular system, improves muscle tone, and helps regulate body weight. Beyond physical health, exercise stimulates the release of endorphins—chemicals in the brain that act as natural mood lifters—which help reduce stress, anxiety, and symptoms of depression.\n\n[QUESTION] What is the overall tone and purpose of the passage?",
          "choices": {
            "A": "To warn people against dangerous sports injuries",
            "B": "To inform and encourage readers about the benefits of physical activity",
            "C": "To advertise local gyms and fitness centers",
            "D": "To criticize people who do not exercise"
          },
          "correct": "B",
          "reason": "Layunin ng teksto na ipaalam ang mga magagandang epekto ng regular na ehersisyo sa katawan at isip."
        },
        "16": {
          "question": "[PASSAGE] The Banaue Rice Terraces, carved into the mountains of Ifugao over two thousand years ago by indigenous ancestors, stand as a testament to Filipino ingenuity and sustainable agriculture. Fed by an ancient irrigation system channeling water from the rainforests above, these 'stairways to the sky' prevent soil erosion while producing staple crops. Today, however, the terraces face threats from modernization, climate change, and out-migration of younger generations seeking urban jobs, prompting urgent preservation efforts.\n\n[QUESTION] How are the Banaue Rice Terraces irrigated according to the passage?",
          "choices": {
            "A": "Through modern electric water pumps",
            "B": "By an ancient system channeling water from rainforests above",
            "C": "Solely through seasonal typhoon rains",
            "D": "By diverting water from nearby lowland rivers"
          },
          "correct": "B",
          "reason": "Diretsong nakasaad sa ikalawang pangungusap: \"Fed by an ancient irrigation system channeling water from the rainforests above...\""
        },
        "17": {
          "question": "[PASSAGE] The Banaue Rice Terraces, carved into the mountains of Ifugao over two thousand years ago by indigenous ancestors, stand as a testament to Filipino ingenuity and sustainable agriculture. Fed by an ancient irrigation system channeling water from the rainforests above, these 'stairways to the sky' prevent soil erosion while producing staple crops. Today, however, the terraces face threats from modernization, climate change, and out-migration of younger generations seeking urban jobs, prompting urgent preservation efforts.\n\n[QUESTION] Which of the following is NOT mentioned as a current threat to the terraces?",
          "choices": {
            "A": "Modernization",
            "B": "Climate change",
            "C": "Volcanic eruptions",
            "D": "Out-migration of younger generations"
          },
          "correct": "C",
          "reason": "Ang mga nabanggit na banta sa teksto ay modernization, climate change, at out-migration ng mga kabataan—walang nabanggit na volcanic eruptions."
        },
        "18": {
          "question": "[PASSAGE] The Banaue Rice Terraces, carved into the mountains of Ifugao over two thousand years ago by indigenous ancestors, stand as a testament to Filipino ingenuity and sustainable agriculture. Fed by an ancient irrigation system channeling water from the rainforests above, these 'stairways to the sky' prevent soil erosion while producing staple crops. Today, however, the terraces face threats from modernization, climate change, and out-migration of younger generations seeking urban jobs, prompting urgent preservation efforts.\n\n[QUESTION] What does the phrase \"testament to Filipino ingenuity\" imply about the ancestors who built the terraces?",
          "choices": {
            "A": "They relied on foreign engineers to design the mountains.",
            "B": "They possessed remarkable skill, creativity, and engineering knowledge.",
            "C": "They built the terraces purely for tourist attraction.",
            "D": "They destroyed the rainforests to plant rice."
          },
          "correct": "B",
          "reason": "Ang salitang \"ingenuity\" ay nangangahulugang pagiging malikhain, matalino, at mahusay sa paglutas ng problema."
        },
        "19": {
          "question": "[PASSAGE] Telecommuting, or working from home, shifted from a rare perk to a mainstream work arrangement following global health crises. For employees, remote work eliminates exhausting daily commutes, lowers transportation expenses, and offers greater flexibility to balance family responsibilities. Employers also benefit through reduced office overhead costs and access to a wider talent pool beyond geographic boundaries. Nevertheless, organizations must address challenges such as digital fatigue, blurred work-life boundaries, and maintaining team cohesion virtually.\n\n[QUESTION] What is one advantage of remote work for employers mentioned in the text?",
          "choices": {
            "A": "Eliminating the need for internet connections",
            "B": "Reduced office overhead costs and access to a wider talent pool",
            "C": "Guaranteeing that employees work twice as fast",
            "D": "Avoiding payment of employee salaries"
          },
          "correct": "B",
          "reason": "Nakasaad sa ikatlong pangungusap: \"Employers also benefit through reduced office overhead costs and access to a wider talent pool...\""
        },
        "20": {
          "question": "[PASSAGE] Telecommuting, or working from home, shifted from a rare perk to a mainstream work arrangement following global health crises. For employees, remote work eliminates exhausting daily commutes, lowers transportation expenses, and offers greater flexibility to balance family responsibilities. Employers also benefit through reduced office overhead costs and access to a wider talent pool beyond geographic boundaries. Nevertheless, organizations must address challenges such as digital fatigue, blurred work-life boundaries, and maintaining team cohesion virtually.\n\n[QUESTION] What challenge associated with telecommuting must organizations address?",
          "choices": {
            "A": "Increased traffic congestion on highways",
            "B": "Higher spending on office electricity",
            "C": "Blurred work-life boundaries and digital fatigue",
            "D": "Lack of qualified applicants worldwide"
          },
          "correct": "C",
          "reason": "Nabanggit sa huling pangungusap ang \"digital fatigue, blurred work-life boundaries, and maintaining team cohesion.\""
        },
        "21": {
          "question": "[PASSAGE] Telecommuting, or working from home, shifted from a rare perk to a mainstream work arrangement following global health crises. For employees, remote work eliminates exhausting daily commutes, lowers transportation expenses, and offers greater flexibility to balance family responsibilities. Employers also benefit through reduced office overhead costs and access to a wider talent pool beyond geographic boundaries. Nevertheless, organizations must address challenges such as digital fatigue, blurred work-life boundaries, and maintaining team cohesion virtually.\n\n[QUESTION] What is the main idea of the passage?",
          "choices": {
            "A": "Remote work is completely ineffective and should be abolished.",
            "B": "Telecommuting offers mutual benefits to workers and employers, though it presents new challenges.",
            "C": "Employees only want to work from home to avoid doing their jobs.",
            "D": "Office buildings are no longer needed in modern cities."
          },
          "correct": "B",
          "reason": "Balanseng tinalakay ng talata ang mga benepisyo para sa parehong empleyado at employer, pati na ang mga hamon nito."
        },
        "22": {
          "question": "[PASSAGE] In an era dominated by social media, misinformation spreads faster than verified facts. Sensationalized headlines and manipulated images are often designed to trigger strong emotional reactions, prompting users to share content without checking its credibility. Practicing media literacy—such as verifying sources, cross-checking facts across reputable news outlets, and examining publication dates—is essential for citizens to make informed decisions and protect democratic discourse.\n\n[QUESTION] Why do users often share misinformation without verifying it?",
          "choices": {
            "A": "Because verified news websites are banned online",
            "B": "Because sensationalized content triggers strong emotional reactions",
            "C": "Because social media platforms require users to share every post",
            "D": "Because fact-checking websites charge expensive fees"
          },
          "correct": "B",
          "reason": "Sabi sa ikalawang pangungusap: \"...designed to trigger strong emotional reactions, prompting users to share content without checking its credibility.\""
        },
        "23": {
          "question": "[PASSAGE] In an era dominated by social media, misinformation spreads faster than verified facts. Sensationalized headlines and manipulated images are often designed to trigger strong emotional reactions, prompting users to share content without checking its credibility. Practicing media literacy—such as verifying sources, cross-checking facts across reputable news outlets, and examining publication dates—is essential for citizens to make informed decisions and protect democratic discourse.\n\n[QUESTION] Which of the following is an example of practicing media literacy according to the passage?",
          "choices": {
            "A": "Sharing posts immediately if they have many likes",
            "B": "Cross-checking facts across reputable news outlets",
            "C": "Reading only the headlines of articles",
            "D": "Ignoring publication dates on news stories"
          },
          "correct": "B",
          "reason": "Isa ito sa mga halimbawang ibinigay sa huling pangungusap: \"...verifying sources, cross-checking facts across reputable news outlets, and examining publication dates.\""
        },
        "24": {
          "question": "[PASSAGE] In an era dominated by social media, misinformation spreads faster than verified facts. Sensationalized headlines and manipulated images are often designed to trigger strong emotional reactions, prompting users to share content without checking its credibility. Practicing media literacy—such as verifying sources, cross-checking facts across reputable news outlets, and examining publication dates—is essential for citizens to make informed decisions and protect democratic discourse.\n\n[QUESTION] What does the word \"credible\" or \"credibility\" most nearly mean in the context of the passage?",
          "choices": {
            "A": "Popularity and entertainment value",
            "B": "Trustworthiness and factual accuracy",
            "C": "Speed of internet download",
            "D": "Emotional appeal"
          },
          "correct": "B",
          "reason": "Sa konteksto ng balita at impormasyon, ang \"credibility\" ay tumutukoy sa pagiging mapagkakatiwalaan at totoo ng isang source."
        },
        "25": {
          "question": "[PASSAGE] Antibiotic resistance occurs when bacteria evolve to withstand the drugs designed to kill them. A major driver of this global health threat is the misuse and overuse of antibiotics in humans and livestock—such as taking antibiotics for viral infections like the common cold, or failing to complete a prescribed dosage. When bacteria become resistant, common infections become harder to treat, leading to prolonged hospital stays, higher medical costs, and increased mortality.\n\n[QUESTION] What causes antibiotic resistance according to the text?",
          "choices": {
            "A": "Taking vitamins daily",
            "B": "Misuse and overuse of antibiotics in humans and livestock",
            "C": "Washing hands too frequently with soap",
            "D": "Eating organic fruits and vegetables"
          },
          "correct": "B",
          "reason": "Nakasaad sa ikalawang pangungusap na ang pangunahing sanhi nito ay \"misuse and overuse of antibiotics in humans and livestock.\""
        },
        "26": {
          "question": "[PASSAGE] Antibiotic resistance occurs when bacteria evolve to withstand the drugs designed to kill them. A major driver of this global health threat is the misuse and overuse of antibiotics in humans and livestock—such as taking antibiotics for viral infections like the common cold, or failing to complete a prescribed dosage. When bacteria become resistant, common infections become harder to treat, leading to prolonged hospital stays, higher medical costs, and increased mortality.\n\n[QUESTION] Which behavior is cited as an example of antibiotic misuse?",
          "choices": {
            "A": "Completing the full course of prescribed medicine",
            "B": "Consulting a doctor before taking medication",
            "C": "Taking antibiotics for viral infections like the common cold",
            "D": "Getting vaccinated against preventable diseases"
          },
          "correct": "C",
          "reason": "Diretsong binanggit sa teksto: \"...such as taking antibiotics for viral infections like the common cold, or failing to complete a prescribed dosage.\""
        },
        "27": {
          "question": "[PASSAGE] Antibiotic resistance occurs when bacteria evolve to withstand the drugs designed to kill them. A major driver of this global health threat is the misuse and overuse of antibiotics in humans and livestock—such as taking antibiotics for viral infections like the common cold, or failing to complete a prescribed dosage. When bacteria become resistant, common infections become harder to treat, leading to prolonged hospital stays, higher medical costs, and increased mortality.\n\n[QUESTION] What is a consequence of bacteria becoming resistant to antibiotics?",
          "choices": {
            "A": "Common infections become easier and cheaper to cure.",
            "B": "Common infections become harder to treat, increasing medical costs and mortality.",
            "C": "Viruses automatically turn into harmless bacteria.",
            "D": "Hospitals no longer need doctors."
          },
          "correct": "B",
          "reason": "Ayon sa huling pangungusap, nagreresulta ito sa mas mahirap na gamutan, mas matagal na pagkaka-ospital, mas mataas na gastos, at pagkamatay."
        },
        "28": {
          "question": "[PASSAGE] Public service is built on the foundational principle that a public office is a public trust. Civil servants are expected to uphold the highest standards of integrity, accountability, and responsiveness in serving the citizenry. Rather than viewing government positions as avenues for personal gain or political favoritism, public officials must prioritize the welfare of the community, ensuring that public resources are managed transparently and efficiently.\n\n[QUESTION] What is the foundational principle of public service mentioned in the passage?",
          "choices": {
            "A": "Public office is a family inheritance.",
            "B": "Public office is a public trust.",
            "C": "Public office guarantees financial wealth.",
            "D": "Public office is reserved only for politicians."
          },
          "correct": "B",
          "reason": "Makikita ito mismo sa unang pangungusap (at nakasaad din sa 1987 Philippine Constitution, Art. XI, Sec. 1)."
        },
        "29": {
          "question": "[PASSAGE] Public service is built on the foundational principle that a public office is a public trust. Civil servants are expected to uphold the highest standards of integrity, accountability, and responsiveness in serving the citizenry. Rather than viewing government positions as avenues for personal gain or political favoritism, public officials must prioritize the welfare of the community, ensuring that public resources are managed transparently and efficiently.\n\n[QUESTION] How should public resources be managed according to the text?",
          "choices": {
            "A": "Secretly and exclusively for political allies",
            "B": "Transparently and efficiently for the welfare of the community",
            "C": "Slowly to save government funds",
            "D": "Without any public accountability"
          },
          "correct": "B",
          "reason": "Sabi sa huling pangungusap: \"...prioritize the welfare of the community, ensuring that public resources are managed transparently and efficiently.\""
        },
        "30": {
          "question": "[PASSAGE] Public service is built on the foundational principle that a public office is a public trust. Civil servants are expected to uphold the highest standards of integrity, accountability, and responsiveness in serving the citizenry. Rather than viewing government positions as avenues for personal gain or political favoritism, public officials must prioritize the welfare of the community, ensuring that public resources are managed transparently and efficiently.\n\n[QUESTION] Which quality is NOT mentioned as an expectation for civil servants?",
          "choices": {
            "A": "Integrity",
            "B": "Accountability",
            "C": "Responsiveness",
            "D": "Political favoritism"
          },
          "correct": "D",
          "reason": "Ang political favoritism ay bagay na dapat iwasan ayon sa teksto (\"Rather than viewing government positions as avenues for personal gain or political favoritism...\")."
        }
      }
    }
  ]
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

