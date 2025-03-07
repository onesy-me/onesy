import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFlashOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlashOffW100'

      short_name='FlashOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m594-768-46 157h70q27 0 39.5 23.5T655-541l-37 54q-4 6-10.5 7.5T595-482q-5-4-5.5-10.5T594-505l39-53q5-8 1-16.5t-14-8.5h-69q-15 0-24.5-12t-4.5-26l43-146q4-12-4-22.5T541-800H366q-6 0-10-4t-4-10q0-6 4-10t10-4h175q26 0 43 18.5t10 41.5Zm190 632L543-377l-50 73q-5 7-11.5 9t-13.5 0q-7-2-11.5-8t-4.5-14v-135h-40q-25 0-42.5-17.5T352-512v-56L136-784q-4-4-4.5-9.5T136-804q5-5 10-5t10 5l648 648q4 4 4.5 9.5T804-136q-5 5-10 5t-10-5ZM496-644Z"/>
    </Icon>
  );
});

IconMaterialFlashOffW100.displayName = 'OnesyIconMaterialFlashOffW100';

export default IconMaterialFlashOffW100;
