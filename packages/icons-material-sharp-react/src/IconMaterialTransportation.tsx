import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTransportation = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Transportation'

      short_name='Transportation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M760-320q-72 0-127-45t-69-115H445l-48-80h167q5-22 13.5-42t22.5-38H348l-48-80h342l-44-120H440v-80h214l73 200h33q83 0 141.5 58.5T960-520q0 83-58.5 141.5T760-320Zm0-80q50 0 85-35t35-85q0-50-35-85t-85-35h-3l39 107-76 27-38-105q-20 17-31 41t-11 50q0 50 35 85t85 35ZM280-40q-50 0-85-35t-35-85H0v-80h191q15-15 38-27.5t51-12.5q25 0 48 10t41 30h111v-80H0v-80h80v-120H0v-80h280l120 200h160v240H400q0 50-35 85t-85 35ZM160-400h147l-72-120h-75v120Zm120 280q17 0 28.5-11.5T320-160q0-17-11.5-28.5T280-200q-17 0-28.5 11.5T240-160q0 17 11.5 28.5T280-120Zm-40-160Z"/>
    </Icon>
  );
});

IconMaterialTransportation.displayName = 'OnesyIconMaterialTransportation';

export default IconMaterialTransportation;
