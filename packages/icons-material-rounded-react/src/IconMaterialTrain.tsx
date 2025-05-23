import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTrain = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Train'

      short_name='Train'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-340v-380q0-53 27.5-84.5t72.5-48q45-16.5 102.5-22T480-880q66 0 124.5 5.5t102 22q43.5 16.5 68.5 48t25 84.5v380q0 59-40.5 99.5T660-200l20 20q17 17 8 38.5T655-120q-7 0-13.5-2.5T630-130l-70-70H400l-70 70q-5 5-11.5 7.5T305-120q-23 0-32.5-21.5T280-180l20-20q-59 0-99.5-40.5T160-340Zm320-460q-106 0-155 12.5T258-760h448q-15-17-64.5-28.5T480-800ZM240-560h200v-120H240v120Zm420 80H240h480-60Zm-140-80h200v-120H520v120ZM340-320q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm280 0q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm-320 40h360q26 0 43-17t17-43v-140H240v140q0 26 17 43t43 17Zm180-480h226-448 222Z"/>
    </Icon>
  );
});

IconMaterialTrain.displayName = 'OnesyIconMaterialTrain';

export default IconMaterialTrain;
