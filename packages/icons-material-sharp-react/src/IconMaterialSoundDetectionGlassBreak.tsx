import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSoundDetectionGlassBreak = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SoundDetectionGlassBreak'

      short_name='SoundDetectionGlassBreak'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-720h720v720H120Zm80-640v360l180-181 160 160 220-247v-92H200Zm0 560h560v-348L540-301 380-461 200-280v80Z"/>
    </Icon>
  );
});

IconMaterialSoundDetectionGlassBreak.displayName = 'OnesyIconMaterialSoundDetectionGlassBreak';

export default IconMaterialSoundDetectionGlassBreak;
