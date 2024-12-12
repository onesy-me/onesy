import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBallotW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BallotW100Filled'

      short_name='Ballot'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M646-560q5.95 0 9.97-4.04 4.03-4.03 4.03-10 0-5.96-4.03-9.96-4.02-4-9.97-4H494q-5.95 0-9.98 4.04-4.02 4.03-4.02 10 0 5.96 4.02 9.96 4.03 4 9.98 4h152Zm0 188q5.95 0 9.97-4.04 4.03-4.03 4.03-10 0-5.96-4.03-9.96-4.02-4-9.97-4H494q-5.95 0-9.98 4.04-4.02 4.03-4.02 10 0 5.96 4.02 9.96 4.03 4 9.98 4h152ZM360-534q16.5 0 28.25-11.75T400-574q0-16.5-11.75-28.25T360-614q-16.5 0-28.25 11.75T320-574q0 16.5 11.75 28.25T360-534Zm0 188q16.5 0 28.25-11.75T400-386q0-16.5-11.75-28.25T360-426q-16.5 0-28.25 11.75T320-386q0 16.5 11.75 28.25T360-346ZM232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Z"/>
    </Icon>
  );
});

IconMaterialBallotW100Filled.displayName = 'OnesyIconMaterialBallotW100Filled';

export default IconMaterialBallotW100Filled;
