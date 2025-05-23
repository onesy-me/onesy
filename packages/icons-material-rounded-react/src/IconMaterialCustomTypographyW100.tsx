import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCustomTypographyW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CustomTypographyW100'

      short_name='CustomTypography'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M494-212v66q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-160q0-5.95 4.04-9.98 4.03-4.02 10-4.02 5.96 0 9.96 4.02 4 4.03 4 9.98v66h280q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H494Zm-308 0q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h166q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4H186Zm196-288h196l39 111q2 5 5 7t7.88 2q8.12 0 11.62-6t1.5-13L492-822q-1.18-2.77-3.55-4.38Q486.08-828 483-828h-6.28q-2.72 0-5.12 1.62-2.4 1.61-3.6 4.38L317-399q-2 7 1.5 13t11.38 6q5.12 0 8.12-2 3-2 5-7l39-111Zm10-28 86-242h4l86 242H392Z"/>
    </Icon>
  );
});

IconMaterialCustomTypographyW100.displayName = 'OnesyIconMaterialCustomTypographyW100';

export default IconMaterialCustomTypographyW100;
