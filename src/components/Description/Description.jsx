import style from "./Description.module.css";
const Description = ({ message }) => {
  return (
    <div className={style.wrapper}>
      <h1>Sip Happens Café</h1>
      <p>{message}</p>
    </div>
  );
};

export default Description;