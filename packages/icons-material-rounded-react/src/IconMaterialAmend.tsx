import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAmend = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Amend'

      short_name='Amend'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-320h320q17 0 28.5-11.5T680-360q0-17-11.5-28.5T640-400H320q-17 0-28.5 11.5T280-360q0 17 11.5 28.5T320-320Zm63-220q20-19 45-29.5t52-10.5q40 0 73 22t50 58q5 11 16.5 15t22.5-1q12-5 17-16t-1-22q-26-52-73.5-84T480-640q-39 0-75.5 15T340-582v-28q0-13-8.5-21.5T310-640q-13 0-21.5 8.5T280-610v100q0 13 8.5 21.5T310-480h100q13 0 21.5-8.5T440-510q0-13-8.5-21.5T410-540h-27Zm97 460q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
    </Icon>
  );
});

IconMaterialAmend.displayName = 'OnesyIconMaterialAmend';

export default IconMaterialAmend;
