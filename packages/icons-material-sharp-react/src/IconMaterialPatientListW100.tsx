import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPatientListW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PatientListW100'

      short_name='PatientList'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M633.24-420q-33.24 0-56.74-23.26-23.5-23.27-23.5-56.5 0-33.24 23.26-56.74 23.27-23.5 56.5-23.5 33.24 0 56.74 23.26 23.5 23.27 23.5 56.5 0 33.24-23.26 56.74-23.27 23.5-56.5 23.5ZM433-220v-36q0-10.68 5.5-20.34T453-292q41-23 85.71-35.5Q583.42-340 633-340q49.58 0 94.29 12.5Q772-315 813-292q9 6 14.5 15.66T833-256v36H433Zm28-44v16h344v-16q-41-23-84.5-35.5T633-312q-44 0-87.5 12.5T461-264Zm172-184q21 0 36.5-15.5T685-500q0-21-15.5-36.5T633-552q-21 0-36.5 15.5T581-500q0 21 15.5 36.5T633-448Zm0-52Zm0 252ZM166-426v-28h268v28H166Zm0-320v-28h428v28H166Zm309 160H166v-28h328q-5 7-10 13.5t-9 14.5Z"/>
    </Icon>
  );
});

IconMaterialPatientListW100.displayName = 'OnesyIconMaterialPatientListW100';

export default IconMaterialPatientListW100;
