import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialUniversalCurrencyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UniversalCurrencyFilled'

      short_name='UniversalCurrency'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M300-460h-70q-13 0-21.5 8.5T200-430q0 13 8.5 21.5T230-400h90q17 0 28.5-11.5T360-440v-70q0-17-11.5-28.5T320-550h-60v-30h70q13 0 21.5-8.5T360-610q0-13-8.5-21.5T330-640H230q-13 0-21.5 8.5T200-610v90q0 13 8.5 21.5T230-490h70v30Zm300 20q-72 0-116 26.5T440-342v2q0 8 6 14t14 6h280q8 0 14-6t6-14v-2q0-45-44-71.5T600-440Zm0-40q33 0 56.5-23.5T680-560q0-33-23.5-56.5T600-640q-33 0-56.5 23.5T520-560q0 33 23.5 56.5T600-480ZM160-200q-33 0-56.5-23.5T80-280v-400q0-33 23.5-56.5T160-760h640q33 0 56.5 23.5T880-680v400q0 33-23.5 56.5T800-200H160Z"/>
    </Icon>
  );
});

IconMaterialUniversalCurrencyFilled.displayName = 'OnesyIconMaterialUniversalCurrencyFilled';

export default IconMaterialUniversalCurrencyFilled;
