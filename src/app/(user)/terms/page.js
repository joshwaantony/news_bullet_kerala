import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#E87331] mb-4">
              Terms and Conditions
            </h1>
            <p className="text-gray-600">Last updated: January 1, 2025</p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none bg-white rounded-lg shadow-md p-6 md:p-10">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#563D2F] mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                By accessing and using News Bullet Kerala ("the Website", "we", "us", or "our"), 
                you accept and agree to be bound by the terms and provision of this agreement. 
                If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#563D2F] mb-4">2. Description of Service</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                News Bullet Kerala is a digital news platform providing news articles, videos, 
                and premium content related to Kerala, India, and global news. We offer both 
                free and premium subscription-based content.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#563D2F] mb-4">3. User Accounts</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                To access certain features of our service, you may be required to create an account. 
                You agree to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Provide accurate, current, and complete information during registration</li>
                <li>Maintain and update your account information to keep it accurate</li>
                <li>Maintain the security of your password and identification</li>
                <li>Accept all responsibility for activities that occur under your account</li>
                <li>Notify us immediately of any unauthorized use of your account</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#563D2F] mb-4">4. Subscription Plans and Payments</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We offer various subscription plans with different pricing and billing cycles. 
                By subscribing to our premium service:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>You agree to pay the subscription fees as displayed at the time of purchase</li>
                <li>Subscriptions will automatically renew unless cancelled before the renewal date</li>
                <li>All payments are processed securely through Razorpay</li>
                <li>Prices are subject to change with prior notice to existing subscribers</li>
                <li>Refunds are subject to our Refund Policy</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#563D2F] mb-4">5. Cancellation and Refunds</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You may cancel your subscription at any time through your account settings. 
                Cancellation will take effect at the end of your current billing period. 
                For detailed information about refunds, please refer to our{" "}
                <Link href="/refund" className="text-[#E87331] hover:underline">
                  Refund Policy
                </Link>
                .
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#563D2F] mb-4">6. Content Usage</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                All content on News Bullet Kerala, including articles, videos, images, and logos, 
                is protected by copyright and intellectual property laws. You agree not to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Reproduce, distribute, or republish any content without permission</li>
                <li>Use content for commercial purposes without authorization</li>
                <li>Remove copyright or proprietary notices from content</li>
                <li>Create derivative works based on our content</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#563D2F] mb-4">7. User Conduct</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You agree to use our service only for lawful purposes and in a way that does not 
                infringe the rights of others. Prohibited activities include:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Posting false, misleading, or defamatory content</li>
                <li>Harassing, threatening, or abusing other users</li>
                <li>Violating any applicable laws or regulations</li>
                <li>Attempting to gain unauthorized access to our systems</li>
                <li>Interfering with the proper functioning of the website</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#563D2F] mb-4">8. Disclaimer of Warranties</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                News Bullet Kerala provides content "as is" without warranties of any kind, 
                either express or implied. We do not guarantee:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>The accuracy, completeness, or timeliness of information</li>
                <li>Uninterrupted or error-free service</li>
                <li>That defects will be corrected</li>
                <li>That the website is free of viruses or harmful components</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#563D2F] mb-4">9. Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                To the maximum extent permitted by law, News Bullet Kerala shall not be liable 
                for any indirect, incidental, special, consequential, or punitive damages, 
                including loss of profits, data, or other intangible losses resulting from your 
                use of the service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#563D2F] mb-4">10. Modifications to Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We reserve the right to modify these terms at any time. We will notify users 
                of significant changes via email or through a notice on our website. Your 
                continued use of the service after such modifications constitutes acceptance 
                of the updated terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#563D2F] mb-4">11. Governing Law</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                These Terms and Conditions shall be governed by and construed in accordance 
                with the laws of India. Any disputes arising from these terms shall be subject 
                to the exclusive jurisdiction of the courts in Kerala, India.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#563D2F] mb-4">12. Contact Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about these Terms and Conditions, please contact us at:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 mb-2">
                  <strong>News Bullet Kerala</strong>
                </p>
                <p className="text-gray-700 mb-2">
                  Website: <Link href="/" className="text-[#E87331] hover:underline">www.newsbulletkerala.com</Link>
                </p>
                <p className="text-gray-700 mb-2">
                  Email: <a href="mailto:support@newsbulletkerala.com" className="text-[#E87331] hover:underline">support@newsbulletkerala.com</a>
                </p>
                <p className="text-gray-700">
                  For more contact options, visit our{" "}
                  <Link href="/contact" className="text-[#E87331] hover:underline">
                    Contact Page
                  </Link>
                </p>
              </div>
            </section>
          </div>

          {/* Footer Links */}
          <div className="mt-12 text-center space-x-4 text-sm">
            <Link href="/privacy" className="text-[#E87331] hover:underline">
              Privacy Policy
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
