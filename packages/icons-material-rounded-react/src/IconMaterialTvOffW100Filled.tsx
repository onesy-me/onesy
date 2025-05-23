import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTvOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TvOffW100Filled'

      short_name='TvOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M828-728v371q0 10-5.5 17T809-330q-8 3-16.5 2t-15.5-8L376-737q-7-7-8-15.5t2-16.5q3-8 10-13.5t17-5.5h371q26 0 43 17t17 43Zm-616-60v40l-98-98q-4-4-4.5-9.5T114-866q5-5 10-5t10 5l714 714q4 4 4.5 9.5T848-132q-5 5-10 5t-10-5L708-252H590v50q0 13-8.5 21.5T560-172H402q-13 0-21.5-8.5T372-202v-50H192q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h20Z"/>
    </Icon>
  );
});

IconMaterialTvOffW100Filled.displayName = 'OnesyIconMaterialTvOffW100Filled';

export default IconMaterialTvOffW100Filled;
