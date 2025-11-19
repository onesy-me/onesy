import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowDropDown = (props: IIcon) => {

  return (
    <Icon
      name='ArrowDropDown'

      short_name='ArrowDropDown'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M7 10l5 5 5-5H7z"/>
    </Icon>
  );
};

IconMaterialArrowDropDown.displayName = 'OnesyIconMaterialArrowDropDown';

export default IconMaterialArrowDropDown;
