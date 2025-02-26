import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialInvertColorsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InvertColorsFilled'

      short_name='InvertColors'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-120q-133 0-226.5-92T160-435q0-66 25-122.5T254-658l184-181q9-8 20-12.5t22-4.5q11 0 22 4.5t20 12.5l184 181q44 44 69 100.5T800-435q0 131-93.5 223T480-120Zm0-80v-568L310-600q-35 33-52.5 75T240-435q0 97 70 166t170 69Z"/>
    </Icon>
  );
});

IconMaterialInvertColorsFilled.displayName = 'OnesyIconMaterialInvertColorsFilled';

export default IconMaterialInvertColorsFilled;
