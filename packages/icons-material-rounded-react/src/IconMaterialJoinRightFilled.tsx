import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialJoinRightFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='JoinRightFilled'

      short_name='JoinRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M920-480q0 117-81.5 198.5T640-200q-27 0-52.5-5T538-219q58-49 90-117t32-144q0-76-32-144t-90-117q24-9 49.5-14t52.5-5q117 0 198.5 81.5T920-480ZM480-262q-7 0-14-2.5t-12-7.5q-46-38-70-93t-24-115q0-60 24-115t70-93q5-5 12-7.5t14-2.5q7 0 14 2.5t12 7.5q46 38 70 93t24 115q0 60-24 115t-70 93q-5 5-12 7.5t-14 2.5ZM40-480q0-56 21-107t61-91q45-45 105.5-66.5T352-758q17 2 27 14.5t8 29.5q-2 17-15 27t-30 8q-45-5-88 10.5T179-621q-28 28-43.5 64.5T120-480q0 40 15.5 76.5T179-339q32 32 75 47.5t88 10.5q17-2 29.5 8t14.5 27q2 16-7.5 29T352-202q-64 8-124.5-13.5T122-282q-40-40-61-91T40-480Z"/>
    </Icon>
  );
});

IconMaterialJoinRightFilled.displayName = 'OnesyIconMaterialJoinRightFilled';

export default IconMaterialJoinRightFilled;
