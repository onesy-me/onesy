import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAllergiesFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AllergiesFilled'

      short_name='Allergies'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80ZM284-422l72-36-80-160-72 36 80 160Zm96 182h80v-289l-84-169-72 36 76 152v270Zm120 0h80v-271l76-151-72-36-84 168v290Zm176-182 80-160-72-36-80 160 72 36Z"/>
    </Icon>
  );
});

IconMaterialAllergiesFilled.displayName = 'OnesyIconMaterialAllergiesFilled';

export default IconMaterialAllergiesFilled;
