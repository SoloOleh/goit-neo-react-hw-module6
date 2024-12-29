import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import css from "./Contact.module.css";

export default function Contact({ data: { id, name, number } }) {
  const dispatch = useDispatch();

  return (
    <div className={css.contact}>
      <div className={css.wrapper}>
        <p className={css.name}>
          <span className={css.icon}>👤</span>
          {name}
        </p>
        <p className={css.number}>
          <span className={css.icon}>📞</span>
          {number}
        </p>
      </div>
      <button className={css.btn} onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </div>
  );
}
