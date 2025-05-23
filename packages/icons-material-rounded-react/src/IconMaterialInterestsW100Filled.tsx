import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialInterestsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InterestsW100Filled'

      short_name='Interests'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m146-595 110-189q5-8 11.52-11.5 6.53-3.5 14.5-3.5 7.98 0 14.48 3.5T308-784l110 189q5 7.69 4.5 15.38-.5 7.7-4.5 14.62-3.7 6.75-10.35 10.87Q401-550 391.85-550h-219.7q-9.15 0-15.8-4.13Q149.7-558.25 146-565q-4-6.92-4.5-14.62-.5-7.69 4.5-15.38Zm137 450q-57 0-96-39t-39-96q0-57 39-96t96-39q57 0 96 39t39 96q0 57-39 96t-96 39Zm264-30v-210q0-12.75 8.63-21.38Q564.25-415 577-415h210q12.75 0 21.38 8.62Q817-397.75 817-385v210q0 12.75-8.62 21.37Q799.75-145 787-145H577q-12.75 0-21.37-8.63Q547-162.25 547-175Zm116-390-29-23q-47-37-78.5-74T524-741q0-33 21-54t54-21q22.99 0 42.99 11.5Q662-793 682-769q20-23 41-35t43-12q31.62 0 52.81 22.6T840-738q0 41-31.5 77T730-588l-29 23q-8.05 7-19.02 7-10.98 0-18.98-7Z"/>
    </Icon>
  );
});

IconMaterialInterestsW100Filled.displayName = 'OnesyIconMaterialInterestsW100Filled';

export default IconMaterialInterestsW100Filled;
