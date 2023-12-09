import { Button, Flex, Image, Space, Typography } from "antd"
import Pane2Logo from "../assets/icon/pane2-logo.svg";
import LeftImg from "../assets/image/pane6/left6.svg";
import RightImg from "../assets/image/pane6/right6.svg";
import CertikImg from "../assets/image/pane6/certik.svg";
import { GithubOutlined } from '@ant-design/icons';
import { motion } from "framer-motion"
import { variants } from "../global";

const { Title, Paragraph, Text, Link } = Typography;
const Pane6 = () => {
    return (
        <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.5 }}
        className="">
            <motion.div variants={variants} className="flex flex-col relative items-center md:pt-[200px] pt-[50px] md:pb-[155px] pb-[40px]">
            <Space size={8}>
                <Image src={Pane2Logo} alt="ico" width={14} />
                <Text className="text-white1 text-[14px] font-interregular font-medium uppercase">
                    Security
                </Text>
            </Space>
            <Text className="text-white1 text-[21px] lg:text-[64px] font-interregular text-center font-normal leading-relaxed lg:mt-6 mt-4 lg:px-[120px]">
                Decentral Subs
            </Text>
            <Text className="text-paragraph text-[14px] lg:text-[20px] lg:w-[812px] w-[328px] font-interregular font-normal mt-4 lg:px-[125px] leading-loose text-center">
                Decentral Subs is a smart contract that has been rigorously audited by the highly reputable and expert firm, Certik, ensuring the utmost security and reliability.
            </Text>
            <Button className="flex text-black items-center lg:mt-[40px] mt-[32px] bg-button border-none 2xl:h-[56px] h-[48px] rounded-[50px] font-normal text-[16px] font-interregular px-[21px]">
                <GithubOutlined className="text-black text-[16px]" />
                <span className="ml-2">See Github</span>
            </Button>
            <Space size={24} direction="vertical" align="center" className=" mt-[140px]">
                <Text className="text-paragraph text-[14px] font-interregular font-normal text-center">
                    Audited by
                </Text>
                <Image src={CertikImg} alt='bg' height={47} preview={false} />
            </Space>
            <div className="absolute -left-16 md:left-[125px] md:w-[230px] w-[150px] top-0">
                <Image src={LeftImg} alt='bg' preview={false} />
            </div>
            <div className="absolute -right-16 md:right-[125px] md:w-[230px] w-[150px] top-0">
                <Image src={RightImg} alt='bg' preview={false} />
            </div>
            </motion.div>
        </motion.div>
    )
}

export default Pane6;