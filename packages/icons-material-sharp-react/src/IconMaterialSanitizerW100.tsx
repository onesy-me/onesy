import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSanitizerW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SanitizerW100'

      short_name='Sanitizer'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M656.06-622Q639-622 627-633.82t-12-28.7q0-11.48 11-30.98t30-42.5q19 23 30 42.5t11 30.98q0 16.88-11.94 28.7t-29 11.82Zm85.15 224Q714-398 695-416.9q-19-18.91-19-46.29 0-22.81 19.5-56.31T741-585q26 32 45.5 65.47Q806-486.05 806-463.3q0 27.3-18.79 46.3-18.79 19-46 19ZM404-284h28v-80h80v-28h-80v-80h-28v80h-80v28h80v80ZM234-160v-320q0-72 48.5-124.5T404-664v-108h-68v-28h184q19.53 0 36.77 5Q574-790 590-782l-21 21q-11.06-4.89-23.31-7.94Q533.44-772 520-772h-88v108q73 7 121.5 59.74Q602-551.53 602-479.61V-160H234Zm28-28h312v-292q0-65-45.5-110.5T418-636q-65 0-110.5 45.5T262-480v292Zm0 0h312-312Z"/>
    </Icon>
  );
});

IconMaterialSanitizerW100.displayName = 'OnesyIconMaterialSanitizerW100';

export default IconMaterialSanitizerW100;
