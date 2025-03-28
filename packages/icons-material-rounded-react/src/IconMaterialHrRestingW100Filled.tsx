import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHrRestingW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HrRestingW100Filled'

      short_name='HrResting'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M205-172q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h548q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H205Zm49-317q-21.23-20.04-31.12-47.49-9.88-27.46-9.88-56.4Q213-653 253-695t99-42q27.53 0 52.76 11Q430-715 450-695l30 30 30-29q20-20 45.24-31.5Q580.47-737 608-737q59.06 0 99.53 42.69T748-592q0 28.83-10.62 55.07Q726.77-510.7 707-490L499-289q-3.95 4-8.97 6-5.03 2-10.03 2-5 0-10.03-2-5.02-2-8.97-6L254-489Z"/>
    </Icon>
  );
});

IconMaterialHrRestingW100Filled.displayName = 'OnesyIconMaterialHrRestingW100Filled';

export default IconMaterialHrRestingW100Filled;
