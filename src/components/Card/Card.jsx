import {
    Button,
    Card as CardComp,
    CardText,
    CardSubtitle,
    CardTitle,
    CardBody,
    NavLink,
  } from "reactstrap";
  
  export const Card = (props) => {
    return (
      <div>
        <CardComp
          color="primary"
          style={{
            width: "18rem",
          }}
        >
          <img alt="Sample" src={props.img }  height={200} />
          <CardBody>
            <CardTitle tag="h5">{props.title}</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              {props.subtitle}
            </CardSubtitle>
            <CardText>{props.content}</CardText>
  
            <NavLink href="https://www.youtube.com/watch?v=D5rHD41NSfA&ab_channel=Canal12Misiones">
              <Button color="dark"> Leer más... </Button>
            </NavLink>
          </CardBody>
        </CardComp>
      </div>
    );
  };