import { Button, Flex, Image, Space, Typography } from "antd"
import Pane2Logo from "../assets/icon/pane2-logo.svg";
import Ico1 from "../assets/icon/pane10/ico1.svg";
import Ico2 from "../assets/icon/pane10/ico2.svg";
import Ico3 from "../assets/icon/pane10/ico3.svg";
import Ico4 from "../assets/icon/pane10/ico4.svg";
import Ico5 from "../assets/icon/pane10/ico5.svg";
import Ico6 from "../assets/icon/pane10/ico6.svg";
import Ico7 from "../assets/icon/pane10/ico7.svg";
import Ico8 from "../assets/icon/pane10/ico8.svg";
import Ico9 from "../assets/icon/pane10/ico9.svg";
import IcoCard from "./Card/IcoCard";
import { motion } from "framer-motion"
import { variants } from "../global";
const { Title, Paragraph, Text, Link } = Typography;
const Pane10 = () => {
    return (
        <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
            className="flex flex-col bg-green1 relative justify-between p-[20px] sm:p-[50px] lg:p-[80px] 3xl:p-[100px]" >
            <motion.div variants={variants} className="flex flex-col">
                <Space size={8}>
                    <Image src={Pane2Logo} alt="ico" width={14} />
                    <Text className="text-white1 text-[14px] font-interregular font-medium uppercase">
                        Strategies
                    </Text>
                </Space>
                <Text className="text-white1 mt-6 text-[21px] md:text-[42px] xl:text-[51px] md:w-[830px] w-full font-interregular font-normal leading-relaxed">
                    Become independent from banks by being full DEFI.
                </Text>
            </motion.div>
            <motion.div variants={variants} className="flex flex-col">
                <Space size={[30, 30]} wrap className="w-full sm:mt-[72px] mt-[40px] justify-center">
                    <IcoCard Icon={Ico1} title={'Permissionlessness'}
                        description={`Everyone can interact with the core
                            protocol without having to ask permission
                            nor risking to be censored.`}
                    />
                    <IcoCard Icon={Ico2} title={'Composability'}
                        description={`As the first Decentral Subs aims at leveraging any chain, asset, or protocol.`}
                    />
                    <IcoCard Icon={Ico3} title={'Financial institution'}
                        description={`Replace traditional gateways accessible only in fiat thanks to crypto.`}
                    />
                    <IcoCard Icon={Ico4} title={'Crypto payment and subs'}
                        description={`Easily integrate crypto payment and subscription system for your business.`}
                    />
                    <IcoCard Icon={Ico5} title={'Ownership is distributed'}
                        description={`Decentral Subs users retain full control over their funds - the exchange does not hold custody of their assets.`}
                    />
                    <IcoCard Icon={Ico6} title={'No compromise with security'}
                        description={`Decentral Subs will ensure top-tier security via
                    immutable contracts, stringent audits and
                    bug bounties.`}
                    />
                    <IcoCard Icon={Ico7} title={'Innovation & Education'}
                        description={`Decentral Subs, advancing DeFi, paves way for new market strategies via code-execution
                    in decentralized exchanges. Our focus is on
                    nurturing these new mechanisms and
                    boosting knowledge sharing.`}
                    />
                    <IcoCard Icon={Ico8} title={'Credible Neutrality'}
                        description={`Everyone can interact with the core
                    protocol without having to ask permission
                    nor risking to be censored.`}
                    />
                    <IcoCard Icon={Ico9} title={'Follow the documentation'}
                        description={`Follow the documentation to install our API which is free to access.`}
                    />
                </Space>
            </motion.div>
        </motion.div>
    )
}

export default Pane10;