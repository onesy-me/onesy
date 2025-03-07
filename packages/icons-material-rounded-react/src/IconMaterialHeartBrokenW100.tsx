import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHeartBrokenW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeartBrokenW100'

      short_name='HeartBroken'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-620q0 33 13.5 67.5T220-474q33 44 88 103.5T447-227q4 4 8.5 2.5t5.5-6.5l25-275h-54q-29.19 0-46.6-23.5Q368-553 376-582l50-175q-23-12-48.42-20.5Q352.15-786 326-786q-68.77 0-117.39 48.61Q160-688.77 160-620Zm638 0q0-68.77-48.61-117.39Q700.77-786 632-786q-17 0-33 4t-32 9l-39 119h42q29 0 46.5 23.5T625-578l-97 312q-2 6 3.5 9t10.5-2q79-81 129-136t78-94q28-39 38.5-69t10.5-62Zm-173 42Zm-249-4Zm105.04 404q-11.97 0-23.5-5Q446-188 438-196q-85-86-143.5-148T200-453.5Q164-501 148-540t-16-79.64q0-81.28 56.44-137.82Q244.87-814 326-814q53 0 94 18t30 56l-45 158q-5 18 3.56 33T432-534h82l-21 234.23q-1 7.77 6.5 8.77t9.5-6l87-281q5-18-3-33t-23-15h-82l48-144q9-27 37.5-35.5T632-814q81 0 138.5 56.44Q828-701.13 828-620q0 40.28-17 79.64t-53.5 87.86q-36.5 48.5-95 110T521-196q-7.9 9-17.95 13.5Q493-178 481.04-178Z"/>
    </Icon>
  );
});

IconMaterialHeartBrokenW100.displayName = 'OnesyIconMaterialHeartBrokenW100';

export default IconMaterialHeartBrokenW100;
