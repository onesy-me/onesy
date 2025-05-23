import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTransitTicketW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TransitTicketW100Filled'

      short_name='TransitTicket'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-212q-24.75 0-42.37-17.63Q132-247.25 132-272v-69q0-8 3.5-15t10.5-11q30-19 48-48.04 18-29.05 18-65Q212-516 194-545q-18-29-48-48-7-4-10.5-11t-3.5-15v-69q0-24.75 17.63-42.38Q167.25-748 192-748h576q24.75 0 42.38 17.62Q828-712.75 828-688v69q0 8-3.5 15T814-593q-30 19-48 48.04-18 29.05-18 65Q748-444 766-415q18 29 48 48 7 4 10.5 11t3.5 15v69q0 24.75-17.62 42.37Q792.75-212 768-212H192Zm206-112h166q5.33 0 8.67-3.45 3.33-3.45 3.33-8.96V-344q0-4-2-6.5t-5-4.5l-25-13q26.4 0 45.2-18.8Q608-405.6 608-432v-144q0-35-29.54-49.5t-98.2-14.5Q414-640 383-624.5t-31 48.94v143.29Q352-406 370.8-387q18.8 19 45.2 19l-23.88 12.25Q388-354 386-350.56q-2 3.43-2 7.56v5.5q0 5.5 4.2 9.5t9.8 4Zm26-76q-10.4 0-17.2-6.8-6.8-6.8-6.8-17.2 0-10.4 6.8-17.2 6.8-6.8 17.2-6.8 10.4 0 17.2 6.8 6.8 6.8 6.8 17.2 0 10.4-6.8 17.2-6.8 6.8-17.2 6.8Zm112 0q-10.4 0-17.2-6.8-6.8-6.8-6.8-17.2 0-10.4 6.8-17.2 6.8-6.8 17.2-6.8 10.4 0 17.2 6.8 6.8 6.8 6.8 17.2 0 10.4-6.8 17.2-6.8 6.8-17.2 6.8Zm-156-76v-100h200v100H380Z"/>
    </Icon>
  );
});

IconMaterialTransitTicketW100Filled.displayName = 'OnesyIconMaterialTransitTicketW100Filled';

export default IconMaterialTransitTicketW100Filled;
