import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialModeHeatOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ModeHeatOffW100Filled'

      short_name='ModeHeatOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M794-74 641-227q-20 15-41.5 26.5T553-182q20-15 33-37t15-48l-29-29q1 5 1.5 9t.5 9q0 38-27.5 65T480-186q-39 0-66.5-27T386-278q0-18 6.5-34t20.5-30l57-56-20-20-56 56q-17 17-26.5 38.5T358-278q0 29 13 54t36 42q-85-24-140-94.5T212-440q0-48 13-90t34-79L126-742l20-20L814-94l-20 20ZM683-265 291-657q32-42 68.5-74.5T428-787v39q0 61 41 96.5t92 35.5q20 0 38-6t35-17l17-11q45 38 71 92.5T748-440q0 51-17 95.5T683-265Z"/>
    </Icon>
  );
});

IconMaterialModeHeatOffW100Filled.displayName = 'OnesyIconMaterialModeHeatOffW100Filled';

export default IconMaterialModeHeatOffW100Filled;
