import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTauntW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TauntW100'

      short_name='Taunt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M216-379q-15 8-32 3.5T158-394q-11-18-3.5-38t27.5-27l339-118 14 28-319 170Zm15 221v-186l358-188-17-34 181-91 15 29-269 203v267H231Zm79-350q-48 0-81-33t-33-81q0-48 33-81t81-33q48 0 81 33t33 81q0 48-33 81t-81 33Z"/>
    </Icon>
  );
});

IconMaterialTauntW100.displayName = 'OnesyIconMaterialTauntW100';

export default IconMaterialTauntW100;
