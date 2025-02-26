import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowsMoreUpW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowsMoreUpW100'

      short_name='ArrowsMoreUp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M545.96-252q-5.96 0-9.96-4.02-4-4.03-4-9.98v-346H186q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h344q12.75 0 21.38 8.62Q560-622.75 560-610v344q0 5.95-4.04 9.98-4.03 4.02-10 4.02Zm148-147q-5.96 0-9.96-4.02-4-4.03-4-9.98v-346H334q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h344q12.75 0 21.38 8.62Q708-769.75 708-757v344q0 5.95-4.04 9.98-4.03 4.02-10 4.02Z"/>
    </Icon>
  );
});

IconMaterialArrowsMoreUpW100.displayName = 'OnesyIconMaterialArrowsMoreUpW100';

export default IconMaterialArrowsMoreUpW100;
