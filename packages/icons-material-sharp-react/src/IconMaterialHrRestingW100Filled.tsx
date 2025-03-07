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
      <path d="M191-172v-28h576v28H191Zm63-317q-21.23-20.04-31.12-47.49-9.88-27.46-9.88-56.4Q213-653 253-695t99-42q27.53 0 52.76 11Q430-715 450-695l30 30 30-29q20-20 45.24-31.5Q580.47-737 608-737q59.06 0 99.53 42.69T748-592q0 28.83-10.62 55.07Q726.77-510.7 707-490L480-271 254-489Z"/>
    </Icon>
  );
});

IconMaterialHrRestingW100Filled.displayName = 'OnesyIconMaterialHrRestingW100Filled';

export default IconMaterialHrRestingW100Filled;
