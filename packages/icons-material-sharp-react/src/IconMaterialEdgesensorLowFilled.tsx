import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEdgesensorLowFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EdgesensorLowFilled'

      short_name='EdgesensorLow'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-400v-280h80v280H80Zm720 120v-280h80v280h-80ZM240-80v-800h480v800H240Zm80-200h320v-400H320v400Z"/>
    </Icon>
  );
});

IconMaterialEdgesensorLowFilled.displayName = 'OnesyIconMaterialEdgesensorLowFilled';

export default IconMaterialEdgesensorLowFilled;
