import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFastfoodW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FastfoodW100Filled'

      short_name='Fastfood'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M369-488q30 0 68.5 4.5T512-467q36 12 64 33.5t37.29 56.81q3.71 13.69-5.5 25.19Q598.58-340 584-340H154q-14.58 0-23.79-11.5-9.21-11.5-5.5-25.19Q134-412 162-433.5t64-33.5q36-12 74.5-16.5T369-488ZM129-216q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h480q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H129Zm0 124q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h480q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H129Zm627 0h-23q-12.75 0-21.37-8.63Q703-109.25 703-122v-218q0-82-61.5-138t-145.6-77.03q-8.9-1.97-15.02-8.65-6.13-6.68-7.88-15.32l-11-75q-2-13.6 7.25-23.8Q478.5-688 492-688h145v-146q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v146h147q13.5 0 22.75 9.75T842-655l-56 536q-1.58 11.25-10.29 19.12Q767-92 756-92Z"/>
    </Icon>
  );
});

IconMaterialFastfoodW100Filled.displayName = 'OnesyIconMaterialFastfoodW100Filled';

export default IconMaterialFastfoodW100Filled;
