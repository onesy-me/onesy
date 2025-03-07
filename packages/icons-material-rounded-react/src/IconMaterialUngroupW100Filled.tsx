import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialUngroupW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UngroupW100Filled'

      short_name='Ungroup'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M546-527 357-338q-4 4-9 3.5t-9-4.5q-4-4-4-9.67 0-5.66 4-9.33l188-188H360q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h184q12.75 0 21.38 8.62Q574-556.75 574-544v184q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-167Zm-52-233q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h234q24.75 0 42.38 17.62Q788-752.75 788-728v234q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-234q0-14-9-23t-23-9H494ZM232-172q-26 0-43-17t-17-43v-542q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v542q0 12 10 22t22 10h542q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H232Z"/>
    </Icon>
  );
});

IconMaterialUngroupW100Filled.displayName = 'OnesyIconMaterialUngroupW100Filled';

export default IconMaterialUngroupW100Filled;
