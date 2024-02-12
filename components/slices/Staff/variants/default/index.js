import { SliceFactory } from "../../../../common/Containers";
import {
  Description,
  Content,
  ListContainer,
  TextContainer,
  DataContainer,
  ItemsContainer

} from "../default/defaultStyles";
import { RichText } from "prismic-reactjs";

const Base = (props) => {
  const { title } = props.primary;

  return (
    <Content>
      {title[0]?.text && RichText.render(title)}
      <Description>

        <ItemsContainer>
          {Array.isArray(props.items)
            ? props.items.map((box, index) => {
              return index <= 10 ? (
                <li className="item" key={`box-item-${index}`}>
                  <ListContainer>
                    <img src={box?.image?.url || "-"} alt="" />
                    <DataContainer>
                      <a href={box.profileurl.url} target="_blank">
                        <img src={box?.linkedinlogo?.url || "-"} alt="" />
                      </a>
                      <TextContainer>
                        <h3>{box.nametitle}</h3>
                        <p>{box.positiontitle}</p>
                      </TextContainer>
                    </DataContainer>
                  </ListContainer>
                </li>
              ) : null;
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

