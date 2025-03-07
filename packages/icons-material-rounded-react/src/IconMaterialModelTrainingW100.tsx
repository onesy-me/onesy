import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialModelTrainingW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ModelTrainingW100'

      short_name='ModelTraining'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M454-236q-5-32-19-55t-29-43.5q-15-20.5-26.5-42T368-426q0-46 33-79t79-33q46 0 79 33t33 79q0 28-11.5 49T554-335q-15 21-29 44t-19 55h-52Zm26 100q-10 0-17-7t-7-17v-16h48v16q0 10-7 17t-17 7Zm260-121q-4-4-4.5-8.5t2.5-9.5q23-35 35.5-77.5T786-440q0-60-21.5-113T705-648q-4-5-4.5-10t4.5-10q4-4 9.5-4.5t9.5 4.5q42 45 66 103t24 125q0 51-13.5 97T761-258q-4 5-10 5.5t-11-4.5Zm-541-1q-26-39-39.5-85T146-440q0-140 97-237t237-97h71l-82-81q-4-4-4-10t4-10q4-4 10-4t10 4l93 94q5 5 7 10t2 11q0 6-2 11t-7 10l-93 93q-5 5-10 5t-10-5q-5-5-5-10t5-10l80-80h-69q-127 0-216.5 89.5T174-440q0 45 12.5 87.5T222-275q3 5 2.5 9.5T220-257q-5 5-11 4.5t-10-5.5Z"/>
    </Icon>
  );
});

IconMaterialModelTrainingW100.displayName = 'OnesyIconMaterialModelTrainingW100';

export default IconMaterialModelTrainingW100;
