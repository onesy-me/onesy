import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChevronRight = (props: IIcon) => {

  return (
    <Icon
      name='ChevronRight'

      short_name='ChevronRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/>
    </Icon>
  );
};

IconMaterialChevronRight.displayName = 'OnesyIconMaterialChevronRight';

export default IconMaterialChevronRight;
