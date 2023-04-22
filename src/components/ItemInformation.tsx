import React from 'react';
import { Restaurant } from '../utils/interfaces';
import '../styles/ItemInformation.css';
import { CATEGORY_IMAGE_PATH } from '../utils/constants';
import ItemWrapper from './DetailItem';

interface Props {
  restaurant: Restaurant;
  closeEvent: () => void;
}

const ItemInformation: React.FC<Props> = (props) => {

    const { category, name, description, link, distance } = props.restaurant;
    return (
      <div className="modal-container">
        <div className="detail-item restaurant__category">
          <img src={CATEGORY_IMAGE_PATH[category]} className="category-icon modal-detail-restaurant__image" />
        </div>

        <ItemWrapper class={'detail-item'}>
          <h3 className="restaurant__name  modal-detail-restaurant__name text-subtitle">{name}</h3>
        </ItemWrapper>

        <ItemWrapper class={'detail-item'}>
          <span className="restaurant__distance modal-detail-restaurant__distance text-body">
            캠퍼스부터 {distance}분 내
          </span>
        </ItemWrapper>

        {description && (
          <ItemWrapper class={'detail-item'}>
            <p className="modal-detail-restaurant__description text-body">{description}</p>
          </ItemWrapper>
        )}

        {link && (
          <ItemWrapper class={'detail-item'}>
            <a className="modal-detail-restaurant__link">{link}</a>
          </ItemWrapper>
        )}

        <div className="button-container detail-button-container">
          <button
            type="button"
            className="button button--close button--primary text-caption"
            onClick={props.closeEvent}
          >
            닫기
          </button>
        </div>
      </div>
    );
}

export default ItemInformation;
