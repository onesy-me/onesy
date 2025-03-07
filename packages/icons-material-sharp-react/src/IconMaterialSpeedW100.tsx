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
      <path d="M434-356q17 17 43.5 15t38.5-19l206-280-282 204q-18 12-20.5 37.5T434-356Zm46-392q54 0 96.5 12.5T663-697l-25 18q-36-20-74.5-30.5T480-720q-133 0-226.5 93.5T160-400q0 42 11.5 83t32.5 77h552q23-38 33.5-79t10.5-85q0-36-9.5-77.5T760-558l18-25q29 51 39.5 92.5T828-404q0 50-11 92.5T782-224q-3 5-10 8.5t-16 3.5H204q-8 0-14.5-4T178-228q-18-32-32-74t-14-98q0-71 26.92-134.37 26.92-63.36 73.5-111Q279-693 343-720.5 407-748 480-748Zm0 268Z"/>
    </Icon>
  );
});

IconMaterialSpeedW100.displayName = 'OnesyIconMaterialSpeedW100';

export default IconMaterialSpeedW100;
