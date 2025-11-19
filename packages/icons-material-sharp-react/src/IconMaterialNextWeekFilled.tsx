import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNextWeekFilled = (props: IIcon) => {

  return (
    <Icon
      name='NextWeekFilled'

      short_name='NextWeek'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-120v-600h240v-160h320v160h240v600H80Zm320-600h160v-80H400v80Zm40 460 160-160-160-160-56 56 104 104-104 104 56 56Z"/>
    </Icon>
  );
};

IconMaterialNextWeekFilled.displayName = 'OnesyIconMaterialNextWeekFilled';

export default IconMaterialNextWeekFilled;
