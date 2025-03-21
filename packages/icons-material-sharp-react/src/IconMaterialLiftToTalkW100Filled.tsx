import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLiftToTalkW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LiftToTalkW100Filled'

      short_name='LiftToTalk'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m182-203 128-359h-47l81-120q7-10 5-22t-10-20l-4-4-136 118q-18 16-28 37.5T161-527v194h-29v-194q0-30 12.5-57.5T180-632l157-136 34 35 41-116 319 120-49 139q32 1 50.5 20t18.5 42q0 9-2.5 17.5T741-494h25q26 0 44 18t18 44q0 23-14 38.5T779-371q6 8 8 17.5t2 17.5q0 26-17.5 44T728-274h-26q5 7 8 16.5t3 17.5q0 26-18 44t-44 18H534l-32 96-320-121Zm326 13 161-450-264-100-161 450 264 100Zm36-16h107q14 0 24-10t10-24q0-14-10-24t-24-10h-82l-25 68Zm34-96h150q14 0 23.5-10t9.5-24q0-14-9.5-24T728-370H604l-26 68Zm35-96h153q14 0 24-10t10-24q0-14-10-24t-24-10H637l-24 68Zm35-96h41q14 0 24-10t10-24q0-14-10-24t-24-10h-17l-24 68Z"/>
    </Icon>
  );
});

IconMaterialLiftToTalkW100Filled.displayName = 'OnesyIconMaterialLiftToTalkW100Filled';

export default IconMaterialLiftToTalkW100Filled;
