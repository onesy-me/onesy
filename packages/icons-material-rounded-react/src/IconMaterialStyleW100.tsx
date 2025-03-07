import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStyleW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StyleW100'

      short_name='Style'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M177-142q-32-14-43-46t3-62l40-86v194Zm200 56q-33 0-56.5-23.5T297-166v-134l68 188q3 8 6 14t8 12h-2Zm140-46q-11 5-22-1.5T479-152L301-640q-5-11 1-22t17-16l302-110q11-5 21 1.5t15 18.5l178 486q5 12 .5 23.5T819-242L517-132Zm-68-428q17 0 28.5-11.5T489-600q0-17-11.5-28.5T449-640q-17 0-28.5 11.5T409-600q0 17 11.5 28.5T449-560Zm58 400 302-110-178-490-302 110 178 490ZM329-650l302-110-302 110Z"/>
    </Icon>
  );
});

IconMaterialStyleW100.displayName = 'OnesyIconMaterialStyleW100';

export default IconMaterialStyleW100;
