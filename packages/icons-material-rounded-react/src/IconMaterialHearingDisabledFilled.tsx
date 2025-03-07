import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHearingDisabledFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HearingDisabledFilled'

      short_name='HearingDisabled'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-800q-20 0-39 3.5T324-785q-15 7-30.5 1T271-805q-7-15-1.5-30.5T290-858q26-11 53.5-16.5T400-880q56 0 107.5 20.5T599-799q61 61 76 145.5T660-488q-6 15-20.5 21.5t-29.5.5q-15-6-22-20.5t-1-29.5q21-60 10.5-120.5T542-742q-29-29-65.5-43.5T400-800Zm0 300q-42 0-71-29.5T300-600q0-13 3-25t10-23l136 136q-11 6-23.5 9t-25.5 3ZM791-57 526-321q-14 12-28.5 24.5T472-269q-11 15-17.5 32.5T442-202q-20 58-62.5 90T280-80q-66 0-113-47t-47-113q0-17 11.5-28.5T160-280q17 0 28.5 11.5T200-240q0 33 23.5 56.5T280-160q31 0 52.5-20t39.5-66q8-21 17-41.5t23-38.5q12-16 26.5-28t31.5-23L204-643q-2 11-3 21.5t-1 21.5q0 17-11.5 28.5T160-560q-17 0-28.5-11.5T120-600q0-29 5-55.5t15-51.5l-85-85q-12-12-12-28.5T55-849q12-12 28.5-12t28.5 12l736 736q12 12 12 28t-12 28q-12 12-28.5 12T791-57Zm-31-541q0-63-20-121t-58-106q-11-14-11-30.5t12-28.5q12-12 28.5-11t27.5 14q48 60 74.5 132.5T840-598q0 62-18 121.5T772-364q-8 14-24 15.5t-29-8.5q-13-10-16-25.5t5-29.5q25-42 38.5-89.5T760-598Z"/>
    </Icon>
  );
});

IconMaterialHearingDisabledFilled.displayName = 'OnesyIconMaterialHearingDisabledFilled';

export default IconMaterialHearingDisabledFilled;
