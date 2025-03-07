import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPermCameraMic = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PermCameraMic'

      short_name='PermCameraMic'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-120q-33 0-56.5-23.5T80-200v-480q0-33 23.5-56.5T160-760h126l50-54q11-12 26.5-19t32.5-7h170q17 0 32.5 7t26.5 19l50 54h126q33 0 56.5 23.5T880-680v480q0 33-23.5 56.5T800-120H640q-17 0-28.5-11.5T600-160q0-17 11.5-28.5T640-200h160v-480H638l-73-80H395l-73 80H160v480h160q17 0 28.5 11.5T360-160q0 17-11.5 28.5T320-120H160Zm320-280q33 0 56.5-23.5T560-480v-160q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640v160q0 33 23.5 56.5T480-400ZM160-200h640-640Zm320-120q-55 0-97.5-33T326-437q-5-17-17-30t-29-13q-17 0-28 14t-8 31q14 74 67.5 126.5T440-244v84q0 17 11.5 28.5T480-120q17 0 28.5-11.5T520-160v-84q75-12 128.5-64.5T716-435q3-17-8-31t-28-14q-17 0-29 13t-17 30q-14 51-56.5 84T480-320Z"/>
    </Icon>
  );
});

IconMaterialPermCameraMic.displayName = 'OnesyIconMaterialPermCameraMic';

export default IconMaterialPermCameraMic;
