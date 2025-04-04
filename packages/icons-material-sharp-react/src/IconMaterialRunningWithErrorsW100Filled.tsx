import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRunningWithErrorsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RunningWithErrorsW100Filled'

      short_name='RunningWithErrors'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M464-132q-72.21 0-135.72-27.39-63.51-27.39-110.49-74.35-46.98-46.96-74.39-110.43Q116-407.65 116-479.83q0-72.17 27.4-135.73 27.41-63.56 74.39-110.57 46.98-47.02 110.49-74.44Q391.79-828 464-828q72 0 137 28t115 79L464-470v-330q-134 0-227 93t-93 227q0 134 93 227t227 93q80 0 149-38.5T730-302v46q-51 58-120 91t-146 33Zm346-108v-294h28v294h-28Zm14 90q-8.5 0-14.25-5.75T804-170q0-8.5 5.75-14.25T824-190q8.5 0 14.25 5.75T844-170q0 8.5-5.75 14.25T824-150Z"/>
    </Icon>
  );
});

IconMaterialRunningWithErrorsW100Filled.displayName = 'OnesyIconMaterialRunningWithErrorsW100Filled';

export default IconMaterialRunningWithErrorsW100Filled;
