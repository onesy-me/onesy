import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFiberNew = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FiberNew'

      short_name='FiberNew'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M40-160v-640h880v640H40Zm80-80h720v-480H120v480Zm20-120h50v-140l102 140h48v-240h-50v140L190-600h-50v240Zm240 0h160v-50H440v-44h100v-50H440v-46h100v-50H380v240Zm200 0h240v-240h-50v180h-44v-140h-50v140h-46v-180h-50v240ZM120-240v-480 480Z"/>
    </Icon>
  );
});

IconMaterialFiberNew.displayName = 'OnesyIconMaterialFiberNew';

export default IconMaterialFiberNew;
