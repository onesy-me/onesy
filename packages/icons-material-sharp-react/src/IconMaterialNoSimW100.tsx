import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNoSimW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoSimW100'

      short_name='NoSim'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m748-312-28-28v-460H434l-88 88-20-20 96-96h326v516Zm68 222L270-636l-30 30v446h480v-66l28 28v66H212v-486l38-38L98-808l20-20 718 718-20 20ZM537-522Zm-38 113Z"/>
    </Icon>
  );
});

IconMaterialNoSimW100.displayName = 'OnesyIconMaterialNoSimW100';

export default IconMaterialNoSimW100;
