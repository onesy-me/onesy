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
      <path d="M126-246v-468h708v468H126Zm398-248h282v-192H524v192ZM154-274h342v-412H154v412Zm166-170q-15 0-25.5-10.5T284-480q0-15 10.5-25.5T320-516q15 0 25.5 10.5T356-480q0 15-10.5 25.5T320-444Zm204 170h282v-192H524v192Z"/>
    </Icon>
  );
});

IconMaterialBentoW100.displayName = 'OnesyIconMaterialBentoW100';

export default IconMaterialBentoW100;
