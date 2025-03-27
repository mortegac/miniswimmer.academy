import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { PrismicRichText } from "@prismicio/react";
import { RichText } from "prismic-reactjs";

import { createClient } from "../../prismicio"
import { LayoutBlog } from "../../components/common/LayoutBlog"
import { Description, Content, Button, ItemsWrapper, Item, Header, Box } from "../../styles/blog/defaultStyles";
import { SliceFactory } from "../../components/common/Containers";

export default function Blog({ posts, menu, footer }) {

  // Removemos la desestructuración de posts que causaba el error
  const activeDoc = {
    lang: 'es-es', // o el idioma que corresponda
    type: 'blog',
    url: '/blog',
    sitename: process.env.NEXT_PUBLIC_SITENAME || "http://localhost",
  };
  
  return (
    <LayoutBlog
      header={menu || {}}
      footer={footer || {}}
      page={posts}
      activeDocMeta={activeDoc}
    >
       <Content>
       <Description>
        
       
      {/* <div className="container mx-auto px-4"> */}
        {/* <h1 className="text-4xl font-bold mb-8">Miniswimmer: Nadando Hacia el Desarrollo Integral</h1> */}
        <h1 className="text-3xl font-bold" style={{marginBottom: 0}}>Más Allá del Agua:
        </h1>
        <h3 style={{marginTop: "24px",marginBottom: "64px"}}>Estimulación Temprana y Desarrollo Infantil. La natación como herramienta transformadora para el crecimiento de tu hijo
        </h3>
        <p>En Miniswimmer creemos que aprender a nadar va más allá de dominar un estilo o mantenerse a flote. <b style={{ backgroundColor: "#ffdffe", padding: "0 5px 0 5px"}}>Nuestro blog es un espacio dedicado a compartir conocimientos</b> especializados sobre el desarrollo infantil, seguridad acuática y técnicas innovadoras de enseñanza como programación neurolingüística, coaching, matronatación que transforman la experiencia de aprendizaje de niños y bebés.</p>
        <p><b>Nuestro objetivo es empoderar</b> a padres, educadores y cuidadores con información científica, práctica y transformadora para criar niños seguros, autónomos y felices en el agua.</p>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> */}
          {/* <pre>{JSON.stringify(posts, null, 2 )}</pre> */}
          
          <ItemsWrapper>
            {/* <pre style={{text:"red", width:"200px"}}>{JSON.stringify(posts, null, 2)}</pre> */}
            {Array.isArray(posts) && posts.map((post) => (
              
              // <article key={post.id} className="border rounded-lg p-4">
              <Item key={post.id} >
            {/* <pre style={{text:"red", width:"200px", textAlign:"left"}}>{JSON.stringify(post, null, 2)}</pre> */}
                
                <Link href={`/blog/${post.uid}`}>
                <Header>
                  {/* {post.cardImage && (
                    <div className="image">
                      <img
                        src={post.cardImage.url}
                        alt={post.cardImage.alt || "item-image"}
                      />
                    </div>
                    )} */}
                    <div className="image">
                      <Image
                        src={post?.data?.image?.url}
                        alt="Miniswimmer Academy"
                        // width={500} automatically provided
                        // height={500} automatically provided
                        // blurDataURL="data:..." automatically provided
                        // placeholder="blur" // Optional blur-up while loading
                      />
                      {/* <img src={post?.data?.image?.url}
                        // src={"https://somoswoko.com/wp-content/uploads/2025/03/Peak-End-Rule.png"}
                        alt={"item-image"}
                        /> */}
                    </div>
                    <h3>{post?.data?.title}</h3>
                  {/* {post?.data?.title && <PrismicRichText field={post?.data?.title} />} */}
                  <Box>
                    {post?.data?.shortdescription && <PrismicRichText field={post?.data?.shortdescription} />}
                  </Box>
                  <Button>leer más</Button>
                </Header>
                  {/* <a>
                    <h2 className="">
                      {post?.data?.title}
                    </h2>
                    <p className="">
                      {post?.data?.shortdescription[0]?.text}
                      
                    </p>
                  </a> */}
                </Link>
                </Item>
              
            ))}
            
          </ItemsWrapper>
        {/* </div>
      </div> */}
      </Description>
      </Content>
    </LayoutBlog>
  )
}

// export async function getStaticProps({
//     previewData,
//     params: { uid }, }) {
        
export const getStaticProps = async ({ previewData }) => {
  try {
    const client = createClient({ previewData })
    
    const [posts, menu, footer] = await Promise.all([
      client.getAllByType('blog', {
        orderings: {
          field: 'document.first_publication_date',
          direction: 'desc',
        },
      }),
      client.getSingle("menutop"),
      client.getSingle("footermenu")
    ])

    return {
      props: {
        posts,
        menu,
        footer,
        // uid,
      },
      revalidate: 60, // Revalidar cada minuto
    }
  } catch (error) {
    console.error('Error en getStaticProps:', error)
    return {
      props: {
        posts: [],
        menu: {},
        footer: {},
        error: 'Error loading data'
      }
    }
  }
} 


// export const Blog = SliceFactory(Base, {
//   sectionContainerProps: {
//     style: {
//       // backgroundImage: "linear-gradient(188deg, #F3FDEC, #88E73F 65% )"
//       backgroundImage: "linear-gradient(180deg, #AE5EAB 0%, #AE5EAB 58%, #7E397C 100%)"
//     }
//   }
// });