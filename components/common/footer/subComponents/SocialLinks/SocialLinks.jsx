import PropTypes from 'prop-types'
import { SocialLinksContainer } from './SocialLinksStyles';
import { LogoInstagram, LogoFacebook, LogoSpotify } from '../../../../Logos'


const SocialLinks = ({ socialTitle = "", socialUrl = [] }) => {
	return (
		<SocialLinksContainer>
			<h3>{socialTitle}</h3>
			<ul>
				<li>
					{/* <a href={"https://www.instagram.com/_electromove/"}>
						<LogoInstagram bgColor={"white"} />
					</a> */}
				</li>
				{/* <li>
					<a href={"https://www.facebook.com/electromove.org"}>
						<LogoFacebook bgColor={"white"} />
					</a>
				</li>
				<li>
					<a href={"https://open.spotify.com/show/3flGSwlSGEDEsvrqjLc5mB"}>
						<LogoSpotify bgColor={"white"} />
					</a>
				</li> */}
			</ul>

		</SocialLinksContainer>
	)
}

SocialLinks.propTypes = {
	socialTitle: PropTypes.string,
	socialUrl: PropTypes.array
};

SocialLinks.defaultProps = {
	socialTitle: "Follow us",
	socialUrl: [
		{ url: "#" },
		{ url: "#" },
		{ url: "#" },
	]
};


export default SocialLinks