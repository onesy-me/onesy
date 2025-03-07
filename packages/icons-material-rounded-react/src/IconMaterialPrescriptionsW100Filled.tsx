import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPrescriptionsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrescriptionsW100Filled'

      short_name='Prescriptions'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m719-86 65-65-147-147-65 65q-31 31-30.5 73.5T572-86q31 30 73.5 30.5T719-86Zm84-84 65-65q31-31 31-73.5T868-382q-30-30-73.5-30T721-382l-65 65 147 147ZM306-614h348v-28H306v28Zm174-166q13 0 21.5-8.5T510-810q0-13-8.5-21.5T480-840q-13 0-21.5 8.5T450-810q0 13 8.5 21.5T480-780Zm-58 608H232q-25 0-42.5-17.5T172-232v-496q0-25 17.5-42.5T232-788h194q-11-29 6-54.5t48-25.5q32 0 49 25.5t5 54.5h194q25 0 42.5 17.5T788-728v196q-37 1-71 13.5T654-483v-11H306v28h329L515-346H306v28h181q-29 29-46 66.5T422-172Z"/>
    </Icon>
  );
});

IconMaterialPrescriptionsW100Filled.displayName = 'OnesyIconMaterialPrescriptionsW100Filled';

export default IconMaterialPrescriptionsW100Filled;
