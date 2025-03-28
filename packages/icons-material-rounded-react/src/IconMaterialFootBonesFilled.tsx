import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFootBonesFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FootBonesFilled'

      short_name='FootBones'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-160q-33 0-56.5-23.5T80-240v-40q0-33 23.5-56.5T160-360q33 0 56.5 23.5T240-280v40q0 33-23.5 56.5T160-160Zm682 0h-62q-10 0-16-7.5t-4-17.5l11-43q2-8 8-12.5t14-2.5l54 8q14 2 23.5 12.5T880-198q0 16-11 27t-27 11Zm-148-14-114-38q-8-3-12-11t0-16l30-69q4-8 12.5-11.5T627-318l96 56q6 3 8.5 9t.5 13l-12 52q-2 8-10 12.5t-16 1.5Zm-186-70-78-20q-14-4-22-14.5t-8-24.5v-37q0-23 8-43t27-32q5-3 10-3.5t10 2.5l102 56q7 4 9.5 11.5T566-334l-35 79q-3 7-9.5 10t-13.5 1Zm-210-36q-8 0-13-4.5t-6-11.5q-7-45-40.5-74.5T160-400h-20q-8 0-14-6t-6-14q0-8 6-14t14-6h36q20 0 38-5t35-16q5-3 11-3t11 3q20 12 43 16.5t46 4.5q12 0 17 12.5t-3 24.5q-9 14-11.5 30t-2.5 33v40q0 8-6 14t-14 6h-42ZM178-480q-42 0-70-27.5T80-576q0-19 7-37t21-32l52-52v-63q0-17 11.5-28.5T200-800h120q17 0 28.5 11.5T360-760v63l52 52q14 14 21 31.5t7 36.5q0 41-28 69t-70 28q-19 0-36-8t-31-20q-4-3-7-5.5t-8-2.5q-7 0-15 8-14 12-31.5 19.5T178-480Z"/>
    </Icon>
  );
});

IconMaterialFootBonesFilled.displayName = 'OnesyIconMaterialFootBonesFilled';

export default IconMaterialFootBonesFilled;
