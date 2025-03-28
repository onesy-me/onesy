import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAvgTimeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AvgTimeFilled'

      short_name='AvgTime'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-840q-17 0-28.5-11.5T360-880q0-17 11.5-28.5T400-920h160q17 0 28.5 11.5T600-880q0 17-11.5 28.5T560-840H400Zm0 470-44-88q-5-11-15-16.5t-21-5.5H122q15-135 117-227.5T480-800q62 0 119 20t107 58l28-28q11-11 28-11.5t28 11.5q11 11 11 28t-11 28l-28 28q32 42 51 88.5t25 97.5H665l-69-138q-11-23-36-23t-36 23L400-370Zm80 290q-139 0-241-92.5T122-400h173l69 138q11 23 36 23t36-23l124-248 44 88q5 11 15 16.5t21 5.5h198q-15 135-116.5 227.5T480-80Z"/>
    </Icon>
  );
});

IconMaterialAvgTimeFilled.displayName = 'OnesyIconMaterialAvgTimeFilled';

export default IconMaterialAvgTimeFilled;
