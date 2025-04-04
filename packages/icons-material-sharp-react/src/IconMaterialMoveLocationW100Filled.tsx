import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMoveLocationW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoveLocationW100Filled'

      short_name='MoveLocation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M405-131Q270-252 201-357t-69-190q0-120 78.5-200.5T405-828q116 0 194.5 80.5T678-547v16.5q0 8.5-2 16.5-44 14-77.5 41T544-409q-21 37-28 79.5t3 86.5q-25 27-53.5 55T405-131Zm0-255q42 0 77.5-18.5T542-454q-30-20-64.5-30T405-494q-38 0-72.5 10T268-454q24 31 59.5 49.5T405-386Zm0-200q23 0 38.5-15.5T459-640q0-23-15.5-38.5T405-694q-23 0-38.5 15.5T351-640q0 23 15.5 38.5T405-586Zm343 414-20-19 89-90H614v-28h203l-89-90 20-19 123 123-123 123Z"/>
    </Icon>
  );
});

IconMaterialMoveLocationW100Filled.displayName = 'OnesyIconMaterialMoveLocationW100Filled';

export default IconMaterialMoveLocationW100Filled;
