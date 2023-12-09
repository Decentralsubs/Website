import { Typography } from 'antd';

const { Title, Paragraph, Text } = Typography;
const Policy = () => {
    return (
        <Typography className="3xl:px-[450px] xl:px-[300px] md:px-[150px] px-[20px] md:py-[150px] py-[82px] mt-[80px]">
            <Title style={{ color: 'white' }}>Privacy Policy</Title>
            <Text className='text-green3 uppercase'>Last updated: January 1, 2024</Text>
            <Title></Title>
            <Paragraph className='text-paragraph'>
                These Terms of Use (hereinafter referred to as "Terms") govern the use of the website and services offered by Decentral Subs. By accessing the website, using our services, or registering as a user, you accept these Terms in their entirety. If you do not agree to these terms, please do not access our website or use our services.
            </Paragraph>
            <Title level={5} style={{ color: '#BDC7C2' }}>
                1. Introduction
            </Title>
            <Paragraph className='text-paragraph'>
                These General Terms and Conditions of Use (hereinafter referred to as "GTCU") govern the use of the website and services offered by Decentral Subs. By accessing the website, using our services or registering as a user, you accept these GCU in their entirety. If you do not accept these terms, please do not access our website or use our services.
            </Paragraph>
            <Title level={5} style={{ color: '#BDC7C2' }}>
                2. Definitions
            </Title>
            <Paragraph className='text-paragraph'>
                Decentral Subs: Refers to the startup Decentral Subs.
                Website: Refers to the website operated by Decentral Subs, accessible at www.decentralsubs.com and any associated subdomains.
                User: Any individual or entity accessing the Website or using the Services offered by Decentral Subs.
            </Paragraph>
            <Title level={5} style={{ color: '#BDC7C2' }}>
                3. Services and Use
            </Title>
            <Paragraph className='text-paragraph'>
                Decentral Subs offers services related to the exchange of digital assets in a decentralized environment. By using our Website or our services, you acknowledge that digital asset transactions involve risks and you accept responsibility for these risks associated with your use.
            </Paragraph>
            <Title level={5} style={{ color: '#BDC7C2' }}>
                Decentral Subs - An On-Chain Daas Service
            </Title>
            <Paragraph className='text-paragraph'>
                Decentral Subs offers an innovative, on-chain Daas service enabling smart contract-based subscriptions that can be directly integrated into your existing platform. These smart contracts are designed to provide a seamless and secure subscription experience for users, while being easily integrated into your existing infrastructure.
            </Paragraph>
            <Paragraph className='text-paragraph'>
                Our Daas solution offers a unique decentralised approach to subscription management, enabling greater autonomy and transparency in the subscription process for your users.
            </Paragraph>
            <Paragraph className='text-paragraph'>
                By choosing Decentral Subs, you benefit from a customisable and adaptable Daas solution, perfectly integrated with your specific subscription needs for your website or application.
            </Paragraph>
            <Title level={5} style={{ color: '#BDC7C2' }}>
                4. Intellectual Property
            </Title>
            <Paragraph className='text-paragraph'>
                All content on the Website, including but not limited to text, graphics, logos, images, audio clips, video clips, data, computer code and software are the exclusive property of Decentral Subs and are protected by applicable intellectual property laws.
            </Paragraph>
            <Title level={5} style={{ color: '#BDC7C2' }}>
                5. Responsibilities
            </Title>
            <Paragraph className='text-paragraph'>
                Decentral Subs makes every effort to ensure the availability, accuracy and security of its services. However, we cannot guarantee the absence of interruptions or technical errors, nor the total security of transactions carried out on our platform. By using our services, you acknowledge and accept these eventualities.
            </Paragraph>

            <Title level={5} style={{ color: '#BDC7C2' }}>
                6. Changes to the Terms
            </Title>
            <Paragraph className='text-paragraph'>
                Decentral Subs reserves the right to modify or update these Terms and Conditions at any time, without prior notice. Modifications will come into force as soon as they are published on our Website. It is your responsibility to consult these Terms regularly to be informed of any changes.
            </Paragraph>
            <Title level={5} style={{ color: '#BDC7C2' }}>
                7. Applicable law
            </Title>
            <Paragraph className='text-paragraph'>
                Please bear in mind that these terms are a general example and that it is recommended that you consult a professional or a lawyer specialising in the drafting of terms and conditions to ensure that they correspond to the specific laws of your region and the needs of your business.
            </Paragraph>
            <Paragraph className='text-paragraph'>
                These Terms and Conditions of Use shall be governed by and construed in accordance with the laws of your country.
            </Paragraph>
            <Title level={5} style={{ color: '#BDC7C2' }}>
                8. Links
            </Title>
            <Paragraph className='text-paragraph'>
                Links There may be links from our Site to other websites and resources provided by third parties. This privacy policy applies solely to our site. Accessing these third-party sites or sources requires you to leave our Site. We do not control these third-party sites or any content they contain, and you agree that we are in no way responsible for any of these third-party sites, including, without limitation, their content, policies, failures, promotions, products, services, or actions and/or any damage, loss, breakdown, or issue caused by, related to, or arising from these sites. We encourage you to review all policies, rules, terms, and regulations, including privacy policies, of each site you visit.
            </Paragraph>
            <Title level={5} style={{ color: '#BDC7C2' }}>
                9. Contact us
            </Title>
            <Paragraph className='text-paragraph'>
                If you have any questions, comments, or concerns regarding our Privacy Policy, please contact us at contact@decentralsubs.com.
            </Paragraph>
        </Typography>
    )
}

export default Policy;