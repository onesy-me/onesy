import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSwapHorizW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwapHorizW100'

      short_name='SwapHoriz'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m186-363 120 120q4 4 4.5 9.5T306-223q-5 5-10 5t-10-5L153-356q-5-5-7-10t-2-11q0-6 2-11t7-10l133-133q4-4 9.5-4.5T306-531q5 5 5 10t-5 10L186-391h284q6 0 10 4t4 10q0 6-4 10t-10 4H186Zm588-207H490q-6 0-10-4t-4-10q0-6 4-10t10-4h284L654-718q-4-4-4.5-9.5T654-738q5-5 10-5t10 5l133 133q5 5 7 10t2 11q0 6-2 11t-7 10L674-430q-4 4-9.5 4.5T654-430q-5-5-5-10t5-10l120-120Z"/>
    </Icon>
  );
});

IconMaterialSwapHorizW100.displayName = 'OnesyIconMaterialSwapHorizW100';

export default IconMaterialSwapHorizW100;
