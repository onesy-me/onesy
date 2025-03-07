import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShutterSpeedMinusW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShutterSpeedMinusW100'

      short_name='ShutterSpeedMinus'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M848-212H620v-28h228v28ZM360-840v-28h240v28H360Zm120 708q-64.08 0-120.04-24Q304-180 262-222q-42-42-66-97.94-24-55.95-24-120Q172-504 196-560t66-98q42-42 97.96-66 55.96-24 120.04-24 59.69 0 112.84 21Q646-706 688-668l52-52 20 20-52 52q36 39 57 90t23 108q-7-2-13.5-3t-14.5-2q0-6-1-12.5t-2-12.5H580L403-171q18 5 37.5 8t39.5 3q8 0 16.5-.5T513-162q2 7 4 13.5t5 13.5q-11 2-21 2.5t-21 .5Zm-8-376h280q-18-68-62-117t-106-75L472-508Zm-56 40 142-242q-19-5-37.58-7.5-18.59-2.5-37.74-2.5Q432-720 387-704q-45 16-81 44l110 192Zm-212 68h218L284-642q-45 47-68 109t-12 133Zm172 220 110-192H208q17 66 61.5 116T376-180Zm104-260Zm33 278Zm247-293Z"/>
    </Icon>
  );
});

IconMaterialShutterSpeedMinusW100.displayName = 'OnesyIconMaterialShutterSpeedMinusW100';

export default IconMaterialShutterSpeedMinusW100;
