import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBackHand = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BackHand'

      short_name='BackHand'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M512-40q-82 0-154-37.5T240-182L48-464l67-67 165 114v-423h80v577L212-366l95 138q35 51 89 79.5T512-120q103 0 175.5-72.5T760-368v-432h80v432q0 137-95.5 232.5T512-40Zm-72-440v-440h80v440h-80Zm160 0v-400h80v400h-80ZM486-300Z"/>
    </Icon>
  );
});

IconMaterialBackHand.displayName = 'OnesyIconMaterialBackHand';

export default IconMaterialBackHand;
