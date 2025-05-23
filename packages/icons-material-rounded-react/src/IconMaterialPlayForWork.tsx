import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPlayForWork = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlayForWork'

      short_name='PlayForWork'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-160q-90 0-157-56.5T243-360q-2-16 9-28t28-12q17 0 28.5 8.5T323-369q11 57 55.5 93T480-240q57 0 101.5-36t55.5-93q3-14 14.5-22.5T680-400q17 0 28 12t9 28q-13 87-80 143.5T480-160Zm-40-354v-206q0-17 11.5-28.5T480-760q17 0 28.5 11.5T520-720v206l36-36q12-12 28-11.5t28 12.5q11 12 11.5 28T612-493L508-389q-6 6-13 8.5t-15 2.5q-8 0-15-2.5t-13-8.5L348-493q-11-11-11-27.5t11-28.5q12-12 28.5-12t28.5 12l35 35Z"/>
    </Icon>
  );
});

IconMaterialPlayForWork.displayName = 'OnesyIconMaterialPlayForWork';

export default IconMaterialPlayForWork;
