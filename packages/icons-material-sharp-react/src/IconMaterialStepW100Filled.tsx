import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStepW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StepW100Filled'

      short_name='Step'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M744-365q-40 0-67.5-28T649-461q0-40 27.5-68t67.5-28q39 0 67 28t28 68q0 40-28 68t-67 28Zm-367 70-20-19 130-133H120v-28h368L357-607l20-21 165 167-165 166Z"/>
    </Icon>
  );
});

IconMaterialStepW100Filled.displayName = 'OnesyIconMaterialStepW100Filled';

export default IconMaterialStepW100Filled;
