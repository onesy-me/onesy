import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPictureInPictureSmall = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PictureInPictureSmall'

      short_name='PictureInPictureSmall'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-160q-17 0-28.5-11.5T80-200q0-17 11.5-28.5T120-240h680v-520q0-17 11.5-28.5T840-800q17 0 28.5 11.5T880-760v520q0 33-23.5 56.5T800-160H120Zm320-160q-17 0-28.5-11.5T400-360v-160q0-17 11.5-28.5T440-560h240q17 0 28.5 11.5T720-520v160q0 17-11.5 28.5T680-320H440Z"/>
    </Icon>
  );
});

IconMaterialPictureInPictureSmall.displayName = 'OnesyIconMaterialPictureInPictureSmall';

export default IconMaterialPictureInPictureSmall;
