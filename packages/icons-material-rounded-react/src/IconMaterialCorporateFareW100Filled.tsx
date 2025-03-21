import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCorporateFareW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CorporateFareW100Filled'

      short_name='CorporateFare'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M148-164q-13 0-21.5-8.5T118-194v-608q0-13 8.5-21.5T148-832h288q13 0 21.5 8.5T466-802v130h346q13 0 21.5 8.5T842-642v448q0 13-8.5 21.5T812-164H148Zm-2-28h292v-132H146v132Zm0-160h292v-132H146v132Zm0-160h292v-132H146v132Zm0-160h292v-132H146v132Zm320 480h348v-452H466v452Zm114-292q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h100q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H580Zm0 160q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h100q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H580Z"/>
    </Icon>
  );
});

IconMaterialCorporateFareW100Filled.displayName = 'OnesyIconMaterialCorporateFareW100Filled';

export default IconMaterialCorporateFareW100Filled;
