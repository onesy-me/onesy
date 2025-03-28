import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBatchPredictionW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatchPredictionW100'

      short_name='BatchPrediction'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-164q-18 0-31-13t-13-31v-400q0-18 13-31t31-13h400q18 0 31 13t13 31v400q0 18-13 31t-31 13H280Zm176-80v16q0 10 7 17t17 7q10 0 17-7t7-17v-16h-48Zm-2-60h52q5-32 19-55t29-44q15-21 26.5-42t11.5-49q0-46-33-79t-79-33q-46 0-79 33t-33 79q0 28 11.5 49t26.5 42q15 20 29 43.5t19 55.5ZM280-712q5-13 16-20.5t25-7.5h318q14 0 25 7.5t16 20.5H280Zm41-88q5-13 16-20.5t25-7.5h236q14 0 25 7.5t16 20.5H321Z"/>
    </Icon>
  );
});

IconMaterialBatchPredictionW100.displayName = 'OnesyIconMaterialBatchPredictionW100';

export default IconMaterialBatchPredictionW100;
