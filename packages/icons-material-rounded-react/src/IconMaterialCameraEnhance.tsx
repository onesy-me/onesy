import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCameraEnhance = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CameraEnhance'

      short_name='CameraEnhance'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 17.5q1.875 0 3.188-1.312Q16.5 14.875 16.5 13q0-1.875-1.312-3.188Q13.875 8.5 12 8.5q-1.875 0-3.188 1.312Q7.5 11.125 7.5 13q0 1.875 1.312 3.188Q10.125 17.5 12 17.5Zm-1.1-5.6.65-1.4q.125-.275.45-.275t.45.275l.65 1.4 1.4.65q.275.125.275.45t-.275.45l-1.4.65-.65 1.4q-.125.275-.45.275t-.45-.275l-.65-1.4-1.4-.65q-.275-.125-.275-.45t.275-.45ZM4 21q-.825 0-1.412-.587Q2 19.825 2 19V7q0-.825.588-1.412Q3.175 5 4 5h3.15L8.4 3.65q.275-.325.662-.488Q9.45 3 9.875 3h4.25q.425 0 .813.162.387.163.662.488L16.85 5H20q.825 0 1.413.588Q22 6.175 22 7v12q0 .825-.587 1.413Q20.825 21 20 21Zm16-2V7H4v12Zm-8-6Z"/>
    </Icon>
  );
});

IconMaterialCameraEnhance.displayName = 'OnesyIconMaterialCameraEnhance';

export default IconMaterialCameraEnhance;
