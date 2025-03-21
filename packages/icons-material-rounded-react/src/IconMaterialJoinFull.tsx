import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialJoinFull = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='JoinFull'

      short_name='JoinFull'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 17.45q-.2 0-.362-.063-.163-.062-.313-.187-1.075-.95-1.7-2.363Q9 13.425 9 12q0-1.425.625-2.838Q10.25 7.75 11.3 6.8q.15-.125.325-.2.175-.075.375-.075t.363.075q.162.075.312.2 1.075.95 1.7 2.362Q15 10.575 15 12t-.625 2.837Q13.75 16.25 12.7 17.2q-.125.125-.312.187-.188.063-.388.063ZM16 19q-.675 0-1.312-.125-.638-.125-1.238-.375 1.4-.925 2.225-2.9.825-1.975.825-3.6t-.825-3.6q-.825-1.975-2.225-2.9.6-.25 1.238-.375Q15.325 5 16 5q2.925 0 4.962 2.037Q23 9.075 23 12q0 2.925-2.038 4.962Q18.925 19 16 19Zm-8 0q-2.925 0-4.962-2.038Q1 14.925 1 12t2.038-4.963Q5.075 5 8 5q.675 0 1.312.125.638.125 1.238.375-1.4.925-2.225 2.9Q7.5 10.375 7.5 12t.825 3.6q.825 1.975 2.225 2.9-.6.25-1.238.375Q8.675 19 8 19Z"/>
    </Icon>
  );
});

IconMaterialJoinFull.displayName = 'OnesyIconMaterialJoinFull';

export default IconMaterialJoinFull;
