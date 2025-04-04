import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCategoryW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CategoryW100'

      short_name='Category'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m360-606 94-156q5-8 11.75-11t14.25-3q7.5 0 14.25 3T506-762l94 156q5 7.5 5 15.75T601-575q-4 7-10.6 11t-15.4 4H385q-8.91 0-15.6-4.13-6.69-4.12-10.4-10.87-4-6.68-4-14.84t5-16.16Zm340 486q-59 0-99.5-40.5T560-260q0-59 40.5-99.5T700-400q59 0 99.5 40.5T840-260q0 59-40.5 99.5T700-120Zm-540-50.03v-180.21q0-12.76 8.63-21.26 8.64-8.5 21.4-8.5h180.21q12.76 0 21.26 8.63 8.5 8.64 8.5 21.4v180.21q0 12.76-8.63 21.26-8.64 8.5-21.4 8.5H189.76q-12.76 0-21.26-8.63-8.5-8.64-8.5-21.4ZM699.97-148q47.03 0 79.53-32.47t32.5-79.5q0-47.03-32.47-79.53t-79.5-32.5q-47.03 0-79.53 32.47t-32.5 79.5q0 47.03 32.47 79.53t79.5 32.5ZM188-168h184v-184H188v184Zm192-420h200L480-748 380-588Zm100 0ZM372-352Zm328 92Z"/>
    </Icon>
  );
});

IconMaterialCategoryW100.displayName = 'OnesyIconMaterialCategoryW100';

export default IconMaterialCategoryW100;
