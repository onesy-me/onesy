import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRheumatology = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Rheumatology'

      short_name='Rheumatology'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M411-338Zm495 67-195-64 26-77 195 65-26 76Zm14-169H735v-80h185v80Zm11-175-196 66-24-77 196-65 24 76ZM285-400q-52 0-88.5-36.5T160-525q0-26 10-48.5t27-39.5l83-84v-183h80v200q0 8-3.5 15.5T348-651l-95 95q-6 6-9.5 14t-3.5 17q0 18 13.5 31.5T285-480q12 0 19-4t19-14q22-18 43.5-27t43.5-9q22 0 43.5 9t43.5 27q12 10 19 14t19 4q19 0 32-13.5t13-31.5q0-9-3.5-17.5T567-557l-95-95q-5-6-8.5-13t-3.5-15v-200h80v182l84 84q17 17 26.5 40t9.5 49q0 52-36 88.5T535-400q-33 0-53.5-12.5T447-437q-15-12-23.5-14.5T410-454q-9 0-18.5 6T374-437q-14 12-34.5 24.5T285-400ZM460-80v-190q0-8 3.5-15.5T472-299l95-95q6-6 9.5-14t3.5-17q0-10-3.5-18t-9.5-14l57-57q17 17 26.5 40t9.5 49q0 26-9.5 48T624-338l-84 84v174h-80Zm-180 0v-174l-83-84q-17-17-27-39t-10-48q0-26 10-49t27-40l57 57q-7 6-10.5 14t-3.5 18q0 9 3.5 17t9.5 14l95 95q5 6 8.5 13.5T360-270v190h-80Zm130-572Z"/>
    </Icon>
  );
});

IconMaterialRheumatology.displayName = 'OnesyIconMaterialRheumatology';

export default IconMaterialRheumatology;
