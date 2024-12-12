import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDataUsageW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DataUsageW100Filled'

      short_name='DataUsage'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-132q-72 0-135.5-27.5T234-234q-47-47-74.5-110.5T132-480q0-131 85.5-230T440-826v28q-125 17-202.5 108.5T160-480q0 133 93.5 226.5T480-160q78 0 146.5-35T736-286l24 16q-51 66-123 102t-157 36Zm320-212-24-14q11-23 17.5-55t6.5-67q0-121-79.5-212T520-798v-28q130 12 219 112.5T828-480q0 38-7 72.5T800-344Z"/>
    </Icon>
  );
});

IconMaterialDataUsageW100Filled.displayName = 'OnesyIconMaterialDataUsageW100Filled';

export default IconMaterialDataUsageW100Filled;
