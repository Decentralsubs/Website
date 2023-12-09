import { Typography } from 'antd';

const { Title, Paragraph, Text, Link } = Typography;
const Legal = () => {
    return (
        <Typography className="3xl:px-[450px] xl:px-[300px] md:px-[150px] px-[20px] md:py-[150px] py-[82px] mt-[80px]">
            <Title style={{ color: 'white' }}>Legal Notice</Title>
            <Text className='text-green3 uppercase'>Last updated: January 1, 2024</Text>
            <Title></Title>
            <Paragraph className='text-paragraph'>
                "The information contained on the website <Link href='https://www.decentralsubs.com' target='_blank'><Text className='text-paragraph' underline>www.decentralsubs.com</Text></Link> (hereinafter referred to as the "Website") has no contractual value and is provided for information purposes only. Decentral Subs reserves the right to modify its features at any time and without prior notice. Under no circumstances should this information be construed as investment advice, a solicitation, or an offer to buy or sell any product or service. The information contained on this website should not be interpreted as a public offer, solicitation, investment advice, or invitation by Decentral Subs to users of the Website.
            </Paragraph>
            <Paragraph className='text-paragraph'>
                The services and products presented on the Website may be subject to restrictions in certain countries or for certain individuals. However, any user of the Website should verify in advance, if necessary, with their usual advisors whether they have the right to subscribe to the services and products presented based on their tax and legal status.
                Presentation The Website is published by Decentral Subs.
            </Paragraph>
            <Paragraph className='text-paragraph'>
                Company name: Decentral Subs Company registration number: [To be filled] (registered at the National Directory of Enterprises)
            </Paragraph>
            <Paragraph className='text-paragraph'>
                Registered office: 9 rue des colonnes, 75002 Paris
            </Paragraph>
            <Paragraph className='text-paragraph'>
                Legal representative (President): Alaeddine A.
            </Paragraph>
            <Paragraph className='text-paragraph'>
                Publishing Director: Alaeddine A. Decentral Subs undertakes to comply with the regulations governing the management and operation of a website.
            </Paragraph>
            <Paragraph className='text-paragraph'>
                At any time, you can contact Decentral Subs via email at <Link href='https://contact@decentralsubs.com' target='_blank'><Text className='text-paragraph' underline>contact@decentralsubs.com</Text></Link>.
            </Paragraph>
            <Paragraph className='text-paragraph'>
                Website Content Decentral Subs disclaims all liability in case of impossibility or difficulty in accessing the Website, particularly due to an Internet connection problem. Decentral Subs shall not be liable for any indirect damage, including loss of business, loss of profit, and/or losses resulting from a partial or permanent interruption of service due to an Internet connection problem.
            </Paragraph>
            <Paragraph className='text-paragraph'>
                Decentral Subs cannot be held responsible for elements beyond its control, nor for damage that may be caused by the technical environment of users of this website, including their software, computers, network equipment, and any other equipment used to access the services and/or information published on the Website.
            </Paragraph>
            <Paragraph className='text-paragraph'>
                Decentral Subs makes every effort to ensure that the information published on its website is up-to-date and accurate and reserves the right to modify its content at any time and without prior notice. However, Decentral Subs cannot guarantee that it has not been modified by a third party (e.g., via a virus, malware, or intrusion) or that the information is complete.
            </Paragraph>
            <Paragraph className='text-paragraph'>
                Hypertext Links Decentral Subs may provide hypertext links to other Internet sites or resources from the Website.
            </Paragraph>
            <Paragraph className='text-paragraph'>
                Decentral Subs has no control over such sites and resources and is not responsible for any damage or loss resulting from your access or use of such sites.
                Personal Data For more information, please consult Decentral Subs' data policy, accessible by clicking on the following link: <Link href='https://decentralsubs.com/privacy-policy' target='_blank'><Text className='text-paragraph' underline>https://decentralsubs.com/privacy-policy</Text></Link>.
            </Paragraph>
            <Paragraph className='text-paragraph'>
                Security It is the responsibility of each Internet user to take appropriate measures to protect their computer from contamination by viruses and other malicious computer programs.
            </Paragraph>
            <Paragraph className='text-paragraph'>
                Decentral Subs shall not be held responsible for elements beyond its control and for any damage that may be suffered by the user's terminal, including smartphones, tablets, computers, software, network equipment, and any other equipment used to access the Website.
            </Paragraph>
            <Paragraph className='text-paragraph'>
                Hosting The Publishing Director is Alaeddine A., in his capacity as President.
                The Website is hosted by GoDaddy, whose address is Attn: Office of the Data Protection Officer, 2155 E. GoDaddy Way, Tempe, AZ 85284 USA.
            </Paragraph>
        </Typography>
    )
}

export default Legal;