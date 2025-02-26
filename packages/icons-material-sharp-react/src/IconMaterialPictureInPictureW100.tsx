import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPictureInPictureW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PictureInPictureW100'

      short_name='PictureInPicture'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-212v-536h696v536H132Zm28-28h640v-480H160v480Zm296-216h304v-224H456v224Zm28-28v-168h248v168H484ZM160-240v-480 480Z"/>
    </Icon>
  );
});

IconMaterialPictureInPictureW100.displayName = 'OnesyIconMaterialPictureInPictureW100';

export default IconMaterialPictureInPictureW100;
