import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGalleryThumbnailW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GalleryThumbnailW100Filled'

      short_name='GalleryThumbnail'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M118-252v-456h456v456H118Zm536-268v-188h188v188H654ZM196-365h300l-95-127-75 100-55-73-75 100Zm458 113v-188h188v188H654Z"/>
    </Icon>
  );
});

IconMaterialGalleryThumbnailW100Filled.displayName = 'OnesyIconMaterialGalleryThumbnailW100Filled';

export default IconMaterialGalleryThumbnailW100Filled;
