import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAutorenewW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutorenewW100Filled'

      short_name='Autorenew'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M214-478q0 20 3 40.5t10 40.5q2 6-.5 11.5T219-378q-5 2-10.5 0t-7.5-8q-8-22-11.5-45.5T186-478q0-123 86-209.5T480-774h70l-80-80q-4-4-4.5-9.5T470-874q5-5 10-5t10 5l93 93q9 9 9 21t-9 21l-93 93q-4 4-9.5 4.5T470-646q-5-5-5-10t5-10l80-80h-70q-111 0-188.5 78T214-478Zm532-4q0-20-3-40.5T733-563q-2-6 .5-11.5t7.5-7.5q5-2 10 0t7 8q8 22 12 45.5t4 46.5q0 123-86 209.5T480-186h-70l80 80q4 4 4.5 9.5T490-86q-5 5-10 5t-10-5l-93-93q-9-9-9-21t9-21l93-93q4-4 9.5-4.5T490-314q5 5 5 10t-5 10l-80 80h70q111 0 188.5-78T746-482Z"/>
    </Icon>
  );
});

IconMaterialAutorenewW100Filled.displayName = 'OnesyIconMaterialAutorenewW100Filled';

export default IconMaterialAutorenewW100Filled;
