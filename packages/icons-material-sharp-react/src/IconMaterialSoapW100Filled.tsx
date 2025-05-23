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
      <path d="M708-132H132v-365l366-237 27 31-95 159h318v28H532v100h296v28H532v100h256v28H532v100h176v28Zm-67.84-517Q622-649 609-661.84t-13-31Q596-711 608.84-724t31-13Q658-737 671-724.16t13 31Q684-675 671.16-662t-31 13Zm59.96-139Q686-788 676-797.88q-10-9.88-10-24t9.88-24.12q9.88-10 24-10t24.12 9.88q10 9.88 10 24T724.12-798q-9.88 10-24 10ZM789-640q-23 0-38.5-15.5T735-694q0-23 15.5-38.5T789-748q23 0 38.5 15.5T843-694q0 23-15.5 38.5T789-640Z"/>
    </Icon>
  );
});

IconMaterialSoapW100Filled.displayName = 'OnesyIconMaterialSoapW100Filled';

export default IconMaterialSoapW100Filled;
