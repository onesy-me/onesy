import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStopW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StopW100'

      short_name='Stop'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M292-352v-256q0-25 17.5-42.5T352-668h256q25 0 42.5 17.5T668-608v256q0 25-17.5 42.5T608-292H352q-25 0-42.5-17.5T292-352Zm60 32h256q14 0 23-9t9-23v-256q0-14-9-23t-23-9H352q-14 0-23 9t-9 23v256q0 14 9 23t23 9Zm128-160Z"/>
    </Icon>
  );
});

IconMaterialStopW100.displayName = 'OnesyIconMaterialStopW100';

export default IconMaterialStopW100;
