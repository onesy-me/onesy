import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNearbyW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NearbyW100'

      short_name='Nearby'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m459-371-88.18-88.18Q362-468 362-480t9-21l88.18-88.18Q468-598 480-598t21 9l88.18 88.18Q598-492 598-480t-9 21l-88.18 88.18Q492-362 480-362t-21-9Zm63.83 187.17Q514-175 503-170.5q-11 4.5-23 4.5t-23-4.5q-11-4.5-19.83-13.33L181-440q-8.13-8.06-12.57-19.04-4.43-10.99-4.43-21.97 0-10.99 4.43-21.97Q172.87-513.95 181-522l256-256q9.04-9 19.97-13.5 10.92-4.5 22.98-4.5 12.05 0 23.01 4.5Q513.93-787 523-778l256 256q8.13 8.06 12.57 19.04 4.43 10.99 4.43 21.97 0 10.99-4.43 21.97Q787.13-448.05 779-440L522.83-183.83ZM497-210l254-254q7-7 7-17t-7-17L497-752q-7-7-17-6.5t-17 7.5L208-496q-7 7-6.5 16t7.5 16l254 254q7 7 17 7t17-7Z"/>
    </Icon>
  );
});

IconMaterialNearbyW100.displayName = 'OnesyIconMaterialNearbyW100';

export default IconMaterialNearbyW100;
