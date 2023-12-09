import { Button, Flex, Image, Space, Typography } from "antd"
import Pane31Img from "../assets/image/pane3-1.svg";
import Pane32Img from "../assets/image/pane3-2.svg";
import Pane33Img from "../assets/image/pane3-3.svg";
import Pane2Logo from "../assets/icon/pane2-logo.svg";
import Pane4Left from "../assets/image/pane4-left.svg";
import Pane4Right from "../assets/image/pane4-right.svg";
import { motion } from "framer-motion"
import { variants } from "../global";
const { Title, Paragraph, Text, Link } = Typography;
const Pane4 = () => {
    return (
        <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
            className="flex bg-green1 relative justify-between 3xl:px-[300px] xl:px-[150px] lg:px-[80px] px-[20px] sm:pt-[130px] pt-[40px] sm:pb-[180px] pb-[40px]" >
            <motion.div variants={variants} className="flex flex-col">
                <Space size={8} className="">
                    <Image src={Pane2Logo} alt="ico" width={14} />
                    <Text className="text-white1 text-[12px] font-interregular font-medium uppercase">
                        Strategies
                    </Text>
                </Space>
                <Text className="text-white1 xl:text-[42px] sm:text-[32px] text-[21px] w-[300px] xl:w-[700px] sm:w-[500px] font-interregular font-normal leading-relaxed mt-6">
                    Deploy your crypto payment and
                    subscription strategy
                    for your business.
                </Text>
                <Text className="text-white1/70 sm:text-[20px] text-[12px] font-interregular font-normal leading-relaxed sm:w-[390px] w-[200px] mt-5">
                    Build a subscription strategy and track your transactions.
                </Text>
                <Space direction="vertical" size={24} className="sm:mt-[52px] mt-[135px] sm:w-[530px] w-full" >
                    <Image src={Pane31Img} alt="img" preview={false} />
                    <Image src={Pane32Img} alt="img" preview={false} className=" bg-dark3 rounded-lg " />
                </Space>
            </motion.div>
            {/* <Image src={Pane33Img} alt="img" preview={false} width={108} className="mt-[400px]" /> */}
            <div className="absolute left-[90px] w-0 lg:w-full top-0">
                <Image src={Pane4Left} alt='bg' preview={false} />
            </div>
            <div className="absolute 2xl:right-[90px] right-[20px] w-[130px] xl:w-[200px] sm:w-[150px] top-0">
                <Image src={Pane4Right} alt='bg' preview={false} />
            </div>
        </motion.div>
    )
}

export default Pane4;