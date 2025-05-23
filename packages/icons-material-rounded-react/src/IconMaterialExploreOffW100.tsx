import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialExploreOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExploreOffW100'

      short_name='ExploreOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M654-653q4 3 4 8t-2 10l-74 119q-4 6-11 7t-12-4l-46-46q-5-5-4-12t7-11l119-74q5-3 10-2.5t9 5.5ZM480-160q57 0 109.5-19.5T685-235L506-414 325-304q-11 6-19-2t-2-19l110-181-179-179q-36 43-55.5 95.5T160-480q0 134 93 227t227 93Zm0 28q-72 0-135.5-27.5T234-234q-47-47-74.5-110.5T132-480q0-62 21-119.5T215-705l-79-79q-5-5-5-10t5-10q5-5 10-5t10 5l648 648q5 5 5 10t-5 10q-5 5-10 5t-10-5l-79-79q-48 41-105.5 62T480-132Zm79-427ZM423-423ZM312-785q38-23 80.5-33t87.5-10q69 0 133 26.5T726-726q49 49 75.5 113T828-480q0 44-10.5 85.5T787-315q-3 5-9 6.5t-11-1.5q-5-3-6.5-9t1.5-11q19-35 28.5-73t9.5-77q0-134-93-227t-227-93q-39 0-77 9.5T330-762q-5 3-11 2t-10-6q-4-5-3-10.5t6-8.5Z"/>
    </Icon>
  );
});

IconMaterialExploreOffW100.displayName = 'OnesyIconMaterialExploreOffW100';

export default IconMaterialExploreOffW100;
