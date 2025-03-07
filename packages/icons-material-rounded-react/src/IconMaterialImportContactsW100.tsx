import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialImportContactsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ImportContactsW100'

      short_name='ImportContacts'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M260-318q54 0 105 12.5T466-264v-392q-44-33-98-49.5T260-722q-36 0-60.5 3.5T142-704q-12 4-17 11.5t-5 16.5v350q0 14 10 20.5t22 1.5q18-6 45-10t63-4Zm234 54q50-29 101-41.5T700-318q36 0 63 4t45 10q12 5 22-1.5t10-20.5v-350q0-9-5-16t-17-12q-33-11-57.5-14.5T700-722q-54 0-108 16.5T494-656v392Zm-14 30q-8 0-14.5-2t-12.5-5q-45-24-93.5-36.5T260-290q-28 0-55 3.5T152-274q-22 8-41-6.5T92-320v-358q0-16 8.5-29.5T124-726q32-13 66.5-18.5T260-750q59 0 115 17.5T480-682q49-33 105-50.5T700-750q35 0 69.5 5.5T836-726q15 5 23.5 18.5T868-678v358q0 25-21 38.5t-45 5.5q-25-8-50.5-11t-51.5-3q-51 0-99.5 12.5T507-241q-6 3-12.5 5t-14.5 2ZM293-501Z"/>
    </Icon>
  );
});

IconMaterialImportContactsW100.displayName = 'OnesyIconMaterialImportContactsW100';

export default IconMaterialImportContactsW100;
