import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialScienceW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScienceW100'

      short_name='Science'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-172q-18 0-25.5-16t3.5-30l234-284v-258h-74v-28h284v28h-74v258l234 284q11 14 3.5 30T760-172H200Zm0-28h560L520-492v-268h-80v268L200-200Zm280-280Z"/>
    </Icon>
  );
});

IconMaterialScienceW100.displayName = 'OnesyIconMaterialScienceW100';

export default IconMaterialScienceW100;
