import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialProblem = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Problem'

      short_name='Problem'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-320q17 0 28.5-11.5T320-360q0-17-11.5-28.5T280-400q-17 0-28.5 11.5T240-360q0 17 11.5 28.5T280-320Zm0-120q17 0 28.5-11.5T320-480v-120q0-17-11.5-28.5T280-640q-17 0-28.5 11.5T240-600v120q0 17 11.5 28.5T280-440Zm160 80h240q17 0 28.5-11.5T720-400q0-17-11.5-28.5T680-440H440q-17 0-28.5 11.5T400-400q0 17 11.5 28.5T440-360Zm0-160h240q17 0 28.5-11.5T720-560q0-17-11.5-28.5T680-600H440q-17 0-28.5 11.5T400-560q0 17 11.5 28.5T440-520ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-480H160v480Zm0 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialProblem.displayName = 'OnesyIconMaterialProblem';

export default IconMaterialProblem;
