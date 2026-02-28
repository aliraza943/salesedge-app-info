import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <Link
          to="/"
          className="text-primary underline underline-offset-4 hover:opacity-80 text-sm"
        >
          ← Back to Home
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold text-primary mt-8 mb-10">
          Privacy Policy
        </h1>

        <div className="space-y-8 text-foreground leading-relaxed">
          <Section title="Introduction">
            <p>
              Welcome to SalesEdge. This Privacy Policy explains how we collect, use, 
              disclose, and safeguard your information when you use our mobile application. 
              Please read this policy carefully. By using SalesEdge, you agree to the 
              collection and use of information in accordance with this policy.
            </p>
          </Section>

          <Section title="Data Collection">
            <p>We may collect the following types of information:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Personal information you provide during registration (name, email address, phone number)</li>
              <li>Sales data including RFPs, broker details, pipeline information, and deal records</li>
              <li>Voice input data when using the AI-powered voice RFP entry feature</li>
              <li>Chat interactions with the AI assistant</li>
              <li>Calendar and reminder data</li>
              <li>Goal and performance tracking data</li>
              <li>Device information and usage analytics</li>
            </ul>
          </Section>

          <Section title="Data Usage">
            <p>We use the collected data to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Provide and maintain the SalesEdge application</li>
              <li>Enable RFP tracking, broker management, and pipeline monitoring</li>
              <li>Power AI-driven voice entry and chat assistant features</li>
              <li>Generate daily sales plans and performance reports</li>
              <li>Send calendar reminders and follow-up notifications</li>
              <li>Improve and personalize your experience</li>
              <li>Analyze usage patterns to enhance app functionality</li>
            </ul>
          </Section>

          <Section title="Security">
            <p>
              We implement industry-standard security measures to protect your personal 
              information. This includes encryption of data in transit and at rest, secure 
              authentication protocols, and regular security audits. However, no method of 
              transmission over the internet or electronic storage is 100% secure, and we 
              cannot guarantee absolute security.
            </p>
          </Section>

          <Section title="Third-Party Services">
            <p>
              SalesEdge may integrate with third-party services to provide enhanced 
              functionality, including AI processing services for voice entry and chat 
              assistance, cloud hosting providers, and analytics tools. These third-party 
              services have their own privacy policies, and we encourage you to review them. 
              We do not sell your personal data to third parties.
            </p>
          </Section>

          <Section title="User Rights">
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Export your data in a portable format</li>
              <li>Opt out of non-essential data collection</li>
              <li>Withdraw consent at any time</li>
            </ul>
            <p className="mt-2">
              To exercise any of these rights, please contact us using the information provided below.
            </p>
          </Section>

          <Section title="Data Retention">
            <p>
              We retain your personal data only for as long as necessary to fulfill the 
              purposes outlined in this policy, or as required by law. Sales data, RFP 
              records, and deal information are retained while your account is active. Upon 
              account deletion, your data will be permanently removed within 30 days, except 
              where retention is required by legal obligations.
            </p>
          </Section>

          <Section title="Children's Privacy">
            <p>
              SalesEdge is not intended for use by individuals under the age of 18. We do 
              not knowingly collect personal information from children. If we become aware 
              that we have collected data from a child under 18, we will take steps to 
              delete that information promptly.
            </p>
          </Section>

          <Section title="Policy Updates">
            <p>
              We may update this Privacy Policy from time to time. Any changes will be 
              posted within the app and on our website. We will notify you of significant 
              changes via email or in-app notification. Your continued use of SalesEdge 
              after changes are posted constitutes acceptance of the updated policy.
            </p>
          </Section>

          <Section title="Contact Information">
            <p>
              If you have any questions or concerns about this Privacy Policy or our data 
              practices, please contact us at:
            </p>
            <p className="mt-2">
              <strong>Email:</strong> support@salesedgeapp.com
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Last updated: February 2026
            </p>
          </Section>
        </div>
      </div>

      <footer className="px-6 py-8 border-t border-border text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} SalesEdge. All rights reserved.
      </footer>
    </div>
  );
};

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div>
    <h2 className="text-xl font-semibold text-primary mb-3">{title}</h2>
    {children}
  </div>
);

export default PrivacyPolicy;
