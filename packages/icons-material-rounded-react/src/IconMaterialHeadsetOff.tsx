import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHeadsetOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeadsetOff'

      short_name='HeadsetOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M800-280q-15 0-27.5-10.5T760-321v-79h-80q-20 0-30-12.5T640-440q0-15 10-27.5t30-12.5h80v-40q0-118-82-199t-198-81q-44 0-83.5 12.5T324-752l-58-56q45-35 99.5-53.5T480-880q74 0 139.5 28T734-775q49 49 77.5 114.5T840-520v200q0 20-12.5 30T800-280ZM520-40q-17 0-28.5-11.5T480-80q0-17 11.5-28.5T520-120h207l-40-40h-7q-33 0-56.5-23.5T600-240v-7L221-626q-9 24-15 51.5t-6 54.5v40h80q33 0 56.5 23.5T360-400v160q0 33-23.5 56.5T280-160h-80q-33 0-56.5-23.5T120-240v-280q0-45 10.5-87t30.5-80L56-792q-12-12-12-28t12-28q12-11 28-11.5t28 11.5L868-91q14 14 6.5 32.5T847-40H520ZM200-400v160h80v-160h-80Zm0 0h80-80Zm480 0h80-80Z"/>
    </Icon>
  );
});

IconMaterialHeadsetOff.displayName = 'OnesyIconMaterialHeadsetOff';

export default IconMaterialHeadsetOff;
