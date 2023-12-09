import { Typography } from 'antd';

const { Title, Paragraph, Text } = Typography;
const Terms = () => {
    return (
        <Typography className="3xl:px-[450px] xl:px-[300px] md:px-[150px] px-[20px] md:py-[150px] py-[82px] mt-[80px]">
            <Title style={{ color: 'white' }}>Terms and conditions</Title>
            <Text className='text-green3 uppercase'>Last updated: January 1, 2024</Text>
            <Title></Title>
            <Paragraph className='text-paragraph'>
                These Terms and Conditions are edited and enforced by: Decentral Subs, a company headquartered at 9 rue des colonnes, 75002 Paris, registered with the National Business Registry under number XXXXXXXXX (hereinafter referred to as "Decentral Subs," "the Startup," "We," "Our").
            </Paragraph>
            <Paragraph className='text-paragraph'>
                Decentral Subs offers a service enabling receipt of payments or subscriptions via the blockchain, integrated in the form of smart contracts directly usable through our API on your website or application.
            </Paragraph>
            <Paragraph className='text-paragraph'>
                Decentral Subs owns and operates Decentralsubs.com and any subdomains (hereinafter referred to as the "Website"), which solely act as an interface providing users access to the Services (hereinafter referred to as "Access").
            </Paragraph>
            <Paragraph className='text-paragraph'>
                Risk Assumption By accepting these Terms and Conditions, users (hereinafter referred to as "User(s)," "You") are aware that the services ("Services") offered by Decentral Subs are related to financial transactions via the blockchain, which has several consequences.
                Users acknowledge the inherent risks associated with using the blockchain for payments and subscriptions, including potential errors and security risks.
                For each transaction made on the blockchain, whether it's a subscription or a direct payment, our fee is 0.50% with a fixed amount of $0.25 for subscriptions, and 0.25% with a fixed amount of $0.10 for direct payments.
            </Paragraph>
            <Paragraph className='text-paragraph'>
                Additionally, the installation of Decentral Subs' API is free.
                Access a comprehensive crypto payment platform with simple and transparent pay-as-you-go pricing. No setup fees, monthly fees, or hidden fees.
            </Paragraph>
            <Paragraph className='text-paragraph'>
                Finally, although Decentral Subs aims to provide fair and accurate content on its Website, it does not guarantee its completeness. Therefore, Users acknowledge conducting personal research before using Decentral Subs' Services and informing themselves of the inherent risks associated with its use.
            </Paragraph>
            <Paragraph className='text-paragraph'>
                Purpose Contractual Set The Terms and Conditions constitute a legally binding agreement between Decentral Subs and Users. Users acknowledge having read, understood, and accepted them in their entirety.
            </Paragraph>
            <Paragraph className='text-paragraph'>
                Users agree to read the Terms and Conditions in addition to the Privacy Policy available on the Website. This contractual set determines the contractual relationship between the Company and its Users and Clients in its entirety.
            </Paragraph>
            <Paragraph className='text-paragraph'>
                Acceptance of the Terms and Conditions The Terms and Conditions are presented to Users upon accessing the interface operated by Decentral Subs. Acceptance is signified by a checkbox when accessing the Website.
            </Paragraph>
            <Paragraph className='text-paragraph'>
                These Terms and Conditions should be read in conjunction with additional information available in the FAQ and Privacy Policy on the Website.
            </Paragraph>
            <Paragraph className='text-paragraph'>
                They are accessible at any time on the Website. Users are required to carefully read the provisions of these Terms and Conditions before accepting them. It is also advisable to keep them in a paper format or to save them on a secure computer medium.
            </Paragraph>
            <Paragraph className='text-paragraph'>
                Decentral Subs reserves the right to modify, at any time and at its sole discretion, these Terms and Conditions. In such a situation, the version of the Terms and Conditions applicable to the contractual relationship between the User and Decentral Subs will be the one in force at the date of the new access on the Website.
            </Paragraph>
            <Paragraph className='text-paragraph'>
                It is the responsibility of Users to read the revised Terms and Conditions and to explicitly accept them before accessing the Website again.
                To the extent that there is a conflict between these Terms and Conditions and any applicable additional documents, these Terms and Conditions will apply unless expressly stated otherwise. If you do not agree with these Terms and Conditions, you may not use the Services and should not visit the Website or otherwise engage with them."
            </Paragraph>
        </Typography>
    )
}

export default Terms;