import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAddPhotoAlternateW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddPhotoAlternateW100Filled'

      short_name='AddPhotoAlternate'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M700-640v-80h-80v-28h80v-80h28v80h80v28h-80v80h-28ZM298-306h332L528-442 428-318l-64-74-66 86ZM152-172v-616h388v148h80v80h148v388H152Z"/>
    </Icon>
  );
});

IconMaterialAddPhotoAlternateW100Filled.displayName = 'OnesyIconMaterialAddPhotoAlternateW100Filled';

export default IconMaterialAddPhotoAlternateW100Filled;
