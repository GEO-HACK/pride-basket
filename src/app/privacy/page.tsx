import React from "react"
import Link from "next/link"
import { PHONE_NUMBER, SITE_TITLE } from "@/lib/constants"

export const metadata = {
  title: `${SITE_TITLE} | Privacy Policy`,
}

const PrivacyPage = () => {
  return (
    <main className="min-h-screen pt-28 pb-16 px-6 bg-white text-gray-900">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-600 mb-8">Last updated: November 5, 2025</p>

        <div className="space-y-8 leading-relaxed">
          <section>
            <p>
              {SITE_TITLE} Basketball Academy (&quot;{SITE_TITLE}&quot;, &quot;we&quot;, &quot;us&quot;)
              respects your privacy. This Policy explains what personal data we
              collect about players and their parents/guardians, how we use it,
              who we share it with, and your rights. It applies to our
              programmes, events, communications, and website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-2">1) Who we are and how to contact us</h2>
            <p>
              Data Controller: {SITE_TITLE} Basketball Academy, Nairobi, Kenya.
              Contact: <a href="mailto:daggopride254@gmail.com" className="text-blue-600 hover:underline">daggopride254@gmail.com</a> · {PHONE_NUMBER}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-2">2) The data we collect</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Identity and contact: player and guardian names, addresses,
                phone numbers, email, date of birth, and emergency contacts.
              </li>
              <li>
                Registration details: age group, school/class (if provided),
                preferred programme, attendance records.
              </li>
              <li>
                Health information: relevant medical conditions, allergies,
                injury information, and fitness declarations provided to keep
                players safe. This may be considered sensitive data.
              </li>
              <li>
                Payment references: payment confirmations and references (we do
                not store full card or mobile wallet credentials on our
                servers).
              </li>
              <li>
                Media: photographs and videos taken during training, matches,
                and events, where consent is provided or legitimate interest
                applies.
              </li>
              <li>
                Website usage: basic analytics, device/browser information, and
                cookies where applicable. See the Cookies section below.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-2">3) How we use your data</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Process registrations and manage membership records.</li>
              <li>Plan training sessions, matches, and communications.</li>
              <li>Safeguard players, including medical and emergency purposes.</li>
              <li>Handle payments, billing, and accounting.</li>
              <li>Operate our website and improve our services.</li>
              <li>
                Share match or event information and logistics with players and
                guardians.
              </li>
              <li>
                With consent, use photos/videos for Academy promotion (see our
                Terms for opting out of media).
              </li>
              <li>Comply with legal and regulatory obligations.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-2">4) Our legal bases</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Contract: to provide training and related services to
                registered players.
              </li>
              <li>
                Consent: for certain uses like medical details, photographs,
                videos, and optional marketing; you may withdraw consent at any
                time.
              </li>
              <li>
                Legitimate interests: to run and grow the Academy, keep
                activities safe and effective, and communicate important updates.
              </li>
              <li>Legal obligation: to meet regulatory or safeguarding duties.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-2">5) Sharing your data</h2>
            <p className="mb-2">
              We do not sell personal data. We may share limited information with:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Service providers acting on our instructions, such as cloud
                hosting, email/SMS providers, analytics, and payment processors.
              </li>
              <li>
                League organizers, competition bodies, and insurance providers
                when necessary for participation and coverage.
              </li>
              <li>
                Regulators, law enforcement, or authorities when required by law.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-2">6) International transfers</h2>
            <p>
              Our service providers may process data in other countries. Where
              required, we take steps to ensure appropriate safeguards are in
              place to protect your information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-2">7) Data retention</h2>
            <p>
              We retain membership records for as long as you are active with
              the Academy and for a reasonable period afterwards (for example,
              up to 6 years) to comply with accounting, safeguarding, and legal
              obligations. Media content may be retained until you withdraw
              consent or request deletion where applicable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-2">8) Security</h2>
            <p>
              We use reasonable technical and organizational measures to protect
              personal data. However, no method of transmission or storage is
              completely secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-2">9) Your rights</h2>
            <p className="mb-2">
              Depending on your local laws, you may have the right to access,
              correct, delete, or restrict your personal data; object to certain
              processing; and request a copy of your data. You may also withdraw
              consent at any time where processing is based on consent.
            </p>
            <p>
              To exercise these rights for yourself or your child, contact us at
              <a href="mailto:daggopride254@gmail.com" className="text-blue-600 hover:underline ml-1">daggopride254@gmail.com</a>.
              We may need to verify your identity before responding.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-2">10) Children’s privacy</h2>
            <p>
              We collect and process children’s data with the knowledge and
              consent of their parents/guardians for participation in Academy
              activities. We do not knowingly engage in direct marketing to
              children. Parents/guardians may update or request deletion of
              their child’s information, subject to legal and safeguarding
              requirements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-2">11) Cookies</h2>
            <p>
              Our website may use cookies and similar technologies to improve
              functionality and analyze usage. You can manage cookies through
              your browser settings. Disabling cookies may affect site features.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-2">12) Changes to this Policy</h2>
            <p>
              We may update this Policy from time to time. We will post the
              updated version on this page with a new “Last updated” date. Where
              appropriate, we will notify you through our usual communication
              channels.
            </p>
          </section>

          <section className="border-t pt-6">
            <h2 className="text-2xl font-bold mb-2">Contact</h2>
            <p>
              Questions about this Policy or your data? Email
              {" "}
              <a href="mailto:daggopride254@gmail.com" className="text-blue-600 hover:underline">daggopride254@gmail.com</a>
              {" "}or call {PHONE_NUMBER}. You can also review our {" "}
              <Link href="/terms" className="text-blue-600 hover:underline">Terms and Conditions</Link>.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}

export default PrivacyPage