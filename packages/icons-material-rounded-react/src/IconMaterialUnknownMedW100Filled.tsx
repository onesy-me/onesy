import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialUnknownMedW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UnknownMedW100Filled'

      short_name='UnknownMed'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M166-466q-14.17 0-24.08-9.88-9.92-9.88-9.92-24t9.92-24.12q9.91-10 24.08-10h240q14.17 0 24.08 9.88 9.92 9.88 9.92 24T430.08-476q-9.91 10-24.08 10H166Zm387 0q-14.17 0-24.08-9.88-9.92-9.88-9.92-24t9.92-24.12q9.91-10 24.08-10h240q14.17 0 24.08 9.88 9.92 9.88 9.92 24T817.08-476q-9.91 10-24.08 10H553Z"/>
    </Icon>
  );
});

IconMaterialUnknownMedW100Filled.displayName = 'OnesyIconMaterialUnknownMedW100Filled';

export default IconMaterialUnknownMedW100Filled;
