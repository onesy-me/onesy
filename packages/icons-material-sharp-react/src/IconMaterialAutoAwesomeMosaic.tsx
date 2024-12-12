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
      <path d="M440-120H120v-720h320v720Zm-80-80v-560H200v560h160Zm160-320v-320h320v320H520Zm80-80h160v-160H600v160Zm-80 480v-320h320v320H520Zm80-80h160v-160H600v160ZM360-480Zm240-120Zm0 240Z"/>
    </Icon>
  );
});

IconMaterialAutoAwesomeMosaic.displayName = 'OnesyIconMaterialAutoAwesomeMosaic';

export default IconMaterialAutoAwesomeMosaic;
