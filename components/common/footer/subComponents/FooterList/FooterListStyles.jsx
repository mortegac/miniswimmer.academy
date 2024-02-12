import styled from 'styled-components'

export const FooterListContainer = styled.div`
	// width: 100%;
	margin-left: 200px;
	
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	@media (max-width: ${(props) => props.theme.breakpoints.sm}) {
		margin-left: 0px;
	}
	
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
			li {
				list-style: none;
					&:hover {
						transform: scale(1.1);
						}
					&:not(:last-child){
						margin-bottom: 8px;
						margin-right: 20px;
					}
				a {
					text-decoration: none;
					font-size: 16px;
					font-weight: 400;
					line-height: 24px;
					color: white;
					transition: color .3s ease;
					&:hover {
						color: white;
					}
				}
			}
	}
`

