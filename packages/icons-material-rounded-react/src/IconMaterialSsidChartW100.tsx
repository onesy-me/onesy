import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSsidChartW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SsidChartW100'

      short_name='SsidChart'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-376q0-3 1.5-6t4.5-5l18-13q18-13 39.5-11.5T273-395l190 184q9 8 20.5 9t21.5-7l140-112q8-7 17-10t20-3h92q6 0 10 4t4 10q0 6-4 10t-10 4h-92q-5 0-10 1.5t-10 5.5L523-188q-18 14-40 13t-39-17L254-375q-8-8-19.5-9.5T213-379l-19 15q-7 5-14.5 1t-7.5-13Zm0-241q0-3 2-6t4-5l90-67q18-14 40.5-12t38.5 18l119 119q8 8 19.5 9t21.5-6l259-187q7-5 14.5-1t7.5 13q0 4-1.5 6.5T782-731L524-544q-18 13-39.5 11.5T447-550L327-670q-8-8-19.5-9t-21.5 6l-92 67q-7 5-14.5 1.5T172-617Z"/>
    </Icon>
  );
});

IconMaterialSsidChartW100.displayName = 'OnesyIconMaterialSsidChartW100';

export default IconMaterialSsidChartW100;
