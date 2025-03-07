import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNestConnectW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestConnectW100'

      short_name='NestConnect'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M479.85-226Q552-226 603-276.9q51-50.89 51-123.1v-160q0-72.21-50.85-123.1-50.85-50.9-123-50.9T357-683.1q-51 50.89-51 123.1v160q0 72.21 50.85 123.1 50.85 50.9 123 50.9Zm.03-28Q419-254 376.5-296.58 334-339.17 334-400v-160q0-60.83 42.62-103.42Q419.24-706 480.12-706t103.38 42.58Q626-620.83 626-560v160q0 60.83-42.62 103.42Q540.76-254 479.88-254Zm.12-318q11 0 19.5-8.5T508-600q0-11-8.5-19.5T480-628q-11 0-19.5 8.5T452-600q0 11 8.5 19.5T480-572ZM232-92q-24.75 0-42.37-17.63Q172-127.25 172-152v-656q0-24.75 17.63-42.38Q207.25-868 232-868h496q24.75 0 42.38 17.62Q788-832.75 788-808v656q0 24.75-17.62 42.37Q752.75-92 728-92H232Zm0-28h496q14 0 23-9t9-23v-656q0-14-9-23t-23-9H232q-14 0-23 9t-9 23v656q0 14 9 23t23 9Zm-32 0v-720 720Z"/>
    </Icon>
  );
});

IconMaterialNestConnectW100.displayName = 'OnesyIconMaterialNestConnectW100';

export default IconMaterialNestConnectW100;
