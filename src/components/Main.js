import styled from "styled-components";

import bgImg from "../static/assets/main_bg.png";

/**
 * 메인 텍스트 폰트 사이즈: 54px
 * 메인 텍스트 폰트 굵기: 600
 */

function Main() {
    return (
    <Block>
        <MainText>음악,<br></br>함께할 누군가가 필요할 때</MainText>
    </Block>
    );
}

const Block = styled.main`
    width: 100%;
    height: 100%;
    background-image: url(${bgImg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
`;

const MainText = styled.div`
    padding-left:250px;
    padding-top: 300px;
    line-height: 75px;
    font-size:54px;
    font-weight:600;
    color:white;
`;

export default Main;
