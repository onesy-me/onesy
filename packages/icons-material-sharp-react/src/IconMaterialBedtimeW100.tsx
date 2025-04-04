import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBedtimeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BedtimeW100'

      short_name='Bedtime'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M524-92q-73.09 0-137.05-27.5Q323-147 275-195t-75.5-111.95Q172-370.91 172-444q0-108 59.5-196.5T391-769q0 92 34 176t99 149q65 65 149 99t176 34q-40 100-128.5 159.5T524-92Zm0-28q88 0 163-44t118-121.28q-86-8.03-163-43.65-77-35.63-138-96.85Q443-487 407-563.5T364-726q-77 43-120.5 118.5T200-444q0 135 94.5 229.5T524-120Zm-20-306Z"/>
    </Icon>
  );
});

IconMaterialBedtimeW100.displayName = 'OnesyIconMaterialBedtimeW100';

export default IconMaterialBedtimeW100;
