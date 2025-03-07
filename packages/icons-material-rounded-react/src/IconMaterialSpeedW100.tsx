import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSpeedW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpeedW100'

      short_name='Speed'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M434-356q17 17 43.5 15t38.5-19l149.06-202.78Q673-574 664-583q-9-9-20.27-1.11L440-436q-18 12-20.5 37.5T434-356Zm46-392q45 0 82.5 9t73.5 27q6 3 8.5 9t0 11q-2.5 5-8.5 6.5t-12-1.5q-33-17-68-25t-76-8q-133 0-226.5 93.5T160-400q0 42 11.5 83t32.5 77h552q23-38 33.5-79t10.5-85q0-32-7.5-69.5T768-544q-3-6-2-12t6.19-9.14Q777-568 782.5-566q5.5 2 8.5 8 21 42 29 78.5t8 75.5q0 50-11 92.5T782-224q-3 5-10 8.5t-16 3.5H204q-8 0-14.5-4T178-228q-18-32-32-74t-14-98q0-71 26.92-134.37 26.92-63.36 73.5-111Q279-693 343-720.5 407-748 480-748Zm0 268Z"/>
    </Icon>
  );
});

IconMaterialSpeedW100.displayName = 'OnesyIconMaterialSpeedW100';

export default IconMaterialSpeedW100;
