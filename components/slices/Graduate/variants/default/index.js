import { RichText } from "prismic-reactjs";
import Image from 'next/image'
import { SliceFactory } from "../../../../common/Containers";
import {
  Description,
  Content,
  ListContainer,
  TextContainer,
  TextCourses,
  DataContainer,
  ItemsContainer

} from "../default/defaultStyles";

import { generateHtml } from "../../../../../utils/htmlSerializer";

const typeOfFlag = {
  ["CHILE"]: "🇨🇱",
  ["PANAMA"]: "🇵🇦",
  ["ESTADOS UNIDOS"]: "🇺🇸",
  ["COLOMBIA"]: "🇨🇴",
  ["ARGENTINA"]: "🇦🇷",
};



const Base = (props) => {
  const { title } = props.primary;

  return (
    <Content>
      {title[0]?.text && RichText.render(title)}
      <Description>
        <ItemsContainer>
          {Array.isArray(props.items)
            ? props.items.map((box, index) => {
              const TypeOfFlag = typeOfFlag[box.country] || "";
              return (
                <li className="item" key={`box-item-${index}`}>
                  <ListContainer>
                    {/* <img src={box?.image?.url || "-"} alt="" /> */}
                    
                    <Image
                    src={box?.image?.url}
                    alt={"Nuestros Alumnos certificados en Miniswimmer Academy"}
                    width={120}    // Ancho específico
                    height={120}   // Alto específico
                    objectFit="cover"
                  />
                  
                {/* <Image
                  src={box?.image?.url || "-"}
                  alt="Alumno certificado Miniswimmer Academy"
                  // width={500} automatically provided
                  // height={500} automatically provided
                  // blurDataURL="data:..." automatically provided
                  // placeholder="blur" // Optional blur-up while loading
                  /> */}
                    <DataContainer>
                      <TextContainer>
                        <p className="flag">{TypeOfFlag}</p>
                        <h3>{box.name && RichText.render(box.name)}</h3>
                        <TextCourses>
                          <div id="htmlContainer">
                            {generateHtml(box.courses)}
                          </div>
                      </TextCourses>
                      </TextContainer>
                    </DataContainer>
                  </ListContainer>
                </li>
              ) 
            })
            : null}
        </ItemsContainer>


      </Description>
    </Content>
  );
};

export const Default = SliceFactory(Base, {
  sectionContainerProps: {
    style: {
      backgroundColor: "white",
    }
  }
});

