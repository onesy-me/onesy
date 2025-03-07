import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDeleteHistoryW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeleteHistoryW100Filled'

      short_name='DeleteHistory'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M522-189q0 6-4 10.5t-10 5.5q-8 1-15 1h-15q-54 0-103.5-17.5T283-241q-40-33-67.5-78T177-418q-1-5 2.5-10t8.5-6q5-1 10 2.5t6 8.5q11 49 36.5 89t61.5 70q38 32 83.5 48t94.5 16h14q7 0 14-1 6-1 10 3t4 9Zm203-66-75 74q-4 4-9 3.5t-9-4.5q-4-4-4-9.5t4-9.5l74-74-75-75q-4-4-3.5-9.5t4.5-9.5q4-4 9.5-4t9.5 4l74 75 75-75q4-4 9.5-3.5t9.5 4.5q4 4 4 9t-4 9l-74 75 74 75q4 4 3.5 9.5T818-181q-4 4-9 4t-9-4l-75-74ZM478-760q-60 0-113 24.5T270-668h82q6 0 10 4t4 10q0 6-4 10t-10 4H252q-13 0-21.5-8.5T222-670v-100q0-6 4-10t10-4q6 0 10 4t4 10v82q45-47 104-73.5T478-788q64 0 120 24t98 66q46 46 67 100t23 117q0 6-3.5 10.5T773-466q-6 0-10.5-4t-4.5-10q-2-58-21-107t-61-91q-38-38-88.5-60T478-760Zm17 274 96 96q5 5 4.5 10.5T591-370q-4 4-9.5 4.5T571-370l-95-95q-5-5-7-10t-2-11v-180q0-6 4-10t10-4q6 0 10 4t4 10v180Z"/>
    </Icon>
  );
});

IconMaterialDeleteHistoryW100Filled.displayName = 'OnesyIconMaterialDeleteHistoryW100Filled';

export default IconMaterialDeleteHistoryW100Filled;
