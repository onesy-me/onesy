import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHistoryEduW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HistoryEduW100Filled'

      short_name='HistoryEdu'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M332-224q-12 0-20-8t-8-20v-38q0-13 8.5-21.5T334-320h78v-142q-34 9-72.5 3.5T273-487q-5-5-8-10.5t-3-12.5v-46h-48q-6 0-11-2t-10-7l-73-73q-10-10-8.5-23t12.5-21q29-18 63-27t69-9q42 0 81.5 13t74.5 40v-19q0-25 17.5-42.5T472-744h256q25 0 42.5 17.5T788-684v392q0 29-19.5 48.5T720-224H332Zm108-96h212q11 0 19.5 8.5T680-292q0 17 11.5 28.5T720-252q17 0 28.5-11.5T760-292v-392q0-14-9-23t-23-9H472q-14 0-23 9t-9 23v44l210 210q3 3 4 7t-1 8q-2 4-5 6.5t-8 2.5q-3 0-5.5-1t-4.5-3L510-530l-27 27q-11 11-21 18t-22 13v152ZM214-584h46q13 0 21.5 8.5T290-554v46q23 14 42 19t36 5q29 0 52.5-10t43.5-30l26-26-74-74q-33-33-74-49.5T256-690q-32 0-62.5 9T140-658l74 74Z"/>
    </Icon>
  );
});

IconMaterialHistoryEduW100Filled.displayName = 'OnesyIconMaterialHistoryEduW100Filled';

export default IconMaterialHistoryEduW100Filled;
