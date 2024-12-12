import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBentoW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BentoW100'

      short_name='Bento'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M186-246q-26 0-43-17t-17-43v-348q0-26 17-43t43-17h588q26 0 43 17t17 43v348q0 26-17 43t-43 17H186Zm338-248h282v-160q0-12-10-22t-22-10H524v192ZM186-274h310v-412H186q-12 0-22 10t-10 22v348q0 12 10 22t22 10Zm134-170q-15 0-25.5-10.5T284-480q0-15 10.5-25.5T320-516q15 0 25.5 10.5T356-480q0 15-10.5 25.5T320-444Zm204 170h250q12 0 22-10t10-22v-160H524v192Z"/>
    </Icon>
  );
});

IconMaterialBentoW100.displayName = 'OnesyIconMaterialBentoW100';

export default IconMaterialBentoW100;
