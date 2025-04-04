import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMatchCase = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MatchCase'

      short_name='MatchCase'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m247-364-32 89q-4 11-13 17t-20 6q-19 0-29.5-15.5T149-300l138-368q4-11 13.5-17.5T321-692h28q11 0 21 6.5t14 17.5l138 369q7 17-4 32t-29 15q-11 0-20-6.5T456-276l-31-88H247Zm23-64h131l-64-182h-4l-63 182Zm395 186q-51 0-81-27.5T554-342q0-44 34.5-72.5T677-443q23 0 45 4t38 11v-12q0-29-20.5-47T685-505q-15 0-29.5 4.5T629-487q-13 10-24.5 7T586-491q-7-8-7-19t11-19q20-16 45-23.5t51-7.5q69 0 103 32.5t34 97.5v147q0 13-9.5 22t-22.5 9q-13 0-22-9.5t-9-22.5v-5h-4q-14 23-38 35t-53 12Zm12-54q35 0 59.5-24t24.5-56q-14-8-33.5-12.5T689-393q-32 0-50 14t-18 37q0 20 16 33t40 13Z"/>
    </Icon>
  );
});

IconMaterialMatchCase.displayName = 'OnesyIconMaterialMatchCase';

export default IconMaterialMatchCase;
