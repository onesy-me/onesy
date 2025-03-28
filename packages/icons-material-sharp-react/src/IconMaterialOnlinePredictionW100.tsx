import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOnlinePredictionW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OnlinePredictionW100'

      short_name='OnlinePrediction'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M235-234q-52-54-77-114t-25-132q0-72 25-132t77-114l20 20q-47 47-70.5 105T161-480q0 63 23.5 121T255-254l-20 20Zm76-76q-35-38-52.5-78.5T241-480q0-51 17.5-91.5T311-650l20 20q-29 30-45.5 67T269-480q0 46 16.5 83t45.5 67l-20 20Zm143-6q-5-32-19-55t-29-43.5q-15-20.5-26.5-42T368-506q0-46 33-79t79-33q46 0 79 33t33 79q0 28-11.5 49T554-415q-15 21-29 44t-19 55h-52Zm2 100v-40h48v40h-48Zm195-94-20-20q29-30 45.5-67t16.5-83q0-46-16.5-83T631-630l20-20q35 38 52.5 78.5T721-480q0 51-17.5 91.5T651-310Zm76 76-20-20q47-47 70.5-105T801-480q0-63-23.5-121T707-706l20-20q51 54 76.5 114T829-480q0 72-25.5 132T727-234Z"/>
    </Icon>
  );
});

IconMaterialOnlinePredictionW100.displayName = 'OnesyIconMaterialOnlinePredictionW100';

export default IconMaterialOnlinePredictionW100;
