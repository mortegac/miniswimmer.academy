import { RichText } from "prismic-reactjs";
import Link from "next/link";
import { PrismicRichText } from "@prismicio/react";
import { SliceFactory } from "../../../../common/Containers";
import {
  Description,
  Content,
  ListContainer,
  TextContainer,
  TextCourses,
  DataContainer,
  ItemsContainer,
  ItemsWrapper, Item, Header, Box,
  Button,
  Card, CardImage, CardContent
} from "./defaultStyles";


const Base = (props) => {
  const { items } = props.primary;

  return (
    <Content>
      {/* {title[0]?.text && RichText.render(title)} */}
      <Description>
      {/* <pre>{JSON.stringify(props?.primary.tittle, null, 2) }</pre> */}
      
      <div>{props?.primary?.tittle && <PrismicRichText field={props?.primary?.tittle} />}</div>
      <div>{props?.primary?.description && <PrismicRichText field={props?.primary?.description} />}</div>
      
      <ItemsWrapper>
            {/* <pre style={{text:"red", width:"200px"}}>{JSON.stringify(posts, null, 2)}</pre> */}
            {Array.isArray(props?.items) && props?.items.map((post) => (
              <>
            {/* <pre style={{text:"red", width:"200px", textAlign:"left"}}>{JSON.stringify(post?.link?.uid, null, 2)}</pre> */}
            <Card>
              <CardImage>
                <div className="image">
                  <img 
                    src={post?.shortimage?.url}
                      alt={"item-image"}
                      />
                </div>
              </CardImage> 
              <CardContent>
                <h3>{post?.tittle}</h3>
                <div>{post?.shortcontent && <PrismicRichText field={post?.shortcontent} />}</div>
                <Link href={post?.link?.uid}>
                  <Button>Leer más</Button>
                </Link>
              </CardContent>
            </Card>
               
              </>
            ))}
            
          </ItemsWrapper>
          
        {/* <ItemsContainer>
         
          {Array.isArray(props.items)
            ? props.items.map((box, index) => {
              
              return (
                <pre>{JSON.stringify(box, null, 2) }</pre>
                // <p className="item" key={`label-item-${index}`}>{box?.label}</p>
                
              ) 
            })
            : null}
        </ItemsContainer> */}


      </Description>
    </Content>
  );
};


 {/* <Link href={`/blog/${post.uid}`}> */}
              // <Item key={post.id} >
              //   <Header>
                  
              //       <div className="image">
              //         <img 
              //         src={post?.shortimage?.url}
              //           alt={"item-image"}
              //           />
              //       </div>
              //       <h3>{post?.tittle}</h3>
              //     <Box>
              //     <pre style={{text:"red", width:"200px", textAlign:"left"}}>{JSON.stringify(post?.shortcontent, null, 2)}</pre>
              //       {post?.shortcontent && <PrismicRichText field={post?.shortcontent} />}
              //     </Box>
              //     <Button>leer más</Button>
              //   </Header>
              //   </Item>

export const Default = SliceFactory(Base, {
  sectionContainerProps: {
    style: {
      backgroundColor: "white",
    }
  }
});

