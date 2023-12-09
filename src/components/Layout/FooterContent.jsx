import { Flex, Space } from "antd";
import FooterLogo from "../../assets/icon/footer-logo.svg";
import WhiteLogo from "../../assets/icon/white-logo.svg";
import TeleIcon from "../../assets/icon/telegram-icon.svg";
import DiscordIcon from "../../assets/icon/discord-icon.svg";
import Icon1 from "../../assets//icon//icon1.svg";
import { Link } from "react-router-dom";
import { TwitterOutlined, YoutubeOutlined, GithubOutlined, LinkedinOutlined } from '@ant-design/icons';
const FooterContent = () => {
    return (
        <div className="flex flex-col relative bg-dark3 h-full w-full rounded-t-[40px] 3xl:px-[300px] 2xl:px-[200px] xl:px-[100px] px-[20px] pt-[80px] pb-[30px]">
            <img src={FooterLogo} alt="logo" className="footer-logo xl:w-[200px] md:w-[150px] w-[100px] absolute xl:-top-[100px] md:-top-[80px] -top-[50px] xl:left-[500px] md:left-[200px]" />
            <div className="flex md:flex-row flex-col justify-between w-full md:items-start items-center">
                <Link>
                    <Flex className="gap-[6px] w-[200px]">
                        <img src={WhiteLogo} alt="ico" />
                        <span className="text-white font-interregular text-[21px] font-semibold">Decentral Subs</span>
                    </Flex>
                </Link>
                <div className="flex md:flex-row w-full mt-9 md:mt-0 flex-col md:items-start md:justify-end items-center md:px-[100px] px-5 lg:gap-[100px] gap-[50px]">
                    <Space direction="vertical" className="md:items-start items-center" size={14}>
                        <Link>
                            <span className="text-button font-interregular text-[12px] font-medium uppercase">
                                Product
                            </span>
                        </Link>
                        <Link>
                            <span className="text-white1 font-interregular text-[14px] font-normal">
                                Decentral Subs
                            </span>
                        </Link>
                        <Link>
                            <span className="text-white1 font-interregular text-[14px] font-normal">
                                Whitepaper
                            </span>
                        </Link>
                        <Link>
                            <span className="text-white1 font-interregular text-[14px] font-normal">
                                Token
                            </span>
                        </Link>
                        <Link>
                            <span className="text-white1 font-interregular text-[14px] font-normal">
                                Price
                            </span>
                        </Link>
                    </Space>
                    <Space direction="vertical" className="md:items-start items-center" size={14}>
                        <Link>
                            <span className="text-button font-interregular text-[12px] font-medium uppercase">
                                Developers
                            </span>
                        </Link>
                        <Link>
                            <span className="text-white1 font-interregular text-[14px] font-normal">
                                Technical Docs
                            </span>
                        </Link>
                        <Link>
                            <span className="text-white1 font-interregular text-[14px] font-normal">
                                API
                            </span>
                        </Link>
                        <Link>
                            <span className="text-white1 font-interregular text-[14px] font-normal">
                                Audit
                            </span>
                        </Link>
                        <Link>
                            <span className="text-white1 font-interregular text-[14px] font-normal">
                                Team
                            </span>
                        </Link>
                        <Link>
                            <span className="text-white1 font-interregular text-[14px] font-normal">
                                Github
                            </span>
                        </Link>
                    </Space>
                    <Space direction="vertical" className="md:items-start items-center" size={14}>
                        <Link>
                            <span className="text-button font-interregular text-[12px] font-medium uppercase">
                                Company
                            </span>
                        </Link>
                        <Link>
                            <span className="text-white1 font-interregular text-[14px] font-normal">
                                Contact
                            </span>
                        </Link>
                    </Space>
                </div>
            </div>
            <Space size={42} className="pb-[30px] md:mt-0 mt-8 justify-center md:justify-start">
                <Link>
                    <TwitterOutlined className="text-paragraph text-[16px]" />
                </Link>
                <Link>
                    <img src={TeleIcon} alt='ico' className="text-paragraph text-[16px]" />
                </Link>
                <Link>
                    <img src={DiscordIcon} alt='ico' className="text-paragraph text-[16px]" />
                </Link>
                <Link>
                    <YoutubeOutlined className="text-paragraph text-[16px]" />
                </Link>
                <Link>
                    <GithubOutlined className="text-paragraph text-[16px]" />
                </Link>
                <Link>
                    <LinkedinOutlined className="text-paragraph text-[16px]" />
                </Link>
                <Link>
                    <img src={Icon1} alt='ico' className="text-paragraph text-[16px]" />
                </Link>
            </Space>
            <div className="flex flex-col gap-6 md:gap-0 p-6 md:p-2 md:flex-row border-t border-t-white/10 justify-between md:items-end items-center h-full">
                <span className="text-paragraph font-interregular text-[14px] font-normal">
                    Decentral Subs © 2024. All right reserved.
                </span>
                <Space size={45}>
                    <Link to={'terms'}>
                        <span className="text-paragraph font-interregular text-[14px] font-normal">
                            Terms & Conditions
                        </span>
                    </Link>
                    <Link to={'policy'}>
                        <span className="text-paragraph font-interregular text-[14px] font-normal">
                            Privacy Policy
                        </span>
                    </Link>
                    <Link to={'legal'}>
                        <span className="text-paragraph font-interregular text-[14px] font-normal">
                            Legal Notice
                        </span>
                    </Link>
                </Space>
            </div>
        </div>
    )
}

export default FooterContent;