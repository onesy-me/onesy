import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialExpandLess = (props: IIcon) => {

  return (
    <Icon
      name='ExpandLess'

      short_name='ExpandLess'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z"/>
    </Icon>
  );
};

IconMaterialExpandLess.displayName = 'OnesyIconMaterialExpandLess';

export default IconMaterialExpandLess;
