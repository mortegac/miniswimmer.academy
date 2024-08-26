import Link from "next/link";
import { motion } from "framer-motion";

import { linkResolver } from "../../../prismicio";
const LinkPage = (data, pagename) => {
    const dataMenu = {
        _meta: {
            type: data.type,
            lang: data.lang,
            uid: data.uid,
            url: data.uid,
        },
    };
    return (
        <>
            <Link
                key={`top-nav-${data.id}`}
                href={data.url === "" ? `/${linkResolver(dataMenu)}` : data.uid}
                // href={data.url === "" ? `/${linkResolver(dataMenu)}` : data.uid}
                passHref
                prefetch
            >
                <a id={data.id} className={data.uid === pagename ? "selected" : ""}>
                    <motion.li className="nav-item" animate>
                        {data.text}
                        <div className="underline"></div>
                    </motion.li>
                </a>
            </Link>
        </>
    );
};

export const LinkLogo = () => (
    <Link
        href={`/`}
        passHref
    >
        <a>
            <picture>
                <source srcSet={"logo.png"} media="(max-width: 500px)" />
                <source srcSet={"logo.png"} media="(max-width: 960px)" />
                <img src={"logo.png"} alt="Miniswimmer Academy" />
            </picture>
        </a>
    </Link>
);


const validNavbarLink = menuLink => {
    const { label, link } = menuLink;
    if (
        link.link_type === "Document" &&
        link.uid !== "" &&
        label[0].text !== ""
    ) {
        return true;
    } else if (
        (link.link_type === "Web" || link.type === "Media") &&
        link.url !== "" &&
        label[0].text !== ""
    ) {
        return true;
    } else {
        return false;
    }
};

export const renderedMenuLinks = (menuLinks, pageName) => Array.isArray(menuLinks)
    ? menuLinks.map((menuLink, index) => {
        const { label, link } = menuLink;
        if (validNavbarLink(menuLink)) {
            return (
                <>
                
                    <LinkPage
                        pageName={pageName}
                        key={index + "_menu_links"}
                        uid={link?.uid || ""}
                        lang={link?.lang || ""}
                        type={link?.type || ""}
                        text={label || "-"}
                        id={link?.id || "#"}
                        slug={link?.slug || "#"}
                        url={link?.url || ""}
                    />
                </>
            );
        }
    })
    : "";