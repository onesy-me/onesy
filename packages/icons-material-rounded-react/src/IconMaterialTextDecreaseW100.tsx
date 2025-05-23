import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTextDecreaseW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextDecreaseW100'

      short_name='TextDecrease'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M634-466q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h240q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H634Zm-472 94-56 137q-2 4-5 6.5t-7.92 2.5Q85-226 81-232t-1-13l202-483q1-2 3.21-4t4.79-2h7.76q3.24 0 5.24 2t3 4l201 480q3 8-1.64 15t-12.55 7q-4.81 0-8.95-2.67-4.14-2.66-5.86-7.33l-56-136H162Zm10-26h240L295.67-682H290L172-398Z"/>
    </Icon>
  );
});

IconMaterialTextDecreaseW100.displayName = 'OnesyIconMaterialTextDecreaseW100';

export default IconMaterialTextDecreaseW100;
