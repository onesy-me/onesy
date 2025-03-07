import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialClosedCaptionDisabled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ClosedCaptionDisabled'

      short_name='ClosedCaptionDisabled'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m361-600 60 60H300v120h80q0-9 6-15t15-6h18q9 0 15 6t6 15v20q0 17-11.5 28.5T400-360H280q-17 0-28.5-11.5T240-400v-160q0-17 11.5-28.5T280-600h81Zm479-120v400q0 20-13 30.5T799-279q-15 0-27-10.5T760-320v-400H359q-20 0-30-12.5T319-760q0-15 10-27.5t30-12.5h401q33 0 56.5 23.5T840-720ZM720-400q0 9-3.5 17.5T706-369l-51-51h5q0-9 6-15t15-6h18q9 0 15 6t6 15v20Zm-40-200q17 0 28.5 11.5T720-560v20q0 9-6 15t-15 6h-18q-9 0-15-6t-6-15h-80v45l-60-60v-5q0-17 11.5-28.5T560-600h120Zm-122 82Zm-154 74ZM200-160q-33 0-56.5-23.5T120-240v-480q0-25 13.5-44.5T168-793l73 73h-41v480h407L55-791q-12-12-12-28.5T55-848q12-12 28.5-12t28.5 12l735 735q12 12 12 28.5T847-56q-12 12-28.5 12T790-56L687-160H200Z"/>
    </Icon>
  );
});

IconMaterialClosedCaptionDisabled.displayName = 'OnesyIconMaterialClosedCaptionDisabled';

export default IconMaterialClosedCaptionDisabled;
