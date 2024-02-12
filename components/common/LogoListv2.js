import { RichText } from "prismic-reactjs";
import { ItemsContainerv2, Button } from "./LogoListStyle";
import Link from "next/link";

const LogoListv2 = props => {
  const { list } = props;
  return (
    <ItemsContainerv2>
      {Array.isArray(list)
        ? list.map((box, index) => {
          return index <= 5 ? (
            <li
              className="item"
              key={`box-item-${index}`}
            // style={{ backgroundColor: "black" }}
            >
              {console.log('>>>list  ', box)}
              <img src={box?.logoImage?.url || "-"} alt="" />
              <h4>
                {box.subtitle[0]?.text ? box.subtitle[0].text
                  : (
                    <></>
                  )}
              </h4>
              <span>
                {box.description ? box.description

                  : (
                    <></>
                  )}
              </span>
              <Link
                key={`industryButton${index}`}
                // href={calltoactionUri.url === "" ? `/${linkResolver(calltoactionUri)}` : calltoactionUri.uid}
                href={box?.buttonlink?.uid || "#"}
                // href={"contact"}
                passHref
                prefetch
              >
                <Button>
                  Seguir Leyendo
                </Button>
              </Link>
            </li>
          ) : null;
        })
        : null}
    </ItemsContainerv2>
  );
};

export default LogoListv2;
