import React from 'react'
import HeroTitle from '../minicomponents/HeroTitle'
import { Helmet } from 'react-helmet'


export default function PrivacyPolicy() {
    return (
        <div className="my-5">
            <Helmet>
                <title>Chaotic | Privacy Policy</title>
            </Helmet>
            <HeroTitle text="Privacy Policy" />
            <br />
            <h5>1. WHAT DO WE DO WITH YOUR INFORMATION?</h5>
            <p>
                When you purchase something from our store, as part of the buying and selling process, we collect the personal information you give us such as your name, address and email address.
            </p>
            <br />

            <h5>2. CONSENT</h5>
            <p>When you provide us with personal information to complete a transaction, verify your credit card, place an order, arrange for a delivery or return a purchase, we imply that you consent to our collecting it and using it for that specific reason only.</p>
            <br/>

            <h5>3. DISCLOSURE</h5>
            <p>We may disclose your personal information if we are required by law to do so or if you violate our Terms of Service.</p>
            <br />

            <h5>4. PAYMENT</h5>
            <p>We use Razorpay for processing payments. We/Razorpay do not store your card data on their servers. The data is encrypted through the Payment Card Industry Data Security Standard (PCI-DSS) when processing payment. Your purchase transaction data is only used as long as is necessary to complete your purchase transaction. After that is complete, your purchase transaction information is not saved.
            Our payment gateway adheres to the standards set by PCI-DSS as managed by the PCI Security Standards Council, which is a joint effort of brands like Visa, MasterCard, American Express and Discover.
            PCI-DSS requirements help ensure the secure handling of credit card information by our store and its service providers.</p>
            <br />

            <h5>5. THIRD-PARTY SERVICES</h5>
            <p>In general, the third-party providers used by us will only collect, use and disclose your information to the extent necessary to allow them to perform the services they provide to us.
            However, certain third-party service providers, such as payment gateways and other payment transaction processors, have their own privacy policies in respect to the information we are required to provide to them for your purchase-related transactions.</p>
            <br />

            <h5>6. Security</h5>
            <p>To protect your personal information, we take reasonable precautions and follow industry best practices to make sure it is not inappropriately lost, misused, accessed, disclosed, altered or destroyed.</p>
            <br />

            <h5>7. Cookies</h5>
            <p>We use cookies to maintain session of your user. It is not used to personally identify you on other websites.</p>
            <br />

            <h5>8. AGE OF CONSENT</h5>
            <p>By using this site, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site.</p>
            <br />

            <h5>9. CHANGES TO THIS PRIVACY POLICY</h5>
            <p>We reserve the right to modify this privacy policy at any time, so please review it frequently. Changes and clarifications will take effect immediately upon their posting on the website. If we make material changes to this policy, we will notify you here that it has been updated, so that you are aware of what information we collect, how we use it, and under what circumstances, if any, we use and/or disclose it.</p>
            <br />
            <br />

            <p>
                If you would like to: access, correct, amend or delete 
                any personal information we have about you, simply want more information contact our 
                Privacy Compliance Officer at <a href="mailto:support@chaoticstores.com">support@chaoticstores.com</a> by mail.
            </p>


        </div>
    )
}
