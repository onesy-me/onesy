import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRespiratoryRateW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RespiratoryRateW100Filled'

      short_name='RespiratoryRate'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M522-92q-13 0-21.5-8.5T492-122v-109q0-5 1-10.5t3-10.5l45-116q3-9 11-14.5t17-5.5h68v67l-36 36q-4 4-4 10t4 10q4 4 9.5 4t9.5-4l46-46v-169q0-6 4-10t10-4q6 0 10 4t4 10v169l45 45q4 4 10 4t10-4q4-4 4-9.5t-4-9.5l-37-37v-66h67q9 0 16.5 5.5T817-369l47 116q2 5 3 11t1 12v108q0 13-9 21.5T838-92h-92q-13 0-21.5-8.5T716-122v-128l-36-36-36 36v124q0 14-10 24t-24 10h-88ZM280-351l-68-135q-2-3-5-5.5t-7-2.5h-68v-194q0-26 17-43t43-17h576q26 0 43 17t17 43v190q0 13-8.5 21.5T798-468h-24v-32q0-39-27.5-66.5T680-594q-39 0-66.5 27.5T586-500v32l-43 3-91-181q-2-3-5-4.5t-7-1.5q-4 0-7.5 1.5T427-646L280-351Zm-88 139q-26 0-43-17t-17-43v-194h59l76 153q2 4 5 5.5t8 1.5q4 0 7-1t5-6l147-295 78 153q-17 9-30 23.5T466-398l-50 131q-2 5-3 10.5t-1 10.5v4q0 13-8.5 21.5T382-212H192Z"/>
    </Icon>
  );
});

IconMaterialRespiratoryRateW100Filled.displayName = 'OnesyIconMaterialRespiratoryRateW100Filled';

export default IconMaterialRespiratoryRateW100Filled;
