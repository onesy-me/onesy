import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHeadsetMic = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeadsetMic'

      short_name='HeadsetMic'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-160q-33 0-56.5-23.5T120-240v-280q0-74 28.5-139.5T226-774q49-49 114.5-77.5T480-880q74 0 139.5 28.5T734-774q49 49 77.5 114.5T840-520v400q0 33-23.5 56.5T760-40H520q-17 0-28.5-11.5T480-80q0-17 11.5-28.5T520-120h240v-40h-80q-33 0-56.5-23.5T600-240v-160q0-33 23.5-56.5T680-480h80v-40q0-116-82-198t-198-82q-116 0-198 82t-82 198v40h80q33 0 56.5 23.5T360-400v160q0 33-23.5 56.5T280-160h-80Zm0-80h80v-160h-80v160Zm480 0h80v-160h-80v160ZM200-400h80-80Zm480 0h80-80Z"/>
    </Icon>
  );
});

IconMaterialHeadsetMic.displayName = 'OnesyIconMaterialHeadsetMic';

export default IconMaterialHeadsetMic;
