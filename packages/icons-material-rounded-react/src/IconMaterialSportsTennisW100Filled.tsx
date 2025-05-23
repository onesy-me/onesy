import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSportsTennisW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SportsTennisW100Filled'

      short_name='SportsTennis'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M516-430q-77 0-117 9.5T329-381L154-206q-4 4-9.5 4.5t-10.5-4.28q-5-5.22-5-10.22 0-5 5-10l175-175q29-29 38-67.87 9-38.88 9-119.13 0-51.86 23-101.93Q402-740 444-782q75-75 163.08-87 88.07-12 144.92 45 57 57.45 45 145.23Q785-591 710-516q-42 42-91.5 64T516-430Zm-96-64q47 46 127 33.5T690-536q64-64 76.5-143.5T732-804q-46-47-125-34.5T464-762q-63 62-76.5 141.5T420-494ZM728-92q-44.55 0-76.28-31.72Q620-155.45 620-200t31.72-76.27Q683.45-308 728-308t76.28 31.73Q836-244.55 836-200t-31.72 76.28Q772.55-92 728-92Z"/>
    </Icon>
  );
});

IconMaterialSportsTennisW100Filled.displayName = 'OnesyIconMaterialSportsTennisW100Filled';

export default IconMaterialSportsTennisW100Filled;
