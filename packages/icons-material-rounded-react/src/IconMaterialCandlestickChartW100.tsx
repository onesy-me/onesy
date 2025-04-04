import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCandlestickChartW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CandlestickChartW100'

      short_name='CandlestickChart'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M332-226v-66h-50q-12.75 0-21.37-8.63Q252-309.25 252-322v-315.59q0-13.41 8.63-21.91 8.62-8.5 21.37-8.5h50v-66q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v66h50q12.75 0 21.38 8.62Q440-650.75 440-638v315.59q0 13.41-8.62 21.91-8.63 8.5-21.38 8.5h-50v66q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98Zm-52-94h132v-320H280v320Zm320 94v-166h-50q-12.75 0-21.37-8.63Q520-409.25 520-422v-146q0-12.75 8.63-21.38Q537.25-598 550-598h50v-136q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v136h50q12.75 0 21.38 8.62Q708-580.75 708-568v146q0 12.75-8.62 21.37Q690.75-392 678-392h-50v166q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98Zm-52-194h132v-150H548v150Zm-202-60Zm268-15Z"/>
    </Icon>
  );
});

IconMaterialCandlestickChartW100.displayName = 'OnesyIconMaterialCandlestickChartW100';

export default IconMaterialCandlestickChartW100;
