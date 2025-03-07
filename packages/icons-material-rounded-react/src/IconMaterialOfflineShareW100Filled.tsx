import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOfflineShareW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OfflineShareW100Filled'

      short_name='OfflineShare'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M298-124q-26 0-43-17t-17-43v-534q0-6 4-10t10-4q6 0 10 4t4 10v534q0 12 10 22t22 10h314q6 0 10 4t4 10q0 6-4 10t-10 4H298Zm108-108q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h256q26 0 43 17t17 43v496q0 26-17 43t-43 17H406Zm-32-122h320v-372H374v372Zm213-198H467v56q0 6-4 10t-10 4q-6 0-10-4t-4-10v-60q0-11 6.5-17.5T463-580h124l-34-34q-4-4-4.5-9.5T553-634q5-5 10-5t10 5l57 57q5 5 5 11t-5 11l-57 57q-4 4-9.5 4.5T553-498q-5-5-5-10t5-10l34-34Z"/>
    </Icon>
  );
});

IconMaterialOfflineShareW100Filled.displayName = 'OnesyIconMaterialOfflineShareW100Filled';

export default IconMaterialOfflineShareW100Filled;
