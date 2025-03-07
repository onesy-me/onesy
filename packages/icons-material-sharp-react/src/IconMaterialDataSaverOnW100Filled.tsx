import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDataSaverOnW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DataSaverOnW100Filled'

      short_name='DataSaverOn'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-132q-72.21 0-135.72-27.34-63.51-27.34-110.49-74.64T159.4-344.64Q132-408 132-480q0-131 85.5-230T440-826v28q-125 17-202.5 108.5T160-480q0 132.57 93.71 226.29Q347.43-160 480-160q78.4 0 146.7-35Q695-230 736-286l24 16q-51 66-123.09 102-72.1 36-156.91 36Zm-14-214v-120H346v-28h120v-120h28v120h120v28H494v120h-28Zm334 2-24-14q11-23 17.5-55t6.5-67q0-121-79.5-212T520-798v-28q130 12 219 112.5T828-480q0 38-7 72.5T800-344Z"/>
    </Icon>
  );
});

IconMaterialDataSaverOnW100Filled.displayName = 'OnesyIconMaterialDataSaverOnW100Filled';

export default IconMaterialDataSaverOnW100Filled;
