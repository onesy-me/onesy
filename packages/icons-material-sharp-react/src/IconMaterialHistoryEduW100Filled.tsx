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
      <path d="M332-224q-12 0-20-8t-8-20v-68h108v-142q-39 11-81.5 1.5T262-496v-60h-60L96-662q34-27 75-41.5t85-14.5q42 0 81.5 13t74.5 40v-79h376v452q0 29-19.5 48.5T720-224H332Zm108-96h240v28q0 17 11.5 28.5T720-252q17 0 28.5-11.5T760-292v-424H440v76l214 214v20h-20L510-530l-27 27q-11 11-21 18t-22 13v152ZM214-584h76v76q23 14 42 19t36 5q29 0 52.5-10t43.5-30l26-26-74-74q-33-33-74-49.5T256-690q-32 0-62.5 9T140-658l74 74Z"/>
    </Icon>
  );
});

IconMaterialHistoryEduW100Filled.displayName = 'OnesyIconMaterialHistoryEduW100Filled';

export default IconMaterialHistoryEduW100Filled;
