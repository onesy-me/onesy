import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFormatH4W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatH4W100Filled'

      short_name='FormatH4'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M165.96-306q-5.96 0-9.96-4.02-4-4.03-4-9.98v-320q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v146h212v-146q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v320q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-146H180v146q0 5.95-4.04 9.98-4.03 4.02-10 4.02Zm548 0q-5.96 0-9.96-4.02-4-4.03-4-9.98v-106H530q-12.75 0-21.37-8.63Q500-443.25 500-456v-184q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v186h172v-186q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v186h66q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4h-66v106q0 5.95-4.04 9.98-4.03 4.02-10 4.02Z"/>
    </Icon>
  );
});

IconMaterialFormatH4W100Filled.displayName = 'OnesyIconMaterialFormatH4W100Filled';

export default IconMaterialFormatH4W100Filled;
