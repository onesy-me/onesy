import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDoNotDisturbOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoNotDisturbOff'

      short_name='DoNotDisturbOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m634-440-80-80h87q17 0 28 11.5t11 28.5q0 17-11.5 28.5T640-440h-6Zm-227-80v80h-87q-17 0-28.5-11.5T280-480q0-17 11.5-28.5T320-520h87Zm73 440q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-62 17-117.5T146-701l-90-91q-12-12-12-28.5T56-849q12-12 28.5-12t28.5 12l735 735q12 12 12 28.5T848-57q-12 12-28.5 12T791-57l-90-89q-48 32-103.5 49T480-80Zm0-80q45 0 85.5-12t76.5-33L205-642q-21 36-33 76.5T160-480q0 133 93.5 226.5T480-160Zm-56-264Zm135-135ZM314-844q39-18 81-27t85-9q80 0 153 30t130 87q57 57 87 130t30 153q0 43-9 85t-27 81q-7 15-23 19.5t-30-3.5q-14-8-19-24t2-32q13-30 19.5-62t6.5-64q0-134-93-227t-227-93q-32 0-64 6.5T354-774q-16 7-32 2t-24-19q-8-14-3.5-30t19.5-23Z"/>
    </Icon>
  );
});

IconMaterialDoNotDisturbOff.displayName = 'OnesyIconMaterialDoNotDisturbOff';

export default IconMaterialDoNotDisturbOff;
