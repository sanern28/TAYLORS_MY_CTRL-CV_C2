# BorrowLoop — TAYLORS_MY_CTRL-CV_C2

[![Built with TideCloak](https://tide.org/badges/built-with-tidecloak.svg)](https://tide.org/tidecloak?utm_source=github&utm_medium=readme&utm_campaign=unlocked)

## Project Overview

**BorrowLoop** is a neighbourhood lending marketplace that allows people to borrow everyday items — such as tents, drills, cameras and party equipment — from nearby residents instead of buying them.

The platform promotes affordable, sustainable sharing through refundable deposits, pickup and return condition photos, user profiles, reviews and structured borrowing requests.

Built with [TideCloak](https://tide.org/tidecloak?utm_source=github&utm_medium=readme&utm_campaign=unlocked).

> **Integration status:** BorrowLoop is currently a front-end prototype built with HTML, CSS and JavaScript. TideCloak integration, real authentication, payment processing and backend services are planned next steps. TideCloak-related screens or interactions in the prototype are demonstrations, not a live connection.

## 1. Vision & Originality

Many households own items they use only once or twice a year, such as camping tents, pressure washers, projectors and baby strollers. Buying these items can be expensive and wasteful, while traditional rental shops may be inconvenient.

BorrowLoop connects people within their neighbourhoods so they can share useful items conveniently and affordably.

### What Makes BorrowLoop Different?

- **Refundable deposits:** A proposed deposit mechanism helps protect lenders against non-return and damage. Actual payment holding and refunds require backend and payment integration.
- **Condition photo checks:** Timestamped pickup and return photos can help both parties document an item's condition and resolve disputes.
- **Verified neighbours:** User verification, ratings and reviews help people assess potential borrowing partners. Real identity verification is not yet connected.
- **Location-aware discovery:** Users can discover nearby listings, with location access requested only when needed and permitted.
- **Looking-for requests:** Users can request items that are not currently listed, allowing neighbours to respond with suitable offers.
- **Malaysia-focused sharing:** BorrowLoop supports everyday local needs, from kenduri tables and Raya baking equipment to coolers and camping gear.

Our vision is to make borrowing from neighbours a practical alternative to buying rarely used products.

## 2. Trust Constraint Insight

Peer-to-peer lending depends on trust. However, establishing trust can involve sensitive information, including:

- Identity documents and verification photos.
- Home addresses and pickup locations.
- Phone numbers and private messages.
- Deposit records, damage claims and condition photos.

If a platform stores all this information in one central system, a security breach or compromised administrator account could expose private data or enable unauthorised actions.

This creates a fundamental challenge: **how can people trust one another without having to trust the platform with every sensitive detail?**

BorrowLoop addresses this challenge through a trust-focused design. It aims to limit unnecessary data exposure, control access to sensitive information and establish clear evidence for borrowing disputes.

The intended security model is to protect identity information, addresses and privileged administrative actions so that a single compromised account cannot automatically access everything or make every sensitive decision.

## 3. Value & Impact

### Borrowers

Borrowers can access useful items without paying the full purchase price or finding additional storage space.

For example, a family might borrow a tent for RM45 over a weekend instead of purchasing a tent costing RM400 or more. These figures are illustrative examples, not verified market prices.

### Lenders

Lenders can earn income from items they already own or lend them for free to build their neighbourhood reputation.

### Communities

Sharing items can reduce unnecessary purchases, improve resource utilisation and help communities adopt more sustainable consumption habits.

### Users Who Need Greater Assurance

Students, families and other users may hesitate to lend valuable belongings to strangers. Clear profiles, reviews, condition evidence and carefully controlled access to personal information can help reduce these concerns.

### Example User Story

Mei Shan wants to lend her projector but is worried about allowing a stranger to collect it.

On BorrowLoop, she reviews the borrower's profile and available reputation information before accepting the request. Her exact pickup address should only be disclosed to the accepted borrower when necessary. Both parties document the projector's condition at pickup and return.

If the projector is returned damaged, the condition photos can support a review of the dispute. Any deposit deduction or refund must follow the platform's agreed rules and a properly implemented payment process.

## 4. Why TideCloak Matters

TideCloak is relevant to BorrowLoop because the platform's trust problem extends beyond finding and rating other users. It also involves protecting identity data, controlling access to private information and restricting sensitive administrative actions.

TideCloak builds on Keycloak and is designed to provide a decentralised cybersecurity fabric. Its intended role in BorrowLoop is to strengthen identity and access protection while supporting standard authentication integration.

### Trust Problems and the Proposed TideCloak Role

| Trust problem | Proposed TideCloak role |
|---|---|
| Users need secure sign-in | Integrate TideCloak as the identity provider using OpenID Connect. |
| Identity documents are sensitive | Design a protected identity-verification workflow that minimises unnecessary exposure of original documents. |
| Pickup addresses and phone numbers are private | Restrict access to the relevant information to authorised users and accepted borrowing transactions. |
| Administrators can approve verification or resolve claims | Apply appropriate access controls and safeguards to privileged actions. |
| A server or account may be compromised | Evaluate how TideCloak's security architecture can reduce the impact of compromised infrastructure or credentials. |

These are **proposed integration goals**, not completed security guarantees. Actual protection depends on implementation, configuration, key management, authorisation rules and testing.

### Planned Integration

1. Deploy TideCloak using its official documentation and supported environment.
2. Register BorrowLoop as an OpenID Connect client and connect the sign-in flow.
3. Define access rules for profiles, private contact information and borrowing transactions.
4. Design protection for identity-verification data and other sensitive information.
5. Restrict sensitive administrative actions through appropriate roles and authorisation controls.
6. Test authentication, access restrictions and failure scenarios before claiming the integration is operational.

Official resources:

- [TideCloak](https://tide.org/tidecloak)
- [TideCloak Documentation](https://docs.tidecloak.com)
- [TideCloak Playground](https://github.com/tide-foundation/tidecloak-playground)

## 5. Prototype & Storytelling

BorrowLoop is a responsive front-end prototype designed to demonstrate the main peer-to-peer borrowing journey across laptop, tablet and mobile screen sizes.

### Key Features Demonstrated

1. **Discover items:** Browse listings across categories and filter by category, price and distance.
2. **Explore nearby listings:** View nearby items on a map when location access is available.
3. **Request to borrow:** Select borrowing dates, choose a meeting or delivery option, and review the displayed price and deposit.
4. **Communicate with
