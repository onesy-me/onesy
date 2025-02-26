import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPictureInPictureAltW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PictureInPictureAltW100'

      short_name='PictureInPictureAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-212v-536h696v536H132Zm28-28h640v-480H160v480Zm0 0v-480 480Zm296-42h304v-224H456v224Zm28-28v-168h248v168H484Z"/>
    </Icon>
  );
});

IconMaterialPictureInPictureAltW100.displayName = 'OnesyIconMaterialPictureInPictureAltW100';

export default IconMaterialPictureInPictureAltW100;
