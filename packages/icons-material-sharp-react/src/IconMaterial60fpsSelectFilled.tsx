import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial60fpsSelectFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='60fpsSelectFilled'

      short_name='60fpsSelect'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-400v-400h280v80H240v80h200v240H160Zm80-80h120v-80H240v80Zm280 80v-400h280v400H520Zm80-80h120v-240H600v240ZM120-80v-200h80v200h-80Zm160 0v-200h80v200h-80Zm160 0v-200h80v200h-80Zm160 0v-200h240v200H600Z"/>
    </Icon>
  );
});

IconMaterial60fpsSelectFilled.displayName = 'OnesyIconMaterial60fpsSelectFilled';

export default IconMaterial60fpsSelectFilled;
