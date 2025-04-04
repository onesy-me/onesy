import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWifiFindW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiFindW100Filled'

      short_name='WifiFind'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-194 74-600q86-74 191-111t215-37q110 0 215.5 37T886-600l-68 70q-25-25-59-41.5T680-588q-78 0-133 55t-55 133q0 44 16.5 78.5T549-264l-69 70Zm373-17L748-316q-13 11-31 17.5t-37 6.5q-45 0-76.5-31.5T572-400q0-45 31.5-76.5T680-508q45 0 76.5 31.5T788-400q0 17-5.5 34T768-336l105 105-20 20ZM680-320q33 0 56.5-23.5T760-400q0-33-23.5-56.5T680-480q-33 0-56.5 23.5T600-400q0 33 23.5 56.5T680-320Z"/>
    </Icon>
  );
});

IconMaterialWifiFindW100Filled.displayName = 'OnesyIconMaterialWifiFindW100Filled';

export default IconMaterialWifiFindW100Filled;
