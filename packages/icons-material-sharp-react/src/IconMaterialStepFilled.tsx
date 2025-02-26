import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStepFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StepFilled'

      short_name='Step'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M760-360q-51 0-85.5-34.5T640-480q0-51 34.5-85.5T760-600q51 0 85.5 34.5T880-480q0 51-34.5 85.5T760-360Zm-400 80-56-57 103-103H80v-80h327L304-624l56-56 200 200-200 200Z"/>
    </Icon>
  );
});

IconMaterialStepFilled.displayName = 'OnesyIconMaterialStepFilled';

export default IconMaterialStepFilled;
