import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPatientListW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PatientListW100Filled'

      short_name='PatientList'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M633.24-420q-33.24 0-56.74-23.26-23.5-23.27-23.5-56.5 0-33.24 23.26-56.74 23.27-23.5 56.5-23.5 33.24 0 56.74 23.26 23.5 23.27 23.5 56.5 0 33.24-23.26 56.74-23.27 23.5-56.5 23.5ZM463-220q-12.75 0-21.37-8.63Q433-237.25 433-250v-6q0-10.68 5.5-20.34T453-292q41-23 85.71-35.5Q583.42-340 633-340q49.58 0 94.29 12.5Q772-315 813-292q9 6 14.5 15.66T833-256v6q0 12.75-8.62 21.37Q815.75-220 803-220H463Zm-43-206H180q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h240q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4Zm160-320H180q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h400q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4ZM475-586H180q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h314q-5 7-10 13.5t-9 14.5Z"/>
    </Icon>
  );
});

IconMaterialPatientListW100Filled.displayName = 'OnesyIconMaterialPatientListW100Filled';

export default IconMaterialPatientListW100Filled;
