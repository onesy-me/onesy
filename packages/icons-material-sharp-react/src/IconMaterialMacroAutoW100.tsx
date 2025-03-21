import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMacroAutoW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MacroAutoW100'

      short_name='MacroAuto'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M479.92-440q-26.92 0-45.42-18.56T416-504v-6q-7.71 6-16.39 9T380-498q-27 0-45.5-18.56T316-562q0-20 10.48-35.2Q336.97-612.4 354-620q-17.03-7.6-27.52-22.8Q316-658 316-677.58q0-27.42 18.59-45.92T380.1-742q10.9 0 19.55 3 8.66 3 16.35 9v-5.6q0-29.4 18.58-46.9 18.59-17.5 45.5-17.5 26.92 0 45.42 17.5t18.5 46.9v5.6q9-7 19.5-10t21.5-2l-25 62q-14-18-34.41-29-20.41-11-45.59-11-42 0-71 29t-29 71q0 42 29 71t71 29q14 0 26-3.5t23-9.5q7 9 17 14.5t23 5.5h53q-8 7-19 11t-23 4q-10.93 0-19.61-3T544-510v6q0 26.88-18.58 45.44Q506.83-440 479.92-440ZM584-573l96-245h14l98 245h-28l-30-72h-95l-28 72h-27Zm66-96h74l-36-95h-2l-36 95ZM480-140q0-51 24.5-101t64.5-90q40-40 90-64.5T760-420q0 51-24.5 101T671-229q-40 40-90 64.5T480-140Zm30-30q85-21 142-78t78-142q-85 21-142 78t-78 142Zm-30 30q0-51-24.5-101T391-331q-40-40-90-64.5T200-420q0 51 24.5 101t64.5 90q40 40 90 64.5T480-140Zm-30-30q-85-21-142-78t-78-142q85 21 142 78t78 142Zm60 0Zm-60 0Z"/>
    </Icon>
  );
});

IconMaterialMacroAutoW100.displayName = 'OnesyIconMaterialMacroAutoW100';

export default IconMaterialMacroAutoW100;
