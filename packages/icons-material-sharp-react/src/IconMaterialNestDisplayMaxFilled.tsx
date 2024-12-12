import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNestDisplayMaxFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestDisplayMaxFilled'

      short_name='NestDisplayMax'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-560q17 0 28.5-11.5T520-600q0-17-11.5-28.5T480-640q-17 0-28.5 11.5T440-600q0 17 11.5 28.5T480-560Zm0 360q-99 0-169.5-13.5T240-246v-34h-73q-35 0-59-26t-21-61l27-320q2-31 25-52t55-21h572q32 0 55 21t25 52l27 320q3 35-21 61t-59 26h-73v34q0 19-70.5 32.5T480-200Z"/>
    </Icon>
  );
});

IconMaterialNestDisplayMaxFilled.displayName = 'OnesyIconMaterialNestDisplayMaxFilled';

export default IconMaterialNestDisplayMaxFilled;
