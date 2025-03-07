import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPrescriptionsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrescriptionsW100'

      short_name='Prescriptions'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m700-106 64-65-107-107-65 64q-23 23-23 54t23 54q23 23 54 23t54-23Zm83-84 65-64q23-23 22.5-54T847-362q-23-22-53.5-22.5T740-362l-64 65 107 107ZM719-86q-31 31-73.5 30.5T572-86q-30-31-30.5-73.5T572-233l149-149q30-30 73.5-30t73.5 30q31 31 31 73.5T868-235L719-86ZM200-200v-560 560Zm222 28H172v-616h254q-11-29 6-54.5t48-25.5q32 0 49 25.5t5 54.5h254v256q-7 0-14 1l-14 2v-231H200v560h226q-2 7-3 14t-1 14Zm58-608q13 0 21.5-8.5T510-810q0-13-8.5-21.5T480-840q-13 0-21.5 8.5T450-810q0 13 8.5 21.5T480-780ZM306-614v-28h348v28H306Zm0 148v-28h348v11q-5 4-9 7.5t-9 8.5l-1 1H306Zm0 148v-28h209l-14 14-14 14H306Z"/>
    </Icon>
  );
});

IconMaterialPrescriptionsW100.displayName = 'OnesyIconMaterialPrescriptionsW100';

export default IconMaterialPrescriptionsW100;
