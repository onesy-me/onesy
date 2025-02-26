import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStepIntoW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StepIntoW100'

      short_name='StepInto'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480.12-106q-39.12 0-66.62-27.38-27.5-27.38-27.5-66.5 0-39.12 27.38-66.62 27.38-27.5 66.5-27.5 39.12 0 66.62 27.38 27.5 27.38 27.5 66.5 0 39.12-27.38 66.62-27.38 27.5-66.5 27.5ZM466-454v-349q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v350l119-120q3.75-5 9.38-5 5.62 0 10.62 4.78 5 5.22 5 10.22 0 5-5 10L501-421q-9 9-21 9t-21-9L326-554q-3.67-3.75-3.83-9.38Q322-569 326-573q4-5 10-4.5t10 4.5l120 119Z"/>
    </Icon>
  );
});

IconMaterialStepIntoW100.displayName = 'OnesyIconMaterialStepIntoW100';

export default IconMaterialStepIntoW100;
