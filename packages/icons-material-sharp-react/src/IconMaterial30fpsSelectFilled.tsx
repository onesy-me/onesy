import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial30fpsSelectFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='30fpsSelectFilled'

      short_name='30fpsSelect'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-400v-80h200v-80H160v-80h200v-80H160v-80h280v400H160Zm360 0v-400h280v400H520Zm80-80h120v-240H600v240ZM120-80v-200h80v200h-80Zm160 0v-200h80v200h-80Zm160 0v-200h80v200h-80Zm160 0v-200h240v200H600Z"/>
    </Icon>
  );
});

IconMaterial30fpsSelectFilled.displayName = 'OnesyIconMaterial30fpsSelectFilled';

export default IconMaterial30fpsSelectFilled;
