import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCameraRollW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CameraRollW100Filled'

      short_name='CameraRoll'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-132q-24.75 0-42.37-17.63Q132-167.25 132-192v-536q0-24.75 17.63-42.38Q167.25-788 192-788h60v-48q0-13.6 9.2-22.8 9.2-9.2 22.8-9.2h72q13.6 0 22.8 9.2 9.2 9.2 9.2 22.8v48h60q24.75 0 42.38 17.62Q508-752.75 508-728v20h260q24.75 0 42.38 17.62Q828-672.75 828-648v376q0 24.75-17.62 42.37Q792.75-212 768-212H506v20q0 24.75-17.04 42.37Q471.92-132 448-132H192Zm218-442q11 0 19.5-8.5T438-602q0-11-8.5-19.5T410-630q-11 0-19.5 8.5T382-602q0 11 8.5 19.5T410-574Zm156 0q11 0 19.5-8.5T594-602q0-11-8.5-19.5T566-630q-11 0-19.5 8.5T538-602q0 11 8.5 19.5T566-574Zm156 0q11 0 19.5-8.5T750-602q0-11-8.5-19.5T722-630q-11 0-19.5 8.5T694-602q0 11 8.5 19.5T722-574ZM410-290q11 0 19.5-8.5T438-318q0-11-8.5-19.5T410-346q-11 0-19.5 8.5T382-318q0 11 8.5 19.5T410-290Zm156 0q11 0 19.5-8.5T594-318q0-11-8.5-19.5T566-346q-11 0-19.5 8.5T538-318q0 11 8.5 19.5T566-290Zm156 0q11 0 19.5-8.5T750-318q0-11-8.5-19.5T722-346q-11 0-19.5 8.5T694-318q0 11 8.5 19.5T722-290Z"/>
    </Icon>
  );
});

IconMaterialCameraRollW100Filled.displayName = 'OnesyIconMaterialCameraRollW100Filled';

export default IconMaterialCameraRollW100Filled;
