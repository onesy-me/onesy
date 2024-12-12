import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPictureInPictureW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PictureInPictureW100Filled'

      short_name='PictureInPicture'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-212v-536h696v536H132Zm324-244h304v-224H456v224Z"/>
    </Icon>
  );
});

IconMaterialPictureInPictureW100Filled.displayName = 'OnesyIconMaterialPictureInPictureW100Filled';

export default IconMaterialPictureInPictureW100Filled;
