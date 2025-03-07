import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialResumeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ResumeW100Filled'

      short_name='Resume'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M304-326v-308q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v308q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98Zm173-13q-15 9-30 .06-15-8.93-15-26.06v-230q0-17.13 15-26.06 15-8.94 30 .06l193 115q14 9.21 14 26.11Q684-463 670-454L477-339Z"/>
    </Icon>
  );
});

IconMaterialResumeW100Filled.displayName = 'OnesyIconMaterialResumeW100Filled';

export default IconMaterialResumeW100Filled;
