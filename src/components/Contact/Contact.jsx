import PropTypes from "prop-types";
import { toast } from 'react-toastify';
import { useDispatch } from "react-redux";
import { deleteContact } from 'redux/contacts/operations';
import { Button } from 'components/Button/Button';
import css from "./Contact.module.css";

const Contact = ({ name, number, contactID }) => {
    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch(deleteContact(contactID));
        toast.info(name + ' has been deleted from the contact list!', {icon: "🚀"});
    };
    
    return (
        <li className={css.contact__item}>
            <p>{name}: </p><p>{number}</p>
            <Button className={css.contact__btn} onClick={handleDelete}>Delete</Button>
        </li>
    );
};

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    contactID: PropTypes.string.isRequired,
};

export default Contact;