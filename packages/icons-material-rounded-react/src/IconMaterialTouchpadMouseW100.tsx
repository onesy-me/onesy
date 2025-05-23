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
      <path d="M660-160q58 0 99-41t41-99v-86H520v86q0 58 41 99t99 41ZM520-414h126v-145q-57 6-91.5 47T520-414Zm154 0h126q0-57-34.5-98T674-559v145Zm-13.82 282Q590-132 541-180.87 492-229.75 492-300v-120q0-70.25 48.82-119.13 48.82-48.87 119-48.87T779-539.13q49 48.88 49 119.13v120q0 70.25-48.82 119.13-48.82 48.87-119 48.87ZM192-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h622q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H192q-14 0-23 9t-9 23v416q0 14 9 23t23 9h186q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4H192Zm-32-28v-480 480Z"/>
    </Icon>
  );
});

IconMaterialTouchpadMouseW100.displayName = 'OnesyIconMaterialTouchpadMouseW100';

export default IconMaterialTouchpadMouseW100;
