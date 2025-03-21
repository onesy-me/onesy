import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCheerW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CheerW100Filled'

      short_name='Cheer'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m318-784-22-63q-2-5 1-10t8-7q5-2 10 .5t7 7.5l22 63q2 5-1 10t-8 7q-5 2-10-.5t-7-7.5Zm148-46v-60q0-6 4-10t10-4q6 0 10 4t4 10v60q0 6-4 10t-10 4q-6 0-10-4t-4-10Zm150 37 22-63q2-5 7-7.5t10-.5q5 2 8 7t1 10l-22 63q-2 5-7 7.5t-10 .5q-5-2-8-7t-1-10Zm24 696q-26-4-46.5-21T565-161l-34-106q-9-28-1-55.5t30-45.5l41 130q2 5 7 7.5t10 .5q5-2 8-7t1-10l-91-284q-8-26-1-52.5t30-40.5q11-6 22.5-2.5T605-612l162 309q8 17 24 26t34 9h20q14 0 23 10t7 24L855-94q-2 13-11.5 20T821-69L640-97Zm-320-1L139-70q-13 2-22.5-5T105-95L85-235q-2-14 7-24t23-10h20q18 0 34-9t24-26l162-309q6-11 17.5-14.5T395-625q23 14 30 40.5t-1 52.5l-91 284q-2 5 1 10t8 7q5 2 10-1t7-8l41-129q22 18 30 45.5t-1 55.5l-34 106q-8 26-28.5 43T320-98Z"/>
    </Icon>
  );
});

IconMaterialCheerW100Filled.displayName = 'OnesyIconMaterialCheerW100Filled';

export default IconMaterialCheerW100Filled;
