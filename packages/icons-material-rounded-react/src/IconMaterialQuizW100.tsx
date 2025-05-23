import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialQuizW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='QuizW100'

      short_name='Quiz'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M534-384q11 0 19.5-8.5T562-412q0-11-8.5-19.5T534-440q-11 0-19.5 8.5T506-412q0 11 8.5 19.5T534-384Zm0-108q6 0 10-4t5-9q2-17 9.5-28t29.5-31q24-21 34-39t10-41q0-39-28-65.5T534-736q-27 0-50 13t-37 37q-3 5-1 10.5t7 7.5q5 2 11 .5t9-6.5q11-17 26-25.5t35-8.5q30 0 50 18t20 46q0 17-9.5 31.5T562-578q-21 18-30 34t-11 38q-1 5 3 9.5t10 4.5ZM326-292q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h416q26 0 43 17t17 43v416q0 26-17 43t-43 17H326Zm0-28h416q12 0 22-10t10-22v-416q0-12-10-22t-22-10H326q-12 0-22 10t-10 22v416q0 12 10 22t22 10ZM218-184q-26 0-43-17t-17-43v-430q0-6 4-10t10-4q6 0 10 4t4 10v430q0 12 10 22t22 10h430q6 0 10 4t4 10q0 6-4 10t-10 4H218Zm76-616v480-480Z"/>
    </Icon>
  );
});

IconMaterialQuizW100.displayName = 'OnesyIconMaterialQuizW100';

export default IconMaterialQuizW100;
