import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial1xMobiledataBadgeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='1xMobiledataBadgeW100'

      short_name='1xMobiledataBadge'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M152-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h656q26 0 43 17t17 43v496q0 26-17 43t-43 17H152Zm0-28h656q12 0 22-10t10-22v-496q0-12-10-22t-22-10H152q-12 0-22 10t-10 22v496q0 12 10 22t22 10Zm-32 0v-560 560Zm186-426v306q0 6 4 10t10 4q6 0 10-4t4-10v-304q0-13-8.5-21.5T304-654h-64q-6 0-10 4t-4 10q0 6 4 10t10 4h66Zm304 163 90 150q2 3 5 5t7 2q8 0 13-7t0-15l-98-164 85-141q4-7 0-14t-12-7q-4 0-7 2t-5 5l-77 129-77-129q-2-3-5-5t-7-2q-8 0-13 7t0 15l85 142-98 163q-4 7 0 14t12 7q4 0 7-2t5-5l90-150Z"/>
    </Icon>
  );
});

IconMaterial1xMobiledataBadgeW100.displayName = 'OnesyIconMaterial1xMobiledataBadgeW100';

export default IconMaterial1xMobiledataBadgeW100;
