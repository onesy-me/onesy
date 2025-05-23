import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNotListedLocationW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotListedLocationW100Filled'

      short_name='NotListedLocation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-353q9 0 15.5-6.5T502-375q0-9-6.5-15.5T480-397q-9 0-15.5 6.5T458-375q0 9 6.5 15.5T480-353Zm-14-106h28q1-14 3-22t7-16q6-9 14.5-19t23.5-25q19-19 27.5-36.5T578-617q0-38-27.5-62T484-703q-32 0-58.5 16.5T386-641l26 11q11-22 29-33.5t43-11.5q26 0 46 16t20 42q0 19-8 33.5T512-549q-13 12-22 23t-14 22q-5 11-7.5 22t-2.5 23Zm14 328Q345-252 276-357t-69-190q0-120 78.5-200.5T480-828q116 0 194.5 80.5T753-547q0 85-69 190T480-131Z"/>
    </Icon>
  );
});

IconMaterialNotListedLocationW100Filled.displayName = 'OnesyIconMaterialNotListedLocationW100Filled';

export default IconMaterialNotListedLocationW100Filled;
