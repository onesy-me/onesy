import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialUnknownDocument = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UnknownDocument'

      short_name='UnknownDocument'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-800v640-640 200-200Zm120 400h100q17 0 28.5-11.5T460-440q0-17-11.5-28.5T420-480H320q-17 0-28.5 11.5T280-440q0 17 11.5 28.5T320-400Zm0 160h40q17 0 28.5-11.5T400-280q0-17-11.5-28.5T360-320h-40q-17 0-28.5 11.5T280-280q0 17 11.5 28.5T320-240ZM200-80q-33 0-56.5-23.5T120-160v-640q0-33 23.5-56.5T200-880h287q16 0 30.5 6t25.5 17l194 194q11 11 17 25.5t6 30.5v13q0 17-11.5 28.5T720-554q-17 0-28.5-11.5T680-594v-6H520q-17 0-28.5-11.5T480-640v-160H200v640h221q17 0 28.5 11.5T461-120q0 17-11.5 28.5T421-80H200Zm480-400q83 0 141.5 58.5T880-280q0 83-58.5 141.5T680-80q-83 0-141.5-58.5T480-280q0-83 58.5-141.5T680-480Zm0 320q11 0 18.5-7.5T706-186q0-11-7.5-18.5T680-212q-11 0-18.5 7.5T654-186q0 11 7.5 18.5T680-160Zm0-240q-19 0-35 9.5T619-365q-4 6-1 12.5t10 9.5q6 3 12 0t11-8q5-7 12.5-11t16.5-4q13 0 22.5 8.5T712-336q0 11-6 18.5T692-302q-6 6-12.5 12T668-276q-3 6-4.5 12.5T662-250q0 9 5 16.5t13 7.5q8 0 13-6t5-14q0-11 6-19.5t14-16.5q12-11 21-24.5t9-29.5q0-27-20-45.5T680-400Z"/>
    </Icon>
  );
});

IconMaterialUnknownDocument.displayName = 'OnesyIconMaterialUnknownDocument';

export default IconMaterialUnknownDocument;
