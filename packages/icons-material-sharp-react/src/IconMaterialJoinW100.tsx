import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialJoinW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='JoinW100'

      short_name='Join'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M640-280q83 0 141.5-58.5T840-480q0-83-58.5-141.5T640-680q-42 0-78 15.5T499-622q23 29 36 65.5t13 76.5q0 40-13 76.5T499-338q27 27 63 42.5t78 15.5Zm-160-80q19-25 29.5-55.5T520-480q0-34-10.5-64.5T480-600q-19 25-29.5 55.5T440-480q0 34 10.5 64.5T480-360Zm-160 80q42 0 78-15.5t63-42.5q-23-29-36-65.5T412-480q0-40 13-76.5t36-65.5q-27-27-63-42.5T320-680q-83 0-141.5 58.5T120-480q0 83 58.5 141.5T320-280Zm0 28q-95 0-161.5-66.5T92-480q0-95 66.5-161.5T320-708q47 0 88 17.5t72 48.5q31-31 72-48.5t88-17.5q95 0 161.5 66.5T868-480q0 95-66.5 161.5T640-252q-47 0-88-17.5T480-318q-31 31-72 48.5T320-252Z"/>
    </Icon>
  );
});

IconMaterialJoinW100.displayName = 'OnesyIconMaterialJoinW100';

export default IconMaterialJoinW100;
