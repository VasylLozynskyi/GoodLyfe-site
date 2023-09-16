import { users } from "data/usersData/Users/users";
import "./realstoriesblock.scss";
import { CardUser } from "./components/CardUser";
import icon from "assets/icons/Real stories copy.png"

export const RealStoriesBlock = ({ data}) => {
  const iconData = {src: icon, alt: 'icon " '}
  return (
    <div className="container realstoriesBlock">
      <div className="_title">
        <h2>{data.title}</h2>
        <p>{data.subTitle}</p>
      </div>
      {users.sort(() => 0.5 - Math.random()).slice(0, 3).map(el => <CardUser key={el.id} data={el} icon={iconData} />)}
    </div>
  );
};
