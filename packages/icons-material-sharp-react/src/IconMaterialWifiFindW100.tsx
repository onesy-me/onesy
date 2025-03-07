import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWifiFindW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiFindW100'

      short_name='WifiFind'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-194 74-600q86-74 191-111t215-37q110 0 215.5 37T886-600l-20 19q-78-66-180-102.5T480-720q-104 0-198 33t-166 89l384 384-20 20Zm373-17L748-316q-13 11-31 17.5t-37 6.5q-45 0-76.5-31.5T572-400q0-45 31.5-76.5T680-508q45 0 76.5 31.5T788-400q0 17-5.5 34T768-336l105 105-20 20ZM680-320q33 0 56.5-23.5T760-400q0-33-23.5-56.5T680-480q-33 0-56.5 23.5T600-400q0 33 23.5 56.5T680-320ZM480-214Z"/>
    </Icon>
  );
});

IconMaterialWifiFindW100.displayName = 'OnesyIconMaterialWifiFindW100';

export default IconMaterialWifiFindW100;
