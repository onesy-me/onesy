import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBrowseActivityW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrowseActivityW100'

      short_name='BrowseActivity'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-550v-154q0-26 17-43t43-17h576q26 0 43 17t17 43v154h-28v-154q0-12-10-22t-22-10H192q-12 0-22 10t-10 22v154h-28Zm60 282q-26 0-43-17t-17-43v-194h28v194q0 12 10 22t22 10h576q12 0 22-10t10-22v-194h28v194q0 26-17 43t-43 17H192Zm-98 68q-6 0-10-4t-4-10q0-6 4-10t10-4h772q6 0 10 4t4 10q0 6-4 10t-10 4H94Zm386-316Zm-348-6v-28h188q4 0 7.5 2t5.5 6l70 140 144-260q2-4 5.5-5t7.5-1q4 0 7.5 1t5.5 5l56 112h199v28H630q-8 0-15.5-4.5T603-539l-45-89-145 258q-2 4-5.5 6t-7.5 2q-4 0-7.5-2t-5.5-6l-76-152H132Z"/>
    </Icon>
  );
});

IconMaterialBrowseActivityW100.displayName = 'OnesyIconMaterialBrowseActivityW100';

export default IconMaterialBrowseActivityW100;
