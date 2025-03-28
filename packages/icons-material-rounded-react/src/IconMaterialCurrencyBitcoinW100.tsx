import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCurrencyBitcoinW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CurrencyBitcoinW100'

      short_name='CurrencyBitcoin'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M402-186v-66H296q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h66v-400h-66q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h106v-66q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v66h90v-66q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v66q53 0 86.5 33.5T668-587q0 33-13 58t-33 40q41 11 63.5 42.5T708-373q0 54-33.5 87.5T587-252h-39v66q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-66h-90v66q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98Zm-12-308h157q41 0 67-26t26-67q0-41-26-67t-67-26H390v186Zm0 214h197q41 0 67-26t26-67q0-41-26-67t-67-26H390v186Z"/>
    </Icon>
  );
});

IconMaterialCurrencyBitcoinW100.displayName = 'OnesyIconMaterialCurrencyBitcoinW100';

export default IconMaterialCurrencyBitcoinW100;
