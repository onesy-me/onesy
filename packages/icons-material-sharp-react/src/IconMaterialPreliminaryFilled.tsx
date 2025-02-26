import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPreliminaryFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PreliminaryFilled'

      short_name='Preliminary'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-280q17 0 28.5-11.5T400-320q0-17-11.5-28.5T360-360q-17 0-28.5 11.5T320-320q0 17 11.5 28.5T360-280Zm120 0q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm120 0q17 0 28.5-11.5T640-320q0-17-11.5-28.5T600-360q-17 0-28.5 11.5T560-320q0 17 11.5 28.5T600-280ZM438-400l225-226-56-57-170 170-85-85-56 56 142 142Zm42 320q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/>
    </Icon>
  );
});

IconMaterialPreliminaryFilled.displayName = 'OnesyIconMaterialPreliminaryFilled';

export default IconMaterialPreliminaryFilled;
