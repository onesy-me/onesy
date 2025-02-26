import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCastW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CastW100'

      short_name='Cast'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-480Zm348-208v416q0 24.75-17.62 42.37Q792.75-212 768-212H586q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h182q14 0 23-9t9-23v-416q0-14-9-23t-23-9H192q-14 0-23 9t-9 23v23q0 5.95-4.04 9.97-4.03 4.03-10 4.03-5.96 0-9.96-4.03-4-4.02-4-9.97v-23q0-24.75 17.63-42.38Q167.25-748 192-748h576q24.75 0 42.38 17.62Q828-712.75 828-688ZM309.82-212q-5.82 0-9.82-4.5t-5-10.5q-5-59-47.5-100.5T145-375q-6.09-.7-9.55-5.08-3.45-4.37-3.45-9.97 0-5.95 5-9.95 5-4 11-3 71 6 120.5 55.5T323-227q1 6-3 10.5t-10.18 4.5ZM458-212q-7 0-10.5-6t-4.5-14q-8-119-92-202.5T147-524q-6 0-10.5-4.21t-4.5-9.83q0-5.96 5-9.96 5-4 12-4 132 6 224.5 99T472-228q0 7-4.02 11.5-4.03 4.5-9.98 4.5Zm-300.06 0q-10.94 0-18.44-7.56-7.5-7.55-7.5-18.5 0-10.94 7.56-18.44 7.55-7.5 18.5-7.5 10.94 0 18.44 7.56 7.5 7.55 7.5 18.5 0 10.94-7.56 18.44-7.55 7.5-18.5 7.5Z"/>
    </Icon>
  );
});

IconMaterialCastW100.displayName = 'OnesyIconMaterialCastW100';

export default IconMaterialCastW100;
