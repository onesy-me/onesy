import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAmbientScreen = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AmbientScreen'

      short_name='AmbientScreen'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M160 896q-33 0-56.5-23.5T80 816V336q0-33 23.5-56.5T160 256h640q33 0 56.5 23.5T880 336v201q0 17-11.5 28.5T840 577q-17 0-28.5-11.5T800 537V336H160v480h361q17 0 28.5 11.5T561 856q0 17-11.5 28.5T521 896H160Zm576-56-56-26q-12-5-12-18t12-18l56-26 26-56q5-12 18-12t18 12l26 56 56 26q12 5 12 18t-12 18l-56 26-26 56q-5 12-18 12t-18-12l-26-56Zm-576-24V336v480-20 20Zm270-190 32 70q5 12 18 12t18-12l32-70 70-32q12-5 12-18t-12-18l-70-32-32-70q-5-12-18-12t-18 12l-32 70-70 32q-12 5-12 18t12 18l70 32Z"/>
    </Icon>
  );
});

IconMaterialAmbientScreen.displayName = 'OnesyIconMaterialAmbientScreen';

export default IconMaterialAmbientScreen;
