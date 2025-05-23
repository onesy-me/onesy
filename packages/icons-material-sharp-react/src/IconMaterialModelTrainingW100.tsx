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
      <path d="M208-245q-30-42-46-91t-16-104q0-140 97-237t237-97h71l-91-91 19-19 124 124-124 124-20-20 90-90h-69q-127 0-216.5 89.5T174-440q0 49 14.5 93.5T229-265l-21 20Zm246 9q-5-32-19-55t-29-43.5q-15-20.5-26.5-42T368-426q0-46 33-79t79-33q46 0 79 33t33 79q0 28-11.5 49T554-335q-15 21-29 44t-19 55h-52Zm2 100v-40h48v40h-48Zm296-109-21-20q26-37 40.5-81.5T786-440q0-64-24-120t-67-98l20-20q47 46 73 106.5T814-440q0 55-16 104t-46 91Z"/>
    </Icon>
  );
});

IconMaterialModelTrainingW100.displayName = 'OnesyIconMaterialModelTrainingW100';

export default IconMaterialModelTrainingW100;
