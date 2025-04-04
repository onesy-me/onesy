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
      <path d="M463-101q-5 0-11-1t-11-3l-201-76q-19-8-30-24t-11-35q0-2 4-21l107-301q-15 0-22-13t1-26l55-81q7-10 5-22t-10-20l-4-4-136 118q-18 16-28 37.5T161-527v180q0 6-4 10t-10 4q-6 0-10.5-4.5T132-348v-179q0-30 12.5-57.5T180-632l136-117q9-8 21-7.5t20 8.5l14 15 20-56q7-20 23.5-31t35.5-11q5 0 11.5 1.5T473-826l201 76q19 8 29.5 24t10.5 35q0 7-4 21l-28 80q32 1 50.5 20t18.5 42q0 9-2.5 17.5T741-494h25q26 0 44 18t18 44q0 23-14 38.5T779-371q6 8 8 17.5t2 17.5q0 26-17.5 44T728-274h-26q5 7 8 16.5t3 17.5q0 26-18 44t-44 18H534l-12 36q-7 20-23 30.5T463-101Zm45-89 161-450-264-100-161 450 264 100Zm36-16h107q14 0 24-10t10-24q0-14-10-24t-24-10h-82l-25 68Zm34-96h150q14 0 23.5-10t9.5-24q0-14-9.5-24T728-370H604l-26 68Zm35-96h153q14 0 24-10t10-24q0-14-10-24t-24-10H637l-24 68Zm35-96h41q14 0 24-10t10-24q0-14-10-24t-24-10h-17l-24 68Z"/>
    </Icon>
  );
});

IconMaterialLiftToTalkW100Filled.displayName = 'OnesyIconMaterialLiftToTalkW100Filled';

export default IconMaterialLiftToTalkW100Filled;
