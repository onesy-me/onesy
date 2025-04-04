import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial1xMobiledataBadgeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='1xMobiledataBadgeW100Filled'

      short_name='1xMobiledataBadge'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M152-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h656q26 0 43 17t17 43v496q0 26-17 43t-43 17H152Zm154-454v306q0 5.95 4.04 9.98 4.03 4.02 10 4.02 5.96 0 9.96-4.02 4-4.03 4-9.98v-304q0-12.75-8.62-21.38Q316.75-654 304-654h-64q-5.95 0-9.98 4.04-4.02 4.03-4.02 10 0 5.96 4.02 9.96 4.03 4 9.98 4h66Zm304 163 90 150q1.96 3.11 5.1 5.06 3.14 1.94 7.06 1.94 7.84 0 12.84-7t0-15l-98-164 85-141q4-7-.12-14t-11.96-7q-3.92 0-6.97 1.94-3.05 1.95-4.95 5.06l-77 129-77-129q-1.96-3.11-5.1-5.06-3.14-1.94-7.06-1.94-7.84 0-12.84 7t0 15l85 142-98 163q-4 7 .12 14t11.96 7q3.92 0 6.97-1.94 3.05-1.95 4.95-5.06l90-150Z"/>
    </Icon>
  );
});

IconMaterial1xMobiledataBadgeW100Filled.displayName = 'OnesyIconMaterial1xMobiledataBadgeW100Filled';

export default IconMaterial1xMobiledataBadgeW100Filled;
