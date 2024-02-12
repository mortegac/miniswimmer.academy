import { SliceFactory } from "../../../../common/Containers";
import { Description, Content, ItemsContainer } from "./defaultStyles";
import { RichText } from "prismic-reactjs";


const Base = (props) => {

  const { title } = props.primary;

  return (
    <Content>
      <Description>
      {title[0]?.text ? RichText.render(title) : <h2>Staff Metrics</h2>}
      </Description>
      <ItemsContainer>
      {Array.isArray(props.items)
        ? props.items.map((box, index) => {
          return index <= 3 ? (
            <li
              className="item"
              key={`box-item-${index}`}
            >
              <h3>{box.contenttext}</h3>
              <h4>{box.subtitle}</h4>
            </li>
          ) : null;
        })
        : null}
    </ItemsContainer>
    </Content>
  );
};

export const Default = SliceFactory(Base);