import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHistoryW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HistoryW100Filled'

      short_name='History'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M478-172q-112 0-196-69T177-418q-2-7 .5-13t9.2-7q6.3-1 10.8 3 4.5 4 6.5 11 21 97 97.5 160.5T478-200q117 0 198.5-81.5T758-480q0-117-81.5-198.5T478-760q-60 0-113 24.5T270-668h82q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4H252q-12.75 0-21.37-8.63Q222-657.25 222-670v-100q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v82q45-47 104-73.5T478-788q64.08 0 120.04 24Q654-740 696-698q42 42 66 97.94 24 55.95 24 120Q786-416 762-360t-66 98q-42 42-97.96 66-55.96 24-120.04 24Zm17-314 126 126q4 4 4.5 9.5T621-340q-5 5-10 5t-10-5L476-465q-5-5-7-10.22-2-5.21-2-10.78v-180q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v180Z"/>
    </Icon>
  );
});

IconMaterialHistoryW100Filled.displayName = 'OnesyIconMaterialHistoryW100Filled';

export default IconMaterialHistoryW100Filled;
