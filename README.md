# TAYLORS_MY_CTRL-CV_C2
[![Built with TideCloak](https://tide.org/badges/built-with-tidecloak.svg)](https://tide.org/tidecloak?utm_source=github&utm_medium=readme&utm_campaign=unlocked)

## Project overview

_BorrowLoop is a neighbourhood lending marketplace where people borrow everyday things (tents, drills, cameras, party gear) from people nearby instead of buying them, protected by a refundable deposit and photo condition checks._

Built with [TideCloak](https://tide.org/tidecloak?utm_source=github&utm_medium=readme&utm_campaign=unlocked).

> **Integration status:** the prototype in this repo demonstrates the full borrowing experience with a standard PHP/MySQL login. Replacing that login and protecting the sensitive data with TideCloak is the next build step (see section 4).

### 1. Vision & originality

Most households own things they use once or twice a year: a camping tent, a pressure washer, a projector, a baby stroller for visiting relatives. Buying them is wasteful; renting from a shop is inconvenient. BorrowLoop lets you borrow them from someone a few hundred metres away.

What makes it different from a classifieds board is that the whole transaction is structured around trust between strangers:

- **Refundable deposits** are held by the platform, not the lender, and released automatically after the return.
- **Time-stamped condition photos** are taken by both people at pickup and return, so "it was already scratched" arguments are settled by evidence.
- **Verified neighbours:** ID checks, two-way ratings and reviews.
- **Location-aware discovery:** a live map shows what's near you, using your real location only with your permission.
- **"Looking for" requests:** neighbours can offer things that aren't listed yet.

The idea is a sharing economy for ordinary things, designed for Malaysian neighbourhoods first (kenduri tables, Raya baking mixers, durian-season coolers), but applicable anywhere.

### 2. Trust constraint insight

Lending to a stranger only works if both sides trust each other, and building that trust requires the platform to collect the most sensitive data people have:

- **Identity documents** (IC/passport photos and selfies) to prove a borrower is real.
- **Home addresses and exact pickup locations.**
- **Phone numbers and private messages** between strangers.
- **Money and evidence:** deposits, damage claims and the photos used to decide them.

Today, that means one company holds a database full of IC scans and home addresses. That database is a single target for attackers, and anyone with admin access (an insider, or someone who steals an admin password) can read it, mark a fake account as "verified", or release someone's deposit. That risk is exactly why people hesitate to sign up, and why a small community platform can't responsibly collect this data at all.

**When that constraint is removed**, so that no single person, server or administrator can read users' identity documents and addresses or act alone on their money, a small neighbourhood platform can offer the same level of verification as a bank, without becoming a honeypot. Users can share what's needed for trust without handing it to a company they have to trust completely.

### 3. Value & impact

- **Borrowers** save money and storage space. A family needing a tent for one weekend pays RM45 for three days instead of RM400+ for a tent that then sits in a cupboard.
- **Lenders** earn from things they already own, or lend for free to build their neighbourhood reputation.
- **Communities** waste less: fewer rarely-used products are manufactured, bought and thrown away.
- **Vulnerable users** benefit most from the trust layer. A single mother lending her stroller, or a student lending a camera, needs to know who is coming to their door, and needs to know their own IC photo and address won't leak.

**Concrete example:** Mei Shan wants to lend her projector but won't, because she doesn't know who will turn up. On BorrowLoop she sees that the borrower is ID-verified and has 20 good reviews. Her exact address is only revealed to that borrower after she accepts. Both of them take photos at pickup, and the deposit is held until the return check. If the projector comes back damaged, the photos and the held deposit settle it without an argument.

### 4. Why TideCloak matters

TideCloak adds a decentralised "Cybersecurity Fabric" on top of Keycloak, locking data, identities and access rights with keys that no single party ever holds, including the platform's own administrators. Because it builds on Keycloak, standard OpenID Connect / OAuth sign-in still applies.

That maps directly onto BorrowLoop's trust problem:

| Trust problem in BorrowLoop | How TideCloak is used |
|---|---|
| Users must sign in securely | TideCloak replaces the prototype's PHP/MySQL password login (standard OpenID Connect sign-in). |
| IC photos and selfies for ID checks | Stored encrypted with keys no one holds. The platform keeps only the "verified" result, not a readable copy of the documents. |
| Exact pickup addresses and phone numbers | Encrypted per user and only unlocked for the specific borrower after a request is accepted. A database leak reveals nothing usable. |
| Admin powers ("mark verified", "release deposit", "resolve damage claim") | Protected so that one stolen or rogue admin account can't perform them alone. |
| Assume a breach will happen | Even with full server access, an attacker gets ciphertext, not identities or addresses. |

The planned integration:

1. Run TideCloak as the identity provider and register BorrowLoop as an OpenID Connect client.
2. Swap the prototype's `api/login.php`, `register.php` and `logout.php` for TideCloak sign-in, keeping the same front-end flow (sign-in page → protected pages: rentals, profile, wallet, messages).
3. Encrypt the ID-verification photos, exact address and phone number fields with TideCloak-protected keys, and decrypt them only for the user, or for the accepted counterparty.
4. Move sensitive admin actions (verification approval, deposit release, claim decisions) behind TideCloak-governed roles.

### 5. Prototype & storytelling

The prototype is a working, responsive web app (laptop, iPad and phone) that demonstrates the full borrowing journey:

1. **Discover:** browse 36 items across 12 categories, see what's near you on a live map (with permission to use your real location), filter by category, price and distance.
2. **Request:** pick dates on a calendar, choose meet-up or delivery, add damage protection, and see the live price including the **held, refundable deposit**.
3. **Chat:** message the owner. The demo's simulated replies answer real questions about dates, price, pickup spot, delivery, what's included and damage.
4. **Owner accepts → pickup check:** both sides take photos before the item leaves.
5. **Return check → deposit refunded** automatically, then rate each other.
6. **Lend:** list your own item with photos, set the deposit, block out busy days, and track earnings in the wallet.
7. **Trust features:** ID verification flow, profile completeness, reviews, reporting a listing.
8. **Accounts:** real sign-up and sign-in with hashed passwords, sessions, lockout after repeated wrong passwords, and change password (PHP + MySQL; to be replaced by TideCloak).

**Key interaction for judges:** open an item → request it → watch the owner accept → do the pickup photo check → confirm the return and see the deposit come back. This loop is where the trust problem lives, and where TideCloak's protection of identities, addresses and admin actions plugs in.

**What's simulated in the demo:** other users' chat replies and request approvals, payments and payouts, and the ID check itself (photos stay on the device). Listings, rentals and profile data are saved in the browser.

## Setup

### Requirements
- [XAMPP](https://www.apachefriends.org/) (Apache + PHP 8 + MySQL/MariaDB), or any PHP 8 server with MySQL
- A modern browser (Chrome, Edge, Safari, Firefox)

### Run the prototype
1. Start **Apache** and **MySQL** in the XAMPP Control Panel.
2. Copy the project folder into `C:\xampp\htdocs\borrowloop` (Windows) or `/Applications/XAMPP/htdocs/borrowloop` (macOS).
3. Open `http://localhost/phpmyadmin` → **Import** → choose `database.sql` → **Go**.
4. Open **http://localhost/borrowloop/homepage.html**.
5. Sign in with the test account **alice@example.com / borrowloop123**, or create your own.

If your MySQL user or password isn't the XAMPP default (`root`, no password), edit `api/config.php`.

> Opening `homepage.html` directly (double-click or VS Code Live Server) also works, but in demo mode: PHP sign-in is unavailable and data stays in the browser. Location access needs `localhost` or `https`.

### Project structure
```
borrowloop/
├── homepage.html        # page shell, header, footer, mobile menu
├── homepage.css         # styles, light/dark theme, responsive layout
├── homepage.js          # all pages and features (single-page app)
├── database.sql         # MySQL tables + test account
└── api/
    ├── config.php       # database settings
    ├── helpers.php      # sessions, JSON responses, security checks
    ├── register.php     # create account
    ├── login.php        # sign in (with lockout)
    ├── logout.php       # sign out
    ├── me.php           # who is signed in
    └── change_password.php
```

### TideCloak (next step)
TideCloak runs as a Docker container that provides the identity provider and admin console. Follow the [TideCloak documentation](https://docs.tidecloak.com) or the [TideCloak playground](https://github.com/tide-foundation/tidecloak-playground) to start it, then register BorrowLoop as an OpenID Connect client and replace the PHP sign-in as described in section 4.

### Credits
Maps: Esri, OpenStreetMap contributors, Humanitarian OSM Team (via Leaflet). Fonts: Plus Jakarta Sans (Google Fonts).
