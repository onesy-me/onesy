import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBrowseActivityW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrowseActivityW100Filled'

      short_name='BrowseActivity'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M94-200q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h772q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H94Zm98-68q-26 0-43-17t-17-43v-194h179l76 152q1.85 3.64 5.36 5.82 3.51 2.18 7.57 2.18 4.07 0 7.67-2 3.6-2 5.4-6l145-258 45 89q4 8 11.42 12.5T630-522h198v194q0 26-17 43t-43 17H192Zm211-134-70-140q-1.81-3.64-5.42-5.82T320-550H132v-154q0-26 17-43t43-17h576q26 0 43 17t17 43v154H629l-56-112q-2-4-5.57-5-3.57-1-7.5-1t-7.43 1q-3.5 1-5.5 5L403-402Z"/>
    </Icon>
  );
});

IconMaterialBrowseActivityW100Filled.displayName = 'OnesyIconMaterialBrowseActivityW100Filled';

export default IconMaterialBrowseActivityW100Filled;
