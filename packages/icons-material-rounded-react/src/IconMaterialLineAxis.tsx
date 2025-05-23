import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLineAxis = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineAxis'

      short_name='LineAxis'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m110-290 213-213q23-23 57-23t57 23l103 103 67-76-224-207-213 213q-13 13-30 13t-30-13q-13-13-13-30t13-30l216-216q23-23 54.5-23.5T436-748l228 209 132-150q11-13 28.5-13t29.5 12q11 11 11.5 26.5T855-636L722-486l126 116q14 12 14 30t-13 31q-12 12-29 12t-30-11L666-422l-70 78q-23 26-57 27.5T480-340L380-440 170-230q-13 13-30 13t-30-13q-13-13-13-30t13-30Z"/>
    </Icon>
  );
});

IconMaterialLineAxis.displayName = 'OnesyIconMaterialLineAxis';

export default IconMaterialLineAxis;
