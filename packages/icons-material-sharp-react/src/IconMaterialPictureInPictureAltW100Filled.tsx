import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPictureInPictureAltW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PictureInPictureAltW100Filled'

      short_name='PictureInPictureAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-212v-536h696v536H132Zm324-70h304v-224H456v224Zm152-112Z"/>
    </Icon>
  );
});

IconMaterialPictureInPictureAltW100Filled.displayName = 'OnesyIconMaterialPictureInPictureAltW100Filled';

export default IconMaterialPictureInPictureAltW100Filled;
