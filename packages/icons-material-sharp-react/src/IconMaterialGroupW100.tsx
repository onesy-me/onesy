import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGroupW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GroupW100'

      short_name='Group'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M123-232v-52q0-26 13.5-43.5t36.45-28.59Q222-379 269.5-393.5 317-408 391-408t121.5 14.5q47.5 14.5 96.55 37.41Q632-345 645.5-327.5 659-310 659-284v52H123Zm616 0v-52q0-32-10.95-59.98Q717.11-371.96 697-392q23 6 45 15.5t45 20.5q23 11 36.5 30.16T837-284v52h-98ZM391-512q-44.55 0-76.27-31.72Q283-575.45 283-620t31.73-76.28Q346.45-728 391-728t76.27 31.72Q499-664.55 499-620t-31.73 76.28Q435.55-512 391-512Zm258-108q0 44.55-31.72 76.28Q585.55-512 541-512q18.32-22.76 28.16-50.51 9.84-27.74 9.84-57.61Q579-650 568.5-677 558-704 541-728q44.55 0 76.28 31.72Q649-664.55 649-620ZM151-260h480v-24q0-15-7.5-26T595-332q-42-23-90-35.5T391-380q-66 0-114 12.5T187-332q-21 11-28.5 22t-7.5 26v24Zm240-280q33 0 56.5-23.5T471-620q0-33-23.5-56.5T391-700q-33 0-56.5 23.5T311-620q0 33 23.5 56.5T391-540Zm0 280Zm0-360Z"/>
    </Icon>
  );
});

IconMaterialGroupW100.displayName = 'OnesyIconMaterialGroupW100';

export default IconMaterialGroupW100;
