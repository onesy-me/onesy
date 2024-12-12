import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMovingW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MovingW100'

      short_name='Moving'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m131-276-20-20 194-194q28-27 66.5-27.5T438-490l46 46q20 20 47 19.5t47-19.5l223-222H661v-28h188v188h-28v-140L598-424q-28 27-67 27.5T465-423l-47-47q-20-20-46.5-19.5T325-470L131-276Z"/>
    </Icon>
  );
});

IconMaterialMovingW100.displayName = 'OnesyIconMaterialMovingW100';

export default IconMaterialMovingW100;
