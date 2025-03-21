import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFileDownloadFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileDownloadFilled'

      short_name='FileDownload'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 15.575q-.2 0-.375-.063-.175-.062-.325-.212l-3.6-3.6q-.275-.275-.275-.7 0-.425.275-.7.275-.275.712-.288.438-.012.713.263L11 12.15V5q0-.425.288-.713Q11.575 4 12 4t.713.287Q13 4.575 13 5v7.15l1.875-1.875q.275-.275.713-.263.437.013.712.288.275.275.275.7 0 .425-.275.7l-3.6 3.6q-.15.15-.325.212-.175.063-.375.063ZM6 20q-.825 0-1.412-.587Q4 18.825 4 18v-2q0-.425.287-.713Q4.575 15 5 15t.713.287Q6 15.575 6 16v2h12v-2q0-.425.288-.713Q18.575 15 19 15t.712.287Q20 15.575 20 16v2q0 .825-.587 1.413Q18.825 20 18 20Z"/>
    </Icon>
  );
});

IconMaterialFileDownloadFilled.displayName = 'OnesyIconMaterialFileDownloadFilled';

export default IconMaterialFileDownloadFilled;
