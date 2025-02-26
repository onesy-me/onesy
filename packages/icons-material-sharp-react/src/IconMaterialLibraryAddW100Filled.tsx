import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLibraryAddW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LibraryAddW100Filled'

      short_name='LibraryAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M520-426h28v-120h120v-28H548v-120h-28v120H400v28h120v120ZM266-292v-536h536v536H266ZM158-184v-504h28v476h476v28H158Z"/>
    </Icon>
  );
});

IconMaterialLibraryAddW100Filled.displayName = 'OnesyIconMaterialLibraryAddW100Filled';

export default IconMaterialLibraryAddW100Filled;
