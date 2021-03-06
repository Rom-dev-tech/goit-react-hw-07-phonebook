import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Loader from 'react-loader-spinner';
import { contactsOparations, contactsSelectors } from 'redux/phonebook';
import ContactsFomr from 'components/ContactsFomr';
import ContactsList from 'components/ContactsList';
import Clock from 'components/Clock';
import MainTitle from 'components/MainTitle';
import Сounter from 'components/Сounter';
import Modal from 'components/Modal';
import IconButton from 'components/IconButton';
import { ReactComponent as AddIcon } from 'icons/add.svg';
import FlexWrapper from 'components/FlexWrapper';

const PhoneBookView = () => {
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();

  const isLoading = useSelector(contactsSelectors.getLoading);

  useEffect(() => {
    dispatch(contactsOparations.fetchContacts());
  }, [dispatch]);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <Clock direction="end" size={30} />
      <MainTitle title="Phonebook" size={5} direction="center" />

      <FlexWrapper>
        <Сounter title="Total contacts:" />

        <IconButton onClick={toggleModal} aria-label="add contact">
          <AddIcon width="20" height="20" fill="#03a9f4" />
        </IconButton>
      </FlexWrapper>

      {showModal && (
        <Modal onClose={toggleModal}>
          <ContactsFomr onClose={toggleModal} />
        </Modal>
      )}

      {isLoading ? (
        <Loader
          style={{ textAlign: 'center' }}
          type="ThreeDots"
          color="#303f9f"
        />
      ) : (
        <ContactsList />
      )}
    </>
  );
};

export default PhoneBookView;
