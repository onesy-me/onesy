import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStockpotW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StockpotW100Filled'

      short_name='Stockpot'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M262-212q-37.5 0-63.75-26.25T172-302v-325q0-5.95 4.02-9.97Q180.05-641 186-641h588q5.95 0 9.97 4.03Q788-632.95 788-627v325q0 37.5-26.25 63.75T698-212H262Zm124-517v-28q0-13.17 8.5-22.09Q403-788 416.49-788h127.02q13.49 0 21.99 8.91 8.5 8.92 8.5 22.09v28h200q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H186q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h200Z"/>
    </Icon>
  );
});

IconMaterialStockpotW100Filled.displayName = 'OnesyIconMaterialStockpotW100Filled';

export default IconMaterialStockpotW100Filled;
