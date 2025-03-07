import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHrRestingW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HrRestingW100'

      short_name='HrResting'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M191-172v-28h576v28H191Zm63-317q-21.23-20.04-31.12-47.49-9.88-27.46-9.88-56.4Q213-653 253-695t99-42q27.53 0 52.76 11Q430-715 450-695l30 30 30-29q20-20 45.24-31.5Q580.47-737 608-737q59.06 0 99.53 42.69T748-592q0 28.83-10.62 55.07Q726.77-510.7 707-490L480-271 254-489Zm19-20 207 200 208-201q17-16 25-37.5t8-44.5q0-48-32-82t-79.68-34Q587-708 567-699.5T531-675l-50 50-51-50q-16-16-35.5-25t-42.5-9q-48 0-80 34t-32 82q0 23 8 45t25 39Zm208 0Z"/>
    </Icon>
  );
});

IconMaterialHrRestingW100.displayName = 'OnesyIconMaterialHrRestingW100';

export default IconMaterialHrRestingW100;
