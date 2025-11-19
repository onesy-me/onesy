import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWest = (props: IIcon) => {

  return (
    <Icon
      name='West'

      short_name='West'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-200 80-480l280-280 56 56-183 184h647v80H233l184 184-57 56Z"/>
    </Icon>
  );
};

IconMaterialWest.displayName = 'OnesyIconMaterialWest';

export default IconMaterialWest;
