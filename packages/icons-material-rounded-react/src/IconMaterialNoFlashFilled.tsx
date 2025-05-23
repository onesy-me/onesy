import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNoFlashFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoFlashFilled'

      short_name='NoFlash'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m791-57-72-71q-4 20-20.5 34T660-80H140q-25 0-42.5-17.5T80-140v-384q0-25 17.5-42.5T140-584h106l8-9L55-792q-12-12-12-28.5T55-849q12-12 28.5-12t28.5 12l736 736q12 12 12 28t-12 28q-12 12-28.5 12T791-57ZM370-477q-57 12-93.5 55T240-320q0 66 47 113t113 47q59 0 103-37t55-93l-.5 1 .5-1-188-187Zm30 237q-33 0-56.5-23.5T320-320q0-33 23.5-56.5T400-400q33 0 56.5 23.5T480-320q0 33-23.5 56.5T400-240Zm360-440h-20q-8 0-14-6t-6-14v-160q0-8 6-14t14-6h109q11 0 17.5 9t1.5 19l-52 116h30q11 0 16.5 10t.5 20l-84 152q-4 7-11.5 5t-7.5-10v-121Zm-40 156v72q0 27-24.5 37.5T652-423L503-572q-14-14-12.5-29.5T503-628q11-11 26.5-12.5T559-628l45 44h56q25 0 42.5 17.5T720-524Z"/>
    </Icon>
  );
});

IconMaterialNoFlashFilled.displayName = 'OnesyIconMaterialNoFlashFilled';

export default IconMaterialNoFlashFilled;
