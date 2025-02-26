import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialQrCodeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='QrCodeW100Filled'

      short_name='QrCode'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-550v-208q0-12.75 8.63-21.38Q189.25-788 202-788h208q12.75 0 21.38 8.62Q440-770.75 440-758v208q0 12.75-8.62 21.37Q422.75-520 410-520H202q-12.75 0-21.37-8.63Q172-537.25 172-550Zm28 2h212v-212H200v212Zm-28 346v-208q0-12.75 8.63-21.38Q189.25-440 202-440h208q12.75 0 21.38 8.62Q440-422.75 440-410v208q0 12.75-8.62 21.37Q422.75-172 410-172H202q-12.75 0-21.37-8.63Q172-189.25 172-202Zm28 2h212v-212H200v212Zm320-350v-208q0-12.75 8.63-21.38Q537.25-788 550-788h208q12.75 0 21.38 8.62Q788-770.75 788-758v208q0 12.75-8.62 21.37Q770.75-520 758-520H550q-12.75 0-21.37-8.63Q520-537.25 520-550Zm28 2h212v-212H548v212Zm173 376v-67h67v67h-67ZM520-373v-67h67v67h-67Zm67 67v-67h67v67h-67Zm-67 67v-67h67v67h-67Zm67 67v-67h67v67h-67Zm67-67v-67h67v67h-67Zm0-134v-67h67v67h-67Zm67 67v-67h67v67h-67Z"/>
    </Icon>
  );
});

IconMaterialQrCodeW100Filled.displayName = 'OnesyIconMaterialQrCodeW100Filled';

export default IconMaterialQrCodeW100Filled;
