import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTextRotateUp = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextRotateUp'

      short_name='TextRotateUp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m680-688-14 14q-11 11-28 11t-28-11q-11-11-11-28t11-28l82-82q12-12 28-11.5t28 11.5l83 81q12 12 11.5 28.5T830-674q-12 11-28 11.5T774-674l-14-14v488q0 17-11.5 28.5T720-160q-17 0-28.5-11.5T680-200v-488ZM448-392l89 32q11 4 17 13t6 20q0 19-15.5 29.5T512-294L144-431q-11-4-17.5-13.5T120-466v-28q0-12 6.5-21.5T144-529l369-137q17-6 32 4t15 28q0 11-6.5 20.5T536-600l-88 30v178Zm-64-22v-132l-182 64v4l182 64Z"/>
    </Icon>
  );
});

IconMaterialTextRotateUp.displayName = 'OnesyIconMaterialTextRotateUp';

export default IconMaterialTextRotateUp;
