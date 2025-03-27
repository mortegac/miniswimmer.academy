import { RichText } from "prismic-reactjs";

import { SliceFactory } from "../../../../common/Containers";
import {
  Description,
  Content,
  ListContainer,
  TextContainer,
  TextCourses,
  DataContainer,
  ItemsContainer

} from "./defaultStyles";

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
      {/* <pre>{JSON.stringify(props, null, 2) }</pre> */}
      {/* {title[0]?.text && RichText.render(title)} */}
      <Description>
        <ItemsContainer>
          <span>Etiquetas:</span>
          {Array.isArray(props.items)
            ? props.items.map((box, index) => {
              
              return (
                // <pre>{JSON.stringify(box, null, 2) }</pre>
                <p className="item" key={`label-item-${index}`}>{box?.label}</p>
                
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

