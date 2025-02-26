import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFiberNewW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FiberNewW100'

      short_name='FiberNew'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M92-212v-536h776v536H92Zm28-28h720v-480H120v480Zm40-136h28v-166l110 166h30v-208h-28v166L192-584h-32v208Zm236 0h128v-28H424v-60h100v-28H424v-64h100v-28H396v208Zm196 0h208v-208h-28v180h-62v-140h-28v140h-62v-180h-28v208ZM120-240v-480 480Z"/>
    </Icon>
  );
});

IconMaterialFiberNewW100.displayName = 'OnesyIconMaterialFiberNewW100';

export default IconMaterialFiberNewW100;
