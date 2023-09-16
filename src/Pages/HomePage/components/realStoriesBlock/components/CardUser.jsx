import "./carduser.scss"

export const CardUser = ({ data, icon }) => {
  return (
    <div className="card_box">
      <h4>{data.title}</h4>
      <img className="clipart" src={icon.src} alt={icon.alt} />
      <p>{data.text}</p>
      <section className="flex-block">
        <img className="icon-photo" src={data.icon.src} alt={data.icon.alt} />
        <title>
          <h6>{data.name}</h6>
          <p>{data.userInfo}</p>
        </title>
      </section>
    </div>
  )
}