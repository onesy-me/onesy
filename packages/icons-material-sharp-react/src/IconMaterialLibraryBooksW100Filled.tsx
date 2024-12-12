import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLibraryBooksW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LibraryBooksW100Filled'

      short_name='LibraryBooks'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-426h133v-28H400v28Zm0-120h266v-28H400v28Zm0-120h266v-28H400v28ZM266-292v-536h536v536H266ZM158-184v-504h28v476h476v28H158Z"/>
    </Icon>
  );
});

IconMaterialLibraryBooksW100Filled.displayName = 'OnesyIconMaterialLibraryBooksW100Filled';

export default IconMaterialLibraryBooksW100Filled;
