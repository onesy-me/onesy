import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWifiCallingW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiCallingW100'

      short_name='WifiCalling'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M759-172q-103 0-207.5-48.5T358-358q-88-89-137-194.5T172-759v-29h160l33 152-106 96q29 50 59 90.5t62 72.5q33 35 75 65t97 60l101-106 135 27v159h-29ZM246-566l89-80-25-114H200q0 46 11.5 94.5T246-566Zm332 326q36 19 84.5 29.5T760-200v-109l-96-19-86 88ZM246-566Zm332 326Zm82-328L494-734q38-28 81-43t85-15q42 0 85 15t81 43L660-568Zm0-40 120-120q-34-19-63-27.5t-57-8.5q-28 0-57 8.5T540-728l120 120Zm0 0Z"/>
    </Icon>
  );
});

IconMaterialWifiCallingW100.displayName = 'OnesyIconMaterialWifiCallingW100';

export default IconMaterialWifiCallingW100;
