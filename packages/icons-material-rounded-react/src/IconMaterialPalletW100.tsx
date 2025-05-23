import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPalletW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PalletW100'

      short_name='Pallet'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M234-234v23q0 6.37-4.31 10.69Q225.38-196 219-196h-26q-6.37 0-10.69-4.31Q178-204.63 178-211v-21q0-12.75 8.69-21.38 8.69-8.62 21.53-8.62h543.94q12.84 0 21.34 8.62 8.5 8.63 8.5 21.38v21q0 6.37-4.31 10.69Q773.38-196 767-196h-26q-6.37 0-10.69-4.31Q726-204.63 726-211v-23H508v23q0 6.37-4.31 10.69Q499.38-196 493-196h-26q-6.37 0-10.69-4.31Q452-204.63 452-211v-23H234Zm49-108q-12.75 0-21.37-8.63Q253-359.25 253-372v-396q0-12.75 8.63-21.38Q270.25-798 283-798h394q12.75 0 21.38 8.62Q707-780.75 707-768v388q0 16.15-10.35 27.08Q686.3-342 671-342H283Zm-2-28h398v-400H281v400Zm305-262q5.95 0 9.97-4.04 4.03-4.03 4.03-10 0-5.96-4.03-9.96-4.02-4-9.97-4H374q-5.95 0-9.98 4.04-4.02 4.03-4.02 10 0 5.96 4.02 9.96 4.03 4 9.98 4h212ZM281-370v-400 400Z"/>
    </Icon>
  );
});

IconMaterialPalletW100.displayName = 'OnesyIconMaterialPalletW100';

export default IconMaterialPalletW100;
