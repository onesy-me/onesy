import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTouchpadMouseW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TouchpadMouseW100'

      short_name='TouchpadMouse'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M660-160q58 0 99-41t41-99v-86H520v86q0 58 41 99t99 41ZM520-414h126v-145q-57 6-91.5 47T520-414Zm154 0h126q0-57-34.5-98T674-559v145Zm-13.82 282Q590-132 541-180.87 492-229.75 492-300v-120q0-70.25 48.82-119.13 48.82-48.87 119-48.87T779-539.13q49 48.88 49 119.13v120q0 70.25-48.82 119.13-48.82 48.87-119 48.87ZM160-240v-480 480Zm-28 28v-536h696v60h-28v-32H160v480h232v28H132Z"/>
    </Icon>
  );
});

IconMaterialTouchpadMouseW100.displayName = 'OnesyIconMaterialTouchpadMouseW100';

export default IconMaterialTouchpadMouseW100;
