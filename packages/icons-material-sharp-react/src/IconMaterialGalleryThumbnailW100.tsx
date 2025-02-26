import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGalleryThumbnailW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GalleryThumbnailW100'

      short_name='GalleryThumbnail'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M118-252v-456h456v456H118Zm536-268v-188h188v188H654Zm28-28h132v-132H682v132ZM146-280h400v-400H146v400Zm50-85h300l-95-127-75 100-55-73-75 100Zm458 113v-188h188v188H654Zm28-28h132v-132H682v132Zm-536 0v-400 400Zm536-268v-132 132Zm0 268v-132 132Z"/>
    </Icon>
  );
});

IconMaterialGalleryThumbnailW100.displayName = 'OnesyIconMaterialGalleryThumbnailW100';

export default IconMaterialGalleryThumbnailW100;
