import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowBackIos = (props: IIcon) => {

  return (
    <Icon
      name='ArrowBackIos'

      short_name='ArrowBackIos'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none" opacity=".87"/><path d="M17.51 3.87L15.73 2.1 5.84 12l9.9 9.9 1.77-1.77L9.38 12l8.13-8.13z"/>
    </Icon>
  );
};

IconMaterialArrowBackIos.displayName = 'OnesyIconMaterialArrowBackIos';

export default IconMaterialArrowBackIos;
