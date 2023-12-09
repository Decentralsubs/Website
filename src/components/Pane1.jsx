import { Button, Flex, Image, Space, Typography } from "antd"
import BinaceIcon from "../assets/icon/pane1/binance_logo.png";
import CertikIcon from "../assets/icon/pane1/certik-logo.png";
import UniswapIcon from "../assets/icon/pane1/uniswap-ico.png";
import FlashTechIcon from "../assets/icon/pane1/flash-logo.png";
import HulkIcon from "../assets/icon/pane1/hulk-logo.png";
import OpenseaIcon from "../assets/icon/pane1/opensea-logo.png";
import CoinMarketCapIcon from "../assets/icon/pane1/coinmarketcap-logo.png";
import CoinGeckoIcon from "../assets/icon/pane1/coingecko-logo.png";
import GridImg from "../assets/image/grid.svg";
import LeftImg from "../assets/image/leftImg.svg";
import RightImg from "../assets/image/rightImg.svg";
import LargeLogo from "../assets/image/large-logo.svg";
import LogoBottom from "../assets/image/logo-bottom.svg";

const { Title, Paragraph, Text, Link } = Typography;
import { motion } from "framer-motion"
import { variants } from "../global";

const Pane1 = () => {
    return (
        <Flex vertical align="center" className="relative md:min-h-[1800px] sm:min-h-[1400px] min-h-[1050px] mt-[100px]">
            <motion.div
                className=" justify-center flex"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
            >
                <motion.div
                    variants={variants}
                    className="flex flex-col pt-[60px] 3xl:px-[300px] 2xl:px-[200px] md:px-[100px] px-[40px] items-center">
                    <Text className="text-white1 w-[990] 2xl:text-[80px] lg:text-[60px] sm:text-[40px] text-[25px]  font-interregular font-normal leading-tight">
                        The First Daas Integrable
                    </Text>
                    <Text className="text-white1 2xl:text-[80px] lg:text-[60px] sm:text-[40px] text-[25px]  font-interregular font-normal leading-tight">
                        Smart contract Monetizable
                    </Text>
                    <Text className="text-white1 2xl:text-[80px] lg:text-[60px] sm:text-[40px] text-[25px]  font-interregular font-normal leading-tight">
                        subscription
                    </Text>
                    <Text className="text-paragraph sm:text-[20px] text-[14px] font-interregular font-normal mt-6 lg:px-[125px] px-[40px] leading-loose text-center">
                        Decentral Subs is an on-chain Daas (decentralized as a service subscription) integrables smart contract subscription with our api directly in your site or app.
                    </Text>
                    <Flex className="sm:gap-6 gap-4 mt-[48px]">
                        <Button className="text-dark3 bg-button border-none sm:h-[54px] h-[44px] rounded-[50px] font-normal text-[20px] font-interregular sm:px-[50px] px-[30px]">
                            Sign In
                        </Button>
                        <Button className="text-white1 bg-dark1 sm:h-[54px] h-[44px] rounded-[50px] font-normal border-2 border-button/20 text-[20px] font-interregular px-[15px] sm:px-[35px]">
                            Implement our API
                        </Button>
                    </Flex>
                </motion.div>
                <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8 }}
                    className="absolute bottom-[60px]">
                    <motion.div variants={variants} className="flex flex-col items-center">
                        <Text className="text-paragraph font-interregular font-normal text-[20px] sm:mb-8 mb-2">Backed by</Text>
                        <div className="flex md:gap-10 sm:gap-5 gap-2  flex-wrap items-center justify-center">
                            <div className="w-[76px] lg:w-[100px] 2xl:w-[150px]">
                                <img src={BinaceIcon} alt="ico" style={{objectFit: "cover"}} />
                            </div>
                            <div className="w-[76px] lg:w-[100px] 2xl:w-[150px]">
                                <img src={CertikIcon} alt="ico" style={{objectFit: "cover"}} />
                            </div>
                            <div className="w-[76px] lg:w-[100px] 2xl:w-[150px]">
                                <img src={UniswapIcon} alt="ico" style={{objectFit: "cover"}} />
                            </div>
                            <div className="w-[76px] lg:w-[100px] 2xl:w-[150px]">
                                <img src={FlashTechIcon} alt="ico" style={{objectFit: "cover"}} />
                            </div>
                            <div className="w-[76px] lg:w-[100px] 2xl:w-[150px]">
                                <img src={HulkIcon} alt="ico" style={{objectFit: "cover"}} />
                            </div>
                            <div className="w-[76px] lg:w-[100px] 2xl:w-[150px]">
                                <img src={OpenseaIcon} alt="ico" style={{objectFit: "cover"}} />
                            </div>
                            <div className="w-[76px] lg:w-[100px] 2xl:w-[150px]">
                                <img src={CoinGeckoIcon} alt="ico" style={{objectFit: "cover"}} />
                            </div>
                            <div className="w-[76px] lg:w-[100px] 2xl:w-[150px]">
                                <img src={CoinGeckoIcon} alt="ico" style={{objectFit: "cover"}} />
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
                <div className="absolute xl:bottom-0 lg:bottom-[100px] md:bottom-[300px] sm:bottom-[150px] bottom-[200px] w-full">
                    <Image src={GridImg} alt='bg' preview={false} />
                </div>
                <div className="absolute left-0 -top-[100px] lg:w-full sm:w-[150px] w-[70px]">
                    <Image src={LeftImg} alt='bg' preview={false} />
                </div>
                <div className="absolute right-0 -top-[100px] lg:w-[250px] sm:w-[150px] w-[70px]">
                    <Image src={RightImg} alt='bg' preview={false} />
                </div>
                <motion.div variants={variants} className="absolute xl:bottom-[235px] lg:bottom-[335px] md:bottom-[455px] bottom-[255px] sm:bottom-[255px] flex xl:w-full lg:w-[700px] md:w-[600px] w-[300px] sm:w-[430px] justify-center">
                    <Image src={LogoBottom} alt='blogo' preview={false} />
                </motion.div>
                <motion.div variants={variants} className="absolute xl:bottom-[535px] lg:bottom-[635px] md:bottom-[715px] sm:bottom-[455px] bottom-[385px] flex lg:w-[500px] md:w-[400px] sm:w-[300px] w-[200px] xl:w-full justify-center">
                    <Image src={LargeLogo} alt='llogo' preview={false} />
                </motion.div>
            </motion.div>
        </Flex>
    )
}

export default Pane1;