import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#E87331] mb-4">
              Privacy Policy
            </h1>
            <p className="text-gray-600">Last updated: January 1, 2025</p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none bg-white rounded-lg shadow-md p-6 md:p-10">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#563D2F] mb-4">1. Introduction</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                News Bullet Kerala ("we", "us", or "our") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your 
                information when you visit our website and use our services. Please read this 
                policy carefully to understand our practices regarding your personal data.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#563D2F] mb-4">2. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-[#563D2F] mb-3 mt-4">2.1 Personal Information</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may collect the following personal information:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Name and contact information (email address, phone number)</li>
                <li>Account credentials (username, password)</li>
                <li>Payment information (processed securely through Razorpay)</li>
                <li>Subscription and billing details</li>
                <li>Profile information you choose to provide</li>
              </ul>

              <h3 className="text-xl font-semibold text-[#563D2F] mb-3 mt-4">2.2 Automatically Collected Information</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                When you visit our website, we automatically collect:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>IP address and device information</li>
                <li>Browser type and version</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website addresses</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#563D2F] mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use the collected information for the following purposes:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>To provide, maintain, and improve our services</li>
                <li>To process your subscription and payment transactions</li>
                <li>To send you service-related notifications and updates</li>
                <li>To respond to your inquiries and provide customer support</li>
                <li>To personalize your experience and content recommendations</li>
                <li>To detect, prevent, and address technical issues and fraud</li>
                <li>To comply with legal obligations</li>
                <li>To send marketing communications (with your consent)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#563D2F] mb-4">4. Information Sharing and Disclosure</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We do not sell your personal information. We may share your information only in 
                the following circumstances:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>
                  <strong>Service Providers:</strong> We share information with trusted third-party 
                  service providers who assist us in operating our website, processing payments 
                  (Razorpay), and conducting business operations
                </li>
                <li>
                  <strong>Legal Requirements:</strong> We may disclose information if required by 
                  law or in response to valid legal requests
                </li>
                <li>
                  <strong>Business Transfers:</strong> In the event of a merger, acquisition, or 
                  sale of assets, your information may be transferred
                </li>
                <li>
                  <strong>With Your Consent:</strong> We may share information with your explicit 
                  consent for specific purposes
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#563D2F] mb-4">5. Payment Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                All payment transactions are processed securely through Razorpay, a PCI-DSS compliant 
                payment gateway. We do not store your complete credit card or debit card information 
                on our servers. Razorpay handles all payment data in accordance with their privacy 
                policy and security standards. By using our payment services, you also agree to Razorpay's{" "}
                <a 
                  href="https://merchant.razorpay.com/policy/Rw9b1isAdIz9Q0/terms" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#E87331] hover:underline"
                >
                  Terms and Conditions
                </a>
                .
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#563D2F] mb-4">6. Cookies and Tracking Technologies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use cookies and similar tracking technologies to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Remember your preferences and settings</li>
                <li>Analyze website traffic and user behavior</li>
                <li>Improve website functionality</li>
                <li>Provide personalized content and advertisements</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                You can control cookies through your browser settings. However, disabling cookies 
                may affect the functionality of our website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#563D2F] mb-4">7. Data Security</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We implement appropriate technical and organizational security measures to protect 
                your personal information against unauthorized access, alteration, disclosure, or 
                destruction. These measures include:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and authentication mechanisms</li>
                <li>Secure payment processing through Razorpay</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                However, no method of transmission over the internet or electronic storage is 100% 
                secure. While we strive to protect your data, we cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#563D2F] mb-4">8. Data Retention</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We retain your personal information for as long as necessary to fulfill the purposes 
                outlined in this Privacy Policy, unless a longer retention period is required or 
                permitted by law. When you cancel your account, we will delete or anonymize your 
                personal information, except where we are required to retain it for legal or 
                regulatory purposes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#563D2F] mb-4">9. Your Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Under applicable data protection laws, including the Information Technology Act, 
                2000 and related rules in India, you have the right to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Access and receive a copy of your personal information</li>
                <li>Correct inaccurate or incomplete information</li>
                <li>Request deletion of your personal information</li>
                <li>Object to processing of your personal information</li>
                <li>Withdraw consent for data processing (where applicable)</li>
                <li>Request data portability</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                To exercise these rights, please contact us using the information provided in 
                the Contact section below.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#563D2F] mb-4">10. Children's Privacy</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our services are not intended for children under the age of 18. We do not knowingly 
                collect personal information from children. If you believe we have collected 
                information from a child, please contact us immediately, and we will take steps 
                to delete such information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#563D2F] mb-4">11. Third-Party Links</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our website may contain links to third-party websites or services. We are not 
                responsible for the privacy practices of these external sites. We encourage you 
                to review the privacy policies of any third-party sites you visit.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#563D2F] mb-4">12. Changes to This Privacy Policy</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may update this Privacy Policy from time to time to reflect changes in our 
                practices or for legal, operational, or regulatory reasons. We will notify you 
                of any material changes by posting the new Privacy Policy on this page and 
                updating the "Last updated" date. Your continued use of our services after such 
                changes constitutes acceptance of the updated policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#563D2F] mb-4">13. Payment Gateway Policies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                All payments are processed through Razorpay. By using our payment services, you agree to Razorpay's policies:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                <p className="text-gray-700">
                  <a 
                    href="https://merchant.razorpay.com/policy/Rw9b1isAdIz9Q0/terms" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#E87331] hover:underline"
                  >
                    Razorpay Terms & Conditions
                  </a>
                </p>
                <p className="text-gray-700">
                  <a 
                    href="https://merchant.razorpay.com/policy/Rw9b1isAdIz9Q0/privacy" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#E87331] hover:underline"
                  >
                    Razorpay Privacy Policy
                  </a>
                </p>
                <p className="text-gray-700">
                  <a 
                    href="https://merchant.razorpay.com/policy/Rw9b1isAdIz9Q0/refund" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#E87331] hover:underline"
                  >
                    Razorpay Refund Policy
                  </a>
                </p>
                <p className="text-gray-700">
                  <a 
                    href="https://merchant.razorpay.com/policy/Rw9b1isAdIz9Q0/shipping" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#E87331] hover:underline"
                  >
                    Razorpay Shipping Policy
                  </a>
                </p>
                <p className="text-gray-700">
                  <a 
                    href="https://merchant.razorpay.com/policy/Rw9b1isAdIz9Q0/contact_us" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#E87331] hover:underline"
                  >
                    Razorpay Contact Us
                  </a>
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#563D2F] mb-4">14. Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions, concerns, or requests regarding this Privacy Policy 
                or our data practices, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 mb-2">
                  <strong>News Bullet Kerala</strong>
                </p>
                <p className="text-gray-700 mb-2">
                  Email: <a href="mailto:privacy@newsbulletkerala.com" className="text-[#E87331] hover:underline">privacy@newsbulletkerala.com</a>
                </p>
                <p className="text-gray-700 mb-2">
                  Website: <Link href="/" className="text-[#E87331] hover:underline">www.newsbulletkerala.com</Link>
                </p>
                <p className="text-gray-700">
                  For general inquiries, visit our{" "}
                  <Link href="/contact" className="text-[#E87331] hover:underline">
                    Contact Page
                  </Link>
                </p>
              </div>
            </section>
          </div>

          {/* Footer Links */}
          <div className="mt-12 text-center space-x-4 text-sm">
            <Link href="/terms" className="text-[#E87331] hover:underline">
              Terms & Conditions
            </Link>
            <span className="text-gray-400">|</span>
            <Link href="/refund" className="text-[#E87331] hover:underline">
              Refund Policy
            </Link>
            <span className="text-gray-400">|</span>
            <Link href="/contact" className="text-[#E87331] hover:underline">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
