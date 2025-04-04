import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSpa = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Spa'

      short_name='Spa'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M448-85q-70-13-136-45t-117.5-89q-51.5-57-83-141T80-560v-8q0-14 9-23t23-9h8q51 0 105 13t101 39q11-74 44-152t79-141q12-17 31-17t31 17q46 63 79 141t44 152q47-26 101-39t105-13h4q15 0 25.5 10.5T880-564v4q0 116-31.5 200t-83 141Q714-162 648-130T512-85q-13 2-32 2t-32-2Zm30-77q-11-165-99.5-250.5T162-518q-2 0 0 0 11 169 102.5 254T478-162q2 1 0 .5t0-.5Zm-76-340q20 17 42 40.5t36 45.5q15-22 36.5-45.5T558-502q-2-57-22.5-119T480-742v.5-.5q-35 59-55.5 121T402-502Zm122 170q12 32 20.5 70t13.5 82q36-12 76-36t74-64q34-40 59-98.5T798-518q0-2 0 0-94 14-165 62.5T524-332Z"/>
    </Icon>
  );
});

IconMaterialSpa.displayName = 'OnesyIconMaterialSpa';

export default IconMaterialSpa;
