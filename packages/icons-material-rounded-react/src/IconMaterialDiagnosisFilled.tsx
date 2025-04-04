import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDiagnosisFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DiagnosisFilled'

      short_name='Diagnosis'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-200h240q17 0 28.5-11.5T640-240q0-17-11.5-28.5T600-280H360q-17 0-28.5 11.5T320-240q0 17 11.5 28.5T360-200Zm0-120h240q17 0 28.5-11.5T640-360q0-17-11.5-28.5T600-400H360q-17 0-28.5 11.5T320-360q0 17 11.5 28.5T360-320Zm120-408q-12-15-31.5-23.5T408-760q-36 0-62 26t-26 62q0 53 49 100.5t84 79.5q11 11 27 11t27-11q35-32 84-79.5T640-672q0-36-26-62t-62-26q-21 0-40.5 8.5T480-728ZM720-80H240q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h480q33 0 56.5 23.5T800-800v640q0 33-23.5 56.5T720-80Z"/>
    </Icon>
  );
});

IconMaterialDiagnosisFilled.displayName = 'OnesyIconMaterialDiagnosisFilled';

export default IconMaterialDiagnosisFilled;
