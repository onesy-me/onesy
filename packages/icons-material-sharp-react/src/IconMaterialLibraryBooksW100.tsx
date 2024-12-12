import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLibraryBooksW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LibraryBooksW100'

      short_name='LibraryBooks'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-426h133v-28H400v28Zm0-120h266v-28H400v28Zm0-120h266v-28H400v28ZM266-292v-536h536v536H266Zm28-28h480v-480H294v480ZM158-184v-504h28v476h476v28H158Zm136-616v480-480Z"/>
    </Icon>
  );
});

IconMaterialLibraryBooksW100.displayName = 'OnesyIconMaterialLibraryBooksW100';

export default IconMaterialLibraryBooksW100;
