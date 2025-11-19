import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowDropDown = (props: IIcon) => {

  return (
    <Icon
      name='ArrowDropDown'

      short_name='ArrowDropDown'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-360 280-560h400L480-360Z"/>
    </Icon>
  );
};

IconMaterialArrowDropDown.displayName = 'OnesyIconMaterialArrowDropDown';

export default IconMaterialArrowDropDown;
