import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTurnSlightLeftW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TurnSlightLeftW100'

      short_name='TurnSlightLeft'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M559.96-172q-5.96 0-9.96-4.02-4-4.03-4-9.98v-262q0-6-2-11.5t-7-10.5L305-701v114q0 5.95-4.04 9.97-4.03 4.03-10 4.03-5.96 0-9.96-4.03-4-4.02-4-9.97v-131q0-12.75 8.63-21.38Q294.25-748 307-748h131q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4H324l232 231q8 8 13 19.28 5 11.28 5 23.72v260q0 5.95-4.04 9.98-4.03 4.02-10 4.02Z"/>
    </Icon>
  );
});

IconMaterialTurnSlightLeftW100.displayName = 'OnesyIconMaterialTurnSlightLeftW100';

export default IconMaterialTurnSlightLeftW100;
