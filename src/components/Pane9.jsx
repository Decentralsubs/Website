import { Button, Flex, Image, Space, Typography } from "antd"
import LeftImg from "../assets/image/pane6/left6.svg";
import RightImg from "../assets/image/pane6/right6.svg";
import LeftIco from "../assets/icon/pane9/left.svg";
import RightIco from "../assets/icon/pane9/right.svg";
import { motion } from "framer-motion"
import { variants } from "../global";

const { Title, Paragraph, Text, Link } = Typography;
const Pane9 = () => {
    return (
        <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
            className="flex flex-col items-center relative px-[40px] sm:py-[80px] md:py-[100px] xl:py-[130px] py-[40px]">
            <motion.div variants={variants} className="flex flex-col items-center">
                <Text className="text-white1 xl:text-[64px] lg:text-[44px] sm:text-[34px] text-[21px] sm:w-[850px] w-[260px] font-interregular text-center font-normal leading-relaxed mt-6">
                    Next generation of blockchain technology.
                </Text>
                <Text className="text-paragraph md:text-[20px] text-[14px] w-[328px] sm:w-[700px] md:w-[895px] font-interregular font-normal mt-4 leading-loose text-center">
                    Decentral Subs is a smart contract that has been rigorously audited by the highly reputable and expert firm, Certik, ensuring the utmost security and reliability.
                </Text>
            </motion.div>
            <motion.div variants={variants} className="flex md:flex-row flex-col gap-[30px] mt-[64px]">
                <Flex vertical className="rounded-[16px] justify-between bg-green5 md:w-[419px] w-full md:h-[480px] h-[380px] sm:p-10 p-4">
                    <Image src={LeftIco} alt="ico" preview={false} width={90} />
                    <Space direction="vertical" size={12} className="border-t border-[#1D6457] py-[30px]">
                        <Text className="text-white1 md:text-[27px] text-[17px] font-interregular font-normal">
                            For Developers
                        </Text>
                        <Text className="text-paragraph text-[14px] md:text-[20px] font-interregular font-normal">
                            Find open source code & docs to help you start buidling
                        </Text>
                    </Space>
                </Flex>
                <Flex vertical className="rounded-[16px] justify-between bg-green5 md:w-[419px] w-full md:h-[480px] h-[380px] sm:p-10 p-4">
                    <Image src={RightIco} alt="ico" preview={false} width={90} />
                    <Space direction="vertical" size={12} className="border-t border-[#1D6457] py-[30px]">
                        <Text className="text-white1 md:text-[27px] text-[17px] font-interregular font-normal">
                            For Entrepreneurs
                        </Text>
                        <Text className="text-paragraph text-[14px] md:text-[20px] font-interregular font-normal">
                            Build apps, monetise content & grow your community.
                        </Text>
                    </Space>
                </Flex>
            </motion.div>
            <div className="absolute xxl:left-[125px] md:left-[10px] -left-[80px] lg:left-[85px] xxl:w-[300px] w-[200px] top-0">
                <Image src={LeftImg} alt='bg' preview={false} />
            </div>
            <div className="absolute xxl:right-[125px] md:right-[10px] -right-[80px] lg:right-[85px] xxl:w-[300px] w-[200px] top-0">
                <Image src={RightImg} alt='bg' preview={false} />
            </div>
        </motion.div>
    )
}

export default Pane9;