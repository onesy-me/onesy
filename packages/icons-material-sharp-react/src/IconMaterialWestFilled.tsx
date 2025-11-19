import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWestFilled = (props: IIcon) => {

  return (
    <Icon
      name='WestFilled'

      short_name='West'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-200 80-480l280-280 56 56-183 184h647v80H233l184 184-57 56Z"/>
    </Icon>
  );
};

IconMaterialWestFilled.displayName = 'OnesyIconMaterialWestFilled';

export default IconMaterialWestFilled;
