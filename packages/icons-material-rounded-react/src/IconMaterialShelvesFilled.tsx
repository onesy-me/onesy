import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShelvesFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShelvesFilled'

      short_name='Shelves'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-40q-17 0-28.5-11.5T120-80v-800q0-17 11.5-28.5T160-920q17 0 28.5 11.5T200-880v40h560v-40q0-17 11.5-28.5T800-920q17 0 28.5 11.5T840-880v800q0 17-11.5 28.5T800-40q-17 0-28.5-11.5T760-80v-40H200v40q0 17-11.5 28.5T160-40Zm40-480h80v-120q0-17 11.5-28.5T320-680h160q17 0 28.5 11.5T520-640v120h240v-240H200v240Zm0 320h240v-120q0-17 11.5-28.5T480-360h160q17 0 28.5 11.5T680-320v120h80v-240H200v240Z"/>
    </Icon>
  );
});

IconMaterialShelvesFilled.displayName = 'OnesyIconMaterialShelvesFilled';

export default IconMaterialShelvesFilled;
