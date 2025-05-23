import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialScaleW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScaleW100'

      short_name='Scale'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172q4-66 23.5-117.5t52.5-90q33-38.5 78-63T426-478v-119q-130-14-185.5-68T174-788h612q-12 69-67 123t-185 68v119q55 11 100 35.5t78 63q33 38.5 52.5 90T788-172H614v-28h146q-21-136-100.5-195T480-454q-100 0-179.5 59T200-200h146v28H172Zm308-451q137 0 197.5-46.5T748-760H212q9 44 70 90.5T480-623Zm0 451q-23 0-38.5-15.5T426-226q0-11 4-20.5t12-16.5q14-14 61.5-36.5T593-339q-17 38-39.5 87.5T517-188q-7 8-16.5 12t-20.5 4Zm0-451Z"/>
    </Icon>
  );
});

IconMaterialScaleW100.displayName = 'OnesyIconMaterialScaleW100';

export default IconMaterialScaleW100;
