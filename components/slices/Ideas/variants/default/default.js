import { SliceFactory } from "../../../../common/Containers";
import { Description, Content, Button } from "../default/defaultStyles";
import { RichText } from "prismic-reactjs";
import Link from "next/link";

const Base = slice => {
  const { tittle, subtittle, buttontext, bgColorInitial, bgColorEnd, buttonlink } = slice.primary;

  return (
    <Content>
      <Description>
        {subtittle[0]?.text && RichText.render(subtittle)}
        {tittle[0]?.text && RichText.render(tittle)}
        {buttonlink.uid &&
          <Link href={buttonlink.uid}>
            <Button>
              {buttontext && buttontext}
            </Button>
          </Link>
        }
      </Description>
    </Content>
  );
};

export const Default = SliceFactory(Base, {
  sectionContainerProps: {
    style: {
      // backgroundImage: "linear-gradient(188deg, #F3FDEC, #88E73F 65% )"
      backgroundImage: "linear-gradient(180deg, #AE5EAB 0%, #AE5EAB 58%, #7E397C 100%)"
    }
  }
});
