import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFormatStrikethroughW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatStrikethroughW100Filled'

      short_name='FormatStrikethrough'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M146-427q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h668q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H146Zm320-106v-186H267q-5.83 0-9.92-4.12-4.08-4.12-4.08-10t4.08-10.38q4.09-4.5 9.92-4.5h427q5.83 0 9.92 4.12 4.08 4.12 4.08 10t-4.08 10.38q-4.09 4.5-9.92 4.5H495v186h-29Zm0 184h29v123q0 5.83-4.12 9.92-4.12 4.08-10 4.08t-10.38-4.38Q466-220.75 466-227v-122Z"/>
    </Icon>
  );
});

IconMaterialFormatStrikethroughW100Filled.displayName = 'OnesyIconMaterialFormatStrikethroughW100Filled';

export default IconMaterialFormatStrikethroughW100Filled;
