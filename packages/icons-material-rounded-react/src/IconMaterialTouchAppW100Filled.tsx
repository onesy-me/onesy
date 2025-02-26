import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTouchAppW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TouchAppW100Filled'

      short_name='TouchApp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M455-132q-34 0-65-14t-51-41L165-420q-3-5-3-10t4-9q7-8 16.5-10t18.5 3l135 64v-298q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v188h294q37.5 0 63.75 26.25T748-402v135.93Q748-210 708.34-171q-39.65 39-95.34 39H455Zm11-467q-6 0-10-4.03-4-4.02-4-9.97 0-3 2-7 8-14 12-28.5t4-31.5q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 17 4 31.5t12 28.5q1.2 1.76 1.6 3.51.4 1.76.4 3.52 0 5.97-3.96 9.97-3.96 4-10.08 4-3.96 0-7.13-2-3.16-2-4.83-5-10-17-15-35.59-5-18.6-5-38.68Q202-742 245-785q43-43 105-43t105 43q43 43 43 104.73 0 20.08-5 38.68Q488-623 478-606q-1.76 3-4.94 5-3.18 2-7.06 2Z"/>
    </Icon>
  );
});

IconMaterialTouchAppW100Filled.displayName = 'OnesyIconMaterialTouchAppW100Filled';

export default IconMaterialTouchAppW100Filled;
