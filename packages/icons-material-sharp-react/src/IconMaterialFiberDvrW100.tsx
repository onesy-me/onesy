import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFiberDvrW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FiberDvrW100'

      short_name='FiberDvr'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M184-376h146l22-23v-163l-22-22H184v208Zm28-28v-152h112v152H212Zm252 28h36l66-208h-26l-58 180-58-180h-26l66 208Zm152 0h28v-80h68l34 80h30l-34-82h42v-126H616v208Zm28-108v-72h112v72H644ZM92-212v-536h776v536H92Zm28-28h720v-480H120v480Zm0 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialFiberDvrW100.displayName = 'OnesyIconMaterialFiberDvrW100';

export default IconMaterialFiberDvrW100;
