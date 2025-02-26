import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSoundDetectionGlassBreakFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SoundDetectionGlassBreakFilled'

      short_name='SoundDetectionGlassBreak'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-320v-520h720v82L540-421 380-581 120-320Zm0 200v-80l260-261 160 160 300-337v518H120Z"/>
    </Icon>
  );
});

IconMaterialSoundDetectionGlassBreakFilled.displayName = 'OnesyIconMaterialSoundDetectionGlassBreakFilled';

export default IconMaterialSoundDetectionGlassBreakFilled;
