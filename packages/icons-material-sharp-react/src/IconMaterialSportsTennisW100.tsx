import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSportsTennisW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SportsTennisW100'

      short_name='SportsTennis'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m144-196-20-20 185-185q29-29 38-67.87 9-38.88 9-119.13 0-51.86 23-101.93Q402-740 444-782q75-75 163.08-87 88.07-12 144.92 45 57 57.45 45 145.23Q785-591 710-516q-42 42-91.5 64T516-430q-77 0-117 9.5T329-381L144-196Zm276-298q47 47 127 34t143-76q64-64 76-143.5T732-804q-47-46-125-33.5t-143 76Q401-699 387-620t33 126ZM728-92q-44.55 0-76.28-31.72Q620-155.45 620-200t31.72-76.27Q683.45-308 728-308t76.28 31.73Q836-244.55 836-200t-31.72 76.28Q772.55-92 728-92Zm0-28q33 0 56.5-23.5T808-200q0-33-23.5-56.5T728-280q-33 0-56.5 23.5T648-200q0 33 23.5 56.5T728-120Zm0-80Z"/>
    </Icon>
  );
});

IconMaterialSportsTennisW100.displayName = 'OnesyIconMaterialSportsTennisW100';

export default IconMaterialSportsTennisW100;
