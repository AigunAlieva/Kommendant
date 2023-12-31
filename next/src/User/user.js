import { BsGrid } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { BiHome } from "react-icons/bi";
import { BiLineChart } from "react-icons/bi";
import { BsFileEarmarkText } from "react-icons/bs";
import { CiHeadphones } from "react-icons/ci";
import { RxExit } from "react-icons/rx";
import { Link } from "react-router-dom";
import "./user.css";
import React from "react";
const User = () => {
  return (
    <div className="main">
      <div className="header">
      <svg className="svg_first" width="24" height="31" viewBox="0 0 24 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.6759 16.2681H10.2898C10.0209 16.2681 9.80281 16.4906 9.80281 16.765V18.0639C9.80281 18.3383 10.0209 18.5607 10.2898 18.5607H11.6759C11.9448 18.5607 12.1629 18.3383 12.1629 18.0639V16.765C12.1629 16.4906 11.9448 16.2681 11.6759 16.2681Z" fill="#FFCF00"/>
            <path d="M14.4841 16.2681H13.098C12.829 16.2681 12.611 16.4906 12.611 16.765V18.0639C12.611 18.3383 12.829 18.5607 13.098 18.5607H14.4841C14.753 18.5607 14.9711 18.3383 14.9711 18.0639V16.765C14.9711 16.4906 14.753 16.2681 14.4841 16.2681Z" fill="#FFCF00"/>
            <path d="M11.6759 18.9017H10.2898C10.0209 18.9017 9.80281 19.1242 9.80281 19.3986V20.6974C9.80281 20.9718 10.0209 21.1943 10.2898 21.1943H11.6759C11.9448 21.1943 12.1629 20.9718 12.1629 20.6974V19.3986C12.1629 19.1242 11.9448 18.9017 11.6759 18.9017Z" fill="#FFCF00"/>
            <path d="M14.4841 18.9017H13.098C12.829 18.9017 12.611 19.1242 12.611 19.3986V20.6974C12.611 20.9718 12.829 21.1943 13.098 21.1943H14.4841C14.753 21.1943 14.9711 20.9718 14.9711 20.6974V19.3986C14.9711 19.1242 14.753 18.9017 14.4841 18.9017Z" fill="#FFCF00"/>
            <path d="M23.9114 11.6338C23.9586 9.69074 23.4799 7.75049 22.5291 6.02373C21.5541 4.25352 20.1236 2.76385 18.3922 1.71533C16.6359 0.651687 14.5897 0.0688574 12.4713 0.0272942L12.4461 0.0263496L12.3259 0.025405L12.2377 0.0253906L12.1815 0.0263496C10.0556 0.0679128 8.00668 0.645075 6.25307 1.69832C4.51983 2.73929 3.10231 4.21384 2.15421 5.96327C0.354305 9.28266 0.466337 13.1924 2.45234 16.4221L10.1121 28.8788C10.6019 29.6751 11.4658 30.1502 12.4231 30.1502C13.3777 30.1502 14.2397 29.677 14.7295 28.8854L20.4375 19.8652C21.2319 18.6089 21.0838 16.9681 20.0755 15.8761L15.1665 10.5541C13.9591 9.24488 11.8917 9.14097 10.5593 10.3227L6.91414 13.5542L5.86513 14.4686C5.66143 14.6462 5.53829 14.8937 5.517 15.1657C5.4957 15.4378 5.57996 15.7023 5.75402 15.9101C6.10308 16.3267 6.71508 16.3862 7.14006 16.0527L7.14191 16.0546L11.8713 11.8624C12.4046 11.3901 13.2296 11.4298 13.711 11.9522L18.6191 17.2741C19.0015 17.6888 19.057 18.2849 18.757 18.7591L13.0462 27.7849L13.0397 27.7953C12.9185 27.9927 12.6879 28.1108 12.4231 28.1108C12.1583 28.1108 11.9278 27.9927 11.8065 27.7953L4.14577 15.3386C2.52826 12.7078 2.43938 9.65106 3.90319 6.95134C4.67908 5.52119 5.84198 4.31303 7.2669 3.4572C8.75571 2.56359 10.5047 2.08184 12.325 2.06578C14.136 2.08184 15.8813 2.56737 17.3719 3.46948C18.8024 4.3357 19.9829 5.5637 20.7856 7.02219C21.5356 8.38339 21.9365 10.0044 21.918 11.5913V11.6867C21.9171 12.1279 22.2689 12.4859 22.7003 12.4859H23.129C23.5633 12.4859 23.917 12.1279 23.916 11.6829L23.9114 11.6319V11.6338Z" fill="#FFCF00"/>
            </svg>
            <header>Kommendant</header>
            </div>
<div className="sidebar">

        <div className="minisidebar">
            <BsGrid className="icons"/>
          <Link to="/">
            <h2>Əsas səhifə</h2>
          </Link>
        </div>
        <div className="minisidebar">
            <BsFileEarmarkText className="icons"/>
          <Link to="/">
            <h2>Tapşırıqlar</h2>
          </Link>
        </div>
        <div className="minisidebar">
            <FiUsers className="icons"/>
          <Link to="/">
            <h2>Agentlər</h2>
          </Link>
        </div>
        <div className="minisidebar">
            <BiHome className="icons"/>
          <Link to="/">
            <h2>Məhəllələr</h2>
          </Link>
        </div>
        <div className="minisidebar">
            <BiLineChart className="icons"/>
          <Link to="/">
            <h2>Biznes planlar</h2>
          </Link>
        </div>
        
        <div className="minisidebar2">
            <CiHeadphones className="icons"/>
          <Link to="/">
            <h2>Dəstək</h2>
          </Link>
        </div>
        <div className="minisidebar3">
            <RxExit className="icons" color="red" />
          <Link to="/">
            <h2 className="last">Çıxış</h2>
          </Link>
        </div>


        </div>
      </div>

  );
};

export default User;