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
      <path d="M788-406v-148h98v148h-98Zm-60 34H440q-22 0-43.5 5.5T345-348q-34 14-56.85 20T240-322q-57 0-102.5-31.5T92-430v-100q0-46 45.5-77T240-638q25.3 0 48.15 6Q311-626 345-612q30 13 51.5 18.5T440-588h288v216Zm-488 22q22 0 43-5t51-18q35-15 59-21t47-6h260v-160H440q-23 0-47-6t-59-21q-30-13-51-18t-43-5q-47 0-83.5 22.28T120-530v36h24q5.6 0 9.8 4.2 4.2 4.2 4.2 9.8 0 5.6-4.2 9.8-4.2 4.2-9.8 4.2h-24v36q0 35.44 36.5 57.72T240-350ZM132-480Z"/>
    </Icon>
  );
});

IconMaterialChromecastDeviceW100.displayName = 'OnesyIconMaterialChromecastDeviceW100';

export default IconMaterialChromecastDeviceW100;
