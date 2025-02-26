import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKeyboardDoubleArrowRightFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardDoubleArrowRightFilled'

      short_name='KeyboardDoubleArrowRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M383-480 228-636q-11-11-11.5-27.5T228-692q11-11 28-11t28 11l184 184q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L284-268q-11 11-27.5 11.5T228-268q-11-11-11-28t11-28l155-156Zm264 0L492-636q-11-11-11.5-27.5T492-692q11-11 28-11t28 11l184 184q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L548-268q-11 11-27.5 11.5T492-268q-11-11-11-28t11-28l155-156Z"/>
    </Icon>
  );
});

IconMaterialKeyboardDoubleArrowRightFilled.displayName = 'OnesyIconMaterialKeyboardDoubleArrowRightFilled';

export default IconMaterialKeyboardDoubleArrowRightFilled;
