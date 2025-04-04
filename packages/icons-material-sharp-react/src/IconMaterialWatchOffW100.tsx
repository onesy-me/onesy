import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWatchOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WatchOffW100'

      short_name='WatchOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M772-112 598-286l-6 4-30 108H398l-30-108q-51-27-83.5-79.5T252-480q0-32 8.5-62.5T285-599L112-772l20-20 660 660-20 20ZM480-280q24 0 50.5-6.5T577-306L306-577q-14 23-20 48.5t-6 48.5q0 83 58.5 141.5T480-280Zm196-82-21-21q11-22 18-45t7-52q0-83-58.5-141.5T480-680q-29 0-54 7.5T383-655l-20-20 5-3 30-108h164l30 108q54 28 85 82.5T708-480q0 34-9 63t-23 55ZM420-202h120l18-64q-17 7-38.5 10.5T480-252q-18 0-39.5-4T402-266l18 64Zm-18-492q17-6 39-10t39-4q19 0 40 4t38 10l-18-64H420l-18 64Zm18 492h-18 156-138Zm-18-556h156-156Z"/>
    </Icon>
  );
});

IconMaterialWatchOffW100.displayName = 'OnesyIconMaterialWatchOffW100';

export default IconMaterialWatchOffW100;
