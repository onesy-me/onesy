import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialJoinInnerFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='JoinInnerFilled'

      short_name='JoinInner'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M40-480q0-56 21-107t61-91q45-45 105.5-66.5T352-758q17 2 27 14.5t8 29.5q-2 17-15 27t-30 8q-45-5-88 10.5T179-621q-28 28-43.5 64.5T120-480q0 40 15.5 76.5T179-339q32 32 75 47.5t88 10.5q17-2 29.5 8t14.5 27q2 16-7.5 29T352-202q-64 8-124.5-13.5T122-282q-40-40-61-91T40-480Zm880 0q0 56-21 107t-61 91q-45 45-105.5 65T609-203q-17-2-27-14t-8-29q2-17 14.5-27t29.5-8q45 5 88-10.5t75-47.5q28-28 43.5-64.5T840-480q0-40-15.5-76.5T781-621q-32-32-75-47.5T618-679q-17 2-29.5-8T574-714q-2-17 8-29.5t27-14.5q64-7 124 14t105 66q40 40 61 91t21 107ZM480-262q-7 0-14-2.5t-12-7.5q-46-38-70-93t-24-115q0-60 24-115t70-93q5-5 12-7.5t14-2.5q7 0 14 2.5t12 7.5q46 38 70 93t24 115q0 60-24 115t-70 93q-5 5-12 7.5t-14 2.5Z"/>
    </Icon>
  );
});

IconMaterialJoinInnerFilled.displayName = 'OnesyIconMaterialJoinInnerFilled';

export default IconMaterialJoinInnerFilled;
