import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLibraryAdd = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LibraryAdd'

      short_name='LibraryAdd'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M8 16h12V4H8v12zm2-7h3V6h2v3h3v2h-3v3h-2v-3h-3V9z" opacity=".3"/><path d="M4 22h14v-2H4V6H2v14c0 1.1.9 2 2 2zM8 2c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H8zm12 14H8V4h12v12zm-7-2h2v-3h3V9h-3V6h-2v3h-3v2h3z"/>
    </Icon>
  );
});

IconMaterialLibraryAdd.displayName = 'OnesyIconMaterialLibraryAdd';

export default IconMaterialLibraryAdd;
