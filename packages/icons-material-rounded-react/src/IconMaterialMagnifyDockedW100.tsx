import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMagnifyDockedW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MagnifyDockedW100'

      short_name='MagnifyDocked'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Zm-32-108h640v-368q0-12-10-22t-22-10H192q-12 0-22 10t-10 22v368Zm426-186v76q0 5.95 4.04 9.98 4.03 4.02 10 4.02 5.96 0 9.96-4.02 4-4.03 4-9.98v-76h76q5.95 0 9.97-4.04 4.03-4.03 4.03-10 0-5.96-4.03-9.96-4.02-4-9.97-4h-76v-76q0-5.95-4.04-9.97-4.03-4.03-10-4.03-5.96 0-9.96 4.03-4 4.02-4 9.97v76h-76q-5.95 0-9.98 4.04-4.02 4.03-4.02 10 0 5.96 4.02 9.96 4.03 4 9.98 4h76Z"/>
    </Icon>
  );
});

IconMaterialMagnifyDockedW100.displayName = 'OnesyIconMaterialMagnifyDockedW100';

export default IconMaterialMagnifyDockedW100;
