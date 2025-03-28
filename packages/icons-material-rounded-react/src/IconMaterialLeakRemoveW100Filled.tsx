import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLeakRemoveW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LeakRemoveW100Filled'

      short_name='LeakRemove'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M798-122 642-278q-14 19-22.5 42T609-186q-1 6-5 10t-10 4q-6 0-10-4t-4-10q2-32 12.5-59t29.5-53l-94-94q-32 37-55 90t-25 116q0 6-4 10t-10 4q-6 0-10-4t-4-10q2-68 26-124t62-102l-96-96q-51 42-106 64t-120 24q-6 0-10-4t-4-10q0-6 4-10t10-4q57-2 110-23t96-57l-94-94q-24 19-52.5 29.5T186-580q-5 0-9.5-4t-4.5-10q0-5 4-9.5t10-5.5q26-2 50.5-10.5T278-642L122-798q-4-4-4.5-9.5T122-818q5-5 10-5t10 5l676 676q4 4 4.5 9.5T818-122q-5 5-10 5t-10-5ZM366-788q6 0 10 4t4 10q-1 18-5 34t-10 32l-22-22q4-11 6-22t3-22q1-6 4.5-10t9.5-4Zm160 0q6 0 10 4t4 10q-2 51-16.5 96.5T483-590l-21-21q23-38 35.5-79t14.5-84q0-6 4-10t10-4Zm262 262q0 6-4 10t-10 4q-48 2-87 15t-76 35l-21-21q45-27 89.5-41t94.5-16q6 0 10 4t4 10Zm-57 184-22-22q13-6 30-10t35-6q5 0 9.5 4t4.5 10q0 5-4 9t-10 5q-11 1-22 3.5t-21 6.5Z"/>
    </Icon>
  );
});

IconMaterialLeakRemoveW100Filled.displayName = 'OnesyIconMaterialLeakRemoveW100Filled';

export default IconMaterialLeakRemoveW100Filled;
