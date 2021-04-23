import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';

import { CollectionItemContainer, ImageContainer, CustomButtonContainer, 
    FooterContainer, NameContainer, PriceContainer } from './collection-item.styles.jsx';

const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;
    return (
        <CollectionItemContainer>
            <ImageContainer
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
                />
            <FooterContainer>
                <NameContainer>{name}</NameContainer>
                <PriceContainer>{price}</PriceContainer>
            </FooterContainer>
            <CustomButtonContainer inverted onClick={() => addItem(item)}>ADD TO CART</CustomButtonContainer>
        </CollectionItemContainer>
    );

}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);