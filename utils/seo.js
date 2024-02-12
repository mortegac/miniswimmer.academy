import { linkResolver } from "../prismicio";

export const getAlternates = ({ alternate_languages, sitename }) => {

    return alternate_languages.map((page, i) => (
        <link
            key={i}
            hrefLang={page.lang}
            rel="alternate"
            href={`${sitename}${linkResolver(page)}/`}
        />
    ))
}


// Open Graph tags
export const getMetaTags = ({ description, author, title }) => [
    {
        name: `description`,
        content: description || dummy(""),
    },
    {
        name: `twitter:card`,
        content: `summary`,
    },
    {
        name: `twitter:creator`,
        content: "@miniswimmer",
    },
    {
        name: `twitter:title`,
        content: title || dummy(""),
    },
    {
        name: `twitter:description`,
        content: description || dummy(""),
    },
    {
        property: `og:title`,
        content: title || dummy(""),
    },
    {
        property: `og:description`,
        content: description || dummy(""),
    },
    {
        property: `og:url`,
        content: "https://miniswimmer.academy",
    },
    {
        property: `og:type`,
        content: `website`,
    },
    {
        name: `og:image`,
        content: "https://images.prismic.io/miniswimmer-academy/3c4a5175-5a14-432c-8fb0-7b9916454a7d_SOCIAL-MEDIA.png",
    },
    {
        name: `og:image:alt`,
        content: "miniswimmer.academy",
    },
    {
        name: `og:image:width`,
        content: "1200",
    },
    {
        name: `og:image:height`,
        content: "630",
    },
    {
        name: `og:site_name`,
        content: "Miniswimmer-Academy",
    },
    {
        name: `viewport`,
        content: "width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1",
    },
    /** TODO: Crear keywords de la academia*/
    {
        name: `keywords`,
        content: "academy, Become a Miniswimmer Instructor, swimming instructor",
    },
].map((items, i) => (
    <meta key={`meta-${i}`} {...items}></meta>
))



export const dummy = (content = "") => [
    {
        text: content,
        type: "heading 1",
        spans: []
    },
];


export const getTitle = ({ type, title }) => title.replace(/['"]+/g, '')