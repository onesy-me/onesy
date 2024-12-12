import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAddPhotoAlternateW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddPhotoAlternateW100'

      short_name='AddPhotoAlternate'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M152-172v-616h388v28H180v560h560v-360h28v388H152Zm548-468v-80h-80v-28h80v-80h28v80h80v28h-80v80h-28ZM298-306h332L528-442 428-318l-64-74-66 86ZM180-560v360-560 200Z"/>
    </Icon>
  );
});

IconMaterialAddPhotoAlternateW100.displayName = 'OnesyIconMaterialAddPhotoAlternateW100';

export default IconMaterialAddPhotoAlternateW100;
