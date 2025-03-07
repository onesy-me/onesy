import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialScoreW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScoreW100'

      short_name='Score'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Zm288-88 240-240v-228q0-12-10-22t-22-10H232q-12 0-22 10t-10 22v468l139-139q9-9 21-9t21 9l139 139Zm-10-236q-6 0-10-4t-4-10v-180q0-6 4-10t10-4q6 0 10 4t4 10v180q0 6-4 10t-10 4Zm50-104 69 82q6 7 2 14.5t-13 7.5q-3 0-5.5-1.5T608-501l-84-99 84-99q2-2 4.5-3.5t5.5-1.5q9 0 13 8t-2 15l-69 81Zm-236 76h86q6 0 10 4t4 10q0 6-4 10t-10 4H310q-6 0-10-4t-4-10v-90q0-6 4-10t10-4h86v-62h-86q-6 0-10-4t-4-10q0-6 4-10t10-4h100q6 0 10 4t4 10v90q0 6-4 10t-10 4h-86v62Zm36 144L200-220q1 5 9.5 12.5T232-200h496q12 0 22-10t10-22v-228L541-241q-9 9-21 9t-21-9L360-380ZM200-232v32-560 528Z"/>
    </Icon>
  );
});

IconMaterialScoreW100.displayName = 'OnesyIconMaterialScoreW100';

export default IconMaterialScoreW100;
