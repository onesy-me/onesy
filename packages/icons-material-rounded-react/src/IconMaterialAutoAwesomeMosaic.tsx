import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAutoAwesomeMosaic = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoAwesomeMosaic'

      short_name='AutoAwesomeMosaic'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-120H200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h240v720Zm-80-80v-560H200v560h160Zm160-320v-320h240q33 0 56.5 23.5T840-760v240H520Zm80-80h160v-160H600v160Zm-80 480v-320h320v240q0 33-23.5 56.5T760-120H520Zm80-80h160v-160H600v160ZM360-480Zm240-120Zm0 240Z"/>
    </Icon>
  );
});

IconMaterialAutoAwesomeMosaic.displayName = 'OnesyIconMaterialAutoAwesomeMosaic';

export default IconMaterialAutoAwesomeMosaic;
