import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAddToPhotos = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddToPhotos'

      short_name='AddToPhotos'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M520-400h80v-120h120v-80H600v-120h-80v120H400v80h120v120ZM240-240v-640h640v640H240Zm80-80h480v-480H320v480ZM80-80v-640h80v560h560v80H80Zm240-720v480-480Z"/>
    </Icon>
  );
});

IconMaterialAddToPhotos.displayName = 'OnesyIconMaterialAddToPhotos';

export default IconMaterialAddToPhotos;
