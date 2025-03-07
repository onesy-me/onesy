import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTapAndPlayW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TapAndPlayW100'

      short_name='TapAndPlay'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-774h400v-34q0-12-10-22t-22-10H312q-12 0-22 10t-10 22v34Zm0 0v-66 66Zm-4 682q-10 0-17-7t-7-17q0-10 7-17t17-7q10 0 17 7t7 17q0 10-7 17t-17 7Zm4-654v236q0 6-4 10t-10 4q-6 0-10-4t-4-10v-298q0-26 17-43t43-17h336q26 0 43 17t17 43v702q0 6-4 10t-10 4q-6 0-10-4t-4-10v-640H280Zm77 549q-18-18-41.5-29T266-239q-6-1-10-5t-4-10q0-6 4-10t10-3q32 2 59.5 15t50.5 36q23 23 36 50.5t15 59.5q1 6-3 10t-10 4q-6 0-10-4t-5-10q-2-26-13-49.5T357-197Zm90-90q-36-36-83-57t-98-24q-6 0-10-4t-4-10q0-6 4-10t10-4q57 2 108.5 25t92.5 64q41 41 63.5 92.5T556-106q0 6-4 10t-10 4q-6 0-10-4t-4-10q-3-51-24-98t-57-83Z"/>
    </Icon>
  );
});

IconMaterialTapAndPlayW100.displayName = 'OnesyIconMaterialTapAndPlayW100';

export default IconMaterialTapAndPlayW100;
