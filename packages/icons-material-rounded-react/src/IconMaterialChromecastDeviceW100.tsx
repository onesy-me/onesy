import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChromecastDeviceW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChromecastDeviceW100'

      short_name='ChromecastDevice'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M818-406q-12.75 0-21.37-8.51-8.63-8.51-8.63-21.09v-88.82q0-12.58 8.63-21.08 8.62-8.5 21.37-8.5h38q12.75 0 21.38 8.51 8.62 8.51 8.62 21.09v88.82q0 12.58-8.62 21.08-8.63 8.5-21.38 8.5h-38Zm-150 34H440q-22 0-43.5 5.5T345-348q-34 14-56.85 20T240-322q-57 0-102.5-31.5T92-430v-100q0-46 45.5-77T240-638q25.3 0 48.15 6Q311-626 345-612q30 13 51.5 18.5T440-588h228q24.75 0 42.38 17.62Q728-552.75 728-528v96q0 24.75-17.62 42.37Q692.75-372 668-372Zm-428 22q22 0 43-5t51-18q35-15 59-21t47-6h228q14 0 23-9t9-23v-96q0-14-9-23t-23-9H440q-23 0-47-6t-59-21q-30-13-51-18t-43-5q-47 0-83.5 22.28T120-530v36h24q5.6 0 9.8 4.2 4.2 4.2 4.2 9.8 0 5.6-4.2 9.8-4.2 4.2-9.8 4.2h-24v36q0 35.44 36.5 57.72T240-350ZM132-480Z"/>
    </Icon>
  );
});

IconMaterialChromecastDeviceW100.displayName = 'OnesyIconMaterialChromecastDeviceW100';

export default IconMaterialChromecastDeviceW100;
