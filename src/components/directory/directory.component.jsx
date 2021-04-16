import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import MenuItem from '../menu-item/menu-item.component'

import './directory.styles.scss';

// we will make this a class because we need the STATE
const Directory = ({ sections }) => (
  <div className='directory-menu'>
      {
          sections.map(({ id, ...otherSectionProps }) => (
              <MenuItem key={ id } { ...otherSectionProps } />
          ))
      }
  </div>
)

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory); 