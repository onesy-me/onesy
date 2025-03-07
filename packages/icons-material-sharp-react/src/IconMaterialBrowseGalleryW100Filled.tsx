import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBrowseGalleryW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrowseGalleryW100Filled'

      short_name='BrowseGallery'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m472-349 19-19-117-117.33V-654h-28v179l126 126Zm248 153v-32q74-35 117-103t43-149q0-81-43-149T720-732v-32q85 38 136.5 114.5T908-480q0 93-51.5 169.5T720-196Zm-359.94 24Q296-172 240-196t-98-66q-42-42-66-97.94-24-55.95-24-120Q52-544 76-600t66-98q42-42 97.94-66 55.95-24 120-24Q424-788 480-764t98 66q42 42 66 97.94 24 55.95 24 120Q668-416 644-360t-66 98q-42 42-97.94 66-55.95 24-120 24Z"/>
    </Icon>
  );
});

IconMaterialBrowseGalleryW100Filled.displayName = 'OnesyIconMaterialBrowseGalleryW100Filled';

export default IconMaterialBrowseGalleryW100Filled;
