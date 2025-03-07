import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHideW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HideW100'

      short_name='Hide'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M402-383 202-183q-4 4-9.5 4.5T182-183q-5-5-5-10t5-10l200-200H269q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h131q12.75 0 21.38 8.62Q430-413.75 430-401v131q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-113Zm176-176h113q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H560q-12.75 0-21.37-8.63Q530-548.25 530-561v-131q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v113l200-200q4-4 9.5-4.5T778-779q5 5 5 10t-5 10L578-559Z"/>
    </Icon>
  );
});

IconMaterialHideW100.displayName = 'OnesyIconMaterialHideW100';

export default IconMaterialHideW100;
