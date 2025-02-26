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
      <path d="M120-320v-440q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v2L540-421 437-524q-12-12-27-18t-30-6q-16 0-30.5 6T323-524L120-320Zm80 200q-33 0-56.5-23.5T120-200l260-261 100 100q12 12 27 17.5t30 5.5q17 0 32-6t27-20l244-274v438q0 33-23.5 56.5T760-120H200Z"/>
    </Icon>
  );
});

IconMaterialSoundDetectionGlassBreakFilled.displayName = 'OnesyIconMaterialSoundDetectionGlassBreakFilled';

export default IconMaterialSoundDetectionGlassBreakFilled;
