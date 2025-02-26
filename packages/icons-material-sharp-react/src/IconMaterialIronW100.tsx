import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialIronW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='IronW100'

      short_name='Iron'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-292v-72q0-51.15 37.5-87.58Q207-488 261-488h358v-112H374v66h-28v-94h301v252h73v-292h108v28h-80v292H647v56H132Zm28-28h459v-140H261q-41.66 0-71.33 28.2T160-364v44Zm459 0v-140 140Z"/>
    </Icon>
  );
});

IconMaterialIronW100.displayName = 'OnesyIconMaterialIronW100';

export default IconMaterialIronW100;
