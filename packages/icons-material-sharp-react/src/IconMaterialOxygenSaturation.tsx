import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOxygenSaturation = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OxygenSaturation'

      short_name='OxygenSaturation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M40-400h80v160q0 17 11.5 28.5T160-200h91v-40h109v-80h80v80h80v-80h80v80h109v40h91q17 0 28.5-11.5T840-240v-160h80v160q0 50-35 85t-85 35h-91v40H251v-40h-91q-50 0-85-35t-35-85v-160Zm280-520h80v240H280q-33 0-56.5 23.5T200-600q0 33 23.5 56.5T280-520v80q-66 0-113-47t-47-113q0-66 47-113t113-47h40v-160Zm240 0h80v160h40q66 0 113 47t47 113q0 66-47 113t-113 47v-80q33 0 56.5-23.5T760-600q0-33-23.5-56.5T680-680H560v-240Zm-80 480Zm-11 40q-44 0-79.5-25.5T340-493q-5-12-15-19.5t-23-7.5h-22v-80h22q39 0 70.5 22.5T416-518q5 17 20 27.5t33 10.5h22q18 0 33-10.5t20-27.5q12-37 43.5-59.5T658-600h22v80h-22q-13 0-23.5 7.5T620-493q-14 42-49.5 67.5T491-400h-22Z"/>
    </Icon>
  );
});

IconMaterialOxygenSaturation.displayName = 'OnesyIconMaterialOxygenSaturation';

export default IconMaterialOxygenSaturation;
