import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialElectricMopedW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ElectricMopedW100'

      short_name='ElectricMoped'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m522-58-194-98h128v-66l194 98H522v66ZM290.12-300q-39.12 0-66.62-27.42Q196-354.83 196-394h-80v-228h268v200h178l154-190v-132H596v-28h148v168L578-394H384q0 39-27.38 66.5t-66.5 27.5ZM356-422Zm-66 94q27 0 46.5-19.5T356-394H224q0 27 19.5 46.5T290-328Zm-54-376v-28h148v28H236Zm514.12 404q-39.12 0-66.62-27.38-27.5-27.38-27.5-66.5 0-39.12 27.38-66.62 27.38-27.5 66.5-27.5 39.12 0 66.62 27.38 27.5 27.38 27.5 66.5 0 39.12-27.38 66.62-27.38 27.5-66.5 27.5Zm-.12-28q27 0 46.5-19.5T816-394q0-27-19.5-46.5T750-460q-27 0-46.5 19.5T684-394q0 27 19.5 46.5T750-328Zm-606-94h212v-172H144v172Z"/>
    </Icon>
  );
});

IconMaterialElectricMopedW100.displayName = 'OnesyIconMaterialElectricMopedW100';

export default IconMaterialElectricMopedW100;
