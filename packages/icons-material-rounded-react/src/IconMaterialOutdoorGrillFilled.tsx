import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOutdoorGrillFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OutdoorGrillFilled'

      short_name='OutdoorGrill'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M640-320q50 0 85 35t35 85q0 50-35 85t-85 35q-38 0-68.5-22T528-160H274l-40 62q-9 14-25.5 17.5T178-86q-14-9-17.5-25.5T166-142l158-242q-63-29-107-85.5T165-595q-2-18 10-31.5t30-13.5h470q18 0 30 13.5t10 31.5q-8 69-52 125.5T556-384l23 36q-21 10-34.5 20T515-300l-40-62q-8 2-17 2h-36q-9 0-17-2l-79 122h202q13-36 43.5-58t68.5-22Zm0 160q17 0 28.5-11.5T680-200q0-17-11.5-28.5T640-240q-17 0-28.5 11.5T600-200q0 17 11.5 28.5T640-160ZM307-775q-17-21-24-40.5t-6-43.5q0-9 6.5-15t15.5-6q8 0 13 6t5 14q-1 20 6.5 36.5T348-786q17 22 24.5 41.5T378-701q-1 9-7 15t-15 6q-8 0-13-6t-5-14q1-20-6.5-37T307-775Zm101 0q-17-20-24.5-39.5T377-859q0-9 6.5-15t15.5-6q8 0 13 6t5 14q-1 20 6.5 36.5T448-786q17 21 24.5 40.5T478-700q-1 9-7 14.5t-15 5.5q-8 0-13-6t-5-14q1-20-6-37t-24-38Zm100 0q-17-20-24.5-39.5T477-859q0-9 6.5-15t15.5-6q8 0 13 6t5 14q-1 20 6.5 36.5T548-786q17 21 24.5 40.5T578-700q-1 9-7 14.5t-15 5.5q-8 0-13-6t-5-14q1-20-6-37t-24-38Z"/>
    </Icon>
  );
});

IconMaterialOutdoorGrillFilled.displayName = 'OnesyIconMaterialOutdoorGrillFilled';

export default IconMaterialOutdoorGrillFilled;
