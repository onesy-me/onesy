import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialContactlessOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContactlessOffW100Filled'

      short_name='ContactlessOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M588-300q5-14 9-28t7-28l-24-24-8 34q-4 17-10 34l26 12Zm-130-54q11-30 15.5-62.5T478-482l-29-29q1 8 1 15.5v15.5q0 30-4.5 59.5T432-364l26 10Zm-130-54q5-17 7.5-35.5T338-480q0-18-2.5-36.5T328-552l-26 12q3 14 5.5 29.5T310-480q0 15-2.5 30.5T302-420l26 12ZM852-68 705-215q-46 39-103 61t-122 22q-72 0-135.5-27.5T234-234q-47-47-74.5-110.5T132-480q0-68 24-127.5T223-714h23l499 499h-40L90-830l20-20L872-88l-20 20Zm-76-228L617-455q0-7 .5-13t.5-12q0-47-7.5-92.5T588-660l-26 12q14 38 21 80.5t7 85.5l-99-99q1-9-.5-16.5T487-613l-19 9-172-172q40-25 86.5-38.5T480-828q72 0 135.5 27.5T726-726q47 47 74.5 110.5T828-480q0 51-13.5 97.5T776-296Z"/>
    </Icon>
  );
});

IconMaterialContactlessOffW100Filled.displayName = 'OnesyIconMaterialContactlessOffW100Filled';

export default IconMaterialContactlessOffW100Filled;
