import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTextRotationAngleupFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextRotationAngleupFilled'

      short_name='TextRotationAngleup'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M761-464 417-120q-11 11-28 11t-28-11q-11-11-11-28t11-28l344-344h-24q-17 0-28.5-11.5T641-560q0-17 11.5-28.5T681-600h120q17 0 28.5 11.5T841-560v120q0 17-11.5 28.5T801-400q-17 0-28.5-11.5T761-440v-24Zm-428-12 39 84q5 10 3.5 20.5T366-353q-14 14-32 10.5T308-363L146-721q-5-11-3-22t10-19l20-20q8-8 19-10t22 3l359 164q17 8 20 26t-10 31q-8 8-19 10t-22-3l-83-41-126 126Zm-30-62 94-92-174-84-2 2 82 174Z"/>
    </Icon>
  );
});

IconMaterialTextRotationAngleupFilled.displayName = 'OnesyIconMaterialTextRotationAngleupFilled';

export default IconMaterialTextRotationAngleupFilled;
