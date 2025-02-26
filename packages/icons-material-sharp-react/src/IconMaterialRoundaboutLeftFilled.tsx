import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRoundaboutLeftFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RoundaboutLeftFilled'

      short_name='RoundaboutLeft'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M600-120v-322h40q66 0 113-46t47-112q0-66-47-113t-113-47q-66 0-112 47t-46 113v40H233l64 64-57 56L80-600l160-160 56 56-63 64h173q14-85 79.5-142.5T640-840q100 0 170 70t70 170q0 89-57.5 154.5T680-366v246h-80Z"/>
    </Icon>
  );
});

IconMaterialRoundaboutLeftFilled.displayName = 'OnesyIconMaterialRoundaboutLeftFilled';

export default IconMaterialRoundaboutLeftFilled;
