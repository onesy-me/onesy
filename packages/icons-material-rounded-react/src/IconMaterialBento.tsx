import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBento = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Bento'

      short_name='Bento'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-200q-33 0-56.5-23.5T80-280v-400q0-33 23.5-56.5T160-760h640q33 0 56.5 23.5T880-680v400q0 33-23.5 56.5T800-200H160Zm400-320h240v-160H560v160ZM160-280h320v-400H160v400Zm160-140q-25 0-42.5-17.5T260-480q0-25 17.5-42.5T320-540q25 0 42.5 17.5T380-480q0 25-17.5 42.5T320-420Zm240 140h240v-160H560v160Z"/>
    </Icon>
  );
});

IconMaterialBento.displayName = 'OnesyIconMaterialBento';

export default IconMaterialBento;
