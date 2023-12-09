import { Button, Flex, Image, Space, Typography } from "antd"
import CertikImg from "../assets/image/pane6/certik.svg";
import EarthImg from "../assets/image/earth.svg";
import RBArrow from "../assets/image/right-bottom-arrow.svg";
import { motion } from "framer-motion"
import { variants } from "../global";

const { Title, Paragraph, Text, Link } = Typography;
const Pane7 = () => {
    return (
        <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
            className="flex flex-col bg-green1 relative justify-between 3xl:px-[300px] 2xl:px-[200px] xl:px-[100px] lg:px-[50px] px-[20px] md:pt-[130px] pt-[50px]" >
            <motion.div variants={variants} className="flex md:flex-row flex-col items-center md:items-start justify-between md:border-b border-b-0 border-green6">
                <Space direction="vertical" size={4} className="xl:w-[435px] text-center md:text-left md:w-[355px] w-full pb-[65px]">
                    <Text className="text-white1 lg:text-[64px] sm:text-[34px] text-[21px] font-interregular font-normal">
                        Security
                    </Text>
                    <Text className="text-paragraph lg:text-[24px] sm:text-[18px] text-[14px] font-interregular font-normal">
                        Our smart contracts have been audited by the best in the crypto industry.
                    </Text>
                </Space>
                <Space direction="vertical" size={4} className="xl:w-[435px] md:w-[355px] w-full sm:pl-[40px] pl-[20px] pb-[42px] border-l md:border-r-0 border-r border-green6 md:border-t-0 border-t rounded-xl">
                    <div className="flex lg:w-full md:my-0 my-8 w-[150px]"><Image src={CertikImg} alt='bg' preview={false} /></div>
                    <Text className="text-paragraph text-[14px] sm:text-[18px] lg:text-[24px] font-interregular font-normal">
                        As one of the most experienced teams in the space, Certik is at the cutting edge of offensive cryptography, blockchain technology. and cryptoeconomic incentive analysis.
                    </Text>
                </Space>
            </motion.div>
            <motion.div variants={variants} className="flex flex-col md:flex-row items-center md:items-start justify-between">
                <Flex className="pt-[70px] xl:pb-[100px] md:justify-start justify-center pb-[50px] xl:px-[66px] lg:px-[36px] md:border-none border border-green6 px-[30px] w-full md:w-fit">
                    <Image src={EarthImg} alt='bg' height={270} width={270} preview={false} />
                </Flex>
                <Space direction="vertical" size={4} className="sm:px-[40px] px-[20px] md:pt-[63px] pt-[30px] pb-[42px] border-l border-r border-green6">
                    <div className="flex lg:w-full w-[150px]"><Image src={CertikImg} alt='bg' height={50} preview={false} /></div>
                    <Text className="text-paragraph lg:text-[24px] sm:text-[18px] text-[14px] font-interregular font-normal">
                        Has helped secure some of the world's most targeted organizations and products. They combine high-end security research with a real- world attacker mentality to reduce risk and fortif...
                    </Text>
                </Space>
                <Flex className="xl:py-[102px] md:py-[82px] py-[32px] xl:px-[119px] px-[79px] md:border-l-0 border-l md:border-r-0 border-r md:border-t-0 border-t justify-center md:justify-start md:border-b-0 border-b md:rounded-b-none rounded-b-xl md:mb-0 mb-[50px] border-green6 md:w-fit w-full">
                    <Image src={RBArrow} alt='bg' height={195} width={195} preview={false} />
                </Flex>
            </motion.div>
        </motion.div>
    )
}

export default Pane7;