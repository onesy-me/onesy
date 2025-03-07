import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMopW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MopW100Filled'

      short_name='Mop'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M170-114h106v-106q0-5.95 4.04-9.98 4.03-4.02 10-4.02 5.96 0 9.96 4.02 4 4.03 4 9.98v106h162v-106q0-5.95 4.04-9.98 4.03-4.02 10-4.02 5.96 0 9.96 4.02 4 4.03 4 9.98v106h162v-106q0-5.95 4.04-9.98 4.03-4.02 10-4.02 5.96 0 9.96 4.02 4 4.03 4 9.98v106h106q16 0 26-12.5t5-27.5l-52-172H191l-52 172q-5 15 5 27.5t26 12.5Zm628 28H162q-26 0-43-21t-9-47l56-183v-103q0-23 15.5-38.5T220-494h176v-296q0-35 24.5-59.5T480-874q35 0 59.5 24.5T564-790v296h176q23 0 38.5 15.5T794-440v103l56 185q8 25-9 45.5T798-86Z"/>
    </Icon>
  );
});

IconMaterialMopW100Filled.displayName = 'OnesyIconMaterialMopW100Filled';

export default IconMaterialMopW100Filled;
