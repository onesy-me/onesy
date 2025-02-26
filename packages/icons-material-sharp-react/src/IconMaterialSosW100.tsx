import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSosW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SosW100'

      short_name='Sos'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M376-326v-308h208v308H376Zm-270 0v-28h140v-112H106v-168h168v28H134v112h140v168H106Zm580 0v-28h140v-112H686v-168h168v28H714v112h140v168H686Zm-282-28h152v-252H404v252Z"/>
    </Icon>
  );
});

IconMaterialSosW100.displayName = 'OnesyIconMaterialSosW100';

export default IconMaterialSosW100;
