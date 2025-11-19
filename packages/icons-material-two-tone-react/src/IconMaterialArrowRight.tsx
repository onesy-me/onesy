import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowRight = (props: IIcon) => {

  return (
    <Icon
      name='ArrowRight'

      short_name='ArrowRight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 17l5-5-5-5v10z"/>
    </Icon>
  );
};

IconMaterialArrowRight.displayName = 'OnesyIconMaterialArrowRight';

export default IconMaterialArrowRight;
