import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAmbientScreenFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AmbientScreenFilled'

      short_name='AmbientScreen'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m736 840-56-26q-12-5-12-18t12-18l56-26 26-56q5-12 18-12t18 12l26 56 56 26q12 5 12 18t-12 18l-56 26-26 56q-5 12-18 12t-18-12l-26-56ZM430 626l32 70q5 12 18 12t18-12l32-70 70-32q12-5 12-18t-12-18l-70-32-32-70q-5-12-18-12t-18 12l-32 70-70 32q-12 5-12 18t12 18l70 32ZM160 896q-33 0-56.5-23.5T80 816V336q0-33 23.5-56.5T160 256h640q33 0 56.5 23.5T880 336v287q-23-14-48.5-20.5T780 596q-83 0-141.5 58.5T580 796q0 26 6.5 51.5T607 896H160Z"/>
    </Icon>
  );
});

IconMaterialAmbientScreenFilled.displayName = 'OnesyIconMaterialAmbientScreenFilled';

export default IconMaterialAmbientScreenFilled;
