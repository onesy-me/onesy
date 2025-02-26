import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPreliminary = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Preliminary'

      short_name='Preliminary'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-280q17 0 28.5-11.5T400-320q0-17-11.5-28.5T360-360q-17 0-28.5 11.5T320-320q0 17 11.5 28.5T360-280Zm120 0q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm120 0q17 0 28.5-11.5T640-320q0-17-11.5-28.5T600-360q-17 0-28.5 11.5T560-320q0 17 11.5 28.5T600-280ZM437-513l-56-57q-12-12-28.5-12T324-570q-12 12-12 28.5t12 28.5l85 85q12 12 28.5 12t28.5-12l169-170q11-12 11.5-28.5T635-655q-12-12-28-12t-28 12L437-513Zm43 433q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
    </Icon>
  );
});

IconMaterialPreliminary.displayName = 'OnesyIconMaterialPreliminary';

export default IconMaterialPreliminary;
