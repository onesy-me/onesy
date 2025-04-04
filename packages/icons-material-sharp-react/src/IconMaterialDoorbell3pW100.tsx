import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDoorbell3pW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Doorbell3pW100'

      short_name='Doorbell3p'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M252-132v-696h456v696H252Zm28-28h400v-640H280v640Zm200-66q30.52 0 52.26-21.74T554-300q0-30.52-21.74-52.26T480-374q-30.52 0-52.26 21.74T406-300q0 30.52 21.74 52.26T480-226Zm0-28q-19 0-32.5-13.5T434-300q0-19 13.5-32.5T480-346q19 0 32.5 13.5T526-300q0 19-13.5 32.5T480-254Zm0-182q14.4 0 23.2-8.8 8.8-8.8 8.8-23.2h-64q0 14 8.8 23t23.2 9Zm-128-52h256v-28h-32v-73.87Q576-626 558-654q-18-28-52.08-37.86V-728H454v35.8q-34 12.2-52 39.4t-18 63.2v73.6h-32v28Zm-72 328v-640 640Z"/>
    </Icon>
  );
});

IconMaterialDoorbell3pW100.displayName = 'OnesyIconMaterialDoorbell3pW100';

export default IconMaterialDoorbell3pW100;
