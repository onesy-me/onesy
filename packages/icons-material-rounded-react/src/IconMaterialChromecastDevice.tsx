import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChromecastDevice = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChromecastDevice'

      short_name='ChromecastDevice'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M840-380q-17 0-28.5-11.5T800-420v-120q0-17 11.5-28.5T840-580h40q17 0 28.5 11.5T920-540v120q0 17-11.5 28.5T880-380h-40Zm-160 60H440q-16 0-32.5 4.5T366-300q-39 17-67 23.5t-59 6.5q-78 0-139-46T40-420v-120q0-59 61-104.5T240-690q31 0 59 6.5t67 23.5q25 11 41.5 15.5T440-640h240q33 0 56.5 23.5T760-560v160q0 33-23.5 56.5T680-320Zm-440-30q22 0 43-5t51-18q35-15 59-21t47-6h240v-160H440q-23 0-47-6t-59-21q-30-13-51-18t-43-5q-47 0-83.5 21.5T120-540v40h20q8 0 14 6t6 14q0 8-6 14t-14 6h-20v40q0 27 36.5 48.5T240-350ZM120-480Z"/>
    </Icon>
  );
});

IconMaterialChromecastDevice.displayName = 'OnesyIconMaterialChromecastDevice';

export default IconMaterialChromecastDevice;
