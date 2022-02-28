import React from 'react'
import { Link } from 'react-router-dom'
import Grid from './Grid'
import logo from '../assets/images/Logo-2.png'


const footerAboutLinks = [
    {
        name: "Giới thiệu",
        path: "/about"
    },
    {
        name: "Liên hệ",
        path: "/about"
    },
    {
        name: "Tuyển dụng",
        path: "/about"
    },
    {
        name: "Tin tức",
        path: "/about"
    },
    {
        name: "Hệ thống cửa hàng",
        path: "/about"
    }
]
const footerCustomerLinks = [
    {
        name: "Chính sách đổi trả",
        path: "/about"
    },
    {
        name: "Chính sách bảo hành",
        path: "/about"
    },
    {
        name: "Chính sách hoàn tiền",
        path: "/about"
    }
]
const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <Grid
                    col={4}
                    mdCol={2}
                    smCol={1}
                    gap={10}
                >
                    <div>
                        <div className="footer__title">
                            Tổng đài hỗ trợ
                        </div>
                        <div className="footer__content">
                            <p>
                                Liên hệ đặt hàng <strong>123213213</strong>
                            </p>
                            <p>
                                Thắc mắc đơn hàng <strong>132312</strong>
                            </p>
                            <p>
                                Góp ý, khiếu nại <strong>3213</strong>
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="footer__title">
                            Về Yolo
                        </div>
                        <div className="footer__content">
                            {
                                footerAboutLinks.map((item, index) => (
                                    <p key={index}>
                                        <Link to={item.path}>
                                            {item.display}
                                        </Link>
                                    </p>
                                ))
                            }
                        </div>
                    </div>
                    <div>
                        <div className="footer__title">
                            Chăm sóc khách hàng
                        </div>
                        <div className="footer__content">
                            {
                                footerCustomerLinks.map((item, index) => (
                                    <p key={index}>
                                        <Link to={item.path}>
                                            {item.display}
                                        </Link>
                                    </p>
                                ))
                            }
                        </div>
                    </div>
                    <div className="footer__about">
                        <p>
                            <Link to="/">
                                <img src={logo} className="footer__logo" alt="" />
                            </Link>
                        </p>
                        <p>
                            Hướng đến mục tiêu mang lại niềm vui ăn mặc mới mỗi ngày cho hàng triệu người tiêu dùng Việt. Hãy cùng Yolo hướng đến một cuộc sống năng động, tích cực hơn.
                        </p>
                    </div>
                </Grid>
            </div>
        </footer>
    )
}


export default Footer
