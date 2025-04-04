import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSickFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SickFilled'

      short_name='Sick'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m336-581-22 22q-9 9-8.5 21t9.5 21q9 9 21 9t21-9l35-35q12-12 12-28t-12-28l-36-36q-8-8-21-8t-21 8q-9 9-9 21t9 21l22 21Zm504-19q-33 0-56.5-23.5T760-680q0-36 22-71t41-64q3-5 7.5-7t9.5-2q5 0 9.5 2t7.5 7q19 29 41 64t22 71q0 33-23.5 56.5T840-600Zm-215 19 21-21q9-9 9-21t-9-21q-9-9-21-9t-21 9l-36 36q-12 12-12 28t12 28l36 36q9 9 21.5 8.5T647-517q9-9 9-21.5t-9-21.5l-22-21ZM480-80q-84 0-157-31.5T196-197q-54-54-85-127T80-480q0-83 31-156t85-127q54-54 127-85.5T480-880q63 0 120 18t105 50q14 10 18 26.5t-4 32.5q-8 17-13.5 35t-5.5 38q0 57 38.5 96.5T833-540q17 2 30.5 11.5T879-502q1 5 1 11v11q0 83-31.5 156T763-197q-54 54-127 85.5T480-80ZM325-280q7 0 14.5-4t11.5-10q22-30 55-48t74-18q41 0 74 18t55 48q4 6 11 10t14 4q18 0 26.5-16t-3.5-34q-26-39-73-64.5T480-420q-26 0-51 5.5T382-398l-142-82q0-16-8-30t-22-22q-22-12-45.5-5.5T128-510q-12 22-5.5 45.5T150-428q14 8 30 8t30-8l118 68q-8 8-14 16l-12 16q-11 17-2.5 32.5T325-280Z"/>
    </Icon>
  );
});

IconMaterialSickFilled.displayName = 'OnesyIconMaterialSickFilled';

export default IconMaterialSickFilled;
