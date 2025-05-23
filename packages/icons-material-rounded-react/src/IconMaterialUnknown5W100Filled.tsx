import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialUnknown5W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Unknown5W100Filled'

      short_name='Unknown5'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M226-480q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h240q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4H226Zm254-320q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4 72.44 0 135.72 27.5T726-726q47 47 74.5 110.38Q828-552.24 828-479.68q0 71.68-27.5 135.18T726-234q-47 47-110.28 74.5T480-132q-69.07 0-132.54-26Q284-184 234-234q-1.67-1.78-2.83-4.44-1.17-2.67-1.17-5.52 0-6.04 4.07-10.04 4.08-4 10.1-4 2.83 0 5.46 1.17 2.62 1.16 4.37 2.83 47 44 105 69t121 25q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800Z"/>
    </Icon>
  );
});

IconMaterialUnknown5W100Filled.displayName = 'OnesyIconMaterialUnknown5W100Filled';

export default IconMaterialUnknown5W100Filled;
