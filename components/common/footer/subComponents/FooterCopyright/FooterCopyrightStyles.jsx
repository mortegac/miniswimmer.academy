import styled from 'styled-components'

export const FooterCopyrightContainer = styled.div`
	// width: 100%;
	display: flex;
    flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
    font-family: ${(props) => props.theme.typography.fontFamily};
    p {
        font-weight: normal;
        font-size: 14px;
        line-height: 20px;
        margin: 48px 0 0;
        color: white;
    }
`
