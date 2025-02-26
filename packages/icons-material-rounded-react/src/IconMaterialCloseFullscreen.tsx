import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCloseFullscreen = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CloseFullscreen'

      short_name='CloseFullscreen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-344 164-108q-11 11-28 11t-28-11q-11-11-11-28t11-28l236-236H200q-17 0-28.5-11.5T160-440q0-17 11.5-28.5T200-480h240q17 0 28.5 11.5T480-440v240q0 17-11.5 28.5T440-160q-17 0-28.5-11.5T400-200v-144Zm216-216h144q17 0 28.5 11.5T800-520q0 17-11.5 28.5T760-480H520q-17 0-28.5-11.5T480-520v-240q0-17 11.5-28.5T520-800q17 0 28.5 11.5T560-760v144l236-236q11-11 28-11t28 11q11 11 11 28t-11 28L616-560Z"/>
    </Icon>
  );
});

IconMaterialCloseFullscreen.displayName = 'OnesyIconMaterialCloseFullscreen';

export default IconMaterialCloseFullscreen;
