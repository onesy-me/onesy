import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCurrencyLira = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CurrencyLira'

      short_name='CurrencyLira'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-160v-166l-59 37q-20 13-40.5 1T240-324q0-11 5-20t14-14l101-63v-94l-59 37q-20 12-40.5 1T240-512q0-11 5-20t13-14l102-64v-190q0-17 11.5-28.5T400-840q17 0 28.5 11.5T440-800v140l99-62q20-13 40.5-1.5T600-688q0 11-5 20t-14 14l-141 89v94l99-62q20-13 40.5-1.5T600-499q0 11-5 20t-14 14l-141 89v176q75 0 130-48t67-120q2-15 14.5-23.5T680-400q17 0 28.5 11t9.5 26q-14 104-92 173.5T440-120h-40q-17 0-28.5-11.5T360-160Z"/>
    </Icon>
  );
});

IconMaterialCurrencyLira.displayName = 'OnesyIconMaterialCurrencyLira';

export default IconMaterialCurrencyLira;
