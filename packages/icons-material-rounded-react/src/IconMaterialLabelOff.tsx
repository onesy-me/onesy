import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLabelOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LabelOff'

      short_name='LabelOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M765-375q-11 17-27.5 18t-28.5-8q-12-9-16.5-24.5T700-422l42-58-142-200H411q-20 0-30-12.5T371-720q0-15 10-27.5t30-12.5h189q20 0 37 8.5t29 25.5l141 200q8 11 11.5 22.5T822-480q0 12-3.5 23.5T807-434l-42 59ZM200-200q-33 0-56.5-23.5T120-280v-400q0-11 2.5-20t7.5-18l-46-46q-11-11-11-28t11-28q11-11 28-11t28 11l680 680q11 11 11 28t-11 28q-11 11-28 11t-28-11L638-210q-9 5-18 7.5t-20 2.5H200Zm183-264Zm154-73Zm31 257L200-648v368h368Z"/>
    </Icon>
  );
});

IconMaterialLabelOff.displayName = 'OnesyIconMaterialLabelOff';

export default IconMaterialLabelOff;
