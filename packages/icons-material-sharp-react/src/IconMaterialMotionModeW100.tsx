import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMotionModeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MotionModeW100'

      short_name='MotionMode'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M214-743v526q-26-26-46-56.5T134-338v-284q14-34 34-64.5t46-56.5Zm148-92v710q-33-11-63.5-27.5T242-191v-578q26-22 56.5-38.5T362-835Zm216 716v-722q120 32 198 131t78 230q0 131-78 230T578-119Zm-98 13q-23 0-45.5-3t-44.5-8v-726q22-5 44.5-8t45.5-3q18 0 35.5 2t34.5 5v734q-17 3-34.5 5t-35.5 2Z"/>
    </Icon>
  );
});

IconMaterialMotionModeW100.displayName = 'OnesyIconMaterialMotionModeW100';

export default IconMaterialMotionModeW100;
