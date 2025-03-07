import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialResumeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ResumeW100'

      short_name='Resume'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M304-326v-308q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v308q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98Zm173-13 193-115q7.89-4.59 11.45-11.47Q685-472.35 685-480q0-7.65-3.55-14.53-3.56-6.88-11.45-11.47L477-621q-4-2-7.5-3t-7.28-1q-12.09 0-21.15 8-9.07 8-9.07 22v230q0 14 9.07 22 9.06 8 21.15 8 3.78 0 7.28-1 3.5-1 7.5-3Zm-17-25v-232l194 116-194 116Zm0-116Z"/>
    </Icon>
  );
});

IconMaterialResumeW100.displayName = 'OnesyIconMaterialResumeW100';

export default IconMaterialResumeW100;
