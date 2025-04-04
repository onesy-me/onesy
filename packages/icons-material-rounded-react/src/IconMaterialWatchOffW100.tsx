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
      <path d="M762-122 598-286l-6 4-21 74q-5 15-16.5 24.5T527-174h-94q-16 0-27.5-9.5T389-208l-21-74q-51-27-83.5-79.5T252-480q0-32 8.5-62.5T285-599L122-762q-4-4-4.5-9.5T122-782q5-5 10-5t10 5l640 640q4 4 4.5 9.5T782-122q-5 5-10 5t-10-5ZM480-280q24 0 50.5-6.5T577-306L306-577q-14 23-20 48.5t-6 48.5q0 83 58.5 141.5T480-280Zm196-82-21-21q11-22 18-45t7-52q0-83-58.5-141.5T480-680q-29 0-54 7.5T383-655l-20-20 5-3 21-74q5-15 16.5-24.5T433-786h94q16 0 27.5 9.5T571-752l21 74q54 28 85 82.5T708-480q0 34-9 63t-23 55ZM420-202h120l18-64q-17 7-38.5 10.5T480-252q-18 0-39.5-4T402-266l18 64Zm-18-492q17-6 39-10t39-4q19 0 40 4t38 10l-18-64H420l-18 64Zm18 492h-18 156-138Zm-18-556h156-156Z"/>
    </Icon>
  );
});

IconMaterialWatchOffW100.displayName = 'OnesyIconMaterialWatchOffW100';

export default IconMaterialWatchOffW100;
