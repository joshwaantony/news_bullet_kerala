import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function RefundPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#E87331] mb-4">
              Refund and Cancellation Policy
            </h1>
            <p className="text-gray-600">Last updated: January 1, 2025</p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none bg-white rounded-lg shadow-md p-6 md:p-10">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#563D2F] mb-4">1. Overview</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                This Refund and Cancellation Policy ("Policy") governs the refund and cancellation 
                procedures for subscription services provided by News Bullet Kerala ("we", "us", 
                or "our"). By subscribing to our premium services, you agree to the terms outlined 
                in this policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#563D2F] mb-4">2. Subscription Cancellation</h2>
              
              <h3 className="text-xl font-semibold text-[#563D2F] mb-3 mt-4">2.1 How to Cancel</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                You may cancel your subscription at any time through:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Your account settings on our website</li>
                <li>Contacting our customer support team</li>
                <li>Sending an email to support@newsbulletkerala.com</li>
              </ul>

              <h3 className="text-xl font-semibold text-[#563D2F] mb-3 mt-4">2.2 Cancellation Effect</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                When you cancel your subscription:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Your subscription will remain active until the end of your current billing period</li>
                <li>You will continue to have access to premium content until the subscription expires</li>
                <li>No further charges will be made after the current billing period ends</li>
                <li>Automatic renewal will be disabled</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#563D2F] mb-4">3. Refund Eligibility</h2>
              
              <h3 className="text-xl font-semibold text-[#563D2F] mb-3 mt-4">3.1 Refund Period</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We offer a <strong>7-day money-back guarantee</strong> from the date of your 
                initial subscription purchase. If you are not satisfied with our service within 
                this period, you may request a full refund.
              </p>

              <h3 className="text-xl font-semibold text-[#563D2F] mb-3 mt-4">3.2 Eligible Refund Scenarios</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Refunds may be considered in the following circumstances:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Request made within 7 days of initial subscription purchase</li>
                <li>Technical issues preventing access to premium content that we cannot resolve</li>
                <li>Duplicate charges due to system errors</li>
                <li>Unauthorized transactions on your account</li>
                <li>Service discontinuation by News Bullet Kerala</li>
              </ul>

              <h3 className="text-xl font-semibold text-[#563D2F] mb-3 mt-4">3.3 Non-Refundable Scenarios</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Refunds will NOT be provided in the following cases:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Request made after 7 days from the initial purchase</li>
                <li>Change of mind after using the service</li>
                <li>Violation of our Terms and Conditions resulting in account termination</li>
                <li>Partial usage of subscription period</li>
                <li>Failure to cancel before automatic renewal</li>
                <li>Refund requests for previously refunded subscriptions</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#563D2F] mb-4">4. Refund Process</h2>
              
              <h3 className="text-xl font-semibold text-[#563D2F] mb-3 mt-4">4.1 How to Request a Refund</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                To request a refund, please:
              </p>
              <ol className="list-decimal pl-6 text-gray-700 space-y-2 mb-4">
                <li>Contact our customer support team via email at support@newsbulletkerala.com</li>
                <li>Include your account email address and subscription details</li>
                <li>Provide a clear reason for the refund request</li>
                <li>Include any relevant transaction IDs or payment receipts</li>
              </ol>

              <h3 className="text-xl font-semibold text-[#563D2F] mb-3 mt-4">4.2 Refund Processing Time</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Once your refund request is approved:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Refunds will be processed within 5-7 business days</li>
                <li>The refund will be credited to the original payment method used</li>
                <li>You will receive a confirmation email once the refund is processed</li>
                <li>Bank processing times may vary (typically 3-10 business days)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#563D2F] mb-4">5. Payment Method Refunds</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Refunds will be processed to the original payment method used for the subscription:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li><strong>Credit/Debit Cards:</strong> Refunds will appear on your card statement within 5-10 business days</li>
                <li><strong>UPI:</strong> Refunds will be credited to your UPI account within 3-5 business days</li>
                <li><strong>Net Banking:</strong> Refunds will be credited to your bank account within 5-7 business days</li>
                <li><strong>Wallets:</strong> Refunds will be credited to your wallet within 2-3 business days</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                Note: If the original payment method is no longer valid, please contact our 
                support team to arrange an alternative refund method. All refunds are processed through Razorpay 
                in accordance with their{" "}
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
              <h2 className="text-2xl font-bold text-[#563D2F] mb-4">6. Partial Refunds</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                In exceptional circumstances, we may offer partial refunds for:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Service interruptions lasting more than 48 hours</li>
                <li>Significant reduction in service quality</li>
                <li>Unresolved technical issues affecting premium content access</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                Partial refunds will be calculated on a pro-rata basis based on the remaining 
                subscription period and will be determined at our sole discretion.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#563D2F] mb-4">7. Automatic Renewal</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Subscriptions are set to automatically renew at the end of each billing period. 
                To avoid future charges:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Cancel your subscription at least 24 hours before the renewal date</li>
                <li>You will receive email reminders before each renewal</li>
                <li>Once renewed, the new billing period is subject to the same refund policy</li>
                <li>Refunds for renewed subscriptions follow the same 7-day policy from the renewal date</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#563D2F] mb-4">8. Dispute Resolution</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you are not satisfied with our refund decision, you may:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Contact our customer support team for further review</li>
                <li>Provide additional documentation or information to support your case</li>
                <li>Escalate your concern to our management team</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                We are committed to resolving all disputes fairly and promptly.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#563D2F] mb-4">9. Contact Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                For refund requests, cancellations, or questions about this policy, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 mb-2">
                  <strong>News Bullet Kerala - Customer Support</strong>
                </p>
                <p className="text-gray-700 mb-2">
                  Email: <a href="mailto:support@newsbulletkerala.com" className="text-[#E87331] hover:underline">support@newsbulletkerala.com</a>
                </p>
                <p className="text-gray-700 mb-2">
                  Response Time: Within 24-48 hours
                </p>
                <p className="text-gray-700">
                  For general inquiries, visit our{" "}
                  <Link href="/contact" className="text-[#E87331] hover:underline">
                    Contact Page
                  </Link>
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#563D2F] mb-4">10. Policy Updates</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We reserve the right to modify this Refund and Cancellation Policy at any time. 
                Changes will be effective immediately upon posting on this page. Material changes 
                will be communicated to active subscribers via email. Your continued use of our 
                services after such changes constitutes acceptance of the updated policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#563D2F] mb-4">11. Payment Gateway Policies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                All refunds are processed through Razorpay. By using our payment services, you agree to Razorpay's policies:
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

            <section className="mb-8 bg-yellow-50 border-l-4 border-yellow-400 p-4">
              <h2 className="text-xl font-bold text-[#563D2F] mb-2">Important Note</h2>
              <p className="text-gray-700 leading-relaxed">
                All refund requests are subject to review and approval. We reserve the right to 
                deny refund requests that do not meet the criteria outlined in this policy. 
                Refund decisions are final and binding.
              </p>
            </section>
          </div>

          {/* Footer Links */}
          <div className="mt-12 text-center space-x-4 text-sm">
            <Link href="/terms" className="text-[#E87331] hover:underline">
              Terms & Conditions
            </Link>
            <span className="text-gray-400">|</span>
            <Link href="/privacy" className="text-[#E87331] hover:underline">
              Privacy Policy
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
