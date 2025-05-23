import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFindInPageW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FindInPageW100'

      short_name='FindInPage'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M272-132q-26 0-43-17t-17-43v-576q0-26 17-43t43-17h276q13.57 0 25.64 5.69Q585.7-816.62 594-806l140 167q6.63 8.32 10.32 18.16Q748-611 748-600v376q0 20.11-18.5 27.55Q711-189 697-203L546-354q-17 12-32.56 17-15.55 5-33.44 5-44.55 0-76.27-31.73Q372-395.45 372-440t31.73-76.28Q435.45-548 480-548t76.28 31.72Q588-484.55 588-440q0 20-5.5 35.5T566-374l154 156v-394L562-800H272q-12 0-22 10t-10 22v576q0 12 10 22t22 10h348q7 0 10.5 4.32t3.5 9.5q0 5.18-3.5 9.68T620-132H272Zm208-228q33 0 56.5-23.5T560-440q0-33-23.5-56.5T480-520q-33 0-56.5 23.5T400-440q0 33 23.5 56.5T480-360Zm0-106Zm0 0Z"/>
    </Icon>
  );
});

IconMaterialFindInPageW100.displayName = 'OnesyIconMaterialFindInPageW100';

export default IconMaterialFindInPageW100;
