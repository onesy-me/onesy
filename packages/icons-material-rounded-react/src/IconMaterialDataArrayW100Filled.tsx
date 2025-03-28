import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDataArrayW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DataArrayW100Filled'

      short_name='DataArray'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M636-212q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h52q14 0 23-9t9-23v-416q0-14-9-23t-23-9h-52q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h52q24.75 0 42.38 17.62Q748-712.75 748-688v416q0 24.75-17.62 42.37Q712.75-212 688-212h-52Zm-364 0q-24.75 0-42.37-17.63Q212-247.25 212-272v-416q0-24.75 17.63-42.38Q247.25-748 272-748h52q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4h-52q-14 0-23 9t-9 23v416q0 14 9 23t23 9h52q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4h-52Z"/>
    </Icon>
  );
});

IconMaterialDataArrayW100Filled.displayName = 'OnesyIconMaterialDataArrayW100Filled';

export default IconMaterialDataArrayW100Filled;
