import "./temppopup.scss"

export const TempPopUp = ({ getShowPopUp }) => {
  return (
    <div className="popup_container">
      <div className="popup_block">
        <h3>block in progress</h3>
        <div className="closeBtn" onClick={() => getShowPopUp(false)}>X</div>
      </div>
    </div>
  )
}