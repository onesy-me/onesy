import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMusicVideoFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MusicVideoFilled'

      short_name='MusicVideo'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M420-280q42 0 71-29t29-71v-220h120v-80H480v220q-13-9-28-14.5t-32-5.5q-42 0-71 29t-29 71q0 42 29 71t71 29ZM80-160v-640h800v640H80Z"/>
    </Icon>
  );
});

IconMaterialMusicVideoFilled.displayName = 'OnesyIconMaterialMusicVideoFilled';

export default IconMaterialMusicVideoFilled;
