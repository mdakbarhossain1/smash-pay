import Link from 'next/link';
import './termsAndPolicy.css';

const TermsAndPoliciesModule = () => {
  return (
    <div className='cu-container bg-gradient-4'>
      {/* Section I: Introduction */}
      <div className='cu-items'>
        <h2 className='cu-subtitle'>I. Introduction</h2>
        <p className='cu-text'>
          These SmashPay Terms of Service (“Terms”) constitute a legally binding agreement (“Agreement”)
          between you (“Client” or “you”) and any holding company, subsidiary, or entity belonging to the
          SmashPay group of companies or operating under any SmashPay brand name or trademark (“SmashPay” or
          “we”), governing our contractual relations in regard to your use of SmashPay’s services, products,
          websites, and mobile applications, along with any applicable third-party terms. You and SmashPay are
          hereinafter separately referred to as “Party” and jointly - as “Parties”.
        </p>
        <p className='cu-text'>
          You shall take your time and carefully read these Terms before using the services, products,
          websites, and mobile applications provided by SmashPay. Keep in mind that by using them (even only
          by completing the sign-up process), you both actively agree with these Terms and enter into
          contractual relations with SmashPay.
        </p>
      </div>

      {/* Section II: Definitions */}
      <div className='cu-items'>
        <h2 className='cu-subtitle'>II. Definitions</h2>
        <p className='cu-text'>
          1. <strong>Applicable Law</strong> means any law, statute, regulation, ordinance, treaty, guideline,
          policy, and act issued by any governmental or regulatory authority in any relevant jurisdiction,
          including but not limited to the governing law under Section XVIII of these Terms and/or any
          provision of the Exhibits thereto.
        </p>
        <p className='cu-text'>
          2. <strong>Base Asset</strong> means the first Digital Asset in the Trading Pair, as indicated on
          the SmashPay Platform and in the SmashPay Account, which may be chosen by you for the purpose of an
          Exchange Transaction.
        </p>
        <p className='cu-text'>
          3. <strong>Business Day(s)</strong> means any day(s) when banking institutions in the relevant
          jurisdiction are open for normal business activities (which usually means any day(s) except
          Saturday, Sunday or public holidays).
        </p>
        <p className='cu-text'>
          4. <strong>Counter Asset</strong> means the second Digital Asset in the Trading Pair, as indicated
          on the SmashPay Platform and in the SmashPay Account, which may be chosen by you for the purpose of
          an Exchange Transaction.
        </p>
        {/* Continue with other definitions... */}
      </div>

      {/* Section III: SmashPay Services */}
      <div className='cu-items'>
        <h2 className='cu-subtitle'>III. SmashPay Services</h2>
        <p className='cu-text'>1. The SmashPay Services comprise of:</p>
        <ol className='cu-list'>
          <li>
            1.1 The SmashPay Wallet Service comprising of the Topping-up Service, Custody Service, Transfer
            Service, and Withdrawal Service;
          </li>
          <li>1.2 The SmashPay Exchange Service governed by Exhibit I to these Terms;</li>
          <li>1.3 The SmashPay Crypto Credit governed by Exhibit II to these Terms;</li>
          <li>1.4 The SmashPay Earn Interest Product governed by Exhibit III to these Terms;</li>
          <li>1.5 The SmashPay Card governed by Exhibit IV to these Terms;</li>
          <li>1.6 The SmashPay Booster governed by Exhibit V to these Terms;</li>
          <li>1.7 The SmashPay Staking Product governed by Exhibit VI to these Terms;</li>
          <li>1.8 The SmashPay Futures Product governed by Exhibit VII to these Terms;</li>
          <li>1.9 The SmashPay Dual Investment Product governed by Exhibit VIII to these Terms;</li>
          <li>1.10 The SmashPay Loyalty Program governed by Exhibit IX to these Terms;</li>
          <li>1.11 The SmashPay Referral Program governed by Exhibit X to these Terms;</li>
          <li>
            1.12 Any other product, service or incentive program offered by SmashPay that may be launched via
            the SmashPay Platform or accessed through your SmashPay Account.
          </li>
        </ol>
        <p className='cu-text'>
          2. All or part of the SmashPay Services, some features thereof, or some Digital Assets may not be
          available to certain Clients or Digital Assets, to the extent applicable, at any time, as indicated
          in the SmashPay Account and on the SmashPay Platform.
        </p>
        <p className='cu-text'>
          3. The access to your SmashPay Account will allow you to: (i) request a SmashPay Service, (ii) view
          your balance and Transaction History, (iii) top up, withdraw and transfer Digital Assets, for which
          such options are available on the SmashPay Platform and/or in the SmashPay Account, and subject to
          revision from time to time at our sole and absolute discretion, (iv) perform other actions in
          relation to the above.
        </p>
      </div>

      {/* Section IV: Onboarding */}
      <div className='cu-items'>
        <h2 className='cu-subtitle'>IV. Onboarding</h2>
        <p className='cu-text'>
          1. By opening your SmashPay Account and/or using the SmashPay Services, unless stipulated otherwise
          in these Terms or the relevant Exhibit, you acknowledge and confirm that:
        </p>
        <ol className='cu-list'>
          <li>
            1.1. You are not a citizen or resident of a sanctioned country, area or region according to the
            up-to-date lists of the US Office of Foreign Assets Control (OFAC), the United Nations, the
            European Union, and any EU Member State, the UK Treasury, etc.;
          </li>
          <li>
            1.2. You are not identified as a “Specially Designated National” and are not placed in the US
            Commerce Department’s Denied Persons List;
          </li>
          <li>
            1.3. You are not a resident of the EEA, including the EU and all associated with it overseas
            countries and territories, Andorra, Monaco, San Marino, Switzerland, Vatican City, United Kingdom,
            USA and its territories, Canada, United Arab Emirates, Australia, and New Zealand and you do not
            have any relevant connection with any jurisdiction where we have prohibited or restricted access
            to the SmashPay Services or any of them;
          </li>
          <li>
            1.4. You are at least 18 years old or of legal age to enter into contractual relations with
            SmashPay (whichever is later);
          </li>
          <li>
            1.5. You are the exclusive beneficial and/or legal owner of any Digital Assets to be topped up
            into your SmashPay Account, or the flat currency to be used for the purchase of such Digital
            Assets, as the case may be, to which these Terms apply;
          </li>
          <li>
            1.6. You are the beneficial owner of your SmashPay Account and do not act on behalf of or
            represent any other third party unless otherwise required or permitted under any Applicable Law,
            as evidenced by the necessary documents;
          </li>
          <li>
            1.7. You comply with all Applicable Law requirements relevant to you and your use of the SmashPay
            Services, such as tax, exchange control and registration ones, as well as with all SmashPay’s
            requirements in this regard;
          </li>
          <li>
            1.8. You have read, understood and agreed to our Privacy Policy, Cookies Policy and the present
            Terms.
          </li>
        </ol>
        <p className='cu-text'>
          2. You are not entitled to: (i) open more than one SmashPay Account, (ii) open a new SmashPay
          Account if we have previously suspended, limited or terminated your SmashPay Account.
        </p>
        <p className='cu-text'>
          3. When you ask SmashPay to open your SmashPay Account, you shall provide SmashPay with all the
          information and/or documents, as may be requested by SmashPay or any third party acting on its
          behalf, so SmashPay can verify your identity and validate your funding sources and transactions.
          SmashPay or any third party acting on its behalf may additionally verify the information and/or
          documents provided by you from secure databases, to which you grant your explicit consent by
          entering into this Agreement. You hereby authorize SmashPay to undertake any electronic identity
          verification checks on you directly or through third parties, either at the time of entering into
          this Agreement or at any time thereafter.
        </p>
        <p className='cu-text'>
          4. We can refuse to open your SmashPay Account and grant you access to the SmashPay Services or any
          of them, without being in any way obliged or required to provide you with the reasoning for this
          decision.
        </p>
        <p className='cu-text'>
          5. You hereby represent and warrant that all the information you provide SmashPay with is complete,
          accurate and up-to-date at all times. If there are any changes in this information, you shall notify
          SmashPay and send SmashPay accurate information without any delay.
        </p>
        <p className='cu-text'>
          6. If at any point SmashPay needs to verify that the information it has about you is complete,
          accurate and up-to-date, SmashPay will contact you and request that you either provide more
          information or go through the verification process all over again. If you do not complete all the
          necessary steps, or if you fail to provide SmashPay with complete, accurate and up-to-date
          information, SmashPay will not be able to provide you with the SmashPay Services. SmashPay may also,
          at its sole and absolute discretion, restrict or terminate your access to the SmashPay Services
          and/or the Digital Assets in your SmashPay Account in the event of non-compliance with our requests
          for information, or if it is determined that the information provided by you is deceptive or false.
          You hereby acknowledge and agree that you shall not be entitled to any claim in respect of any
          losses incurred as a result of SmashPay's inability to provide you with the SmashPay Services, or
          the restriction or termination of your access thereto.
        </p>
        <p className='cu-text'>
          7. In order to ensure compliance with local regulations, the SmashPay Services, as well as their
          governing terms and conditions, may vary depending on the jurisdiction you have designated as such
          of your residence. Should you provide incorrect or incomplete information regarding your residence
          or other relevant circumstances, whether intentionally or unintentionally, and if such
          misrepresentation results in the application of incorrect terms and conditions to your use of the
          SmashPay Services, the appropriate terms and conditions that would have otherwise applied had the
          correct information been timely provided will apply retroactively from the date on which the
          incorrect information was provided. Any transactions executed, Interest, benefits, and accruals
          received, or SmashPay Services used under the incorrect terms and conditions will be reviewed and
          reversed or adjusted in accordance with the correctly applicable terms and conditions unless
          otherwise provided by any Applicable Law. Failure to comply with any SmashPay’s instructions with
          regard to the above reversals or adjustments may lead to suspension or termination of your SmashPay
          Account, legal actions, or other remedies under any Applicable Law.
        </p>
        <p className='cu-text'>
          8. You hereby undertake to obtain all necessary hardware, as well as to install all necessary
          software, including security and antivirus, for your use of the SmashPay Services in accordance with
          these Terms. You are solely responsible for keeping your device safe and maintaining adequate
          security and control of your username and password, including but not limited to keeping such
          username and password only to your knowledge and not disclosing them to any third party, and shall
          be solely responsible for any access to and use of the SmashPay Services through your device,
          regardless of whether such access may have been made without your knowledge, authority, or consent.
          We will not be liable to you for any loss or damage resulting from such use. In case your device has
          been lost or stolen or has been accessed or used in an unauthorized manner, you shall notify
          SmashPay of this and if the device has been accessed or used in an unauthorized manner, you shall,
          as soon as possible, reset the password.
        </p>
      </div>

      {/* Section V: Onboarding */}
      <div className='cu-items'>
        <h2 className='cu-subtitle'>V. TOPPING-UP SERVICE</h2>
        <p className='cu-text'>
          1. You can top up Digital Assets into your SmashPay Account at any time by effecting a Digital
          Assets transfer from: (i) your personal wallet to your Digital Asset Wallet, or (ii) your SmashPay
          Pro Account, applicable only in case you have opened a SmashPay Pro Account in accordance with the
          SmashPay Pro Terms of Service, while specific requirements and limitations, such as but not limited
          to minimum amount of each Digital Asset and Margin Level threshold, may apply from time to time, as
          indicated оn the SmashPay Platform or the SmashPay Pro Platform. You can subsequently use the
          Digital Assets in your SmashPay Account for the purpose of all SmashPay Services.
        </p>

        <p className='cu-text'>
          2. You are responsible for making sure that: (i) you have the correct address for your Digital Asset
          Wallet when you transfer Digital Assets from your personal wallet, (ii) the Digital Assets you top
          up into your Digital Asset Wallet are currently approved and supported by SmashPay and not subject
          to prohibitions or limitations regarding such topping-up, as indicated in the SmashPay Account and
          on the SmashPay Platform. If: (i) you transfer Digital Assets to an incorrect address, (ii) the
          Digital Assets transferred are not approved and supported by SmashPay, or (iii) the Digital Assets
          are subject to prohibitions or limitations regarding such topping-up, as indicated in the SmashPay
          Account and on the SmashPay Platform, your Digital Assets will be irreversibly lost. We will not be
          liable to you for any such loss.
        </p>
        <p className='cu-text'>
          3. A transfer to your Digital Asset Wallet is confirmed once the balance of your Digital Asset
          Wallet has been updated with the corresponding amount.
        </p>
        <p className='cu-text'>
          4. We reserve the right to reject any transfer to the Client’s Digital Asset Wallet, in which case
          we proceed in accordance with their instructions. In case of a Digital Asset transfer to the Client,
          we will return the same amount of the relevant Digital Asset, less any applicable network fees.
        </p>
        <p className='cu-text'>
          5. You may purchase Digital Assets: (i) by transferring their purchase price to a dedicated
          SmashPay's bank account via bank transfer (applicable only to EURx/GBPx/USDx), (ii) by using a
          credit or debit card and instructing SmashPay to proceed with the relevant purchase transaction
          and/or initiate an Exchange Transaction under Exhibit I, as the case may be, depending on the type
          of Digital Assets subject to topping-up, or (iii) by using a third-party service provider and
          authorizing SmashPay to share the necessary information therewith and subject to you completing any
          additional steps, leading to one or more purchase transactions that result in a topup into your
          SmashPay Account (applicable only to certain Digital Assets as indicated on the SmashPay Platform).
        </p>
        <p className='cu-text'>
          6. You may opt to set up recurring Digital Assets purchases under Art. V.5.(ii) by selecting the
          amount of the purchase price and the type of Digital Asset within the limitations indicated in the
          SmashPay Account and on the SmashPay Platform. If you opt for recurring purchase transactions, they
          will occur in identical periodic installments, based on your selection, until you change or cancel
          it, or in the cases indicated in your SmashPay Account and on the SmashPay Platform. You understand
          and agree that the proceeds from the recurring purchase transactions will depend on the market price
          of the selected Digital Asset at the time of the execution.
        </p>
        <p className='cu-text'>
          7. You cannot reverse any transaction once you have provided the relevant instructions and/or
          payments to SmashPay, and you cannot change, withdraw or cancel the authorisation to SmashPay to
          complete any pending or partially completed transactions. SmashPay is not liable for any partially
          completed transactions or delays in processing your instructions. You are responsible for all
          transactions initiated by you and your decisions in this regard. We do not guarantee the
          availability of any exchange rate. SmashPay shall not be responsible for any losses incurred by you
          as a result of unauthorised, incorrect or failed transactions. We reserve the right to refuse to
          process, cancel, terminate, or reverse any transaction at our sole and absolute discretion, even
          after the relevant Digital Assets have been debited from your SmashPay Account.
        </p>
      </div>
      {/* Section VI. CUSTODY SERVICE */}
      <div className='cu-items'>
        <h2 className='cu-subtitle'>VI. CUSTODY SERVICE</h2>
        <p className='cu-text'>
          1. Digital Assets in your SmashPay Account may be held in custody with third parties. Depending on
          the relevant custody arrangements, Digital Assets’ private keys, which are used to process
          transactions, may be stored in a combination of online and offline storage. SmashPay shall have no
          obligation to create a segregated blockchain address for your Digital Assets.
        </p>

        <p className='cu-text'>
          2. Digital Assets may be stored in a variety of different ways, including across multiple blockchain
          protocols, such as layer two networks, alternative layer one networks, or side chains. SmashPay may
          transfer such Digital Assets from the primary blockchain protocol and hold such Digital Assets on
          shared blockchain addresses, controlled by SmashPay, on alternative blockchain protocols in forms
          compatible with such protocols. You agree that all forms of the same Digital Asset that are held and
          made available across multiple blockchain protocols may be treated as fungible and the equivalent of
          each other, without regard to: (i) whether any form of such Digital Asset is wrapped, or (ii) the
          blockchain protocol on which any form of such Digital Asset is stored.
        </p>
        <p className='cu-text'>
          3. For certain Digital Assets, the underlying protocols offer the ability to vote on matters related
          to the governance of protocol-level issues. SmashPay may or may not support voting for such Digital
          Assets, and may cease supporting voting at any time at its sole and absolute discretion. SmashPay
          will comply with your instruction to vote with your Digital Assets to the extent SmashPay supports
          voting for such Digital Assets. In certain cases, SmashPay may vote on your behalf, where SmashPay
          or the applicable protocol does not support delegated voting.
        </p>
      </div>
      {/* Section VII. TRANSFER SERVICE */}
      <div className='cu-items'>
        <h2 className='cu-subtitle'>VII. TRANSFER SERVICE</h2>
        <p className='cu-text'>
          1. You may transfer any Digital Asset other than the ones subject to the prohibitions or limitations
          indicated in the SmashPay Account and on the SmashPay Platform, from your Digital Asset Wallet to
          another wallet of yours or of a third party.
        </p>

        <p className='cu-text'>
          2. We will process all Digital Asset transfers according to your instructions, while, subject to any
          Applicable Law, we may have to collect identifying details of the recipient and disclose them to
          third parties. If you fail to provide us with the requested information in a timely manner, we may,
          without liability, suspend, limit or terminate your use of the SmashPay Services or access to your
          SmashPay Account.
        </p>
        <p className='cu-text'>
          3. You shall verify all transaction information prior to submitting instructions for a Digital Asset
          transfer to SmashPay, as any such transfer cannot be cancelled or reversed by you once processed.
          You acknowledge that you are responsible for ensuring the accuracy of any instructions submitted to
          SmashPay and that any errors may result in the irreversible loss of your Digital Assets. SmashPay is
          not liable and has no control over the outcome arising from the recipient/destination of the
          transferred Digital Assets, as well as the delivery, quality, safety, legality, grounds or any other
          aspect of the transfer. We are not responsible for ensuring that a third party will honour their
          commitments to you, if any. Any disputes or issues related to the recipient/destination of the
          transferred Digital Assets must be resolved directly with the relevant third party.
        </p>
        <p className='cu-text'>
          4. You shall have sufficient Digital Assets in your Digital Asset Wallet prior to instructing
          SmashPay to effect any Digital Asset transfer. In case of insufficiency of the relevant Digital
          Assets in your Digital Asset Wallet, the Digital Asset transfer will be rejected by SmashPay. By
          instructing SmashPay to effect the Digital Asset transfer, you authorise SmashPay to debit your
          Digital Asset Wallet for the full amount of the Digital Assets needed to complete the Digital Asset
          transfer.
        </p>
        <p className='cu-text'>
          5. It may be necessary for SmashPay to retrieve private keys or related information from offline
          storage in order to facilitate Digital Asset transfers in accordance with your instructions, and you
          acknowledge that this may delay the initiation or crediting of such Digital Asset transfers.
        </p>
        <p className='cu-text'>
          6. You may initiate a Digital Asset transfer to another SmashPay Account, subject to the
          restrictions and limitations of this Section VII, by submitting the mobile phone number or e-mail
          address of the intended recipient. Based on the provided information, if the supplied credentials
          are attributable to an existing SmashPay Account, SmashPay shall allocate the Digital Assets to the
          corresponding Digital Asset Wallet of the intended recipient. In the event that the credentials
          supplied are not attributable to an existing SmashPay Account, the prospective recipient shall
          create a SmashPay Account within the prescribed timeframe, as indicated on the SmashPay Platform, in
          order to receive the Digital Assets. Failure to adhere to this requirement, or any limitations
          indicated on the SmashPay Platform, shall result in the cancellation of the transfer and the
          consequent reversion of the Digital Assets to your Savings Wallet. All such Digital Asset transfers
          shall be pending until the transfer is completed or cancelled either by you or as indicated above.
        </p>
      </div>
      {/* Section VIII. WITHDRAWAL SERVICE */}
      <div className='cu-items'>
        <h2 className='cu-subtitle'>VIII. WITHDRAWAL SERVICE</h2>
        <p className='cu-text'>
          1. Subject to the specific requirements laid down in Exhibit I and/or Exhibit II, if any, you may
          request for: (i) withdrawal of all or part of the Digital Assets, subject to the prohibitions and
          limitations indicated on the SmashPay Platform and in the SmashPay Account, to your personal wallet
          or to your SmashPay Pro Account, applicable only in case you have opened a SmashPay Pro Account in
          accordance with the SmashPay Pro Terms of Service, (ii) withdrawal of the fiat equivalent of certain
          Digital Assets, by instructing SmashPay to sell the relevant Digital Assets and transfer the fiat
          proceeds of the sale transaction to a bank account, or to a debit or credit card, designated by you,
          subject to the prohibitions and limitations indicated on the SmashPay Platform and in the SmashPay
          Account, (iii) withdrawal of the fiat equivalent of certain Digital Assets, as indicated in the
          SmashPay Account and on the SmashPay Platform, via the SmashPay Card, facilitated by one or more
          Exchange Transactions and subject to the requirements and restrictions in Exhibit IV.
        </p>

        <p className='cu-text'>
          2. Any withdrawals may be subject to limits on the amount of Digital Assets or their fiat
          equivalent, which can be withdrawn in a given period (e.g. daily, weekly, monthly, or annually), as
          specified in your SmashPay Account. Your withdrawal limits may vary depending on the type of Digital
          Assets or their fiat equivalent, verification steps completed by you, security, and other factors.
          If you wish to increase your withdrawal limits, you may submit a request to support@SmashPay.com.
          SmashPay reserves the right, at any time, to change your withdrawal limits, including temporarily or
          permanently reducing them to zero, partially or fully satisfy or refuse to satisfy any request of
          yours for their increase, or charge a withdrawal Fee on any withdrawal, without notice, as we deem
          necessary and at our sole and absolute discretion.
        </p>
      </div>
      {/* Section IX: Risk Disclosure */}
      <div className='cu-items'>
        <h2 className='cu-subtitle'>IX. Risk Disclosure</h2>

        {/* Subsection 1: General Risks Associated with Digital Assets */}
        <div className='cu-subsection'>
          <h3 className='cu-subtitle'>1. General Risks Associated with Digital Assets</h3>
          <p className='cu-text'>
            1.1. <strong>Price Volatility Risk.</strong> The value of digital assets can increase or decrease
            over time, causing significant fluctuations. However, due mainly to the novelty and uncertainty
            associated with digital assets, the latter tend to exhibit higher volatility compared to most fiat
            currencies and other assets. This price unpredictability could lead to substantial losses over a
            short period of time. Digital assets’ inherent volatility is a result of a combination of any
            number of factors and risks, the most prominent of which are described hereinbelow.
          </p>
          <ol className='cu-list'>
            <li>
              1.1.1. <strong>Internet Dependency Risk.</strong> Digital asset networks are dependent upon the
              Internet. A disruption of the Internet or a digital asset network would affect the ability to
              transfer digital assets, consequently, would impact their value.
            </li>
            <li>
              1.1.2. <strong>Concentrated Ownership Risk.</strong> Digital assets may have concentrated
              ownership, and exceptionally large sales or distributions by their holders, commonly referred to
              in the industry as “crypto whales”, could have an adverse effect on the market price of such
              digital assets. Moreover, it is possible that other persons or entities control multiple wallets
              that collectively hold a significant amount of particular digital assets, even if they
              individually only hold a relatively small amount, and it is possible that some of these wallets
              are controlled by the same person or entity, resulting in a concentration of ownership.
            </li>
            <li>
              1.1.3. <strong>Hard Forks and Airdrops Risk.</strong> The occurrence of a hard fork has the
              potential to change the source code of a given digital asset network, including the code logic
              limiting the digital asset supply cap. Additionally, the distribution of an airdrop has the
              potential to increase the supply cap of a given digital asset. An increase or a lift of a
              digital asset’s supply cap will cause increased supply, which consequently may have an adverse
              impact on the market price of the digital asset. SmashPay will decide, at its sole and absolute
              discretion, whether to support forked networks and digital assets and whether to participate in
              the distribution of airdropped digital assets.
            </li>
            <li>
              1.1.4. <strong>Limited Network Adoption Risk.</strong> The market value of a digital asset can
              be significantly influenced by how widely it is accepted and used. If a digital asset becomes
              popular as a medium of exchange or for investment purposes, its demand may rise, which can lead
              to an increase in its market price. Conversely, if there is a competing digital asset to the one
              previously mentioned, it might experience a decrease and lesser adoption as a result. In
              addition, digital assets backed by a robust, well-maintained and continuously improved network
              are more likely to be trusted and adopted by users, which may positively impact its market
              price, and contrarily, any news for hacks and exploits may severely decrease the price and
              adoption.
            </li>
            <li>
              1.1.5. <strong>Confidence Risk.</strong> Interruptions, closures and insolvency of major digital
              asset exchanges, as well as insolvency of stablecoin issuers, may cause loss of confidence of
              investors in the particular digital asset network and a wave of supply of the particular digital
              asset which greatly exceeds the demand, consequently causing a decrease in the digital asset’s
              market price. Additionally, loss of confidence in a given network may result from transaction
              limitations and delays. These may occur as a result of scaling challenges or in relation to
              Proof-of-Work (“PoW”) digital assets (such as Bitcoin) lack of incentive for miners.
            </li>
            <li>
              1.1.6. <strong>Network Upgrades Risk.</strong> Many digital asset networks face significant
              scaling challenges and may periodically be upgraded with various features designed to increase
              the speed and throughput of digital asset transactions. These attempts to increase the volume of
              transactions may not be effective, and such upgrades may fail, resulting in potentially
              irreparable damage to the particular network and to the value of the supporting digital asset.
            </li>
            <li>
              1.1.7. <strong>PoW Networks Risk.</strong> PoW digital assets that require a substantial upfront
              investment in mining gear and incur high energy costs, a decrease in the mining awards or the
              value of the digital asset used for gas fees may cause some miners to reject the processing of
              low-fee transactions, causing network delays, which can lead to loss of confidence in the
              network.
            </li>
          </ol>
          <p className='cu-text'>
            1.2. <strong>Appropriateness Risk.</strong> We are not responsible for the digital asset markets,
            and we make no representations or warranties concerning the real or perceived value of any digital
            assets and the quality, suitability, truth, usefulness, accuracy, or completeness of any data
            provided by SmashPay. You shall, therefore, carefully consider whether holding digital assets is
            suitable for you in light of your financial condition. Note that you should not have funds
            invested in digital assets or speculate in digital assets that you are not prepared to lose
            entirely, as there can be a substantial risk that you lose money buying, selling, holding, or
            investing in digital assets.
          </p>
          <p className='cu-text'>
            1.3. <strong>Intrinsic Value Risk.</strong> Digital assets are not money or legal tender, are not
            issued, backed, or guaranteed by the government or by a central bank and mostly do not have any
            underlying assets, revenue stream, intrinsic or other source of value. The capital deployed for
            the acquisition of digital assets carries an inherent risk of a full or partial loss, for which
            SmashPay will not bear responsibility.
          </p>
          <p className='cu-text'>
            1.4. <strong>Regulatory Risk.</strong> The regulatory status of digital assets is currently
            unsettled, varies between jurisdictions, and is subject to significant uncertainty. Legislative
            and regulatory changes or actions relating to digital assets or blockchain technology at a state
            or international level may adversely affect or restrict, as applicable, the use, transfer,
            exchange and value of digital assets, as well as the provision of the SmashPay Services. Whether
            and how one or more digital assets constitute property, assets, or rights of any kind may also
            seem unclear.
          </p>
          <p className='cu-text'>
            1.5. <strong>Blockchain Technology Risk.</strong> On-chain digital asset transactions are deemed
            to be completed when recorded on a public ledger, which is not always the date or time that you
            initiated the transaction. The completed status of digital asset transactions and, therefore, the
            ownership of transferred digital assets is often validated by a recorded entry in a decentralised
            public ledger. Recorded entries in a decentralised public ledger cannot be cancelled or reversed.
            Furthermore, note that on-chain digital asset transfers are prone to human errors. For example,
            you may transfer your digital assets to the wrong wallet address or use the wrong blockchain
            network. Due to the nature of most protocols offered throughout our SmashPay Services, such
            erroneous transactions cannot be reversed. It is your sole responsibility to ensure any
            transactions are error-free.
          </p>
          <p className='cu-text'>
            1.6. <strong>Immutability Risk.</strong> The nature of digital assets and the specific features of
            their respective network protocols may lead to an increased risk of fraud, exploits, or
            cyberattacks and any losses resulting from transactions affected by such events will likely not be
            recoverable.
          </p>
        </div>

        {/* Subsection 2: Risks Associated with Individual Digital Assets */}
        <div className='cu-subsection'>
          <h3 className='cu-subtitle'>2. Risks Associated with Individual Digital Assets</h3>
          <p className='cu-text'>
            In addition to the general risks associated with digital assets as specified hereinabove, each
            specific Digital Asset available on or through the SmashPay Platform may present distinctive
            risks.
          </p>
          <p className='cu-text'>
            2.1. <strong>Stablecoins Risks.</strong> Stablecoins are a digital asset class, which is designed
            to have a stable value over time by maintaining a constant and generally 1:1 exchange rate with
            traditional fiat currencies. The constant proportion is called “peg”. This peg may be achieved by
            means of a counterparty committing to exchange the stablecoin for a fiat currency or by an
            algorithm functioning on the blockchain. There is no guarantee that stablecoins maintain this peg,
            which in turn could lead to a full or partial loss of funds by holders of stablecoins. The peg may
            be lost due to a wide range of reasons, including failure of an essential counterparty, reserve
            issues, failure of the functionality of an essential algorithm or, as it has happened in the past
            - dishonesty and/or fraud, and/or other non-compliance with any applicable law by the stablecoin
            issuer. Additionally, given the foundational role that stablecoins play in global digital asset
            markets, their fundamental liquidity can have a dramatic impact on paired digital assets from
            other classes. Because a large portion of the digital asset markets still depends on stablecoins,
            there is a risk that a disorderly depegging or a run on the stablecoin issuer could lead to
            dramatic market volatility in digital assets more broadly. SmashPay has no influence over
            stablecoins issued, operated and maintained by third parties. As is the case with the loss of
            value of other digital assets, there is generally very little or no recourse in case of loss of a
            peg in relation to a stablecoin and at no point is SmashPay to be held liable over temporary and
            permanent losses resulting from deviations from the peg of any stablecoin.
          </p>
          <p className='cu-text'>
            2.2. <strong>DeFi Tokens and Other DeFi Risks.</strong> Decentralised Finance (“DeFi”) tokens
            (e.g. UNI, AAVE) are digital assets pegged to financial applications and protocols which are built
            on decentralised blockchain technology. DeFi relies heavily on smart contracts. The teams involved
            in the development of DeFi smart contracts do not owe fiduciary duties to users of these smart
            contracts and as such, are not held legally liable for inadequacies of the smart contract. Even a
            minor coding error or oversight can lead to a contract being exploited, potentially resulting in
            significant losses. Some DeFi projects might be launched by anonymous or pseudonymous teams,
            increasing the risk of “rug pulls” or exit scams, where developers abandon the project, sell a
            substantial part of their token holdings over a short time period and withdraw the funds, leaving
            investors with worthless tokens. DeFi protocols often rely on external data sources or “oracles”.
            Manipulation or inaccuracies in these data sources can lead to unintended financial outcomes
            within the protocols.
          </p>
          <p className='cu-text'>
            2.2. <strong>Lack of Investor Compensation Scheme Coverage Risk.</strong> The SmashPay Token is
            not covered by any investor compensation schemes, such as the Financial Services Compensation
            Scheme or compensation schemes provided under Directive 97/9/EC of the European Parliament and of
            the Council of 3 March 1997 on investor-compensation schemes. As such, losses incurred in
            connection with the SmashPay Token are not recoverable under these or similar schemes.
          </p>
          <p className='cu-text'>
            2.3. <strong>Lack of Deposit Guarantee Scheme Coverage Risk.</strong> The SmashPay Token is not
            covered by any deposit guarantee schemes, such as the guarantees under Directive 2014/49/EU of the
            European Parliament and of the Council of 16 April 2014 on deposit guarantee schemes. In the event
            of loss or failure, holders of the SmashPay Token are not entitled to reimbursement under these or
            similar schemes.
          </p>
          <ol className='cu-list'>
            <li>
              2.3.1. <strong>Offer-related Risk.</strong> SmashPay may, at any time, for whatever reason, at
              its sole and absolute discretion, discontinue the support of the SmashPay Token and the project
              associated with it. Acquisition of the SmashPay Token and the prospect of its potential
              admission to trading on any platform involves significant risks. These processes are subject to
              a high degree of uncertainty and are affected by numerous factors beyond the control of
              SmashPay, including but not limited to market demand, regulatory environment, the performance
              and reliability of trading platforms, the public perception of the SmashPay Token and the
              broader crypto-asset industry. The acquisition may not be successful and/or the trading markets
              for the SmashPay Token may not develop as anticipated, resulting in limited liquidity and price
              volatility. Changes in the regulatory landscape can impact the legality, permissibility, and
              practicality of the SmashPay Token’s availability or its admission to trading, potentially
              limiting or precluding the ability for the SmashPay Token to be traded or used as intended.
            </li>
            <li>
              2.3.2. <strong>Regulatory Risk.</strong> The regulatory status of digital assets, including the
              SmashPay Token, is subject to significant uncertainty and changes in laws or regulations, which
              may materially and adversely affect the use, transferability, exchangeability, and value of the
              SmashPay Token.
            </li>
            <li>
              2.3.3. <strong>Technology-related Risk.</strong> The SmashPay Token is reliant on complex
              technology, including blockchain and smart contracts, which are subject to a variety of
              technology-related risks, including but not limited to the failure of hardware, software,
              internet connections, hacking, security vulnerabilities, as well as the inherent risks of
              developing on emerging and rapidly evolving technological platforms. There is the potential for
              errors or vulnerabilities in the source code, which may also result in security breaches, loss
              of funds, or unintended operational behaviours.
            </li>
            <li>
              2.3.4. <strong>Project Implementation-related Risk.</strong> The project associated with the
              SmashPay Token may face significant risks over time, including but not limited to unforeseen
              technical difficulties, resource constraints, software bugs, security vulnerabilities, and
              potential delays in production timelines. If materialised, these risks could lead to alterations
              to the project’s functionality, objectives, and the utility, transferability, and value of the
              SmashPay Token itself.
            </li>
            <li>
              2.3.5. <strong>Issuer-related Risk.</strong> The value and functionality of the SmashPay Token
              are highly dependent on the good standing and operations of SmashPay. The SmashPay Token’s
              viability is tied to SmashPay’s ability to maintain its business, uphold a positive reputation,
              and successfully develop and support the project associated with the SmashPay Token. Such risks
              include but are not limited to SmashPay’s financial condition, business activities and industry,
              legal and regulatory risks, internal control risks, environmental, social and governance risks,
              reputational harm, or discontinuation of parts of (such as the SmashPay Loyalty Program), or the
              entire project, and could negatively impact the utility, value, and transferability of the
              SmashPay Token.
            </li>
            <li>
              2.3.6. <strong>No Fiduciary Relationship.</strong> The issuer and/or distributors of the
              SmashPay Token are not your fiduciaries or advisors. You are solely responsible for determining
              whether the purchase of SmashPay Tokens, and, where such purchase is made with the intent to
              upgrade your loyalty level in the SmashPay Loyalty Program under Exhibit IX or otherwise,
              whether such upgrading is appropriate for you. Access to the SmashPay Services is not
              conditional on such purchase, respectively upgraded loyalty level. The latter is entirely
              optional and rests solely on the discretion and risk of the Client.
            </li>
            <li>
              2.3.7. By purchasing, holding, exchanging, trading, or otherwise using the SmashPay Token, you
              acknowledge and agree that you have received sufficient information to make an informed decision
              and that you accept all the risks outlined herein, as well as all the risks inherent to
              purchasing, holding, exchanging, trading, or otherwise using digital assets in general, which
              are covered by this Section IX.
            </li>
          </ol>
        </div>

        {/* Subsection 3: Risks Associated with the SmashPay Platform and the SmashPay Services */}
        <div className='cu-subsection'>
          <h3 className='cu-subtitle'>
            3. Risks Associated with the SmashPay Platform and the SmashPay Services
          </h3>
          <p className='cu-text'>
            3.1. <strong>General Risks.</strong> The risks associated with using the SmashPay Platform and the
            SmashPay Services are not exclusive to them but are inherent to the use of any online platform,
            particularly those involving financial transactions and digital assets. These inherent risks
            include but are not limited to cyber security threats, operational disruptions, and data privacy
            concerns. By using the SmashPay Platform and the SmashPay Services, you acknowledge and agree on
            those specific risks. The risks described hereinbelow are not exhaustive and do not disclose all
            the risks associated with your use of the SmashPay Platform and the SmashPay Services.
          </p>
          <ol className='cu-list'>
            <li>
              3.1.1. <strong>Security Risk.</strong> The SmashPay Platform has implemented security measures,
              such as two-factor authentication and cold storage, among others, with an aim to protect
              Clients’ Digital Assets. However, it is important to understand that these security protocols do
              not offer absolute protection against all potential losses that could occur due to a security
              breach, software anomalies, or unforeseen catastrophic events impacting the SmashPay Platform.
              The security measures may not be fully equipped to guard against all potential errors, software
              shortcomings, or other weak points in the SmashPay Platform’s technical framework, which could
              potentially lead to asset theft, exploit loss, or damage. SmashPay does not have control over
              the procedures of third-party custody providers or the application of their security measures.
              Consequently, there is no guarantee that these security measures will function as intended or
              successfully protect the stored Digital Assets from all potential risks of theft, loss, or
              damage. Digital Assets not stored in cold storage may be at a higher risk of security breaches,
              hacking, or loss due to the nature of the transactions they are part of.
            </li>
            <li>
              3.1.2. <strong>Custody Risk.</strong> For security and efficiency purposes, SmashPay may store
              Digital Assets in a mixture of hot and cold storage provided by third parties, over which
              SmashPay does not exercise control. While Digital Assets stored with SmashPay’s partners may be
              secured by theft and cyberattack insurance, in case of default of such a third party, this may
              lead to a full loss of your Digital Assets. Through the offering of the SmashPay Services, and
              in particular the Savings Wallet, SmashPay does not provide fiat currency checking, savings, or
              other type of account that is covered by any deposit guarantee, insurance against losses, or
              investor compensation scheme. SmashPay is not a banking institution, and the SmashPay Accounts
              are not subject to any governmental insurance protection, nor are they covered by any
              compensation scheme.
            </li>
            <li>
              3.1.3. <strong>Digital Asset Management Risks.</strong>
              <ol className='cu-list'>
                <li>
                  3.1.3.1. By topping up Digital Assets into your SmashPay Account and/or using the SmashPay
                  Services, you grant SmashPay all rights, including but not limited to convert, exchange,
                  swap, pledge, re-pledge, hypothecate, re-hypothecate, sell, lend, stake, or otherwise
                  transfer, dispose of, invest, or use any amount of any Digital Assets in your SmashPay
                  Account. This applies equally to any Digital Assets held separately or together with other
                  property, for any period of time, and may mean from time to time that SmashPay, at its sole
                  and absolute discretion, does not retain in its possession and/or control for delivery a
                  like amount of Digital Assets or any other assets. Any action SmashPay decides to take with
                  such Digital Assets will be performed in SmashPay’s name only, and you will neither have,
                  nor be entitled to, any benefits that may arise as a result.
                </li>
                <li>
                  3.1.3.2. SmashPay may utilise diverse strategies, elected and compiled at SmashPay’s sole
                  and absolute discretion, including but not limited to the utilisation of funds for
                  institutional lending and liquidity provision and interacting with third parties, such as
                  DeFi blockchain applications and protocols (“DeFi Protocols”), which may include DeFi
                  Protocols developed by SmashPay’s team. SmashPay does not assume any responsibility or
                  liability to you for any losses that you may have incurred as a result of such diverse
                  strategies, including but not limited to DeFi Protocols exploits and exit scams.
                </li>
                <li>
                  3.1.3.3. While SmashPay adopts a best-effort approach to risk management, and
                  notwithstanding the degree of care applied by SmashPay in electing and compiling the above
                  strategies, all arrangements made by SmashPay as part of such strategies involve
                  counterparty, among others, risks, which might impact SmashPay.
                </li>
                <li>
                  3.1.3.4. You understand, consent to, and agree that all risks, not exhaustively listed
                  herein, including but not limited to third-party risks, such as bankruptcy, cybersecurity,
                  regulatory risks, etc., associated with SmashPay’s strategies may directly affect the
                  integrity of your Digital Assets. This includes, but is not limited to, the restriction on
                  your ability to withdraw your Digital Assets at your convenience and/or your ability to
                  receive the same Digital Asset or the desired fiat equivalent of the latter.
                </li>
              </ol>
            </li>
            <li>
              3.1.4. <strong>Data Visualisation Risk.</strong> Although we may provide historical,
              statistical, and/or real-time data regarding the price of Digital Assets, such data, derived
              either independently or through the use of third-party service providers (e.g. a real-time
              analytics tool), including but not limited to graphs, news feeds, market, price, blockchain, and
              ownership analytics, displayed on the SmashPay Platform, is for reference purposes only. We make
              no representations or warranties regarding the quality, suitability, veracity, usefulness,
              accuracy, or completeness of the data, and you should not rely on such data for any reason
              whatsoever. You understand and agree that due to the volatile nature of Digital Assets, no data
              on their past performance can be deemed indicative of, and should not be relied upon as a
              promise for, future results.
            </li>
          </ol>
          <p className='cu-text'>
            3.2. <strong>SmashPay Earn Interest Product Risks.</strong> SmashPay utilises its best efforts in
            order to ensure that the SmashPay Earn Interest Product’s advertised Interest rates are stable.
            However, such rates may be subject to change from time to time. Previously provided Interest rates
            are not indicative of whether these rates will be maintained in the long term, therefore, SmashPay
            does not guarantee a fixed Interest rate at all times. The SmashPay Earn Interest Product is not a
            registered security and is not offered as such. The typical investor protection associated with
            registered securities (e.g. Securities Investor Protection Corporation) does not apply to Clients
            using the SmashPay Earn Interest Product. The risks associated with the management of Digital
            Assets under Art. IX.3.1.3. apply accordingly to the SmashPay Earn Interest Product.
          </p>
          <p className='cu-text'>
            3.3. <strong>SmashPay Staking Product Risks.</strong> The SmashPay Staking Product is dependent on
            the functioning of underlying DeFi Protocols. These DeFi Protocols are maintained and regulated by
            third parties and thus out of SmashPay’s control. This means that SmashPay cannot retrieve,
            recover, or salvage any lost Eligible Digital Assets if the DeFi Protocols that hold them
            malfunction or cease to exist entirely.
          </p>
        </div>

        {/* Subsection 4: Tax and Legal Considerations */}
        <div className='cu-subsection'>
          <h3 className='cu-subtitle'>4. Tax and Legal Considerations</h3>
          <p className='cu-text'>
            4. The current tax treatment of the SmashPay Services and the holding of the Digital Assets in
            this regard has not been conclusively clarified and may also depend on your individual tax
            treatment as a holder of said Digital Assets. It cannot be ruled out that the tax authorities and
            courts may adjust or change previous tax assessments on the treatment of income related to the
            SmashPay Services.
          </p>
          <p className='cu-text'>
            5. You are responsible for determining whether the use of any of the SmashPay Services is legal in
            your jurisdiction, and you shall not use these SmashPay Services should such use be illegal
            therein. If you are uncertain, please seek independent legal advice. The continued use of the
            SmashPay Services represents your confirmation that you are aware of any applicable regulatory
            restrictions and that you are not subject to such restrictions.
          </p>
          <p className='cu-text'>
            6. The materials, including but not limited to any historical, statistical, and/or real-time data,
            contained on the SmashPay Platform are accessible globally. They are for general information
            purposes only and not intended as financial or investment advice, offer, solicitation,
            recommendation, or endorsement to use any of the SmashPay Services, and are not personalized or in
            any way tailored to reflect your particular investment objectives, financial situation, or needs.
            By visiting the SmashPay Platform, you understand and agree that you use the SmashPay Account, the
            SmashPay Platform, and the SmashPay Services on a non-solicited basis, entirely voluntary and at
            your sole and absolute discretion and risk. Providing you with the SmashPay Services does not make
            SmashPay your trustee or investment adviser, and no fiduciary relationship exists between us. We
            have no trust or other obligations in respect of your SmashPay Account other than those expressly
            specified herein. You should exercise your own judgment and consult with a qualified professional
            before making any decision in regard to the SmashPay Services. SmashPay accepts no liability for
            the consequences of any decisions made and actions taken for investing in a particular Digital
            Asset or using any of the SmashPay Services on the basis of the information provided, including
            for any damages suffered by the recipient of any communication coming from SmashPay.
            Notwithstanding any statements or representations made by agents or representatives of SmashPay,
            the only binding arrangements governing the contractual relations between SmashPay and you are
            expressly set forth in these Terms, which shall supersede and prevail over any conflicting or
            additional statements or representations made by such agents or representatives.
          </p>
          <p className='cu-text'>
            7. This Section IX is not exhaustive and does not disclose all the risks associated with the
            digital assets and the use of the SmashPay Account, the SmashPay Platform, and the SmashPay
            Services. You shall, therefore, carefully consider whether such use is suitable for you in light
            of your circumstances and financial resources.
          </p>
        </div>
      </div>
      {/* Section X. FORKS */}
      <div className='cu-items'>
        <h2 className='cu-subtitle'>X. FORKS</h2>
        <p className='cu-text'>
          1. It is important that you understand that the underlying protocols of the Digital Assets’ networks
          are subject to sudden changes in operating rules, and third parties may, from time to time, create a
          copy of a Digital Asset’s network and implement changes in the operating rules or other features
          that might result in multiple versions of the network and more than one version of the Digital
          Asset. This may affect the value and the function of the initial Digital Asset, and we can
          temporarily suspend our services in relation to the “forked” Digital Asset, while we determine, at
          our sole and absolute discretion, which network to support.
        </p>

        <p className='cu-text'>
          2. Such networks and Digital Assets are outside of our control, and we can decide, at our sole and
          absolute discretion, to abandon or otherwise not support the initial or the forked Digital Asset. We
          may, at our sole and absolute discretion, obtain and retain the unsupported Digital Assets.
        </p>
      </div>
      {/* Section XI. OBLIGATIONS AND WARRANTIES
       */}
      <div className='cu-items'>
        <h2 className='cu-subtitle'>XI. OBLIGATIONS AND WARRANTIES</h2>
        <ol>
          <li className='cu-text'>
            You hereby declare, warrant, and confirm that:
            <ol>
              <li>You meet the conditions under Section IV;</li>
              <li>
                {' '}
                You validly undertake any action or enter into any transaction with regard to the Agreement;
              </li>
              <li>
                The Digital Assets, which you will top up into your SmashPay Account, or the funds, which you
                will use for the purchase of the Digital Assets to be topped up into your SmashPay Account, as
                the case may be, are not derived from money laundering, terrorist financing, fraud, or any
                other illegal or criminal activity under any Applicable Law;
              </li>
              <li>
                You have submitted to SmashPay only complete, correct, and up-to-date information and
                documents;
              </li>
              <li>
                You are aware that you are subject to the tax regulation in your jurisdiction and shall be
                fully responsible for any filing/reporting and paying any tax due to the competent tax
                authority, as required by the Applicable Law. SmashPay shall not be required to compensate you
                for your tax obligations or advise you in relation to your tax issues. The uncertainty in tax
                legislation relating to the Digital Assets may expose you to any currently unknown or future
                tax consequences, associated with your holding of Digital Assets and the use of the SmashPay
                Services, for which SmashPay shall not be held liable. You shall hold SmashPay harmless from
                any expenses and losses, resulting from the above uncertainty;
              </li>
              <li>
                You are aware that you use the SmashPay Account, the SmashPay Platform, and the SmashPay
                Services fully at your own risk.
              </li>
            </ol>
          </li>
          <li className='cu-text'>
            You are aware that you use the SmashPay Account, the SmashPay Platform, and the SmashPay Services
            fully at your own risk.
            <ol>
              <li>
                Use the SmashPay Account, the SmashPay Platform, and the SmashPay Services in good faith;
              </li>
              <li>
                Not violate or breach any terms of these Terms, the Privacy Policy and the Cookies Policy, or
                any Applicable Law;
              </li>
              <li>
                Not commit, conduct, or perform any misrepresentation, fraud, malicious act, or criminal
                activities;
              </li>
              <li>
                Not use the SmashPay Account, the SmashPay Platform, and the SmashPay Services to conduct
                electronic spamming or otherwise distribute any unsolicited or unauthorised advertising,
                promotional or marketing materials, junk mail, or chain letters;
              </li>
              <li>Not provide false, inaccurate, incomplete, out-of-date, or misleading information;</li>
              <li>Not interfere, intercept, or expropriate our network, system, data, or information;</li>
              <li>
                Not transmit or upload any virus or other malicious software, or program, or try to gain
                unauthorised access to other Clients’ accounts, websites, networks, or systems relating to the
                SmashPay Services;
              </li>
              <li>
                Not decompile, reverse engineer, or disassemble any of our programs, systems, or products, or
                in any way infringe the Intellectual Property rights and/or such of our partners;
              </li>
              <li>
                Not cause or launch any programs or scripts for the purpose of scraping, indexing, surveying,
                or otherwise data mining any portion of any of our programs, systems, or products, or unduly
                burdening or hindering the operation and/or functionality of any aspect of the SmashPay
                Services;
              </li>
              <li>
                Not use the SmashPay Platform in a way that could damage, disable, impair, or compromise the
                SmashPay Platform or the provision of the SmashPay Services, interfere with other Clients, or
                affect the reputation of SmashPay. You undertake not to gain or attempt to gain unauthorised
                access to the SmashPay Accounts or the Digital Asset Wallets of other Clients;
              </li>
              <li>
                Not take any action that imposes an unreasonable or disproportionately large burden or load on
                the SmashPay’s infrastructure (including our servers, networks, data centres, and related
                equipment) and detrimentally interfere with, intercept, or expropriate any system, data, or
                information belonging to other Clients using the SmashPay Services;
              </li>
              <li>
                Not engage in any written or verbal communication or conduct towards SmashPay, its affiliates,
                third-party service providers, each of their respective employees, officers, directors, and
                representatives, which may in any way be deemed harmful, threatening, aggressive, abusive,
                inappropriate, disparaging, or in any manner disrespectful;
              </li>
              <li>
                Keep your device safe and maintain adequate security and control of your username and
                password, including but not limited to keep such username and password only to your knowledge
                and not disclose them to any third party;
              </li>
              <li>
                Inform SmashPay about any change in the information and documents submitted to SmashPay, in
                particular in your contact details, within 1 (one) day of the change
              </li>
            </ol>
          </li>
        </ol>
      </div>

      {/* Section XII. REFUSAL TO PROVIDE THE SmashPay SERVICES. LIMITATION, SUSPENSION, OR
TERMINATION OF THE SmashPay SERVICES. CLOSURE OF ACCOUNTS */}
      <div className='cu-items'>
        <h2 className='cu-subtitle'>
          XII. REFUSAL TO PROVIDE THE SmashPay SERVICES. LIMITATION, SUSPENSION, OR TERMINATION OF THE
          SmashPay SERVICES. CLOSURE OF ACCOUNTS
        </h2>
        <p className='cu-text'>
          1. SmashPay reserves the right to, at its sole and absolute discretion, refuse to process or cancel
          any request from you in regard to the SmashPay Services, including for purposes of compliance with
          any Applicable Law.
        </p>

        <p className='cu-text'>
          2. The topping-up and withdrawal of Digital Assets into/from your Digital Asset Wallet may be
          subject to certain limitations imposed by SmashPay (as may be amended from time to time at
          SmashPay’s sole and absolute discretion).
        </p>
        <p className='cu-text'>
          3. SmashPay may, at any time and without liability, terminate, suspend, limit, or reverse your use,
          or the functionality, of the SmashPay Services, or your access to your SmashPay Account (including
          freezing or closing your SmashPay Account, refusing to process any instruction of yours, or
          reversing a performed action), including but not limited to: (i) in the event of any breach by you
          of these Terms, any Exhibit and any other applicable terms, or any Applicable Law, (ii) for the
          purposes of complying with a regulator’s demand, a court order, an act of any governmental
          authority, or any Applicable Law, (iii) upon SmashPay’s suspicion that a transaction or your use of
          the SmashPay Services may be erroneous or connected with any unlawful activities (such as money
          laundering, terrorist financing, as well as fraudulent activities), or that your SmashPay Account
          has been compromised, (iv) your SmashPay Account is subject to any legal proceedings, (v) to remedy
          the effects of any defect in or compromise to any information system related to the provision of the
          SmashPay Services, (vi) for compliance and monitoring reasons, including in case of a discrepancy
          between your spending profile and the type of consumer group you belong to, (vii) for maintenance of
          the system, (viii) if you do not meet the eligibility criteria for the use of any of the SmashPay
          Services, including but not limited to maintaining a minimum Portfolio Balance, as indicated in the
          SmashPay Account and/or on the SmashPay Platform, or (ix) if there is a change in the eligibility
          criteria for opening of a SmashPay Account or use of the SmashPay Services, as indicated in the
          SmashPay Account and/or on the SmashPay Platform. In the above cases, the Digital Assets in your
          SmashPay Account may be frozen for an indefinite period of time until the matter is resolved
        </p>
        <p className='cu-text'>
          4. SmashPay may, at any time and without liability: (i) update or change any eligibility criteria
          for, or features, components or content of, the SmashPay Services, cease to approve and support any
          Digital Assets and substitute them with Digital Assets approved and supported by SmashPay,
          determined as per SmashPay’s sole and absolute discretion, if such are available in the Client’s
          SmashPay Account at the cessation time. We do not guarantee that any such specific content,
          component, feature or Digital Asset will always be available to you, or (ii) suspend, terminate,
          cancel, or change any incentive program and/or pay-out in regard thereto
        </p>
        <p className='cu-text'>
          5. Should your SmashPay Account incur a negative balance in any Digital Asset due to any transaction
          and/or cumulative transactions, you are required to immediately remedy the deficit by topping up
          additional Digital Assets into your SmashPay Account and/or by initiating the necessary Exchange
          Transaction. You shall remain fully liable for the amount of any negative balance and any
          corresponding transaction Fees. If you fail to reconcile the negative balance promptly, SmashPay
          reserves the right to employ various recovery measures, which may include, but are not limited to,
          recouping such negative balance from any other Digital Asset you may hold. You acknowledge and agree
          that SmashPay may, at its sole and absolute discretion, implement partial or full restrictions on
          the SmashPay Services, which may include, without limitation, the restriction of withdrawals as
          outlined in Section VIII and restriction or suspension of your SmashPay Account until such negative
          balance is settled. SmashPay reserves the right to modify or change the aforementioned measures as
          it deems necessary, without prior notice, in order to maintain the integrity of the SmashPay
          Platform.
        </p>
        <p className='cu-text'>
          6. If we decide to undertake any of the actions under Art. XII.3 - XII.5, we may, but are in no way
          obliged to, provide you with a notice of this unless otherwise agreed in these Terms, or unless it
          is impractical, impossible, or illegal to do so. SmashPay, at its sole and absolute discretion, may
          reverse the suspension or limitation once the reasons for them no longer exist. In this case, we
          will not be under any obligation to execute any suspended, reversed, or terminated transactions at a
          specific price, under specific terms, or at all.
        </p>
        <p className='cu-text'>
          7. Your obligations under these Terms will continue in the event of any limitation, suspension,
          reversal, or termination under Art. XII.3. - XII.5. and you will not be released from any liability
          having arisen prior to such.
        </p>
        <p className='cu-text'>
          8. SmashPay shall not owe you any payment, compensation, or damages in relation to any suspension,
          limitation, cessation, reversal, or termination of your use of the SmashPay Services, regardless of
          the reason therefor.
        </p>
        <p className='cu-text'>
          9. Our rights for suspension, limitation, cessation, reversal and termination under this Section XII
          shall be without prejudice to any other rights or remedies that we may have (whether under these
          Terms, Applicable Law or otherwise).
        </p>
      </div>
      {/* SectionXIII. PERSONAL DATA */}
      <div className='cu-items'>
        <h2 className='cu-subtitle'>XIII. PERSONAL DATA</h2>
        <p className='cu-text'>
          1. We can only provide you with the SmashPay Services once we have collected your Personal Data.
        </p>

        <p className='cu-text'>
          2. By creating your SmashPay Account and/or using the SmashPay Services, you acknowledge that
          SmashPay shall gather, process and store your Personal Data for the purpose of providing you with
          the SmashPay Services and declare, acknowledge, and confirm that you have read our Privacy Policy
          and Cookies Policy and agree thereto.
        </p>
        <p className='cu-text'>
          3. We reserve the right, at any time, to verify your Personal Data for anti-money laundering and
          counter-terrorist financing purposes.
        </p>
        <p className='cu-text'>
          4. In the event your SmashPay Account is closed on any grounds under this Agreement, we will stop
          using your Personal Data for the purposes under Art. XIII.2., but we may need to keep your Personal
          Data as required by any Applicable Law.
        </p>
      </div>
      {/* Section XIV. LIMITATION OF LIABILITY */}
      <div className='cu-items'>
        <h2 className='cu-subtitle'>XIV. LIMITATION OF LIABILITY</h2>
        <p className='cu-text'>
          1. ALL THE SmashPay SERVICES ARE PROVIDED ‘AS IS’ AND WITHOUT ANY REPRESENTATIONS OR WARRANTIES,
          WHETHER EXPRESS, IMPLIED, OR STATUTORY, EXCEPT AS EXPRESSLY PROVIDED IN THESE TERMS, TO THE EXTENT
          PERMITTED BY APPLICABLE LAW. SmashPay DISCLAIMS ALL OTHER REPRESENTATIONS OR WARRANTIES, EXPRESS OR
          IMPLIED, MADE TO YOU, YOUR AFFILIATES OR ANY THIRD PARTY, INCLUDING WITHOUT LIMITATION, ANY
          WARRANTIES REGARDING QUALITY, SUITABILITY, MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE OR
          OTHERWISE OF ANY SERVICE OR ANY GOODS PROVIDED INCIDENTAL TO THE SmashPay SERVICES UNDER THESE
          TERMS. <br /> <br /> SmashPay’S LIABILITY IN RESPECT OF THE REPRESENTATIONS AND WARRANTIES, WHICH
          CANNOT BE EXCLUDED, IS LIMITED TO ANY OF THE FOLLOWING OPTIONS CHOSEN BY SmashPay, AT OUR SOLE AND
          ABSOLUTE DISCRETION:
        </p>
        <ol>
          <li className='cu-text'>
            <ol>
              <li>
                RE-SUPPLYING, REPLACING, OR REPAIRING THE SmashPay SERVICES IN RESPECT OF WHICH THE BREACH
                OCCURRED; OR
              </li>
              <li>
                PAYING THE COST OF THE RE-SUPPLYING, REPLACING, OR REPAIRING OF THE SmashPay SERVICES IN
                RESPECT OF WHICH THE BREACH OCCURRED.
              </li>
            </ol>
          </li>
          <li className='cu-text'>
            NOTWITHSTANDING ANY PROVISIONS IN THESE TERMS, IN NO EVENT SHALL WE OR ANY OF OUR EMPLOYEES,
            OFFICERS, DIRECTORS, AGENTS, REPRESENTATIVES, PROXIES, OR PARTNERS BE LIABLE TO YOU FOR ANY
            LOSSES, DAMAGES, OR CLAIMS:
            <ol>
              <li className='cu-text'>
                DUE TO AN UNUSUAL OR UNFORESEEABLE EVENT OUTSIDE OUR REASONABLE CONTROL, THE CONSEQUENCES OF
                WHICH COULD NOT HAVE BEEN AVOIDED EVEN IF ALL DUE CARE HAD BEEN EXERCISED (E.G. FORCE MAJEURE,
                INCLUDING ACTS OF GOD, WAR, OR CIVIL UNREST, DISASTERS, ACTS OF DOMESTIC OR FOREIGN COURTS AND
                GOVERNMENTAL AUTHORITIES, STRIKES, LOCKOUTS, LABOUR DISPUTES, TERRORIST ACTS, RIOTS);
              </li>
              <li>
                ARISING FROM OR IN CONNECTION WITH:
                <ol>
                  <li>
                    {' '}
                    ANY DELAY, SUSPENSION, DISCONTINUATION, INTERRUPTION OF THE SmashPay PLATFORM OR THE
                    SmashPay SERVICES;
                  </li>
                  <li>
                    {' '}
                    FAILURE OR INTERRUPTION IN PUBLIC OR PRIVATE TELECOMMUNICATION NETWORKS, COMMUNICATION
                    CHANNELS, OR INFORMATION SYSTEMS;
                  </li>
                  <li> ACTS OR OMISSIONS OF ACTS OF A PARTY FOR WHOM WE ARE NOT RESPONSIBLE;</li>
                  <li> DELAY, FAILURE, OR INTERRUPTION IN, OR UNAVAILABILITY OF, THIRD-PARTY SERVICES;</li>
                  <li>
                    {' '}
                    ANY REFUSAL TO PROCESS OR AUTHORIZE, OR ANY REVERSAL OR ADJUSTMENT OF, ANY TRANSACTION FOR
                    ANY REASON;
                  </li>
                  <li>
                    {' '}
                    YOUR INABILITY TO EFFECT OR COMPLETE ANY TRANSACTION DUE TO SYSTEM MAINTENANCE, BREAKDOWN,
                    OR NON-AVAILABILITY OF THE SmashPay PLATFORM OR THE SmashPay SERVICES;
                  </li>
                  <li>
                    {' '}
                    ANY UNAUTHORIZED OR INELIGIBLE USE OF THE SmashPay SERVICES CONTRARY TO THESE TERMS;
                  </li>
                  <li>
                    {' '}
                    ANY TERMINATION, SUSPENSION, LIMITATION, OR REVERSAL OF YOUR USE OF THE SmashPay SERVICES,
                    OR YOUR ACCESS TO YOUR SmashPay ACCOUNT (INCLUDING FREEZING OR CLOSING OF THE LATTER);
                  </li>
                </ol>
              </li>
              <li>
                DUE TO COMPLIANCE WITH ANY APPLICABLE LAW, COURT ORDERS, OR ACTS OF ANY GOVERNMENTAL AUTHORITY
              </li>
              <li>
                RESULTING FROM HACKING, TAMPERING, COMPUTER VIRUS TRANSMISSION, OR OTHER UNAUTHORIZED ACCESS
                OR USE OF THE RELEVANT SmashPay SERVICE, YOUR SmashPay ACCOUNT OR ANY INFORMATION CONTAINED
                THEREIN;
              </li>
              <li>
                RESULTING FROM OR ARISING OUT OF ANY THIRD-PARTY SERVICE PROVIDER’S CUSTODY, CONTROL, OR
                HANDLING OF THE DIGITAL ASSETS, INCLUDING BUT NOT LIMITED TO MALFEASANCE, NEGLIGENCE, OR
                MISHANDLING. ANY CLAIMS OR DISPUTES REGARDING SUCH MATTERS SHOULD BE DIRECTLY ADDRESSED TO THE
                RESPECTIVE THIRD-PARTY SERVICE PROVIDER. YOUR RECOURSE IN SUCH CASES SHALL BE SOLELY AGAINST
                THE RESPECTIVE THIRD-PARTY SERVICE PROVIDER, AND NOT AGAINST SmashPay;
              </li>
              <li>
                RESULTING FROM ANY RISK OR OTHER CIRCUMSTANCE DISCLOSED TO THE CLIENT UNDER SECTION IX OR
                ELSEWHERE IN THESE TERMS.
              </li>
            </ol>
          </li>
          <li className='cu-text'>
            NOTWITHSTANDING ANY PROVISIONS IN THESE TERMS, IN NO EVENT SHALL WE BE LIABLE TO YOU FOR ANY TYPE
            OF INCIDENTAL, SPECIAL, EXEMPLARY, PUNITIVE, INDIRECT, OR CONSEQUENTIAL DAMAGES, INCLUDING BUT NOT
            LIMITED TO LOST REVENUE, LOST PROFITS, REPLACEMENT GOODS, LOSS OF TECHNOLOGY, LOSS OF DATA, OR
            INTERRUPTION OR LOSS OF USE OF SERVICE OR EQUIPMENT, REGARDLESS OF WHETHER SUCH DAMAGES BEING
            DIRECT OR INDIRECT, FORESEEABLE OR UNFORESEEABLE, OR EVEN IF YOU HAVE BEEN ADVISED OF THE
            POSSIBILITY OF SUCH DAMAGES, AND WHETHER ARISING UNDER THEORY OF CONTRACT, TORT, STRICT LIABILITY,
            OR OTHERWISE.
          </li>
          <li className='cu-text'>
            {' '}
            IN NO EVENT WILL OUR AGGREGATE LIABILITY FOR ANY LOSS OR DAMAGE ARISING IN CONNECTION WITH THE
            SmashPay SERVICES AND THESE TERMS EXCEED THE FEES YOU PAID TO SmashPay FOR YOUR USE OF THE
            RELEVANT SmashPay SERVICE DURING THE 12- MONTH PERIOD IMMEDIATELY PRECEDING THE EVENT, GIVING RISE
            TO THE CLAIM FOR LIABILITY, IF ANY. THE ABOVE SHALL APPLY TO THE FULLEST EXTENT PERMITTED BY THE
            RELEVANT APPLICABLE LAW.
          </li>
          <li className='cu-text'>
            WE SHALL NOT BE LIABLE FOR ANY FAULT ON THE PART OF ANY THIRD-PARTY SERVICE PROVIDER INSTRUCTED BY
            US
          </li>
          <li className='cu-text'>
            NOTHING IN THESE TERMS SHALL OPERATE TO LIMIT OR EXCLUDE ANY LIABILITY FOR FRAUD OR GROSS
            NEGLIGENCE.
          </li>
        </ol>
      </div>
      {/* Section XV. DEFAULT. INDEMNIFICATION. */}
      <div className='cu-items'>
        <h2 className='cu-subtitle'>XV. DEFAULT. INDEMNIFICATION.</h2>
        <ol>
          <li className='cu-text'>
            The occurrence of one of the following events constitutes an Event of Default:
            <ol style={{ listStyle: 'lower-alpha' }}>
              <li>
                The Client breaches any of the Client’s obligations or warranties under these Terms and any
                Exhibit;
              </li>
              <li>
                It is or becomes illegal for the Client to perform the Client’s obligations under these Terms
                and any Exhibit;
              </li>
              <li>
                SmashPay is unable to contact the Client in accordance with the Client’s most recent
                instructions for sending correspondence.
              </li>
            </ol>
          </li>
          <li className='cu-text'>
            In case of an Event of Default, SmashPay is entitled:
            <ol style={{ listStyle: 'lower-alpha' }}>
              <li>To terminate this Agreement with immediate effect;</li>
              <li>To take any action it deems necessary to protect its interests</li>
            </ol>
          </li>
          <li className='cu-text'>
            You shall defend, indemnify, and hold harmless SmashPay, its affiliates, third-party service
            providers, and each of their respective employees, officers, directors, and representatives, from
            and against any claims, damages, losses, liabilities, costs, and expenses (including reasonable
            attorney’s fees), arising out of or relating to any third-party claim concerning these Terms, any
            Exhibit, or your use of the SmashPay Services in violation of these Terms, any Exhibit, or any
            Applicable Law
          </li>
        </ol>
      </div>
      {/* Section XVI. TERMINATION. CLOSURE OF ACCOUNT. */}
      <div className='cu-items'>
        <h2 className='cu-subtitle'>XVI. TERMINATION. CLOSURE OF ACCOUNT.</h2>
        <ol>
          <li className='cu-text'>
            This Agreement may be terminated by SmashPay: (i) immediately and without notice, by closing your
            SmashPay Account and discontinuing your use of the SmashPay Services, on the grounds of Art.
            XV.2., Letter a) or otherwise, (ii) upon written notice by SmashPay to the Client if SmashPay
            discontinues the offering of the SmashPay Services, regardless of the reasons.
          </li>
          <li className='cu-text'>
            You may, at any time, terminate your access to and use of any of the SmashPay Services,
            respectively the Agreement, and/or close your SmashPay Account. In order to do so, you shall
            submit a request to SmashPay in a form and together with the relevant supporting documents and/or
            information, as may be required by SmashPay. You hereby acknowledge and agree that you will be
            subject to such terms and conditions as we may consider applicable to such termination and/or
            closing, and that all SmashPay Services or the relevant part thereof will not be accessible
            thereafter.
          </li>
          <li className='cu-text'>
            All your debts to SmashPay shall have been settled prior to closing of your SmashPay Account. You
            may recover any remaining balance of Digital Assets, respectively the fiat equivalent of certain
            Digital Assets, subject to the limitations and risk disclosures, as indicated in these Terms, the
            SmashPay Account, and on the SmashPay Platform, unless we are prohibited by any Applicable Law or
            court order to release such Digital Assets, if applicable, including but not limited to the case
            that we have reasonable grounds to suspect that the Digital Assets or the funds used for the
            purchase of the Digital Assets were obtained through fraud or any unlawful means or connected with
            any criminal activities. SmashPay reserves its right to revise the limitations under the preceding
            sentence from time to time, at its sole and absolute discretion
          </li>
          <li className='cu-text'>
            The termination of this Agreement shall not prevent SmashPay from seeking any remedies against the
            Client for any breach of this Agreement occurring prior to such termination.
          </li>
        </ol>
      </div>
      {/* Section XVII. NOTICES. ELECTRONIC COMMUNICATIONS. */}
      <div className='cu-items'>
        <h2 className='cu-subtitle'>XVII. NOTICES. ELECTRONIC COMMUNICATIONS.</h2>
        <ol>
          <li className='cu-text'>
            Any notice required or made under these Terms or any Exhibit from/by SmashPay to the Client shall
            be deemed duly received when sent to the Client’s last used e-mail address, mailing address, or
            phone number. SmashPay may also issue notices through announcements on the SmashPay Platform. Such
            notices shall be deemed duly received by the Client once the latter logs into the SmashPay
            Platform after the notice has been posted. If a notice requires the Client’s explicit consent,
            continued use of the SmashPay Platform and SmashPay Services by the Client after receiving the
            notice shall be deemed acceptance of the notice.
          </li>
          <li className='cu-text'>
            Any notice required or made under these Terms or any Exhibit from/by the Client to SmashPay shall
            only be made via e-mail in English to{' '}
            <Link href='mailto:support@SmashPay.com'> support@SmashPay.com</Link>.
          </li>
          <li className='cu-text'>
            Your feedback, questions, or complaints may be referred to SmashPay via e-mail in English to
            <Link href='mailto:support@SmashPay.com'> support@SmashPay.com</Link> or through other
            communication channels indicated by SmashPay from time to time on the SmashPay Platform. We will
            do our best to respond as soon as possible. However, for more complicated issues, it may take
            SmashPay up to 30 (thirty) days to get back to you. We will not be responsible for any loss or
            damage suffered as a result of our failure to or delay in responding within the above period.
          </li>
          <li className='cu-text'>
            You shall be fully responsible for the security and authenticity of all instructions sent through
            the SmashPay Platform, and you shall be bound by all such instructions. We will assume that all
            the instructions received from your SmashPay Account are coming from you, and we shall not be
            obliged to verify this.
          </li>
          <li className='cu-text'>
            You accept the risk that your instructions and information may not be protected against
            unauthorised access when given through the SmashPay Platform, as being transmitted via the
            Internet.
          </li>
          <li className='cu-text'>
            Any instructions sent to SmashPay shall only be deemed received by SmashPay when we have
            successfully retrieved them from the relevant system and duly informed you of the receipt. Any
            instructions sent by you to any third parties will only be deemed received by them in accordance
            with their terms and conditions.
          </li>
          <li className='cu-text'>
            You agree that, to the extent there are any terms in your local jurisdiction governing the time
            and place of dispatch and receipt of electronic communications, such terms will not apply to your
            use of the SmashPay Platform and the SmashPay Services (subject to the maximum extent permitted
            under Applicable Law), and you will be liable for any damages caused through the use of
            connectivity means.
          </li>
          <li className='cu-text'>
            You acknowledge and agree that in the event of any dispute arising in connection with your use of
            the SmashPay Platform and the SmashPay Services, our records of all matters related to your use of
            the SmashPay Platform and the SmashPay Services on any specific date will be binding on you for
            all claims and purposes whatsoever. Additionally, you agree to the admissibility of all such
            records and documents without further requirement of proof of authenticity or accuracy in a court
            of law or similar institution under any Applicable Law.
          </li>
        </ol>
      </div>
      {/* Section XVIII. GOVERNING LAW AND JURISDICTION. */}
      <div className='cu-items'>
        <h2 className='cu-subtitle'>XVIII. GOVERNING LAW AND JURISDICTION</h2>
        <ol>
          <li className='cu-text'>
            The Agreement and all Exhibits shall be governed exclusively by the substantive law of the Cayman
            Islands.
          </li>
          <li className='cu-text'>
            Any dispute arising out of or in connection with the Agreement and all Exhibits, unless amicably
            settled between the Parties, shall be referred to the competent court in the Cayman Islands,
            determined as per the procedural law of the Cayman Islands. You agree that any dispute resolution
            proceeding shall be conducted only on an individual basis and not as a plaintiff or class member
            in any purported class, consolidated or representative action or proceeding. No court or other
            dispute resolution authority can consolidate or join more than one claim and can otherwise preside
            over any form of a consolidated, representative, or class proceeding. Any relief awarded cannot
            affect other SmashPay’s Clients.
          </li>
        </ol>
      </div>
      {/* Section XIX. INTELLECTUAL PROPERTY */}
      <div className='cu-items'>
        <h2 className='cu-subtitle'>XIX. INTELLECTUAL PROPERTY</h2>
        <ol>
          <li className='cu-text'>
            The Intellectual Property remains an exclusive property of SmashPay. You acknowledge and agree
            that no part or parts of the Intellectual Property may be reproduced, distributed, republished,
            displayed, broadcast, hyperlinked, transmitted, adapted, modified to create derivative works, or
            otherwise commercially exploited in any manner or by any means or stored in an information
            retrieval system without our prior written permission. You are expressly and emphatically
            restricted from all of the following: (i) selling, sublicensing, and/or otherwise commercialising
            any Intellectual Property, (ii) using the SmashPay Platform in any way that is, or maybe,
            damaging, (iii) using the SmashPay Platform in any way that impacts Clients’ access, (iv) using
            the SmashPay Platform contrary to Applicable Laws, or in a way that causes, or may cause, harm to
            the SmashPay Platform, or to any person or business entity, (v) engaging in any data mining, data
            harvesting, data extracting, or any other similar activity in relation to the SmashPay Platform.
          </li>
          <li className='cu-text'>
            Other than the content you own, including any audio, video, text, images, or other material which
            you may have opted to include on the SmashPay Platform under these Terms or any Exhibit, SmashPay
            and/or its licensors own all rights to the Intellectual Property and material contained, and all
            such rights are reserved. In regard to your content, you grant SmashPay a nonexclusive, worldwide,
            irrevocable, royalty-free, sublicensable license to use, reproduce, adapt, publish, translate, and
            distribute it in any and all media. Your content must be your own and must not be infringing on
            any third party’s rights. SmashPay reserves the right to remove any of your content from the
            SmashPay Platform at any time and for any reason without notice.
          </li>
          <li className='cu-text'>
            SmashPay hereby grants you a non-assignable and non-exclusive personal, worldwide, revocable,
            royalty-free license to use the SmashPay Platform. However, certain areas of the SmashPay Platform
            are restricted from access by you, and SmashPay may further restrict access by you to any areas,
            at any time, at its sole and absolute discretion.
          </li>
        </ol>
      </div>
      {/* Section XX. MISCELLANEOUS */}
      <div className='cu-items'>
        <h2 className='cu-subtitle'>XX. MISCELLANEOUS</h2>
        <ol>
          <li className='cu-text'>
            Your use of the SmashPay Services may be subject to certain Fees, as indicated in any Fee Schedule
            and/or on the SmashPay Platform, and/or in the SmashPay Account at a given time, or otherwise
            agreed with us, such as withdrawal fees, repayment fees, inactivity fees, etc., which may include
            third-party fees, such as bank fees, card fees, gas fees, etc., but are always exclusive of any
            taxes. Third-party fees may not always be calculated in advance, may be separately charged and
            payable to the relevant third-party service provider. You acknowledge and agree that you are
            solely responsible for paying all our Fees, as well as all separately charged third-party fees.
            Our Fees will be charged and debited automatically from your SmashPay Account in the same Digital
            Asset subject of the relevant SmashPay Service or other Digital Asset, as the case may be and at
            our sole and absolute discretion. In case the deduction is not possible, you undertake to pay the
            relevant Fee to us within 7 (seven) calendar days of our notice to do so. You hereby acknowledge
            and agree that we may charge you for any additional costs incurred in relation to your SmashPay
            Account or use of the SmashPay Services, such as wrong transfers, payment refusals, etc. Our Fees
            and any Fee Schedule may be changed at any time, at SmashPay’s sole and absolute discretion and
            without notice to you.
          </li>
          <li className='cu-text'>
            This Agreement, together with the Privacy Policy and the Cookies Policy, as well as the applicable
            Exhibits, represents the entire agreement between you and SmashPay in relation to the use of the
            SmashPay Services. Unless otherwise agreed, it supersedes all prior or current representations,
            statements, understandings, agreements, or communications between you and SmashPay, its
            affiliates, third-party service providers, each of their respective employees, officers,
            directors, and representatives, whether written or verbal and regardless of the communication
            channel, including any statements in SmashPay’s whitepaper.
          </li>
          <li className='cu-text'>
            SmashPay shall reserve its right to amend or supplement these Terms and any Exhibit from time to
            time and without notice. Any such amendments or supplements shall become valid and in full force
            as of the date of their publishing on the SmashPay Platform unless otherwise indicated. You shall
            regularly check the SmashPay Platform to inform yourself about any such amendments or supplements.
            We may also, at any time, change, add, or remove any feature or functionality of the SmashPay
            Platform without notice. By continuing to use the SmashPay Platform and/or the SmashPay Services,
            after any such amendments or supplements, respectively changes, have taken effect, you thereby
            indicate your acceptance of the amended or supplemented Terms and the changed SmashPay Platform.
            If you do not wish to be bound by any amendments or supplements to these Terms or any Exhibit, you
            shall discontinue your use of the SmashPay Platform and/or the SmashPay Services immediately.
          </li>
          <li className='cu-text'>
            The descriptive headings in these Terms or any Exhibit are inserted for convenience only and shall
            not affect their interpretation. For the avoidance of doubt, all express terms contained in these
            Terms shall prevail over any terms which it may be possible to construe as implied and/or binding
            by any materials contained on the SmashPay Platform.
          </li>
          <li className='cu-text'>
            The invalidity of the whole or part of any provision of these Terms or any Exhibit shall not
            affect the validity of the whole or part of any other provision of these Terms or any Exhibit. The
            remaining provisions of these Terms or any Exhibit shall remain in full force and effect.
          </li>
          <li className='cu-text'>
            The failure by SmashPay to exercise or enforce any right under, or provision of, these Terms or
            any Exhibit shall not constitute a present or future waiver of such right or provision.
          </li>
          <li className='cu-text'>
            None of your rights and obligations arising out of the Agreement or any Exhibit are assignable or
            transferable without the prior written consent of SmashPay. SmashPay shall reserve the right to
            assign, delegate, or transfer this Agreement or any Exhibit and the rights and obligations
            thereunder to any third party at any time, without notice or your consent.
          </li>
          <li className='cu-text'>
            Except for the legal entities belonging to the SmashPay group of companies оr operating under any
            SmashPay brand name or trademark, a person who is not a party to this Agreement or any Exhibit
            shall not be entitled to enforce it.
          </li>
          <li className='cu-text'>
            This Agreement is prepared and concluded in English language, and may vary depending on your
            jurisdiction. In case it, the SmashPay Platform or any part thereof is translated into another
            language for whatever reason, the English version shall prevail.
          </li>
        </ol>
      </div>
      {/* Section Exhibit I - SmashPay Exchange Service
S */}
      <div className='cu-items'>
        <h2 className='cu-subtitle'>Exhibit I - SmashPay Exchange Service</h2>
        <ol>
          {/* item */}
          <li className='cu-text'>
            {' '}
            INTRODUCTION
            <ol>
              <li>
                This Exhibit incorporates by reference and supplements the SmashPay Terms of Service (“Terms”)
                as if the entirety of the Terms were set forth in this Exhibit. Capitalised terms used but not
                defined in this Exhibit have the meanings given to them in the Terms. In the event of a
                conflict between the Terms and this Exhibit, the terms of this Exhibit shall prevail.
              </li>
              <li>
                The Terms and this Exhibit (both “Agreement”) govern your use of the SmashPay Exchange
                Service. SmashPay shall reserve its right to amend or supplement the Exhibit from time to time
                and without notice. Any such amendments or supplements shall become valid and in full force as
                of the date of their publishing on the SmashPay Platform unless otherwise indicated. You shall
                regularly check the SmashPay Platform to inform yourself about any such amendments or
                supplements. We may also, at any time, change, add, or remove any feature or functionality of
                the SmashPay Exchange Service without notice. By continuing to use the SmashPay Exchange
                Service after any such amendments or supplements, respectively changes, have taken effect, you
                thereby indicate your acceptance of the amended or supplemented Exhibit and the changes to the
                SmashPay Exchange Service. If you do not wish to be bound by any amendments or supplements to
                this Exhibit, you shall discontinue your use of the SmashPay Exchange Service immediately.
              </li>
              <li>
                SmashPay may use one or more service provider(s) to facilitate the SmashPay Exchange Service,
                in which case you acknowledge and agree that your authorisation and instruction extend to such
                service provider(s).
              </li>
            </ol>
          </li>
          {/* item */}
          <li className='cu-text'>
            {' '}
            SPECIFIC FEATURES OF THE SmashPay EXCHANGE SERVICE
            <ol>
              <li>
                The SmashPay Exchange Service allows you to initiate the execution of an Exchange Transaction
                using the Base Assets in your Savings or Credit Wallet and the subsequent topping up of the
                proceeds thereof, respectively the relevant Counter Assets, into your Savings or Credit
                Wallet.
              </li>
              <li>
                You may only initiate an Exchange Transaction regarding the Trading Pairs and/or the Crypto
                Bundles within the limits as indicated on the SmashPay Platform and in the SmashPay Account,
                which are subject to revision from time to time at our sole and absolute discretion. By
                selecting a Crypto Bundle, you instruct SmashPay to execute several Exchange Transactions
                under this Agreement as described in Section III, and the proceeds under each Exchange
                Transaction, namely the relevant Counter Assets, shall be automatically topped up into your
                Savings Wallet. SmashPay reserves the right to modify, add, or remove Digital Assets from the
                available Crypto Bundles at its sole and absolute discretion
              </li>
            </ol>
          </li>
          {/* item */}
          <li className='cu-text'>
            {' '}
            INITIATION AND EXECUTION OF EXCHANGE TRANSACTIONS
            <ol>
              <li>
                You may, upon your instruction to SmashPay, initiate the execution of an Exchange Transaction
                by selecting a Trading Pair, respectively a Crypto Bundle, using available Digital Assets in
                your SmashPay Account as Base Assets. If you do not have the minimum amount of the Base Asset
                needed for the execution of an Exchange Transaction (applicable only to the cases where the
                Base Asset is EURx/GBPx/USDx), you may initiate the execution of a purchase transaction in
                accordance with Art. V.5.(ii) of the Terms, a subsequent Exchange Transaction, and the
                topping-up of the proceeds of the latter, respectively the relevant Counter Assets, into your
                Savings Wallet. For the avoidance of doubt, the relevant Counter Assets will be topped up into
                your Savings Wallet only under the condition that both the purchase transaction and the
                Exchange Transaction under the preceding sentence have been executed. You may opt to set up
                recurring Exchange Transactions, to which Art. V.6. of the Terms will apply accordingly.
              </li>
              <li>
                You must select the type and amount of the Base Asset you wish to sell and the Counter Asset
                you wish to buy, respectively the Crypto Bundle applicable for Swap Orders as defined below,
                thus selecting the Trading Pair(s), before you place one of the following Orders with
                SmashPay:
                {/* sub */}
                <ol>
                  <li>
                    {' '}
                    Swap Order - an Order whereby you instruct SmashPay to execute an Exchange Transaction at
                    the best price available on the relevant Exchange(s). SmashPay will show you the relevant
                    Exchange Price on the SmashPay Platform, and if the Exchange Transaction can be executed
                    at more than one Exchange, SmashPay will strive to execute the Exchange Transaction at the
                    best price available on these Exchanges. However, we do not guarantee the availability of
                    any price
                  </li>
                  <li>
                    {' '}
                    Target Price Swap Order - an Order whereby you instruct SmashPay to execute an Exchange
                    Transaction by either buying Digital Assets when the Target Price of the Counter Asset
                    falls below a certain value or selling Digital Assets when the Target Price of the Base
                    Asset surpasses a certain value, both of which are determined by you in relation to the
                    last traded price of such Digital Assets on the relevant Exchange(s), as indicated on the
                    SmashPay Platform.
                  </li>
                </ol>
                {/* sub */}
              </li>
              <li>
                Target Price Orders will be pending until the Target Price is reached or the Order is
                cancelled by the Client, or in the cases under Art. IV.1. of Exhibit II. The Base Asset
                subject to the relevant Target Price Swap Order will continue earning Interest in accordance
                with the SmashPay Earn Interest Product for a FLEX Term in your SmashPay Account, but cannot
                be withdrawn, used for repayment of a SmashPay Crypto Credit, until the Target Price Swap
                Order is cancelled or executed, while other limitations, as indicated on the SmashPay
                Platform, such as ineligibility for cashback, may apply, subject to revision from time to time
                at our sole and absolute discretion.
              </li>
              <li>
                {' '}
                You cannot reverse any Exchange Transaction once you have provided the relevant instructions
                to SmashPay, as indicated in Art. V.7. of the Terms, while exceptions apply to the Target
                Price Swap Orders as indicated on the SmashPay Platform and in your SmashPay Account
              </li>
              <li>
                Your Orders shall be processed by SmashPay immediately, excluding the cases where you have
                opted for recurring Digital Assets purchases under Art. V.6 of the Terms and the Target Price
                Swap Orders, while their status may be tracked in the SmashPay Account. However, due to
                technical reasons, the processing may take longer, for which SmashPay cannot be held liable.
              </li>
              <li>
                {' '}
                Once your Order has been executed, the Counter Assets have been topped up into your SmashPay
                Account, respectively your SmashPay Account balance has been updated, you will receive
                confirmation of the Exchange Transaction via e-mail.
              </li>
              <li>
                You will not be able to place an Order (i) using Base Assets not available in your Savings or
                Credit Wallet, (ii) above or under the permitted limits as indicated on the SmashPay Platform
                and in your SmashPay Account, except in the cases under Art. III.10., (iii) when the Base
                Asset serves as Collateral of a current SmashPay Crypto Credit and the LTV applicable thereto
                exceeds the LTV applicable to the Counter Asset intended to serve as Collateral of the same
                SmashPay Crypto Credit instead of the Base Asset, as indicated on the SmashPay Platform and in
                the SmashPay Account, except in the cases under Art. III.10., or (iv) using Base Assets in
                your Credit Wallet to execute a Target Price Swap Order
              </li>
              <li>
                Your Order may be rejected (i) due to network shortages and/or technical reasons, (ii) in case
                of significant price difference, or (iii) in case there are not enough Counter Assets on the
                Exchange(s)
              </li>
              <li>
                We may, at our sole and absolute discretion, reverse or adjust any executed Exchange
                Transaction in case of an error in the Exchange Price or the Target Price of the Digital
                Assets, which deviates from the prevailing market price and which has occurred as a result of
                a system or technical error detected by SmashPay, regardless of the reason for such. In case
                of reversal, the Counter Assets subject of the Exchange Transaction will be withdrawn from the
                Savings or Credit Wallet of your SmashPay Account, and the Base Assets will be re-topped up
                thereinto. In case of adjustment, the amount of the Counter Assets subject of the Exchange
                Transaction will be adjusted accordingly in the Savings or Credit Wallet of your SmashPay
                Account.
              </li>
              <li>
                .You acknowledge that Dust may accumulate in your SmashPay Account as a result of your use of
                the SmashPay Services on the SmashPay Platform. You may initiate an Exchange Transaction with
                the accumulated Dust as a Base Asset(s) for SmashPay Tokens as a Counter Asset within the
                limits and under the conditions, as indicated on the SmashPay Platform and in the SmashPay
                Account, which are subject to revision from time to time at our sole and absolute discretion.
              </li>
              <li>
                If an Exchange Transaction is initiated and executed as part of the SmashPay Booster, Exhibit
                V shall apply accordingly, while in case of any discrepancy between Exhibit I and Exhibit V,
                the latter shall prevail.
              </li>
            </ol>
          </li>
        </ol>
      </div>
      {/* Section Exhibit II - SmashPay Crypto Credit */}
      <div className='cu-items'>
        <h2 className='cu-subtitle'>Exhibit II - SmashPay Crypto Credit</h2>
        <ol>
          {/* item */}
          <li className='cu-text'>
            {' '}
            INTRODUCTION
            <ol>
              <li>
                This Exhibit incorporates by reference and supplements the SmashPay Terms of Service (“Terms”)
                as if the entirety of the Terms were set forth in this Exhibit. Capitalised terms used but not
                defined in this Exhibit have the meanings given to them in the Terms. In the event of a
                conflict between the Terms and this Exhibit, the terms of this Exhibit shall prevail.
              </li>
              <li>
                The Terms and this Exhibit (both “Agreement”) govern your use of the SmashPay Crypto Credit.
                SmashPay shall reserve its right to amend or supplement the Exhibit from time to time and
                without notice. Any such amendments or supplements shall become valid and in full force as of
                the date of their publishing on the SmashPay Platform unless otherwise indicated. You shall
                regularly check the SmashPay Platform to inform yourself about any such amendments or
                supplements. We may also, at any time, change, add, or remove any feature or functionality of
                the SmashPay Crypto Credit without notice. By continuing to use the SmashPay Crypto Credit
                after any such amendments or supplements, respectively changes, have taken effect, you thereby
                indicate your acceptance of the amended or supplemented Exhibit and the changes to the
                SmashPay Crypto Credit. If you do not wish to be bound by any amendments or supplements to
                this Exhibit, you shall discontinue your use of the SmashPay Crypto Credit immediately.
              </li>
              <li>
                SmashPay may use one or more service provider(s) to facilitate the SmashPay Crypto Credit, in
                which case you acknowledge and agree that your authorisation and instruction extend to such
                service provider(s).
              </li>
            </ol>
          </li>
          {/* item */}
          <li className='cu-text'>
            {' '}
            SmashPay CRYPTO CREDIT AND COLLATERAL
            <ol>
              <li>
                SmashPay will grant you a SmashPay Crypto Credit in Digital Assets if you provide the required
                Digital Assets as collateral, by transferring them into the SmashPay Account or by using the
                ones available thereinto (“Collateral”). All such Digital Assets are indicated on the SmashPay
                Platform and in the SmashPay Account and are subject to revision from time to time.
              </li>
              <li>
                The value of the SmashPay Crypto Credit shall be calculated by the loan-to-value ratio, as
                indicated on the SmashPay Platform and subject to revision from time to time at our sole and
                absolute discretion (“LTV”), against the value of the Collateral at the time of granting. The
                value of the Collateral shall be dynamically calculated by SmashPay in accordance with its
                applicable policy at the moment, on the basis of margin percentages applied to the market
                value of the Collateral, according to an exchange ratio equivalent to the volume-weighted
                average price of the relevant Digital Assets across leading cryptocurrency exchanges.
              </li>
              <li>You shall at all times maintain the necessary Collateral in accordance with the LTV.</li>
              <li>
                You may initiate substitution of the Digital Assets used as Collateral at any time by
                initiating an Exchange Transaction in accordance with Exhibit I, only under the condition that
                the LTV applicable to the Counter Asset intended to serve as Collateral of the SmashPay Crypto
                Credit instead of the Base Asset is equal to or exceeds the LTV applicable to the Base Asset
                used as Collateral, as indicated on the SmashPay Platform and in the SmashPay Account, except
                in the cases under Art. III.10. of Exhibit I. Once your Order has been executed, the Counter
                Assets shall be topped up into the Credit Wallet of your SmashPay Account, respectively your
                SmashPay Crypto Credit balance shall be updated, and the substitution shall be deemed
                completed. In case the LTV applicable to the Counter Asset exceeds the one applicable to the
                Base Asset, only the Counter Assets corresponding to the initial LTV shall be used as
                Collateral, and the remaining balance shall be at the Client’s disposal as per this Agreement.
                The number of substitutions under this article shall be unlimited while the SmashPay Crypto
                Credit is outstanding.
              </li>
              <li>
                By virtue of this Agreement, SmashPay acquires all rights under Art. IX.3.1.3 of the Terms to
                the Collateral while the SmashPay Crypto Credit is outstanding. In cases of a substitution
                under Art. II.4., once the same has been completed, all rights acquired by SmashPay under Art.
                IX.3.1.3 of the Terms shall pass onto the Counter Assets used as Collateral of the same
                SmashPay Crypto Credit.
              </li>
              <li>
                If a SmashPay Crypto Credit is granted as part of the SmashPay Booster, Exhibit V shall apply
                accordingly, while in case of any discrepancy between Exhibit II and Exhibit V, the latter
                shall prevail.
              </li>
              <li>
                If a SmashPay Crypto Credit is granted for opening of a Futures Contract, Exhibit VII shall
                apply accordingly, while in case of any discrepancy between Exhibit II and Exhibit VII, the
                latter shall prevail.
              </li>
            </ol>
          </li>
          {/* item */}
          <li className='cu-text'>
            {' '}
            INTEREST
            <ol>
              <li>
                A compound annual Interest shall commence accruing as of the start date of the SmashPay Crypto
                Credit (“Start Date”), at the rate determined at the time the SmashPay Crypto Credit is
                granted and indicated in the SmashPay Account and on the SmashPay Platform. The Interest shall
                be subject to revision from time to time, at our sole and absolute discretion.
              </li>
              <li>
                The Interest shall be calculated daily, at a certain time on each calendar day, on the basis
                of the actual number of days elapsed in a 360-day year.
              </li>
              <li>
                No periodic repayment of the Interest shall be due. Any Interest accrued shall be indicated in
                the SmashPay Account.
              </li>
            </ol>
          </li>
          {/* item */}
          <li className='cu-text'>
            {' '}
            MARGIN CALLS. LIQUIDATION
            <ol>
              <li>
                If the LTV increases above certain thresholds, as indicated on the SmashPay Platform, you
                shall provide additional Collateral and/or make the required repayments to rebalance the
                SmashPay Crypto Credit. In addition, in case you have enabled the available option(s) in your
                SmashPay Account, the relevant amount and type of Digital Assets will be automatically
                transferred from the Savings Wallet to the Credit Wallet of your SmashPay Account to serve as
                additional Collateral in the following order: (i) the relevant amount and type of Digital
                Assets available in the Savings Wallet, (ii) the Base Assets in a Target Price Swap Order(s),
                where the Order(s) will be automatically cancelled, (iii) the relevant amount and type of
                Digital Assets to which the relevant SmashPay Earn Interest Product(s) for a Fixed Term
                applies. If the necessary requirements are met, you may opt for such automatic transfer where
                the relevant amount and type of Digital Assets available in the Savings Wallet will be
                automatically transferred to maintain the desired lower LTV of your SmashPay Crypto Credit,
                according to the procedure described on the SmashPay Platform. The above features will affect
                your outstanding SmashPay Crypto Credit henceforth and may be disabled at any time, as
                indicated on the SmashPay Platform.
              </li>
              <li>
                If the LTV increases above the maximum permitted threshold, as indicated on the SmashPay
                Platform, SmashPay shall liquidate the necessary amount of Collateral to rebalance your
                SmashPay Crypto Credit, respectively shall close any Futures Contracts, and you give SmashPay
                the authority and discretion to sell or dispose of any or all Collateral, respectively close
                any Futures Contracts, in such manner as SmashPay, at its sole and absolute discretion, sees
                fit. You hereby acknowledge and agree that SmashPay is expressly entitled to a private
                realisation of the Collateral, in particular by selling and assigning or transferring the
                Collateral to any third party, or by acquiring any or all of such Collateral.
              </li>
              <li>
                SmashPay may take reasonable steps but shall not be obliged to notify you of any changes in
                the LTV prior to SmashPay exercising its rights under this Agreement, including but not
                limited to proceeding with liquidation or closing of Futures Contracts. SmashPay retains the
                discretion to liquidate your Collateral or close your Futures Contracts without prior notice,
                especially when market conditions require immediate action. You acknowledge and agree that it
                is your sole responsibility to monitor the prevailing market conditions at a given time and
                maintain your LTV in full accordance with this Agreement without request or notice by
                SmashPay.
              </li>
            </ol>
          </li>
          {/* item */}
          <li className='cu-text'>
            {' '}
            TERM
            <ol>
              <li>
                The SmashPay Crypto Credit shall mature in a 12-month term starting from the Start Date
                (“Maturity Date”).
              </li>
              <li>
                Unless terminated on the Maturity Date in accordance with this Agreement, the term of the
                SmashPay Crypto Credit shall be automatically extended for another 12-month term. The number
                of extensions under the preceding sentence shall be unlimited.
              </li>
            </ol>
          </li>
          {/* item */}
          <li className='cu-text'>
            {' '}
            REPAYMENT AND WITHDRAWAL
            <ol>
              <li>
                The SmashPay Crypto Credit shall be repaid on the Maturity Date unless its term has been
                automatically extended in accordance with Art. V.2.
              </li>
              <li>
                You may repay, at any time prior to the Maturity Date, any amount: (i) by using available
                Digital Assets in your SmashPay Account, whether being the same Digital Assets as the SmashPay
                Crypto Credit granted, or other Digital Assets acceptable to SmashPay, (ii) by transferring
                into the SmashPay Account the same Digital Assets as the SmashPay Crypto Credit granted or
                other Digital Assets acceptable to SmashPay, (iii) with the Collateral, or (iv) by combination
                of any or all of the above. Certain rules may apply to repayments from time to time, as
                indicated on the SmashPay Platform, including in the case of a Futures Contract, where the
                SmashPay Crypto Credit will be repaid after the closure of the relevant Futures Contract.
              </li>
              <li>
                All repayments shall be allocated first to the Fees (if any), then to the Interest and last to
                the principal of the SmashPay Crypto Credit.
              </li>
              <li>
                Once the SmashPay Crypto Credit has been repaid in full, all remaining Collateral shall no
                longer be treated as such for the purpose of this SmashPay Crypto Credit.
              </li>
              <li>
                SmashPay may provide you with discounts on the SmashPay Crypto Credit or any part thereof,
                such as the principal, the Interest, or the Fees, at any time, under conditions it finds
                appropriate.
              </li>
            </ol>
          </li>
        </ol>
      </div>
      {/* Section Exhibit III - SmashPay Earn Interest Product */}
      <div className='cu-items'>
        <h2 className='cu-subtitle'>Exhibit III - SmashPay Earn Interest Product</h2>
        <ol>
          {/* item */}
          <li className='cu-text'>
            {' '}
            INTRODUCTION
            <ol>
              <li>
                This Exhibit incorporates by reference and supplements the SmashPay Terms of Service (“Terms”)
                as if the entirety of the Terms were set forth in this Exhibit. Capitalised terms used but not
                defined in this Exhibit have the meanings given to them in the Terms. In the event of a
                conflict between the Terms and this Exhibit, the terms of this Exhibit shall prevail.
              </li>
              <li>
                The Terms and this Exhibit (both “Agreement”) govern your use of the SmashPay Earn Interest
                Product. SmashPay shall reserve its right to amend or supplement the Exhibit from time to time
                and without notice. Any such amendments or supplements shall become valid and in full force as
                of the date of their publishing on the SmashPay Platform unless otherwise indicated. You shall
                regularly check the SmashPay Platform to inform yourself about any such amendments or
                supplements. We may also, at any time, change, add, or remove any feature or functionality of
                the SmashPay Earn Interest Product without notice. By continuing to use the SmashPay Earn
                Interest Product after any such amendments or supplements, respectively changes, have taken
                effect, you thereby indicate your acceptance of the amended or supplemented Exhibit and the
                changes to the SmashPay Earn Interest Product. If you do not wish to be bound by any
                amendments or supplements to this Exhibit, you shall discontinue your use of the SmashPay Earn
                Interest Product immediately.
              </li>
              <li>
                SmashPay may use one or more service provider(s) to facilitate the SmashPay Earn Interest
                Product, in which case you acknowledge and agree that your authorisation and instruction
                extend to such service provider(s).
              </li>
            </ol>
          </li>
          {/* item */}
          <li className='cu-text'>
            {' '}
            SPECIFIC FEATURES OF THE SmashPay EARN INTEREST PRODUCT
            <ol>
              <li>
                In case you have opted in for using the SmashPay Earn Interest Product on the SmashPay
                Platform (“Opt-in”), you can earn Interest on certain Digital Assets topped up into the
                Savings Wallet of your SmashPay Account in accordance with Section V of the Terms or moved to
                the Credit Wallet of your SmashPay Account (applicable only to some Digital Assets), subject
                to any specific conditions or limitations indicated herein, in your SmashPay Account or on the
                SmashPay Platform. All such Digital Assets are indicated on the SmashPay Platform and in the
                SmashPay Account and are subject to revision from time to time at our sole and absolute
                discretion.
              </li>
              <li>
                Upon Opt-in, your agreement to use the SmashPay Earn Interest Product is effective for a term
                of 365 days (“Opt-in Term”), subject to the specific conditions or limitations indicated
                herein, in your SmashPay Account or on the SmashPay Platform. You retain the right to opt out
                of using the SmashPay Earn Interest Product (“Opt-out”) at any point during the Opt-in Term.
                Any Opt-in following a previous Opt-out will be considered a continuation of the initial
                Opt-in Term.
              </li>
              <li>
                You are allowed to have multiple active SmashPay Earn Interest Products running
                simultaneously. Interest will be accrued separately on each SmashPay Earn Interest Product.
              </li>
              <li>
                You may select a SmashPay Earn Interest Product for a flex term (“FLEX Term”) or for a fixed
                term (“Fixed Term”). The terms applicable to each of the above types of SmashPay Earn Interest
                Product, including but not limited to the Digital Assets on which Interest can be earned, the
                Interest and the duration of the Fixed Term, if any, are indicated on the SmashPay Platform
                and may be changed by SmashPay from time to time, at its sole and absolute discretion.
              </li>
              <li>
                If you select a SmashPay Earn Interest Product for a Fixed Term, you cannot terminate the
                Agreement in the relevant part thereof governing your use of this SmashPay Earn Interest
                Product prematurely or withdraw your Digital Assets before the expiry of the Fixed Term,
                regardless of any Opt-out. However, in cases where the LTV of your SmashPay Crypto Credit
                reaches the relevant threshold, as indicated in Exhibit II and on the SmashPay Platform, and
                you have enabled the available options in your SmashPay Account, a certain amount and type of
                Digital Assets, to which the relevant SmashPay Earn Interest Product for a Fixed Term applies,
                may be automatically transferred from the Savings Wallet to the Credit Wallet of your SmashPay
                Account to serve as additional Collateral of SmashPay Crypto Credits, subject to the procedure
                described on the SmashPay Platform.
              </li>
              <li>
                During the Opt-in Term the SmashPay Earn Interest Product for a Fixed Term may be
                automatically renewed, either with or without the accrued in-kind Interest, depending on
                Client’s choice in the SmashPay Account, and each new Fixed Term will be governed by the terms
                applicable to the SmashPay Earn Interest Product for this specific Fixed Term on the date of
                renewal. You may, at any time during the Fixed Term, deactivate the automatic renewal and vice
                versa, while SmashPay will consider your choice on the date of expiry of each Fixed Term.
                Unless you have opted for automatic renewal and/or you have used the Opt-out, after the date
                of expiry of the relevant Fixed Term, the Digital Assets subject of the SmashPay Earn Interest
                Product for this Fixed Term will continue to earn Interest in accordance with the terms
                applicable to the SmashPay Earn Interest Product for a FLEX Term.
              </li>
              <li>
                The Opt-in Terms, conditions, limitations, restrictions, and prohibitions may vary depending
                on your jurisdiction, as indicated in your SmashPay Account or on the SmashPay Platform, and
                do not apply to the SmashPay Services outlined in Exhibit VIII.
              </li>
            </ol>
          </li>
          {/* item */}
          <li className='cu-text'>
            {' '}
            INTEREST
            <ol>
              <li>
                The Interest shall commence accruing on the Digital Assets at a certain rate as of the expiry
                of 24 (twenty-four) hours of their topping up into the Savings Wallet of your SmashPay
                Account, respectively your Opt-in, as the case may be and to the extent applicable, (“Start
                Time”) and may be earned in the same Digital Assets as the ones on which it is accrued or in
                SmashPay Tokens (applicable to Digital Assets different from SmashPay Tokens), as per your
                choice in the SmashPay Account. In case you opt for earning in SmashPay Tokens rather than
                earning in-kind, higher Interest may be accrued on your Digital Assets, as indicated on the
                SmashPay Platform. You may, at any time, switch from earning in-kind to earning in SmashPay
                Tokens, if applicable, and vice versa. The Interest shall be compound when earned in-kind and
                simple when earned in SmashPay Tokens.
              </li>
              <li>
                The Interest shall be subject to revision from time to time at our sole and absolute
                discretion. We will notify you of the new Interest on the SmashPay Platform. Unless indicated
                otherwise in the notification, the new Interest shall apply on the next calendar day following
                the said notification.
              </li>
              <li>
                The Interest shall be calculated daily, at a certain time on each calendar day, on the basis
                of the actual number of days elapsed in a 365-day year. When the Interest is accrued in
                SmashPay Tokens, if applicable, for the purpose of determining the amount of the latter, the
                fiat equivalent of the in-kind Interest on the relevant Digital Assets up to the above time is
                converted into SmashPay Tokens.
              </li>
              <li>
                The Interest for the SmashPay Earn Interest Product for a FLEX Term shall be credited to your
                SmashPay Account at a certain time on each calendar day, but no earlier than the Start Time.
                The Interest for the SmashPay Earn Interest Product for a Fixed Term shall be credited to your
                SmashPay Account on the date of expiry of the relevant Fixed Term unless, up to this date, all
                the Digital Assets to which the relevant SmashPay Earn Interest Product for a Fixed Term
                applies have been automatically transferred to the Credit Wallet of your SmashPay Account to
                serve as additional Collateral in accordance with Art. II.5. However, the Interest shall be
                visible in your SmashPay Account for the duration of the Fixed Term for your convenience only.
              </li>
              <li>
                The Interest, if any, subject to Art. III.4., shall be accrued on the Digital Assets until the
                date of your instructions to transfer them to the Credit Wallet or the Futures Wallet, or
                until your request for withdrawal under Art. IV.1., respectively Opt-out under Art. II.2, in
                case of a SmashPay Earn Interest Product for a FLEX Term, or until the date of expiry of the
                relevant Fixed Term, in case of a SmashPay Earn Interest Product for a Fixed Term. You will
                only receive the Interest that has been credited to your SmashPay Account up to the time of
                your request or Opt-out, respectively expiry of the relevant Fixed Term.
              </li>
              <li>
                SmashPay reserves its right to grant preferential Interest or other terms to certain Clients,
                as part of marketing campaigns or otherwise, as indicated on the SmashPay Platform and subject
                to revision from time to time, at its sole and absolute discretion. In case of automatic
                renewal, as described in Art. II.6, the initial preferential Interest and/or other terms will
                not apply, while the new Fixed Term will be renewed for the shortest possible term or, if not
                applicable - for the next term in ascending order.
              </li>
            </ol>
          </li>
          {/* item */}
          <li className='cu-text'>
            {' '}
            WITHDRAWAL OF DIGITAL ASSETS
            <ol>
              <li>
                You may request for withdrawal of the Digital Assets, respectively the fiat equivalent of the
                Digital Assets, if any, in accordance with Art. VIII.1. and VIII.2. of the Terms and subject
                to any limitations elsewhere in the Terms: (i) at any time, when using a SmashPay Earn
                Interest Product for a FLEX Term, or (ii) on the date of expiry of the relevant Fixed Term,
                when using a SmashPay Earn Interest Product for a Fixed Term, unless you have opted for
                automatic renewal
              </li>
            </ol>
          </li>
        </ol>
      </div>
      {/* Section Exhibit IV - SmashPay Card */}
      <div className='cu-items'>
        <h2 className='cu-subtitle'>Exhibit IV - SmashPay Card</h2>
        <ol>
          {/* item */}
          <li className='cu-text'>
            {' '}
            INTRODUCTION
            <ol>
              <li>
                This Exhibit incorporates by reference and supplements the SmashPay Terms of Service (“Terms”)
                as if the entirety of the Terms were set forth in this Exhibit. Capitalised terms used but not
                defined in this Exhibit have the meanings given to them in the Terms. In the event of a
                conflict between the Terms and this Exhibit, the terms of this Exhibit shall prevail.
              </li>
              <li>
                The Terms, this Exhibit and the SmashPay Card Provider General Terms and Conditions (the
                latter “Card Terms” and all “Agreement”) govern your use of the SmashPay Card. SmashPay shall
                reserve its right to amend or supplement the Exhibit from time to time and without notice. Any
                such amendments or supplements shall become valid and in full force as of the date of their
                publishing on the SmashPay Platform unless otherwise indicated. You shall regularly check the
                SmashPay Platform to inform yourself about any such amendments or supplements. We may also, at
                any time, change, add, or remove any feature or functionality of the SmashPay Card without
                notice. By continuing to use the SmashPay Card after any such amendments or supplements,
                respectively changes, have taken effect, you thereby indicate your acceptance of the amended
                or supplemented Exhibit and the changes to the SmashPay Card. If you do not wish to be bound
                by any amendments or supplements to this Exhibit, you shall discontinue your use of the
                SmashPay Card immediately.
              </li>
              <li>
                SmashPay may use one or more service provider(s) to facilitate the SmashPay Card, in which
                case you acknowledge and agree that your authorisation and instruction extend to such service
                provider(s).
              </li>
            </ol>
          </li>
          {/* item */}
          <li className='cu-text'>
            {' '}
            SPECIFIC FEATURES OF THE SmashPay CARD
            <ol>
              <li>
                The SmashPay Card allows you to request a SmashPay Crypto Credit and/or execute an Exchange
                Transaction using the Digital Assets in the Savings Wallet of your SmashPay Account as
                Collateral, respectively as Base Assets, and subsequently request the fiat equivalent of the
                SmashPay Crypto Credit or the proceeds of the Exchange Transaction, namely the Counter Assets.
                When using the SmashPay Card to execute Exchange Transactions, you may set the order in which
                the Digital Assets in your Savings Wallet will be exhausted, respectively used as Base Assets,
                or if you have not set such order, the latter will be predetermined by SmashPay. In case: (i)
                a Digital Asset is no longer supported on the SmashPay Platform, or (ii) a Digital Asset is
                exhausted, the next in line Digital Asset will be used for the Exchange Transactions.
              </li>
              <li>
                You may order a physical and/or a virtual SmashPay Card via the SmashPay Platform, within the
                limitations as indicated in your SmashPay Account and on the SmashPay Platform, and in
                accordance with the Card Terms.
              </li>
              <li>
                You may be eligible to receive cashback in Digital Assets at a certain percentage for each
                transaction with your SmashPay Card requesting a SmashPay Crypto Credit, as indicated in your
                SmashPay Account and on the SmashPay Platform. The conditions for receiving cashback are
                subject to revision from time to time at our sole and absolute discretion.
              </li>
              <li>
                In case of a refund or chargeback of any transaction with your SmashPay Card for requesting a
                SmashPay Crypto Credit, the refunded or chargeback amount will be reverted, while the relevant
                amount thereof will be topped up into your Savings Wallet. Any cashback associated with the
                refunded or chargeback transactions will also be reverted, while the same will be added to
                your outstanding SmashPay Crypto Credit, thus increasing the amount of the latter.
              </li>
              <li>
                If you choose a transaction with the SmashPay Card to be executed in a currency other than the
                SmashPay Card Currency, the card provider will execute the relevant transaction at the
                prevailing conversion rate as indicated on the SmashPay Platform, within the limitation as
                indicated on the SmashPay Platform. When using the SmashPay Card for requesting a SmashPay
                Crypto Credit, further transactions may occur, as indicated on the SmashPay Platform.
              </li>
              <li>
                SmashPay will not be liable if: (i) you do not have enough Digital Assets available in your
                SmashPay Account to complete the transaction, (ii) a merchant refuses to accept your SmashPay
                Card, (iii) an ATM where you are making a cash withdrawal does not have enough cash, (iv) an
                electronic terminal where you are making a transaction does not operate properly, (v) the
                access to your SmashPay Card has been blocked after you had reported your SmashPay Card lost
                or stolen, (vi) your Digital Assets or SmashPay Account are subject to legal process leading
                to their suspension, restriction, or similar measures, (vii) SmashPay or the card provider
                have reasons to believe the requested transaction is unauthorized, or (viii) circumstances
                beyond our control (e.g. force majeure) prevent the completion of the transaction, despite the
                reasonable precautions that we have taken.
              </li>
              <li>
                In case of discrepancies between the present Exhibit IV and Exhibit I and/or Exhibit II, the
                present Exhibit IV shall prevail.
              </li>
            </ol>
          </li>
        </ol>
      </div>
      {/* Section Exhibit V - SmashPay Booster */}
      <div className='cu-items'>
        <h2 className='cu-subtitle'>Exhibit V - SmashPay Booster</h2>
        <ol>
          {/* item */}
          <li className='cu-text'>
            {' '}
            INTRODUCTION
            <ol>
              <li>
                This Exhibit incorporates by reference and supplements the SmashPay Terms of Service (“Terms”)
                as if the entirety of the Terms were set forth in this Exhibit. Capitalised terms used but not
                defined in this Exhibit have the meanings given to them in the Terms. In the event of a
                conflict between the Terms and this Exhibit, the terms of this Exhibit shall prevail.
              </li>
              <li>
                The Terms and this Exhibit (both “Agreement”) govern your use of the SmashPay Booster.
                SmashPay shall reserve its right to amend or supplement the Exhibit from time to time and
                without notice. Any such amendments or supplements shall become valid and in full force as of
                the date of their publishing on the SmashPay Platform unless otherwise indicated. You shall
                regularly check the SmashPay Platform to inform yourself about any such amendments or
                supplements. We may also, at any time, change, add, or remove any feature or functionality of
                the SmashPay Booster without notice. By continuing to use the SmashPay Booster after any such
                amendments or supplements, respectively changes, have taken effect, you thereby indicate your
                acceptance of the amended or supplemented Exhibit and the changes to the SmashPay Booster. If
                you do not wish to be bound by any amendments or supplements to this Exhibit, you shall
                discontinue your use of the SmashPay Booster immediately.
              </li>
              <li>
                SmashPay may use one or more service provider(s) to facilitate the SmashPay Booster, in which
                case you acknowledge and agree that your authorisation and instruction extend to such service
                provider(s).
              </li>
            </ol>
          </li>
          {/* item */}
          <li className='cu-text'>
            {' '}
            SPECIFIC FEATURES OF THE SmashPay BOOSTER
            <ol>
              <li>
                The SmashPay Booster allows you to multiply your Portfolio Balance by either: (i) multiplying
                any Digital Asset in your Portfolio Balance by requesting a SmashPay Crypto Credit under
                Exhibit II and a subsequent Exchange Transaction under Exhibit I, whereby both the proceeds of
                the Exchange Transaction, respectively the relevant Counter Assets, and the relevant part of
                the same type of Digital Asset available in the Client’s Savings Wallet prior to the execution
                of the Exchange Transaction will be automatically transferred from the Savings Wallet to the
                Credit Wallet of your SmashPay Account to serve as Collateral of the SmashPay Crypto Credit in
                accordance with the required LTV, (ii) selecting a Trading Pair and initiating an Exchange
                Transaction for the available amount of the Base Asset in your SmashPay Account under Exhibit
                I, and requesting a SmashPay Crypto Credit under Exhibit II and a subsequent Exchange
                Transaction under Exhibit I, whereby the proceeds of both Exchange Transactions above,
                respectively the relevant Counter Assets, will be automatically transferred from the Savings
                Wallet to the Credit Wallet of your SmashPay Account to serve as Collateral of the SmashPay
                Crypto Credit in accordance with the required LTV.
              </li>
              <li>
                SmashPay will grant you the SmashPay Crypto Credit as part of the SmashPay Booster in a
                stablecoin determined by SmashPay and indicated on the SmashPay Platform and in the SmashPay
                Account, which is subject to revision from time to time, at SmashPay’s sole and absolute
                discretion. This stablecoin will serve as a Base Asset of the Exchange Transaction to be
                executed after the granting of the SmashPay Crypto Credit.
              </li>
              <li>
                You may only use the SmashPay Booster within the limits, for the Digital Assets, and under the
                conditions, as indicated in this Agreement, on the SmashPay Platform and in the SmashPay
                Account, which are subject to revision from time to time at our sole and absolute discretion.
              </li>
              <li>
                Your request to use the SmashPay Booster may be rejected: (i) due to network shortages and/ or
                technical reasons, (ii) in case of significant price difference, or (iii) in case there are
                not enough of the Digital Assets you wish to purchase on the Exchanges.
              </li>
              <li>
                We may, at our sole and absolute discretion, reverse or adjust any executed Exchange
                Transaction as part of the SmashPay Booster in case of an error in the Exchange Price of the
                Digital Assets, which deviates from the prevailing market price and which has occurred as a
                result of a system or technical error detected by SmashPay, regardless of the reason for such.
                Any reversal of an Exchange Transaction automatically leads to the reversal of the related
                SmashPay Crypto Credit. In case of reversal, the Counter Assets subject of the Exchange
                Transaction(s) and/ or your initial Digital Assets (in cases of a SmashPay Booster under Art.
                II.1.(i)) will be withdrawn from the Credit Wallet of your SmashPay Account, the Base Assets
                subject of the Exchange Transaction(s) and/or your initial Digital Assets (in cases of a
                SmashPay Booster under Art. II.1.(ii)) will be re-topped up into the Savings Wallet of your
                SmashPay Account (when not resulting from a SmashPay Crypto Credit) or withdrawn therefrom
                (when resulting from a SmashPay Crypto Credit), as the case may be. In case of adjustment, the
                amount of the Counter Assets subject of the Exchange Transaction(s) will be adjusted
                accordingly in the Credit Wallet of your SmashPay Account.
              </li>
              <li>
                {' '}
                In case of discrepancies between the present Exhibit V and Exhibit I and/or Exhibit II, the
                present Exhibit V shall prevail.
              </li>
            </ol>
          </li>
        </ol>
      </div>
      {/* Section Exhibit VI - SmashPay Staking Product */}
      <div className='cu-items'>
        <h2 className='cu-subtitle'>Exhibit VI - SmashPay Staking Product</h2>
        <ol>
          {/* item */}
          <li className='cu-text'>
            {' '}
            INTRODUCTION
            <ol>
              <li>
                This Exhibit incorporates by reference and supplements the SmashPay Terms of Service (“Terms”)
                as if the entirety of the Terms were set forth in this Exhibit. Capitalised terms used but not
                defined in this Exhibit have the meanings given to them in the Terms. In the event of a
                conflict between the Terms and this Exhibit, the terms of this Exhibit shall prevail.
              </li>
              <li>
                The Terms and this Exhibit (both “Agreement”) govern your use of the SmashPay Staking Product.
                SmashPay shall reserve its right to amend or supplement the Exhibit from time to time and
                without notice. Any such amendments or supplements shall become valid and in full force as of
                the date of their publishing on the SmashPay Platform unless otherwise indicated. You shall
                regularly check the SmashPay Platform to inform yourself about any such amendments or
                supplements. We may also, at any time, change, add, or remove any feature or functionality of
                the SmashPay Staking Product without notice. By continuing to use the SmashPay Staking Product
                after any such amendments or supplements, respectively changes, have taken effect, you thereby
                indicate your acceptance of the amended or supplemented Exhibit and the changes to the
                SmashPay Staking Product. If you do not wish to be bound by any amendments or supplements to
                this Exhibit, you shall discontinue your use of the SmashPay Staking Product immediately.
              </li>
              <li>
                SmashPay may use one or more service provider(s) to facilitate the SmashPay Staking Product,
                in which case you acknowledge and agree that your authorisation and instruction extend to such
                service provider(s).
              </li>
            </ol>
          </li>
          {/* item */}
          <li className='cu-text'>
            {' '}
            SPECIFIC FEATURES OF THE SmashPay STAKING PRODUCT
            <ol>
              <li>
                The SmashPay Staking Product allows you to earn Rewards by using Eligible Digital Assets
                topped up into your SmashPay Account in accordance with Section V of the Terms, within the
                limitations and under the conditions as indicated on the SmashPay Platform. Staking your
                Eligible Digital Assets, respectively unstaking your Staked Digital Assets, will be at a rate
                indicated on the SmashPay Platform.
              </li>
              <li>
                You may only initiate a Stake Transaction regarding the Staking Pairs, which are subject to
                revision from time to time at our sole and absolute discretion, and within the limits as
                indicated on the SmashPay Platform and in the SmashPay Account.
              </li>
              <li>
                You may use your Staked Digital Assets to repay your SmashPay Crypto Credit in accordance with
                Exhibit II.
              </li>
              <li>
                You may initiate substitution of the Staked Digital Assets or the Eligible Digital Assets used
                as Collateral by initiating a Stake Transaction, respectively an Unstake Transaction, within
                the limitations and restrictions under Art. II.7 of this Exhibit, in your SmashPay Account and
                on the SmashPay Platform.
              </li>
              <li>
                You may unstake your Staked Digital Assets, together with the distributed Rewards, at any
                time, in accordance with Section IV of the present Exhibit, subject to the limitations and
                restrictions in this Exhibit and on the SmashPay Platform, which may be revised from time to
                time at our sole and absolute discretion.
              </li>
              <li>
                You are responsible for all Stake Orders you place with SmashPay and your decisions relating
                to staking, unstaking and using the SmashPay Staking Product.
              </li>
              <li>
                You will not be able to place a Stake Order: (i) using Digital Assets not available in your
                SmashPay Account or not eligible for the SmashPay Staking Product, (ii) when the Eligible
                Digital Assets serve as Collateral of a current SmashPay Crypto Credit and the LTV applicable
                thereto exceeds the LTV applicable to the Staked Digital Asset intended to serve as Collateral
                of the same SmashPay Crypto Credit instead of the Eligible Digital Asset, as indicated on the
                SmashPay Platform and in the SmashPay Account. Your Stake Order may be rejected due to network
                shortages and/or technical reasons.
              </li>
              <li>
                We may, at our sole and absolute discretion, reverse or adjust any executed Stake Transaction
                or Unstake Transaction in case of system or technical error detected by SmashPay, regardless
                of the reason for such. In case of reversal, the Staked Digital Assets subject of the Stake
                Transaction, respectively of the Unstake Transaction, will be withdrawn from your SmashPay
                Account, and the Eligible Digital Assets will be re-topped up thereinto. In case of
                adjustment, the amount of Eligible Digital Assets or Staked Digital Assets, subject to the
                Stake Transaction, respectively of the Unstake Transaction, will be adjusted accordingly in
                your SmashPay Account.
              </li>
              <li>
                You understand and agree that, at any time, at its sole and absolute discretion, without
                liability to you, SmashPay can suspend the SmashPay Staking Product, as indicated in Section
                XII of the Terms, as well as: (i) act as a validator or assign a third party with the staking
                of your Eligible Digital Assets, (ii) keep all or part of the on-chain rewards, or (iii)
                decide on supporting or not any voting rights associated the Eligible Digital Assets.
              </li>
            </ol>
          </li>
          {/* item */}
          <li className='cu-text'>
            {' '}
            INITIATION AND EXECUTION OF STAKE TRANSACTIONS
            <ol>
              <li>
                You must select the amount of the Eligible Digital Asset before you place a Stake Order with
                SmashPay to execute a Stake Transaction. You cannot reverse any Stake Transaction once you
                have provided the relevant instructions to SmashPay, as indicated in Art. V.7. of the Terms.
              </li>
              <li>
                After you have selected the amount of Eligible Digital Assets, SmashPay will show you the
                corresponding amount in Staked Digital Assets.
              </li>
              <li>
                Your Stake Orders for executing Stake Transactions shall be processed by SmashPay immediately,
                while their status may be tracked in the SmashPay Account. However, due to technical
                limitations, the processing may take a longer period of time, for which SmashPay cannot be
                held liable.
              </li>
              <li>
                Once your Stake Order has been executed, respectively your SmashPay Account balance has been
                updated, you will receive confirmation of the Stake Transaction via e-mail.
              </li>
            </ol>
          </li>
          {/* item */}
          <li className='cu-text'>
            {' '}
            INITIATION AND EXECUTION OF UNSTAKE TRANSACTIONS
            <ol>
              <li>
                You must select the amount of the Staked Digital Asset before you place a Stake Order with
                SmashPay to execute an Unstake Transaction. You cannot reverse any Unstake Transaction once
                you have provided the relevant instructions to SmashPay, as indicated in Art. V.7. of the
                Terms.
              </li>
              <li>
                SmashPay will devote significant efforts to ensure that any Unstake Transaction will be
                processed no later than 24 (twenty-four) hours of your Stake Order. However, due to technical
                limitations imposed by the relevant network, the processing may be delayed for a predefined
                cooldown period, which is outside SmashPay’s control and for which SmashPay cannot be held
                liable. In the case of the preceding sentence, SmashPay reserves the right to extend the
                predefined period, at its sole and absolute direction, while such changes will be published on
                the SmashPay Platform.
              </li>
              <li>
                Once your Stake Order has been executed, the proceeds of the Unstake Transaction will be
                topped up into your SmashPay Account, together with the received Rewards, if any, respectively
                your SmashPay Account balance will be updated, and you will receive confirmation of the
                Unstake Transaction via e-mail.
              </li>
            </ol>
          </li>
          {/* item */}
          <li className='cu-text'>
            {' '}
            REWARDS
            <ol>
              <li>
                Rewards, if any, shall commence accruing on the Staked Digital Assets at a certain rate, less
                the SmashPay Staking Commission, as indicated in your SmashPay Account, either as of the
                expiry of 24 (twenty-four) hours as of the topping up of the Eligible Digital Assets into your
                SmashPay Account and execution of the Stake Transaction (“Cool-off Period”), or on the same
                day if the Cool-off Period has expired prior to the execution of the Stake Transaction, within
                the limitations and under the conditions, as indicated on the SmashPay Platform (“Start
                Time”). Rewards, if any, shall be compound and are not guaranteed by SmashPay, nor shall be
                determined by your loyalty level.
              </li>
              <li>
                Rewards shall be distributed to and visible in your SmashPay Account after they are received
                by SmashPay, on a daily basis, at a certain time on each calendar day, but no earlier than the
                Start Time.
              </li>
              <li>
                Rewards, if any, shall be accrued until the date of your request for unstaking under Art.
                IV.1. of this Exhibit. You will only receive the Rewards that have been credited to your
                SmashPay Account up to the time of your request.
              </li>
              <li>
                SmashPay reserves the right to grant preferential Rewards or other terms to certain Clients as
                part of marketing campaigns or otherwise, at its sole and absolute discretion.
              </li>
            </ol>
          </li>
        </ol>
      </div>
      {/* Section Exhibit VII - SmashPay Futures Product */}
      <div className='cu-items'>
        <h2 className='cu-subtitle'>Exhibit VII - SmashPay Futures Product</h2>
        <ol>
          {/* item */}
          <li className='cu-text'>
            {' '}
            INTRODUCTION
            <ol>
              <li>
                This Exhibit incorporates by reference and supplements the SmashPay Terms of Service (“Terms”)
                as if the entirety of the Terms were set forth in this Exhibit. Capitalised terms used but not
                defined in this Exhibit have the meanings given to them in the Terms. In the event of a
                conflict between the Terms and this Exhibit, the terms of this Exhibit shall prevail.
              </li>
              <li>
                The Terms and this Exhibit (both “Agreement”) govern your use of the SmashPay Futures Product.
                SmashPay shall reserve its right to amend or supplement the Exhibit from time to time and
                without notice. Any such amendments or supplements shall become valid and in full force as of
                the date of their publishing on the SmashPay Platform unless otherwise indicated. You shall
                regularly check the SmashPay Platform to inform yourself about any such amendments or
                supplements. We may also, at any time, change, add, or remove any feature or functionality of
                the SmashPay Futures Product without notice. By continuing to use the SmashPay Futures Product
                after any such amendments or supplements, respectively changes, have taken effect, you thereby
                indicate your acceptance of the amended or supplemented Exhibit and the changes to the
                SmashPay Futures Product. If you do not wish to be bound by any amendments or supplements to
                this Exhibit, you shall discontinue your use of the SmashPay Futures Product immediately.
              </li>
              <li>
                SmashPay may use one or more service provider(s) to facilitate the SmashPay Futures Product,
                in which case you acknowledge and agree that your authorisation and instruction extend to such
                service provider(s).
              </li>
            </ol>
          </li>
          {/* item */}
          <li className='cu-text'>
            {' '}
            INITIATION AND EXECUTION OF FUTURES ORDERS
            <ol>
              <li>
                You must select the type and amount of the Perpetual Futures you wish to sell or buy before
                you place a Futures Order with SmashPay to place one of the following orders:
                <ol>
                  <li>
                    Long Оrder - an order whereby you instruct SmashPay to open a Futures Contract by buying
                    Perpetual Futures at the price available at the relevant Exchange(s), within the
                    multiplication and other limits as indicated on the SmashPay Platform, and subsequently
                    selling this Digital Asset at the price available at the relevant Exchange(s);
                  </li>
                  <li>
                    Short Оrder - an order whereby you instruct SmashPay to open a Futures Contract by selling
                    Perpetual Futures at the price available at the relevant Exchange(s), within the
                    multiplication and other limits as indicated on the SmashPay Platform, and subsequently
                    buying this Digital Asset at the price available at the relevant Exchange(s).
                  </li>
                </ol>
              </li>
              <li>
                You may, while having an open Futures Contract, instruct SmashPay to partially or fully close
                your Futures Contract by placing one of the following orders or simultaneously both of them,
                which will apply for the relevant Perpetual Futures, unless they are canceled, or the relevant
                opened Futures Contract is closed either by liquidation or by you, namely:
                <ol>
                  <li>
                    Stop Loss Order - an order whereby you instruct SmashPay to close а Futures Contract when
                    the price of the Perpetual Futures, in the case of a Short Order, reaches or rises above,
                    or respectively in the case of a Long Order, reaches or falls below a certain threshold
                    determined by you, whereas this threshold is compared to the last traded price of the
                    Perpetual Futures on the relevant Exchange(s), as indicated on the SmashPay Platform;
                  </li>
                  <li>
                    Take Profit Order - an order whereby you instruct SmashPay to close а Futures Contract
                    when the price of the Perpetual Futures, in the case of a Short Order, reaches or falls
                    below, or respectively in the case of a Long Order, reaches or rises above a certain
                    threshold determined by you, whereas this threshold is compared to the last traded price
                    of the Perpetual Futures on the relevant Exchange(s), as indicated on the SmashPay
                    Platform.
                  </li>
                </ol>
              </li>
              <li>
                You may defer the placement of a Futures Order by designating the specific Entry Price, at
                which the Futures Contract shall be opened, or the specific Exit Price, at which the Futures
                Contract shall be closed, while you may, at any time before execution of the relevant Futures
                Order, change the Entry Price, respectively the Exit Price, and/or the amount of the relevant
                Futures Order.
              </li>
              <li>
                You may execute both Long and Short Orders for the same Perpetual Futures, and also partially
                or fully close any open Futures Contract. Upon full closure, or partially, if selected by you,
                the Futures Contracts are denominated and settled in a certain stablecoin determined by
                SmashPay, as indicated on the SmashPay Platform.
              </li>
              <li>
                Upon placing a Long or Short Order for opening a Futures Contract with SmashPay, you are
                requesting a SmashPay Crypto Credit under Exhibit II against a Collateral, within the Leverage
                limitations as indicated on the SmashPay Platform.
              </li>
              <li>
                SmashPay will grant you an interest-free SmashPay Crypto Credit in a stablecoin determined by
                SmashPay and indicated on the SmashPay Platform and in the SmashPay Account, while Section III
                of Exhibit II will not apply. Your Futures Contracts will be closed automatically if your
                Margin Risk increases above the permitted threshold, as indicated on the SmashPay Platform and
                in accordance with Exhibit II. Unless otherwise stipulated herein, the SmashPay Crypto Credit,
                in case of a Futures Contract, is governed by Exhibit II. Regardless of the interest-free
                nature of the SmashPay Crypto Credit granted, SmashPay may impose Funding Fees.
              </li>
              <li>
                You may, at any time while having an open Futures Contract(s), change the Leverage, within the
                limits indicated on the SmashPay Platform, while each time the amount of the Collateral will
                be adjusted accordingly and/or a SmashPay Crypto Credit may be granted in accordance with Art.
                II.5. and II.6. hereinabove. Changes under the preceding sentences will affect both Long and
                Short Orders for the same Perpetual Futures.
              </li>
              <li>
                The Collateral will be included in the Locked Balance. The Margin Risk of your SmashPay Crypto
                Credit for a Futures Contract shall be monitored by SmashPay in accordance with Exhibit II,
                and the liquidation procedure therein will apply accordingly.
              </li>
              <li>
                In case you instruct SmashPay to close any open Futures Contract, or in the event of
                liquidation, the proceeds of the relevant Futures Contract will be used for the repayment of
                the SmashPay Crypto Credit and will be allocated first to the Fees, if any, and then to the
                principal of the SmashPay Crypto Credit. The same applies in the case of partial closure of a
                Futures Contract.
              </li>
              <li>
                Your Future Orders may be rejected: (i) due to network shortages and/or technical reasons,
                (ii) in case there are not enough Digital Assets on the Exchanges, (iii) if the amount of
                Digital Assets in your Futures Wallet is insufficient to execute Futures Orders, in case of
                pending Stop Loss Orders or Take Profit Orders, or (iv) for the purpose of liquidating the
                necessary amount of Digital Assets to rebalance your SmashPay Crypto Credit in accordance with
                Exhibit II, if applicable.
              </li>
              <li>
                We may, at our sole and absolute discretion, reverse or adjust any executed Futures Order in
                case of an error in the Entry Price or Exit Price, which deviates from the prevailing market
                price and which has occurred as a result of a system or technical error detected by SmashPay,
                regardless of the reason for such, or significant change of the estimated price during the
                processing of the Futures Order. In case of reversal, the Futures Order will be reversed,
                respectively the proceeds thereof will be withdrawn from your SmashPay Account, and the
                Collateral will be released and no longer be treated as such for the purpose of the relevant
                SmashPay Crypto Credit, as the case may be and to the extent applicable. In case of
                adjustment, the Futures Order, respectively the proceeds thereof, will be adjusted accordingly
                in your SmashPay Account, or if such proceeds are not available, other available Digital
                Assets in your SmashPay Account will be debited accordingly therefrom. In case of reversals or
                adjustments of Futures Orders under this article, the SmashPay Crypto Credit granted in
                accordance with Art. II.5. and II.6. hereinabove for the purpose thereof will be reversed,
                respectively adjusted, accordingly.
              </li>
              <li>
                If a SmashPay Crypto Credit is granted for opening a Futures Contract, Exhibit VII shall apply
                accordingly, while in case of any discrepancy between Exhibit II and Exhibit VII, the latter
                shall prevail.
              </li>
            </ol>
          </li>
        </ol>
      </div>
      {/* Section Exhibit VIII - SmashPay Dual Investment Product */}
      <div className='cu-items'>
        <h2 className='cu-subtitle'>Exhibit VIII - SmashPay Dual Investment Product</h2>
        <ol>
          {/* item */}
          <li className='cu-text'>
            {' '}
            INTRODUCTION
            <ol>
              <li>
                This Exhibit incorporates by reference and supplements the SmashPay Terms of Service (“Terms”)
                as if the entirety of the Terms were set forth in this Exhibit. Capitalised terms used but not
                defined in this Exhibit have the meanings given to them in the Terms. In the event of a
                conflict between the Terms and this Exhibit, the terms of this Exhibit shall prevail.
              </li>
              <li>
                The Terms and this Exhibit (both “Agreement”) govern your use of the SmashPay Dual Investment
                Product. SmashPay shall reserve its right to amend or supplement the Exhibit from time to time
                and without notice. Any such amendments or supplements shall become valid and in full force as
                of the date of their publishing on the SmashPay Platform unless otherwise indicated. You shall
                regularly check the SmashPay Platform to inform yourself about any such amendments or
                supplements. We may also, at any time, change, add, or remove any feature or functionality of
                the SmashPay Dual Investment Product without notice. By continuing to use the SmashPay Dual
                Investment Product after any such amendments or supplements, respectively changes, have taken
                effect, you thereby indicate your acceptance of the amended or supplemented Exhibit and the
                changes to the SmashPay Dual Investment Product. If you do not wish to be bound by any
                amendments or supplements to this Exhibit, you shall discontinue your use of the SmashPay Dual
                Investment Product immediately.
              </li>
              <li>
                SmashPay may use one or more service provider(s) to facilitate the SmashPay Dual Investment
                Product, in which case you acknowledge and agree that your authorisation and instruction
                extend to such service provider(s).
              </li>
            </ol>
          </li>
          {/* item */}
          <li className='cu-text'>
            {' '}
            SPECIFIC FEATURES OF THE SmashPay DUAL INVESTMENT PRODUCT
            <ol>
              <li>
                The SmashPay Dual Investment Product combines the features of the SmashPay Earn Interest
                Product and the SmashPay Exchange Service, where the execution of the Exchange Transaction is
                postponed until the chosen by the Client Settlement Date and subject to the Settlement Price
                correlation to the Target Price being met, as indicated hereinbelow and within the limitations
                on the SmashPay Platform. The Client continues to earn Interest, for the duration of the
                Subscription Period, in accordance with Exhibit III. Earn in SmashPay Tokens functionality
                will not apply to the SmashPay Dual Investment Product.
              </li>
              <li>
                You may, upon your instruction to SmashPay, execute a Dual Investment Subscription by
                selecting the Subscription Currency you wish to sell or buy, the Target Price and the
                Settlement Date before you place a Dual Investment Subscription with SmashPay, choosing among
                the following options:
                <ol>
                  <li>
                    Sell High Strategy - Dual Investment Subscription whereby you instruct SmashPay to sell
                    the Subscription Currency on the Settlement Date if the Settlement Price is higher than or
                    equal to the Target Price;
                  </li>
                  <li>
                    Buy Low Strategy - Dual Investment Subscription whereby you instruct SmashPay to buy the
                    Settlement Currency on the Settlement Date if the Settlement Price is lower than or equal
                    to the Target Price.
                  </li>
                </ol>
              </li>
              <li>
                In case the Settlement Price reaches the Target Price chosen by you on the Settlement Date,
                SmashPay will proceed to execute an Exchange Transaction at the Target Price, using the
                Subscription Currency as a Base Asset, and the proceeds thereof, namely the Settlement
                Currency, together with the accrued Interest, will be topped up into your Savings Wallet. In
                case the Settlement Price does not reach the Target Price chosen by you on the Settlement
                Date, an Exchange Transaction shall not be executed, and the Subscription Currency, together
                with the accrued in-kind Interest, will be topped up into your Savings Wallet.
              </li>
              <li>
                You may have more than one pending Dual Investment Subscriptions, either for selling or
                buying, for the same Subscription Currency. Once SmashPay confirms your Dual Investment
                Subscription, the Subscription Currency will be deducted from your SmashPay Account, and you
                will not be able to withdraw or dispose of it in any manner until the Settlement Date.
              </li>
              <li>
                You may only use the SmashPay Dual Investment Product within the limits, for the Digital
                Assets, and under the conditions, as indicated in this Exhibit, on the SmashPay Platform and
                in the SmashPay Account, which are subject to revision from time to time at our sole and
                absolute discretion.
              </li>
              <li>
                You cannot reverse any Dual Investment Subscription once you have provided the relevant
                instructions to SmashPay, as indicated in Art. V.7. of the Terms.
              </li>
              <li>
                Exhibit I and Exhibit III shall apply accordingly for any matter concerning the SmashPay Earn
                Interest Product and execution of an Exchange Transaction, while in case of any discrepancy
                between this Exhibit VII and Exhibit I and/or Exhibit III, this Exhibit VII shall prevail.
              </li>
            </ol>
          </li>
        </ol>
      </div>
      {/* Section Exhibit IX - SmashPay Loyalty Program */}
      <div className='cu-items'>
        <h2 className='cu-subtitle'>Exhibit IX - SmashPay Loyalty Program</h2>
        <ol>
          {/* item */}
          <li className='cu-text'>
            {' '}
            INTRODUCTION
            <ol>
              <li>
                This Exhibit incorporates by reference and supplements the SmashPay Terms of Service (“Terms”)
                as if the entirety of the Terms were set forth in this Exhibit. Capitalised terms used but not
                defined in this Exhibit have the meanings given to them in the Terms. In the event of a
                conflict between the Terms and this Exhibit, the terms of this Exhibit shall prevail.
              </li>
              <li>
                The Terms and this Exhibit (both “Agreement”) govern your use of the SmashPay Loyalty Program.
                SmashPay shall reserve its right to amend or supplement the Exhibit from time to time and
                without notice. Any such amendments or supplements shall become valid and in full force as of
                the date of their publishing on the SmashPay Platform unless otherwise indicated. You shall
                regularly check the SmashPay Platform to inform yourself about any such amendments or
                supplements. We may also, at any time, change, add, or remove any feature or functionality of
                the SmashPay Loyalty Program, without notice. By continuing to use the SmashPay Loyalty
                Program after any such amendments or supplements, respectively changes, have taken effect, you
                thereby indicate your acceptance of the amended or supplemented Exhibit and the changes to the
                SmashPay Loyalty Program. If you do not wish to be bound by any amendments or supplements to
                this Exhibit, you shall discontinue your use of the SmashPay Loyalty Program immediately.
              </li>
            </ol>
          </li>
          {/* item */}
          <li className='cu-text'>
            {' '}
            SPECIFIC FEATURES OF THE SmashPay LOYALTY PROGRAM
            <ol>
              <li>
                The SmashPay Loyalty Program is applicable to all SmashPay Services or part of them, as
                indicated on the SmashPay Platform.
              </li>
              <li>
                The loyalty levels and any preferential terms based thereon, including but not limited to
                Interest, cashback, bonuses, and other types of rewards, applicable from time to time, depend
                on the ratio of SmashPay Tokens to all other Digital Assets in the Portfolio Balance, a
                minimum Portfolio Balance, and the type of SmashPay Service used by the Client, respectively
                Digital Asset, as the case may be, and may be subject to other conditions SmashPay finds
                appropriate, at its sole and absolute discretion, as indicated on the SmashPay Platform.
              </li>
              <li>
                The loyalty level of the relevant Client, respectively the applicable Interest, are
                dynamically determined throughout each calendar day, while their final determination occurs up
                to the time of calculation of the Interest for each SmashPay Service.
              </li>
              <li>
                Participation in the SmashPay Loyalty Program is non-transferable and cannot be sold, gifted,
                or awarded to any person other than you.
              </li>
              <li>
                SmashPay reserves its right to allow the use of additional features of the SmashPay Services
                and/or grant preferential Interest or other terms, apart from the SmashPay Loyalty Program, at
                any time, as part of marketing campaigns or otherwise, at its sole and absolute discretion,
                regardless of whether they are related to the availability of SmashPay Tokens in the Clients’
                SmashPay Accounts. Such can be applicable together with the SmashPay Loyalty Program or on a
                separate basis.
              </li>
              <li>
                Certain loyalty levels may grant Clients access to additional metrics, market insight, and
                analytics tools (e.g. a real-time analytics tool), delivered partially or entirely by a
                third-party service provider and integrated into the SmashPay Platform. Such tools are
                provided “as is'' and are subject to the risks under Art. IX.3.1.4. and IX.6. of the Terms.
              </li>
            </ol>
          </li>
        </ol>
      </div>
      {/* Section Exhibit X - SmashPay Referral Program */}
      <div className='cu-items'>
        <h2 className='cu-subtitle'>Exhibit X - SmashPay Referral Program</h2>
        <ol>
          {/* item */}
          <li className='cu-text'>
            {' '}
            INTRODUCTION
            <ol>
              <li>
                This Exhibit incorporates by reference and supplements the SmashPay Terms of Service (“Terms”)
                as if the entirety of the Terms were set forth in this Exhibit. Capitalised terms used but not
                defined in this Exhibit have the meanings given to them in the Terms. In the event of a
                conflict between the Terms and this Exhibit, the terms of this Exhibit shall prevail.
              </li>
              <li>
                The Terms and this Exhibit (both “Agreement”) govern your use of the SmashPay Referral
                Program. SmashPay shall reserve its right to amend or supplement the Exhibit from time to time
                and without notice. Any such amendments or supplements shall become valid and in full force as
                of the date of their publishing on the SmashPay Platform unless otherwise indicated. You shall
                regularly check the SmashPay Platform to inform yourself about any such amendments or
                supplements. We may also, at any time, change, add, or remove any feature or functionality of
                the SmashPay Referral Program, including but not limited to change the eligibility criteria
                for participation, the benefits and their granting, etc., without notice. By continuing to use
                the SmashPay Referral Program after any such amendments or supplements, respectively changes,
                have taken effect, you thereby indicate your acceptance of the amended or supplemented Exhibit
                and the changes to the SmashPay Referral Program. If you do not wish to be bound by any
                amendments or supplements to this Exhibit, you shall discontinue your use of the SmashPay
                Referral Program immediately.
              </li>
            </ol>
          </li>
          {/* item */}
          <li className='cu-text'>
            {' '}
            SPECIFIC FEATURES OF THE SmashPay REFERRAL PROGRAM
            <ol>
              <li>
                The SmashPay Referral Program is applicable to all Clients referring new Clients to SmashPay,
                who have not previously opened SmashPay Accounts (“Referred Clients”), subject to the terms
                and conditions stipulated herein, governing the relevant SmashPay Service (if and to the
                extent applicable), as well as on the SmashPay Platform.
              </li>
              <li>
                The eligibility for participation in the SmashPay Referral Program, the type, amount, and
                manner of granting of benefits, the type of Digital Assets and/or the SmashPay Service used or
                to be used by the relevant Client or Referred Client, the limits regarding the number of
                Referred Clients or the amount of benefits a Client may refer, respectively receive, if any,
                are indicated on the SmashPay Platform.
              </li>
              <li>
                Participation in the SmashPay Referral Program is non-transferable and cannot be sold, gifted,
                or awarded to any person other than you.
              </li>
              <li>
                By participating in the SmashPay Referral Program, you expressly acknowledge that this
                participation is entirely voluntary and unsolicited, and any actions undertaken in this regard
                are solely at your discretion and responsibility.
              </li>
            </ol>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default TermsAndPoliciesModule;
