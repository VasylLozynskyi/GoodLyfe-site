import { ButtonComponent } from "Components/Buttoncomponent/ButtonComponent"

export const LoginBtnBar = ({ data }) => {
  return (
    <>
      <ButtonComponent btnName={data.name} typeBtn={data.typeBtn} /*stylebtn is only 1, 2 or 3 type*/ />
    </>
  )
}