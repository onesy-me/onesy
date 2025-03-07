import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTrainFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TrainFilled'

      short_name='Train'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-340v-380q0-53 27.5-84.5t72.5-48q45-16.5 102.5-22T480-880q66 0 124.5 5.5t102 22q43.5 16.5 68.5 48t25 84.5v380q0 59-40.5 99.5T660-200l60 60v20h-80l-80-80H400l-80 80h-80v-20l60-60q-59 0-99.5-40.5T160-340Zm80-220h200v-120H240v120Zm280 0h200v-120H520v120ZM340-320q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm280 0q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Z"/>
    </Icon>
  );
});

IconMaterialTrainFilled.displayName = 'OnesyIconMaterialTrainFilled';

export default IconMaterialTrainFilled;
