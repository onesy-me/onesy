import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCreditCardGear = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CreditCardGear'

      short_name='CreditCardGear'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m620-164-29 9q-13 4-25.5-1T546-172l-8-14q-7-12-5-26t13-23l22-19q-2-13-2-26t2-26l-22-19q-11-9-13-22.5t5-25.5l9-15q7-11 19-16t25-1l29 9q11-8 21.5-13.5T664-420l6-29q3-14 13.5-22.5T708-480h16q14 0 24.5 9t13.5 23l6 28q12 5 22.5 10.5T812-396l29-9q13-4 25.5 1t19.5 16l8 14q7 12 5 26t-13 23l-22 19q2 13 2 26t-2 26l22 19q11 9 13 22.5t-5 25.5l-9 15q-7 11-19 16t-25 1l-29-9q-11 8-21.5 13.5T768-140l-6 29q-3 14-13.5 22.5T724-80h-16q-14 0-24.5-9T670-112l-6-28q-12-5-22.5-10.5T620-164Zm96-36q33 0 56.5-23.5T796-280q0-33-23.5-56.5T716-360q-33 0-56.5 23.5T636-280q0 33 23.5 56.5T716-200Zm-556-40v-320 13-173 480Zm0-400h640v-80H160v80Zm0 480q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v158q0 18-15.5 26.5t-32.5.5q-26-12-55.5-18.5T716-560q-57 0-107.5 21.5T520-480H160v240h263q17 0 28.5 11.5T463-200q0 17-11.5 28.5T423-160H160Z"/>
    </Icon>
  );
});

IconMaterialCreditCardGear.displayName = 'OnesyIconMaterialCreditCardGear';

export default IconMaterialCreditCardGear;
