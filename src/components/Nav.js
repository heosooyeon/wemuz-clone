import styled from "styled-components";
import logoImg from "../static/assets/wemuz.png";

/**
 * 네비게이션 텝 텍스트 폰트 사이즈: 16px
 * 네비게이션 텝 텍스트 폰트 굵기: 600
 */

function Nav() {
    return(
        <Block>
            <Logo src={logoImg}></Logo>
            <NavTabs>
                <NavBtn>공지사항</NavBtn>
                <NavBtn>문의사항</NavBtn>
                <NavBtn>프로젝트</NavBtn>
                <LoginBtn>로그인</LoginBtn>
            </NavTabs>
        </Block>
    );
}

const Block = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    background-color: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(30px);
    -webkit-backdrop-filter: blur(30px);
    box-shadow: 0 6px 14px rgb(0 0 0 / 15%);
    z-index: 100;
    
`;

const Logo = styled.img`
    position:fixed;
    top: 17px;
    left: 35px;
    width: 130px;
    object-fit: contain;
    &:hover{
        cursor:pointer;
    }
`;

const NavTabs = styled.div`
    display:flex;
    justify-content:flex-end;
    padding-top:15px;
    padding-right: 20px;
`;

const NavBtn = styled.button`
    margin-right:15px;
    height: 35px;
    color: white;
    background-color:transparent;
    border:0px;
    outline:opx;
    font-size:20px;
    font-weight:600;
    text-transform:uppercase;
    &:hover{
        cursor:pointer;
        color: #785FFA;
        transition-duration :0.5s;
    }
    &:after {
        display:block;
        content: '';
        border-bottom: solid 3px #785FFA;  
        transform: scaleX(0);  
        transition: transform 250ms ease-in-out;
        transition-duration :0.5s;
      }
      &:hover:after { transform: scaleX(1); }
}
`;

const LoginBtn = styled.button`
    height: 30px;
    width:80px;
    background-color: #785FFA;
    color:white;
    border-radius:5px;
    border:0px;
    outline:opx;
    font-size:16px;
    font-weight:600;
    &:hover{
        background-color:white;
        color:black;
        cursor:pointer;
        transition-duration :0.5s;
    }
`;
export default Nav;
