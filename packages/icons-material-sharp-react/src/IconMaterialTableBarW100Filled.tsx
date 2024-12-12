import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTableBarW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableBarW100Filled'

      short_name='TableBar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m278-211 60-148h128v-202q-132-2-221.5-31T155-660q0-42 94-70.5T480-759q137 0 231 28.5t94 70.5q0 40-90 68.5T494-561v202h128l60 148h-30l-48-120H356l-48 120h-30Z"/>
    </Icon>
  );
});

IconMaterialTableBarW100Filled.displayName = 'OnesyIconMaterialTableBarW100Filled';

export default IconMaterialTableBarW100Filled;
