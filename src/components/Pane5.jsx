import { Button, Flex, Image, Space, Typography } from "antd"
import Pane5Img from "../assets/image/pane5.svg";
import Pane2Logo from "../assets/icon/pane2-logo.svg";
import Pane51Icon from "../assets/icon/pane5-1-icon.svg";
import Pane52Icon from "../assets/icon/pane5-2-icon.svg";
import Pane53Icon from "../assets/icon/pane5-3-icon.svg";
import Pane54Icon from "../assets/icon/pane5-4-icon.svg";
import { motion } from "framer-motion"
import { variants } from "../global";
const { Title, Paragraph, Text, Link } = Typography;
const Pane5 = () => {
    return (
        <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col bg-green5 justify-center items-center px-[20px] sm:px-[100px] 2xl:px-[300px] sm:pt-[130px] pt-[40px] sm:pb-[180px] pb-[40px]" >
            <motion.div variants={variants} className="flex flex-col justify-center items-center">
                <Space size={8}>
                    <Image src={Pane2Logo} alt="ico" width={14} />
                    <Text className="text-white1 text-[12px] font-interregular font-medium uppercase">
                        For defi users
                    </Text>
                </Space>
                <Text className="text-white1 lg:text-[51px] sm:text-[32px] text-[21px] font-interregular text-center font-normal leading-relaxed mt-4 sm:mt-6 sm:px-[120px] px-[30px]">
                    Improve your business with crypto payments & subscriptions.
                </Text>
            </motion.div>
            <motion.div variants={variants} className="flex lg:flex-row flex-col bg-dark3 sm:rounded-[20px] rounded-[12px] sm:mt-[72px] mt-[40px] w-full">
                <Flex className="3xl:py-[85px] sm:py-[55px] py-[32px] lg:px-[82px] items-center w-full lg:w-1/2" vertical>
                    <Image src={Pane5Img} alt='img' preview={false} width={300} className="border-b border-green6" />
                    <Flex vertical className="sm:mt-[80px] mt-[40px] gap-[20px] lg:items-start items-center">
                        <Text className="text-white1 sm:text-[34px] text-[17px] font-interregular font-semibold">
                            Choose crypto
                        </Text>
                        <Text className="text-paragraph sm:text-[20px] w-[284px] sm:text-left text-center text-[12px] font-interregular font-normal">
                            You can choose the cryptos you accept for your payments or subscription and blockchain
                        </Text>
                        <Space size={4}>
                            <Button className="flex text-dark3 items-center bg-button border-none 3xl:h-[54px] h-[38px] rounded-[48px] font-normal 3xl:text-[16px] text-[12px] font-interregular sm:px-[20px] 3xl:px-[32px] px-[16px]">
                                List my crypto
                            </Button>
                            <Button className="flex text-white1 items-center bg-dark3 3xl:h-[54px] h-[38px] rounded-[48px] font-normal border-2 border-button/20 3xl:text-[16px] text-[12px] font-interregular sm:px-[20px] 3xl:px-[32px] px-[16px]">
                                More about Decentral Subs
                            </Button>
                        </Space>
                    </Flex>
                </Flex>
                <div className="flex flex-col bg-green1 sm:rounded-[20px] rounded-[12px] justify-between lg:w-1/2 w-full">
                    <Space direction="vertical" className="xl:px-[85px] lg:text-left text-center px-10 lg:items-start items-center sm:pt-[90px] pt-[50px] gap-5">
                        <Text className="text-white1 xl:text-[34px] md:text-[24px] text-[17px] font-interregular font-semibold">
                            Our API is Free!
                        </Text>
                        <Text className="text-paragraph sm:text-[20px] text-[12px] font-interregular font-normal">
                            Install our API for free by following our documentation. Coming soon to React.js, react native, Wordpress, Shopify and Telegram.
                        </Text>
                        <Space size={4} className="mt-2">
                            <Button className="flex text-dark3 items-center bg-button border-none lg:h-[54px] h-[38px] rounded-[48px] font-normal text-[16px] font-interregular px-[24px] lg:px-[32px]">
                                Coming soon
                            </Button>
                            <Button className="flex text-white1 items-center bg-green1 lg:h-[54px] h-[38px] rounded-[48px] font-normal border-2 border-button/20 text-[16px] font-interregular px-[24px] lg:px-[32px]">
                                Pre-register
                            </Button>
                        </Space>
                    </Space>
                    <div className="flex sm:flex-row flex-wrap sm:px-[60px] justify-center sm:justify-start px-[40px] sm:py-[46px] py-[24px] sm:gap-10 gap-6 border-t sm:mt-0 mt-8 border-[#168067]">
                        <Image src={Pane51Icon} alt="ico" className="sm:h-8 h-4 aspect-auto" />
                        <Image src={Pane52Icon} alt="ico" className="sm:h-8 h-4 aspect-auto" />
                        <Image src={Pane53Icon} alt="ico" className="sm:h-8 h-4 aspect-auto" />
                        <Image src={Pane54Icon} alt="ico" className="sm:h-8 h-4 aspect-auto" />
                    </div>
                </div>
            </motion.div>
            <motion.div variants={variants} className="flex lg:flex-row flex-col sm:rounded-[20px] rounded-[12px] sm:mt-[129px] mt-[50px] border border-green1 w-full">
                <Flex className="bg-green1 lg:w-1/2 w-full rounded-[12px] sm:rounded-[20px] sm:py-[80px] py-[40px] items-center lg:items-start text-center sm:text-left md:px-[20px] lg:px-[40px] xl:pl-[80px] xl:pr-[120px] gap-5" vertical>
                    <Text className="text-white1 sm:text-[34px] text-[17px] font-interregular font-semibold">
                        Standard
                    </Text>
                    <Text className="text-paragraph sm:text-[20px] text-[12px] sm:max-w-[460px] max-w-[230px] font-interregular font-normal">
                        Get access to a comprehensive crypto payment platform with simple and transparent pay-as-you-go pricing. No setup fees, monthly fees, or hidden fees.
                    </Text>
                    <Button className="flex text-dark3 items-center max-w-[144px] bg-button border-none mt-3 sm:h-[54px] h-[48px] rounded-[48px] font-normal sm:text-[16px] text-[12px] font-interregular px-[50px]">
                        Start
                    </Button>
                </Flex>
                <Flex className="sm:p-[24px] p-[20px] sm:gap-[24px] gap-[20px] lg:w-1/2 w-full" vertical>
                    <Flex className="bg-dark3 sm:rounded-[24px] rounded-[12px] justify-center items-center gap-5 py-[54px]" vertical>
                        <Text className="text-white1 sm:text-[52px] md:text-[32px] text-[21px] font-interregular font-normal">
                            0.30% + $0.10
                        </Text>
                        <Text className="text-paragraph text-[14px] sm:text-[20px] font-interregular font-normal">
                            For each subscription.
                        </Text>
                    </Flex>
                    <Flex className="bg-dark3 sm:rounded-[24px] rounded-[12px] justify-center items-center gap-5 py-[54px]" vertical>
                        <Text className="text-white1 sm:text-[52px] md:text-[32px] text-[21px] font-interregular font-normal">
                            0.50% + $0.25
                        </Text>
                        <Text className="text-paragraph text-[14px] sm:text-[20px] font-interregular font-normal">
                            For direct payment.
                        </Text>
                    </Flex>
                </Flex>
            </motion.div>
        </motion.div>
    )
}

export default Pane5;