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
      <path d="M524-92q-73 0-137-27.5T275-195q-48-48-75.5-112T172-444q0-95 47-176.5T349-749q14-8 27.5-1.5T392-729q8 81 41.5 154.5T524-444q57 57 129.5 90T807-313q16 2 23 16t-1 28q-47 83-128.5 130T524-92Zm0-28q88 0 163-44t118-121q-86-8-163-44t-138-97q-61-61-97-137.5T364-726q-77 43-120.5 118.5T200-444q0 135 94.5 229.5T524-120Zm-20-306Z"/>
    </Icon>
  );
});

IconMaterialBedtimeW100.displayName = 'OnesyIconMaterialBedtimeW100';

export default IconMaterialBedtimeW100;
