import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDrafts = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Drafts'

      short_name='Drafts'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 15.36l-8-5.02V18h16l-.01-7.63z" opacity=".3"/><path d="M21.99 8c0-.72-.37-1.35-.94-1.7L12 1 2.95 6.3C2.38 6.65 2 7.28 2 8v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2l-.01-10zM12 3.32L19.99 8v.01L12 13 4 8l8-4.68zM4 18v-7.66l8 5.02 7.99-4.99L20 18H4z"/>
    </Icon>
  );
});

IconMaterialDrafts.displayName = 'OnesyIconMaterialDrafts';

export default IconMaterialDrafts;
