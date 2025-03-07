import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCameraRollW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CameraRollW100'

      short_name='CameraRoll'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-132q-25 0-42.5-17.5T132-192v-536q0-25 17.5-42.5T192-788h60v-48q0-14 9-23t23-9h72q14 0 23 9t9 23v48h60q25 0 42.5 17.5T508-728v20h260q25 0 42.5 17.5T828-648v376q0 25-17.5 42.5T768-212H506v20q0 25-17 42.5T448-132H192Zm0-28h256q14 0 23-9t9-23v-48h288q14 0 23-9t9-23v-376q0-14-9-23t-23-9H480v-48q0-14-9-23t-23-9H192q-14 0-23 9t-9 23v536q0 14 9 23t23 9Zm218-414q11 0 19.5-8.5T438-602q0-11-8.5-19.5T410-630q-11 0-19.5 8.5T382-602q0 11 8.5 19.5T410-574Zm156 0q11 0 19.5-8.5T594-602q0-11-8.5-19.5T566-630q-11 0-19.5 8.5T538-602q0 11 8.5 19.5T566-574Zm156 0q11 0 19.5-8.5T750-602q0-11-8.5-19.5T722-630q-11 0-19.5 8.5T694-602q0 11 8.5 19.5T722-574ZM410-290q11 0 19.5-8.5T438-318q0-11-8.5-19.5T410-346q-11 0-19.5 8.5T382-318q0 11 8.5 19.5T410-290Zm156 0q11 0 19.5-8.5T594-318q0-11-8.5-19.5T566-346q-11 0-19.5 8.5T538-318q0 11 8.5 19.5T566-290Zm156 0q11 0 19.5-8.5T750-318q0-11-8.5-19.5T722-346q-11 0-19.5 8.5T694-318q0 11 8.5 19.5T722-290ZM320-460Z"/>
    </Icon>
  );
});

IconMaterialCameraRollW100.displayName = 'OnesyIconMaterialCameraRollW100';

export default IconMaterialCameraRollW100;
