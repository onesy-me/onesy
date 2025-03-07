import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPictureInPictureSmallW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PictureInPictureSmallW100'

      short_name='PictureInPictureSmall'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-212v-28h668v-508h28v536H132Zm264-128v-224h304v224H396Z"/>
    </Icon>
  );
});

IconMaterialPictureInPictureSmallW100.displayName = 'OnesyIconMaterialPictureInPictureSmallW100';

export default IconMaterialPictureInPictureSmallW100;
