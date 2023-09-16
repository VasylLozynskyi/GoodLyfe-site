import { socialLinks } from "data/infoCompany/socialLinks";
import "./socialassetsblock.scss"

export const SocialAssetsBlock = ({ data }) => {
  return (
    <div className="container socialassetsblock">
      <h2>{data.title}</h2>
      <div className="flex-block social-links">
        {socialLinks.map((el) => (
            <a href={el.url}>
              <img src={el.icon.src} alt={el.icon.alt} />
            </a>
        ))}
      </div>
    </div>
  );
};
