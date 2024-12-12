import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTransferWithinAStationW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TransferWithinAStationW100'

      short_name='TransferWithinAStation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m149-66 112-582-132 55v127h-28v-146l177-73q25-11 47-7.5t36 26.5l39 63q25 41 70 71t99 36v28q-53-5-109-37.5T362-611l-39 199 86 84v262h-28v-223L255-410 177-66h-28Zm226-690q-27 0-45.5-18.5T311-820q0-27 18.5-45.5T375-884q27 0 45.5 18.5T439-820q0 27-18.5 45.5T375-756ZM775-62l-20-20 44-44H571v-28h228l-44-44 20-20 78 78-78 78ZM655-232l-78-78 78-78 20 20-44 44h228v28H631l44 44-20 20Z"/>
    </Icon>
  );
});

IconMaterialTransferWithinAStationW100.displayName = 'OnesyIconMaterialTransferWithinAStationW100';

export default IconMaterialTransferWithinAStationW100;
