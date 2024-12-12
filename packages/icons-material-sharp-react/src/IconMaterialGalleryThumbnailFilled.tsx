import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGalleryThumbnailFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GalleryThumbnailFilled'

      short_name='GalleryThumbnail'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M40-200v-560h560v560H40Zm640-320v-240h240v240H680ZM160-360h320L375-500l-75 100-55-73-85 113Zm520 160v-240h240v240H680Z"/>
    </Icon>
  );
});

IconMaterialGalleryThumbnailFilled.displayName = 'OnesyIconMaterialGalleryThumbnailFilled';

export default IconMaterialGalleryThumbnailFilled;
