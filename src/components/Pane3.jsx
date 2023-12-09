import { Button, Flex, Image, Space, Typography } from "antd"
import Pane3Img from "../assets/image/pane3Img.svg";
import Pane2Logo from "../assets/icon/pane2-logo.svg";
import OfferIcon from "../assets/icon/offer.svg";
import EvmIcon from "../assets/icon/evm-ico.svg";
import BtnIcon from "../assets/icon/btn-logo.svg";
import Icon1 from "../assets/icon/pane3Icon1.svg";
import Icon2 from "../assets/icon/pane3Icon2.svg";
import Icon3 from "../assets/icon/pane3Icon3.svg";
import { motion } from "framer-motion"
import { variants } from "../global";
const { Title, Paragraph, Text, Link } = Typography;
const Pane3 = () => {
    return (
        <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
            className="flex flex-col items-center justify-between bg-dark3 rounded-t-[40px] pt-[40px] sm:pt-[95px] px-[20px] md:px-[50px] xl:px-[100px] 2xl:px-[300px]">
            <motion.div variants={variants} className="flex md:flex-row flex-col justify-between w-full">
                <Space direction="vertical" size={24} className="max-w-[540px]">
                    <Space size={8}>
                        <Image src={Pane2Logo} alt="ico" width={14} />
                        <Text className="text-white1 text-[12px] font-interregular font-medium uppercase">
                            Decentral subs
                        </Text>
                    </Space>
                    <Text className="text-white1 text-[21px] md:text-[42px] sm:text-[32px] font-interregular font-normal leading-relaxed">
                        Decentral Subs
                        Dividend Utility Token.
                    </Text>
                    <Space size={8}>
                        <Button className="flex text-black items-center bg-button border-none h-[44px] sm:h-[52px] rounded-[50px] font-normal text-[16px] font-interregular px-[12px] sm:px-[32px]">
                            <Image src={BtnIcon} width={24} />
                            <span className="ml-2">Buy DSB Token</span>
                        </Button>
                        <Button className="flex text-white1 items-center bg-dark3 h-[44px] sm:h-[56px] rounded-[50px] font-normal border-2 border-button/20 text-[20px] font-interregular px-[18px] sm:px-[35px]">
                            Whitepaper
                        </Button>
                    </Space>
                </Space>
                <Space direction="vertical" className="sm:max-w-[520px] w-full pt-[50px]">
                    <Space size={16}>
                        <Image src={Icon1} alt="ixo" width={32} />
                        <Text className="text-white1 text-[16px] sm:text-[21px] font-interregular font-normal">
                            DSB Token is available on
                            <Text className="text-pink1 text-[16px] sm:text-[21px] font-interregular font-normal"> Uniswap</Text>
                        </Text>
                    </Space>
                    <Text className="text-paragraph text-[14px] font-interregular font-normal">
                        Buy DSB Token with Ethereum on the Uniswap DEX.
                    </Text>
                    <Space size={16} className="mt-[40px]">
                        <Image src={Icon2} alt="ixo" width={32} />
                        <Text className="text-white1 text-[16px] sm:text-[21px] font-interregular font-normal">
                            Dividend Token & Buyback
                        </Text>
                    </Space>
                    <Text className="text-paragraph text-[14px] font-interregular font-normal">
                        You will receive 20% of profits automatically by holding DSB Token in buyback.
                    </Text>
                    <Space size={16} className="mt-[40px]">
                        <Image src={Icon2} alt="ixo" width={32} />
                        <Text className="text-white1 text-[21px] font-interregular font-normal">
                            Access to the tool and benefits
                        </Text>
                    </Space>
                    <Text className="text-paragraph text-[14px] font-interregular font-normal">
                        Offer premium access for free or at a discount on our tools with DSB Token and discounts with our partners.
                    </Text>
                </Space>
            </motion.div>

            <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.5 }} className="justify-center sm:mt-[65px] mt-[50px] 2xl:w-[1200px] w-full sm:rounded-t-2xl rounded-t-sm">
                <motion.div variants={variants} >
                    <Image src={Pane3Img} alt='bg' preview={false} />
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Pane3;