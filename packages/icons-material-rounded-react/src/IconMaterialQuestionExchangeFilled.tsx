import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialQuestionExchangeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='QuestionExchangeFilled'

      short_name='QuestionExchange'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-40q-112 0-206-51T120-227v67q0 17-11.5 28.5T80-120q-17 0-28.5-11.5T40-160v-160q0-17 11.5-28.5T80-360h160q17 0 28.5 11.5T280-320q0 17-11.5 28.5T240-280h-59q48 72 126.5 116T480-120q141 0 242.5-94T838-445q2-16 14-25.5t28-9.5q17 0 29 10.5t10 25.5q-7 85-44 158.5t-96 128q-59 54.5-135.5 86T480-40Zm0-800q-141 0-242.5 94T122-515q-2 16-14 25.5T80-480q-17 0-29-10.5T41-516q7-85 44-158.5t96-128q59-54.5 135.5-86T480-920q112 0 206 51t154 136v-67q0-17 11.5-28.5T880-840q17 0 28.5 11.5T920-800v160q0 17-11.5 28.5T880-600H720q-17 0-28.5-11.5T680-640q0-17 11.5-28.5T720-680h59q-48-72-126.5-116T480-840Zm0 600q21 0 35.5-14.5T530-290q0-21-14.5-36T480-341q-21 0-35.5 14.5T430-291q0 21 14.5 36t35.5 15Zm80-250q35-35 46.5-56.5T618-598q0-56-40-89t-98-33q-40 0-71 16.5T358-655q-8 13-2.5 28t19.5 21q14 6 27-1t23-19q10-12 24-19t31-7q27 0 45.5 15.5T544-595q0 17-8 34t-34 40q-25 22-37.5 43T447-430q-2 15 8 26.5t26 11.5q15 0 25-11.5t14-26.5q4-17 13.5-30t26.5-30Z"/>
    </Icon>
  );
});

IconMaterialQuestionExchangeFilled.displayName = 'OnesyIconMaterialQuestionExchangeFilled';

export default IconMaterialQuestionExchangeFilled;
