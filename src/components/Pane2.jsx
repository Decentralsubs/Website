import { Button, Flex, Image, Space, Typography } from "antd"
import Pane2Img from "../assets/image/pane2Img.svg";
import Pane2Logo from "../assets/icon/pane2-logo.svg";
import OfferIcon from "../assets/icon/offer.svg";
import EvmIcon from "../assets/icon/evm-ico.svg";
import { motion } from "framer-motion"
import { variants } from "../global";
const { Title, Paragraph, Text, Link } = Typography;
const Pane2 = () => {
    return (
        <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
            className="flex flex-col items-center bg-green1 sm:rounded-t-[40px] rounded-t-[20px] pt-[95px] px-[20px] sm:px-[50px] xl:px-[100px] 2xl:px-[200px] 3xl:px-[300px]">
            <motion.div variants={variants} className="flex flex-col md:flex-row justify-between w-full">
                <div className="flex flex-col sm:gap-[24px] gap-[20px] sm:max-w-[520px]">
                    <Space size={8}>
                        <Image src={Pane2Logo} alt="ico" width={14} />
                        <Text className="text-white1 text-[12px] font-interregular font-medium uppercase">
                            Decentral subs
                        </Text>
                    </Space>
                    <Text className="text-white1 lg:text-[40px] sm:text-[32px] text-[21px] font-interregular font-normal leading-relaxed">
                        Full control over your 
                        crypto activities.
                    </Text>
                    <Button className="text-black bg-button border-none sm:h-[56px] sm:w-[266px] w-[246px] h-[48px] rounded-[50px] font-normal sm:text-[16px] text-[14px] font-interregular px-[32px]">
                        More about Decentral Subs
                    </Button>
                </div>
                <Space direction="vertical" className="max-w-[520px] pt-[50px]">
                    <Space size={16}>
                        <Image src={OfferIcon} alt="ixo" width={32} />
                        <Text className="text-white1 sm:text-[21px] text-[16px] font-interregular font-normal">
                            Fully customizable offers
                        </Text>
                    </Space>
                    <Text className="text-paragraph sm:text-[14px] text-[12px] font-interregular font-normal">
                        You can track all transactions (buys and subscriptions) that go through your smart contract on your dashboard and download in csv format for your accounting. Get premium access with DSB Token.
                    </Text>
                    <Space size={16}>
                        <Image src={EvmIcon} alt="ixo" width={32} />
                        <Text className="text-white1 sm:text-[21px] text-[16px] font-interregular font-normal">
                            EVM compatible
                        </Text>
                    </Space>
                    <Text className="text-paragraph sm:text-[14px] text-[12px] font-interregular font-normal">
                        You can create a smart contract on all supported EVM blockchains with our API.
                    </Text>
                </Space>
            </motion.div>
            <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.5 }}
                className="justify-center bg-green4 3xl:w-[1200px] w-full sm:mt-[65px] mt-[50px] rounded-t-xl">
                <motion.div variants={variants}>
                    <Image src={Pane2Img} alt='bg' preview={false} />
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Pane2;