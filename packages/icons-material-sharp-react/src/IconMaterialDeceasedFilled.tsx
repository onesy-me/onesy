import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDeceasedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeceasedFilled'

      short_name='Deceased'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-80q-100 0-170-70t-70-170v-80q71-1 134 29t106 81v-153q-86-14-143-80.5T240-680v-223l140 121 100-121 100 121 140-121v223q0 90-57 156.5T520-443v153q43-51 106-81t134-29v80q0 100-70 170T520-80h-80Z"/>
    </Icon>
  );
});

IconMaterialDeceasedFilled.displayName = 'OnesyIconMaterialDeceasedFilled';

export default IconMaterialDeceasedFilled;
