import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMicW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MicW100Filled'

      short_name='Mic'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-452q-29 0-48.5-19.5T412-520v-240q0-29 19.5-48.5T480-828q29 0 48.5 19.5T548-760v240q0 29-19.5 48.5T480-452Zm-14 292v-132q-85-6-146-66t-67-147q-1-6 3-10.5t10-4.5q6 0 10 4.5t5 10.5q6 79 63.5 132T480-320q79 0 136-53.5T679-505q1-6 5-10.5t10-4.5q6 0 10 4.5t3 10.5q-6 85-66.5 145.5T494-292v132q0 6-4 10t-10 4q-6 0-10-4t-4-10Z"/>
    </Icon>
  );
});

IconMaterialMicW100Filled.displayName = 'OnesyIconMaterialMicW100Filled';

export default IconMaterialMicW100Filled;
