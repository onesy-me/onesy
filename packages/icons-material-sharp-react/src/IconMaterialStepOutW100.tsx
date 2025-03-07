import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStepOutW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StepOutW100'

      short_name='StepOut'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480.12-106q-39.12 0-66.62-27.38-27.5-27.38-27.5-66.5 0-39.12 27.38-66.62 27.38-27.5 66.5-27.5 39.12 0 66.62 27.38 27.5 27.38 27.5 66.5 0 39.12-27.38 66.62-27.38 27.5-66.5 27.5ZM466-400v-363L336-635l-19-19 163-163 163 163-20 19-129-129v364h-28Z"/>
    </Icon>
  );
});

IconMaterialStepOutW100.displayName = 'OnesyIconMaterialStepOutW100';

export default IconMaterialStepOutW100;
