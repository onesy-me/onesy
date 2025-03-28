import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSoapW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SoapW100Filled'

      short_name='Soap'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M266-132q-56 0-95-33t-39-89v-192q0-24.25 11.34-44.98Q154.67-511.7 175-525l313-202q3-2 8.5-2.5t9.5 3.5q13 13 10.5 27T505-670l-75 126h304q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H532v100h282q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H532v100h242q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H532v100h162q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H266Zm374.16-517Q622-649 609-661.84t-13-31Q596-711 608.84-724t31-13Q658-737 671-724.16t13 31Q684-675 671.16-662t-31 13Zm59.96-139Q686-788 676-797.88q-10-9.88-10-24t9.88-24.12q9.88-10 24-10t24.12 9.88q10 9.88 10 24T724.12-798q-9.88 10-24 10ZM789-640q-23 0-38.5-15.5T735-694q0-23 15.5-38.5T789-748q23 0 38.5 15.5T843-694q0 23-15.5 38.5T789-640Z"/>
    </Icon>
  );
});

IconMaterialSoapW100Filled.displayName = 'OnesyIconMaterialSoapW100Filled';

export default IconMaterialSoapW100Filled;
