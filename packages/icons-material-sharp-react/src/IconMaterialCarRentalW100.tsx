import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCarRentalW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CarRentalW100'

      short_name='CarRental'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M340-686q-39.17 0-66.58-27.38Q246-740.76 246-779.88q0-39.12 27.42-66.62Q300.83-874 340-874q35 0 60.5 23t33.5 57h280v28h-40v80h-28v-80H434q-8 34-33.5 57T340-686Zm0-28q27 0 46.5-19.5T406-780q0-27-19.5-46.5T340-846q-27 0-46.5 19.5T274-780q0 27 19.5 46.5T340-714Zm0 424q11 0 19.5-8.5T368-318q0-11-8.5-19.5T340-346q-11 0-19.5 8.5T312-318q0 11 8.5 19.5T340-290Zm280 0q11 0 19.5-8.5T648-318q0-11-8.5-19.5T620-346q-11 0-19.5 8.5T592-318q0 11 8.5 19.5T620-290ZM252-150v-236l62.65-180H645l63 180v236h-28v-80H280v80h-28Zm36-256h384l-46-132H334l-46 132Zm-8 28v120-120Zm0 120h400v-120H280v120Z"/>
    </Icon>
  );
});

IconMaterialCarRentalW100.displayName = 'OnesyIconMaterialCarRentalW100';

export default IconMaterialCarRentalW100;
