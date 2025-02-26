import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHomeMaxDotsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeMaxDotsW100Filled'

      short_name='HomeMaxDots'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M332-224v-28H226q-56 0-95-39t-39-95v-188q0-56 39-95t95-39h508q56 0 95 39t39 95v188q0 56-39 95t-95 39H628v28H332Zm88-228q11 0 19.5-8t8.5-20q0-11-8.5-19.5T420-508q-12 0-20 8.5t-8 19.5q0 12 8 20t20 8Zm-120 0q11 0 19.5-8t8.5-20q0-11-8.5-19.5T300-508q-12 0-20 8.5t-8 19.5q0 12 8 20t20 8Zm240 0q11 0 19.5-8t8.5-20q0-11-8.5-19.5T540-508q-12 0-20 8.5t-8 19.5q0 12 8 20t20 8Zm120 0q11 0 19.5-8t8.5-20q0-11-8.5-19.5T660-508q-12 0-20 8.5t-8 19.5q0 12 8 20t20 8Z"/>
    </Icon>
  );
});

IconMaterialHomeMaxDotsW100Filled.displayName = 'OnesyIconMaterialHomeMaxDotsW100Filled';

export default IconMaterialHomeMaxDotsW100Filled;
