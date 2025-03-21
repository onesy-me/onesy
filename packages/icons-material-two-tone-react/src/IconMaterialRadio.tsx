import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRadio = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Radio'

      short_name='Radio'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 13H4v7h16v-7zM8 18.98c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" opacity=".3"/><path d="M2 20c0 1.1.89 2 2 2h16c1.11 0 2-.9 2-2V8c0-1.11-.89-2-2-2H8.3l8.26-3.34L15.88 1 3.24 6.15C2.51 6.43 2 7.17 2 8v12zM4 8h16v3h-2V9h-2v2H4V8zm0 5h16v7H4v-7z"/><circle cx="8" cy="16.48" r="2.5"/>
    </Icon>
  );
});

IconMaterialRadio.displayName = 'OnesyIconMaterialRadio';

export default IconMaterialRadio;
