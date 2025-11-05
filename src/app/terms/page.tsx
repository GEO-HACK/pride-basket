import React from "react"
import Link from "next/link"
import { PHONE_NUMBER, SITE_TITLE, TILL_NUMBER } from "@/lib/constants"

export const metadata = {
  title: `${SITE_TITLE} | Terms & Conditions`,
}

const TermsPage = () => {
  return (
    <main className="min-h-screen pt-28 pb-16 px-6 bg-white text-gray-900">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2">
          Terms and Conditions
        </h1>
        <p className="text-sm text-gray-600 mb-8">Last updated: November 5, 2025</p>

        <div className="space-y-8 leading-relaxed">
          <section>
            <p>
              Welcome to {SITE_TITLE} Basketball Academy (“{SITE_TITLE}”, “we”, “our”, or
              “the Academy”). These Terms and Conditions govern membership and
              participation in all Academy activities, programs, events, and use
              of our website and services. By registering a player, making any
              payment, or attending a training session, you (the player and/or
              parent/guardian) agree to these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-2">1. Eligibility and Membership</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                All players must be registered by a parent or legal guardian if
                under 18. Accurate, complete information must be provided during
                registration.
              </li>
              <li>
                Membership is subject to space availability, age-group capacity,
                and the Academy’s assessment for appropriate placement.
              </li>
              <li>
                The Academy reserves the right to refuse or revoke membership in
                cases of persistent misconduct, safety concerns, or non-payment.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-2">2. Fees and Payments</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Membership fees are communicated on the enrollment form and may
                be paid in full or in agreed instalments. League fees, player
                licences, and certain competition costs are not included unless
                stated otherwise.
              </li>
              <li>
                Payments may be made via M-Pesa Till Number <strong>{TILL_NUMBER}</strong>
                {" "}or other methods we communicate. Always use the player’s full
                name as the payment reference.
              </li>
              <li>
                Late or missed payments may result in temporary suspension from
                training and matches until balances are settled.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-2">3. Schedules, Cancellations, and Make‑ups</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Training schedules are subject to change based on venue
                availability, weather, public holidays, or unforeseen events.
              </li>
              <li>
                In the event of a cancellation, we will communicate via SMS,
                WhatsApp, email, or our website. Where possible, we will offer a
                reasonable make‑up session; however, this cannot be guaranteed.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-2">4. Health, Medical, and Safety</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Basketball and physical training carry inherent risks. By
                participating, players and guardians acknowledge these risks and
                confirm the player is medically fit to train and compete.
              </li>
              <li>
                You must disclose relevant medical conditions, allergies, or
                injuries during registration and promptly update us of any
                changes.
              </li>
              <li>
                In an emergency, you authorize the Academy staff to arrange
                medical assessment or treatment deemed necessary and agree to be
                responsible for any related costs.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-2">5. Code of Conduct</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Players, parents, and spectators must be respectful to coaches,
                officials, teammates, opponents, and venues. Bullying,
                harassment, discrimination, and abusive language are strictly
                prohibited.
              </li>
              <li>
                Players must arrive on time, in the correct kit, and follow all
                coaching instructions and safety rules.
              </li>
              <li>
                Alcohol, drugs, or performance‑enhancing substances are
                prohibited at all Academy activities.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-2">6. Uniform, Equipment, and Property</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Players are responsible for their personal property. The Academy
                is not liable for loss or damage to personal items brought to
                sessions or events.
              </li>
              <li>
                Academy‑issued equipment remains Academy property and must be
                returned on request or when membership ends.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-2">7. Matches, Events, and Travel</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Participation in matches and events may involve additional
                registration or travel costs. Details will be communicated in
                advance.
              </li>
              <li>
                Reasonable supervision will be provided by Academy staff.
                Parents/guardians are responsible for timely drop‑off and
                collection unless alternative arrangements are agreed.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-2">8. Media and Marketing Consent</h2>
            <p>
              We may capture photos and videos during sessions and events for
              training, promotion, and Academy social media. If you prefer not
              to have a player featured, please inform us in writing at
              <a className="text-blue-600 hover:underline ml-1" href="mailto:daggopride254@gmail.com">daggopride254@gmail.com</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-2">9. Refunds and Cancellations</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Fees are generally non‑refundable once a training block or
                season has started, except in exceptional circumstances at the
                Academy’s discretion.
              </li>
              <li>
                If sessions are cancelled due to events beyond our control
                (including severe weather, venue closure, or government
                restrictions), we will attempt to reschedule where practical,
                but refunds are not guaranteed.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-2">10. Liability</h2>
            <p>
              To the maximum extent permitted by law, the Academy, its coaches,
              volunteers, agents, and venue partners are not liable for any
              injury, loss, or damage arising from participation in Academy
              activities, except where caused by gross negligence or willful
              misconduct.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-2">11. Data Protection</h2>
            <p>
              We process personal data to manage registrations, safeguard
              players, and run the Academy. Please review our {" "}
              <Link href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>{" "}
              for details on what we collect, how we use it, and your rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-2">12. Termination</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                You may cancel membership by notifying us in writing. Fees
                already paid may not be refundable. Academy property must be
                returned on request.
              </li>
              <li>
                We may suspend or terminate membership for breach of these
                Terms, non‑payment, or conduct that puts others at risk.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-2">13. Governing Law and Dispute Resolution</h2>
            <p>
              These Terms are governed by the laws of Kenya. You agree to the
              exclusive jurisdiction of the courts of Nairobi, Kenya for any
              dispute arising out of or relating to these Terms or your
              participation in the Academy.
            </p>
          </section>

          <section className="border-t pt-6">
            <h2 className="text-2xl font-bold mb-2">Acceptance</h2>
            <p className="mb-2">
              By submitting the registration form and/or attending Academy
              sessions, you confirm that you have read, understood, and agree to
              be bound by these Terms and Conditions on behalf of the player.
            </p>
            <p className="text-sm text-gray-600">
              Questions? Contact us at <a className="text-blue-600 hover:underline" href="mailto:daggopride254@gmail.com">daggopride254@gmail.com</a>
              {" "}or call {PHONE_NUMBER}.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}

export default TermsPage