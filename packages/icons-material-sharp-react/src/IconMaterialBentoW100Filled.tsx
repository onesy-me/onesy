import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBentoW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BentoW100Filled'

      short_name='Bento'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M552-494h282v-220H552v220ZM126-246h398v-468H126v468Zm199-198q-15 0-25.5-10.5T289-480q0-15 10.5-25.5T325-516q15 0 25.5 10.5T361-480q0 15-10.5 25.5T325-444Zm227 198h282v-220H552v220Z"/>
    </Icon>
  );
});

IconMaterialBentoW100Filled.displayName = 'OnesyIconMaterialBentoW100Filled';

export default IconMaterialBentoW100Filled;
