import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWc = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Wc'

      short_name='Wc'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M.01 0h24v24h-24V0z" fill="none"/><path d="M5.5 22v-7.5H4V9c0-1.1.9-2 2-2h3c1.1 0 2 .9 2 2v5.5H9.5V22h-4zM18 22v-6h3l-2.54-7.63C18.18 7.55 17.42 7 16.56 7h-.12c-.86 0-1.63.55-1.9 1.37L12 16h3v6h3zM7.5 6c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm9 0c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2z"/>
    </Icon>
  );
});

IconMaterialWc.displayName = 'OnesyIconMaterialWc';

export default IconMaterialWc;
