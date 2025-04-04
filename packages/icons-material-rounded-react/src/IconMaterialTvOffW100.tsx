import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTvOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TvOffW100'

      short_name='TvOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M828-728v400q0 7-4.32 10.5t-9.5 3.5q-5.18 0-9.68-3.59-4.5-3.58-4.5-10.41v-400q0-14-9-23t-23-9H348q-7 0-10.5-4.32t-3.5-9.5q0-5.18 3.5-9.68T348-788h420q26 0 43 17t17 43Zm-616-60 28 28h-48q-12 0-22 10t-10 22v416q0 14 9 23t23 9h488L114-846q-4-4-4.5-9.5t4.72-10.72Q119-871 124-871q5 0 10 5l714 714q4 4 4.5 9.5T848-132q-3.67 4-9.33 4-5.67 0-10.67-4L706-252H588v50q0 12.75-8.62 21.37Q570.75-172 558-172H402q-12.75 0-21.37-8.63Q372-189.25 372-202v-50H192q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h20Zm236 277Zm145-10Z"/>
    </Icon>
  );
});

IconMaterialTvOffW100.displayName = 'OnesyIconMaterialTvOffW100';

export default IconMaterialTvOffW100;
