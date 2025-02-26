import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAutoLabelW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoLabelW100'

      short_name='AutoLabel'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M238 804q-25 0-42.5-17.5T178 744V408q0-25 17.5-42.5T238 348h336q23 0 41.5 11t32.5 29l109 153q11 16 11 35t-11 35L648 766q-13 18-32.5 28T574 804H238Zm0-28h336q15 0 28.5-7.5T624 750l111-155q6-8 6-19t-6-19L624 402q-8-11-21.5-18.5T574 376H238q-12 0-22 10t-10 22v336q0 12 10 22t22 10Zm-32-200v200-400 200Zm187 34 20 45q4 9 14 9t14-9l20-45 45-20q9-4 9-14t-9-14l-45-20-20-45q-4-9-14-9t-14 9l-20 45-45 20q-9 4-9 14t9 14l45 20Z"/>
    </Icon>
  );
});

IconMaterialAutoLabelW100.displayName = 'OnesyIconMaterialAutoLabelW100';

export default IconMaterialAutoLabelW100;
