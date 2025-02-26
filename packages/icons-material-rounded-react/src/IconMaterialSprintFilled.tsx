import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSprintFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SprintFilled'

      short_name='Sprint'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M482-425 245-188q-12 12-28.5 12T188-188q-12-12-12-28.5t12-28.5l356-355H440v40q0 17-11.5 28.5T400-520q-17 0-28.5-11.5T360-560v-80q0-17 11.5-28.5T400-680h194q16 0 30.5 6t25.5 17l120 119q20 20 46.5 33.5T874-485q17 3 29.5 15.5T916-440q0 17-14 28t-31 9q-45-6-83-24t-70-49l-40-42-88 88 53 53q14 14 11.5 33.5T635-314L453-209q-14 8-30.5 4T398-223q-8-14-3.5-30.5T413-278l137-79-68-68Zm-322-15q-17 0-28.5-11.5T120-480q0-17 11.5-28.5T160-520h120q17 0 28.5 11.5T320-480q0 17-11.5 28.5T280-440H160ZM80-560q-17 0-28.5-11.5T40-600q0-17 11.5-28.5T80-640h120q17 0 28.5 11.5T240-600q0 17-11.5 28.5T200-560H80Zm699-80q-33 0-57-23.5T698-720q0-33 24-56.5t57-23.5q33 0 57 23.5t24 56.5q0 33-24 56.5T779-640Zm-619-40q-17 0-28.5-11.5T120-720q0-17 11.5-28.5T160-760h120q17 0 28.5 11.5T320-720q0 17-11.5 28.5T280-680H160Z"/>
    </Icon>
  );
});

IconMaterialSprintFilled.displayName = 'OnesyIconMaterialSprintFilled';

export default IconMaterialSprintFilled;
