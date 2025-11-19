import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNextWeek = (props: IIcon) => {

  return (
    <Icon
      name='NextWeek'

      short_name='NextWeek'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-120v-600h240v-160h320v160h240v600H80Zm80-80h640v-440H160v440Zm240-520h160v-80H400v80ZM160-200v-440 440Zm280-60 160-160-160-160-56 56 104 104-104 104 56 56Z"/>
    </Icon>
  );
};

IconMaterialNextWeek.displayName = 'OnesyIconMaterialNextWeek';

export default IconMaterialNextWeek;
