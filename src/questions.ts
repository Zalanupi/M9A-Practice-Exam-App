import { Question } from "./types";

export const allQuestions: Question[] = [
  // ==================== SINGAPORE COLLEGE OF INSURANCE (SCI) OFFICIAL MCQS ====================
  // (Extracted from the 100 Screenshots provided)
  {
    id: "SCI-01",
    set: "Review-Set",
    question: "Which one of the following statements regarding structured products is FALSE?",
    options: [
      "Most structured products are unsecured debt securities of the issuer.",
      "Structured products may be used to achieve specific risk-return profiles of investors.",
      "Structured products are typically more complex in nature as compared to a plain vanilla equity security.",
      "Investors in structured products are entitled to share the underlying securities' profits, similar to investors in equity securities."
    ],
    correctIndex: 3,
    explanation: "Incorrect statement. Structured products are unsecured debt obligations of the issuer. Unlike standard equity shares, structured products do not entitle holders to share in the issuer's or underlying asset's direct profits, dividends, or voting rights.",
    reference: "Chapter 1, Section 1"
  },
  {
    id: "SCI-02",
    set: "Review-Set",
    question: "In a structured product, a coupon-bearing bond or zero-coupon bond can be used in the structuring to:",
    options: [
      "prevent early redemption of the product.",
      "mirror the performance of an equity stock index.",
      "provide stability in returns or return of principal upon maturity.",
      "provide the upside performance potential of the structured product."
    ],
    correctIndex: 2,
    explanation: "Correct answer. The fixed-income component (such as a zero-coupon or coupon-bearing bond) is used in structuring to guarantee or provide stability for the return of principal at maturity.",
    reference: "Chapter 1, Section 1A"
  },
  {
    id: "SCI-03",
    set: "Review-Set",
    question: "Structured deposits are:",
    options: [
      "not investment products.",
      "a type of structured product.",
      "only distributed by fund management houses.",
      "covered under the Deposit Insurance Scheme."
    ],
    correctIndex: 1,
    explanation: "Correct answer. Structured deposits are a type of structured product. Despite their name, they are considered investment products and are explicitly excluded from the Deposit Insurance Scheme in Singapore.",
    reference: "Chapter 1, Section 1B"
  },
  {
    id: "SCI-04",
    set: "Review-Set",
    question: "Performance participation structured products:",
    options: [
      "are unsecured debt instruments.",
      "are commonly marketed under the name of 'notes'.",
      "are suitable for investors seeking maximum upside potential.",
      "feature all the above characteristics."
    ],
    correctIndex: 3,
    explanation: "Correct answer. Participation products are legally unsecured debentures, commonly marketed as 'notes' or 'certificates', offering full or capped upside potential without robust downside principal protection.",
    reference: "Chapter 1, Section 3C"
  },
  {
    id: "SCI-05",
    set: "Review-Set",
    question: "Wrappers are designed with different formats to meet investors' needs. Jean requested a wrapper that could provide her with greater transparency on the charges and investment performance, backed by an independent third-party trustee to serve as a watchdog. She is looking purely for investment returns. Which wrapper matches her requirement?",
    options: [
      "Structured funds.",
      "Structured notes.",
      "Structured derivatives.",
      "Structured Investment-linked policy."
    ],
    correctIndex: 0,
    explanation: "Correct answer. A structured fund (Collective Investment Scheme/CIS) structured as a trust holds its assets with an independent trustee acting as a watchdog, providing high transparency on charges.",
    reference: "Chapter 1, Section 1B"
  },
  {
    id: "SCI-06",
    set: "Review-Set",
    question: "Which one of the following statements on determining structured product suitability is CORRECT?",
    options: [
      "Structured products are a good form of short-term instruments for investors with a 2-3 years investment horizon.",
      "Although structured products have a fixed maturity date, they typically allow investors to cash in early without penalty or additional charges.",
      "Structured products are able to simultaneously provide an investor with capital appreciation and capital protection better than market return and high liquidity.",
      "As structured products are complex instruments, a financial consultant should provide to his clients all relevant information and be guided by the Fair Dealing Guidelines."
    ],
    correctIndex: 3,
    explanation: "Correct answer. Structured products are complex, illiquid, and carry unique risk drivers. The financial advisor must provide all relevant point-of-sale disclosures and act in alignment with the Fair Dealing Guidelines.",
    reference: "Chapter 1, Section 5B2"
  },
  {
    id: "SCI-07",
    set: "Review-Set",
    question: "Which of the following products is deemed to be a yield-enhancing structured product?",
    options: [
      "Airbag certificates.",
      "Credit-linked notes.",
      "Tracker certificates.",
      "Discount certificates."
    ],
    correctIndex: 3,
    explanation: "Correct answer. Yield-enhancing instruments include reverse convertibles and discount certificates. These offer capped upside potential in exchange for high premium yields.",
    reference: "Chapter 1, Section 3B2"
  },
  {
    id: "SCI-08",
    set: "Review-Set",
    question: "Sarah walks into ANP bank to place a time deposit of $80,000. The bank officer recommends a product whose capital will be guaranteed by the bank upon maturity. Sarah will be an unsecured creditor of the bank. What is this product?",
    options: [
      "Time deposits.",
      "Corporate bonds.",
      "Structured funds.",
      "Structured deposits."
    ],
    correctIndex: 3,
    explanation: "Correct answer. Structured deposits are issued by banks, offering a bank-backed capital guarantee upon maturity, while leaving the investor as an unsecured creditor in liquidation.",
    reference: "Chapter 1, Section 1B"
  },
  {
    id: "SCI-09",
    set: "Review-Set",
    question: "Hassan invested $10,000 in Fund X (tracking Straits Times Index basket). A week later, he invested $20,000 in Fund Y (using derivatives to replicate Bombay Stock Exchange index). Both are listed. Which statement is CORRECT?",
    options: [
      "Fund X is an Exchange Traded Fund and Fund Y is an Exchange Traded Note.",
      "Capital protection on Funds X and Y Fund are provided by the stock exchange.",
      "Fund X is an Exchange Traded Fund and Fund Y is a structured Exchange Traded Fund.",
      "Fund X is subject to the code on Collective Investment Scheme whereas Fund Y is exempted."
    ],
    correctIndex: 2,
    explanation: "Correct answer. Under exchange listings, listed funds utilizing derivatives to synthesize index exposure are classified as structured or 'synthetic' ETFs, while standard ones are regular physical ETFs.",
    reference: "Chapter 1, Section 3"
  },
  {
    id: "SCI-10",
    set: "Review-Set",
    question: "Bonus certificates are tracker certificates with conditional downside protection which hinges on a pre-determined barrier. If the barrier is crossed at any point, the protection is off, and the investor is paid the actual underlying value at maturity. What is this feature known as?",
    options: [
      "Knock in.",
      "Knock out.",
      "Contagion.",
      "Airbag mechanism."
    ],
    correctIndex: 1,
    explanation: "Correct answer. This feature is known as 'knock-out'. Once the underlying hits or crosses the barrier, the downside protection structure terminates permanently.",
    reference: "Chapter 1, Section 3C2"
  },
  {
    id: "SCI-11",
    set: "Review-Set",
    question: "Which of the following describes a key feature of a tracker certificate?",
    options: [
      "It operates with an upside cap and downside protection.",
      "It may not have a maturity date.",
      "It cannot be linked to a tailor-made index.",
      "It features all the above elements."
    ],
    correctIndex: 1,
    explanation: "Correct answer. A tracker certificate has neither an upside cap nor downside protection. It tracks its asset directly, has no fixed maturity date, and is typically launched as open-ended.",
    reference: "Chapter 1, Section 3C1"
  },
  {
    id: "SCI-12",
    set: "Review-Set",
    question: "Which one of the following products is traded on margin?",
    options: [
      "Bonds.",
      "Warrants.",
      "Time deposits.",
      "Futures contracts."
    ],
    correctIndex: 3,
    explanation: "Correct answer. Futures contracts are traded on margin, requiring the investor to deposit a fraction of the total contract value (initial margin) to hold the position.",
    reference: "Chapter 2, Section 5B"
  },
  {
    id: "SCI-13",
    set: "Review-Set",
    question: "Thomas invested $5,000 in Steel Ltd shares listed in Hong Kong. The trading volume has sat in the bottom five daily for several months. Thomas now needs to cash out the investment immediately for school fees. What risk is he struggling with?",
    options: [
      "Market risk.",
      "Liquidity risk.",
      "Counter party risk.",
      "Foreign Exchange Risk."
    ],
    correctIndex: 1,
    explanation: "Correct answer. Liquidity risk from an investor's perspective is the risk of being unable to convert an investment to cash quickly at a fair, reasonable market price.",
    reference: "Chapter 2, Section 3"
  },
  {
    id: "SCI-14",
    set: "Review-Set",
    question: "In a situation where a financial institution is unable to meet a temporary cash crunch, which risk is the institution encountering?",
    options: [
      "Credit risk.",
      "Liquidity risk.",
      "Regulatory risk.",
      "Interest rate risk."
    ],
    correctIndex: 1,
    explanation: "Correct answer. Institutional liquidity risk refers to an entity's temporary or structural shortfall in securing cash to settle daily margin calls or claims.",
    reference: "Chapter 2, Section 3"
  },
  {
    id: "SCI-15",
    set: "Review-Set",
    question: "Which one of the following statements BEST describes the role of a market maker?",
    options: [
      "The market maker ensures that there is always a buyer when there is a seller in the market.",
      "The market maker ensures that the trading volume is sufficient to earn a minimal commission for the fund manager.",
      "The market maker ensures that price increment is suppressed, especially before the announcement of favourable news.",
      "The market maker ensures that the price of the underlying asset always increases to attract more buyers to the investment."
    ],
    correctIndex: 0,
    explanation: "Correct answer. A market maker's duty is to supply bidirectional market liquidity by providing continuous, binding buy and sell quotes.",
    reference: "Chapter 2, Section 3"
  },
  {
    id: "SCI-16",
    set: "Review-Set",
    question: "Jason invested S$100,000 into a Global equity fund denominated in USD. Over 5 years the fund yielded 2% p.a. in USD, but when converted to SGD, the return was only 1.1% p.a. What caused this lower return?",
    options: [
      "There was a fall in liquidity of Singapore Dollar.",
      "There was a lack of diversification of the investment assets.",
      "There was an appreciation of US Dollar over Singapore Dollar over the 5 years.",
      "There was an appreciation of Singapore Dollar over US Dollar over the 5 years."
    ],
    correctIndex: 3,
    explanation: "Correct answer. An appreciation of the home currency (SGD) relative to the foreign asset currency (USD) diminishes the converted local currency payout.",
    reference: "Chapter 2, Section 5"
  },
  {
    id: "SCI-17",
    set: "Review-Set",
    question: "Which of the following statements regarding issuer-specific risks faced by structured product investors is TRUE?",
    options: [
      "Regulatory actions will not trigger issuer-specific risks.",
      "Issuer-specific risks cannot affect an entire industry sector.",
      "The risk arises when an issuer has its credit rating downgraded.",
      "All of the above."
    ],
    correctIndex: 2,
    explanation: "Correct answer. An obvious example of issuer-specific risk is a credit downgrade of the issuing entity, causing direct markdown of its outstanding bonds and notes.",
    reference: "Chapter 2, Section 1B"
  },
  {
    id: "SCI-18",
    set: "Review-Set",
    question: "What can a default by the derivative counterparty in a structured product lead to?",
    options: [
      "Total loss of capital for the investor.",
      "Early redemption of the structured product.",
      "A lower redemption amount for the investor.",
      "All of the above outcomes."
    ],
    correctIndex: 3,
    explanation: "Correct answer. A counterparty default can trigger a structural failure, leading to early termination, loss of principal, or reduced payouts.",
    reference: "Chapter 2, Section 6E"
  },
  {
    id: "SCI-19",
    set: "Review-Set",
    question: "ABB financial institution has suffered tremendous losses in its derivatives trading. The chief operating officer has authorised the firm’s risk management system to allow the firm to bear excessive solvency risk. The loss is so huge that ABB files for bankruptcy. Arising thereof, a few major banks which have dealings with ABB take big losses to their books. Which of the following describes the risk that result in huge losses by the other major banks?",
    options: [
      "Market risk.",
      "Modelling risk.",
      "Regulatory risk.",
      "Counterparty risk."
    ],
    correctIndex: 3,
    explanation: "This is a direct example of counterparty risk. When ABB went bankrupt and defaulted on its mutual derivatives agreements, other dealing financial counterparties had to write down massive credit losses.",
    reference: "Chapter 2, Section 2"
  },
  {
    id: "SCI-20",
    set: "Review-Set",
    question: "Suppose the June futures price for corn is S$3.60 per bushel, and the cash price is S$3.10. What is the basis of this contract?",
    options: [
      "5 cents over June.",
      "5 cents under June.",
      "50 cents over June.",
      "50 cents under June."
    ],
    correctIndex: 3,
    explanation: "Correct answer. Basis = Spot Price - Futures Price = S$3.10 - S$3.60 = -S$0.50, which is described as '50 cents under June'.",
    reference: "Chapter 2, Section Basis"
  },
  {
    id: "SCI-21",
    set: "Review-Set",
    question: "John wants to leverage a small capital outlay for unlimited upside potential without owning physical stocks. Which option strategy is MOST suitable?",
    options: [
      "Long call.",
      "Naked put.",
      "Covered call.",
      "Protective put."
    ],
    correctIndex: 0,
    explanation: "Correct answer. Buying a call option (long call) gives the holder high leverage, capped downside loss, and unlimited upside potential.",
    reference: "Chapter 3, Section 3D1"
  },
  {
    id: "SCI-22",
    set: "Review-Set",
    question: "A call warrant is MOST suitable for investors who have which outlook?",
    options: [
      "A bearish view of the market.",
      "A bullish view of the market.",
      "A neutral view of the market seeking capital preservation.",
      "An intention to hold bonds long-term for yield."
    ],
    correctIndex: 1,
    explanation: "Correct answer. A call warrant acts like a call option, growing in value as the underlying asset price rises; it is thus highly suitable for bullish investors.",
    reference: "Chapter 3, Section 3A"
  },
  {
    id: "SCI-23",
    set: "Review-Set",
    question: "On 20 April 2020, Adrian bought a European call option on ABC shares at a strike price of $5. The option expired on 30 June 2020. The price of ABC shares rose from $5 to $7 in May 2020. On 28 June 2020, the price of ABC shares fell to $3 as the company lost two major customers due to COVID-19. Thereafter, the share price varied from $2 to $4 for the rest of the year in 2020. What can you say about the call option?",
    options: [
      "In-the-money.",
      "Out-of-the money.",
      "Best-of-the money.",
      "In-and-Out of the money."
    ],
    correctIndex: 1,
    explanation: "At expiration (30 June 2020), the spot price of ABC ($3) is below the strike price ($5) of the European call option. Thus, at expiration, the call option is out-of-the-money (OTM).",
    reference: "Chapter 3, Section 3"
  },
  {
    id: "SCI-24",
    set: "Review-Set",
    question: "Janelle wants an option contract where payoffs are driven by the average price of the asset over a period instead of its spot price at maturity. Which option matches her request?",
    options: [
      "Asian option.",
      "Chooser option.",
      "Rainbow option.",
      "Compound option."
    ],
    correctIndex: 0,
    explanation: "Correct answer. An Asian option (also average price option) measures the average underlying price over a pre-specified period to calculate payoffs.",
    reference: "Chapter 3, Section 3B"
  },
  {
    id: "SCI-25",
    set: "Review-Set",
    question: "The 12-month forward price of corn is S$2.60 per bushel, and the current spot price is S$3.00. In this case, the cost of carry represents a:",
    options: [
      "discount of S$0.80.",
      "discount of S$0.40.",
      "premium of S$0.80.",
      "premium of S$0.40."
    ],
    correctIndex: 1,
    explanation: "Correct answer. Forward = Spot + Cost of Carry. S$2.60 = S$3.00 + Cost of Carry, and thus Cost of Carry = -S$0.40, which represents a discount of S$0.40.",
    reference: "Chapter 3, Section 2A"
  },
  {
    id: "SCI-26",
    set: "Review-Set",
    question: "Janice invested into a structured product. She was informed by her financial advisor that she is effectively investing into unsecured debentures of the issuers. Which of the following has she invested in?",
    options: [
      "Structured funds.",
      "Structured notes.",
      "Structured deposits.",
      "Structured investment linked policies."
    ],
    correctIndex: 1,
    explanation: "Structured notes are debt instruments issued by financial institutions and are legally unsecured debentures of the issuing institutions.",
    reference: "Chapter 1, Section 1B"
  },
  {
    id: "SCI-27",
    set: "Review-Set",
    question: "Which one of the following operates like a term insurance plus a structured fund, where the term insurance provides insurance coverage, and the structured fund provides the investment return?",
    options: [
      "Structured fund.",
      "Term insurance policy.",
      "Whole life insurance policy.",
      "Structured investment-linked life insurance policy."
    ],
    correctIndex: 3,
    explanation: "A structured investment-linked life insurance policy operates like a term insurance policy combined with a structured fund, delivering both core life coverage and a structured investment payout.",
    reference: "Chapter 1, Section 1B"
  },
  {
    id: "SCI-28",
    set: "Review-Set",
    question: "Structured products generally contain a return on principal and an investment return. Which one of the following instruments is used to achieve the investment return?",
    options: [
      "Unit trust.",
      "Derivatives.",
      "Treasury bills.",
      "Fixed income securities."
    ],
    correctIndex: 1,
    explanation: "The investment return component of structured products is typically achieved through embedded derivative contracts, such as options, forwards, or swap structures.",
    reference: "Chapter 1, Section 2"
  },
  {
    id: "SCI-29",
    set: "Review-Set",
    question: "Which one of the following products tracks the performance of an underlying asset such as a tailor-made index?",
    options: [
      "Bonus certificates.",
      "Tracker certificate.",
      "Capital-guaranteed fund.",
      "Credit-linked structured fund."
    ],
    correctIndex: 1,
    explanation: "A tracker certificate directly tracks the price performance of a specific underlying asset, basket, or a tailor-made index on a 1-to-1 basis.",
    reference: "Chapter 1, Section 3C1"
  },
  {
    id: "SCI-30",
    set: "Review-Set",
    question: "Jeremy would like to invest in a structured product that provides returns higher than those from traditional fixed income instruments, at slightly higher risk but with a capped upside. Which one of the following products can offer him an enhancement on yields?",
    options: [
      "Tracker certificate.",
      "Equity-linked notes.",
      "Capital-guaranteed funds.",
      "Reverse convertible bonds."
    ],
    correctIndex: 3,
    explanation: "Reverse convertible bonds are yield-enhancement structured products that offer coupon yields higher than traditional fixed income by accepting capped upside and stock conversion risk.",
    reference: "Chapter 1, Section 3B1"
  },
  {
    id: "SCI-31",
    set: "Review-Set",
    question: "Money Insurance has introduced a flexible Whole Life ILP product that invests in a variety of funds, including a structured fund called Wealth Fund. The unit is sold at $1 at the inception. After three years, its net asset value is $0.9299. What can you deduce from the change in net asset value?",
    options: [
      "The fund has sustained a loss of 5%.",
      "The fund has sustained a loss of 7%.",
      "The fund is able to hedge against inflation.",
      "The fund's nominal value is higher than its real value by 7%."
    ],
    correctIndex: 1,
    explanation: "The calculation of change is ((0.9299 / 1) - 1) * 100 = -7.01%. Thus, the Wealth Fund has sustained a capital loss of approximately 7%.",
    reference: "Product Valuation"
  },
  {
    id: "SCI-32",
    set: "Review-Set",
    question: "Vincent has spoken to Mary, his financial consultant that he wants the convenience of buying one policy, and being able to change asset allocation, fund selection, and make regular withdrawals when his primary investment objectives and financial needs change over time. Which of the following should Mary recommend to him?",
    options: [
      "Portfolio bond.",
      "Term Insurance policy.",
      "Investment Linked policy.",
      "Participating Whole Life Insurance Policy."
    ],
    correctIndex: 0,
    explanation: "A portfolio bond acts as a flexible lifetime wrapper, allowing investors to change fund categories, adjust asset allocations, or make routine systemic withdrawals without needing multiple insurance contracts.",
    reference: "Chapter 5, Section 1"
  },
  {
    id: "SCI-33",
    set: "Review-Set",
    question: "In which one of the following is disclosure of a fund’s performance done in a CORRECT manner?",
    options: [
      "The insurer should not state the return on the ILP sub-fund that has been achieved since the inception of the ILP sub-fund.",
      "The disclosure includes a warning that any past performance of the ILP sub-fund is indicative of the future performance of the ILP sub-fund.",
      "The insurer should include in the product summary, or in any of the documents provided to the policy owners, any information on past performance based on the simulated results of a hypothetical fund.",
      "The insurer should not include in a product summary any comparison of the past performance of the ILP sub-fund with that of another form of investment unless they have similar risk profiles and the basis of calculation is indicated."
    ],
    correctIndex: 3,
    explanation: "Under point-of-sale reporting directives, insurers are strictly forbidden from comparing past performance of an ILP sub-fund with another asset type unless they share equivalent risk profiles and include full math disclosures.",
    reference: "Chapter 4, Section 6A"
  },
  {
    id: "SCI-34",
    set: "Review-Set",
    question: "Sam decides to invest S$200,000 in the following investment: Star Asia Fund (SGD-based) issued and distributed by TG Bank. The fund seeks yearly investment returns that track the performance of the MSCI Asia ex-Japan Index. What risk(s) is / are Sam’s investment subject to?",
    options: [
      "Credit risk.",
      "Market risk.",
      "Counterparty risk.",
      "All of the above risks."
    ],
    correctIndex: 3,
    explanation: "Sam's investment carries general market risk (MSCI index fluctuations), credit risk of the issuing institution bank (TG Bank), and counterparty default risk on embedded instruments.",
    reference: "Chapter 4, Section 5B"
  },
  {
    id: "SCI-35",
    set: "Review-Set",
    question: "Paul bought a regular premium structured investment-linked policy. He was informed by his financial consultant that 50% of the first-year premium would be used for the payment of an expense. For single premiums, it could be at 5%. What type of expense is the financial consultant referring to?",
    options: [
      "Trustee fees.",
      "Mortality charge.",
      "Fund management fees.",
      "Front end sales charges."
    ],
    correctIndex: 3,
    explanation: "Front-end sales charges are deducted upfront before capital allocation. They often consume up to 50% of the initial premium in year one of regular premium ILP policies.",
    reference: "Chapter 4, Section 2B1"
  },
  {
    id: "SCI-36",
    set: "Review-Set",
    question: "The insurer must provide a Semi-Annual Report to the policy owners. Which one of the following is the least relevant information to be included in the report?",
    options: [
      "Market value of investments.",
      "Top 10 holdings at market value.",
      "Market value of exposure to derivatives.",
      "Market value of the insurer and its related entities."
    ],
    correctIndex: 3,
    explanation: "The general market value of the insurance company itself is corporate data, making it least relevant to the financial reports of the specific, segregated sub-funds owned by policyholders.",
    reference: "Chapter 4, Section 6C"
  },
  {
    id: "SCI-37",
    set: "Review-Set",
    question: "After speaking to his friends and financial consultant, Fabian is comparing a traditional whole life insurance policy (Life) with structured investment linked policies (ILP). Given his risk profile, Fabian could take up the structured ILP. Which of the following statements on the two products is CORRECT?",
    options: [
      "Both ILP and Life could only offer non-guaranteed benefits.",
      "Death benefits for ILP is typically very low when compared to Life.",
      "All ILP provides monthly payouts whereas all Life provides annual payouts.",
      "For both Life and ILP, insurers typically do not credit the full extent of investment gains in good years, saving some of the gains to make up for the losses in bad years in order to smoothen the returns."
    ],
    correctIndex: 1,
    explanation: "Death protection benefits provided under structured investment-linked policies (ILPs) are usually lower than those of traditional Whole Life policies, as ILPs prioritize fund growth.",
    reference: "Chapter 4, Section 1A"
  },
  {
    id: "SCI-38",
    set: "Review-Set",
    question: "Meng would like to have an option to buy Bigbird Anyway (BA) shares. BA shares are currently trading at $30 per share. As Meng is unsure of the impact of COVID-19 on the share price, he wants to enter into a current arrangement where a call option to buy 100 BA shares would only come into effect on 1 September 2021 at a strike price that is based on BA share price on 1 September 2021. Which of the following could he consider?",
    options: [
      "Asian option.",
      "Binary option.",
      "Futures Knock-out",
      "Forward-start option."
    ],
    correctIndex: 3,
    explanation: "A forward-start option is an exotic choice where the contract is established today, but the official strike and active coverage period only commence on a future set date.",
    reference: "Chapter 3, Section 3B"
  },
  {
    id: "SCI-39",
    set: "Review-Set",
    question: "Forward contracts:",
    options: [
      "are traded on exchanges.",
      "are not a form of derivative contract.",
      "are not subject to margin requirements.",
      "feature all the above characteristics."
    ],
    correctIndex: 2,
    explanation: "Conventionally negotiated over-the-counter (OTC) forward agreements are bespoke bilateral contracts and are not subject to standard exchange-mandated margin requirement systems.",
    reference: "Chapter 3, Section 2"
  },
  {
    id: "SCI-40",
    set: "Review-Set",
    question: "Roy has opened a margin trading account with Good Money Brokerage firm. Recently, he was informed by his broker to deposit $300 into his margin account due to the loss of his Futures contract. Which one of the following CORRECTLY relates to his situation?",
    options: [
      "Roy has a margin call as his Futures loss has led to a margin reversal.",
      "Roy has to restore his amount in the margin account to the maintenance level.",
      "The Futures contract is marked to market on a daily basis and Roy has to restore his account to the initial margin by $300.",
      "$300 is sometimes referred to as equalising margin, that is an amount needed to ensure that Roy’s Futures contract is warehoused."
    ],
    correctIndex: 2,
    explanation: "Futures positions are marked to market daily. When an account value dips below the maintenance limit, the holder receives a margin call to restore the funds back to the full initial margin level.",
    reference: "Chapter 3, Section 2F"
  },
  {
    id: "SCI-41",
    set: "Review-Set",
    question: "Jimmy, a fund manager with BMT Money Wiz, was managing a portfolio of Singapore stocks that tracks closely to the Straits Times Index (STI). His portfolio was $10,000,000 and his portfolio beta is 1.07. In January 2020, he was troubled about a market decline after reading news on the Wuhan virus. The March STI Futures contract was priced at 3000 index points. Based on a multiplier of $10 per point, what was the best thing he did to address the potential fall in the stock market?",
    options: [
      "Sold 333 STI Futures Contract.",
      "Sold 357 STI Futures Contract.",
      "Bought 333 STI Futures Contract.",
      "Bought 357 STI Futures Contract."
    ],
    correctIndex: 1,
    explanation: "To hedge market falls, Jimmy must sell (short) futures contracts. Under the hedge formula: (Portfolio Value / Futures Contract Size) * Beta = ($10,000,000 / (3,000 * $10)) * 1.07 = 333.33 * 1.07 = 356.67 => 357 contracts (round up).",
    reference: "Chapter 3, Section 2G"
  },
  {
    id: "SCI-42",
    set: "Review-Set",
    question: "Which one of the following forward contracts is normally settled in cash rather than physical delivery?",
    options: [
      "Corn forwards.",
      "Wheat forwards.",
      "Soybean forwards.",
      "Brent 15-day forwards."
    ],
    correctIndex: 3,
    explanation: "While agricultural commodities (corn, wheat, soybeans) are traditionally structured for physical commodity delivery, Brent 15-day oil forwards routinely settle in cash.",
    reference: "Chapter 3, Section 2"
  },
  {
    id: "SCI-43",
    set: "Review-Set",
    question: "Which one of the following is a derivative?",
    options: [
      "Swaps.",
      "Time deposits.",
      "Publicly traded shares.",
      "Singapore Government securities."
    ],
    correctIndex: 0,
    explanation: "Swaps are primary OTC financial derivatives whose valuations are based continuously on an underlying benchmark, interest rate differential, or currency rate.",
    reference: "Chapter 3, Section 1"
  },
  {
    id: "SCI-44",
    set: "Review-Set",
    question: "Which one of the following could an airline enter into for it to hedge against volatility in fuel prices?",
    options: [
      "Equity swap.",
      "Airline stocks.",
      "Airline bonds.",
      "Commodity swap."
    ],
    correctIndex: 3,
    explanation: "To hedge jet oil/fuel price volatility overhead, companies conventions involve entering into commodity swaps to lock in fixed fuel prices over predetermined dates.",
    reference: "Chapter 3, Section 4E"
  },
  {
    id: "SCI-45",
    set: "Review-Set",
    question: "There are generally two types of investors - hedgers and speculators. Hedgers typically seek to:",
    options: [
      "provide market liquidity.",
      "buy at low prices and sell at high prices.",
      "profit from favourable price movements.",
      "buy and lock in a price to obtain protection from rising prices."
    ],
    correctIndex: 3,
    explanation: "The core motivation of a hedger is risk mitigation. They buy derivatives to lock in a specific contract price, insulating their operations from unpredictable market price increases.",
    reference: "Chapter 3, Section 2G"
  },
  {
    id: "SCI-46",
    set: "Review-Set",
    question: "The price of ABB stocks has been volatile for several weeks. Florence could enter into an option contract on the stocks with her counterparty but she is uncertain of the direction of the share price. Therefore, she wanted to be given a period of time before the option expires to decide whether the option is to be a call or put option. Which of the following options would meet her needs?",
    options: [
      "Chooser option.",
      "Up-and-in option.",
      "Compound option.",
      "Down-and-in option."
    ],
    correctIndex: 0,
    explanation: "A chooser option gives the buyer the unique right to decide on an agreed future date whether the contract behaves as a standard call or put option.",
    reference: "Chapter 3, Section 3B"
  },
  {
    id: "SCI-47",
    set: "Review-Set",
    question: "What is the meaning of counterparty risk in a financial transaction?",
    options: [
      "It refers to money laundering risk.",
      "It refers to the risk that the counterparty is a politically linked person.",
      "It refers to the unhappiness of the counterparty to a financial transaction.",
      "It refers to the risk that the counterparty is unable to meet contractual obligations."
    ],
    correctIndex: 3,
    explanation: "Counterparty risk is the hazard that the other party involved in a mutual financial transaction fails to honor their contractual obligations and defaults.",
    reference: "Chapter 2, Section 2"
  },
  {
    id: "SCI-48",
    set: "Review-Set",
    question: "Market risk affects the prices of stocks and bonds. What is the impact on the share price of a manufacturing company, which has substantial loan borrowings from a bank, when interest rate rises?",
    options: [
      "No impact as interest rate affects only bond prices.",
      "Rapid upward and downward movements in share price.",
      "Downward pressure on the share price due to reduction in profitability.",
      "Upward pressure on the share price due to appreciation in profitability."
    ],
    correctIndex: 2,
    explanation: "Rising interest rates impose higher debt financing expenses on companies with substantial loan borrowings, decreasing their profit margin and dampening stock valuations.",
    reference: "Chapter 2, Section 1B"
  },
  {
    id: "SCI-49",
    set: "Review-Set",
    question: "Lee Ah Sam bought a stock call option of ACC Coffee Bean’s shares for $2. The exercise price of the shares is $12. Within the next three days, ACC Coffee Bean’s share price increased from $14 to $18. What is the percentage change in the intrinsic value of the option?",
    options: [
      "60%",
      "100%",
      "150%",
      "200%"
    ],
    correctIndex: 3,
    explanation: "Initial Call Intrinsic value = $14 - $12 = $2. New Call Intrinsic value = $18 - $12 = $6. Percentage change = (($6 - $2) / $2) * 100 = 200%.",
    reference: "Derived Value / Intrinsic Value"
  },
  {
    id: "SCI-50",
    set: "Review-Set",
    question: "Teng has distributed his fund evenly to create a portfolio of ten uncorrelated stocks. One of the stocks, named Sugary Trading Ltd (STL), has a business presence in Myanmar. Due to the unrest in Yangon, the business in Myanmar faces operational and business risks. Price of STL falls by more than 50%. As a result, what would be the impact on Teng’s portfolio?",
    options: [
      "Teng’s portfolio would encounter credit risk arising from the failure of Sugary Trading Ltd.",
      "Teng’s portfolio would encounter significant market risk arising from the failure of Sugary Trading Ltd.",
      "Teng’s portfolio would experience significant loss as the fall in the price Sugary Trading Ltd would drag down the price of the remaining nine stocks.",
      "Teng’s portfolio would encounter issuer specific risk arising from the aftermath of Sugary Trading Ltd but it is well-diversified to withstand the impact of one stock."
    ],
    correctIndex: 3,
    explanation: "The crisis represents an issuer-specific risk for Sugary Trading. Since Teng holds an evenly weighted portfolio in ten uncorrelated names, a drop in one stock has a capped, diversified impact of 5% overall.",
    reference: "Chapter 2, Section 1B"
  },
  {
    id: "SCI-51",
    set: "Review-Set",
    question: "Peter bought a put option on DCC shares at a strike price of $12 per share. The current share price of DCC shares is $10 per share. If the price of DCC shares changes by 30%, how would this affect the intrinsic value of the put option?",
    options: [
      "If the share price rises by 30%, the intrinsic value of put option falls by 100%.",
      "If the share price rises by 30%, the intrinsic value of put option falls by 250%.",
      "If the share price falls by 30%, the intrinsic value of the put option rises by 50%.",
      "If the share price falls by 30%, the intrinsic value of the put option rises by 200%."
    ],
    correctIndex: 0,
    explanation: "Initial Intrinsic value of Put = Strike - Spot = $12 - $10 = $2. If the price increases by 30% (+$3) to $13, Put Intrinsic value = Max(0, $12 - $13) = $0. The fall from $2 to $0 represents a 100% loss.",
    reference: "Option Value Calculation"
  },
  {
    id: "SCI-52",
    set: "Review-Set",
    question: "Justin wanted to buy 1000 HYN stocks by the end of next month. The stock is currently trading at $15. He feels that the share price is slightly higher than his expectation and would like to wait for another few weeks before buying the share. What could Justin do such that even if the price goes up later, he would still be able to acquire them with a discount relative to the market price?",
    options: [
      "Sell a naked call option.",
      "Sell a naked put option.",
      "Sell a naked put and call option at the same strike price and expiration date.",
      "Buy a naked put and sell a naked call option at the same strike price and expiration date."
    ],
    correctIndex: 1,
    explanation: "Selling a naked put option generates premium income (which acts as a discount on the acquisition cost) while obligating the seller to purchase the shares if they trade at or below the strike price.",
    reference: "Chapter 3, Section 3D4"
  },
  {
    id: "SCI-53",
    set: "Review-Set",
    question: "Under what circumstance would a long put option strategy be BEST suited for an investor in relation to the price of a security?",
    options: [
      "The investor is bullish about the market.",
      "The investor is bearish about the market.",
      "The investor is neutral about the market.",
      "The investor believes there will be limited movement in the market."
    ],
    correctIndex: 1,
    explanation: "A long put option strategy (buying a put) provides the holder with the right to sell the security at a fixed strike, making it most valuable and best suited when the investor expects a bearish (declining) market.",
    reference: "Chapter 3, Section 3E"
  },
  {
    id: "SCI-54",
    set: "Review-Set",
    question: "An investor manages to reduce the risk of his portfolio by investing in 20 stocks instead of putting all his money into one stock. Next, he further combines his equities portfolio with his structured products. Which of the following statements on his portfolio strategy is CORRECT?",
    options: [
      "He achieves maximum diversification when all 20 stocks are positively correlated.",
      "He achieves further diversification when his equities portfolio and structured bonds have zero or negative correlation.",
      "There is no further diversification that he can achieve by combining asset classes together since diversification can only take place within each asset class.",
      "When an investor diversifies all risks a, leaving little to no risk in the portfolio, his potential return of the combined asset classes will probably have reached his highest."
    ],
    correctIndex: 1,
    explanation: "Portfolio theory dictates that further diversification is achieved when combining different assets (such as equities and structured products) that exhibit zero or negative correlation relative to each other.",
    reference: "Chapter 2, Section 6B"
  },
  {
    id: "SCI-55",
    set: "Review-Set",
    question: "32-year-old Calissa likes to invest in structured products. She holds a Master in Finance from Yale University. She serves as Corporate Development Director of Mass Wire Ltd, a digital company owned by her family. Single and independent, Calissa spends a large part of her time at work. She takes significant risks when expanding her family business. She has indicated her interest to bear full upside potential and downside risks on her investment. She does not have any pressing need for liquidity. Which of the following products would be suitable for her consideration?",
    options: [
      "Index options.",
      "Tracker certificate.",
      "Convertible bonds.",
      "Capital guaranteed fund."
    ],
    correctIndex: 1,
    explanation: "Since Calissa explicitly wishes to bear full upside potential and downside risks with no pressing liquidity needs, a tracker certificate is highly suitable as it replicates 1-to-1 the underlying asset performance with zero downside protection.",
    reference: "Chapter 1, Section 3C1"
  },
  {
    id: "SCI-56",
    set: "Review-Set",
    question: "Bonds are an important component of structured products. Some bonds are senior bonds while others are subordinated bonds. What is the impact on the bond holders in the event of liquidation of the issuer?",
    options: [
      "Senior bond holders would be paid before subordinated bond holders.",
      "Subordinated bond holders would be paid before senior bond holders.",
      "Subordinated bond holders and senior bond holders would be paid at the same time.",
      "Both senior and subordinated bond holders would receive share warrants during liquidation."
    ],
    correctIndex: 0,
    explanation: "In the event of liquidation, senior bondholders have a higher claim priority and must be paid in full from the issuer's liquidated assets before any payments are made to subordinated bondholders.",
    reference: "Chapter 1, Section 4C"
  },
  {
    id: "SCI-57",
    set: "Review-Set",
    question: "Which one of the following statements is the LEAST accurate description of callable structured products?",
    options: [
      "Callable structured products expose investors to interest rate risk.",
      "Callable structured products are generally cheaper than straight, non-callable ones.",
      "Callable structured products place the investors in an unfavourable position and should be avoided.",
      "The possibility of the issuer exercising his right to 'call' is higher in a low interest rate environment."
    ],
    correctIndex: 2,
    explanation: "While callable products limit upside or introduce reinvestment risk during falling interest rates, it is incorrect to state that they place the investor in an unfavourable position and should be avoided; they are frequently chosen to obtain higher yields than standard non-callable products.",
    reference: "Chapter 1, Section 4B"
  },
  {
    id: "SCI-58",
    set: "Review-Set",
    question: "Which of the following statements about structured deposits is/are TRUE?",
    options: [
      "They can be issued by insurance companies.",
      "They are considered as investment products.",
      "They are suitable for investors seeking high returns.",
      "All of the above."
    ],
    correctIndex: 1,
    explanation: "Structured deposits are legally and regulatory-wise classified as investment products rather than standard plain-vanilla deposits, and are strictly distributed by banks rather than insurance companies.",
    reference: "Chapter 1, Section 1B"
  },
  {
    id: "SCI-59",
    set: "Review-Set",
    question: "In a policy statement that Janice is reading, she notes an early redemption clause that says: \"After the third month, if the portfolio of benchmark stocks is equal to or above 110% of their initial stock prices, the single premium will be returned, together with the pro-rata annual payout. The policy terminates after the payment is made.\" What is the implication of this term for the policy owner?",
    options: [
      "When the condition is met, the policy owner faces counterparty risk.",
      "When the condition is met, the policy owner enjoys the return from a rising stock market.",
      "When the condition is met, the policy owner enjoys the privilege of getting back his money with no reinvestment risk.",
      "When the condition is met, the policy owner receives the original single premium and prorated payout and faces the risk of reinvesting in a rising market."
    ],
    correctIndex: 3,
    explanation: "Early redemption clauses trigger returning the capital when the underlying assets perform well. While principal is returned, the policyholder receives no more upside and now has to reinvest their funds in an expensive rising market environment (reinvestment risk).",
    reference: "Early redemption clause & reinvestment risk"
  },
  {
    id: "SCI-60",
    set: "Review-Set",
    question: "The assets of an investment linked policy (ILP) is held in the investment-linked sub funds. Which of the following statements CORRECTLY depicts the assets of these sub-funds?",
    options: [
      "The insurer is the legal owner of assets in the ILP.",
      "The trustee holds the assets on behalf of the policy owners.",
      "An investment-linked sub-fund is a trust under the definition of the code of Collective Investment Scheme.",
      "The fund manager of the sub-funds owns the assets and liquidate them only when the policy owners redeem their investments."
    ],
    correctIndex: 0,
    explanation: "Under an investment-linked policy (ILP), the insurer, rather than the policyowner or trustee, remains the sole legal owner of the assets held in the segregated ILP sub-funds.",
    reference: "Chapter 4, Section 5A"
  },

  // ==================== PRUDENTIAL M9A CHOSEN HIGH-YIELD QUESTIONS ====================
  // (Standard practice certification content matching Prudential Set A & Set B)
  {
    id: "PRU-01",
    set: "A",
    question: "To maintain the original level of risk exposure, a rebalancing is necessary by moving units from one fund to the other. This is known as _________.",
    options: [
      "Portfolio rebalancing",
      "Drip feeding",
      "Beta rebalancing",
      "Delta neutral"
    ],
    correctIndex: 0,
    explanation: "Portfolio rebalancing involves moving units from one outperforming sub-fund to another underperforming one to maintain stable asset allocations.",
    reference: "Chapter 5, Section 1.9"
  },
  {
    id: "PRU-02",
    set: "A",
    question: "Which of the following statement/s is true of Payment Netting?",
    options: [
      "Maximises the need for funds & securities to change hands",
      "Minimises the likelihood every party receives what it should get",
      "Used to reduce counterparty risk",
      "All of the above"
    ],
    correctIndex: 2,
    explanation: "Payment netting reconciles mutual payments between two counterparties to only transfer the net differential, minimizing credit and settlement risk.",
    reference: "Chapter 2, Section 2.7"
  },
  {
    id: "PRU-03",
    set: "A",
    question: "A structured product that allows issuers to transfer a specific credit risk to 3rd party investors is a _________ instrument?",
    options: [
      "Interest rate-linked",
      "Equity-linked",
      "Credit-linked",
      "Hybrid-linked"
    ],
    correctIndex: 2,
    explanation: "Credit-linked notes (CLNs) embed a credit derivative, allowing the issuer to shift specific credit and default risk to debt investors.",
    reference: "Chapter 1, Section 3.1"
  },
  {
    id: "PRU-04",
    set: "A",
    question: "In the event of liquidation of an insurer, who ranks HIGHER than general creditors in claims on insurance fund assets?",
    options: [
      "Senior bond holders of the corporate identity",
      "Policy owners of the insurance funds",
      "Derivative swap counterparties",
      "Subordinated debt holders"
    ],
    correctIndex: 1,
    explanation: "Under the Singapore Insurance Act 1966, policy owners have preferential, priority claims on insurance fund assets ahead of general creditors in liquidation.",
    reference: "Chapter 4, Section 5.3"
  },
  {
    id: "PRU-05",
    set: "A",
    question: "Reverse convertible bonds are constructed by using a bond and _________.",
    options: [
      "A written put option",
      "A swap",
      "A forward contract",
      "Any of the above"
    ],
    correctIndex: 0,
    explanation: "A reverse convertible bond is constructed by combining a standard bond with a short/written put option sold by the investor.",
    reference: "Chapter 1, Section 3.16"
  },
  {
    id: "PRU-06",
    set: "A",
    question: "Which of the following regulatory instruments must an insurer marketing structured ILPs follow in Singapore?",
    options: [
      "Hire Purchase Act",
      "Financial Advisers Act 2001",
      "Corporate Insolvency framework",
      "All of the above"
    ],
    correctIndex: 1,
    explanation: "Insurers and their representatives marketing structured ILPs inside Singapore are regulated directly under the Financial Advisers Act (FAA) 2001.",
    reference: "Chapter 4, Section 5.1"
  },
  {
    id: "PRU-07",
    set: "A",
    question: "Under which report or document can an investor check the detailed list of 'top 10 holdings at market value' for an ILP sub-fund?",
    options: [
      "Benefit Illustration",
      "Product Highlights Sheet",
      "Semi-Annual Report",
      "Policy Document"
    ],
    correctIndex: 2,
    explanation: "The sub-fund's Semi-Annual Report is required to disclose investment valuations, including the top 10 portfolio holdings.",
    reference: "Chapter 4, Section 6.20"
  },
  {
    id: "PRU-08",
    set: "A",
    question: "Portfolio Bonds are often called Lifestyle Policies because they:",
    options: [
      "Satisfy an individual's changing investment objectives during their lifetime",
      "Never change sub-fund allocations once issued",
      "Require regular premium increases inline with career growth",
      "Focus exclusively on high protection coverage"
    ],
    correctIndex: 0,
    explanation: "They are termed 'lifestyle policies' as they allow shifting from risky equities in youth to safer bonds in retirement under one wrapper.",
    reference: "Chapter 5, Section 2.1"
  },
  {
    id: "PRU-09",
    set: "A",
    question: "A retail CIS (mutual fund) is subject to strict MAS concentration limits. The Single entity exposure cap is:",
    options: [
      "5% of the fund’s NAV",
      "10% of the fund’s NAV",
      "15% of the funds NAV",
      "20% of the funds NAV"
    ],
    correctIndex: 1,
    explanation: "Under the MAS Code on CIS, exposure of a retail fund to a single security issuer is capped at 10% of total Net Asset Value.",
    reference: "Chapter 4, Section 5.9"
  },
  {
    id: "PRU-10",
    set: "A",
    question: "An investor places US$100,000 at exchange US$1.00 = SGD$1.20. Later, the exchange drops to US$1.00 = SGD$1.10, but the asset climbs 20% in USD. What is the SGD gain/loss?",
    options: [
      "Loss of 10%",
      "Loss of 20%",
      "Gain of 10%",
      "Gain of 20%"
    ],
    correctIndex: 2,
    explanation: "Initial SGD capital was S$120,000. USD value grew to US$120,000. USD 120,000 * 1.10 = S$132,000. SGD Gain = (132,000 - 120,000)/120,000 = +10%.",
    reference: "Chapter 2, Section 4.3"
  },
  {
    id: "PRU-11",
    set: "B",
    question: "Most standard derivatives have expiration schedules. Which of the following has NO expiry date?",
    options: [
      "Bonus certificates",
      "Discount certificates",
      "Swaps",
      "Contract for differences"
    ],
    correctIndex: 3,
    explanation: "Contracts for Differences (CFDs) are rolled over automatically at the end of each trading day and do not have a defined expiry date.",
    reference: "Chapter 3, Section 5.3"
  },
  {
    id: "PRU-12",
    set: "B",
    question: "Under what ending price scenario does a discount certificate deliver a cash settlement instead of physical shares at maturity?",
    options: [
      "Price of the underlying stock is equal to capped strike",
      "Price of the underlying stock is below the capped strike",
      "Price of the underlying stock is above the capped strike",
      "None of the above"
    ],
    correctIndex: 2,
    explanation: "A discount certificate delivers cash settlement if the stock ends above the capped strike; otherwise, it delivers the physical shares.",
    reference: "Chapter 1, Section 3.20"
  },
  {
    id: "PRU-13",
    set: "B",
    question: "Which of the following describes Collateral Risk in structured transactions?",
    options: [
      "It represents a systemic market risk.",
      "It is identical to counterparty credit risk.",
      "It is the risk that the value of pledged collateral deteriorates below the exposure loss.",
      "All of the above."
    ],
    correctIndex: 2,
    explanation: "Collateral risk is the danger that collateral assets pledged deteriorate in value and fail to cover defaults.",
    reference: "Chapter 2, Sections 5.11 to 5.13"
  },
  {
    id: "PRU-14",
    set: "B",
    question: "In structured sub-fund accounting, how is 'fair value' defined if market closing prices are unavailable?",
    options: [
      "The price obtained by liquidating assets immediately before exchange closing.",
      "The value estimated by the fund manager with due care and in good faith, as the price the fund expects to receive on an orderly sale.",
      "The historic cost adjusted for inflation.",
      "No valuation can be done, and trading must close permanently."
    ],
    correctIndex: 1,
    explanation: "MAS 307 defines fair value as the expected proceeds of an orderly current asset sale, assessed with good-faith fiduciary diligence.",
    reference: "Chapter 4, Sections 7.4 to 7.6"
  },
  {
    id: "PRU-15",
    set: "B",
    question: "A company that has issued callable bonds is highly likely to exercise its call option and redeem them early when:",
    options: [
      "Interest rates rise",
      "Interest rates remain constant",
      "Interest rates fall",
      "Solvency regulations tighten"
    ],
    correctIndex: 2,
    explanation: "An issuer calls outstanding expensive debt when market interest rates fall, allowing them to refinance at a lower cost of borrowing.",
    reference: "Chapter 1, Sections 4.4 to 4.7"
  },
  {
    id: "PRU-16",
    set: "B",
    question: "If a commodity trader has an expected basis of -US$0.40, and the current market is offering a basis of -US$0.80, this represents a:",
    options: [
      "Narrow basis",
      "Wide basis",
      "Strong basis",
      "None of the above"
    ],
    correctIndex: 1,
    explanation: "A basis of -$0.80 is wider/weaker than the expected -$0.40, indicating that current spot and futures prices are relatively far apart.",
    reference: "Chapter 3, Section 2.25"
  },
  {
    id: "PRU-17",
    set: "B",
    question: "The primary risk driver affecting the outcome of the return component of a structured note is:",
    options: [
      "Currency exposure fluctuations",
      "Credit worthiness of the bond issuer",
      "Market volatility of the underlying asset",
      "Operational failures"
    ],
    correctIndex: 2,
    explanation: "The return component of a structured product relies on options or derivatives, which are heavily subject to underlying market volatility.",
    reference: "Chapter 1, Section 2.5"
  },
  {
    id: "PRU-18",
    set: "B",
    question: "Which of the following is correct regarding Benefit Illustrations for structured ILPs?",
    options: [
      "Benefit Illustrations must be provided to clients at point-of-sale.",
      "Two hypothetical rates of return must be used to demonstrate return uncertainty.",
      "Guidelines are issued by the Life Insurance Association (LIA) and are binding on members.",
      "All of the above."
    ],
    correctIndex: 3,
    explanation: "All statements are correct. Point-of-sale delivery, dual rate returns (e.g. 1.85% and 3.35%), and LIA compliance are all legally mandatory.",
    reference: "Chapter 4, Sections 6.3 to 6.5"
  },
  {
    id: "PRU-19",
    set: "B",
    question: "If regular payouts or income are drawn from a structured Portfolio Bond, how is this funded?",
    options: [
      "It is derived from the coupon payout from bonds",
      "It is derived from dividends from stock holdings",
      "It is obtained from both coupons and dividends",
      "It is obtained from systematic redemptions of sub-fund units"
    ],
    correctIndex: 3,
    explanation: "Portfolio bonds do not distribute interest directly; any withdrawals are funded by systematically redeeming units.",
    reference: "Chapter 5, Section 1.9"
  },
  {
    id: "PRU-20",
    set: "B",
    question: "An interest rate swap is the exchange of fixed rate payments for floating rate ones. Cash flows on matching dates are:",
    options: [
      "Sent physically in full by both parties.",
      "Netted, so only the differential value changes hands.",
      "Paid exclusively in foreign currency equivalents.",
      "Subject to margin calls daily on the exchange."
    ],
    correctIndex: 1,
    explanation: "Because interest rate swaps operate in a single currency, cash flows occurring on the same dates are netted, and only the differential changes hands.",
    reference: "Chapter 3, Section 4.6"
  },
  {
    id: "PRU-21",
    set: "B",
    question: "What is a major advantage of listed structured products over unlisted ones?",
    options: [
      "Capital guarantee",
      "Lower fees",
      "Liquidity",
      "Higher guaranteed profits"
    ],
    correctIndex: 2,
    explanation: "Listed structured products (e.g., traded on SGX) can be bought and sold readily in an open market, offering far better liquidity than unlisted ones.",
    reference: "Chapter 1, Section 4.17"
  },
  {
    id: "PRU-22",
    set: "B",
    question: "Options that permit the holder or writer to extend the maturity date by a specified period are known as:",
    options: [
      "Bermuda options",
      "Chooser options",
      "Extendible options",
      "Lookback options"
    ],
    correctIndex: 2,
    explanation: "Extendible options carry clauses allowing either buyer or seller to extend the contract's maturity date.",
    reference: "Chapter 3, Section 3.13"
  },
  {
    id: "PRU-23",
    set: "B",
    question: "Which of the following is correct regarding a 'standardized contract' traded on an exchange?",
    options: [
      "It is a Futures contract.",
      "It is a Forward contract.",
      "It is an OTC swap.",
      "It is a Portfolio bond."
    ],
    correctIndex: 0,
    explanation: "Futures contracts are highly standardized contracts traded directly on regulated public exchanges, unlike custom OTC Forwards.",
    reference: "Chapter 3, Table 3.1"
  },
  {
    id: "PRU-24",
    set: "B",
    question: "An option that can be exercised on ANY trading day on or before the expiry date is a/an:",
    options: [
      "European option",
      "American option",
      "Bermuda option",
      "Asian option"
    ],
    correctIndex: 1,
    explanation: "American-style options and warrants allow exercise on any trading day prior to or including the expiration date.",
    reference: "Chapter 3, Section 3.3"
  },
  {
    id: "PRU-25",
    set: "B",
    question: "An investor is bearish on stock ABC. Which strategy allows him to limit his maximum risk to the premium paid while profiting from a decline?",
    options: [
      "Shorting the physical stock",
      "Selling a naked call option",
      "Buying a put option",
      "Writing a put option"
    ],
    correctIndex: 2,
    explanation: "Buying a put option gives the investor a bearish play where maximum risk is strictly capped at the premium paid.",
    reference: "Chapter 3, Sections 3.35 to 3.37"
  },
  {
    id: "SCI-61",
    set: "Review-Set",
    question: "Pink, a 28-year-old financial analyst has inherited $500,000 from her late uncle in cash. Prior to the inheritance, she has lost some money in her personal trades. She is not upset about the loss as she sees it as part and parcel of her investment. She would like to be able to own a condominium and pay up her condominium in twenty years' time. As her fund on hand is inadequate, she has informed her financial consultant to take this into consideration when drawing up the proposal for her structured investment linked policy. What is the likely need that Pink has just shown?",
    options: [
      "Capital protection.",
      "Capital appreciation.",
      "Achieve index return on her fund.",
      "Seeking for low fees and charges for her investment."
    ],
    correctIndex: 1,
    explanation: "Because Pink seeks long-term capital growth over 20 years to pay for a condominium, and displays high risk tolerance despite past trading losses, her absolute priority is capital appreciation.",
    reference: "Chapter 4, Section 2D3"
  },
  {
    id: "SCI-62",
    set: "Review-Set",
    question: "When compared to a unit trust or an exchange traded fund, a portfolio of investments with an insurance element (portfolio bonds) contains several beneficial features. Which of the following features is INCORRECT?",
    options: [
      "A portfolio of investments is suitable for investors who are looking to invest in a portfolio of different funds.",
      "Portfolio bonds are fixed income products designed to invest in investment grade bonds and Treasury bills.",
      "To allow flexibility to investors, the product comes with a series of segments where funds are available with a variety of risk profiles.",
      "The product is useful for tax planning as capital withdrawals could be done at a time when individuals are in a more favourable tax bracket."
    ],
    correctIndex: 1,
    explanation: "Portfolio bonds are versatile lifetime investment wrappers across multiple asset categories (equities, structures, unit trusts), not fixed income instruments narrow-scoped to investment-grade bonds or Treasury bills.",
    reference: "Chapter 5, Section 1"
  },
  {
    id: "SCI-63",
    set: "Review-Set",
    question: "Which one of the following statements is TRUE of investments in structured Investment-linked Life Insurance policies (ILPs)?",
    options: [
      "Structured ILPs are simple products.",
      "There is little investment risk for the investor.",
      "All structured ILPs provide limited upside potential for the investor.",
      "Structured ILPs are subject to similar rules as those applicable to Collective Investment Schemes."
    ],
    correctIndex: 3,
    explanation: "Under local securities regulation, structured Investment-linked Policies (ILPs) are subject to investment constraints and financial transparency rules highly similar to Collective Investment Schemes (CIS).",
    reference: "Chapter 4, Section 1"
  },
  {
    id: "SCI-64",
    set: "Review-Set",
    question: "Johnny is an experienced financial consultant for PatureLife Insurer. The firm has worked with Money Global Asset Management to come up with a new structured investment-linked insurance policy. Which one of the following groups of clients can he target his product at?",
    options: [
      "Individuals who are looking for risk-free market return.",
      "Individuals who are seeking short-term investment gain.",
      "Individuals who have a medium- to long-term investment horizon.",
      "Individuals who are seeking no additional management fees or expenses."
    ],
    correctIndex: 2,
    explanation: "Both structured investments and life-linked insurance wrappers contain upfront fees and redemption barriers that make them best matches for clients holding medium- to long-term investment horizons.",
    reference: "Chapter 4, Section 2B1"
  },
  {
    id: "SCI-65",
    set: "Review-Set",
    question: "If Sharon is bullish on the share price of Bravo Company, but does not want to buy the shares directly, then which one of the following option strategies should she adopt?",
    options: [
      "Bull straddle.",
      "Bear straddle.",
      "Long a call on Bravo shares.",
      "Long a put on Bravo shares."
    ],
    correctIndex: 2,
    explanation: "Buying (longing) a call option is the simplest, most classic strategy for taking a bullish directional view in options, granting rights to purchase shares at a set strike with limited risk.",
    reference: "Chapter 3, Section 3D1"
  },
  {
    id: "SCI-66",
    set: "Review-Set",
    question: "The Code of Collective Investment Scheme CIS has imposed guidelines to manage the risk associated with retail funds by clearly specifying the duties of the trustee and the manager, and how the funds should be managed and valued. Which of the following is CORRECT under the Code of CIS?",
    options: [
      "Apart from property funds, retail funds should invest in infrastructure and real estate.",
      "Funds could engage in lending of moneys or granting guarantees, underwriting, and short selling of securities.",
      "The counterparty exposure is capped at 30% of the fund's Net Asset Value for financial institutions that meet a minimum long-term credit rating.",
      "Financial derivatives must be liquid, subject to reliable and verifiable valuation on a daily basis and able to be liquidated at any time at their fair value."
    ],
    correctIndex: 3,
    explanation: "The Code of Collective Investment Schemes mandates that any derivative positions held by retail funds must be liquid, verifiable on a daily valuation schedule, and capable of being liquidated readily at fair value.",
    reference: "Chapter 4, Section 5B5"
  },
  {
    id: "SCI-67",
    set: "Review-Set",
    question: "Andy took up a single premium structured investment-linked policy from MyLife Insurer. Which of the following advantages or disadvantages of structured ILP is CORRECT?",
    options: [
      "Portfolio diversification.",
      "Limited access to investments.",
      "Elimination of redemption risk.",
      "The larger the size of the transaction, the larger will be the per-unit cost."
    ],
    correctIndex: 0,
    explanation: "A key structural benefit of structured ILPs is their ability to buy into complex or institutional pools, immediately providing small-scale investors with broad portfolio diversification.",
    reference: "Chapter 4, Section 2A2"
  },
  {
    id: "SCI-68",
    set: "Review-Set",
    question: "Which one of the following CORRECTLY expresses the derivation of the price of a forward contract?",
    options: [
      "Forward price = base price x hedge ratio.",
      "Forward price = spot price + cost of carry.",
      "Forward price = future price + margin deposit.",
      "Forward price = spot price x (1 + transaction cost)."
    ],
    correctIndex: 1,
    explanation: "Under spot-forward equivalence, the forward price is modeled as: Forward Price = Current Spot Price + Cost of Carry.",
    reference: "Chapter 3, Section 2A"
  },
  {
    id: "SCI-69",
    set: "Review-Set",
    question: "Structured products typically focus on maintaining principal safety while at the same time, participating in upside potential of assets to generate returns. Which of the following instruments is generally used to achieve principal protection?",
    options: [
      "Equities.",
      "Futures.",
      "Options.",
      "Fixed income securities."
    ],
    correctIndex: 3,
    explanation: "The principal protection of structured capital-guaranteed instruments is reliably achieved by putting the majority of the capital into safe fixed-income bonds that accrue back to the initial principal size by maturity.",
    reference: "Chapter 1, Section 2A"
  },
  {
    id: "SCI-70",
    set: "Review-Set",
    question: "When the strike price of a put option is less than the market price, the option is said to be:",
    options: [
      "\"in-the-money\".",
      "\"at-the money\".",
      "\"out-of-the-money\".",
      "\"under-the-money\"."
    ],
    correctIndex: 2,
    explanation: "A put gives options to sell a security. If you are eligible to sell at a strike price lower than actual trading market price, the option has zero intrinsic value and is \"out-of-the-money\".",
    reference: "Chapter 3, Section 3"
  },
  {
    id: "SCI-71",
    set: "Review-Set",
    question: "The risks an investor faces vary according to the nature of a transaction. Investor A invested $10,000 in a structured deposit with BPB bank, a AAA-rated (by S&P) bank. Investor B bought $10,000 of put options from FGF financial institution, also awarded AAA rating by S&P. Which of the following risks is higher in Investor B's trade when compared to Investor A's trade?",
    options: [
      "Inflation risk.",
      "Regulatory risk.",
      "Counterparty risk.",
      "Safety of Principal risk."
    ],
    correctIndex: 3,
    explanation: "Investor A receives full contractual return-of-principal at bank maturity, whereas Investor B holds options which expire entirely worthless, carrying absolute risk to the safety of principal.",
    reference: "Chapter 2, Section 5A"
  },
  {
    id: "SCI-72",
    set: "Review-Set",
    question: "Which of the following is TRUE concerning safety of the principal investment?",
    options: [
      "Protection measures are in place so capital is guaranteed.",
      "Each product is structured to give only a partial return of principal upon maturity.",
      "Products are structured to provide different degrees of principal protection versus capital appreciation.",
      "Structured deposits are subject to the protection of the Deposit Insurance Protection Scheme in Singapore."
    ],
    correctIndex: 2,
    explanation: "Different investment configurations are engineered to offer variable degrees of principal protection from 0% to 100%, trading off risk levels against potential capital appreciation returns.",
    reference: "Chapter 2, Section 5A"
  },
  {
    id: "SCI-73",
    set: "Review-Set",
    question: "Although bonds are a typical asset class of a structured product, the risk level of different fixed income securities varies. Which of the following types of debt structure would carry the highest credit risk for an investor assuming they were from the same issuer?",
    options: [
      "Senior straight bonds.",
      "Senior zero coupon bonds.",
      "Senior tranche of subordinated straight bonds.",
      "Junior tranche of subordinated straight bonds."
    ],
    correctIndex: 3,
    explanation: "Junior subordinated straight bonds represent the lowest priority claims in insolvency, rendering them most susceptible to defaults and credit loss events.",
    reference: "Chapter 1, Section 4C"
  },
  {
    id: "SCI-74",
    set: "Review-Set",
    question: "David invested in a reverse convertible bond that consists of a bond which offers him periodic interest payment and principal. If the underlying stock falls below $10, he will receive 1000 shares in lieu of the principal at maturity. Which of the following instruments form part of the reverse convertible bond to activate such a payout structure?",
    options: [
      "Long put option.",
      "Short put option.",
      "Written call option.",
      "Long index option."
    ],
    correctIndex: 1,
    explanation: "A reverse convertible bond operates by selling or shorting a put option (short put) to the issuer, which enforces taking physical stock delivery below the strike barrier.",
    reference: "Chapter 1, Section 3B1"
  }
];
