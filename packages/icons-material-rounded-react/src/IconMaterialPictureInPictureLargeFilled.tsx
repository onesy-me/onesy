import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPictureInPictureLargeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PictureInPictureLargeFilled'

      short_name='PictureInPictureLarge'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-320q-17 0-28.5-11.5T240-360v-320q0-17 11.5-28.5T280-720h400q17 0 28.5 11.5T720-680v320q0 17-11.5 28.5T680-320H280ZM120-160q-17 0-28.5-11.5T80-200q0-17 11.5-28.5T120-240h680v-520q0-17 11.5-28.5T840-800q17 0 28.5 11.5T880-760v520q0 33-23.5 56.5T800-160H120Z"/>
    </Icon>
  );
});

IconMaterialPictureInPictureLargeFilled.displayName = 'OnesyIconMaterialPictureInPictureLargeFilled';

export default IconMaterialPictureInPictureLargeFilled;
