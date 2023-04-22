import React, { useRef } from 'react';
import { Restaurant } from '../utils/interfaces';
import '../styles/Item.css';
import { CATEGORY_IMAGE_PATH } from '../utils/constants';
import useModal from '../hook/useModal';
import ModalPortal from './ModalPortal';
import ItemInformation from './ItemInformation';

interface Props {
  restaurantItem: Restaurant;
}

const Item: React.FC<Props> = props => {
  const { category, name, distance, description, id } = props.restaurantItem;
  const modalRef = useRef<HTMLDialogElement>(null);
  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <>
      <li className="restaurant" data-id={id} onClick={openModal}>
        <div className="restaurant_info">
          <div className="restaurant__category">
            <img src={CATEGORY_IMAGE_PATH[category]} alt={category} className="category-icon" />
          </div>
          <div className="restaurant__info">
            <h3 className="restaurant__name text-subtitle">{name}</h3>
            <span className="restaurant__distance text-body">캠퍼스로부터 {distance}분 내</span>
            <p className="restaurant__description text-body">{description}</p>
          </div>
        </div>
      </li>
      {isModalOpen && (
        <ModalPortal closeEvent={closeModal} dialogRef={modalRef}>
          <ItemInformation restaurant={props.restaurantItem} closeEvent={closeModal} />
        </ModalPortal>
      )}
    </>
  );
};

export default Item;
