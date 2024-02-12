import styled from 'styled-components'

export const SocialLinksContainer = styled.div`
width: 25%;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
font-family: ${(props) => props.theme.typography.fontFamily};
h3 {
    
    line-height:  ${(props) => props.theme.typography.h3.desktop.lineHeight};
    font-size: ${(props) => props.theme.typography.h3.desktop.fontSize};
    font-weight:${(props) => props.theme.typography.h3.desktop.fontWeight};
    color: ${(props) => props.theme.colors.white};
    letter-spacing: .4px;
    text-transform: uppercase;
    margin: 0;
    margin-bottom: 24px;
    @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
        width: 200%;
        margin-top: 24px;
        margin-bottom: 16px;
        line-height:  ${(props) => props.theme.typography.h3.mobile.lineHeight};
        font-size: ${(props) => props.theme.typography.h3.mobile.fontSize};
        font-weight:${(props) => props.theme.typography.h3.mobile.fontWeight};
    }
}
    ul {
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        li {
            list-style: none;
            width: 50px;
            display: flex;
            flex-direction: row;
            align-items; center;
            justify-content: flex-start;
            transition: all .3s ease;
            transform: scale(1);
    
            &:hover {
                transform: scale(1.1);
                }
            &:not(:last-child){
                margin-right: 20px;
            }
            a {
                text-decoration: none;
                font-size: 16px;
                font-weight: 400;
                line-height: 24px;
            }
        }
}
`