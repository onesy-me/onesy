import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSymptomsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SymptomsW100Filled'

      short_name='Symptoms'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M722-170q-45 0-76-31.5T615-278q0-22 9-42t26-36l31-29q17-17 41-17t41 17l31 29q16 15 25.5 35.5T829-278q-1 45-31.5 76.5T722-170ZM480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608ZM344-500q0 57 39.5 96.5T480-364q17 0 32.5-3.5T542-379q-14 23-21.5 50.5T514-275q0 9-6 15.5t-15 7.5q-54 2-106-10.5T288-299q-52-27-95-67t-75-92q-6-10-8.5-20.5T107-500q0-11 3-21.5t8-20.5q57-95 153.5-150.5T480-748q112 0 208.5 55.5T842-542q6 10 8.5 20.5T853-500q0 13-4 25t-12 23l-56-51q-14-12-29.5-18t-32.5-6q-17 0-32.5 6T658-502l-50 48q4-11 6-22.5t2-23.5q0-57-39.5-96.5T480-636q-57 0-96.5 39.5T344-500Z"/>
    </Icon>
  );
});

IconMaterialSymptomsW100Filled.displayName = 'OnesyIconMaterialSymptomsW100Filled';

export default IconMaterialSymptomsW100Filled;
