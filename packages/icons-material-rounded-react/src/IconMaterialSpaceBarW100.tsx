import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSpaceBarW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpaceBarW100'

      short_name='SpaceBar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M272-412q-24.75 0-42.37-17.63Q212-447.25 212-472v-114q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v114q0 14 9 23t23 9h416q14 0 23-9t9-23v-114q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v114q0 24.75-17.62 42.37Q712.75-412 688-412H272Z"/>
    </Icon>
  );
});

IconMaterialSpaceBarW100.displayName = 'OnesyIconMaterialSpaceBarW100';

export default IconMaterialSpaceBarW100;
