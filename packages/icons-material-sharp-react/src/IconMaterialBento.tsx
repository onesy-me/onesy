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
      <path d="M80-200v-560h800v560H80Zm480-320h240v-160H560v160ZM160-280h320v-400H160v400Zm160-140q-25 0-42.5-17.5T260-480q0-25 17.5-42.5T320-540q25 0 42.5 17.5T380-480q0 25-17.5 42.5T320-420Zm240 140h240v-160H560v160Z"/>
    </Icon>
  );
});

IconMaterialBento.displayName = 'OnesyIconMaterialBento';

export default IconMaterialBento;
