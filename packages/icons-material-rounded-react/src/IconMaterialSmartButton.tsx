import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSmartButton = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmartButton'

      short_name='SmartButton'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 17q-.825 0-1.412-.587Q2 15.825 2 15V9q0-.825.588-1.413Q3.175 7 4 7h16q.825 0 1.413.587Q22 8.175 22 9v6q0 .825-.587 1.413Q20.825 17 20 17h-1v-2h1V9H4v6h6v2Zm10.075 1.1-.675-1.5-1.5-.675q-.325-.15-.325-.425t.325-.425l1.5-.675.675-1.5q.15-.325.425-.325t.425.325l.675 1.5 1.5.675q.3.125.3.425t-.3.425l-1.5.675-.675 1.5q-.125.3-.425.3t-.425-.3Zm2.625-4.775-.325-.7-.7-.325q-.275-.125-.275-.3t.275-.3l.7-.325.325-.7q.125-.275.3-.275t.3.275l.325.7.7.325q.275.125.275.3t-.275.3l-.7.325-.325.7q-.125.275-.3.275t-.3-.275Z"/>
    </Icon>
  );
});

IconMaterialSmartButton.displayName = 'OnesyIconMaterialSmartButton';

export default IconMaterialSmartButton;
