import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSouthEastFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SouthEastFilled'

      short_name='SouthEast'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-200v-80h264L160-744l56-56 464 464v-264h80v400H360Z"/>
    </Icon>
  );
});

IconMaterialSouthEastFilled.displayName = 'OnesyIconMaterialSouthEastFilled';

export default IconMaterialSouthEastFilled;
