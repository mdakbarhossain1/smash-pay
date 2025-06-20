import './amlCompliance.css';
const AmlCompliance = () => {
  return (
    <div className='cu-container'>
      <h1 className='cu-title'>
        Compliance AML{' '}
        <p style={{ fontSize: '18px', marginTop: '5px' }}>Compliance AML/CTF and Due Diligence policies</p>
      </h1>
      <div className='cu-items'>
        <p className='cu-text'>
          To ensure that the <b>SmashPay</b> is compliant with legal regulations, we need to establish
          policies that address <b>Anti-Money Laundering (AML), CounterTerrorism Financing (CTF)</b>, and{' '}
          <b>Due Diligence</b>. These policies are essential for maintaining regulatory compliance and
          ensuring that the platform operates in a secure and lawful manner.
        </p>
      </div>
      {/* item starts */}
      <div className='cu-items'>
        <h2 className='cu-subtitle'>1. AML/CTF Compliance Policy</h2>
        <p className='cu-text'>
          The <b>Anti-Money Laundering (AML)</b> and <b>Counter-Terrorism Financing (CTF)</b> policies aim to
          prevent illegal activities like money laundering and terrorist financing by monitoring and reporting
          suspicious financial activities. The platform must ensure robust checks and ongoing monitoring of
          users and transactions.
        </p>
        <h2 className='cu-subtitle'>Core Components of the AML/CTF Policy:</h2>
        <ol className='cu-list'>
          <li>
            <strong className='list-title'>KYC (Know Your Customer):</strong>
            <ul>
              <li>
                SmashPay will implement a <b> KYC process</b> via Fireblocks to verify user identity and
                prevent fraudulent accounts.
              </li>
              <li>
                User information (ID, proof of address, etc.) will be collected and verified during the
                onboarding process.
              </li>
              <li>Ongoing KYC checks for suspicious behavior or high-value transactions.</li>
            </ul>
          </li>
          <li>
            <strong className='list-title'>Transaction Monitoring:</strong>
            <ul>
              <li>
                All crypto transactions, fiat-to-crypto ramps, and crypto-to-crypto trades will be monitored
                for unusual patterns, using both manual and automated methods.
              </li>
              <li>
                Thresholds will be set to flag transactions over a specific amount (e.g., $10,000) for further
                investigation.
              </li>
              <li>
                Patterns such as multiple transactions just below threshold limits, or rapid movement of funds
                between accounts, will trigger alerts.
              </li>
            </ul>
          </li>
          <li>
            <strong className='list-title'>Risk-Based Approach:</strong>
            <ul>
              <li>
                Users will be categorized by risk level (low, medium, high) based on factors like geographic
                location, type of transactions, and volume of trades.
              </li>
              <li>
                High-risk users or high-value transactions will be subjected to enhanced due diligence (EDD)
              </li>
            </ul>
          </li>
          <li>
            <strong className='list-title'>Suspicious Activity Reporting (SAR):</strong>
            <ul>
              <li>
                If suspicious activities are detected, a <b>Suspicious Activity Report (SAR)</b> will be
                generated and reported to the relevant regulatory authority (e.g., FinCEN in the US, FCA in
                the UK).
              </li>
              <li>SmashPay will keep records of all SARs for a set period (typically 5 years).</li>
            </ul>
          </li>
          <li>
            <strong className='list-title'>AML Training:</strong>
            <ul>
              <li>
                Staff responsible for compliance and transaction monitoring will receive ongoing AML/CTF
                training.
              </li>
              <li>
                This includes recognizing suspicious behavior, knowing how to respond, and understanding
                global AML/CTF regulations.
              </li>
            </ul>
          </li>
          <li>
            <strong className='list-title'>Record Keeping:</strong>
            <ul>
              <li>
                Transaction records and KYC documentation will be stored securely for a minimum of 5 years, as
                required by regulatory standards.
              </li>
              <li>Digital records will be encrypted and access controlled to ensure data privacy.</li>
            </ul>
          </li>
          <li>
            <strong className='list-title'>Regular Audits:</strong>
            <ul>
              <li>
                Regular internal and external audits will be conducted to ensure that AML/ CTF policies are
                being followed, and the systems are compliant with global regulations.
              </li>
            </ul>
          </li>
        </ol>
      </div>
      {/* item ends */}
      {/* item starts */}
      <div className='cu-items'>
        <h2 className='cu-subtitle'>
          2. Customer Due Diligence (CDD) and Enhanced Due Diligence (EDD) Policy
        </h2>
        <p className='cu-text'>
          <b>Customer Due Diligence (CDD)</b> involves verifying customer identity and assessing the risks
          associated with each customer.
          <b>Enhanced Due Diligence (EDD)</b> applies additional checks to high-risk customers or
          transactions.
        </p>
        <h2 className='cu-subtitle'>Core Components of the CDD/EDD Policy:</h2>
        <ol className='cu-list'>
          <li>
            <strong className='list-title'>Basic Due Diligence (KYC) for All Users:</strong>
            <ul>
              <li>
                Verify the identity of users through Fireblocks’ KYC process, including documentation like
                government-issued ID, proof of address, and sometimes biometric checks (if required).
              </li>
              <li>Ensure all KYC information is up-to-date and securely stored.</li>
            </ul>
          </li>
          <li>
            <strong className='list-title'>Simplified Due Diligence (SDD):</strong>
            <ul>
              <li>
                For users deemed low-risk (e.g., low transaction volumes or users in low-risk countries), a
                simplified KYC process may be sufficient.
              </li>
              <li>
                However, these users are still subject to ongoing monitoring, and risk status can change if
                suspicious activity is detected.
              </li>
            </ul>
          </li>
          <li>
            <strong className='list-title'>Enhanced Due Diligence (EDD) for High-Risk Users:</strong>
            <ul>
              <li>
                High-risk users will undergo EDD procedures, including:
                <ul>
                  <li>Obtaining additional verification documents (e.g., secondary proof of identity).</li>
                  <li>Verifying the source of funds and wealth for large transactions</li>
                  <li>
                    Conducting background checks or using third-party services for politically exposed persons
                    (PEPs), sanctions, or high-risk individuals.
                  </li>
                  <li>
                    Continuous monitoring of these users’ activities to detect changes in behavior or
                    additional risks.
                  </li>
                </ul>
              </li>
              <li>
                EDD will be triggered by:
                <ul>
                  <li>Large or frequent transactions (above the set threshold).</li>
                  <li>Transactions involving high-risk countries or regions known for money laundering.</li>
                  <li>Users flagged during onboarding or during periodic reviews</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <strong className='list-title'>Ongoing Monitoring:</strong>
            <ul>
              <li>
                User accounts will be regularly reviewed to ensure that the risk classification remains
                accurate.
              </li>
              <li>
                Changes in user behavior (e.g., sudden increases in transaction size or frequency) may trigger
                reclassification and the need for enhanced due diligence.
              </li>
              <li>
                Real-time monitoring tools will flag unusual activity patterns, such as rapid transactions or
                large transfers between wallets.
              </li>
            </ul>
          </li>
          <li>
            <strong className='list-title'>
              PEP (Politically Exposed Persons) and Sanctions List Screening:
            </strong>
            <ul>
              <li>
                Users will be screened against global databases of politically exposed persons (PEPs), as well
                as sanctions lists.
              </li>
              <li>
                Any users identified as PEPs or associated with sanctioned entities will be subject to EDD and
                may be reported to relevant authorities.
              </li>
            </ul>
          </li>
          <li>
            <strong className='list-title'>Transaction Limits and Thresholds:</strong>
            <ul>
              <li>
                Set transaction thresholds (e.g., for fiat-to-crypto transactions) that trigger EDD
                procedures.
              </li>
              <li>
                For example, any transaction above $10,000 (or an equivalent in crypto) may require additional
                scrutiny, including source of funds verification.
              </li>
            </ul>
          </li>
          <li>
            <strong className='list-title'>Record Retention:</strong>
            <ul>
              <li>
                All CDD/EDD documentation, including identity verification records, transaction logs, and any
                additional information gathered during the due diligence process, will be retained for at
                least 5 years.
              </li>
              <li>
                Data will be stored securely and encrypted to ensure compliance with data protection
                regulations (GDPR, etc.).
              </li>
            </ul>
          </li>
        </ol>
      </div>
      {/* item ends */}
      {/* item starts */}
      <div className='cu-items'>
        <h2 className='cu-subtitle'>3. Ongoing Monitoring and Reporting Policy</h2>
        <p className='cu-text'>
          This policy outlines how the SmashPay platform will monitor user activity on an ongoing basis and
          report suspicious transactions.
        </p>
        <h2 className='cu-subtitle'>Core Components of the Monitoring and Reporting Policy:</h2>
        <ol className='cu-list'>
          <li>
            <strong className='list-title'>Automated Monitoring:</strong>
            <ul>
              <li>
                Implement real-time transaction monitoring using machine learning and rulesbased algorithms to
                flag suspicious activity
              </li>
              <li>
                {' '}
                Common triggers:
                <ul>
                  <li>Transactions just below reporting thresholds.</li>
                  <li>Unusual activity patterns (e.g., rapid transfers between multiple wallets).</li>
                  <li>High-frequency transactions with different counterparties.</li>
                  <li>Use of privacy coins or mixing services.</li>
                </ul>
              </li>
            </ul>
          </li>

          <li>
            <strong className='list-title'>Manual Review:</strong>
            <ul>
              <li>
                Compliance officers will review flagged transactions and patterns to determine whether they
                constitute suspicious activity
              </li>
              <li>Any transaction above $10,000 (or its equivalent) will automatically trigger a review.</li>
            </ul>
          </li>
          <li>
            <strong className='list-title'>Reporting to Authorities:</strong>
            <ul>
              <li>
                Suspicious Activity Reports (SARs) will be filed with the relevant financial authorities
                within 30 days of detecting the suspicious activity.
              </li>
              <li>
                Reports will include detailed transaction histories, user information, and the nature of the
                suspicious activity.
              </li>
            </ul>
          </li>
          <li>
            <strong className='list-title'>High-Risk Country and Asset Monitoring:</strong>
            <ul>
              <li>
                Users from high-risk countries (e.g., countries with weak AML/CTF regulations) or users
                dealing with high-risk assets (e.g., privacy coins) will be subject to heightened monitoring.
                <div>
                  <h2 className='cu-subtitle'>Prohibited Due to International Sanctions:</h2>
                  <ol className='cu-list'>
                    <li>
                      <strong>Russia -</strong> Heightened scrutiny due to sanctions and AML concerns,
                      especially following international actions related to Ukraine
                    </li>
                    <li>
                      <strong>Belarus -</strong> Subject to international sanctions and high-risk for
                      financial crime.
                    </li>
                    <li>
                      <strong>Ukraine (Non-Crimea) -</strong> Enhanced monitoring due to the ongoing conflict,
                      excluding Crimea (which is prohibited).
                    </li>
                    <li>
                      <strong>Pakistan - </strong> Listed as a “grey list” country by the FATF for
                      insufficient AML/ CTF compliance.
                    </li>
                    <li>
                      <strong>Lebanon - </strong> High AML/CTF risks due to political instability and
                      financial crime concerns.
                    </li>
                    <li>
                      <strong>Zimbabwe -</strong> Targeted for potential sanctions violations and financial
                      crime risks.
                    </li>
                    <li>
                      <strong>Nigeria -</strong> High AML/CTF risks due to corruption and financial crime, but
                      not fully prohibited.
                    </li>
                    <li>
                      <strong>Libya -</strong> Political instability and sanctions-related concerns around
                      government entities
                    </li>
                    <li>
                      <strong>Iraq -</strong> Subject to heightened AML/CTF scrutiny due to instability and
                      corruption risks.
                    </li>

                    <li>
                      <strong>North Korea (DPRK) -</strong> Fully sanctioned by the U.N., U.S., and EU due to
                      terrorism and WMD proliferation concerns.
                    </li>
                    <li>
                      <strong>Iran - </strong> U.S. and international sanctions prohibit most financial
                      transactions.
                    </li>
                    <li>
                      <strong>Syria -</strong> Subject to international sanctions related to terrorism and
                      human rights violations.
                    </li>
                    <li>
                      <strong>Cuba -</strong> U.S. sanctions restrict most financial transactions with Cuba.
                    </li>
                    <li>
                      <strong>Venezuela -</strong> Sanctions primarily target the government and related
                      entities due to corruption and human rights violations.
                    </li>
                    <li>
                      <strong>Crimea Region (Ukraine) -</strong> Sanctions due to Russia’s annexation of
                      Crimea, restricting all financial activities
                    </li>
                  </ol>
                </div>
                <div>
                  <h2 className='cu-subtitle'>Prohibited Due to High-Risk AML/CTF Concerns:</h2>
                  <ol className='cu-list'>
                    <li>
                      <strong>Yemen -</strong> High risk of terrorism financing and money laundering, along
                      with active conflict.
                    </li>
                    <li>
                      <strong>Somalia -</strong>Ongoing conflicts and limited AML/CTF regulations.
                    </li>
                    <li>
                      <strong>South Sudan - </strong> Ongoing conflict and high risk of financial crime
                    </li>
                    <li>
                      <strong>Afghanistan -</strong> Recent changes in government have increased sanctions and
                      AML/CTF concerns.
                    </li>
                    <li>
                      <strong>Myanmar (Burma) -</strong> Subject to international sanctions and money
                      laundering risks.
                    </li>
                    <li>
                      <strong>Sudan -</strong> International sanctions and significant AML/CTF concerns.
                    </li>
                  </ol>
                </div>
                <div>
                  <h2 className='cu-subtitle'>
                    Targeted Jurisdictions (Restricted or Enhanced Due Diligence Required)
                  </h2>
                  <p className='cu-text'>
                    Users from these jurisdictions may still be allowed to use the SmashPay Wallet, but they
                    will be subject to enhanced due diligence (EDD) and close monitoring due to heightened
                    AML/CTF risks, sanctions, or regulatory uncertainty.
                  </p>
                  <h2 className='cu-subtitle'>Targeted Due to AML/CTF Risk:</h2>
                  <ol className='cu-list'>
                    <li>
                      <strong>Ukraine (Non-Crimea) - </strong> Enhanced monitoring due to the ongoing
                      conflict, excluding Crimea (which is prohibited).
                    </li>
                    <li>
                      <strong>Pakistan -</strong> Listed as a “grey list” country by the FATF for insufficient
                      AML/ CTF compliance.
                    </li>

                    <li>
                      <strong>Zimbabwe -</strong> Targeted for potential sanctions violations and financial
                      crime risks.
                    </li>
                    <li>
                      <strong>Nigeria -</strong> High AML/CTF risks due to corruption and financial crime, but
                      not fully prohibited.
                    </li>
                  </ol>
                </div>
              </li>
            </ul>
          </li>
          <li>
            <strong className='list-title'>Regular Audits and Updates:</strong>
            <ul>
              <li>
                SmashPay will conduct regular internal audits of its AML/CTF compliance program to ensure it
                remains effective and up to date
              </li>
              <li>
                The compliance team will keep up with changes in regulations and update policies as needed to
                meet new legal requirements.
              </li>
            </ul>
          </li>
        </ol>
      </div>
      {/* item ends */}
      {/* item starts */}
      <div className='cu-items'>
        <h2 className='cu-subtitle'>4. Sanctions Compliance Policy</h2>
        <p className='cu-text'>
          The sanctions compliance policy ensures that SmashPay adheres to international sanctions regimes,
          preventing transactions or activities with prohibited entities or individuals.
        </p>
        <h2 className='cu-subtitle'>Core Components of the Sanctions Compliance Policy:</h2>
        <ol className='cu-list'>
          <li>
            <strong className='list-title'>Screening Against Sanctions Lists:</strong>
            <ul>
              <li>
                SmashPay will screen all users against global sanctions lists (e.g., OFAC, EU, UN) before
                allowing them to register or engage in transactions.
              </li>
              <li>
                Regular screening for existing users, particularly during high-value or suspicious
                transactions
              </li>
            </ul>
          </li>

          <li>
            <strong className='list-title'>Blocking Sanctioned Entities:</strong>
            <ul>
              <li>
                Accounts belonging to individuals or entities on sanctions lists will be frozen, and
                transactions will be blocked.
              </li>
              <li>
                Any attempt to bypass sanctions will result in account termination and the filing of a report
                with regulatory authorities.
              </li>
            </ul>
          </li>
          <li>
            <strong className='list-title'>Geofencing:</strong>
            <ul>
              <li>
                SmashPay will use geofencing to block access from countries subject to comprehensive sanctions
                (e.g., North Korea, Iran).
              </li>
              <li>Users from these regions will not be able to register or transact on the platform</li>
            </ul>
          </li>
        </ol>
      </div>
      {/* item ends */}
      {/* item starts */}
      <div className='cu-items'>
        <h2 className='cu-subtitle'>5. Regular Compliance Audits and Reporting</h2>
        <p className='cu-text'>
          To ensure ongoing compliance with these policies, SmashPay will conduct regular audits and generate
          reports for internal use and regulatory bodies.
        </p>
        <h2 className='cu-subtitle'>Core Components of the Audit and Reporting Policy:</h2>
        <ol className='cu-list'>
          <li>
            <strong className='list-title'>Annual External Audits:</strong>
            <ul>
              <li>
                SmashPay will engage third-party auditors to review its compliance programs, focusing on
                AML/CTF, KYC, CDD, and sanction screening.
              </li>
            </ul>
          </li>

          <li>
            <strong className='list-title'>Internal Reviews:</strong>
            <ul>
              <li>
                The compliance team will perform quarterly internal reviews to ensure that all processes are
                being followed and that staff are trained and up to date on the latest regulations
              </li>
            </ul>
          </li>
          <li>
            <strong className='list-title'>Reporting to Regulators:</strong>
            <ul>
              <li>
                Periodic reports will be filed with regulatory bodies to demonstrate compliance, and detailed
                reports will be generated for any suspicious activity or AML breaches.
              </li>
            </ul>
          </li>
        </ol>
      </div>
      {/* item ends */}
      <h2 className='cu-subtitle'>Conclusion</h2>
      <p className='cu-text'>
        By implementing these <b>AML/CTF</b> and <b>Due Diligence</b> policies,
        <b>SmashPay</b> will ensure it is compliant with global financial regulations and protected from
        illegal activities. These measures will safeguard the platform and its users from risks such as fraud,
        money laundering, and terrorism financing, providing a secure and compliant environment for
        cryptocurrency and NFT transactions.
      </p>
    </div>
  );
};

export default AmlCompliance;
